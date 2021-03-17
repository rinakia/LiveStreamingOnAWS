(this.webpackJsonpplayer=this.webpackJsonpplayer||[]).push([[0],{24
:function(e,a,t){e.exports=t(51)},30
:function(e,a,t){},51
:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),o=t.n(l),s=(t(29),t(30),t(18)),c=t(19),i=t(23),m=t(22),u=t(20),p=t.n(u),h=t(7),E=t(10),d=t(21),f=t(9),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={url
:null,playing
:!1,stream
:"STREAM"},e.load=function(a,t){e.setState({url
:a,stream
:t,played
:0,playing
:!0})},e.ref=function(a){e.player=a},e}return Object(c.a)(t,[{key
:"render",value
:function(){var e=this,a=this.state,t=a.url,n=a.stream,l=a.playing;return r.a.createElement("div",{className
:"main"},

r.a.createElement("h1",null,"Live on AWS"),
r.a.createElement("p",null,"Test Demo Page"),

r.a.createElement("div",{className
:"player-wrapper"},r.a.createElement(p.a,{ref
:this.ref,className
:"react-player",url
:t,playing
:l,controls
:!0,width
:"100%",height
:"100%"})),
r.a.createElement(h.a,{horizontal:!0},
r.a.createElement(h.a.Item,null,r.a.createElement("b",null,n)),
r.a.createElement(h.a.Item,{className:"url"},
r.a.createElement("span",null,t))),

r.a.createElement(E.a,{onClick
:function(){return e.load(awsExports.hls_manifest,"HLS")},className
:"perview",size
:"sm",variant
:"success"},"Preview HLS"),

r.a.createElement("p",null,"再生できない場合: ",
r.a.createElement("a",{id:"live",href:awsExports.mediaLiveConsole,target:"_blank",rel
:"noopener noreferrer"},"MediaLiveコンソール")," が「running」であることを確認してください。"),

r.a.createElement("p",null,"Ref: ",
r.a.createElement("a",{href
:"https://aws.amazon.com/solutions/implementations/live-streaming-on-aws/?did=sl_card&trk=sl_card",target
:"_blank",rel
:"noopener noreferrer"},"Live Stream on AWS solution"),"."),

)}}]),t}

(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match
(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2272053a.chunk.js.map