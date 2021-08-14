module.exports = {
  protocol: "http",
  routes: [
    {
      name: "article",
      path: "/article"
    },
    {
      name: "cities",
      path: "/cities"
    }
  ],
  models: ["article", "cities"],
  autoRequireRoutes: true,
  registerDocsRoute: true
};
