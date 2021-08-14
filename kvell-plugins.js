module.exports = {
    databasePlugins: [
        {
            resolve: "kvell-db-plugin-mongoose",
            options: {
                mongoConnectionString: "mongodb://localhost:27017/sportcafe",
                options: {},
                showConnectionMessage: true
            }
        }
    ]
};
