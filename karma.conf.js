module.exports = function(config) {
    config.set({
        files: [
        ],
        exclude: [
        ],
        preprocessors: {
        },
        plugins: [
            "karma-jasmine",
            "karma-chrome-launcher"
        ],
        frameworks: [
            "jasmine"
        ],
        reporters: [
            "progress"
        ],
        browsers: ["Chrome"],
        proxies: {
            '/assets/': 'http://localhost:8080/assets/'
        },
        port: 9876,
        runnerPort: 9100,
        reportSlowerThan: 500,
        captureTimeout: 30000,
        colors: true,
        autoWatch: false,
        singleRun: false,
        logLevel: config.LOG_INFO
    });
};
