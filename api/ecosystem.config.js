module.exports = {
  apps : [{
    name: 'API Server',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      //these would be your github account and assume it is a public repo.
      user : 'node',
      host : 'url',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/node/apps/NodeProgram/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
