module.exports = {
 apps : [
          {
            name: "dev",
            script: "npm",
            args: "run dev"
          },
          {
            name: "start",
            script: "npm",
            args: "run start"
          }
        ],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
