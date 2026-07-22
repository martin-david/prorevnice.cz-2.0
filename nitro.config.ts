export default {
  presets: ["static"],
  prerender: {
    crawlLinks: true,
    routes: ["/", "/kandidati", "/hodnoceni", "/program", "/clanky"],
  },
};



