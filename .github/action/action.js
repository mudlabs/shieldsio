const fs = require("fs");

const badgeName = file => file.substring(0, file.lastIndexOf("."));
const rawURL = file => `https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/${file}`;

const toBadgeBlock = (string, filename) => {
  console.log(string, filename)
  const badge_name = badgeName(filename);
  const badge = `> [![${badge_name}]](./${filename})<br/>`;
  const name = `> \`${badge_name}\`<br/>`;
  const file = `> [${filename}](./${filename})<br/><br/>`;
  return string += `${badge}${name}${file}\n`;
};

const toBadgeMarkdown = (string, filename) => {
  const name = badgeName(filename);
  const raw = rawURL(filename);
  return string += `[${name}]: https://img.shields.io/endpoint?url=${raw}\n`;
};

(async function(){
  try {
    const template = await fs.promises.readFile(".github/action/template.md", { encoding: "utf-8" });
    const all_files = await fs.promises.readdir("./badges/");
    const files = all_files.filter(file => file.split(".").pop() === "json");
    const readme = template.replace(/\{\{badges\.(?:table|markdown)\}\}/g, match => {
      switch (match) {
        case "{{badges.table}}":
          return files.reduce(toBadgeBlock);
        case "{{badges.markdown}}":
          return files.reduce(toBadgeMarkdown);
      }
    });
    
    console.log(readme);
    
    await fs.promises.writeFile("./README.md", readme);
  } catch (error) {
    core.setFailed(error);
  }
})();
