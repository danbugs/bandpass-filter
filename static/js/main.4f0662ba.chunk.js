(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(35)},23:function(e,t,n){},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),l=n.n(o),c=(n(23),n(11)),u=n(12),s=n(16),i=n(13),d=n(17),m=(n(25),n(14)),f=n.n(m),p=(n(27),n(28),n(5)),h=n.n(p);function g(e){var t,n,a,r,o,l,c,u=300,s=10,i=!1;function d(){o.started?o.stop():o.start()}function m(){t.isPlaying()?t.pause():t.play()}function f(){var t=e.map(parseInt(l.value()),0,1350,10,22500);u=t}function p(){var t=e.map(parseInt(c.value()),0,100,0,1e3);s=t}function g(){i?(r.setType("bandpass"),i=!1):(r.setType("allpass"),i=!0)}e.preload=function(){t=e.loadSound("./myRecording.mp3")},e.setup=function(){e.colorMode(e.HSB),e.createCanvas(512,512),t.loop(),r=new h.a.BandPass,o=new h.a.Noise,t.disconnect(),t.connect(r),o.disconnect(),r.process(o),o.start(),n=new h.a.FFT(.9,512),a=e.width/512,e.createButton("Toggle Sound").mousePressed(m),e.createButton("Toggle Noise").mousePressed(d),e.createButton("Toggle Filter!").mousePressed(g),e.createDiv("Set Cut Off Frequency: (default: 300Hz)"),l=e.createInput(),e.createButton("Cut off!").mousePressed(f),e.createDiv("Set Resonance: (default: 10)"),c=e.createInput(),e.createButton("Resonate!").mousePressed(p)},e.draw=function(){r.set(u,s),e.background(0);var t=n.analyze();e.noStroke();for(var o=0;o<t.length;o++){var l=t[o],c=e.map(l,0,255,e.height,0);e.fill(o,255,255),e.rect(o*a,c,a-2,e.height-c)}}}n(29),n(31);var E=n(3),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.g,null,r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement(E.i,null,r.a.createElement(E.f,{md:6},r.a.createElement(E.a,null,r.a.createElement("h1",null,"Dan's Bandpass Filter"),r.a.createElement(E.b,null,r.a.createElement(f.a,{sketch:g})))),r.a.createElement(E.f,{md:4},r.a.createElement(E.a,null,r.a.createElement(E.c,{top:!0,width:"100%",src:"./362img1.png",alt:"Card image cap"}),r.a.createElement(E.b,null,r.a.createElement(E.e,null,"DFT Plot of Frequency"),r.a.createElement(E.d,null,"We can see that the fundamental frequency of the signal is around 500Hz, this is really close to the actual frequency of my tuning fork 493.9Hz. Go ahead and try adjusting the filter to that frequency.")))))),r.a.createElement("footer",null,r.a.createElement(E.h,null,"Developed with ",r.a.createElement("i",{style:{color:"red"},class:"fa fa-heart","aria-hidden":"true"})," by Dan")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4f0662ba.chunk.js.map