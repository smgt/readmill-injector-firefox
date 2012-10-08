var pageMod = require("page-mod");
var self = require("self");
var data = self.data;

pageMod.PageMod({
  include: [
    /https?:\/\/.*\.?gutenberg\.org\/.*/,
    "http://www.feedbooks.com*"
  ],
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("shared/main.js")]
});
