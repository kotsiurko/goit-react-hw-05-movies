"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[490],{1490:function(e,t,r){r.r(t);var n=r(9439),i=r(7689),c=r(1087),a=r(1221),o=r(2791),s=r(7596),u=r(184),h=new a.J;t.default=function(){var e,t,r=(0,i.UO)().id,a=(0,o.useState)(null),v=(0,n.Z)(a,2),l=v[0],d=v[1],f=(0,i.TH)(),g=null!==(e=null===f||void 0===f||null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,o.useEffect)((function(){h.fetchMovieById(r).then(d).catch((function(e){s.Am.error("Something went wrong! ".concat(e,". Try again later."),{position:s.Am.POSITION.TOP_CENTER})}))}),[r]),!l)return null;var p=l.backdrop_path,m=l.title,_=l.release_date,k=l.vote_average,w=l.overview,Z=l.genres;return(0,u.jsxs)("main",{children:[(0,u.jsx)(c.rU,{to:g,children:"Go back"}),(0,u.jsx)("img",{src:h.getImgSrc(p),alt:""}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h2",{children:[m," (",_,")"]}),(0,u.jsxs)("p",{children:["User score: ",k]}),(0,u.jsxs)("p",{children:["Overview: ",w]}),(0,u.jsxs)("p",{children:["Genres: ",Z]})]}),(0,u.jsx)("hr",{}),"Additional information",(0,u.jsx)("p",{children:(0,u.jsx)(c.rU,{to:"cast",state:{from:g},children:"Cast"})}),(0,u.jsx)("p",{children:(0,u.jsx)(c.rU,{to:"reviews",state:{from:g},children:"Review"})}),(0,u.jsx)("hr",{}),(0,u.jsx)(i.j3,{})]})}},1221:function(e,t,r){r.d(t,{J:function(){return h}});var n=r(5671),i=r(3144),c=r(6274),a=r(9359),o=r(3263),s=(0,a.Z)("BASE_URL"),u=(0,a.Z)("API_KEY"),h=function(){function e(){(0,n.Z)(this,e),Object.defineProperty(this,s,{writable:!0,value:"https://api.themoviedb.org/3"}),Object.defineProperty(this,u,{writable:!0,value:"b04a034fc18f8d6bb9fee9f009f99d0d"})}return(0,i.Z)(e,[{key:"fetchTrendMovies",value:function(){return o.Z.get("".concat((0,c.Z)(this,s)[s],"/trending/movie/week?api_key=").concat((0,c.Z)(this,u)[u]))}},{key:"fetchSearch",value:function(e){return o.Z.get("".concat((0,c.Z)(this,s)[s],"/search/movie?api_key=").concat((0,c.Z)(this,u)[u],"&query=").concat(e))}},{key:"fetchMovieById",value:function(e){var t=this;return o.Z.get("".concat((0,c.Z)(this,s)[s],"/movie/").concat(e,"?api_key=").concat((0,c.Z)(this,u)[u])).then((function(e){var r=e.data,n=r.backdrop_path,i=r.title,c=r.release_date,a=r.vote_average,o=r.overview,s=r.genres;return{backdrop_path:n,title:i,release_date:c.substring(0,4),vote_average:a,overview:o,genres:t.getGenres(s)}}))}},{key:"fetchCast",value:function(e){return o.Z.get("".concat((0,c.Z)(this,s)[s],"/movie/").concat(e,"/credits?api_key=").concat((0,c.Z)(this,u)[u]))}},{key:"fetchReviews",value:function(e){return o.Z.get("".concat((0,c.Z)(this,s)[s],"/movie/").concat(e,"/reviews?api_key=").concat((0,c.Z)(this,u)[u]))}},{key:"getImgSrc",value:function(e){return e?"https://image.tmdb.org/t/p/w500".concat(e):"https://raw.githubusercontent.com/kotsiurko/filmoteka/dev/src/images/default-photo.jpeg"}},{key:"getGenres",value:function(e){return e.reduce((function(e,t){return e+", "+t.name}),"").substr(2)}}]),e}()}}]);
//# sourceMappingURL=490.3e23fc4f.chunk.js.map