(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5129:function(e,a,s){Promise.resolve().then(s.t.bind(s,5250,23)),Promise.resolve().then(s.t.bind(s,614,23)),Promise.resolve().then(s.bind(s,7141)),Promise.resolve().then(s.t.bind(s,3385,23)),Promise.resolve().then(s.bind(s,9808)),Promise.resolve().then(s.bind(s,4110)),Promise.resolve().then(s.bind(s,9608)),Promise.resolve().then(s.bind(s,9245)),Promise.resolve().then(s.bind(s,8211)),Promise.resolve().then(s.bind(s,8698)),Promise.resolve().then(s.bind(s,1943)),Promise.resolve().then(s.bind(s,5321)),Promise.resolve().then(s.bind(s,1442)),Promise.resolve().then(s.bind(s,3938))},3938:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return g}});var t=s(7437),d=s(828),i=s(5972),n=s(1975),r=s(1043),o=s(4286),l=s(6021),u=s(6107),c=s(7187),m=s(7664),f=s(1102),h=s(4628);let v=(0,i.xC)({reducer:{movie:n.ZP,banner:r.Z,auth:o.ZP,showTime:l.ZP,room:u.Z,seat:c.ZP,ticket:m.ZP,ComboToki:f.ZP,Payment:h.ZP}});var g=e=>{let{children:a}=e;return(0,t.jsx)(d.zt,{store:v,children:a})}},1043:function(e,a,s){"use strict";s.d(a,{E:function(){return i}});var t=s(7779),d=s(5972);let i=(0,d.hg)("banner/getBanner",async()=>(await t.U2("/banner")).data),n=(0,d.oM)({name:"banner",initialState:{banners:[],status:"loading",error:null},reducers:{},extraReducers:e=>{e.addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,a)=>{e.status="succeeded",e.banners=a.payload}).addCase(i.rejected,(e,a)=>{e.status="failed",e.error=a.error.message})}});a.Z=n.reducer},1975:function(e,a,s){"use strict";s.d(a,{XT:function(){return i}});var t=s(7779),d=s(5972);let i=(0,d.hg)("movie/getMovies",async()=>(await t.U2("/movie")).data.data),n=(0,d.hg)("movie/addNew",async e=>(await t.v_("/movie/add",e)).data),r=(0,d.hg)("movie/id",async e=>(await t.U2("/movie/".concat(e))).data.data),o=(0,d.oM)({name:"movie",initialState:{movies:[],movie:null,status:"loading",error:null},reducers:{addNewMovie:(e,a)=>{a.payload}},extraReducers:e=>{e.addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,a)=>{e.status="succeeded",e.movies=a.payload}).addCase(i.rejected,(e,a)=>{e.status="failed",e.error=a.error.message}).addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,a)=>{e.status="succeeded",e.movies=a.payload}).addCase(n.rejected,(e,a)=>{e.status="failed",e.error=a.payload}).addCase(r.pending,e=>{e.status="loading"}).addCase(r.fulfilled,(e,a)=>{e.status="succeeded",e.movie=a.payload}).addCase(r.rejected,(e,a)=>{e.status="failed",e.error=a.error.message})}});a.ZP=o.reducer},6021:function(e,a,s){"use strict";s.d(a,{KB:function(){return r},Z3:function(){return n}});var t=s(7779),d=s(5972);let i=(0,d.hg)("showTime/getShowTimes",async()=>(await t.ZP.get("/showtime")).data.data),n=(0,d.hg)("showtime/getById",async e=>(await t.ZP.get("/showtime/".concat(e))).data.data),r=(0,d.hg)("showTime/getShowTimesByMovieId",async e=>(await t.ZP.get("/showtime/movie/".concat(e))).data.data),o=(0,d.oM)({name:"showTime",initialState:{showTimes:[],showTime:[],status:"idle",error:null},reducers:{},extraReducers:e=>{e.addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,a)=>{e.status="successed",e.showTimes=a.payload}).addCase(i.rejected,(e,a)=>{e.status="failed",e.error=a.payload}).addCase(r.pending,e=>{e.status="loading"}).addCase(r.fulfilled,(e,a)=>{e.status="successed",e.showTimes=a.payload}).addCase(r.rejected,(e,a)=>{e.status="failed",e.error=a.payload}).addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,a)=>{e.status="successed",e.showTime=a.payload}).addCase(n.rejected,(e,a)=>{e.status="failed",e.error=a.payload})}});a.ZP=o.reducer},3385:function(){},614:function(e){e.exports={style:{fontFamily:"'__Poppins_5c2f41', '__Poppins_Fallback_5c2f41'",fontWeight:300,fontStyle:"italic"},className:"__className_5c2f41"}}},function(e){e.O(0,[921,425,230,971,69,744],function(){return e(e.s=5129)}),_N_E=e.O()}]);