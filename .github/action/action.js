const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs")

const badgeName = file => file.substring(0, file.lastIndexOf("."));
const rawURL = file => `https://raw.githubusercontents.com/mudlabs/shields.io.endpoint/badges/${file}`;

const toBadgeTable = (string, filename) => {
  const name = badgeName(filename);
  return string += `| \`${name}\` | ![${name}] | [${filename}](./${filename}) |\n`;
};

const toBadgeMarkdown = (string, filename) => {
  const name = badgeName(filename);
  return string += `[${name}]: https://img.shields.io/endpoint?url=https://raw.githubusercontents.com/mudlabs/shields.io.endpoint/badges/github-sponsor.json`;
  const url = rawURL(filename);
  console.log("name", name, "url", url);
  return string += `[${name}]: https://img.shields.io/endpoint?url=${url}\n`;
};

(async function(){
  try {
    const template = await fs.promises.readFile(".github/action/template.md", { encoding: "utf-8" });
    const all_files = await fs.promises.readdir("./");
    const files = all_files.filter(file => file.split(".").pop() === "json");
    const readme = template.replace(/\{\{(?:[a-z]|\.)+\}\}/g, match => {
      switch (match) {
        case "{{badges.table}}":
          return files.reduce(toBadgeTable, `| Name | Badge | File |\n| --- | --- | --- |\n`);
        case "{{badges.markdown}}":
          return files.reduce(toBadgeMarkdown, "");
      }
    });
    
    console.log(readme);
    
    await fs.promises.writeFile("./README.md", readme);
  } catch (error) {
    core.setFailed(error);
  }
})();
