(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{9723:function(e,s,t){Promise.resolve().then(t.bind(t,558))},558:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return r}});var a=t(7437),l=t(2265),d=t(1975),i=t(828),n=t(6230),x=t(8792),c=e=>{let{movie:s}=e,{_id:t,title:l,thumnail:d,trailer:i,director:n,category_id:c,premiere:r,time:o,language_id:m,rated:u,description:h,createdAt:p,updatedAt:f}=s;return(0,a.jsxs)("div",{className:"col-span-1 bg-gray-800/10 rounded-2xl p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]",children:[(0,a.jsxs)("div",{className:" p-4",children:[(0,a.jsx)("img",{src:d,alt:l,className:"w-full h-96 object-cover rounded-2xl"}),(0,a.jsx)("h2",{className:"text-xl font-bold text-white mt-4 h-[50px]",children:l}),(0,a.jsxs)("p",{className:"text-sm text-white",children:["Thể Loại : ",c.name]}),(0,a.jsxs)("p",{className:"text-sm text-white",children:["Thời lượng : ",o]}),(0,a.jsxs)("p",{className:"text-sm text-white",children:["Khởi chiếu : ",r]})]}),(0,a.jsx)("div",{className:"max-w-[200px] items-center justify-center flex rounded-full mx-auto  p-[1px] shadow-lg",children:(0,a.jsx)(x.default,{href:"/showtime/".concat(t),children:(0,a.jsx)("button",{className:"flex-1 font-bold md:text-xl lg:text-sm bg- px-6 py-2 rounded-full",children:"Mua v\xe9"})})})]})},r=()=>{let e=(0,i.I0)(),s=(0,i.v9)(e=>e.movie.movies),t=(0,i.v9)(e=>e.movie.status);return(0,l.useEffect)(()=>{e((0,d.XT)())},[e]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"container mx-auto backdrop-blur-2xl bg-gray-100/10 rounded-2xl p-4 min-h-[500px] h-fit",children:(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-4 justify-center",children:[(0,a.jsx)("div",{className:"col-span-4 ml-5",children:(0,a.jsxs)("div",{className:"w-fit my-2 flex",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("p",{className:"font-bold text-lime-200 text-2xl",children:"P"}),(0,a.jsx)("p",{className:"font-bold text-lime-300 text-2xl",children:"h"}),(0,a.jsx)("p",{className:"font-bold text-teal-300 text-2xl",children:"i"}),(0,a.jsx)("p",{className:"font-bold text-teal-500 text-2xl",children:"m"})]}),(0,a.jsxs)("div",{className:"flex items-center mx-2",children:[(0,a.jsx)("p",{className:"font-bold text-indigo-300 text-2xl",children:"đ"}),(0,a.jsx)("p",{className:"font-bold text-pink-300 text-2xl",children:"a"}),(0,a.jsx)("p",{className:"font-bold text-pink-400 text-2xl",children:"n"}),(0,a.jsx)("p",{className:"font-bold text-amber-500 text-2xl",children:"g"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("p",{className:"font-bold text-amber-400 text-2xl",children:"c"}),(0,a.jsx)("p",{className:"font-bold text-orange-600 text-2xl",children:"h"}),(0,a.jsx)("p",{className:"font-bold text-amber-400 text-2xl",children:"i"}),(0,a.jsx)("p",{className:"font-bold text-orange-600 text-2xl",children:"ế"}),(0,a.jsx)("p",{className:"font-bold text-teal-300 text-2xl",children:"u"})]})]})}),"loading"===t&&(0,a.jsx)(n.n0,{}),"failed"===t&&(0,a.jsx)("div",{children:"Failed"}),"succeeded"===t&&s.map(e=>(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsx)(c,{movie:e},e._id)},e.id))]})})})}},1975:function(e,s,t){"use strict";t.d(s,{XT:function(){return d}});var a=t(7779),l=t(5972);let d=(0,l.hg)("movie/getMovies",async()=>(await a.U2("/movie")).data.data),i=(0,l.hg)("movie/addNew",async e=>(await a.v_("/movie/add",e)).data),n=(0,l.hg)("movie/id",async e=>(await a.U2("/movie/".concat(e))).data.data),x=(0,l.oM)({name:"movie",initialState:{movies:[],movie:null,status:"loading",error:null},reducers:{addNewMovie:(e,s)=>{s.payload}},extraReducers:e=>{e.addCase(d.pending,e=>{e.status="loading"}).addCase(d.fulfilled,(e,s)=>{e.status="succeeded",e.movies=s.payload}).addCase(d.rejected,(e,s)=>{e.status="failed",e.error=s.error.message}).addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,s)=>{e.status="succeeded",e.movies=s.payload}).addCase(i.rejected,(e,s)=>{e.status="failed",e.error=s.payload}).addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,s)=>{e.status="succeeded",e.movie=s.payload}).addCase(n.rejected,(e,s)=>{e.status="failed",e.error=s.error.message})}});s.ZP=x.reducer}},function(e){e.O(0,[921,425,230,971,69,744],function(){return e(e.s=9723)}),_N_E=e.O()}]);