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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectors), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.cssprefix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " {\n	background-image: url('";
  if (helper = helpers.svgDataUri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.svgDataUri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\n	background-repeat: no-repeat;\n}\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ", ";
  return buffer;
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectors), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.cssprefix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " {\n	background-image: url('";
  if (helper = helpers.pngDataUri) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pngDataUri); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\n	background-repeat: no-repeat;\n}\n";
  return buffer;
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectors), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.cssprefix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " {\n	background-image: url('"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.pngpath)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".png');\n	background-repeat: no-repeat;\n}\n";
  return buffer;
  }

function program8(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		&lt;pre>&lt;code>"
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.cssprefix)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":&lt;/code>&lt;/pre>\n		&lt;div class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.cssprefixnodot)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
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
    + "px\">&lt;/div>\n		&lt;hr/>\n		";
  return buffer;
  }

  buffer += "<h3>Export Preview</h3>\n\n<h4>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.datasvgcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n\n<pre id=\"svg-css-results\">";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</pre>\n\n<h4>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.datapngcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n<pre id=\"png-css-results\">";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</pre>\n\n<h4>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.urlpngcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n<pre id=\"fallback-css-results\">";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</pre>\n\n<h4>preview.html</h4>\n<pre id=\"preview-html\">\n&lt;!doctype HTML>\n&lt;html>\n	&lt;head>\n		&lt;title>Icons Preview!&lt;/title>\n		&lt;script>\n			/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\n			window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\n			grunticon( [ \""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.datasvgcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\", \""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.datapngcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\", \""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.urlpngcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ] );\n		&lt;/script>\n		&lt;noscript>&lt;link href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.prefs)),stack1 == null || stack1 === false ? stack1 : stack1.urlpngcss)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" rel=\"stylesheet\">&lt;/noscript>\n	&lt;/head>\n	&lt;body>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	&lt;/body>\n&lt;/html>\n</pre>";
  return buffer;
  });

this["JST"]["templates/preferences.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


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
    + "\" /></div>\n<div class=\"input-box\"><label>customselectors</label> <input type=\"text\" name=\"customselectors\" value=\"";
  if (helper = helpers.customselectors) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customselectors); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>cssprefix</label> <input type=\"text\" name=\"cssprefix\" value=\"";
  if (helper = helpers.cssprefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cssprefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>colors<a href=\"#color-note\">*</a></label> <input type=\"text\" name=\"colors\" value=\"";
  if (helper = helpers.colors) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.colors); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>pngfolder</label> <input type=\"text\" name=\"pngfolder\" value=\"";
  if (helper = helpers.pngfolder) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pngfolder); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"input-box\"><label>pngpath</label> <input type=\"text\" name=\"pngpath\" value=\"";
  if (helper = helpers.pngpath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pngpath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n\n<div style=\"clear:both\"></div>\n\n<p>See the <a href=\"https://github.com/filamentgroup/grunticon#options\">grunticon options</a> for the deets.</p>\n<p id=\"color-note\"><small>* colors must be set before dropping SVGs.</small></p>\n\n<a href='#close' class='close' title='Close'>Close</a>";
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
    + "\" ] );\n&lt;/script>\n&lt;noscript>link href=\"";
  if (helper = helpers.urlpngcss) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.urlpngcss); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" rel=\"stylesheet\">&lt;/noscript>";
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