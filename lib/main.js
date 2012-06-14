var pageMod = require("page-mod");
var self = require("self");

pageMod.PageMod({
  include: "*.gutenberg.org",
  contentScriptWhen: 'ready',
  contentScriptFile: self.data.url("page/insert.js")
});

console.log(self.data.url("page/insert.js"));
console.log("The add-on is running.");
