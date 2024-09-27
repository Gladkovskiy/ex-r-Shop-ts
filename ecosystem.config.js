module.exports = {
  apps: [
    {
      name: 'shop_server',
      script: './dist/index.js',
      instances: '3',
      exec_mode: 'cluster',
      wait_ready: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
