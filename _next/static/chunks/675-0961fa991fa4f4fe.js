(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(567),n=i(4932),o=i(7702),a=i(1309),l=i(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});var s=i(8754),u=i(1757)._(i(7294)),c=s._(i(2636)),d=i(7757),f=i(3735),g=i(3341);i(4210);var h=s._(i(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function v(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,i,o,a,l,s){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("blur"===i&&l(!0),null==o?void 0:o.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var s=!1,u=!1;o.current(n._(r._({},t),{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return s},isPropagationStopped:function(){return u},persist:function(){},preventDefault:function(){s=!0,t.preventDefault()},stopPropagation:function(){u=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}}))}function b(e){var t=a._(u.version.split("."),2),i=t[0],r=t[1],n=parseInt(i,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}var w=(0,u.forwardRef)(function(e,t){var i=e.imgAttributes,a=e.heightInt,l=e.widthInt,s=(e.qualityInt,e.className),c=e.imgStyle,d=e.blurStyle,f=e.isLazy,g=e.fetchPriority,h=e.fill,p=e.placeholder,m=e.loading,v=e.srcString,w=(e.config,e.unoptimized),_=(e.loader,e.onLoadRef),S=e.onLoadingCompleteRef,z=e.setBlurComplete,C=e.setShowAltText,j=(e.onLoad,e.onError),E=o._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,u.default.createElement("img",n._(r._(n._(r._({},E,b(g)),{loading:m,width:l,height:a,decoding:"async","data-nimg":h?"fill":"1",className:s,style:r._({},c,d)}),i),{ref:(0,u.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&y(e,v,p,_,S,z,w))},[v,p,_,S,z,j,w,t]),onLoad:function(e){y(e.currentTarget,v,p,_,S,z,w)},onError:function(e){C(!0),"blur"===p&&z(!0),j&&j(e)}}))}),_=(0,u.forwardRef)(function(e,t){var i,s,y,_=e.src,S=e.sizes,z=e.unoptimized,C=void 0!==z&&z,j=e.priority,E=void 0!==j&&j,P=e.loading,I=e.className,R=e.quality,x=e.width,L=e.height,k=e.fill,A=e.style,N=e.onLoad,O=e.onLoadingComplete,M=e.placeholder,q=void 0===M?"empty":M,B=e.blurDataURL,D=e.fetchPriority,F=e.layout,W=e.objectFit,T=e.objectPosition,U=(e.lazyBoundary,e.lazyRoot,o._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),G=(0,u.useContext)(g.ImageConfigContext),H=(0,u.useMemo)(function(){var e=p||G||f.imageConfigDefault,t=l._(e.deviceSizes).concat(l._(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return n._(r._({},e),{allSizes:t,deviceSizes:i})},[G]),V=U,J=V.loader||h.default;delete V.loader;var Y="__next_img_default"in J;if(Y){if("custom"===H.loader)throw Error('Image with src "'+_+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var $=J;J=function(e){return e.config,$(o._(e,["config"]))}}if(F){"fill"===F&&(k=!0);var K={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[F];K&&(A=r._({},A,K));var Q={responsive:"100vw",fill:"100vw"}[F];Q&&!S&&(S=Q)}var X="",Z=v(x),ee=v(L);if("object"==typeof(i=_)&&(m(i)||void 0!==i.src)){var et=m(_)?_.default:_;if(!et.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(et));if(!et.height||!et.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(et));if(s=et.blurWidth,y=et.blurHeight,B=B||et.blurDataURL,X=et.src,!k){if(Z||ee){if(Z&&!ee){var ei=Z/et.width;ee=Math.round(et.height*ei)}else if(!Z&&ee){var er=ee/et.height;Z=Math.round(et.width*er)}}else Z=et.width,ee=et.height}}var en=!E&&("lazy"===P||void 0===P);(!(_="string"==typeof _?_:X)||_.startsWith("data:")||_.startsWith("blob:"))&&(C=!0,en=!1),H.unoptimized&&(C=!0),Y&&_.endsWith(".svg")&&!H.dangerouslyAllowSVG&&(C=!0),E&&(D="high");var eo=a._((0,u.useState)(!1),2),ea=eo[0],el=eo[1],es=a._((0,u.useState)(!1),2),eu=es[0],ec=es[1],ed=v(R),ef=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:W,objectPosition:T}:{},eu?{}:{color:"transparent"},A),eg="blur"===q&&B&&!ea?{backgroundSize:ef.objectFit||"cover",backgroundPosition:ef.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,d.getImageBlurSvg)({widthInt:Z,heightInt:ee,blurWidth:s,blurHeight:y,blurDataURL:B,objectFit:ef.objectFit})+'")'}:{},eh=function(e){var t=e.config,i=e.src,r=e.unoptimized,n=e.width,o=e.quality,a=e.sizes,s=e.loader;if(r)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i){var r=e.deviceSizes,n=e.allSizes;if(i){for(var o=/(^|\s)(1?\d?\d)vw/g,a=[];s=o.exec(i);s)a.push(parseInt(s[2]));if(a.length){var s,u,c=.01*(u=Math).min.apply(u,l._(a));return{widths:n.filter(function(e){return e>=r[0]*c}),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:l._(new Set([t,2*t].map(function(e){return n.find(function(t){return t>=e})||n[n.length-1]}))),kind:"x"}}(t,n,a),c=u.widths,d=u.kind,f=c.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:c.map(function(e,r){return s({config:t,src:i,quality:o,width:e})+" "+("w"===d?e:r+1)+d}).join(", "),src:s({config:t,src:i,quality:o,width:c[f]})}}({config:H,src:_,unoptimized:C,width:Z,quality:ed,sizes:S,loader:J}),ep=_,em=(0,u.useRef)(N);(0,u.useEffect)(function(){em.current=N},[N]);var ev=(0,u.useRef)(O);(0,u.useEffect)(function(){ev.current=O},[O]);var ey=r._({isLazy:en,imgAttributes:eh,heightInt:ee,widthInt:Z,qualityInt:ed,className:I,imgStyle:ef,blurStyle:eg,loading:P,config:H,fetchPriority:D,fill:k,unoptimized:C,placeholder:q,loader:J,srcString:ep,onLoadRef:em,onLoadingCompleteRef:ev,setBlurComplete:el,setShowAltText:ec},V);return u.default.createElement(u.default.Fragment,null,u.default.createElement(w,n._(r._({},ey),{ref:t})),E?u.default.createElement(c.default,null,u.default.createElement("link",r._({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src,imageSrcSet:eh.srcSet,imageSizes:eh.sizes,crossOrigin:V.crossOrigin,referrerPolicy:V.referrerPolicy},b(D)))):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){var t=e.widthInt,i=e.heightInt,r=e.blurWidth,n=e.blurHeight,o=e.blurDataURL,a=e.objectFit,l=r||t,s=n||i,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&n?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){var t=e.config,i=e.src,r=e.width,n=e.quality;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;var r=i},5675:function(e,t,i){e.exports=i(3740)}}]);