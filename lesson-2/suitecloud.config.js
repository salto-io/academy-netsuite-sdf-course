console.log("---before---");
module.exports = {
	defaultProjectFolder: "src",
	commands: {
    "file:create": {
      beforeExecuting: (options) => {
        console.log("We are about to create a File ...");
        return options;
      }
    },
    "project:deploy": {
      projectFolder: "dist"
    }
  }
};
console.log("---after---");
