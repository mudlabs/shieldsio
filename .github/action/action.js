const core = require("@actions/core");
const github = require("@actions/github");

(async function(){
  try {
    // 1. get the readme template
    // 2. get all the json files in the root directory
    // 3. update the badges table with the current directory badges
    // 4. update the badges markdown with the current directory badges
  } catch (error) {
    core.setFailed(error);
  }
})();
