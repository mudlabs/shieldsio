const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs")

const badgeName = file => file.substring(0, file.lastIndexOf("."));
const rawURL = file => `https://raw.githubusercontents.com/mudlabs/shields.io.endpoint/badges/${file}`;
const badgeMarkdown = name => url => `[${name}]: https://img.shields.io/endpoint?url=${url}\n`;

const toBadgeTable = (string, filename) => {
  const name = badgeName(filename);
  return string += `| \`${name}\` | ![${name}](./${filename}) | [${filename}](./${filename}) |\n`;
};

const toBadgeMarkdown = (string, filename) => {
  const name = badgeName(filename);
  const url = rawURL(filename);
  const markdown = badgeMarkdown(name)(url);
  return string += markdown;
};

(async function(){
  try {
    // 1. get the readme template
    const template = await fs.promises.readFile(".github/action/template.md", { encoding: "utf-8" });
    // 2. get all the json files in the root directory
    const all_files = await fs.promises.readdir("./");
    const files = all_files.filter(file => file.split(".").pop() === "json");
    // 3. update the badges table with the current directory badges
    // 4. update the badges markdown with the current directory badges
    const readme = template.replace(/\{\{\S+\}\}/, match => {
      let result;
      switch (match) {
        case "{{badges.table}}":
          result = files.reduce(toBadgeTable, `| Name | Badge | File |\n| --- | --- | --- |\n`);
          break;
        case "{{badges.markdown}}":
          result = files.reduce(toBadgeMarkdown);
          break;
      }
      return result;
    });
    
    await fs.promises.writeFile("./README.md", readme);
  } catch (error) {
    core.setFailed(error);
  }
})();
