_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return y})),t.d(n,"default",(function(){return E}));var o,a=t("q1tI"),c=t.n(a),r=t("4Xqw"),i=(t("aq0v"),t("PLzZ")),l=t("Qtuf"),s=t("/I5Y"),u=t("CnZa"),m=function(e,n){return e+Math.floor(Math.random()*(n-e+1))},f=(t("JzkN"),c.a.createElement),d=function(){return f("span",{className:"blinking-cursor"},"|")},g=c.a.createElement;!function(e){e.Spelling="Spelling",e.DoneSpelling="DoneSpelling",e.Deleting="Deleting",e.DoneDeleting="DoneDeleting"}(o||(o={}));var b=function(e){var n=e?55:200,t=[0,0,0],o=m(0,2),a=m(0,n),c=0===m(0,1)?a:255-a;t[o]=c;for(var r=0;r<t.length;r++)r!==o&&(t[r]=e?c>122?m(0,n):m(255-n,255):m(0,c<122?n:255-n));return"rgb(".concat(t.join(", "),")")},h=function(e){var n=e.words,t=Object(u.b)().isDarkMode,c=Object(a.useState)(0),r=c[0],i=c[1],l=Object(a.useState)(""),s=l[0],m=l[1],f=Object(a.useState)(b(t)),h=f[0],v=f[1],p=Object(a.useState)(o.Spelling),N=p[0],O=p[1];return Object(a.useEffect)((function(){v(b(t))}),[t]),Object(a.useEffect)((function(){var e;return N===o.Spelling?s.length===n[r].length?O(o.DoneSpelling):e=setTimeout((function(){return m(n[r].slice(0,s.length+1))}),80):N===o.DoneSpelling?e=setTimeout((function(){return O(o.Deleting)}),3e3):N===o.Deleting?0===s.length?O(o.DoneDeleting):e=setTimeout((function(){return m(n[r].slice(0,s.length-1))}),80):N===o.DoneDeleting&&(i((r+1)%n.length),v(b(t)),e=setTimeout((function(){return O(o.Spelling)}),1e3)),function(){return clearTimeout(e)}}),[s,N]),g("div",{style:{color:"".concat(h)}},s,g(d,null))},v=t("YFqc"),p=t.n(v),N=t("DyY8"),O=t("rrYp"),T=t("Hit1"),w=t("zj4f"),D=["problem solver","problem maker","problem","performer","entertainer","programmer","tenista","pianist","Bulldog"],C=["snow","coffee and mint ice cream","Nirvana in Fire","the Pats","sci-fi and horror movies","Rhode Island","driving","the Celtics","pistachios","The Office"],j=c.a.createElement,k=function(){var e=Object(u.b)().isDarkMode,n=Object(O.a)(),t=Object(w.a)(),o=Object(T.a)();return j("div",{className:"home-container ".concat(N.k.Y120," ").concat(N.k.X72," ").concat(N.h.FlexColCenter)},j(i.a,null,j("section",{className:"home-bio-container ".concat(N.h.FlexCol),style:{minHeight:500}},j(l.b,{borderSize:6,borderRadius:"50%",fromColor:o[l.a.Pink],toColor:o[l.a.Orange],gradientAngle:"120deg"},j("div",{style:{height:259,width:259}},j("img",{style:{borderRadius:"50%",objectFit:"cover"},height:259,width:259,src:"/Media/Images/troy-feng-pic-bw.png",alt:"Troy Feng"}))),j("div",{className:"".concat(N.h.FlexCol," ").concat(N.i.T30)},j("h2",{className:"".concat(N.f.H1Text," ").concat(N.i.Y0)},j(s.b,{from:t[s.a.Pink],to:t[s.a.Orange],direction:"left"},"Hello!")),j(l.b,{className:"".concat(N.i.T30),borderSize:4,fromColor:o[l.a.Pink],toColor:o[l.a.Orange],gradientAngle:"120deg"},j("div",{className:"home-bio-facts-container ".concat(N.h.FlexRow," ").concat(n[N.b.Black]," ").concat(N.k.Y12)},j("div",{className:"home-bio-text ".concat(N.e.Flex1," ").concat(N.m.Center," ").concat(N.f.SmallTextBold," ").concat(N.h.FlexCol)},j(s.b,{className:"".concat(N.p.FitContent),from:t[s.a.Pink],to:t[s.a.Orange]},"My name is Troy. I am a"),j("span",{className:"home-counter-display ".concat(N.m.Center," ").concat(N.f.MediumTextAlt," ").concat(N.i.T6)},j(h,{words:D}))),j("div",{className:"home-bio-text ".concat(N.e.Flex1," ").concat(N.m.Center," ").concat(N.f.SmallTextBold," ").concat(N.h.FlexCol)},j(s.b,{from:t[s.a.Pink],to:t[s.a.Orange]},"And I like"),j("span",{className:"home-counter-display ".concat(N.m.Center," ").concat(N.f.MediumTextAlt," ").concat(N.i.T6)},j(h,{words:C}))))),j("div",{className:"".concat(N.i.T30," ").concat(N.h.FlexCol," ").concat(N.m.Center),style:{maxWidth:475}},j(s.b,{className:"".concat(N.f.MediumTextBold),from:t[s.a.Pink],to:t[s.a.Orange]},"Please\xa0",j(p.a,{href:"/contact"},j("a",{style:{textDecoration:"".concat(e?"#d475d4":"#5078f0"," underline")}},"get in touch")),"\xa0if you'd like to chat, connect, or collaborate."),j(s.b,{className:"".concat(N.f.LargeTextBold," ").concat(N.i.T30),from:t[s.a.Pink],to:t[s.a.Orange]},"Cheers!"))))))},x=t("Q/Hw"),S=c.a.createElement,y=!0;function E(){return S("div",{className:"site-container"},S(x.a,null),S(k,null),S(r.a,null))}},PLzZ:function(e,n,t){"use strict";t("t6yl");var o=t("q1tI"),a=t.n(o).a.createElement;n.a=function(e){var n=e.children,t=Object(o.useState)(2),c=t[0],r=t[1],i=Object(o.useRef)(),l=Object(o.useRef)(0);return Object(o.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){var n=e.boundingClientRect.y,t=e.isIntersecting;0!==n?(n<l.current?r(t?2:0):r(t?2:1),l.current=n):r(2)}))}));return e.observe(i.current),function(){return e.unobserve(i.current)}}),[]),a("div",{className:"animate-on-scroll-container ".concat(0===c?"animate-on-scroll-container-invis-below":1===c?"animate-on-scroll-container-invis-above":"animate-on-scroll-container-visible"),ref:i},n)}}},[["/EDR",0,2,4,1,5,3]]]);