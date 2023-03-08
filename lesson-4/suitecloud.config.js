import linter from 'your-linter';
import tester from 'your-test-framework';
import minifier from 'your-minifier';
import slack from '@slack/api';

module.exports = {
	defaultProjectFolder: "src",
	commands: {
    "project:deploy": {
      projectFolder: "dist",
      beforeExecuting: (options) => {
        linter.run();
        tester.run();
        minifier.run();

        return options;
      },
      onCompletion: (options) => {
        slack.sendMessage("#deployments", "Deployment success");
      },
      onError: (options) => {
        slack.sendMessage("#deployments", "Deployment failed");
      }
    },
    "project:validate": {
      beforeExecuting: (options) => {
        options.arguments.server = true;
        options.arguments.accountspecificvalues = "WARNING";
        return options;
      }
    }
  }
};
