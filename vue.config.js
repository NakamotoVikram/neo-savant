module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/main.scss";`
            }
        }
    },
    devServer: {
        port: 3000
    }
};