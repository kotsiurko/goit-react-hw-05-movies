"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[206],{395:function(t,e,n){n.d(e,{Z:function(){return v}});var i,c,a,o=n(87),r=n(168),s=n(444),u=s.ZP.div(i||(i=(0,r.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 42px;\n"]))),f=s.ZP.div(c||(c=(0,r.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),h=s.ZP.h3(a||(a=(0,r.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  font-size: 14px;\n"]))),d=n(184),v=function(t){var e=t.movies;return(0,d.jsx)(u,{children:e.map((function(t){var e=t.poster_path,n=t.id,i=t.title,c="https://image.tmdb.org/t/p/w500".concat(e);return(0,d.jsx)(f,{children:(0,d.jsxs)(o.rU,{to:"/movies/".concat(n),children:[(0,d.jsx)("img",{src:c,alt:""}),(0,d.jsx)(h,{children:i})]})},n)}))})}},206:function(t,e,n){n.r(e);var i=n(439),c=n(395),a=n(221),o=n(791),r=n(184),s=new a.J;e.default=function(){var t=(0,o.useState)([]),e=(0,i.Z)(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){s.fetchTrendMovies(1).then((function(t){var e=t.data;a(e.results)}))}),[]),(0,r.jsx)("main",{children:(0,r.jsx)(c.Z,{movies:n})})}},221:function(t,e,n){n.d(e,{J:function(){return f}});var i=n(671),c=n(144),a=n(274),o=n(359),r=n(263),s=(0,o.Z)("BASE_URL"),u=(0,o.Z)("API_KEY"),f=function(){function t(){(0,i.Z)(this,t),Object.defineProperty(this,s,{writable:!0,value:"https://api.themoviedb.org/3"}),Object.defineProperty(this,u,{writable:!0,value:"b04a034fc18f8d6bb9fee9f009f99d0d"})}return(0,c.Z)(t,[{key:"fetchTrendMovies",value:function(t){return r.Z.get("".concat((0,a.Z)(this,s)[s],"/trending/movie/week?api_key=").concat((0,a.Z)(this,u)[u],"&page=").concat(t))}},{key:"fetchSearch",value:function(t){return r.Z.get("".concat((0,a.Z)(this,s)[s],"/search/movie?api_key=").concat((0,a.Z)(this,u)[u],"&query=").concat(t))}},{key:"fetchMovieById",value:function(t){return r.Z.get("".concat((0,a.Z)(this,s)[s],"/movie/").concat(t,"?api_key=").concat((0,a.Z)(this,u)[u]))}},{key:"fetchCast",value:function(t){return r.Z.get("".concat((0,a.Z)(this,s)[s],"/movie/").concat(t,"/credits?api_key=").concat((0,a.Z)(this,u)[u]))}},{key:"fetchReviews",value:function(t){return r.Z.get("".concat((0,a.Z)(this,s)[s],"/movie/").concat(t,"/reviews?api_key=").concat((0,a.Z)(this,u)[u]))}}]),t}()}}]);
//# sourceMappingURL=206.925ac904.chunk.js.map