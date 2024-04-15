module.exports = {
  apps: [
    {
      name: "appOne",
      script: "./appOne/appOne.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      node_args: "--inspect=localhost:6666",
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "appTwo",
      script: "./appTwo/appTwo.js",
      watch: true,
    },
    {
      name: "appThree",
      script: "./appThree/appThree.js",
      watch: true,
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
