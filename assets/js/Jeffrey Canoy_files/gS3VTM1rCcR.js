/*!CK:218907488!*//*1402976156,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["S2ATr"]); }

__d("SyncRequestStatusEnum",[],function(a,b,c,d,e,f){e.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]};},null);
__d("ChatConfig",["ChatConfigInitialData","copyProperties"],function(a,b,c,d,e,f,g,h){var i={},j={get:function(k,l){return k in i?i[k]:l;},set:function(k){if(arguments.length>1){var l={};l[k]=arguments[1];k=l;}h(i,k);},getDebugInfo:function(){return i;}};j.set(g);e.exports=j;},null);
__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};},null);
__d("eachKeyVal",[],function(a,b,c,d,e,f){"use strict";function g(h,i,j){if(!h||!i)return;var k=Object.keys(h),l;for(l=0;l<k.length;l++)i.call(j,k[l],h[k[l]],h,l);}e.exports=g;},null);
__d("PresenceUtil",["Cookie","CurrentUser","randomInt"],function(a,b,c,d,e,f,g,h,i){var j=i(0,4294967295)+1;function k(){return j;}function l(){return h.getID()===g.get('c_user');}e.exports={getSessionID:k,hasUserCookie:l};},null);
__d("AjaxPipeRequest",["Arbiter","AsyncRequest","BigPipe","CSS","DOM","Env","PageletSet","ScriptPathState","URI","copyProperties","ge","goOrReplace","performance"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t;function u(x,y){var z=q(x);if(!z)return;if(!y)z.style.minHeight='100px';var aa=m.getPageletIDs();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba];if(k.contains(z,ca))m.removePagelet(ca);}k.empty(z);g.inform('pagelet/destroy',{id:null,root:z});}function v(x,y){var z=q(x);if(z&&!y)z.style.minHeight='100px';}function w(x,y){"use strict";this._uri=x;this._query_data=y;this._request=new h();this._canvas_id=null;this._allow_cross_page_transition=true;}w.prototype.setCanvasId=function(x){"use strict";this._canvas_id=x;return this;};w.prototype.setURI=function(x){"use strict";this._uri=x;return this;};w.prototype.setData=function(x){"use strict";this._query_data=x;return this;};w.prototype.getData=function(x){"use strict";return this._query_data;};w.prototype.setAllowCrossPageTransition=function(x){"use strict";this._allow_cross_page_transition=x;return this;};w.prototype.setAppend=function(x){"use strict";this._append=x;return this;};w.prototype.send=function(){"use strict";var x={ajaxpipe:1,ajaxpipe_token:l.ajaxpipe_token};p(x,n.getParams());n.reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(p(x,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=t;}else t=this._request;var y=s.webkitClearResourceTimings||s.clearResourceTimings||null;if(y)y.call(s);this._request.send();return this;};w.prototype._preBootloadFirstResponse=function(x){"use strict";return false;};w.prototype._fireDomContentCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/domcontent_callback',true,g.BEHAVIOR_STATE);};w.prototype._fireOnloadCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/onload_callback',true,g.BEHAVIOR_STATE);};w.prototype._isRelevant=function(x){"use strict";return this._request==t||(this._automatic&&this._relevantRequest==t)||this._jsNonBlock||(t&&t._allowIrrelevantRequests);};w.prototype._preBootloadHandler=function(x){"use strict";var y=x.getPayload();if(!y||y.redirect||!this._isRelevant(x))return false;var z=false;if(x.is_first){!this._append&&!this._displayCallback&&u(this._canvas_id,this._constHeight);this._arbiter=new g();z=this._preBootloadFirstResponse(x);this.pipe=new i({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:'ajaxpipe/domcontent_callback',onloadEvt:'ajaxpipe/onload_callback',jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return z;};w.prototype._redirect=function(x){"use strict";if(x.redirect){if(x.force||!this.isPageActive(x.redirect)){var y=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());r(window.location,o(x.redirect).removeQueryData(y),true);}else{var z=a.PageTransitions;z.go(x.redirect,true);}return true;}else return false;};w.prototype.isPageActive=function(x){"use strict";return true;};w.prototype.getSanitizedParameters=function(){"use strict";return [];};w.prototype._versionCheck=function(x){"use strict";return true;};w.prototype._onInitialResponse=function(x){"use strict";var y=x.getPayload();if(!this._isRelevant(x))return false;if(!y)return true;if(this._redirect(y)||!this._versionCheck(y))return false;return true;};w.prototype._processFirstResponse=function(x){"use strict";var y=x.getPayload();if(q(this._canvas_id)&&y.canvas_class!=null)j.setClass(this._canvas_id,y.canvas_class);};w.prototype.setFirstResponseCallback=function(x){"use strict";this._firstResponseCallback=x;return this;};w.prototype.setFirstResponseHandler=function(x){"use strict";this._processFirstResponse=x;return this;};w.prototype._onResponse=function(x){"use strict";var y=x.payload;if(!this._isRelevant(x))return h.suppressOnloadToken;if(x.is_first){this._processFirstResponse(x);this._firstResponseCallback&&this._firstResponseCallback();y.provides=y.provides||[];y.provides.push('uipage_onload');if(this._append)y.append=this._canvas_id;}if(y){if('content' in y.content&&this._canvas_id!==null&&this._canvas_id!='content'){y.content[this._canvas_id]=y.content.content;delete y.content.content;}this.pipe.onPageletArrive(y);}if(x.is_last)v(this._canvas_id,this._constHeight);return h.suppressOnloadToken;};w.prototype.setNectarModuleDataSafe=function(x){"use strict";this._request.setNectarModuleDataSafe(x);return this;};w.prototype.setFinallyHandler=function(x){"use strict";this._request.setFinallyHandler(x);return this;};w.prototype.setErrorHandler=function(x){"use strict";this._request.setErrorHandler(x);return this;};w.prototype.abort=function(){"use strict";this._request.abort();if(t==this._request)t=null;this._request=null;return this;};w.prototype.setJSNonBlock=function(x){"use strict";this._jsNonBlock=x;return this;};w.prototype.setAutomatic=function(x){"use strict";this._automatic=x;return this;};w.prototype.setDisplayCallback=function(x){"use strict";this._displayCallback=x;return this;};w.prototype.setConstHeight=function(x){"use strict";this._constHeight=x;return this;};w.prototype.setAllowIrrelevantRequests=function(x){"use strict";this._allowIrrelevantRequests=x;return this;};w.prototype.getAsyncRequest=function(){"use strict";return this._request;};w.getCurrentRequest=function(){"use strict";return t;};w.setCurrentRequest=function(x){"use strict";t=x;};e.exports=w;},null);
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}},null);
__d("DocumentTitle",["Arbiter"],function(a,b,c,d,e,f,g){var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function(){return h;},set:function(s,t){document.title=s;if(!t){h=s;i=null;g.inform('update_title',s);}else i=s;},blink:function(s){var t={title:s};k.push(t);if(m===null)m=setInterval(o,j);return {stop:function(){var u=k.indexOf(t);if(u>=0){k.splice(u,1);if(l>u){l--;}else if(l==u&&l==k.length)l=0;}}};}};e.exports=r;},null);
__d("FullScreen",["Event","Arbiter","CSS","UserAgent","copyProperties","throttle","Keys"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o=false,p=function(u){if(g.getKeyCode(u)===m.ESC)u.stopPropagation();},q=function(){if(!o){document.addEventListener('keydown',p,true);o=true;}},r=function(){if(o){document.removeEventListener('keydown',p,true);o=false;}},s=k(new h(),{listenForEvent:function(u){var v=l(this.onChange,0,this);if(!n[u.id]){n[u.id]=true;g.listen(u,{webkitfullscreenchange:v,mozfullscreenchange:v,MSFullscreenChange:v,fullscreenchange:v});}},enableFullScreen:function(u){this.listenForEvent(u);if(u.webkitRequestFullScreen){if(j.chrome()){u.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}else u.webkitRequestFullScreen();}else if(u.mozRequestFullScreen){u.mozRequestFullScreen();}else if(u.msRequestFullscreen){q();u.msRequestFullscreen();}else if(u.requestFullScreen){u.requestFullScreen();}else return false;return true;},disableFullScreen:function(){if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else return false;return true;},isFullScreen:function(){return (document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement);},toggleFullScreen:function(u){if(this.isFullScreen()){this.disableFullScreen();return false;}else return this.enableFullScreen(u);return false;},onChange:function(){var u=this.isFullScreen();i.conditionClass(document.body,'fullScreen',u);this.inform('changed');if(!u)r();},isSupported:function(){return (document.webkitCancelFullScreen&&j.chrome())||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen;}}),t=l(s.onChange,0,s);g.listen(document,{webkitfullscreenchange:t,mozfullscreenchange:t,MSFullscreenChange:t,fullscreenchange:t});e.exports=s;},null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n){if(window.top!==window.self)return;var o=j.create('div');j.appendContent(document.body,o);o.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+n.spacerImage+');';var p=k.get(o,'background-image'),q=k.get(o,'border-top-color'),r=k.get(o,'border-right-color'),s=q==r&&(p&&(p=='none'||p=='url(invalid-url:)'));if(s){h.conditionClass(document.documentElement,'highContrast',s);if(i.getID())g.logHCM();}j.remove(o);m.init=l;}};e.exports=m;},null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","URI","copyProperties","emptyFunction","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(r,s,t){"use strict";var u=r&&j.isElementNode(r)?r.id:r;this._id=u||null;this._element=p(r||j.create('div'));this._src=s||null;this._context_data=t||{};this._data={};this._handler=o;this._request=null;this._use_ajaxpipe=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;}q.prototype.getElement=function(){"use strict";return this._element;};q.prototype.setHandler=function(r){"use strict";this._handler=r;return this;};q.prototype.go=function(r,s){"use strict";if(arguments.length>=2||typeof r=='string'){this._src=r;this._data=s||{};}else if(arguments.length==1)this._data=r;this.refresh();return this;};q.prototype.setAllowCrossPageTransition=function(r){"use strict";this._allow_cross_page_transition=r;return this;};q.prototype.setBundleOption=function(r){"use strict";this._is_bundle=r;return this;};q.prototype.setErrorHandler=function(r){"use strict";this._errorHandler=r;return this;};q.prototype.setTransportErrorHandler=function(r){"use strict";this.transportErrorHandler=r;return this;};q.prototype.refresh=function(){"use strict";if(this._use_ajaxpipe){l.setIsUIPageletRequest(true);this._request=new h();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);}else{var r=function(v){this._request=null;var w=k(v.getPayload());if(this._append){j.appendContent(this._element,w);}else j.setContent(this._element,w);this._handler();}.bind(this),s=this._displayCallback,t=this._finallyHandler;this._request=new i().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(v){if(s){s(r.bind(null,v));}else r(v);t&&t();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}var u={};n(u,this._context_data);n(u,this._data);if(this._actorID)u[g.PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(u)}).send();return this;};q.prototype.cancel=function(){"use strict";if(this._request)this._request.abort();};q.prototype.setUseAjaxPipe=function(r){"use strict";this._use_ajaxpipe=!!r;return this;};q.prototype.setAppend=function(r){"use strict";this._append=!!r;return this;};q.prototype.setJSNonBlock=function(r){"use strict";this._jsNonblock=!!r;return this;};q.prototype.setAutomatic=function(r){"use strict";this._automatic=!!r;return this;};q.prototype.setDisplayCallback=function(r){"use strict";this._displayCallback=r;return this;};q.prototype.setConstHeight=function(r){"use strict";this._constHeight=!!r;return this;};q.prototype.setFinallyHandler=function(r){"use strict";this._finallyHandler=r;return this;};q.prototype.setAllowIrrelevantRequests=function(r){"use strict";this._allowIrrelevantRequests=r;return this;};q.prototype.setActorID=function(r){"use strict";this._actorID=r;return this;};q.appendToInline=function(r,s){"use strict";var t=p(r),u=p(s);if(t&&u){while(u.firstChild)j.appendContent(t,u.firstChild);j.remove(u);}};q.loadFromEndpoint=function(r,s,t,u){"use strict";u=u||{};var v='/ajax/pagelet/generic.php/'+r;if(u.intern)v='/intern'+v;var w=new m(v.replace(/\/+/g,'/'));if(u.subdomain)w.setSubdomain(u.subdomain);var x=new q(s,w,t).setUseAjaxPipe(u.usePipe).setBundleOption(u.bundle!==false).setAppend(u.append).setJSNonBlock(u.jsNonblock).setAutomatic(u.automatic).setDisplayCallback(u.displayCallback).setConstHeight(u.constHeight).setAllowCrossPageTransition(u.crossPage).setFinallyHandler(u.finallyHandler||o).setErrorHandler(u.errorHandler).setTransportErrorHandler(u.transportErrorHandler).setAllowIrrelevantRequests(u.allowIrrelevantRequests).setActorID(u.actorID);u.handler&&x.setHandler(u.handler);x.go();return x;};e.exports=q;},null);
__d("LoadingDialogDimensions",[],function(a,b,c,d,e,f){var g={HEIGHT:96,WIDTH:300};e.exports=g;},null);
__d("AsyncDialog",["AsyncRequest","Bootloader","CSS","DialogX","DOM","Env","Keys","LayerFadeOnShow","Parent","React","URI","XUISpinner.react","copyProperties","cx","eachKeyVal","emptyFunction","LoadingDialogDimensions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=b('LoadingDialogDimensions').WIDTH,x;function y(){if(!x){var ga=k.create('div',{className:"_57-x"});x=new j({width:w,addedBehaviors:[n],xui:true},k.create('div',null,ga));p.renderComponent(r({size:"large"}),ga);x.subscribe(['key','blur'],function(ha,ia){if(ha=='blur'||(ha=='key'&&ia.keyCode==m.ESC)){ca();return false;}});}return x;}var z={},aa=1,ba=[];function ca(){u(z,function(ga,ha){ha.abandon();da(ga);});}function da(ga){delete z[ga];if(!Object.keys(z).length)y().hide();}function ea(ga,ha){var ia=aa++;ba[ia]=ha;z[ia]=ga;var ja=da.bind(null,''+ia);s(ga.getData(),{__asyncDialog:ia});y().setCausalElement(ga.getRelativeTo()).show();var ka=ga.finallyHandler;ga.setFinallyHandler(function(la){var ma=la.getPayload();if(ma&&ma.asyncURL)fa.send(new g(ma.asyncURL));ja();ka&&ka(la);});ga.setInterceptHandler(ja).setAbortHandler(ja);ga.send();}var fa={send:function(ga,ha){ea(ga,ha||v);},bootstrap:function(ga,ha,ia){if(!ga)return;var ja=o.byClass(ha,'stat_elem')||ha;if(ja&&i.hasClass(ja,'async_saving'))return false;var ka=new q(ga).getQueryData(),la=ia==='dialog',ma=new g().setURI(ga).setData(ka).setMethod(la?'GET':'POST').setReadOnly(la).setRelativeTo(ha).setStatusElement(ja).setNectarModuleDataSafe(ha);fa.send(ma);},respond:function(ga,ha){var ia=ba[ga];if(ia){ia(ha);delete ba[ga];}},getLoadingDialog:function(){return y();}};e.exports=fa;},null);