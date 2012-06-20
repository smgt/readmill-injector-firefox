var pageMod = require("page-mod");
var self = require("self");

pageMod.PageMod({
  include: [
    /https?:\/\/.*\.?gutenberg\.org\/.*/,
    "http://www.feedbooks.com*"
  ],
  contentScriptWhen: 'ready',
  contentScriptFile: self.data.url("inject.js")
});
