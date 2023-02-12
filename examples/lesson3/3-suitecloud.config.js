console.log("before");
module.exports = {
  defaultProjectFolder: "src",
  commands: {
    "project:deploy": {
      projectFolder: "dist"
    },
    "project:validate": {
      beforeExecuting: (options) => {
        console.log("Validating the project ...");
        return options;
      }
    }
  }
};
console.log("after");
