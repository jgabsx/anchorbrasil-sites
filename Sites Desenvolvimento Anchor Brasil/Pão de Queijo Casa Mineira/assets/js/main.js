/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});

/*!

Name: Instagram Lite
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: January 14, 2014
Licensed under the MIT license

*/
!function(t){t.fn.instagramLite=function(e){if(!this.length)return this;plugin=this,plugin.defaults={accessToken:null,limit:null,list:!0,videos:!1,urls:!1,captions:!1,date:!1,likes:!1,comments_count:!1,error:function(){},success:function(){}};var i=t.extend({},plugin.defaults,e),s=t(this),a=function(t){for(var e=t.split(" "),i="",s=0;s<e.length;s++){var a;if("@"==e[s][0]){var o='<a href="http://twitter.com/'+e[s].replace("@","").toLowerCase()+'" target="_blank">'+e[s]+"</a>";a=o}else if("#"==e[s][0]){var o='<a href="http://twitter.com/hashtag/'+e[s].replace("#","").toLowerCase()+'" target="_blank">'+e[s]+"</a>";a=o}else a=e[s];i+=a+" "}return i},o=function(t){for(var e=0;e<t.length;e++){var o,n=t[e];if("image"===n.type||!i.videos){if(o='<div class="il-container"><div class="il-photo__img wow animated fadeIn" style="background-image:url('+n.images.standard_resolution.url+')" data-filter="'+n.filter+'" />',i.urls&&(o='<a href="'+n.link+'" target="_blank">'+o+"</a>"),(i.captions||i.date||i.likes||i.comments_count)&&(o+='<div class="il-photo__meta">'),i.captions&&n.caption&&(o+='<div class="il-photo__caption" data-caption-id="'+n.caption.id+'">'+a(n.caption.text)+"</div>"),i.date){var l=new Date(1e3*n.created_time),r=l.getDate(),c=l.getMonth()+1,d=l.getFullYear();l.getHours(),l.getMinutes(),l.getSeconds();l=c+"/"+r+"/"+d,o+='<div class="il-photo__date">'+l+"</div>"}i.likes&&(o+='<div class="il-photo__likes">'+n.likes.count+"</div>"),i.comments_count&&n.comments&&(o+='<div class="il-photo__comments">'+n.comments.count+"</div>"),(i.captions||i.date||i.likes||i.comments_count)&&(o+="</div></div>")}if("video"===n.type&&i.videos&&n.videos){var u;n.videos.standard_resolution?u=n.videos.standard_resolution.url:n.videos.low_resolution?u=n.videos.low_resolution.url:n.videos.low_bandwidth&&(u=n.videos.low_bandwidth.url),o='<video poster="'+n.images.standard_resolution.url+'" controls>',o+='<source src="'+u+'" type="video/mp4;"></source>',o+="</video>"}i.list&&o&&(o='<li class="il-item" data-instagram-id="'+n.id+'">'+o+"</li>"),""!==o&&s.append(o)}},n=function(){if(i.accessToken){var e="https://api.instagram.com/v1/users/self/media/recent/?access_token="+i.accessToken+"&count="+i.limit;t.ajax({type:"GET",url:e,dataType:"jsonp",success:function(t){200===t.meta.code&&t.data.length?(o(t.data),i.success.call(this)):i.error.call(this)},error:function(){i.error.call(this)}})}};n()}}(jQuery);

/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
    byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
    r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
    display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
    this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function(n,e,s){function o(n,e){return typeof n===e}function a(){var n,e,s,a,i,l,r;for(var c in f)if(f.hasOwnProperty(c)){if(n=[],e=f[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)l=n[i],r=l.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),t.push((a?"":"no-")+r.join("-"))}}function i(n){var e=r.className,s=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),c?r.className.baseVal=e:r.className=e)}var t=[],f=[],l={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){f.push({name:n,fn:e,options:s})},addAsyncTest:function(n){f.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var r=e.documentElement,c="svg"===r.nodeName.toLowerCase();a(),i(t),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function (a, b, c, d) {
    function e(b, c) {
        this.settings = null,
            this.options = a.extend({}, e.Defaults, c),
            this.$element = a(b),
            this._handlers = {},
            this._plugins = {},
            this._supress = {},
            this._current = null,
            this._speed = null,
            this._coordinates = [],
            this._breakpoint = null,
            this._width = null,
            this._items = [],
            this._clones = [],
            this._mergers = [],
            this._widths = [],
            this._invalidated = {},
            this._pipe = [],
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            },
            this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            },
            a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)),
            a.each(e.Plugins, a.proxy(function (a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)),
            a.each(e.Workers, a.proxy(function (b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)),
            this.setup(),
            this.initialize()
    }
    e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        },
        e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        },
        e.Type = {
            Event: "event",
            State: "state"
        },
        e.Plugins = {},
        e.Workers = [{
            filter: ["width", "settings"],
            run: function () {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e),
                    a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;)
                    c = this._mergers[d],
                    c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                    a.items.merge = c > 1 || a.items.merge,
                    f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g--;)
                    b.push(this.normalize(b.length / 2, !0)),
                    h += c[b[b.length - 1]][0].outerHTML,
                    b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                    i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b,
                    a(h).addClass("cloned").appendTo(this.$stage),
                    a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)
                    d = f[c - 1] || 0,
                    e = this._widths[this.relative(c)] + this.settings.margin,
                    f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;)
                        a.css.width = this._widths[this.relative(b)],
                        d.eq(b).css(a.css);
                else
                    c && (a.css.width = a.items.width,
                        d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0,
                    a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
                    this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0,
                    d = this._coordinates.length; c < d; c++)
                    a = this._coordinates[c - 1] || 0,
                    b = Math.abs(this._coordinates[c]) + f * e,
                    (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"),
                    this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                    this.settings.center && (this.$stage.children(".center").removeClass("center"),
                        this.$stage.children().eq(this.current()).addClass("center"))
            }
        }],
        e.prototype.initialize = function () {
            if (this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
                this.settings.autoWidth && !this.is("pre-loading")) {
                var b, c, e;
                b = this.$element.find("img"),
                    c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
                    e = this.$element.children(c).width(),
                    b.length && e <= 0 && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass),
                this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized")
        },
        e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function (a) {
                        a <= b && a > d && (d = Number(a))
                    }),
                    e = a.extend({}, this.options, c[d]),
                    "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                    delete e.responsive,
                    e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options),
                this.trigger("change", {
                    property: {
                        name: "settings",
                        value: e
                    }
                }),
                this._breakpoint = d,
                this.settings = e,
                this.invalidate("settings"),
                this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                })
        },
        e.prototype.optionsLogic = function () {
            this.settings.autoWidth && (this.settings.stagePadding = !1,
                this.settings.merge = !1)
        },
        e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
                this.trigger("prepared", {
                    content: c.data
                }),
                c.data
        },
        e.prototype.update = function () {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
                    return this[a]
                }, this._invalidated), e = {}; b < c;)
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
                b++;
            this._invalidated = {},
                !this.is("valid") && this.enter("valid")
        },
        e.prototype.width = function (a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        },
        e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed")
        },
        e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer),
                this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        },
        e.prototype.onResize = function () {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
                    !1) : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))))
        },
        e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        },
        e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
                    d = {
                        x: d[16 === d.length ? 12 : 4],
                        y: d[16 === d.length ? 13 : 5]
                    }) : (d = this.$stage.position(),
                    d = {
                        x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                        y: d.top
                    }),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
                    this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                this._drag.time = (new Date).getTime(),
                this._drag.target = a(b.target),
                this._drag.stage.start = d,
                this._drag.stage.current = d,
                this._drag.pointer = this.pointer(b),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
                    var d = this.difference(this._drag.pointer, this.pointer(b));
                    a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
                        Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
                            this.enter("dragging"),
                            this.trigger("drag"))
                }, this)))
        },
        e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(),
                this.settings.loop ? (b = this.coordinates(this.minimum()),
                    c = this.coordinates(this.maximum() + 1) - b,
                    f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
                    c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
                    d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
                    f.x = Math.max(Math.min(f.x, b + d), c + d)),
                this._drag.stage.current = f,
                this.animate(f.x))
        },
        e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    this._drag.direction = f,
                    (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
                        return !1
                    })),
                this.is("dragging") && (this.leave("dragging"),
                    this.trigger("dragged"))
        },
        e.prototype.closest = function (b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
                    return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                        d === -1
                }, this)),
                this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
                d
        },
        e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"),
                    this.trigger("translate")),
                a.support.transform3d && a.support.transition ? this.$stage.css({
                    transform: "translate3d(" + b + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s"
                }) : c ? this.$stage.animate({
                    left: b + "px"
                }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: b + "px"
                })
        },
        e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0
        },
        e.prototype.current = function (a) {
            if (a === d)
                return this._current;
            if (0 === this._items.length)
                return d;
            if (a = this.normalize(a),
                this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)),
                    this._current = a,
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
            }
            return this._current
        },
        e.prototype.invalidate = function (b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0,
                    this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b
                })
        },
        e.prototype.reset = function (a) {
            a = this.normalize(a),
                a !== d && (this._speed = 0,
                    this._current = a,
                    this.suppress(["translate", "translated"]),
                    this.animate(this.coordinates(a)),
                    this.release(["translate", "translated"]))
        },
        e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
                a
        },
        e.prototype.relative = function (a) {
            return a -= this._clones.length / 2,
                this.normalize(a, !0)
        },
        e.prototype.maximum = function (a) {
            var b, c, d, e = this.settings,
                f = this._coordinates.length;
            if (e.loop)
                f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length,
                    c = this._items[--b].width(),
                    d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin,
                        !(c > d));)
                ;
                f = b + 1
            } else
                f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2),
                Math.max(f, 0)
        },
        e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2
        },
        e.prototype.items = function (a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0),
                this._items[a])
        },
        e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
                this._mergers[a])
        },
        e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function (a, b) {
                return f(b)
            }) : a.map(this._clones, function (a, c) {
                return a === b ? f(c) : null
            })
        },
        e.prototype.speed = function (a) {
            return a !== d && (this._speed = a),
                this._speed
        },
        e.prototype.coordinates = function (b) {
            var c, e = 1,
                f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
                        f = b + 1),
                    c = this._coordinates[b],
                    c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
                c = Math.ceil(c))
        },
        e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        },
        e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
                    a = c + e,
                    d = ((a - h) % g + g) % g + h,
                    d !== a && d - e <= i && d - e > 0 && (c = d - e,
                        a = d,
                        this.reset(c))) : this.settings.rewind ? (i += 1,
                    a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.$element.is(":visible") && this.update()
        },
        e.prototype.next = function (a) {
            a = a || !1,
                this.to(this.relative(this.current()) + 1, a)
        },
        e.prototype.prev = function (a) {
            a = a || !1,
                this.to(this.relative(this.current()) - 1, a)
        },
        e.prototype.onTransitionEnd = function (a) {
            if (a !== d && (a.stopPropagation(),
                    (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
                return !1;
            this.leave("animating"),
                this.trigger("translated")
        },
        e.prototype.viewport = function () {
            var d;
            return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
                d
        },
        e.prototype.replace = function (b) {
            this.$stage.empty(),
                this._items = [],
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b.filter(function () {
                    return 1 === this.nodeType
                }).each(a.proxy(function (a, b) {
                    b = this.prepare(b),
                        this.$stage.append(b),
                        this._items.push(b),
                        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                }, this)),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items")
        },
        e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0),
                b = b instanceof jQuery ? b : a(b),
                this.trigger("add", {
                    content: b,
                    position: c
                }),
                b = this.prepare(b),
                0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
                    0 !== this._items.length && this._items[c - 1].after(b),
                    this._items.push(b),
                    this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
                    this._items.splice(c, 0, b),
                    this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", {
                    content: b,
                    position: c
                })
        },
        e.prototype.remove = function (a) {
            a = this.normalize(a, !0),
                a !== d && (this.trigger("remove", {
                        content: this._items[a],
                        position: a
                    }),
                    this._items[a].remove(),
                    this._items.splice(a, 1),
                    this._mergers.splice(a, 1),
                    this.invalidate("items"),
                    this.trigger("removed", {
                        content: null,
                        position: a
                    }))
        },
        e.prototype.preloadAutoWidthImages = function (b) {
            b.each(a.proxy(function (b, c) {
                this.enter("pre-loading"),
                    c = a(c),
                    a(new Image).one("load", a.proxy(function (a) {
                        c.attr("src", a.target.src),
                            c.css("opacity", 1),
                            this.leave("pre-loading"),
                            !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        },
        e.prototype.destroy = function () {
            this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                a(c).off(".owl.core"),
                this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer),
                    this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins)
                this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        },
        e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c
            }
        },
        e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        e.prototype.trigger = function (b, c, d, f, g) {
            var h = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                i = a.camelCase(a.grep(["on", b, d], function (a) {
                    return a
                }).join("-").toLowerCase()),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, h, c));
            return this._supress[b] || (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j)
                    }),
                    this.register({
                        type: e.Type.Event,
                        name: b
                    }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
        },
        e.prototype.enter = function (b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0),
                    this._states.current[b]++
            }, this))
        },
        e.prototype.leave = function (b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
                this._states.current[b]--
            }, this))
        },
        e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}),
                    !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function (a) {
                            return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                        },
                        a.event.special[b.name].owl = !0
                }
            } else
                b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
                    this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
                        return a.inArray(c, this._states.tags[b.name]) === d
                    }, this)))
        },
        e.prototype.suppress = function (b) {
            a.each(b, a.proxy(function (a, b) {
                this._supress[b] = !0
            }, this))
        },
        e.prototype.release = function (b) {
            a.each(b, a.proxy(function (a, b) {
                delete this._supress[b]
            }, this))
        },
        e.prototype.pointer = function (a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event,
                a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
                a.pageX ? (c.x = a.pageX,
                    c.y = a.pageY) : (c.x = a.clientX,
                    c.y = a.clientY),
                c
        },
        e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a))
        },
        e.prototype.difference = function (a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        },
        a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f || (f = new e(this, "object" == typeof b && b),
                        d.data("owl.carousel", f),
                        a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                            f.register({
                                    type: e.Type.Event,
                                    name: c
                                }),
                                f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                                        f[c].apply(this, [].slice.call(arguments, 1)),
                                        this.release([c]))
                                }, f))
                        })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        },
        a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b,
            this._interval = null,
            this._visible = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
    };
    e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        },
        e.prototype.watch = function () {
            this._interval || (this._visible = this._core.$element.is(":visible"),
                this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        },
        e.prototype.refresh = function () {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
                this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible && this._core.invalidate("width") && this._core.refresh())
        },
        e.prototype.destroy = function () {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b,
            this._loaded = [],
            this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                                this.load(b)
                            }, this); f++ < e;)
                            this.load(h / 2 + this._core.relative(g)),
                            h && a.each(this._core.clones(this._core.relative(g)), i),
                            g++
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
    };
    e.Defaults = {
            lazyLoad: !1
        },
        e.prototype.load = function (c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
                    var e, f = a(d),
                        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                    this._core.trigger("load", {
                            element: f,
                            url: g
                        }, "lazy"),
                        f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                            f.css("opacity", 1),
                                this._core.trigger("loaded", {
                                    element: f,
                                    url: g
                                }, "lazy")
                        }, this)).attr("src", g) : (e = new Image,
                            e.onload = a.proxy(function () {
                                f.css({
                                        "background-image": 'url("' + g + '")',
                                        opacity: "1"
                                    }),
                                    this._core.trigger("loaded", {
                                        element: f,
                                        url: g
                                    }, "lazy")
                            }, this),
                            e.src = g)
                }, this)),
                this._loaded.push(d.get(0)))
        },
        e.prototype.destroy = function () {
            var a, b;
            for (a in this.handlers)
                this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b,
            this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function (a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
    };
    e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        },
        e.prototype.update = function () {
            var b = this._core._current,
                c = b + this._core.settings.items,
                d = this._core.$stage.children().toArray().slice(b, c),
                e = [],
                f = 0;
            a.each(d, function (b, c) {
                    e.push(a(c).height())
                }),
                f = Math.max.apply(null, e),
                this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
        },
        e.prototype.destroy = function () {
            var a, b;
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b,
            this._videos = {},
            this._playing = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function (a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function (b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"),
                            this.fetch(c, a(b.content)))
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers),
            this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
                this.play(a)
            }, this))
    };
    e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        },
        e.prototype.fetch = function (a, b) {
            var c = function () {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g)
                throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                d[3].indexOf("youtu") > -1)
                c = "youtube";
            else if (d[3].indexOf("vimeo") > -1)
                c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6],
                this._videos[g] = {
                    type: c,
                    id: d,
                    width: e,
                    height: f
                },
                b.attr("data-video", g),
                this.thumbnail(a, this._videos[g])
        },
        e.prototype.thumbnail = function (b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function (a) {
                    e = '<div class="owl-video-play-icon"></div>',
                        d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
                        b.after(d),
                        b.after(e)
                };
            if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
                this._core.settings.lazyLoad && (i = "data-src",
                    j = "owl-lazy"),
                h.length)
                return l(h.attr(i)),
                    h.remove(),
                    !1;
            "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
                l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (a) {
                    f = a[0].thumbnail_large,
                        l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (a) {
                    f = a.framegrab_url,
                        l(f)
                }
            })
        },
        e.prototype.stop = function () {
            this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                this._playing = null,
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video")
        },
        e.prototype.play = function (b) {
            var c, d = a(b.target),
                e = d.closest("." + this._core.settings.itemClass),
                f = this._videos[e.attr("data-video")],
                g = f.width || "100%",
                h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                e = this._core.items(this._core.relative(e.index())),
                this._core.reset(e.index()),
                "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
                a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
                this._playing = e.addClass("owl-video-playing"))
        },
        e.prototype.isInFullScreen = function () {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        },
        e.prototype.destroy = function () {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this.core = b,
            this.core.options = a.extend({}, e.Defaults, this.core.options),
            this.swapping = !0,
            this.previous = d,
            this.next = d,
            this.handlers = {
                "change.owl.carousel": a.proxy(function (a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                        this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function (a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            },
            this.core.$element.on(this.handlers)
    };
    e.Defaults = {
            animateOut: !1,
            animateIn: !1
        },
        e.prototype.swap = function () {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                        d.one(a.support.animation.end, c).css({
                            left: b + "px"
                        }).addClass("animated owl-animated-out").addClass(g)),
                    f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        },
        e.prototype.clear = function (b) {
            a(b.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd()
        },
        e.prototype.destroy = function () {
            var a, b;
            for (a in this.handlers)
                this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    var e = function (b) {
        this._core = b,
            this._timeout = null,
            this._paused = !1,
            this._handlers = {
                "changed.owl.carousel": a.proxy(function (a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function (a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function (a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            },
            this._core.$element.on(this._handlers),
            this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        },
        e.prototype.play = function (a, b) {
            this._paused = !1,
                this._core.is("rotating") || (this._core.enter("rotating"),
                    this._setAutoPlayInterval())
        },
        e.prototype._getNextTimeout = function (d, e) {
            return this._timeout && b.clearTimeout(this._timeout),
                b.setTimeout(a.proxy(function () {
                    this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
                }, this), d || this._core.settings.autoplayTimeout)
        },
        e.prototype._setAutoPlayInterval = function () {
            this._timeout = this._getNextTimeout()
        },
        e.prototype.stop = function () {
            this._core.is("rotating") && (b.clearTimeout(this._timeout),
                this._core.leave("rotating"))
        },
        e.prototype.pause = function () {
            this._core.is("rotating") && (this._paused = !0)
        },
        e.prototype.destroy = function () {
            var a, b;
            this.stop();
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b,
            this._initialized = !1,
            this._pages = [],
            this._controls = {},
            this._templates = [],
            this.$element = this._core.$element,
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            },
            this._handlers = {
                "prepared.owl.carousel": a.proxy(function (b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function (a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function (a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                        this.initialize(),
                        this.update(),
                        this.draw(),
                        this._initialized = !0,
                        this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function (a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                        this.update(),
                        this.draw(),
                        this._core.trigger("refreshed", null, "navigation"))
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers)
    };
    e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        },
        e.prototype.initialize = function () {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
                this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
                    this.prev(c.navSpeed)
                }, this)),
                this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
                    this.next(c.navSpeed)
                }, this)),
                c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
                this._controls.$absolute.on("click", "div", a.proxy(function (b) {
                    var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                    b.preventDefault(),
                        this.to(d, c.dotsSpeed)
                }, this));
            for (b in this._overrides)
                this._core[b] = a.proxy(this[b], this)
        },
        e.prototype.destroy = function () {
            var a, b, c, d;
            for (a in this._handlers)
                this.$element.off(a, this._handlers[a]);
            for (b in this._controls)
                this._controls[b].remove();
            for (d in this.overides)
                this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        },
        e.prototype.update = function () {
            var a, b, c, d = this._core.clones().length / 2,
                e = d + this._core.items().length,
                f = this._core.maximum(!0),
                g = this._core.settings,
                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
                g.dots || "page" == g.slideBy)
                for (this._pages = [],
                    a = d,
                    b = 0,
                    c = 0; a < e; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }),
                            Math.min(f, a - d) === f)
                            break;
                        b = 0,
                            ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        },
        e.prototype.draw = function () {
            var b, c = this._core.settings,
                d = this._core.items().length <= c.items,
                e = this._core.relative(this._core.current()),
                f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d),
                c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
                    this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
                    c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                    this._controls.$absolute.find(".active").removeClass("active"),
                    this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        },
        e.prototype.onTrigger = function (b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        },
        e.prototype.current = function () {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function (a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        },
        e.prototype.getPosition = function (b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
                    d = this._pages.length,
                    b ? ++c : --c,
                    c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
                    d = this._core.items().length,
                    b ? c += e.slideBy : c -= e.slideBy),
                c
        },
        e.prototype.next = function (b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        },
        e.prototype.prev = function (b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        },
        e.prototype.to = function (b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length,
                a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        },
        a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c,
            this._hashes = {},
            this.$element = this._core.$element,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function (c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function (b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c)
                            return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function (c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                            e = a.map(this._hashes, function (a, b) {
                                return a === d ? b : null
                            }).join();
                        if (!e || b.location.hash.slice(1) === e)
                            return;
                        b.location.hash = e
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers),
            a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
                var c = b.location.hash.substring(1),
                    e = this._core.$stage.children(),
                    f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
    };
    e.Defaults = {
            URLhashListener: !1
        },
        e.prototype.destroy = function () {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers)
                this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this))
                "function" != typeof this[d] && (this[d] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                if (g[b] !== d)
                    return e = !c || b,
                        !1
            }),
            e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function () {
                return !!e("transform")
            },
            csstransforms3d: function () {
                return !!e("perspective")
            },
            csstransitions: function () {
                return !!e("transition")
            },
            cssanimations: function () {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
            a.support.transition.end = i.transition.end[a.support.transition]),
        j.cssanimations() && (a.support.animation = new String(f("animation")),
            a.support.animation.end = i.animation.end[a.support.animation]),
        j.csstransforms() && (a.support.transform = new String(f("transform")),
            a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),s=o(0),a=i(s),f=o(2),l=i(f),d=function(){function t(e,o){function i(t,e,i){var r=parseInt(o[t]);isNaN(r)?o[t]!==e&&o[t]!==i&&(o.pos+=(o[t]="center")+" "):o.pos+=(o[t]=r)+"px "}r(this,t);var n=(0,a.default)(e);if(o.pos="",i("posX","left","right"),i("posY","top","bottom"),navigator.userAgent.match(o.excludeAgents))o.src&&!n.is("img")&&n.css("background",'url("'+o.src+'") '+o.pos+"/cover");else{o.scrollingSelector&&(t.scrollingElement=(0,a.default)(o.scrollingSelector)[0]),t.isSet||t.init(),t.iList.push(this);var s=(0,a.default)("<div>").addClass("parallax-mirror").css({visibility:"hidden",zIndex:o.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}).prependTo((0,a.default)(o.mirrorSelector)),f=n.find(o.sliderSelector);0===f.length?f=(0,a.default)("<img>").attr("src",o.src):(o.formerParent=f.parent(),o.formerStyles=f.prop("style")),f.addClass("parallax-slider").prependTo(s),f.children("img").add(f).on("load",function(){t.update(!0)}),this.$s=f,this.$m=s}this.$w=n,this.o=o,"function"==typeof o.afterSetup&&o.afterSetup(this)}return n(t,[{key:"refresh",value:function(){var e=this.$w,o=this.o;o.dH=t.dH,o.dW=t.dW;var i=o.scrollingElement;if(i&&i!==document&&(o.dH=i.scrollHeight,o.dW=i.scrollWidth),o){o.aspectRatio||function(t,e){var o=0,i=0,r=0,n=0;if(0===t.children().each(function(){var t=(0,a.default)(this),e=t.offset(),s=e.top+t.outerHeight(),f=e.left+t.outerWidth();o=e.top<o?e.top:o,r=e.left<r?e.left:r,i=s>i?s:i,n=f>n?f:n}).length)e.aspectRatio=t[0].naturalWidth/(t[0].naturalHeight||1);else{var s=t.offset(),f=i-Math.max(o,s.top),l=n-Math.max(r,s.left);e.aspectRatio=l/(f||1)}}(this.$s,o);var r=o.aspectRatio||1;o.boxWidth=e.outerWidth(),o.boxHeight=e.outerHeight()+2*o.bleed,o.boxOffsetTop=e.offset().top-o.bleed,o.boxOffsetLeft=e.offset().left,o.boxOffsetBottom=o.boxOffsetTop+o.boxHeight;var n=t.wH,s=t.dH,f=Math.min(o.boxOffsetTop,s-n),l=Math.max(o.boxOffsetTop+o.boxHeight-n,0),d=o.boxHeight+(f-l)*(1-o.speed)|0,u=(o.boxOffsetTop-f)*(1-o.speed)|0,p=void 0;o.boxWidth<d*r?(o.imageWidth=d*r|0,o.imageHeight=d,o.offsetBaseTop=u,p=o.imageWidth-o.boxWidth,"left"===o.posX?o.offsetLeft=0:"right"===o.posX?o.offsetLeft=-p:isNaN(o.posX)?o.offsetLeft=-p/2|0:o.offsetLeft=Math.max(o.posX,-p)):(o.imageWidth=o.boxWidth,o.imageHeight=o.boxWidth/r|0,o.offsetLeft=0,p=o.imageHeight-d,"top"===o.posY?o.offsetBaseTop=u:"bottom"===o.posY?o.offsetBaseTop=u-p:isNaN(o.posY)?o.offsetBaseTop=u-p/2|0:o.offsetBaseTop=u+Math.max(o.posY,-p)),"function"==typeof o.afterRefresh&&o.afterRefresh(this)}}},{key:"render",value:function(){var e=this.o,o=t.sT,i=t.sL,r=e.overScrollFix?t.overScroll:0,n=o+t.wH;e.boxOffsetBottom>o&&e.boxOffsetTop<=n?(e.visibility="visible",e.mirrorTop=e.boxOffsetTop-o,e.mirrorLeft=e.boxOffsetLeft-i,e.offsetTop=e.offsetBaseTop-e.mirrorTop*(1-e.speed)):e.visibility="hidden",this.$m.css({transform:"translate3d("+e.mirrorLeft+"px, "+(e.mirrorTop-r)+"px, 0px)",visibility:e.visibility,height:e.boxHeight,width:e.boxWidth}),this.$s.css({transform:"translate3d("+e.offsetLeft+"px, "+e.offsetTop+"px, 0px)",position:"absolute",height:e.imageHeight,width:e.imageWidth,maxWidth:"none"}),"function"==typeof e.afterRender&&e.afterRender(this)}},{key:"destroy",value:function(){if(this.$m&&this.$m.remove(),this.$s){for(var e=0;e<t.iList.length;e++)t.iList[e]===this&&t.iList.splice(e,1);this.o.formerParent&&(this.$s.prop("style",this.o.formerStyles),this.o.formerParent.append(this.$s))}0===t.iList.length&&((0,a.default)(window).off("scroll.px.parallax resize.px.parallax load.px.parallax"),t.isSet=!1),"function"==typeof this.o.afterDestroy&&this.o.afterDestroy(this)}}],[{key:"init",value:function(){function e(){t.wH=r.height(),t.wW=r.width(),t.dH=i[0].scrollHeight||i.height(),t.dW=i[0].scrollWidth||i.width()}function o(){var e=n.scrollTop(),o=t.dH-t.wH,i=t.dW-t.wW;t.sT=Math.max(0,Math.min(o,e)),t.sL=Math.max(0,Math.min(i,n.scrollLeft())),t.overScroll=Math.max(e-o,Math.min(e,0))}if(!t.isSet){var i=(0,a.default)(t.scrollingElement||document),r=(0,a.default)(window),n=(0,a.default)(t.scrollingElement||window);r.on("resize.px.parallax load.px.parallax",function(){e(),t.update(!0)}),e(),t.isSet=!0;var s=-1;!function e(){var i=n.scrollTop();s!==i&&(s=i,o(),t.update()),window.requestAnimationFrame(e)}()}}},{key:"update",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&a.default.each(t.iList,function(){this.refresh()}),a.default.each(t.iList,function(){this.render()})}}]),t}();d.DEFAULTS={src:null,speed:.2,bleed:0,zIndex:-100,posX:"center",posY:"center",overScrollFix:!1,excludeAgents:/(iPod|iPhone|iPad|Android)/,aspectRatio:null,sliderSelector:">.parallax-slider",mirrorSelector:"body",scrollingSelector:null,afterRefresh:null,afterRender:null,afterSetup:null,afterDestroy:null},d.AUTOINIT=!0,d.sT=0,d.sL=0,d.wH=0,d.wW=0,d.dH=1<<30,d.dW=1<<30,d.iList=[],d.isSet=!1,(0,a.default)(function(){d.AUTOINIT&&(0,a.default)("[data-parallax]").parallax()}),(0,l.default)("parallax",d)},function(t,e,o){"use strict";function i(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="__"+t,n=s.default.fn[t];s.default.fn[t]=function(t){return this.each(function(){var o=(0,s.default)(this),n=o.data(i);if(n||"destroy"===t)"function"==typeof n.configure&&n.configure(options);else{var a=s.default.extend({},e.DEFAULTS,o.data(),"object"===(void 0===t?"undefined":r(t))&&t);o.data(i,n=new e(this,a))}"string"==typeof t&&("destroy"===t?(n.destroy(),o.data(i,!1)):n[t]())})},o&&(s.default[t]=function(e){return(0,s.default)({})[t](e)}),s.default.fn[t].noConflict=function(){return s.default.fn[t]=n}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=i;var n=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n)}]);

(function(h,f){"function"===typeof define&&define.amd?define([],f):"object"===typeof module&&module.exports?module.exports=f():h.Rellax=f()})(this,function(){var h=function(f,l){var b=Object.create(h.prototype),g=0,k=0,c=[],p=!1,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},m=function(a,b,d){return a<=b?b:a>=d?d:a};b.options={speed:-2,center:!1};l&&
    Object.keys(l).forEach(function(a){b.options[a]=l[a]});b.options.speed=m(b.options.speed,-10,10);f||(f=".rellax");var q=document.querySelectorAll(f);if(0<q.length)b.elems=q;else throw Error("The elements you're trying to select don't exist.");var v=function(a){var e=a.getAttribute("data-rellax-percentage"),d=a.getAttribute("data-rellax-speed"),c=e||b.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,f=c+a.getBoundingClientRect().top,h=a.clientHeight||
    a.offsetHeight||a.scrollHeight,g=e?e:(c-f+k)/(h+k);b.options.center&&(g=.5);c=d?m(d,-10,10):b.options.speed;if(e||b.options.center)c=m(d||b.options.speed,-5,5);e=Math.round(100*c*(1-g));a=a.style.cssText;d="";0<=a.indexOf("transform")&&(d=a.indexOf("transform"),d=a.slice(d),d=(g=d.indexOf(";"))?" "+d.slice(11,g).replace(/\s/g,""):" "+d.slice(11).replace(/\s/g,""));return{base:e,top:f,height:h,speed:c,style:a,transform:d}},r=function(){var a=g;g=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||
document.body.parentNode||document.body).scrollTop;return a!=g?!0:!1},t=function(){r()&&!1===p&&n();u(t)},n=function(){for(var a=0;a<b.elems.length;a++){var e=" translate3d(0,"+(Math.round(100*c[a].speed*(1-(g-c[a].top+k)/(c[a].height+k)))-c[a].base)+"px,0)"+c[a].transform;b.elems[a].style.cssText=c[a].style+"-webkit-transform:"+e+";-moz-transform:"+e+";transform:"+e+";"}};b.destroy=function(){for(var a=0;a<b.elems.length;a++)b.elems[a].style.cssText=c[a].style;p=!0};(function(){k=window.innerHeight;
r();for(var a=0;a<b.elems.length;a++){var e=v(b.elems[a]);c.push(e)}window.addEventListener("resize",function(){n()});t();n()})();return b};return h});


/*! smooth-scroll v10.2.1 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n,o,r,a,c,l,i={},u="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},d=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=d(!0,e[o],n[o]):e[o]=n[o])};n<o;n++){var a=arguments[n];r(a)}return e},f=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},m=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",c=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=t<.5?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},g=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=Math.max(o-t-n,0),Math.min(o,v()-b())},b=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},y=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},O=function(e){return e?f(e)+e.offsetTop:0},S=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};i.animateScroll=function(n,o,c){var i=y(o?o.getAttribute("data-options"):null),u=d(t||s,c||{},i),f="[object Number]"===Object.prototype.toString.call(n),h=f||!n.tagName?null:n;if(f||h){var m=e.pageYOffset;u.selectorHeader&&!r&&(r=document.querySelector(u.selectorHeader)),a||(a=O(r));var b,E,I=f?n:g(h,a,parseInt(u.offset,10)),H=I-m,A=v(),j=0,C=function(t,r,a){var c=e.pageYOffset;(t==r||c==r||e.innerHeight+c>=A)&&(clearInterval(a),S(n,r,f),u.callback(n,o))},M=function(){j+=16,b=j/parseInt(u.speed,10),b=b>1?1:b,E=m+H*p(u.easing,b),e.scrollTo(0,Math.floor(E)),C(E,I,l)},w=function(){clearInterval(l),l=setInterval(M,16)};0===e.pageYOffset&&e.scrollTo(0,0),w()}};var E=function(t){var r;try{r=m(decodeURIComponent(e.location.hash))}catch(t){r=m(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),i.animateScroll(n,o),n=null,o=null)},I=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=h(r.target,t.selector),o&&"a"===o.tagName.toLowerCase()&&o.hostname===e.location.hostname&&o.pathname===e.location.pathname&&/#/.test(o.href))){var a;try{a=m(decodeURIComponent(o.hash))}catch(e){a=m(o.hash)}if("#"===a){r.preventDefault(),n=document.body;var c=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",c),n.id="",void(e.location.hash.substring(1)===c?E():e.location.hash=c)}n=document.querySelector(a),n&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===e.location.hash&&(r.preventDefault(),E()))}},H=function(e){c||(c=setTimeout((function(){c=null,a=O(r)}),66))};return i.destroy=function(){t&&(document.removeEventListener("click",I,!1),e.removeEventListener("resize",H,!1),t=null,n=null,o=null,r=null,a=null,c=null,l=null)},i.init=function(n){u&&(i.destroy(),t=d(s,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,a=O(r),document.addEventListener("click",I,!1),e.addEventListener("hashchange",E,!1),r&&e.addEventListener("resize",H,!1))},i}));


/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});

!function webpackUniversalModuleDefinition(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],t);else{var a="object"==typeof exports?t(require("jquery")):t(e.jQuery);for(var i in a)("object"==typeof exports?exports:e)[i]=a[i]}}(window,function(__WEBPACK_EXTERNAL_MODULE__5__){return function(a){var i={};function __webpack_require__(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}return __webpack_require__.m=a,__webpack_require__.c=i,__webpack_require__.d=function(e,t,a){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)__webpack_require__.d(a,i,function(e){return t[e]}.bind(null,i));return a},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,a){"use strict";var i=a(1),n=a(5);i.dependencyLib===n&&a(9),e.exports=i},function(e,t,a){"use strict";a(2),a(7),a(8),e.exports=a(3)},function(e,t,a){"use strict";var i=a(3);i.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),i.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function validator(e,t,a,i,n){return e=-1<a-1&&"."!==t.buffer[a-1]?(e=t.buffer[a-1]+e,-1<a-2&&"."!==t.buffer[a-2]?t.buffer[a-2]+e:"0"+e):"00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function onUnMask(e,t,a){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(e,t,a){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),e.exports=i},function(e,t,a){"use strict";var T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(L,M,V){var S=M.document,e=navigator.userAgent,x=0<e.indexOf("MSIE ")||0<e.indexOf("Trident/"),P=isInputEventSupported("touchstart"),_=/iemobile/i.test(e),E=/iphone/i.test(e)&&!_;function Inputmask(e,t,a){if(!(this instanceof Inputmask))return new Inputmask(e,t,a);this.el=V,this.events={},this.maskset=V,!(this.refreshValue=!1)!==a&&(L.isPlainObject(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=L.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==V,this.userOptions=t||{},this.isRTL=this.opts.numericInput,resolveAlias(this.opts.alias,t,this.opts))}function resolveAlias(e,t,a){var i=Inputmask.prototype.aliases[e];return i?(i.alias&&resolveAlias(i.alias,V,a),L.extend(!0,a,i),L.extend(!0,a,t),!0):(null===a.mask&&(a.mask=e),!1)}function generateMaskSet(a,o){function generateMask(e,t,a){var i=!1;if(null!==e&&""!==e||(i=null!==a.regex,e=i?(e=a.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(i=!0,".*")),1===e.length&&!1===a.greedy&&0!==a.repeat&&(a.placeholder=""),0<a.repeat||"*"===a.repeat||"+"===a.repeat){var n="*"===a.repeat?0:"+"===a.repeat?1:a.repeat;e=a.groupmarker[0]+e+a.groupmarker[1]+a.quantifiermarker[0]+n+","+a.repeat+a.quantifiermarker[1]}var r,s=i?"regex_"+a.regex:a.numericInput?e.split("").reverse().join(""):e;return Inputmask.prototype.masksCache[s]===V||!0===o?(r={mask:e,maskToken:Inputmask.prototype.analyseMask(e,i,a),validPositions:{},_buffer:V,buffer:V,tests:{},excludes:{},metadata:t,maskLength:V,jitOffset:{}},!0!==o&&(Inputmask.prototype.masksCache[s]=r,r=L.extend(!0,{},Inputmask.prototype.masksCache[s]))):r=L.extend(!0,{},Inputmask.prototype.masksCache[s]),r}if(L.isFunction(a.mask)&&(a.mask=a.mask(a)),L.isArray(a.mask)){if(1<a.mask.length){if(null===a.keepStatic){a.keepStatic="auto";for(var e=0;e<a.mask.length;e++)if(a.mask[e].charAt(0)!==a.mask[0].charAt(0)){a.keepStatic=!0;break}}var i=a.groupmarker[0];return L.each(a.isRTL?a.mask.reverse():a.mask,function(e,t){1<i.length&&(i+=a.groupmarker[1]+a.alternatormarker+a.groupmarker[0]),t.mask===V||L.isFunction(t.mask)?i+=t:i+=t.mask}),generateMask(i+=a.groupmarker[1],a.mask,a)}a.mask=a.mask.pop()}return a.mask&&a.mask.mask!==V&&!L.isFunction(a.mask.mask)?generateMask(a.mask.mask,a.mask,a):generateMask(a.mask,a.mask,a)}function isInputEventSupported(e){var t=S.createElement("input"),a="on"+e,i=a in t;return i||(t.setAttribute(a,"return;"),i="function"==typeof t[a]),t=null,i}function maskScope(e,t,F){t=t||this.maskset,F=F||this.opts;var d,n,m,f,r,u=this,l=this.el,k=this.isRTL,s=!1,c=!1,h=!1,i=!1;function getMaskTemplate(e,t,a,i,n){var r=F.greedy;n&&(F.greedy=!1),t=t||0;var s,o,l,u=[],c=0;getLastValidPosition();do{if(!0===e&&getMaskSet().validPositions[c])l=n&&!0===getMaskSet().validPositions[c].match.optionality&&getMaskSet().validPositions[c+1]===V&&(!0===getMaskSet().validPositions[c].generatedInput||getMaskSet().validPositions[c].input==F.skipOptionalPartCharacter&&0<c)?determineTestTemplate(c,getTests(c,s,c-1)):getMaskSet().validPositions[c],o=l.match,s=l.locator.slice(),u.push(!0===a?l.input:!1===a?o.nativeDef:getPlaceholder(c,o));else{l=getTestTemplate(c,s,c-1),o=l.match,s=l.locator.slice();var p=!0!==i&&(!1!==F.jitMasking?F.jitMasking:o.jit);(!1===p||p===V||"number"==typeof p&&isFinite(p)&&c<p)&&u.push(!1===a?o.nativeDef:getPlaceholder(c,o))}"auto"===F.keepStatic&&o.newBlockMarker&&null!==o.fn&&(F.keepStatic=c-1),c++}while((m===V||c<m)&&(null!==o.fn||""!==o.def)||c<t);return""===u[u.length-1]&&u.pop(),!1===a&&getMaskSet().maskLength!==V||(getMaskSet().maskLength=c-1),F.greedy=r,u}function getMaskSet(){return t}function resetMaskSet(e){var t=getMaskSet();t.buffer=V,!0!==e&&(t.validPositions={},t.p=0)}function getLastValidPosition(e,t,a){var i=-1,n=-1,r=a||getMaskSet().validPositions;for(var s in e===V&&(e=-1),r){var o=parseInt(s);r[o]&&(t||!0!==r[o].generatedInput)&&(o<=e&&(i=o),e<=o&&(n=o))}return-1===i||i==e?n:-1==n?i:e-i<n-e?i:n}function getDecisionTaker(e){var t=e.locator[e.alternation];return"string"==typeof t&&0<t.length&&(t=t.split(",")[0]),t!==V?t.toString():""}function getLocator(e,t){var a=(e.alternation!=V?e.mloc[getDecisionTaker(e)]:e.locator).join("");if(""!==a)for(;a.length<t;)a+="0";return a}function determineTestTemplate(e,t){for(var a,i,n,r=getTest(e=0<e?e-1:0),s=getLocator(r),o=0;o<t.length;o++){var l=t[o];a=getLocator(l,s.length);var u=Math.abs(a-s);(i===V||""!==a&&u<i||n&&n.match.optionality&&"master"===n.match.newBlockMarker&&(!l.match.optionality||!l.match.newBlockMarker)||n&&n.match.optionalQuantifier&&!l.match.optionalQuantifier)&&(i=u,n=l)}return n}function getTestTemplate(e,t,a){return getMaskSet().validPositions[e]||determineTestTemplate(e,getTests(e,t?t.slice():t,a))}function getTest(e,t){return getMaskSet().validPositions[e]?getMaskSet().validPositions[e]:(t||getTests(e))[0]}function positionCanMatchDefinition(e,t){for(var a=!1,i=getTests(e),n=0;n<i.length;n++)if(i[n].match&&i[n].match.def===t){a=!0;break}return a}function getTests(D,e,t){var B,a=getMaskSet().maskToken,O=e?t:0,i=e?e.slice():[0],I=[],j=!1,N=e?e.join(""):"";function resolveTestFromToken(A,C,e,t){function handleMatch(e,t,a){function isFirstMatch(a,i){var n=0===L.inArray(a,i.matches);return n||L.each(i.matches,function(e,t){if(!0===t.isQuantifier?n=isFirstMatch(a,i.matches[e-1]):t.hasOwnProperty("matches")&&(n=isFirstMatch(a,t)),n)return!1}),n}function resolveNdxInitializer(e,n,r){var s,o;if((getMaskSet().tests[e]||getMaskSet().validPositions[e])&&L.each(getMaskSet().tests[e]||[getMaskSet().validPositions[e]],function(e,t){if(t.mloc[n])return s=t,!1;var a=r!==V?r:t.alternation,i=t.locator[a]!==V?t.locator[a].toString().indexOf(n):-1;(o===V||i<o)&&-1!==i&&(s=t,o=i)}),s){var t=s.locator[s.alternation],a=s.mloc[n]||s.mloc[t]||s.locator;return a.slice((r!==V?r:s.alternation)+1)}return r!==V?resolveNdxInitializer(e,n):V}function isSubsetOf(e,t){function expand(e){for(var t,a,i=[],n=0,r=e.length;n<r;n++)if("-"===e.charAt(n))for(a=e.charCodeAt(n+1);++t<a;)i.push(String.fromCharCode(t));else t=e.charCodeAt(n),i.push(e.charAt(n));return i.join("")}return F.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==expand(t.match.def.replace(/[\[\]]/g,"")).indexOf(expand(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function setMergeLocators(e,t){if(t===V||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var a=e.locator[e.alternation];if(a!==V){if("string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===V&&(e.mloc[a]=e.locator.slice()),t!==V){for(var i in t.mloc)"string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===V&&(e.mloc[i]=t.mloc[i]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=V}return!1}if(500<O&&a!==V)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+getMaskSet().mask;if(O===D&&e.matches===V)return I.push({match:e,locator:t.reverse(),cd:N,mloc:{}}),!0;if(e.matches!==V){if(e.isGroup&&a!==e){if(e=handleMatch(A.matches[L.inArray(e,A.matches)+1],t,a))return!0}else if(e.isOptional){var i=e;if(e=resolveTestFromToken(e,C,t,a)){if(L.each(I,function(e,t){t.match.optionality=!0}),B=I[I.length-1].match,a!==V||!isFirstMatch(B,i))return!0;j=!0,O=D}}else if(e.isAlternator){var n,r=e,s=[],o=I.slice(),l=t.length,u=0<C.length?C.shift():-1;if(-1===u||"string"==typeof u){var c,p=O,f=C.slice(),g=[];if("string"==typeof u)g=u.split(",");else for(c=0;c<r.matches.length;c++)g.push(c.toString());if(getMaskSet().excludes[D]){for(var m=g.slice(),d=0,k=getMaskSet().excludes[D].length;d<k;d++)g.splice(g.indexOf(getMaskSet().excludes[D][d].toString()),1);0===g.length&&(getMaskSet().excludes[D]=V,g=m)}(!0===F.keepStatic||isFinite(parseInt(F.keepStatic))&&p>=F.keepStatic)&&(g=g.slice(0,1));for(var h=!1,v=0;v<g.length;v++){c=parseInt(g[v]),I=[],C="string"==typeof u&&resolveNdxInitializer(O,c,l)||f.slice(),r.matches[c]&&handleMatch(r.matches[c],[c].concat(t),a)?e=!0:0===v&&(h=!0),n=I.slice(),O=p,I=[];for(var y=0;y<n.length;y++){var b=n[y],M=!1;b.match.jit=b.match.jit||h,b.alternation=b.alternation||l,setMergeLocators(b);for(var S=0;S<s.length;S++){var x=s[S];if("string"!=typeof u||b.alternation!==V&&-1!==L.inArray(b.locator[b.alternation].toString(),g)){if(b.match.nativeDef===x.match.nativeDef){M=!0,setMergeLocators(x,b);break}if(isSubsetOf(b,x)){setMergeLocators(b,x)&&(M=!0,s.splice(s.indexOf(x),0,b));break}if(isSubsetOf(x,b)){setMergeLocators(x,b);break}if(w=x,void 0,!(!((T=T=b).locator.slice(T.alternation).join("")==w.locator.slice(w.alternation).join(""))||null!==T.match.fn||null===w.match.fn)&&w.match.fn.test(T.match.def,getMaskSet(),D,!1,F,!1)){setMergeLocators(b,x)&&(M=!0,s.splice(s.indexOf(x),0,b));break}}}M||s.push(b)}}I=o.concat(s),O=D,j=0<I.length,e=0<s.length,C=f.slice()}else e=handleMatch(r.matches[u]||A.matches[u],[u].concat(t),a);if(e)return!0}else if(e.isQuantifier&&a!==A.matches[L.inArray(e,A.matches)-1])for(var P=e,_=0<C.length?C.shift():0;_<(isNaN(P.quantifier.max)?_+1:P.quantifier.max)&&O<=D;_++){var E=A.matches[L.inArray(P,A.matches)-1];if(e=handleMatch(E,[_].concat(t),E)){if((B=I[I.length-1].match).optionalQuantifier=_>=P.quantifier.min,B.jit=(_||1)*E.matches.indexOf(B)>=P.quantifier.jit,B.optionalQuantifier&&isFirstMatch(B,E)){j=!0,O=D;break}return B.jit&&(getMaskSet().jitOffset[D]=E.matches.indexOf(B)),!0}}else if(e=resolveTestFromToken(e,C,t,a))return!0}else O++;var T,w}for(var a=0<C.length?C.shift():0;a<A.matches.length;a++)if(!0!==A.matches[a].isQuantifier){var i=handleMatch(A.matches[a],[a].concat(e),t);if(i&&O===D)return i;if(D<O)break}}if(-1<D){if(e===V){for(var n,r=D-1;(n=getMaskSet().validPositions[r]||getMaskSet().tests[r])===V&&-1<r;)r--;n!==V&&-1<r&&(i=function mergeLocators(e,t){var i=[];return L.isArray(t)||(t=[t]),0<t.length&&(t[0].alternation===V?0===(i=determineTestTemplate(e,t.slice()).locator.slice()).length&&(i=t[0].locator.slice()):L.each(t,function(e,t){if(""!==t.def)if(0===i.length)i=t.locator.slice();else for(var a=0;a<i.length;a++)t.locator[a]&&-1===i[a].toString().indexOf(t.locator[a])&&(i[a]+=","+t.locator[a])})),i}(r,n),N=i.join(""),O=r)}if(getMaskSet().tests[D]&&getMaskSet().tests[D][0].cd===N)return getMaskSet().tests[D];for(var s=i.shift();s<a.length;s++){var o=resolveTestFromToken(a[s],i,[s]);if(o&&O===D||D<O)break}}return(0===I.length||j)&&I.push({match:{fn:null,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:N}),e!==V&&getMaskSet().tests[D]?L.extend(!0,[],I):(getMaskSet().tests[D]=L.extend(!0,[],I),getMaskSet().tests[D])}function getBufferTemplate(){return getMaskSet()._buffer===V&&(getMaskSet()._buffer=getMaskTemplate(!1,1),getMaskSet().buffer===V&&(getMaskSet().buffer=getMaskSet()._buffer.slice())),getMaskSet()._buffer}function getBuffer(e){return getMaskSet().buffer!==V&&!0!==e||(getMaskSet().buffer=getMaskTemplate(!0,getLastValidPosition(),!0),getMaskSet()._buffer===V&&(getMaskSet()._buffer=getMaskSet().buffer.slice())),getMaskSet().buffer}function refreshFromBuffer(e,t,a){var i,n;if(!0===e)resetMaskSet(),e=0,t=a.length;else for(i=e;i<t;i++)delete getMaskSet().validPositions[i];for(i=n=e;i<t;i++)if(resetMaskSet(!0),a[i]!==F.skipOptionalPartCharacter){var r=isValid(n,a[i],!0,!0);!1!==r&&(resetMaskSet(!0),n=r.caret!==V?r.caret:r.pos+1)}}function checkAlternationMatch(e,t,a){for(var i,n=F.greedy?t:t.slice(0,1),r=!1,s=a!==V?a.split(","):[],o=0;o<s.length;o++)-1!==(i=e.indexOf(s[o]))&&e.splice(i,1);for(var l=0;l<e.length;l++)if(-1!==L.inArray(e[l],n)){r=!0;break}return r}function alternate(e,t,a,i,n){var r,s,o,l,u,c,p,f=L.extend(!0,{},getMaskSet().validPositions),g=!1,m=n!==V?n:getLastValidPosition();if(-1===m&&n===V)l=getTest(r=0),s=l.alternation;else for(;0<=m;m--)if((o=getMaskSet().validPositions[m])&&o.alternation!==V){if(l&&l.locator[o.alternation]!==o.locator[o.alternation])break;r=m,s=getMaskSet().validPositions[r].alternation,l=o}if(s!==V){p=parseInt(r),getMaskSet().excludes[p]=getMaskSet().excludes[p]||[],!0!==e&&getMaskSet().excludes[p].push(getDecisionTaker(l));var d=[],k=0;for(u=p;u<getLastValidPosition(V,!0)+1;u++)(c=getMaskSet().validPositions[u])&&!0!==c.generatedInput?d.push(c.input):u<e&&k++,delete getMaskSet().validPositions[u];for(;getMaskSet().excludes[p]&&getMaskSet().excludes[p].length<10;){var h=-1*k,v=d.slice();for(getMaskSet().tests[p]=V,resetMaskSet(!0),g=!0;0<v.length;){var y=v.shift();if(!(g=isValid(getLastValidPosition(V,!0)+1,y,!1,i,!0)))break}if(g&&t!==V){var b=getLastValidPosition(e)+1;for(u=p;u<getLastValidPosition()+1;u++)((c=getMaskSet().validPositions[u])===V||null==c.match.fn)&&u<e+h&&h++;g=isValid(b<(e+=h)?b:e,t,a,i,!0)}if(g)break;if(resetMaskSet(),l=getTest(p),getMaskSet().validPositions=L.extend(!0,{},f),!getMaskSet().excludes[p]){g=alternate(e,t,a,i,p-1);break}var M=getDecisionTaker(l);if(-1!==getMaskSet().excludes[p].indexOf(M)){g=alternate(e,t,a,i,p-1);break}for(getMaskSet().excludes[p].push(M),u=p;u<getLastValidPosition(V,!0)+1;u++)delete getMaskSet().validPositions[u]}}return getMaskSet().excludes[p]=V,g}function isValid(u,e,t,c,a,i){function isSelection(e){return k?1<e.begin-e.end||e.begin-e.end==1:1<e.end-e.begin||e.end-e.begin==1}t=!0===t;var n=u;function _isValid(r,s,o){var l=!1;return L.each(getTests(r),function(e,t){var a=t.match;if(getBuffer(!0),!1!==(l=null!=a.fn?a.fn.test(s,getMaskSet(),r,o,F,isSelection(u)):(s===a.def||s===F.skipOptionalPartCharacter)&&""!==a.def&&{c:getPlaceholder(r,a,!0)||a.def,pos:r})){var i=l.c!==V?l.c:s,n=r;return i=i===F.skipOptionalPartCharacter&&null===a.fn?getPlaceholder(r,a,!0)||a.def:i,l.remove!==V&&(L.isArray(l.remove)||(l.remove=[l.remove]),L.each(l.remove.sort(function(e,t){return t-e}),function(e,t){revalidateMask({begin:t,end:t+1})})),l.insert!==V&&(L.isArray(l.insert)||(l.insert=[l.insert]),L.each(l.insert.sort(function(e,t){return e-t}),function(e,t){isValid(t.pos,t.c,!0,c)})),!0!==l&&l.pos!==V&&l.pos!==r&&(n=l.pos),!0!==l&&l.pos===V&&l.c===V||revalidateMask(u,L.extend({},t,{input:function casing(e,t,a){switch(F.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var i=getMaskSet().validPositions[a-1];e=0===a||i&&i.input===String.fromCharCode(Inputmask.keyCode.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if(L.isFunction(F.casing)){var n=Array.prototype.slice.call(arguments);n.push(getMaskSet().validPositions),e=F.casing.apply(this,n)}}return e}(i,a,n)}),c,n)||(l=!1),!1}}),l}u.begin!==V&&(n=k?u.end:u.begin);var r=!0,s=L.extend(!0,{},getMaskSet().validPositions);if(L.isFunction(F.preValidation)&&!t&&!0!==c&&!0!==i&&(r=F.preValidation(getBuffer(),n,e,isSelection(u),F,getMaskSet())),!0===r){if(trackbackPositions(V,n,!0),(m===V||n<m)&&(r=_isValid(n,e,t),(!t||!0===c)&&!1===r&&!0!==i)){var o=getMaskSet().validPositions[n];if(!o||null!==o.match.fn||o.match.def!==e&&e!==F.skipOptionalPartCharacter){if((F.insertMode||getMaskSet().validPositions[seekNext(n)]===V)&&(!isMask(n,!0)||getMaskSet().jitOffset[n]))if(getMaskSet().jitOffset[n]&&getMaskSet().validPositions[seekNext(n)]===V)(r=isValid(n+getMaskSet().jitOffset[n],e,t)).caret=n;else for(var l=n+1,p=seekNext(n);l<=p;l++)if(!1!==(r=_isValid(l,e,t))){r=trackbackPositions(n,r.pos!==V?r.pos:l)||r,n=l;break}}else r={caret:seekNext(n)}}!1!==r||!1===F.keepStatic||null!=F.regex&&!isComplete(getBuffer())||t||!0===a||(r=alternate(n,e,t,c)),!0===r&&(r={pos:n})}if(L.isFunction(F.postValidation)&&!1!==r&&!t&&!0!==c&&!0!==i){var f=F.postValidation(getBuffer(!0),u.begin!==V?k?u.end:u.begin:u,r,F);if(f!==V){if(f.refreshFromBuffer&&f.buffer){var g=f.refreshFromBuffer;refreshFromBuffer(!0===g?g:g.start,g.end,f.buffer)}r=!0===f?r:f}}return r&&r.pos===V&&(r.pos=n),!1!==r&&!0!==i||(resetMaskSet(!0),getMaskSet().validPositions=L.extend(!0,{},s)),r}function trackbackPositions(e,t,a){var i;if(e===V)for(e=t-1;0<e&&!getMaskSet().validPositions[e];e--);for(var n=e;n<t;n++)if(getMaskSet().validPositions[n]===V&&!isMask(n,!0)){var r=0==n?getTest(n):getMaskSet().validPositions[n-1];if(r){var s=getTests(n).slice();""===s[s.length-1].match.def&&s.pop();var o=determineTestTemplate(n,s);if((o=L.extend({},o,{input:getPlaceholder(n,o.match,!0)||o.match.def})).generatedInput=!0,revalidateMask(n,o,!0),!0!==a){var l=getMaskSet().validPositions[t].input;getMaskSet().validPositions[t]=V,i=isValid(t,l,!0,!0)}}}return i}function revalidateMask(e,t,a,i){function IsEnclosedStatic(e,t,a){var i=t[e];if(i===V||(null!==i.match.fn||!0===i.match.optionality)&&i.input!==F.radixPoint)return!1;var n=a.begin<=e-1?t[e-1]&&null===t[e-1].match.fn&&t[e-1]:t[e-1],r=a.end>e+1?t[e+1]&&null===t[e+1].match.fn&&t[e+1]:t[e+1];return n&&r}var n=e.begin!==V?e.begin:e,r=e.end!==V?e.end:e;if(e.begin>e.end&&(n=e.end,r=e.begin),i=i!==V?i:n,n!==r||F.insertMode&&getMaskSet().validPositions[i]!==V&&a===V){var s=L.extend(!0,{},getMaskSet().validPositions),o=getLastValidPosition(V,!0);for(getMaskSet().p=n,f=o;n<=f;f--)getMaskSet().validPositions[f]&&"+"===getMaskSet().validPositions[f].match.nativeDef&&(F.isNegative=!1),delete getMaskSet().validPositions[f];var l=!0,u=i,c=(getMaskSet().validPositions,!1),p=u,f=u;for(t&&(getMaskSet().validPositions[i]=L.extend(!0,{},t),p++,u++,n<r&&f++);f<=o;f++){var g=s[f];if(g!==V&&(r<=f||n<=f&&!0!==g.generatedInput&&IsEnclosedStatic(f,s,{begin:n,end:r}))){for(;""!==getTest(p).match.def;){if(!1===c&&s[p]&&s[p].match.nativeDef===g.match.nativeDef)getMaskSet().validPositions[p]=L.extend(!0,{},s[p]),getMaskSet().validPositions[p].input=g.input,trackbackPositions(V,p,!0),u=p+1,l=!0;else if(F.shiftPositions&&positionCanMatchDefinition(p,g.match.def)){var m=isValid(p,g.input,!0,!0);l=!1!==m,u=m.caret||m.insert?getLastValidPosition():p+1,c=!0}else l=!0===g.generatedInput||g.input===F.radixPoint&&!0===F.numericInput;if(l)break;if(!l&&r<p&&isMask(p,!0)&&(null!==g.match.fn||p>getMaskSet().maskLength))break;p++}""==getTest(p).match.def&&(l=!1),p=u}if(!l)break}if(!l)return getMaskSet().validPositions=L.extend(!0,{},s),resetMaskSet(!0),!1}else t&&(getMaskSet().validPositions[i]=L.extend(!0,{},t));return resetMaskSet(!0),!0}function isMask(e,t){var a=getTestTemplate(e).match;if(""===a.def&&(a=getTest(e).match),null!=a.fn)return a.fn;if(!0!==t&&-1<e){var i=getTests(e);return i.length>1+(""===i[i.length-1].match.def?1:0)}return!1}function seekNext(e,t){for(var a=e+1;""!==getTest(a).match.def&&(!0===t&&(!0!==getTest(a).match.newBlockMarker||!isMask(a))||!0!==t&&!isMask(a));)a++;return a}function seekPrevious(e,t){var a,i=e;if(i<=0)return 0;for(;0<--i&&(!0===t&&!0!==getTest(i).match.newBlockMarker||!0!==t&&!isMask(i)&&((a=getTests(i)).length<2||2===a.length&&""===a[1].match.def)););return i}function writeBuffer(e,t,a,i,n){if(i&&L.isFunction(F.onBeforeWrite)){var r=F.onBeforeWrite.call(u,i,t,a,F);if(r){if(r.refreshFromBuffer){var s=r.refreshFromBuffer;refreshFromBuffer(!0===s?s:s.start,s.end,r.buffer||t),t=getBuffer(!0)}a!==V&&(a=r.caret!==V?r.caret:a)}}if(e!==V&&(e.inputmask._valueSet(t.join("")),a===V||i!==V&&"blur"===i.type?renderColorMask(e,a,0===t.length):caret(e,a),!0===n)){var o=L(e),l=e.inputmask._valueGet();c=!0,o.trigger("input"),setTimeout(function(){l===getBufferTemplate().join("")?o.trigger("cleared"):!0===isComplete(t)&&o.trigger("complete")},0)}}function getPlaceholder(e,t,a){if((t=t||getTest(e).match).placeholder!==V||!0===a)return L.isFunction(t.placeholder)?t.placeholder(F):t.placeholder;if(null!==t.fn)return F.placeholder.charAt(e%F.placeholder.length);if(-1<e&&getMaskSet().validPositions[e]===V){var i,n=getTests(e),r=[];if(n.length>1+(""===n[n.length-1].match.def?1:0))for(var s=0;s<n.length;s++)if(!0!==n[s].match.optionality&&!0!==n[s].match.optionalQuantifier&&(null===n[s].match.fn||i===V||!1!==n[s].match.fn.test(i.match.def,getMaskSet(),e,!0,F))&&(r.push(n[s]),null===n[s].match.fn&&(i=n[s]),1<r.length&&/[0-9a-bA-Z]/.test(r[0].match.def)))return F.placeholder.charAt(e%F.placeholder.length)}return t.def}function HandleNativePlaceholder(e,t){if(x&&e.inputmask._valueGet()!==t){var a=getBuffer().slice(),i=e.inputmask._valueGet();i!==t&&(-1===getLastValidPosition()&&i===getBufferTemplate().join("")?a=[]:clearOptionalTail(a),writeBuffer(e,a))}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))}var a,o={on:function on(e,t,r){var a=function ev(e){var t=this;if(t.inputmask===V&&"FORM"!==this.nodeName){var a=L.data(t,"_inputmask_opts");a?new Inputmask(a).mask(t):o.off(t)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(t.disabled||t.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===F.tabThrough&&e.keyCode===Inputmask.keyCode.TAB))){switch(e.type){case"input":if(!0===c)return c=!1,e.preventDefault();if(P){var i=arguments;return setTimeout(function(){r.apply(t,i),caret(t,t.inputmask.caretPos,V,!0)},0),!1}break;case"keydown":c=s=!1;break;case"keypress":if(!0===s)return e.preventDefault();s=!0;break;case"click":if(_||E){var i=arguments;return setTimeout(function(){r.apply(t,i)},0),!1}}var n=r.apply(t,arguments);return!1===n&&(e.preventDefault(),e.stopPropagation()),n}e.preventDefault()}};e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(a),-1!==L.inArray(t,["submit","reset"])?null!==e.form&&L(e.form).on(t,a):L(e).on(t,a)},off:function off(i,e){var t;i.inputmask&&i.inputmask.events&&(e?(t=[])[e]=i.inputmask.events[e]:t=i.inputmask.events,L.each(t,function(e,t){for(;0<t.length;){var a=t.pop();-1!==L.inArray(e,["submit","reset"])?null!==i.form&&L(i.form).off(e,a):L(i).off(e,a)}delete i.inputmask.events[e]}))}},v={keydownEvent:function keydownEvent(e){var t=this,a=L(t),i=e.keyCode,n=caret(t);if(i===Inputmask.keyCode.BACKSPACE||i===Inputmask.keyCode.DELETE||E&&i===Inputmask.keyCode.BACKSPACE_SAFARI||e.ctrlKey&&i===Inputmask.keyCode.X&&!isInputEventSupported("cut"))e.preventDefault(),handleRemove(0,i,n),writeBuffer(t,getBuffer(!0),getMaskSet().p,e,t.inputmask._valueGet()!==getBuffer().join(""));else if(i===Inputmask.keyCode.END||i===Inputmask.keyCode.PAGE_DOWN){e.preventDefault();var r=seekNext(getLastValidPosition());caret(t,e.shiftKey?n.begin:r,r,!0)}else i===Inputmask.keyCode.HOME&&!e.shiftKey||i===Inputmask.keyCode.PAGE_UP?(e.preventDefault(),caret(t,0,e.shiftKey?n.begin:0,!0)):(F.undoOnEscape&&i===Inputmask.keyCode.ESCAPE||90===i&&e.ctrlKey)&&!0!==e.altKey?(checkVal(t,!0,!1,d.split("")),a.trigger("click")):i!==Inputmask.keyCode.INSERT||e.shiftKey||e.ctrlKey?!0===F.tabThrough&&i===Inputmask.keyCode.TAB&&(!0===e.shiftKey?(null===getTest(n.begin).match.fn&&(n.begin=seekNext(n.begin)),n.end=seekPrevious(n.begin,!0),n.begin=seekPrevious(n.end,!0)):(n.begin=seekNext(n.begin,!0),n.end=seekNext(n.begin,!0),n.end<getMaskSet().maskLength&&n.end--),n.begin<getMaskSet().maskLength&&(e.preventDefault(),caret(t,n.begin,n.end))):(F.insertMode=!F.insertMode,t.setAttribute("im-insert",F.insertMode));F.onKeyDown.call(this,e,getBuffer(),caret(t).begin,F),h=-1!==L.inArray(i,F.ignorables)},keypressEvent:function keypressEvent(e,t,a,i,n){var r=this,s=L(r),o=e.which||e.charCode||e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||h))return o===Inputmask.keyCode.ENTER&&d!==getBuffer().join("")&&(d=getBuffer().join(""),setTimeout(function(){s.trigger("change")},0)),!0;if(o){46===o&&!1===e.shiftKey&&""!==F.radixPoint&&(o=F.radixPoint.charCodeAt(0));var l,u=t?{begin:n,end:n}:caret(r),c=String.fromCharCode(o),p=0;if(F._radixDance&&F.numericInput){var f=getBuffer().indexOf(F.radixPoint.charAt(0))+1;u.begin<=f&&(o===F.radixPoint.charCodeAt(0)&&(p=1),u.begin-=1,u.end-=1)}getMaskSet().writeOutBuffer=!0;var g=isValid(u,c,i);if(!1!==g&&(resetMaskSet(!0),l=g.caret!==V?g.caret:seekNext(g.pos.begin?g.pos.begin:g.pos),getMaskSet().p=l),l=(F.numericInput&&g.caret===V?seekPrevious(l):l)+p,!1!==a&&(setTimeout(function(){F.onKeyValidation.call(r,o,g,F)},0),getMaskSet().writeOutBuffer&&!1!==g)){var m=getBuffer();writeBuffer(r,m,l,e,!0!==t)}if(e.preventDefault(),t)return!1!==g&&(g.forwardPosition=l),g}},pasteEvent:function pasteEvent(e){var t,a=this,i=e.originalEvent||e,n=(L(a),a.inputmask._valueGet(!0)),r=caret(a);k&&(t=r.end,r.end=r.begin,r.begin=t);var s=n.substr(0,r.begin),o=n.substr(r.end,n.length);if(s===(k?getBufferTemplate().reverse():getBufferTemplate()).slice(0,r.begin).join("")&&(s=""),o===(k?getBufferTemplate().reverse():getBufferTemplate()).slice(r.end).join("")&&(o=""),M.clipboardData&&M.clipboardData.getData)n=s+M.clipboardData.getData("Text")+o;else{if(!i.clipboardData||!i.clipboardData.getData)return!0;n=s+i.clipboardData.getData("text/plain")+o}var l=n;if(L.isFunction(F.onBeforePaste)){if(!1===(l=F.onBeforePaste.call(u,n,F)))return e.preventDefault();l||(l=n)}return checkVal(a,!1,!1,l.toString().split("")),writeBuffer(a,getBuffer(),seekNext(getLastValidPosition()),e,d!==getBuffer().join("")),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){var i=this,t=i.inputmask._valueGet();if(getBuffer().join("")!==t){var a=caret(i);if(t=function ieMobileHandler(e,t,a){if(_){var i=t.replace(getBuffer().join(""),"");if(1===i.length){var n=t.split("");n.splice(a.begin,0,i),t=n.join("")}}return t}(0,t=function radixPointHandler(e,t,a){return"."===t.charAt(a.begin-1)&&""!==F.radixPoint&&((t=t.split(""))[a.begin-1]=F.radixPoint.charAt(0),t=t.join("")),t}(0,t,a),a),getBuffer().join("")!==t){var n=getBuffer().join(""),r=!F.numericInput&&t.length>n.length?-1:0,s=t.substr(0,a.begin),o=t.substr(a.begin),l=n.substr(0,a.begin+r),u=n.substr(a.begin+r),c=a,p="",f=!1;if(s!==l){var g,m=(f=s.length>=l.length)?s.length:l.length;for(g=0;s.charAt(g)===l.charAt(g)&&g<m;g++);f&&(c.begin=g-r,p+=s.slice(g,c.end))}if(o!==u&&(o.length>u.length?p+=o.slice(0,1):o.length<u.length&&(c.end+=u.length-o.length,f||""===F.radixPoint||""!==o||s.charAt(c.begin+r-1)!==F.radixPoint||(c.begin--,p=F.radixPoint))),writeBuffer(i,getBuffer(),{begin:c.begin+r,end:c.end+r}),0<p.length)L.each(p.split(""),function(e,t){var a=new L.Event("keypress");a.which=t.charCodeAt(0),h=!1,v.keypressEvent.call(i,a)});else{c.begin===c.end-1&&(c.begin=seekPrevious(c.begin+1),c.begin===c.end-1?caret(i,c.begin):caret(i,c.begin,c.end));var d=new L.Event("keydown");d.keyCode=F.numericInput?Inputmask.keyCode.BACKSPACE:Inputmask.keyCode.DELETE,v.keydownEvent.call(i,d)}e.preventDefault()}}},beforeInputEvent:function beforeInputEvent(e){if(e.cancelable){var i=this;switch(e.inputType){case"insertText":return L.each(e.data.split(""),function(e,t){var a=new L.Event("keypress");a.which=t.charCodeAt(0),h=!1,v.keypressEvent.call(i,a)}),e.preventDefault();case"deleteContentBackward":var t=new L.Event("keydown");return t.keyCode=Inputmask.keyCode.BACKSPACE,v.keydownEvent.call(i,t),e.preventDefault();case"deleteContentForward":var t=new L.Event("keydown");return t.keyCode=Inputmask.keyCode.DELETE,v.keydownEvent.call(i,t),e.preventDefault()}}},setValueEvent:function setValueEvent(e){this.inputmask.refreshValue=!1;var t=e&&e.detail?e.detail[0]:arguments[1],t=t||this.inputmask._valueGet(!0);L.isFunction(F.onBeforeMask)&&(t=F.onBeforeMask.call(u,t,F)||t),checkVal(this,!0,!1,t=t.split("")),d=getBuffer().join(""),(F.clearMaskOnLostFocus||F.clearIncomplete)&&this.inputmask._valueGet()===getBufferTemplate().join("")&&this.inputmask._valueSet("")},focusEvent:function focusEvent(e){var t=this,a=t.inputmask._valueGet();F.showMaskOnFocus&&(!F.showMaskOnHover||F.showMaskOnHover&&""===a)&&(t.inputmask._valueGet()!==getBuffer().join("")?writeBuffer(t,getBuffer(),seekNext(getLastValidPosition())):!1===i&&caret(t,seekNext(getLastValidPosition()))),!0===F.positionCaretOnTab&&!1===i&&v.clickEvent.apply(t,[e,!0]),d=getBuffer().join("")},mouseleaveEvent:function mouseleaveEvent(e){i=!1,F.clearMaskOnLostFocus&&S.activeElement!==this&&HandleNativePlaceholder(this,r)},clickEvent:function clickEvent(e,u){var c=this;setTimeout(function(){if(S.activeElement===c){var e=caret(c);if(u&&(k?e.end=e.begin:e.begin=e.end),e.begin===e.end)switch(F.positionCaretOnClick){case"none":break;case"select":caret(c,0,getBuffer().length);break;case"ignore":caret(c,seekNext(getLastValidPosition()));break;case"radixFocus":if(function doRadixFocus(e){if(""!==F.radixPoint){var t=getMaskSet().validPositions;if(t[e]===V||t[e].input===getPlaceholder(e)){if(e<seekNext(-1))return!0;var a=L.inArray(F.radixPoint,getBuffer());if(-1!==a){for(var i in t)if(a<i&&t[i].input!==getPlaceholder(i))return!1;return!0}}}return!1}(e.begin)){var t=getBuffer().join("").indexOf(F.radixPoint);caret(c,F.numericInput?seekNext(t):t);break}default:var a=e.begin,i=getLastValidPosition(a,!0),n=seekNext(i);if(a<n)caret(c,isMask(a,!0)||isMask(a-1,!0)?a:seekNext(a));else{var r=getMaskSet().validPositions[i],s=getTestTemplate(n,r?r.match.locator:V,r),o=getPlaceholder(n,s.match);if(""!==o&&getBuffer()[n]!==o&&!0!==s.match.optionalQuantifier&&!0!==s.match.newBlockMarker||!isMask(n,F.keepStatic)&&s.match.def===o){var l=seekNext(n);(l<=a||a===n)&&(n=l)}caret(c,n)}}}},0)},cutEvent:function cutEvent(e){L(this);var t=caret(this),a=e.originalEvent||e,i=M.clipboardData||a.clipboardData,n=k?getBuffer().slice(t.end,t.begin):getBuffer().slice(t.begin,t.end);i.setData("text",k?n.reverse().join(""):n.join("")),S.execCommand&&S.execCommand("copy"),handleRemove(0,Inputmask.keyCode.DELETE,t),writeBuffer(this,getBuffer(),getMaskSet().p,e,d!==getBuffer().join(""))},blurEvent:function blurEvent(e){var t=L(this);if(this.inputmask){HandleNativePlaceholder(this,r);var a=this.inputmask._valueGet(),i=getBuffer().slice();""===a&&f===V||(F.clearMaskOnLostFocus&&(-1===getLastValidPosition()&&a===getBufferTemplate().join("")?i=[]:clearOptionalTail(i)),!1===isComplete(i)&&(setTimeout(function(){t.trigger("incomplete")},0),F.clearIncomplete&&(resetMaskSet(),i=F.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(this,i,V,e)),d!==getBuffer().join("")&&(d=i.join(""),t.trigger("change"))}},mouseenterEvent:function mouseenterEvent(e){i=!0,S.activeElement!==this&&F.showMaskOnHover&&HandleNativePlaceholder(this,(k?getBuffer().slice().reverse():getBuffer()).join(""))},submitEvent:function submitEvent(e){d!==getBuffer().join("")&&n.trigger("change"),F.clearMaskOnLostFocus&&-1===getLastValidPosition()&&l.inputmask._valueGet&&l.inputmask._valueGet()===getBufferTemplate().join("")&&l.inputmask._valueSet(""),F.clearIncomplete&&!1===isComplete(getBuffer())&&l.inputmask._valueSet(""),F.removeMaskOnSubmit&&(l.inputmask._valueSet(l.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(l,getBuffer())},0))},resetEvent:function resetEvent(e){l.inputmask.refreshValue=!0,setTimeout(function(){n.trigger("setvalue")},0)}};function checkVal(n,e,r,t,a){var s=this||n.inputmask,o=t.slice(),l="",u=-1,c=V;if(resetMaskSet(),r||!0===F.autoUnmask)u=seekNext(u);else{var i=getBufferTemplate().slice(0,seekNext(-1)).join(""),p=o.join("").match(new RegExp("^"+Inputmask.escapeRegex(i),"g"));p&&0<p.length&&(o.splice(0,p.length*i.length),u=seekNext(u))}-1===u?(getMaskSet().p=seekNext(u),u=0):getMaskSet().p=u,s.caretPos={begin:u},L.each(o,function(e,t){if(t!==V)if(getMaskSet().validPositions[e]===V&&o[e]===getPlaceholder(e)&&isMask(e,!0)&&!1===isValid(e,o[e],!0,V,V,!0))getMaskSet().p++;else{var a=new L.Event("_checkval");a.which=t.charCodeAt(0),l+=t;var i=getLastValidPosition(V,!0);!function isTemplateMatch(e,t){return-1!==getMaskTemplate(!0,0,!1).slice(e,seekNext(e)).join("").replace(/'/g,"").indexOf(t)&&!isMask(e)&&(getTest(e).match.nativeDef===t.charAt(0)||null===getTest(e).match.fn&&getTest(e).match.nativeDef==="'"+t.charAt(0)||" "===getTest(e).match.nativeDef&&(getTest(e+1).match.nativeDef===t.charAt(0)||null===getTest(e+1).match.fn&&getTest(e+1).match.nativeDef==="'"+t.charAt(0)))}(u,l)?(c=v.keypressEvent.call(n,a,!0,!1,r,s.caretPos.begin))&&(u=s.caretPos.begin+1,l=""):c=v.keypressEvent.call(n,a,!0,!1,r,i+1),c&&(writeBuffer(V,getBuffer(),c.forwardPosition,a,!1),s.caretPos={begin:c.forwardPosition,end:c.forwardPosition})}}),e&&writeBuffer(n,getBuffer(),c?c.forwardPosition:V,a||new L.Event("checkval"),a&&"input"===a.type)}function unmaskedvalue(e){if(e){if(e.inputmask===V)return e.value;e.inputmask&&e.inputmask.refreshValue&&v.setValueEvent.call(e)}var t=[],a=getMaskSet().validPositions;for(var i in a)a[i].match&&null!=a[i].match.fn&&t.push(a[i].input);var n=0===t.length?"":(k?t.reverse():t).join("");if(L.isFunction(F.onUnMask)){var r=(k?getBuffer().slice().reverse():getBuffer()).join("");n=F.onUnMask.call(u,r,n,F)}return n}function caret(e,t,a,i){function translatePosition(e){return!k||"number"!=typeof e||F.greedy&&""===F.placeholder||!l||(e=l.inputmask._valueGet().length-e),e}var n;if(t===V)return"selectionStart"in e?(t=e.selectionStart,a=e.selectionEnd):M.getSelection?(n=M.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&n.commonAncestorContainer!==e||(t=n.startOffset,a=n.endOffset):S.selection&&S.selection.createRange&&(n=S.selection.createRange(),t=0-n.duplicate().moveStart("character",-e.inputmask._valueGet().length),a=t+n.text.length),{begin:i?t:translatePosition(t),end:i?a:translatePosition(a)};if(L.isArray(t)&&(a=k?t[0]:t[1],t=k?t[1]:t[0]),t.begin!==V&&(a=k?t.begin:t.end,t=k?t.end:t.begin),"number"==typeof t){t=i?t:translatePosition(t),a="number"==typeof(a=i?a:translatePosition(a))?a:t;var r=parseInt(((e.ownerDocument.defaultView||M).getComputedStyle?(e.ownerDocument.defaultView||M).getComputedStyle(e,null):e.currentStyle).fontSize)*a;if(e.scrollLeft=r>e.scrollWidth?r:0,e.inputmask.caretPos={begin:t,end:a},e===S.activeElement){if("selectionStart"in e)e.selectionStart=t,e.selectionEnd=a;else if(M.getSelection){if(n=S.createRange(),e.firstChild===V||null===e.firstChild){var s=S.createTextNode("");e.appendChild(s)}n.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),n.setEnd(e.firstChild,a<e.inputmask._valueGet().length?a:e.inputmask._valueGet().length),n.collapse(!0);var o=M.getSelection();o.removeAllRanges(),o.addRange(n)}else e.createTextRange&&((n=e.createTextRange()).collapse(!0),n.moveEnd("character",a),n.moveStart("character",t),n.select());renderColorMask(e,{begin:t,end:a})}}}function determineLastRequiredPosition(e){var t,a,i=getMaskTemplate(!0,getLastValidPosition(),!0,!0),n=i.length,r=getLastValidPosition(),s={},o=getMaskSet().validPositions[r],l=o!==V?o.locator.slice():V;for(t=r+1;t<i.length;t++)a=getTestTemplate(t,l,t-1),l=a.locator.slice(),s[t]=L.extend(!0,{},a);var u=o&&o.alternation!==V?o.locator[o.alternation]:V;for(t=n-1;r<t&&((a=s[t]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||u&&(u!==s[t].locator[o.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[o.alternation]&&checkAlternationMatch(a.locator[o.alternation].toString().split(","),u.toString().split(","))&&""!==getTests(t)[0].def))&&i[t]===getPlaceholder(t,a.match);t--)n--;return e?{l:n,def:s[n]?s[n].match:V}:n}function clearOptionalTail(e){for(var t,a=getMaskTemplate(!(e.length=0),0,!0,V,!0);(t=a.shift())!==V;)e.push(t);return e}function isComplete(e){if(L.isFunction(F.isComplete))return F.isComplete(e,F);if("*"===F.repeat)return V;var t=!1,a=determineLastRequiredPosition(!0),i=seekPrevious(a.l);if(a.def===V||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){t=!0;for(var n=0;n<=i;n++){var r=getTestTemplate(n).match;if(null!==r.fn&&getMaskSet().validPositions[n]===V&&!0!==r.optionality&&!0!==r.optionalQuantifier||null===r.fn&&e[n]!==getPlaceholder(n,r)){t=!1;break}}}return t}function handleRemove(e,t,a,i,n){if((F.numericInput||k)&&(t===Inputmask.keyCode.BACKSPACE?t=Inputmask.keyCode.DELETE:t===Inputmask.keyCode.DELETE&&(t=Inputmask.keyCode.BACKSPACE),k)){var r=a.end;a.end=a.begin,a.begin=r}if(t===Inputmask.keyCode.BACKSPACE&&a.end-a.begin<1?(a.begin=seekPrevious(a.begin),getMaskSet().validPositions[a.begin]!==V&&getMaskSet().validPositions[a.begin].input===F.groupSeparator&&a.begin--):t===Inputmask.keyCode.DELETE&&a.begin===a.end&&(a.end=isMask(a.end,!0)&&getMaskSet().validPositions[a.end]&&getMaskSet().validPositions[a.end].input!==F.radixPoint?a.end+1:seekNext(a.end)+1,getMaskSet().validPositions[a.begin]!==V&&getMaskSet().validPositions[a.begin].input===F.groupSeparator&&a.end++),revalidateMask(a),!0!==i&&!1!==F.keepStatic||null!==F.regex){var s=alternate(!0);if(s){var o=s.caret!==V?s.caret:s.pos?seekNext(s.pos.begin?s.pos.begin:s.pos):getLastValidPosition(-1,!0);(t!==Inputmask.keyCode.DELETE||a.begin>o)&&a.begin}}var l=getLastValidPosition(a.begin,!0);if(l<a.begin||-1===a.begin)getMaskSet().p=seekNext(l);else if(!0!==i&&(getMaskSet().p=a.begin,!0!==n))for(;getMaskSet().p<l&&getMaskSet().validPositions[getMaskSet().p]===V;)getMaskSet().p++}function initializeColorMask(u){var c=(u.ownerDocument.defaultView||M).getComputedStyle(u,null),e=S.createElement("div");e.style.width=c.width,e.style.textAlign=c.textAlign,f=S.createElement("div"),(u.inputmask.colorMask=f).className="im-colormask",u.parentNode.insertBefore(f,u),u.parentNode.removeChild(u),f.appendChild(u),f.appendChild(e),u.style.left=e.offsetLeft+"px",L(f).on("mouseleave",function(e){return v.mouseleaveEvent.call(u,[e])}),L(f).on("mouseenter",function(e){return v.mouseenterEvent.call(u,[e])}),L(f).on("click",function(e){return caret(u,function findCaretPos(e){var t,a=S.createElement("span");for(var i in c)isNaN(i)&&-1!==i.indexOf("font")&&(a.style[i]=c[i]);a.style.textTransform=c.textTransform,a.style.letterSpacing=c.letterSpacing,a.style.position="absolute",a.style.height="auto",a.style.width="auto",a.style.visibility="hidden",a.style.whiteSpace="nowrap",S.body.appendChild(a);var n,r=u.inputmask._valueGet(),s=0;for(t=0,n=r.length;t<=n;t++){if(a.innerHTML+=r.charAt(t)||"_",a.offsetWidth>=e){var o=e-s,l=a.offsetWidth-e;a.innerHTML=r.charAt(t),o-=a.offsetWidth/3,t=o<l?t-1:t;break}s=a.offsetWidth}return S.body.removeChild(a),t}(e.clientX)),v.clickEvent.call(u,[e])})}function renderColorMask(e,t,a){var i,n,r,s=[],o=!1,l=0;function setEntry(e){if(e===V&&(e=""),o||null!==i.fn&&n.input!==V)if(o&&(null!==i.fn&&n.input!==V||""===i.def)){o=!1;var t=s.length;s[t-1]=s[t-1]+"</span>",s.push(e)}else s.push(e);else o=!0,s.push("<span class='im-static'>"+e)}if(f!==V){var u=getBuffer();if(t===V?t=caret(e):t.begin===V&&(t={begin:t,end:t}),!0!==a){for(var c=getLastValidPosition();getMaskSet().validPositions[l]?(n=getMaskSet().validPositions[l],i=n.match,r=n.locator.slice(),setEntry(u[l])):(n=getTestTemplate(l,r,l-1),i=n.match,r=n.locator.slice(),!1===F.jitMasking||l<c||"number"==typeof F.jitMasking&&isFinite(F.jitMasking)&&F.jitMasking>l?setEntry(getPlaceholder(l,i)):o=!1),l++,(m===V||l<m)&&(null!==i.fn||""!==i.def)||l<c||o;);o&&setEntry(),function setCaret(){S.activeElement===e&&(s.splice(t.begin,0,t.begin===t.end||t.end>getMaskSet().maskLength?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),s.splice(t.end+1,0,"</mark>"))}()}var p=f.getElementsByTagName("div")[0];p.innerHTML=s.join(""),e.inputmask.positionColorMask(e,p)}}if(Inputmask.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},e!==V)switch(e.action){case"isComplete":return l=e.el,isComplete(getBuffer());case"unmaskedvalue":return l!==V&&e.value===V||(a=e.value,a=(L.isFunction(F.onBeforeMask)&&F.onBeforeMask.call(u,a,F)||a).split(""),checkVal.call(this,V,!1,!1,a),L.isFunction(F.onBeforeWrite)&&F.onBeforeWrite.call(u,V,getBuffer(),0,F)),unmaskedvalue(l);case"mask":!function mask(e){function isElementTypeSupported(e,r){function patchValueProperty(e){var t,a,i;function patchValhook(e){if(L.valHooks&&(L.valHooks[e]===V||!0!==L.valHooks[e].inputmaskpatch)){var a=L.valHooks[e]&&L.valHooks[e].get?L.valHooks[e].get:function(e){return e.value},n=L.valHooks[e]&&L.valHooks[e].set?L.valHooks[e].set:function(e,t){return e.value=t,e};L.valHooks[e]={get:function get(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=a(e);return-1!==getLastValidPosition(V,V,e.inputmask.maskset.validPositions)||!0!==r.nullable?t:""}return a(e)},set:function set(e,t){var a,i=L(e);return a=n(e,t),e.inputmask&&i.trigger("setvalue",[t]),a},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==getLastValidPosition()||!0!==r.nullable?S.activeElement===this&&r.clearMaskOnLostFocus?(k?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):t.call(this):"":t.call(this)}function setter(e){a.call(this,e),this.inputmask&&L(this).trigger("setvalue",[e])}if(!e.inputmask.__valueGet){if(!0!==r.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===T("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var n=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"):V;n&&n.get&&n.set?(t=n.get,a=n.set,Object.defineProperty(e,"value",{get:getter,set:setter,configurable:!0})):"INPUT"!==e.tagName&&(t=function valueGet(){return this.textContent},a=function valueSet(e){this.textContent=e},Object.defineProperty(e,"value",{get:getter,set:setter,configurable:!0}))}else S.__lookupGetter__&&e.__lookupGetter__("value")&&(t=e.__lookupGetter__("value"),a=e.__lookupSetter__("value"),e.__defineGetter__("value",getter),e.__defineSetter__("value",setter));e.inputmask.__valueGet=t,e.inputmask.__valueSet=a}e.inputmask._valueGet=function(e){return k&&!0!==e?t.call(this.el).split("").reverse().join(""):t.call(this.el)},e.inputmask._valueSet=function(e,t){a.call(this.el,null===e||e===V?"":!0!==t&&k?e.split("").reverse().join(""):e)},t===V&&(t=function valueGet(){return this.value},a=function valueSet(e){this.value=e},patchValhook(e.type),i=e,o.on(i,"mouseenter",function(e){var t=L(this),a=this.inputmask._valueGet();a!==getBuffer().join("")&&t.trigger("setvalue")}))}}var t=e.getAttribute("type"),a="INPUT"===e.tagName&&-1!==L.inArray(t,r.supportsInputType)||e.isContentEditable||"TEXTAREA"===e.tagName;if(!a)if("INPUT"===e.tagName){var i=S.createElement("input");i.setAttribute("type",t),a="text"===i.type,i=null}else a="partial";return!1!==a?patchValueProperty(e):e.inputmask=V,a}o.off(e);var t=isElementTypeSupported(e,F);if(!1!==t&&(n=L(l=e),r=l.placeholder,-1===(m=l!==V?l.maxLength:V)&&(m=V),!0===F.colorMask&&initializeColorMask(l),P&&("inputmode"in l&&(l.inputmode=F.inputmode,l.setAttribute("inputmode",F.inputmode)),!0===F.disablePredictiveText&&("autocorrect"in l?l.autocorrect=!1:(!0!==F.colorMask&&initializeColorMask(l),l.type="password"))),!0===t&&(l.setAttribute("im-insert",F.insertMode),o.on(l,"submit",v.submitEvent),o.on(l,"reset",v.resetEvent),o.on(l,"blur",v.blurEvent),o.on(l,"focus",v.focusEvent),!0!==F.colorMask&&(o.on(l,"click",v.clickEvent),o.on(l,"mouseleave",v.mouseleaveEvent),o.on(l,"mouseenter",v.mouseenterEvent)),o.on(l,"paste",v.pasteEvent),o.on(l,"cut",v.cutEvent),o.on(l,"complete",F.oncomplete),o.on(l,"incomplete",F.onincomplete),o.on(l,"cleared",F.oncleared),P||!0===F.inputEventOnly?l.removeAttribute("maxLength"):(o.on(l,"keydown",v.keydownEvent),o.on(l,"keypress",v.keypressEvent)),o.on(l,"input",v.inputFallBackEvent),o.on(l,"beforeinput",v.beforeInputEvent)),o.on(l,"setvalue",v.setValueEvent),d=getBufferTemplate().join(""),""!==l.inputmask._valueGet(!0)||!1===F.clearMaskOnLostFocus||S.activeElement===l)){var a=L.isFunction(F.onBeforeMask)&&F.onBeforeMask.call(u,l.inputmask._valueGet(!0),F)||l.inputmask._valueGet(!0);""!==a&&checkVal(l,!0,!1,a.split(""));var i=getBuffer().slice();d=i.join(""),!1===isComplete(i)&&F.clearIncomplete&&resetMaskSet(),F.clearMaskOnLostFocus&&S.activeElement!==l&&(-1===getLastValidPosition()?i=[]:clearOptionalTail(i)),(!1===F.clearMaskOnLostFocus||F.showMaskOnFocus&&S.activeElement===l||""!==l.inputmask._valueGet(!0))&&writeBuffer(l,i),S.activeElement===l&&caret(l,seekNext(getLastValidPosition()))}}(l);break;case"format":return a=(L.isFunction(F.onBeforeMask)&&F.onBeforeMask.call(u,e.value,F)||e.value).split(""),checkVal.call(this,V,!0,!1,a),e.metadata?{value:k?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},t,F)}:k?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":e.value?(a=e.value.split(""),checkVal.call(this,V,!0,!0,a)):e.value=getBuffer().join("");for(var p=getBuffer(),g=determineLastRequiredPosition(),y=p.length-1;g<y&&!isMask(y);y--);return p.splice(g,y+1-g),isComplete(p)&&e.value===getBuffer().join("");case"getemptymask":return getBufferTemplate().join("");case"remove":return l&&l.inputmask&&(L.data(l,"_inputmask_opts",null),n=L(l),l.inputmask._valueSet(F.autoUnmask?unmaskedvalue(l):l.inputmask._valueGet(!0)),o.off(l),l.inputmask.colorMask&&((f=l.inputmask.colorMask).removeChild(l),f.parentNode.insertBefore(l,f),f.parentNode.removeChild(f)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(l),"value")&&l.inputmask.__valueGet&&Object.defineProperty(l,"value",{get:l.inputmask.__valueGet,set:l.inputmask.__valueSet,configurable:!0}):S.__lookupGetter__&&l.__lookupGetter__("value")&&l.inputmask.__valueGet&&(l.__defineGetter__("value",l.inputmask.__valueGet),l.__defineSetter__("value",l.inputmask.__valueSet)),l.inputmask=V),l;case"getmetadata":if(L.isArray(t.metadata)){var b=getMaskTemplate(!0,0,!1).join("");return L.each(t.metadata,function(e,t){if(t.mask===b)return b=t,!1}),b}return t.metadata}}return Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:L.noop,onincomplete:L.noop,oncleared:L.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:L.noop,onBeforeMask:null,onBeforePaste:function onBeforePaste(e,t){return L.isFunction(t.onBeforeMask)?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:L.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:V,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0,shiftPositions:!0},definitions:{9:{validator:"[0-9\uff11-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}},aliases:{},masksCache:{},mask:function mask(e){var n=this;return"string"==typeof e&&(e=S.getElementById(e)||S.querySelectorAll(e)),e=e.nodeName?[e]:e,L.each(e,function(e,t){var a=L.extend(!0,{},n.opts);if(function importAttributeOptions(a,e,i,n){if(!0===e.importDataAttributes){var t,r,s,o,l=function importOption(e,t){null!==(t=t!==V?t:a.getAttribute(n+"-"+e))&&("string"==typeof t&&(0===e.indexOf("on")?t=M[t]:"false"===t?t=!1:"true"===t&&(t=!0)),i[e]=t)},u=a.getAttribute(n);if(u&&""!==u&&(u=u.replace(/'/g,'"'),r=JSON.parse("{"+u+"}")),r)for(o in s=V,r)if("alias"===o.toLowerCase()){s=r[o];break}for(t in l("alias",s),i.alias&&resolveAlias(i.alias,i,e),e){if(r)for(o in s=V,r)if(o.toLowerCase()===t.toLowerCase()){s=r[o];break}l(t,s)}}return L.extend(!0,e,i),("rtl"===a.dir||e.rightAlign)&&(a.style.textAlign="right"),("rtl"===a.dir||e.numericInput)&&(a.dir="ltr",a.removeAttribute("dir"),e.isRTL=!0),Object.keys(i).length}(t,a,L.extend(!0,{},n.userOptions),n.dataAttribute)){var i=generateMaskSet(a,n.noMasksCache);i!==V&&(t.inputmask!==V&&(t.inputmask.opts.autoUnmask=!0,t.inputmask.remove()),t.inputmask=new Inputmask(V,V,!0),t.inputmask.opts=a,t.inputmask.noMasksCache=n.noMasksCache,t.inputmask.userOptions=L.extend(!0,{},n.userOptions),t.inputmask.isRTL=a.isRTL||a.numericInput,(t.inputmask.el=t).inputmask.maskset=i,L.data(t,"_inputmask_opts",a),maskScope.call(t.inputmask,{action:"mask"}))}}),e&&e[0]&&e[0].inputmask||this},option:function option(e,t){return"string"==typeof e?this.opts[e]:"object"===(void 0===e?"undefined":T(e))?(L.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(e){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:e})},remove:function remove(){return maskScope.call(this,{action:"remove"})},getemptymask:function getemptymask(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"})},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"})},getmetadata:function getmetadata(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"})},isValid:function isValid(e){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:e})},format:function format(e,t){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:e,metadata:t})},setValue:function setValue(e){this.el&&L(this.el).trigger("setvalue",[e])},analyseMask:function analyseMask(e,r,s){var t,a,i,n,o,l,u=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,c=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,p=!1,f=new MaskToken,g=[],m=[];function MaskToken(e,t,a,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=a||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(a,e,i){i=i!==V?i:a.matches.length;var n=a.matches[i-1];if(r)0===e.indexOf("[")||p&&/\\d|\\s|\\w]/i.test(e)||"."===e?a.matches.splice(i++,0,{fn:new RegExp(e,s.casing?"i":""),optionality:!1,newBlockMarker:n===V?"master":n.def!==e,casing:null,def:e,placeholder:V,nativeDef:e}):(p&&(e=e[e.length-1]),L.each(e.split(""),function(e,t){n=a.matches[i-1],a.matches.splice(i++,0,{fn:null,optionality:!1,newBlockMarker:n===V?"master":n.def!==t&&null!==n.fn,casing:null,def:s.staticDefinitionSymbol||t,placeholder:s.staticDefinitionSymbol!==V?t:V,nativeDef:(p?"'":"")+t})})),p=!1;else{var t=(s.definitions?s.definitions[e]:V)||Inputmask.prototype.definitions[e];t&&!p?a.matches.splice(i++,0,{fn:t.validator?"string"==typeof t.validator?new RegExp(t.validator,s.casing?"i":""):new function(){this.test=t.validator}:new RegExp("."),optionality:!1,newBlockMarker:n===V?"master":n.def!==(t.definitionSymbol||e),casing:t.casing,def:t.definitionSymbol||e,placeholder:t.placeholder,nativeDef:e}):(a.matches.splice(i++,0,{fn:null,optionality:!1,newBlockMarker:n===V?"master":n.def!==e&&null!==n.fn,casing:null,def:s.staticDefinitionSymbol||e,placeholder:s.staticDefinitionSymbol!==V?e:V,nativeDef:(p?"'":"")+e}),p=!1)}}function defaultCase(){if(0<g.length){if(insertTestDefinition(n=g[g.length-1],a),n.isAlternator){o=g.pop();for(var e=0;e<o.matches.length;e++)o.matches[e].isGroup&&(o.matches[e].isGroup=!1);0<g.length?(n=g[g.length-1]).matches.push(o):f.matches.push(o)}}else insertTestDefinition(f,a)}function groupify(e){var t=new MaskToken(!0);return t.openGroup=!1,t.matches=e,t}for(r&&(s.optionalmarker[0]=V,s.optionalmarker[1]=V);t=r?c.exec(e):u.exec(e);){if(a=t[0],r)switch(a.charAt(0)){case"?":a="{0,1}";break;case"+":case"*":a="{"+a+"}"}if(p)defaultCase();else switch(a.charAt(0)){case"(?=":case"(?!":case"(?<=":case"(?<!":break;case s.escapeChar:p=!0,r&&defaultCase();break;case s.optionalmarker[1]:case s.groupmarker[1]:if((i=g.pop()).openGroup=!1,i!==V)if(0<g.length){if((n=g[g.length-1]).matches.push(i),n.isAlternator){o=g.pop();for(var d=0;d<o.matches.length;d++)o.matches[d].isGroup=!1,o.matches[d].alternatorGroup=!1;0<g.length?(n=g[g.length-1]).matches.push(o):f.matches.push(o)}}else f.matches.push(i);else defaultCase();break;case s.optionalmarker[0]:g.push(new MaskToken(!1,!0));break;case s.groupmarker[0]:g.push(new MaskToken(!0));break;case s.quantifiermarker[0]:var k=new MaskToken(!1,!1,!0),h=(a=a.replace(/[{}]/g,"")).split("|"),v=h[0].split(","),y=isNaN(v[0])?v[0]:parseInt(v[0]),b=1===v.length?y:isNaN(v[1])?v[1]:parseInt(v[1]);"*"!==y&&"+"!==y||(y="*"===b?0:1),k.quantifier={min:y,max:b,jit:h[1]};var M=0<g.length?g[g.length-1].matches:f.matches;if((t=M.pop()).isAlternator){M.push(t),M=t.matches;var S=new MaskToken(!0),x=M.pop();M.push(S),M=S.matches,t=x}t.isGroup||(t=groupify([t])),M.push(t),M.push(k);break;case s.alternatormarker:var P=function groupQuantifier(e){var t=e.pop();return t.isQuantifier&&(t=groupify([e.pop(),t])),t};if(0<g.length){var _=(n=g[g.length-1]).matches[n.matches.length-1];l=n.openGroup&&(_.matches===V||!1===_.isGroup&&!1===_.isAlternator)?g.pop():P(n.matches)}else l=P(f.matches);if(l.isAlternator)g.push(l);else if(l.alternatorGroup?(o=g.pop(),l.alternatorGroup=!1):o=new MaskToken(!1,!1,!1,!0),o.matches.push(l),g.push(o),l.openGroup){var E=new MaskToken(!(l.openGroup=!1));E.alternatorGroup=!0,g.push(E)}break;default:defaultCase()}}for(;0<g.length;)i=g.pop(),f.matches.push(i);return 0<f.matches.length&&(function verifyGroupMarker(i){i&&i.matches&&L.each(i.matches,function(e,t){var a=i.matches[e+1];(a===V||a.matches===V||!1===a.isQuantifier)&&t&&t.isGroup&&(t.isGroup=!1,r||(insertTestDefinition(t,s.groupmarker[0],0),!0!==t.openGroup&&insertTestDefinition(t,s.groupmarker[1]))),verifyGroupMarker(t)})}(f),m.push(f)),(s.numericInput||s.isRTL)&&function reverseTokens(e){for(var t in e.matches=e.matches.reverse(),e.matches)if(e.matches.hasOwnProperty(t)){var a=parseInt(t);if(e.matches[t].isQuantifier&&e.matches[a+1]&&e.matches[a+1].isGroup){var i=e.matches[t];e.matches.splice(t,1),e.matches.splice(a+1,0,i)}e.matches[t].matches!==V?e.matches[t]=reverseTokens(e.matches[t]):e.matches[t]=((n=e.matches[t])===s.optionalmarker[0]?n=s.optionalmarker[1]:n===s.optionalmarker[1]?n=s.optionalmarker[0]:n===s.groupmarker[0]?n=s.groupmarker[1]:n===s.groupmarker[1]&&(n=s.groupmarker[0]),n)}var n;return e}(m[0]),m}},Inputmask.extendDefaults=function(e){L.extend(!0,Inputmask.prototype.defaults,e)},Inputmask.extendDefinitions=function(e){L.extend(!0,Inputmask.prototype.definitions,e)},Inputmask.extendAliases=function(e){L.extend(!0,Inputmask.prototype.aliases,e)},Inputmask.format=function(e,t,a){return Inputmask(t).format(e,a)},Inputmask.unmask=function(e,t){return Inputmask(t).unmaskedvalue(e)},Inputmask.isValid=function(e,t){return Inputmask(t).isValid(e)},Inputmask.remove=function(e){"string"==typeof e&&(e=S.getElementById(e)||S.querySelectorAll(e)),e=e.nodeName?[e]:e,L.each(e,function(e,t){t.inputmask&&t.inputmask.remove()})},Inputmask.setValue=function(e,a){"string"==typeof e&&(e=S.getElementById(e)||S.querySelectorAll(e)),e=e.nodeName?[e]:e,L.each(e,function(e,t){t.inputmask?t.inputmask.setValue(a):L(t).trigger("setvalue",[a])})},Inputmask.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},Inputmask.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},Inputmask.dependencyLib=L,M.Inputmask=Inputmask}(a(4),a(6))},function(e,t,a){"use strict";e.exports=a(5)},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__5__},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_RESULT__,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};__WEBPACK_AMD_DEFINE_RESULT__=function(){return"undefined"!=typeof window?window:new(eval("require('jsdom').JSDOM"))("").window}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(e,t,a){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(3),l=o.dependencyLib,c={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},i={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function getTokenizer(e){if(!e.tokenizer){var t=[];for(var a in c)-1===t.indexOf(a[0])&&t.push(a[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function parse(e,t,a,i){for(var n,r="";n=getTokenizer(a).exec(e);){if(void 0===t)if(c[n[0]])r+="("+c[n[0]][0]+")";else switch(n[0]){case"[":r+="(";break;case"]":r+=")?";break;default:r+=o.escapeRegex(n[0])}else if(c[n[0]])if(!0!==i&&c[n[0]][3])r+=c[n[0]][3].call(t.date);else c[n[0]][2]?r+=t["raw"+c[n[0]][2]]:r+=n[0];else r+=n[0]}return r}function pad(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function analyseMask(e,t,r){var s,a,i,n={date:new Date(1,0,1)},o=e;function setValue(e,t,a){e[s]=function extendProperty(e){var t=e.replace(/[^0-9]/g,"0");if(t!=e){var a=e.replace(/[^0-9]/g,""),i=(r.min&&r.min[s]||e).toString(),n=(r.max&&r.max[s]||e).toString();t=a+(a<i.slice(0,a.length)?i.slice(a.length):a>n.slice(0,a.length)?n.slice(a.length):t.toString().slice(a.length))}return t}(t),e["raw"+s]=t,void 0!==i&&i.call(e.date,"month"==s?parseInt(e[s])-1:e[s])}if("string"==typeof o){for(;a=getTokenizer(r).exec(t);){var l=o.slice(0,a[0].length);c.hasOwnProperty(a[0])&&(c[a[0]][0],s=c[a[0]][2],i=c[a[0]][1],setValue(n,l)),o=o.slice(l.length)}return n}if(o&&"object"===(void 0===o?"undefined":u(o))&&o.hasOwnProperty("date"))return o}o.extendAliases({datetime:{mask:function mask(e){return c.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=i[e.inputFormat]||e.inputFormat,e.displayFormat=i[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=i[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[\[\]]/,""),e.regex=parse(e.inputFormat,void 0,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},postValidation:function postValidation(e,t,a,i){i.min=analyseMask(i.min,i.inputFormat,i),i.max=analyseMask(i.max,i.inputFormat,i);var n=a,r=analyseMask(e.join(""),i.inputFormat,i);return n&&r.date.getTime()==r.date.getTime()&&(n=(n=function isValidDate(e,t){return(!isFinite(e.rawday)||"29"==e.day&&!isFinite(e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)&&t}(r,n))&&function isDateInRange(e,t){var a=!0;if(t.min){if(e.rawyear){var i=e.rawyear.replace(/[^0-9]/g,"");a=t.min.year.substr(0,i.length)<=i}e.year===e.rawyear&&t.min.date.getTime()==t.min.date.getTime()&&(a=t.min.date.getTime()<=e.date.getTime())}return a&&t.max&&t.max.date.getTime()==t.max.date.getTime()&&(a=t.max.date.getTime()>=e.date.getTime()),a}(r,i)),t&&n&&a.pos!==t?{buffer:parse(i.inputFormat,r,i),refreshFromBuffer:{start:t,end:a.pos}}:n},onKeyDown:function onKeyDown(e,t,a,i){if(e.ctrlKey&&e.keyCode===o.keyCode.RIGHT){for(var n,r=new Date,s="";n=getTokenizer(i).exec(i.inputFormat);)"d"===n[0].charAt(0)?s+=pad(r.getDate(),n[0].length):"m"===n[0].charAt(0)?s+=pad(r.getMonth()+1,n[0].length):"yyyy"===n[0]?s+=r.getFullYear().toString():"y"===n[0].charAt(0)&&(s+=pad(r.getYear(),n[0].length));this.inputmask._valueSet(s),l(this).trigger("setvalue")}},onUnMask:function onUnMask(e,t,a){return parse(a.outputFormat,analyseMask(e,a.inputFormat,a),a,!0)},casing:function casing(e,t,a,i){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},insertMode:!1,shiftPositions:!1}}),e.exports=o},function(e,t,a){"use strict";var k=a(3),h=k.dependencyLib;function autoEscape(e,t){for(var a="",i=0;i<e.length;i++)k.prototype.definitions[e.charAt(i)]||t.definitions[e.charAt(i)]||t.optionalmarker.start===e.charAt(i)||t.optionalmarker.end===e.charAt(i)||t.quantifiermarker.start===e.charAt(i)||t.quantifiermarker.end===e.charAt(i)||t.groupmarker.start===e.charAt(i)||t.groupmarker.end===e.charAt(i)||t.alternatormarker===e.charAt(i)?a+="\\"+e.charAt(i):a+=e.charAt(i);return a}k.extendAliases({numeric:{mask:function mask(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}1<e.placeholder.length&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var mask="[+]";if(mask+=autoEscape(e.prefix,e),!0===e.integerOptional?mask+="~{1,"+e.integerDigits+"}":mask+="~{"+e.integerDigits+"}",void 0!==e.digits){var i=e.decimalProtect?":":e.radixPoint,n=e.digits.toString().split(",");isFinite(n[0])&&n[1]&&isFinite(n[1])?mask+=i+";{"+e.digits+"}":(isNaN(e.digits)||0<parseInt(e.digits))&&(e.digitsOptional?mask+="["+i+";{1,"+e.digits+"}]":mask+=i+";{"+e.digits+"}")}return mask+=autoEscape(e.suffix,e),mask+="[-]",e.greedy=!1,mask},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputType:"text",inputmode:"numeric",preValidation:function preValidation(e,t,a,i,n,r){if("-"===a||a===n.negationSymbol.front)return!0===n.allowMinus&&(n.isNegative=void 0===n.isNegative||!n.isNegative,""===e.join("")||{caret:r.validPositions[t]?t:void 0,dopost:!0});if(!1===i&&a===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||0<parseInt(n.digits))){var s=h.inArray(n.radixPoint,e);if(-1!==s&&void 0!==r.validPositions[s])return!0===n.numericInput?t===s:{caret:s+1}}return!0},postValidation:function postValidation(e,t,a,i){var n=i.suffix.split(""),r=i.prefix.split("");if(void 0===a.pos&&void 0!==a.caret&&!0!==a.dopost)return a;var s=void 0!==a.caret?a.caret:a.pos,o=e.slice();i.numericInput&&(s=o.length-s-1,o=o.reverse());var l=o[s];if(l===i.groupSeparator&&(l=o[s+=1]),s===o.length-i.suffix.length-1&&l===i.radixPoint)return a;void 0!==l&&l!==i.radixPoint&&l!==i.negationSymbol.front&&l!==i.negationSymbol.back&&(o[s]="?",0<i.prefix.length&&s>=(!1===i.isNegative?1:0)&&s<i.prefix.length-1+(!1===i.isNegative?1:0)?r[s-(!1===i.isNegative?1:0)]="?":0<i.suffix.length&&s>=o.length-i.suffix.length-(!1===i.isNegative?1:0)&&(n[s-(o.length-i.suffix.length-(!1===i.isNegative?1:0))]="?")),r=r.join(""),n=n.join("");var u=o.join("").replace(r,"");if(u=(u=(u=(u=u.replace(n,"")).replace(new RegExp(k.escapeRegex(i.groupSeparator),"g"),"")).replace(new RegExp("[-"+k.escapeRegex(i.negationSymbol.front)+"]","g"),"")).replace(new RegExp(k.escapeRegex(i.negationSymbol.back)+"$"),""),isNaN(i.placeholder)&&(u=u.replace(new RegExp(k.escapeRegex(i.placeholder),"g"),"")),1<u.length&&1!==u.indexOf(i.radixPoint)&&("0"===l&&(u=u.replace(/^\?/g,"")),u=u.replace(/^0/g,"")),u.charAt(0)===i.radixPoint&&""!==i.radixPoint&&!0!==i.numericInput&&(u="0"+u),""!==u){if(u=u.split(""),(!i.digitsOptional||i.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(i.digits)){var c=h.inArray(i.radixPoint,u),p=h.inArray(i.radixPoint,o);-1===c&&(u.push(i.radixPoint),c=u.length-1);for(var f=1;f<=i.digits;f++)i.digitsOptional&&(!i.enforceDigitsOnBlur||"blur"!==a.event)||void 0!==u[c+f]&&u[c+f]!==i.placeholder.charAt(0)?-1!==p&&void 0!==o[p+f]&&(u[c+f]=u[c+f]||o[p+f]):u[c+f]=a.placeholder||i.placeholder.charAt(0)}if(!0!==i.autoGroup||""===i.groupSeparator||l===i.radixPoint&&void 0===a.pos&&!a.dopost)u=u.join("");else{var g=u[u.length-1]===i.radixPoint&&a.c===i.radixPoint;u=k(function buildPostMask(e,t){var a="";if(a+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var i=e.join("").split(t.radixPoint);i[1]&&(a+=t.radixPoint+"*{"+i[1].match(/^\d*\??\d*/)[0].length+"}")}return a}(u,i),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(u.join("")),g&&(u+=i.radixPoint),u.charAt(0)===i.groupSeparator&&u.substr(1)}}if(i.isNegative&&"blur"===a.event&&(i.isNegative="0"!==u),u=r+u,u+=n,i.isNegative&&(u=i.negationSymbol.front+u,u+=i.negationSymbol.back),u=u.split(""),void 0!==l)if(l!==i.radixPoint&&l!==i.negationSymbol.front&&l!==i.negationSymbol.back)-1<(s=h.inArray("?",u))?u[s]=l:s=a.caret||0;else if(l===i.radixPoint||l===i.negationSymbol.front||l===i.negationSymbol.back){var m=h.inArray(l,u);-1!==m&&(s=m)}i.numericInput&&(s=u.length-s-1,u=u.reverse());var d={caret:void 0!==l&&void 0===a.pos||void 0===s?s:s+(i.numericInput?-1:1),buffer:u,refreshFromBuffer:a.dopost||e.join("")!==u.join("")};return d.refreshFromBuffer?d:a},onBeforeWrite:function onBeforeWrite(e,t,a,i){if(e)switch(e.type){case"keydown":return i.postValidation(t,a,{caret:a,dopost:!0},i);case"blur":case"checkval":var n;if(function parseMinMaxOptions(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp(k.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp(k.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(i),null!==i.min||null!==i.max){if(n=i.onUnMask(t.join(""),void 0,h.extend({},i,{unmaskAsNumber:!0})),null!==i.min&&n<i.min)return i.isNegative=i.min<0,i.postValidation(i.min.toString().replace(".",i.radixPoint).split(""),a,{caret:a,dopost:!0,placeholder:"0"},i);if(null!==i.max&&n>i.max)return i.isNegative=i.max<0,i.postValidation(i.max.toString().replace(".",i.radixPoint).split(""),a,{caret:a,dopost:!0,placeholder:"0"},i)}return i.postValidation(t,a,{caret:a,placeholder:"0",event:"blur"},i);case"_checkval":return{caret:a}}},regex:{integerPart:function integerPart(e,t){return t?new RegExp("["+k.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+k.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function integerNPart(e){return new RegExp("[\\d"+k.escapeRegex(e.groupSeparator)+k.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function validator(e,t,a,i,n,r){var s;if("k"===e||"m"===e){s={insert:[],c:0};for(var o=0,l="k"===e?2:5;o<l;o++)s.insert.push({pos:a+o,c:0});return s.pos=a+l,s}if(!0===(s=i?new RegExp("[0-9"+k.escapeRegex(n.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e))){if(!0!==n.numericInput&&void 0!==t.validPositions[a]&&"~"===t.validPositions[a].match.def&&!r){var u=t.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+k.escapeRegex(n.negationSymbol.front)+"]","g"),"")).replace(new RegExp(k.escapeRegex(n.negationSymbol.back)+"$"),"")).split(n.radixPoint);1<c.length&&(c[1]=c[1].replace(/0/g,n.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,n.placeholder.charAt(0))),u=c[0]+n.radixPoint+c[1]||"";var p=t._buffer.join("");for(u===n.radixPoint&&(u=p);null===u.match(k.escapeRegex(p)+"$");)p=p.slice(1);s=void 0===(u=(u=u.replace(p,"")).split(""))[a]?{pos:a,remove:a}:{pos:a}}}else i||e!==n.radixPoint||void 0!==t.validPositions[a-1]||(s={insert:{pos:a,c:0},pos:a+1});return s},cardinality:1},"+":{validator:function validator(e,t,a,i,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function validator(e,t,a,i,n){return n.allowMinus&&e===n.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function validator(e,t,a,i,n){var r="["+k.escapeRegex(n.radixPoint)+"]",s=new RegExp(r).test(e);return s&&t.validPositions[a]&&t.validPositions[a].match.placeholder===n.radixPoint&&(s={caret:a+1}),s},cardinality:1,placeholder:function placeholder(e){return e.radixPoint}}},onUnMask:function onUnMask(e,t,a){if(""===t&&!0===a.nullable)return t;var i=e.replace(a.prefix,"");return i=(i=i.replace(a.suffix,"")).replace(new RegExp(k.escapeRegex(a.groupSeparator),"g"),""),""!==a.placeholder.charAt(0)&&(i=i.replace(new RegExp(a.placeholder.charAt(0),"g"),"0")),a.unmaskAsNumber?(""!==a.radixPoint&&-1!==i.indexOf(a.radixPoint)&&(i=i.replace(k.escapeRegex.call(this,a.radixPoint),".")),i=(i=i.replace(new RegExp("^"+k.escapeRegex(a.negationSymbol.front)),"-")).replace(new RegExp(k.escapeRegex(a.negationSymbol.back)+"$"),""),Number(i)):i},isComplete:function isComplete(e,t){var a=(t.numericInput?e.slice().reverse():e).join("");return a=(a=(a=(a=(a=a.replace(new RegExp("^"+k.escapeRegex(t.negationSymbol.front)),"-")).replace(new RegExp(k.escapeRegex(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp(k.escapeRegex(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(a=a.replace(k.escapeRegex(t.radixPoint),".")),isFinite(a)},onBeforeMask:function onBeforeMask(e,t){t.isNegative=void 0;var a=t.radixPoint||",";"number"!=typeof e&&"number"!==t.inputType||""===a||(e=e.toString().replace(".",a));var i=e.split(a),n=i[0].replace(/[^\-0-9]/g,""),r=1<i.length?i[1].replace(/[^0-9]/g,""):"";e=n+(""!==r?a+r:r);var s=0;if(""!==a&&(s=r.length,""!==r)){var o=Math.pow(10,s||1);isFinite(t.digits)&&(s=parseInt(t.digits),o=Math.pow(10,s)),e=e.replace(k.escapeRegex(a),"."),isFinite(e)&&(e=Math.round(parseFloat(e)*o)/o),e=e.toString().replace(".",a)}return 0===t.digits&&-1!==e.indexOf(k.escapeRegex(a))&&(e=e.substring(0,e.indexOf(k.escapeRegex(a)))),function alignDigits(e,t,a){if(0<t){var i=h.inArray(a.radixPoint,e);-1===i&&(e.push(a.radixPoint),i=e.length-1);for(var n=1;n<=t;n++)e[i+n]=e[i+n]||"0"}return e}(e.toString().split(""),s,t).join("")},onKeyDown:function onKeyDown(e,t,a,i){var n=h(this);if(e.ctrlKey)switch(e.keyCode){case k.keyCode.UP:n.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(i.step)),n.trigger("setvalue");break;case k.keyCode.DOWN:n.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(i.step)),n.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),e.exports=k},function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=a(5),s=a(3);void 0===r.fn.inputmask&&(r.fn.inputmask=function(e,t){var a,i=this[0];if(void 0===t&&(t={}),"string"==typeof e)switch(e){case"unmaskedvalue":return i&&i.inputmask?i.inputmask.unmaskedvalue():r(i).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return i&&i.inputmask?i.inputmask.getemptymask():"";case"hasMaskedValue":return!(!i||!i.inputmask)&&i.inputmask.hasMaskedValue();case"isComplete":return!i||!i.inputmask||i.inputmask.isComplete();case"getmetadata":return i&&i.inputmask?i.inputmask.getmetadata():void 0;case"setvalue":s.setValue(i,t);break;case"option":if("string"!=typeof t)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(t)});if(i&&void 0!==i.inputmask)return i.inputmask.option(t);break;default:return t.alias=e,a=new s(t),this.each(function(){a.mask(this)})}else{if(Array.isArray(e))return t.alias=e,a=new s(t),this.each(function(){a.mask(this)});if("object"==(void 0===e?"undefined":n(e)))return a=new s(e),void 0===e.mask&&void 0===e.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(e);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===e)return this.each(function(){(a=new s(t)).mask(this)})}})}])});;
//Init Headroom.js
(function () {
  var mobile = new Headroom(document.querySelector(".mobile-nav"), {
    tolerance: 5,
    offset: 150,
    classes: {
      initial: "animated",
      pinned: "slideInDown",
      unpinned: "slideOutUp"
    }
  });
  mobile.init();
}());

//Init instagramLite
//$('.instagram-block').instagramLite({
// accessToken: '4505379608.1677ed0.70684d8d2b9d4ef597b14074155a4ed9',
//  urls: true,
//  limit: 6,
//  captions: false,
//  likes: false,
//  comments_count: false,
//  videos: false,
//  success: function() {
//console.log('Instagram API: The request was successful!');
//  },
//  error: function() {
// console.log('Instagram API: There was an error with your request.');
//  }
//});


//Init smoothScroll
smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 750, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutQuart', // Easing pattern to use
  offset: 50, // Integer. How far to offset the scrolling anchor location in pixels
});
//Init parallax window
$('.parallax-window').parallax({
  imageSrc: 'images/header.jpg'
});
$('.story-img').parallax({
  imageSrc: 'images/ourstory.jpg'
});
// Init Rellax.js
var rellax = new Rellax('.rellax', {});
// Init wow.js
new WOW().init();
//Init Owl Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  autoWidth: false,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
  ]
});
//Hamburger Menu
var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else
    for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
      $('.mobile-nav').toggleClass("is-active");
    }, false);
  });
}
// Close nav after link is clicked
$(document).ready(function () {
  $('html, body').on("click", ".mob-link", function () {
    $('.mobile-nav').removeClass("is-active");
    $('.hamburger').removeClass("is-active");
  });
});
// Email Obfuscator
$(function () {
  $('a[href^="mailto:"]').each(function () {
    this.href = this.href.replace('(@@@)', '@').replace(/\(...\)/g, '.');
    // Remove this line if you don't want to set the email address as link text:
    this.innerHTML = this.href.replace('mailto:', '');
  });
});



//------Form  

// Phone Number -- Automatic Formatting
$(window).load(function () {
  var phones = [{
    "mask": "(##) #####-#####"
  }];
  $('#telefone').inputmask({
    mask: phones,
    greedy: false,
    definitions: {
      '#': {
        validator: "[0-9]",
        cardinality: 1
      }
    }
  });
});

function recaptchaCallback() {
  $button = $("#submit");
  if ($("#form_contact").valid()) {
    $button.attr("disabled", false);
    $('.human-msg').hide();
  }
  else {
    $button.attr("disabled", "disabled");
  }
}

document
  .getElementById("form_contact")
  .addEventListener("submit", handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  let myForm = document.getElementById("form_contact");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log('The form was validated and sent successfully!');
      $('.form-success').show();

      // Clear form when succesfully submitted
      $('#form_contact').trigger("reset");
      setTimeout(function () {
        $('.form-success').hide();
      }, 10000);
    })
    .catch((error) => {
        console.warn('The form was not sent due to an error.');
        console.error(error);

        $('.form-fail').show();
        setTimeout(function () {
          $('.form-fail').hide();
          $('#submit').show();
        }, 10000);
    });
};

$(document).ajaxStart(function () {
  $('#submit').prop('disabled', true);
});

$(document).ajaxStop(function () {
  $('#submit').hide();
  $('.form-captcha').hide();
});

// $(function () {
//   $("input").prop('required', true);
//   $("textarea").prop('required', true);
//   $("select").prop('required', true);
// });

var breakfastMenu = $('.menu.breakfast');
var lunchMenu = $('.menu.lunch');
var drinkMenu = $('.menu.drink');
var holidayMenu = $('.menu.holiday');

$('a.breakfast-menu').on('click', function (event) {
  breakfastMenu.addClass('active');

  $('body').attr('data-pos', $(window).scrollTop());
  setTimeout(function () {
    $('body, html').addClass('is-locked');
  }, 355);
})

$('a.lunch-menu').on('click', function (event) {
  lunchMenu.addClass('active');

  $('body').attr('data-pos', $(window).scrollTop());
  setTimeout(function () {
    $('body, html').addClass('is-locked');
  }, 355);
})

$('a.drink-menu').on('click', function (event) {
  drinkMenu.addClass('active');

  $('body').attr('data-pos', $(window).scrollTop());
  setTimeout(function () {
    $('body, html').addClass('is-locked');
  }, 355);
})

$('a.holiday-menu').on('click', function (event) {
  holidayMenu.addClass('active');

  $('body').attr('data-pos', $(window).scrollTop());
  setTimeout(function () {
    $('body, html').addClass('is-locked');
  }, 355);
})

openMenuOnPageLoad();
function openMenuOnPageLoad() {
  if (window.location.hash) {
    var hash = window.location.hash;
    if (hash === '#holiday-menu') {
      $('a.holiday-menu').click();
    } else if (hash === '#breakfast-menu') {
      $('a.breakfast-menu').click();
    } else if (hash === '#lunch-menu') {
      $('a.lunch-menu').click();
    } else if (hash === '#drink-menu') {
      $('a.drink-menu').click();
    } else {
      // Do nothing
    }
  }
}

$('.menu-container a').on('click', function (event) {
  if (window.location.hash === '#') {
    event.preventDefault();
  }

  // Remove hash when we close menu
  history.pushState("", document.title, window.location.pathname + window.location.search);

  $(this).parents('.menu').removeClass('active');
  $('.menu-links').removeClass('is-active');
  $('body, html').removeClass('is-locked');

  // Have to setTimeout so it gets put to end of event queue and works properly
  setTimeout(() => {
    var scrollPos = $('body').data('pos');
    $(window).scrollTop(scrollPos);
  }, 0)
})

;


var swiper = new Swiper('.swiper-initialize', {
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    1920: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});