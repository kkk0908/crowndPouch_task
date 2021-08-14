module.exports = {
  protocol: "http",
  routes: [
    {
      name: "article",
      path: "/article"
    }
  ],
  models: ["article"],
  autoRequireRoutes: true,
  registerDocsRoute: true
};
