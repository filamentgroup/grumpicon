module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["templates/example-html.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "		\n		<pre><code>";
  if (helper = helpers.cssprefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cssprefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</code></pre><div class=\"";
  if (helper = helpers.cssprefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cssprefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: ";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px; height: ";
  if (helper = helpers.height) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.height); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px\"></div><hr/>\n";
  return buffer;
  });

this["JST"]["templates/file-previews.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>Export Preview</h3>\n\n<h4>";
  if (helper = helpers.datasvgcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datasvgcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n<pre id=\"svg-css-results\"></pre>\n\n<h4>";
  if (helper = helpers.datapngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datapngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n<pre id=\"png-css-results\"></pre>\n\n<h4>";
  if (helper = helpers.urlpngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.urlpngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n<pre id=\"fallback-css-results\"></pre>\n\n<h4>";
  if (helper = helpers.loadersnippet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.loadersnippet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n<pre id=\"js-results\"></pre>\n\n<h4>preview.html</h4>\n<pre id=\"preview-html\"></pre>";
  return buffer;
  });

this["JST"]["templates/preferences.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n	<p class=\"from-storage\">Grumpiconfig saved in <code>localStorage</code>. <a href=\"#\" class=\"reset\">Reset to factory setting</a>.</p>\n";
  }

  buffer += "<div class=\"input-box\"><label>datasvgcss</label> <input type=\"text\" name=\"datasvgcss\" value=\"";
  if (helper = helpers.datasvgcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datasvgcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>datapngcss</label> <input type=\"text\" name=\"datapngcss\" value=\"";
  if (helper = helpers.datapngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datapngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>urlpngcss</label> <input type=\"text\" name=\"urlpngcss\" value=\"";
  if (helper = helpers.urlpngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.urlpngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>previewhtml</label> <input type=\"text\" name=\"previewhtml\" value=\"";
  if (helper = helpers.previewhtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.previewhtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>loadersnippet</label> <input type=\"text\" name=\"loadersnippet\" value=\"";
  if (helper = helpers.loadersnippet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.loadersnippet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>customselectors</label> <input type=\"text\" name=\"customselectors\" value=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.customselectors), options) : helperMissing.call(depth0, "json", (depth0 && depth0.customselectors), options)))
    + "\" /></div>\n<div class=\"input-box\"><label>cssprefix</label> <input type=\"text\" name=\"cssprefix\" value=\"";
  if (helper = helpers.cssprefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cssprefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>colors<a href=\"#color-note\">*</a></label> <input type=\"text\" name=\"colors\" value=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.colors), options) : helperMissing.call(depth0, "json", (depth0 && depth0.colors), options)))
    + "\" /></div>\n<div class=\"input-box\"><label>dynamicColorOnly</label> <input type=\"text\" name=\"dynamicColorOnly\" value=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dynamicColorOnly), options) : helperMissing.call(depth0, "json", (depth0 && depth0.dynamicColorOnly), options)))
    + "\" /></div>\n<div class=\"input-box\"><label>pngfolder</label> <input type=\"text\" name=\"pngfolder\" value=\"";
  if (helper = helpers.pngfolder) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pngfolder); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>pngpath</label> <input type=\"text\" name=\"pngpath\" value=\"";
  if (helper = helpers.pngpath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pngpath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n\n<div style=\"clear:both\"></div>\n\n<label>template</label>\n<textarea name=\"template\"rows=\"5\">";
  if (helper = helpers.template) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.template); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n\n\n<div style=\"clear:both\"></div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fromStorage), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<p>See the <a href=\"https://github.com/filamentgroup/grunticon#options\">grunticon options</a> for the deets.</p>\n<p id=\"color-note\"><small>* colors must be set before dropping SVGs.</small></p>\n\n<a href=\"#close\" class=\"close\" title=\"Close\">Close</a>";
  return buffer;
  });

this["JST"]["templates/script-html.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "&lt;script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"";
  if (helper = helpers.datasvgcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datasvgcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\", \"";
  if (helper = helpers.datapngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datapngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\", \"";
  if (helper = helpers.urlpngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.urlpngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ] );\n&lt;/script>\n&lt;noscript>&lt;link href=\"";
  if (helper = helpers.urlpngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.urlpngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" rel=\"stylesheet\">&lt;/noscript>\n";
  return buffer;
  });

this["JST"]["templates/svg-icons.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div>\n	<div class=\"meta\">\n		<h5>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n		<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.file)),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bytes<p>\n	</div>\n	<img src=\"";
  if (helper = helpers.svgDataUri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.svgDataUri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" />\n	<a href='#close' class='close' title='Remove file' data-file='";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>Remove</a>\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["node_modules/grunt-grunticon/example/default-css.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ",";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.customselectors), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  if (helper = helpers.prefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " {\n	background-image: url('";
  if (helper = helpers.datauri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.datauri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\n	background-repeat: no-repeat;\n}\n";
  return buffer;
  });

this["JST"]["node_modules/grunt-grunticon/example/preview-custom.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			grunticon([\"";
  if (helper = helpers.svg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.svg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\", \"";
  if (helper = helpers.png) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.png); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\", \"";
  if (helper = helpers.fallback) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fallback); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"], grunticon.svgLoadedCallback);\n		</script>\n		<noscript><link href=\"";
  if (helper = helpers.fallback) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fallback); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" rel=\"stylesheet\"></noscript>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['with'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<pre><code>";
  if (helper = helpers.prefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</code></pre><div ";
  if (helper = helpers.selectorType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectorType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "=\"";
  if (helper = helpers.selectorString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectorString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: ";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px; height: ";
  if (helper = helpers.height) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.height); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\" ></div><hr/>\n			";
  return buffer;
  }

  buffer += "<!doctype HTML>\n<html>\n	<head>\n		<title>Icons Preview!</title>\n		<meta charset=\"utf-8\">\n		<style>\n			body {\n				background-image: linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(transparent 75%, #eee 75%), linear-gradient(transparent 75%, #eee 75%);\n				width: auto;\n				background-size: 10px 10px;\n			}\n		</style>\n		<script>\n			";
  if (helper = helpers.loaderText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.loaderText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  if (helper = helpers.embedText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.embedText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.cssFiles), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</head>\n	<body>\n\n		<h1>CUSTOM PREVIEW - you can change this in the previewTemplate option</h1>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.icons), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		<h2 id=\"embedded-svg-option\">Embedded SVG option</h2>\n		<p>(The <code>data-grunticon-embed</code> attribute tells grunticon to inject SVG inline):</p>\n\n		<pre><code>icon-burger:</code></pre><div class=\"icon-burger\" data-grunticon-embed style=\"width: ";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px; height: ";
  if (helper = helpers.height) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.height); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\" ></div><hr/>\n\n		<style>\n			.icon-burger {\n				width: 32px;\n				height: 30px;\n				display: inline-block;\n			}\n			  .icon-burger.alt .cheese {\n		                fill: red;\n		            }\n				 .icon-burger.alt .buns {\n		                fill: orange;\n		            }\n				  .icon-burger.alt .burger {\n		                fill: yellow;\n		            }\n		 		 .icon-burger.alt .lettuce {\n		                fill: green;\n		            }\n\n		</style>\n\n		<pre><code>icon-burger (styled variation):</code></pre><div class=\"icon-burger alt\" data-grunticon-embed></div><hr/>\n\n\n\n</body>\n</html>\n";
  return buffer;
  });

this["JST"]["node_modules/grunt-grunticon/example/preview.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			grunticon([\"";
  if (helper = helpers.svg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.svg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\", \"";
  if (helper = helpers.png) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.png); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\", \"";
  if (helper = helpers.fallback) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fallback); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"]);\n		</script>\n		<noscript><link href=\"";
  if (helper = helpers.fallback) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fallback); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" rel=\"stylesheet\"></noscript>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['with'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<pre><code>";
  if (helper = helpers.prefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</code></pre><div ";
  if (helper = helpers.selectorType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectorType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "=\"";
  if (helper = helpers.selectorString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectorString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: ";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px; height: ";
  if (helper = helpers.height) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.height); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;\" ></div><hr/>\n			";
  return buffer;
  }

  buffer += "<!doctype HTML>\n<html>\n	<head>\n		<title>Icons Preview!</title>\n		<meta charset=\"utf-8\">\n		<style>\n			body {\n				background-image: linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(transparent 75%, #eee 75%), linear-gradient(transparent 75%, #eee 75%);\n				width: auto;\n				background-size: 10px 10px;\n			}\n		</style>\n		<script>\n			";
  if (helper = helpers.loaderText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.loaderText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  if (helper = helpers.embedText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.embedText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.cssFiles), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</head>\n	<body>\n\n		<h1>PREVIEW - you can change this in the previewTemplate option</h1>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.icons), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</body>\n</html>\n";
  return buffer;
  });

this["JST"]["node_modules/grunt-grunticon/example/output/grunticon.loader.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n\n(function(e){function n(n,t,o,a){\"use strict\";var i=e.document.createElement(\"link\"),r=t||e.document.getElementsByTagName(\"script\")[0],d=e.document.styleSheets;return i.rel=\"stylesheet\",i.href=n,i.media=\"only x\",a&&(i.onload=a),r.parentNode.insertBefore(i,r),i.onloadcssdefined=function(e){for(var t,o=0;d.length>o;o++)d[o].href&&d[o].href.indexOf(n)>-1&&(t=!0);t?e():setTimeout(function(){i.onloadcssdefined(e)})},i.onloadcssdefined(function(){i.media=o||\"all\"}),i}function t(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}var o=function(a,i){\"use strict\";if(a&&3===a.length){var r=e.Image,d=!(!document.createElementNS||!document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||e.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")||-1!==navigator.userAgent.indexOf(\"Series40\")),c=new r;c.onerror=function(){o.method=\"png\",o.href=a[2],n(a[2])},c.onload=function(){var e=1===c.width&&1===c.height,r=a[e&&d?0:e?1:2];o.method=e&&d?\"svg\":e?\"datapng\":\"png\",o.href=r,t(n(r),i)},c.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",document.documentElement.className+=\" grunticon\"}};o.loadCSS=n,o.onloadCSS=t,e.grunticon=o})(this);(function(e,n){\"use strict\";var t=n.document,o=\"grunticon:\",r=function(e){if(t.attachEvent?\"complete\"===t.readyState:\"loading\"!==t.readyState)e();else{var n=!1;t.addEventListener(\"readystatechange\",function(){n||(n=!0,e())},!1)}},a=function(e){return n.document.querySelector('link[href$=\"'+e+'\"]')},i=function(e){var n,t,r,a,i,c,d={};if(n=e.sheet,!n)return d;t=n.cssRules?n.cssRules:n.rules;for(var s=0;t.length>s;s++)r=t[s].cssText,a=o+t[s].selectorText,i=r.split(\");\")[0].match(/US\\-ASCII\\,([^\"']+)/),i&&i[1]&&(c=decodeURIComponent(i[1]),d[a]=c);return d},c=function(e){var n,r,a;r=\"data-grunticon-embed\";for(var i in e){a=i.slice(o.length);try{n=t.querySelectorAll(a+\"[\"+r+\"]\")}catch(c){continue}if(n.length)for(var d=0;n.length>d;d++)n[d].innerHTML=e[i],n[d].style.backgroundImage=\"none\",n[d].removeAttribute(r)}return n},d=function(n){\"svg\"===e.method&&r(function(){c(i(a(e.href))),\"function\"==typeof n&&n()})};e.embedIcons=c,e.getCSS=a,e.getIcons=i,e.ready=r,e.svgLoadedCallback=d,e.embedSVG=d})(grunticon,this);";
  });

return this["JST"];

};