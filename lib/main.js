var pageMod = require("page-mod");
var self = require("self");
var data = self.data;

pageMod.PageMod({
  include: "*",
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("shared/button.js"), data.url("shared/generic.js")]
});

pageMod.PageMod({
  include: ["*.gutenberg.org"],
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("shared/button.js"), data.url("shared/gutenberg.js")]
});

pageMod.PageMod({
  include: ["*.feedbooks.com"],
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("shared/button.js"), data.url("shared/feedbooks.js")]
});
