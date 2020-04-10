(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/esp32_radio/vue-radio/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2df0":function(t,e,n){"use strict";var r=n("8922"),a=n.n(r);a.a},"2ff3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{"clipped-left":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/genres"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("By Genres")])],1)],1),n("v-list-item",{attrs:{to:"/countries"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("By Country")])],1)],1),null!=t.homeCountryName?n("v-list-item",{attrs:{to:t.homeCountryPath}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("My Country")])],1)],1):t._e()],1)],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Radio Player for ESP32")])],1),n("v-content",[n("router-view")],1)],1)},o=[],i=(n("d3b7"),n("96cf"),n("1da1")),u=n("d4ec"),s=n("bee2"),c=n("bc3a"),l=n.n(c),p=function(){function t(){Object(u["a"])(this,t)}return Object(s["a"])(t,[{key:"getInfo",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("getInfo"),t.next=3,l.a.get("/service/info");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getWordpressPost",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://pschatzmann.ch/wp-json/wp/v2/posts/1323");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getCountryCodes",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://de1.api.radio-browser.info/json/countrycodes?hidebroken=true");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getCountry",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getUserCountry",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://ip-api.com/json");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getRadios",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://de1.api.radio-browser.info/json/stations/search?"+e+"="+n+"&codec=MP3",t.next=3,l.a.get(r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}]),t}(),f={props:{source:String,homeCountryPath:null,homeCountryName:null},data:function(){return{drawer:null}},mounted:function(){var t=this,e=new p;e.getUserCountry().then((function(e){t.homeCountryName=e.data.country,t.homeCountryPath="/countries/"+e.data.countryCode.toLowerCase()})).catch((function(t){console.error(t)}))}},m=f,d=n("2877"),h=n("6544"),v=n.n(h),g=n("7496"),w=n("40dc"),y=n("5bc1"),b=n("a75b"),x=n("132d"),k=n("8860"),C=n("da13"),j=n("1800"),_=n("5d23"),R=n("f774"),O=n("2a7f"),V=Object(d["a"])(m,a,o,!1,null,null,null),P=V.exports;v()(V,{VApp:g["a"],VAppBar:w["a"],VAppBarNavIcon:y["a"],VContent:b["a"],VIcon:x["a"],VList:k["a"],VListItem:C["a"],VListItemAction:j["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VNavigationDrawer:R["a"],VToolbarTitle:O["a"]});var S=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(this.radios,(function(e){return n("v-col",{key:e.stationuuid,attrs:{cols:"20",sm:"1",md:"3"}},[n("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{outlined:"",tiled:"","max-width":"200px",elevation:a?16:2}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.favicon,height:"200px",width:"200px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:"http://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Radio-4-icon.png",height:"200px",width:"200px"}})],1)]},proxy:!0}],null,!0)}),n("v-card-text",{domProps:{textContent:t._s(e.name)}}),n("v-card-actions",[n("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(n){return t.play(e.url_resolved)}}},[n("v-icon",[t._v("mdi-play")])],1)],1)],1)]}}],null,!0)})],1)})),1)],1)},I=[],A=(n("b0c0"),function(){function t(){Object(u["a"])(this,t)}return Object(s["a"])(t,[{key:"getName",value:function(){return"Streaming on ESP32"}},{key:"play",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/service/sound/play?file="+e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"stop",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/service/sound/stop");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getInfo",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/service/sound/status");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}()),N=function(){function t(){Object(u["a"])(this,t),this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.source=this.audioCtx.createBufferSource(),this.isPlaying=!1}return Object(s["a"])(t,[{key:"getName",value:function(){return"Playing locally"}},{key:"play",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.fetch(e);case 2:return n=t.sent,t.next=5,this.audioCtx.decodeAudioData(n.arrayBuffer);case 5:r=t.sent,this.source.buffer=r,this.source.connect(this.audioCtx.destination),this.source.start(),this.isPlaying=!0;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"stop",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.source.stop(),this.isPlaying=!1;case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getInfo",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{isPlaying:this.isPlaying});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),L=function(){function t(){Object(u["a"])(this,t),this.sourceESP=new A,this.sourceWA=new N,this.source=this.sourceWA}return Object(s["a"])(t,[{key:"getSources",value:function(){return[this.sourceESP,this.sourceWA]}},{key:"setSource",value:function(t){this.stop(),this.source=t}},{key:"getSource",value:function(){return this.source}},{key:"getName",value:function(){return this.source.getName()}},{key:"play",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.stop(),t.abrupt("return",this.source.play(e));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"stop",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.source.stop());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getInfo",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.source.getInfo());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),E={data:function(){return{radios:[],hover:!1,player:new L}},methods:{play:function(t){this.player.play(t)}},mounted:function(){var t=this,e=void 0===this.$router.currentRoute.params["id"]?"blues":this.$router.currentRoute.params.id,n="Genre"==this.$router.currentRoute.name?"tag":"countrycode",r=new p;r.getRadios(n,e).then((function(e){t.radios=e.data,console.log("mount finised "+t.radios.length)})).catch((function(t){console.error(t)}))}},T=E,$=n("8336"),B=n("b0af"),D=n("99d9"),z=n("62ad"),M=n("a523"),G=n("ce87"),W=n("adda"),H=n("0fd9"),J=Object(d["a"])(T,U,I,!1,null,null,null),q=J.exports;v()(J,{VBtn:$["a"],VCard:B["a"],VCardActions:D["a"],VCardText:D["b"],VCol:z["a"],VContainer:M["a"],VHover:G["a"],VIcon:x["a"],VImg:W["a"],VRow:H["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(this.countryData,(function(e){return n("v-col",{key:e.stationuuid,attrs:{cols:"20",sm:"1",md:"3"}},[n("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{outlined:"",tiled:"","max-width":"200px",elevation:a?16:2},nativeOn:{click:function(n){return t.doSelect(e.name)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.iconUrl,height:"200px",width:"200px"}}),n("v-card-text",[t._v(" "+t._s(e.name)+" - "+t._s(t.countryNames[e.name.toLowerCase()])+" ("+t._s(e.stationcount)+") ")])],1)]}}],null,!0)})],1)})),1)],1)},X=[],K=n("b85c"),Q={data:function(){return{countryData:[],countryNames:{}}},methods:{doSelect:function(t){this.$router.push({path:"/countries/"+t.toLowerCase()})}},mounted:function(){var t=this,e=new p;e.getCountry().then((function(e){var n,r=Object(K["a"])(e.data);try{for(r.s();!(n=r.n()).done;){var a=n.value;t.countryNames[a.cca2.toLowerCase()]=a.name.common}}catch(o){r.e(o)}finally{r.f()}console.log(t.countryNames)})).catch((function(t){console.error(t)})),e.getCountryCodes().then((function(e){for(var n in t.countryData=e.data,t.countryData)t.countryData[n].iconUrl="https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/"+t.countryData[n].name.toLowerCase()+".png";console.log(t.countryData)})).catch((function(t){console.error(t)}))},components:{}},Y=Q,Z=(n("ea2a"),Object(d["a"])(Y,F,X,!1,null,"7bb95e88",null)),tt=Z.exports;v()(Z,{VCard:B["a"],VCardText:D["b"],VCol:z["a"],VContainer:M["a"],VHover:G["a"],VImg:W["a"],VRow:H["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(this.genres,(function(e){return n("v-col",{key:e.name,attrs:{cols:"20",sm:"1",md:"3"}},[n("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{outlined:"",tiled:"","max-width":"200px",elevation:a?16:2},nativeOn:{click:function(n){return t.doSelect(e.name)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.imageUrl,height:"200px",width:"200px"}}),n("v-card-text",[t._v(" "+t._s(e.name)+" ")])],1)]}}],null,!0)})],1)})),1)],1)},nt=[],rt={data:function(){return{genres:[{name:"African",imageUrl:"https://i.pinimg.com/originals/33/61/70/336170387ceaf2d3e5316e6630d6fbab.jpg"},{name:"Blues",imageUrl:"https://www.hotelaurora.org/sites/default/files/styles/large/public/events/images/blues4.jpg?itok=dBF52e-E"},{name:"Caribbean",imageUrl:"http://www.littleharbourestates.com/wp-content/uploads/2016/02/caribbean-music.jpg"},{name:"Country",imageUrl:"https://www.traveldailymedia.com/assets/2019/12/country-music.jpg"},{name:"Electronic",imageUrl:"http://morozoffent.com/wp-content/uploads/2018/01/Music-Trends-morozoffent.jpg"},{name:"Folk",imageUrl:"https://www.ebu.ch/files/live/sites/ebu/files/Groups/Radio/euroradio-folk.jpg"},{name:"Hip hop",imageUrl:"https://image.shutterstock.com/image-vector/hip-hop-music-illustration-graffiti-600w-757742746.jpg"},{name:"Jazz",imageUrl:"https://www.udiscovermusic.com/wp-content/uploads/2019/04/best-jazz-songs.jpg"},{name:"Latin",imageUrl:"https://bestradio.fm/uploads/posts/2013-11/1385730994_latino-online_dance_music.jpg"},{name:"Pop",imageUrl:"https://kehillah.org/wp-content/uploads/2019/01/288-2884897_pop-music-royalty-free-clip-art-pop-music-logo-png-300x224.jpg"},{name:"Soul",imageUrl:"https://media.gettyimages.com/vectors/soul-sista-grunge-vector-id165069456?s=2048x2048"},{name:"Rock",imageUrl:"https://previews.123rf.com/images/paseven/paseven1711/paseven171100076/89699839-banni%C3%A8re-de-vecteur-ou-embl%C3%A8me-avec-des-mots-musique-rock-guitare-%C3%A9lectrique-avec-des-ailes-sur-le-fond-d-.jpg"},{name:"Classical",imageUrl:"https://www.albawaba.com/sites/default/files/styles/de2e_standard/public/im/Classical-Music-Wallpaper.jpg?itok=VXi1I9f8"}]}},methods:{doSelect:function(t){this.$router.push({path:"/genres/"+t.toLowerCase()})}},components:{}},at=rt,ot=(n("2df0"),Object(d["a"])(at,et,nt,!1,null,"764fa5f2",null)),it=ot.exports;v()(ot,{VCard:B["a"],VCardText:D["b"],VCol:z["a"],VContainer:M["a"],VHover:G["a"],VImg:W["a"],VRow:H["a"]}),r["a"].use(S["a"]);var ut=[{path:"/",name:"Genres",component:it},{path:"/genres",name:"Genres",component:it},{path:"/genres/:id",name:"Genre",component:q,props:!0},{path:"/countries",name:"Countries",component:tt},{path:"/countries/:id",name:"Country",component:q,props:!0}],st=new S["a"]({routes:ut}),ct=st,lt=n("2f62");r["a"].use(lt["a"]);var pt=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ft=n("f309");r["a"].use(ft["a"]);var mt=new ft["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ct,store:pt,vuetify:mt,render:function(t){return t(P)}}).$mount("#app")},8922:function(t,e,n){},ea2a:function(t,e,n){"use strict";var r=n("2ff3"),a=n.n(r);a.a}});
//# sourceMappingURL=app.f2613015.js.map