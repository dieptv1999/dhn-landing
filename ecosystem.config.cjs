module.exports = {
    apps: [
        {
            name: 'dhn-landing',
            exec_mode: 'cluster',
            instances: '1', // Or a number of instances
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
        }
    ]
}