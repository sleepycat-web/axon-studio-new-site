module.exports = {
  siteUrl: "https://axonstudio.tech",
  generateRobotsTxt: true, // optional, if you need to generate robots.txt as well
  sitemap: {
    priorities: {
      "/": 1.0,
      "/about": 0.8,
      "/contact": 0.8,
      "/privacy": 0.5,
      "/refund": 0.5,
      "/terms": 0.5,
    },
  },
};
