(function(g){var window=this;'use strict';var htb=function(a,b){a.ib("onAutonavCoundownStarted",b)},i6=function(a,b,c){g.mv(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.dh(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.BS&&(b.lengthText?(e=b.lengthText||null,f=b.ow||null):b.lengthSeconds&&(e=g.EG(b.lengthSeconds),f=g.EG(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.RSa(d).type;var l=b instanceof g.BS?b.isLivePlayback:null,m=b instanceof g.BS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.MJ("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Ok(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Yr};b instanceof g.AS&&(c.playlist_length=b.playlistLength);a.update(c)},j6=function(a){var b=a.U(),c=b.D;
g.V.call(this,{I:"a",S:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",
Ka:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ka:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.j=c;this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress)},k6=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.cancelCommand=this.G=void 0;this.C=0;this.container=new g.V({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.O(this,this.container);this.container.Ia(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.V({I:"div",S:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",Ka:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.O(this,this.j);this.j.Ia(this.container.element);d||this.T(this.j.Ea("ytp-autonav-endscreen-link-container"),"click",this.kT);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Ea("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({I:"div",S:"ytp-autonav-overlay"});g.O(this,this.overlay);this.overlay.Ia(this.container.element);this.B=new g.V({I:"div",S:"ytp-autonav-endscreen-button-container"});g.O(this,this.B);this.B.Ia(this.container.element);
this.cancelButton=new g.V({I:"button",Ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancel autoplay"},xa:"Cancel"});g.O(this,this.cancelButton);this.cancelButton.Ia(this.B.element);this.cancelButton.listen("click",this.N2,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.V({I:"a",Ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Play next video"},xa:"Play Now"});g.O(this,this.playButton);this.playButton.Ia(this.B.element);this.playButton.listen("click",this.kT,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&itb(this,b)):this.J.createClientVe(this.playButton.element,this,115130);this.D=new g.Uu(function(){jtb(c)},
500);
g.O(this,this.D);this.jT();this.T(a,"autonavvisibility",this.jT);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.M2),this.T(a,"onAutonavCoundownStarted",this.J9))},l6=function(a){var b=a.J.yn(!0,a.J.isFullscreen());
g.mv(a.container.element,"ytp-autonav-endscreen-small-mode",a.Pg(b));g.mv(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.SK);g.mv(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.Jf());g.mv(a.J.getRootNode(),"countdown-running",a.Tk());g.mv(a.container.element,"ytp-player-content",a.J.Jf());g.os(a.overlay.element,{width:b.width+"px"});if(!a.Tk()){a.J.Jf()?ktb(a,Math.round(ltb(a)/1E3)):ktb(a);b=!!a.suggestion&&!!a.suggestion.Yr;var c=a.J.Jf()||!b;
g.mv(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.mv(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.EF(a.B,a.J.Jf());g.mv(a.element,"ytp-enable-w2w-color-transitions",mtb(a))}},jtb=function(a){var b=ltb(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);ktb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Tk()?a.select(!0):a.Tk()&&a.D.start()},ltb=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.PB;return-1===a||void 0===a?8E3:a}return 0<=a.J.Ks()?a.J.Ks():g.XI(a.J.U().experiments,"autoplay_time")||1E4},itb=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.A7;a.G=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},mtb=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},ktb=function(a,b){b=void 0===b?-1:b;
a=a.j.Ea("ytp-autonav-endscreen-upnext-header");g.Lf(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Jf("Up next in $SECONDS".slice(0,d)));var e=g.If("span");g.$u(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Uf(e,b);a.appendChild(e);a.appendChild(g.Jf("Up next in $SECONDS".slice(d+c.length)));return}}g.Uf(a,"Up next")},m6=function(a,b){g.V.call(this,{I:"div",
Ka:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},n6=function(a){g.V.call(this,{I:"div",
Ka:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"Up Next"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Play next video"},V:[{I:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
V:[{I:"circle",S:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.G=this.Ea("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.Uu(this.qH,5E3,this);this.B=0;var b=this.Ea("ytp-upnext-cancel");this.cancelButton=new g.V({I:"button",Ka:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancel autoplay"},xa:"Cancel"});g.O(this,this.cancelButton);this.cancelButton.listen("click",this.O2,this);this.cancelButton.Ia(b);this.cancelButton&&this.api.createClientVe(this.cancelButton.element,
this,115129);g.O(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Ea("ytp-upnext-autoplay-icon");this.T(b,"click",this.P2);this.api.createClientVe(b,this,115130);this.lT();this.T(a,"autonavvisibility",this.lT);this.T(a,"mdxnowautoplaying",this.w$);this.T(a,"mdxautoplaycanceled",this.x$);g.mv(this.element,"ytp-upnext-mobile",this.api.U().B)},ntb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.PB;return-1===a||void 0===a?8E3:a}return 0<=a.api.Ks()?a.api.Ks():g.XI(a.api.U().experiments,"autoplay_time")||1E4},otb=function(a,b){b=ntb(a,b);
var c=Math,d=c.min;var e=(0,g.aD)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Tk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Tk()&&a.j.start()},o6=function(a){m6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.V({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"More videos"}]});this.N=new g.V({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new k6(this.player);g.O(this,this.B);this.B.Ia(this.element);a.getVideoData().Sf?this.j=this.B:(this.j=new n6(a),g.hU(this.player,this.j.element,4),g.O(this,this.j));this.overlay=new g.V({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.O(this,this.overlay);this.overlay.Ia(this.element);this.D=new g.xK(this);g.O(this,this.D);g.O(this,this.table);this.table.Ia(this.element);this.table.show();g.O(this,this.N);this.N.Ia(this.table.element);this.hide()},p6=function(a){var b=a.Jf();
b!==a.G&&(a.G=b,a.player.publish("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},q6=function(a,b){g.V.call(this,{I:"button",
Ka:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.Y_();2===this.buttonType&&g.bv(this.element,"ytp-continue-watching-button");this.listen("click",this.onClick);this.listen("videodatachange",this.Y_);g.EF(this,!0)},r6=function(a,b){m6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.Ue=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new q6(a,2);g.O(this,this.watchButton);this.watchButton.Ia(this.element);this.hide()},ptb=function(a){m6.call(this,a,"subscribecard-endscreen");
this.j=new g.V({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",X:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.O(this,this.j);this.j.Ia(this.element);var b=a.getVideoData();this.subscribeButton=new g.vW("Subscribe",null,"Unsubscribe",null,!0,!1,b.Dl,b.subscribed,"trailer-endscreen",null,a,!1);g.O(this,this.subscribeButton);this.subscribeButton.Ia(this.j.Ea("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ra);this.Ra();this.hide()},s6=function(a){var b=a.U(),c=g.vK||g.MR?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.V.call(this,{I:"a",Ka:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",X:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"Live"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.xK(this);g.O(this,this.j);this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},t6=function(a){m6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.xK(this);g.O(this,this.B);this.K=new g.Uu(function(){g.bv(b.element,"ytp-show-tiles")},0);
g.O(this,this.K);var c=new g.V({I:"button",Ka:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Previous"},V:[g.KF()]});g.O(this,c);c.Ia(this.element);c.listen("click",this.T2,this);this.table=new g.BF({I:"div",S:"ytp-endscreen-content"});g.O(this,this.table);this.table.Ia(this.element);c=new g.V({I:"button",Ka:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Next"},V:[g.LF()]});g.O(this,c);c.Ia(this.element);c.listen("click",this.S2,this);a.getVideoData().Sf?this.j=new k6(a,!0):this.j=
new n6(a);g.O(this,this.j);g.hU(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},u6=function(a){return g.iU(a.player)&&a.KC()&&!a.D},v6=function(a){var b=a.Jf();
b!==a.N&&(a.N=b,a.player.publish("autonavvisibility"))},w6=function(a){m6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new q6(a,1);g.O(this,this.watchButton);this.watchButton.Ia(this.element);g.vhb(a)&&(this.j=new g.l2(a),g.O(this,this.j),this.B=new g.V({I:"div",Ka:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},V:[this.j]}),g.O(this,this.B),this.j.Ia(this.B.element),this.B.Ia(this.element));a.createClientVe(this.element,this,156914);this.hide()},ttb=function(a){g.NV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.xK(this);g.O(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.bC(g.VR(c))&&d&&!g.eU(a)?(this.B=!0,this.endScreen=new r6(a,g.VT(a))):a.hd()?this.endScreen=new w6(a):qtb(a)?(this.D=!0,rtb(this),this.j?this.endScreen=new o6(a):this.endScreen=new t6(a)):c.Sg?this.endScreen=new ptb(a):this.endScreen=new m6(a);g.O(this,this.endScreen);g.hU(a,this.endScreen.element,4);stb(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.GJ("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.HJ("endscreen"),function(e){b.onCueRangeExit(e)})},rtb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Kl&&a.C===b.Sf)return!1;a.j=b.Kl;a.C=b.Sf;return!0},qtb=function(a){a=a.U();
return a.Xd&&!a.Sg},stb=function(a){a.player.uf("endscreen");
var b=a.player.getVideoData();b=new g.FJ(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.FJ(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.nf([b,c])};
g.aU.prototype.Ks=g.fa(15,function(){return this.app.Ks()});
g.Q0.prototype.Ks=g.fa(14,function(){return this.getVideoData().eV});
g.WT.prototype.Ar=g.fa(13,function(a){this.zi().Ar(a)});
g.SW.prototype.Ar=g.fa(12,function(a){this.j!==a&&(this.j=a,this.Ra())});
g.$X.prototype.Ar=g.fa(11,function(a){this.overflowButton&&this.overflowButton.Ar(a)});
g.WT.prototype.Br=g.fa(10,function(a){this.zi().Br(a)});
g.XW.prototype.Br=g.fa(9,function(a){this.j!==a&&(this.j=a,this.Ra())});
g.$X.prototype.Br=g.fa(8,function(a){this.shareButton&&this.shareButton.Br(a)});
g.WT.prototype.oB=g.fa(7,function(a){this.zi().oB(a)});
g.oW.prototype.oB=g.fa(6,function(a){this.SQ!==a&&(this.SQ=a,this.Zp())});
g.WT.prototype.nB=g.fa(5,function(a){this.zi().nB(a)});
g.$X.prototype.nB=g.fa(4,function(a){this.RQ!==a&&(this.RQ=a,this.Yp())});g.x(j6,g.V);j6.prototype.select=function(){this.J.Fo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.gD||void 0)&&this.J.logClick(this.element)};
j6.prototype.onClick=function(a){g.QU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
j6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.x(k6,g.V);g.k=k6.prototype;g.k.DG=function(a){this.suggestion!==a&&(this.suggestion=a,i6(this.j,a),this.playButton.updateValue("url",this.suggestion.Ok()),l6(this))};
g.k.Tk=function(){return 0<this.C};
g.k.vB=function(){this.Tk()||(this.C=Date.now(),jtb(this),htb(this.J,ltb(this)),g.mv(this.J.getRootNode(),"countdown-running",this.Tk()))};
g.k.Tw=function(){this.Up();jtb(this);var a=this.j.Ea("ytp-autonav-endscreen-upnext-header");a&&g.Uf(a,"Up next")};
g.k.Up=function(){this.Tk()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Up()};
g.k.kT=function(a){g.QU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Ea("ytp-autonav-endscreen-link-container")&&(a=this.j.Ea("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.G?(this.J.ib("innertubeCommand",this.G),this.Up()):this.select())};
g.k.N2=function(){this.J.logClick(this.cancelButton.element);g.cU(this.J,!0);this.cancelCommand&&this.J.ib("innertubeCommand",this.cancelCommand)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&itb(this,b);var c;this.cancelCommand=null==(c=b.N6)?void 0:c.command};
g.k.J9=function(a){if(mtb(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.MG(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.MG(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.MG(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.MG(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.MG(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.MG(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.mv(this.element,"ytp-w2w-animate",!0)}};
g.k.M2=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.mv(this.element,"ytp-w2w-animate",!1)};
g.k.jT=function(){var a=this.J.Jf();this.K&&this.Db!==a&&g.EF(this,a);l6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Ea("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Pg=function(a){return 400>a.width||459>a.height};g.x(m6,g.V);g.k=m6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.KC=function(){return!1};
g.k.Jf=function(){return!1};
g.k.nY=function(){return!1};g.x(n6,g.V);g.k=n6.prototype;g.k.qH=function(){this.notification&&(this.D.stop(),this.Rc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.DG=function(a){this.suggestion=a;i6(this,a,"hqdefault.jpg")};
g.k.lT=function(){g.EF(this,this.api.Jf());this.api.logVisibility(this.element,this.api.Jf());this.api.logVisibility(this.Ea("ytp-upnext-autoplay-icon"),this.api.Jf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.Jf())};
g.k.F$=function(){window.focus();this.qH()};
g.k.vB=function(a){var b=this;this.Tk()||(g.kE("a11y-announce","Up Next "+this.suggestion.title),this.B=(0,g.aD)(),this.j=new g.Uu(function(){otb(b,a)},25),otb(this,a),htb(this.api,ntb(this,a)));
g.dv(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.Tk=function(){return!!this.j};
g.k.Tw=function(){this.Up();this.B=(0,g.aD)();otb(this);g.bv(this.element,"ytp-upnext-autoplay-paused")};
g.k.Up=function(){this.Tk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.qH(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.dh()}),this.C=this.T(this.notification,"click",this.F$),this.D.start())}this.Up();this.api.nextVideo(!1,a)};
g.k.P2=function(a){!g.Tf(this.cancelButton.element,a.target)&&g.QU(a,this.api)&&(this.api.Jf()&&this.api.logClick(this.Ea("ytp-upnext-autoplay-icon")),this.select())};
g.k.O2=function(){this.api.Jf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.cU(this.api,!0)};
g.k.w$=function(a){this.api.getPresentingPlayerType();this.show();this.vB(a)};
g.k.x$=function(){this.api.getPresentingPlayerType();this.Up();this.hide()};
g.k.va=function(){this.Up();this.qH();g.V.prototype.va.call(this)};g.x(o6,m6);g.k=o6.prototype;g.k.create=function(){m6.prototype.create.call(this);this.D.T(this.player,"appresize",this.WB);this.D.T(this.player,"onVideoAreaChange",this.WB);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.mT);this.D.T(this.player,"onAutonavCancelled",this.Q2);this.onVideoDataChange()};
g.k.show=function(){m6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.cU(this.player,!1);g.iU(this.player)&&this.KC()&&!this.C?(p6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.vB():3===this.videoData.autonavState&&this.j.Tw()):(g.cU(this.player,!0),p6(this));this.WB()};
g.k.hide=function(){m6.prototype.hide.call(this);this.j.Tw();p6(this)};
g.k.WB=function(){var a=this.player.yn(!0,this.player.isFullscreen());p6(this);l6(this.B);g.mv(this.element,"ytp-autonav-cancelled-small-mode",this.Pg(a));g.mv(this.element,"ytp-autonav-cancelled-tiny-mode",this.TI(a));g.mv(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.os(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.mv(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.bT(this.videoData);b&&(this.j.DG(b),this.j!==this.B&&this.B.DG(b))}if(a&&a.length)for(b=0;b<utb.length;++b){var c=utb[b];if(a&&a[c]){this.videos[b]=new j6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,i6(d,c));g.O(this,this.videos[b]);this.videos[b].Ia(this.N.element)}}this.WB()}};
g.k.mT=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Up(),this.Db&&this.WB()):(this.K=!0,this.Jf()&&(2===a?this.j.vB():3===a&&this.j.Tw()))};
g.k.Q2=function(a){a?this.mT(1):(this.C=null,this.K=!1)};
g.k.KC=function(){return 1!==this.videoData.autonavState};
g.k.Pg=function(a){return(910>a.width||459>a.height)&&!this.TI(a)&&!(400>=a.width||360>=a.height)};
g.k.TI=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Jf=function(){return this.Db&&g.iU(this.player)&&this.KC()&&!this.C};
var utb=[1,3,2,4];g.x(q6,g.V);g.k=q6.prototype;g.k.Y_=function(){switch(this.buttonType){case 1:var a="Watch again on YouTube";var b=156915;break;case 2:a="Continue watching on YouTube";b=156942;break;default:a="Continue watching on YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.RU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.NR(b)){var c={};g.NR(b)&&g.PT(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.iP(c,b);a=g.en(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Db&&this.Z)};
g.k.show=function(){g.V.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.V.prototype.hide.call(this);this.logVisibility()};
g.k.Lc=function(a){g.V.prototype.Lc.call(this,a);this.logVisibility()};g.x(r6,m6);r6.prototype.show=function(){3!==this.player.getPlayerState()&&(m6.prototype.show.call(this),this.Ue.nB(!0),this.Ue.Br(!0),this.J.U().Ce||this.Ue.Ar(!0),this.J.logVisibility(this.element,!0),this.watchButton.Lc(!0))};
r6.prototype.hide=function(){m6.prototype.hide.call(this);this.Ue.nB(!1);this.Ue.Br(!1);this.Ue.Ar(!1);this.J.logVisibility(this.element,!1);this.watchButton.Lc(!1)};g.x(ptb,m6);ptb.prototype.Ra=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Dl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.x(s6,g.V);s6.prototype.select=function(){this.api.Fo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.gD||void 0)&&this.api.logClick(this.element)};
s6.prototype.onClick=function(a){if(g.NR(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Ok(),c={};g.jVa(this.api,c,"emb_rel_end");b=g.en(b,c);g.RU(b,this.api,a)}else g.QU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
s6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
s6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.Lf?!1:b.D};g.x(t6,m6);g.k=t6.prototype;g.k.create=function(){m6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.eq();this.B.T(this.player,"appresize",this.eq);this.B.T(this.player,"onVideoAreaChange",this.eq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.JL);this.B.T(this.player,"onAutonavCancelled",this.R2);a=this.videoData.autonavState;a!==this.Y&&this.JL(a);this.B.T(this.element,"transitionend",this.Yaa)};
g.k.destroy=function(){g.qC(this.B);g.wb(this.stills);this.stills=[];m6.prototype.destroy.call(this);g.dv(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.KC=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Db;m6.prototype.show.call(this);g.dv(this.element,"ytp-show-tiles");this.player.U().B?g.Wu(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.cU(this.player,!1);u6(this)?(v6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.vB():3===this.videoData.autonavState&&this.j.Tw()):(g.cU(this.player,!0),v6(this));a!==this.Db&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Db;m6.prototype.hide.call(this);this.j.Tw();v6(this);a!==this.Db&&this.player.logVisibility(this.element,!1)};
g.k.Yaa=function(a){a.target===this.element&&this.eq()};
g.k.eq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.bT(d)];if(e.length){g.bv(this.element,"ytp-endscreen-paginate");var f=this.J.yn(!0,this.J.isFullscreen());if(a=g.VT(this.J))a=a.Dh()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,v=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&v)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(v)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.zs(f,n,p);g.os(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.DG(g.bT(this.videoData));this.j instanceof
k6&&l6(this.j);g.mv(this.element,"ytp-endscreen-takeover",u6(this));v6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.Ie(q+this.C,c),0!==t){r=this.stills[h];r||(r=new s6(this.player),this.stills[h]=r,f.appendChild(r.element));v=Math.floor(p*m/b);var w=Math.floor(n*l/a),A=Math.floor(p*(m+t)/b)-v-4,D=Math.floor(n*(l+t)/a)-w-4;g.vs(r.element,w,v);g.zs(r.element,D,A);g.os(r.element,"transitionDelay",
(m+l)/20+"s");g.mv(r.element,"ytp-videowall-still-mini",1===t);g.mv(r.element,"ytp-videowall-still-large",2<t);t=Math.max(D,A);g.mv(r.element,"ytp-videowall-still-round-large",256<=t);g.mv(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.mv(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),v=g.av(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",i6(r,q,v),g.NR(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Ok(),v={},g.PT(r.api,"addEmbedsConversionTrackingParams",[v]),t=g.en(t,g.iP(v,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.mv(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Rf(a.element),g.vb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a,b=(null==(a=this.player.U())?0:a.L("html5_ignore_null_autonav_suggestion"))?this.player.getVideoData(1):this.player.getVideoData();if(this.videoData!==b){var c;null==(c=this.player.U())||!c.L("html5_ignore_null_autonav_suggestion")||null!=b&&g.bT(b)?(this.C=0,this.videoData=b,this.eq()):this.player.ma("missg",{vid:(null==b?void 0:b.videoId)||"",cpn:(null==b?void 0:b.clientPlaybackNonce)||""})}};
g.k.S2=function(){this.C+=this.stills.length;this.eq()};
g.k.T2=function(){this.C-=this.stills.length;this.eq()};
g.k.nY=function(){return this.j.Tk()};
g.k.JL=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Up(),this.Db&&this.eq()):(this.G=!0,this.Db&&u6(this)&&(2===a?this.j.vB():3===a&&this.j.Tw()))};
g.k.R2=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.JL(1)}else this.D=null,this.G=!1;this.eq()};
g.k.Jf=function(){return this.Db&&u6(this)};g.x(w6,m6);w6.prototype.VD=function(){var a;return null==(a=this.j)?void 0:a.VD()};
w6.prototype.show=function(){if(3!==this.player.getPlayerState()){m6.prototype.show.call(this);var a=this.B;if(a){var b=this.j.VD();g.mv(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.VT(this.player))||c.oB(!0);this.player.logVisibility(this.element,!0);this.watchButton.Lc(!0)}};
w6.prototype.hide=function(){m6.prototype.hide.call(this);var a;null==(a=g.VT(this.player))||a.oB(!1);this.player.logVisibility(this.element,!1);this.watchButton.Lc(!1)};g.x(ttb,g.NV);g.k=ttb.prototype;g.k.Vt=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((this.player.hd()||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.bT(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!qtb(this.player)||d;a=a.jk;c=this.player.uD();return d&&!a&&!c&&!b};
g.k.Jf=function(){return this.endScreen.Jf()};
g.k.u8=function(){return this.Jf()?this.endScreen.nY():!1};
g.k.va=function(){this.player.uf("endscreen");g.NV.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.xb().Ie.get("heartbeat"),d=g.bT(a);!d||b.videoId!==d.videoId||a.dT?(this.player.Fo(b.videoId,void 0,void 0,!0,!0,b),c&&c.fJ("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.NV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.NV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Vt()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){stb(this);this.D&&rtb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new o6(this.player):this.endScreen=new t6(this.player),g.O(this,this.endScreen),g.hU(this.player,this.endScreen.element,4))};g.MV("endscreen",ttb);})(_yt_player);