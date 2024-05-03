module.exports = {
  apps: [
    {
      name: "appOne",
      script: "./appOne/appOne.js",
      watch: true, // Reload when a file is modified
      env: {
        NODE_ENV: "development",
      },
      node_args: "--inspect",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "appTwo",
      script: "./appTwo/appTwo.js",
      watch: true,
      node_args: "--inspect",
      exec_mode: "cluster",
    },
    {
      name: "appThree",
      script: "./appThree/appThree.js",
      watch: true,
      node_args: "--inspect=0.0.0.0:6667",
      // exec_mode: "cluster",
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
