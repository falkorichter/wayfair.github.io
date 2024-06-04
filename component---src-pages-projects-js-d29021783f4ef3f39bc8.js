"use strict";(self.webpackChunkwayfair_github_io=self.webpackChunkwayfair_github_io||[]).push([[853],{7429:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(9196),i=a(6065),o=a(4272),s=a.p+"static/sentiment-e1787c2506aa79b4dfe0b4b0a36d0f97.png",l=a.p+"static/tremor-e69703abe757dbef626d921c3fcf7d66.png",c=[{description:'<a href="https://github.com/wayfair/git-parse"><code>git-parse</code></a> allows JavaScript developers\n      to treat a git repository as they would treat a regular object.\n      This data structure simplifies git operations and manipulation\n      of state without having to write boilerplate <code>git</code> cli\n      functions within their project. We\'ve noted dependencies for this project\n      exceeding 5 thousand, 350k downloads a week on NPM, and usage in well known\n      packages like <a href="https://github.com/apollographql/apollo-tooling/blob/8d2015e509e6e78265a6696db2fad5a0a2aaa460/packages/apollo/package.json#L55">\n      apollo</a>',imageSrc:a.p+"static/git-parse-07c491502cf024afa4d7423f9debfd0e.png",alt:"Git Parse sample image"},{description:'<a href="https://github.com/tremor-rs"><code>tremor</code></a> is Wayfair\'s solution to ingesting\n      data signals from production traffic at the billion-dollar enterprise scale.\n      By using Rust instead of our previous Java-based solution, Wayfair saw significant\n      gains in computational leverage and throughput for our infrastructure.',imageSrc:l,alt:"tremor sample image"},{description:'<a href="https://github.com/wayfair-incubator/extra-model"><code>extra-model</code></a> is an implementation of the\n      <a href="https://aclanthology.org/D18-1384/">ExtRA\n      algorithm</a>. Unsupervised, the algorithm executes\n      an NLP task called Aspect-Based Sentiment Analysis, used routinely in production on more\n      than 1 million reviews across the Wayfair catalog.',imageSrc:s,alt:"Sentiment Sample Image"}],u=function(){var e=(0,n.useState)(0),t=e[0],a=e[1],s=function(e){var t=e.keyCode;switch(t){case 97:case 98:case 99:a(t-97);break;default:return}};return n.createElement(r.Z,{style:{backgroundColor:"#E1DCF2",padding:"60px"}},n.createElement(i.Z,{className:"justify-content-center"},n.createElement(o.Z,{xs:"12",sm:"6",md:"8",lg:"5",xl:"4"},n.createElement("h2",null,"Featured Projects"),c.map((function(e,a){var r=e.description;return n.createElement("div",{key:a,style:{display:a===t?"":"none"}},n.createElement("p",{dangerouslySetInnerHTML:{__html:r}}),n.createElement("br",null))})),n.createElement("strong",null,"View Our Projects"),n.createElement("br",null),c.map((function(e,r){return n.createElement("span",{tabIndex:r,key:r,style:{height:"10px",width:"10px",marginRight:"5px",backgroundColor:r===t?"#612578":"#fff",borderRadius:"50%",display:"inline-block"},onClick:function(){return a(r)},role:"button","aria-label":"Show Slide "+(r+1),onKeyDown:s})}))),n.createElement(o.Z,{lg:"6",xl:"4",className:"d-none d-lg-flex justify-content-center"},c.map((function(e,a){var r=e.imageSrc,i=e.alt;return n.createElement("img",{src:r,alt:i,key:a,style:{display:a===t?"":"none",width:"455px",height:"300px",minWidth:"455px"}})})))))}},950:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(7294),r=a(7779),i=a(8119),o=a(6065),s=a(5314),l=a(7429),c=a(9196),u=a(4272),d=a(6924),p=a(3723),m=["Python","Java","Rust","Kotlin","JavaScript","Markdown","TypeScript","Swift"],g=m[0],h=m[1],f=m[2],y=m[3],b=m[4],w=m[5],k=[{name:"Backstage (Spotify)",language:m[6],description:"Backstage is an open platform for building developer portals. Powered by a centralized software catalog, Backstage restores order to your microservices and infrastructure and enables your product teams to ship high-quality code quickly — without compromising autonomy.",href:"https://github.com/wayfair-contribs/backstage"},{name:"Brikkit-Android",language:y,description:"With BrickKit, you can manage complex, dynamic, device type specific, and orientation aware layouts with the same code. It's easy to reuse and extend bricks which highly reduces code redundancy and makes UI testing easier.",href:"https://github.com/wayfair/brickkit-android"},{name:"Brooklin (LinkedIn)",language:h,description:"Brooklin is a distributed system intended for streaming data between various heterogeneous source and destination systems with high reliability and throughput at scale. Designed for multitenancy, Brooklin can simultaneously power hundreds of data pipelines across different systems and can easily be extended to support new sources and destinations.",href:"https://github.com/wayfair-contribs/brooklin"},{name:"Columbo",language:g,description:"Specify a dynamic set of questions to ask a user and get their answers. Columbo's feature set allows a program to ask multiple types of questions, validate the response provided by the user, use answers from earlier questions, and accept answers from the command line in addition to prompting the user. ",href:"https://github.com/wayfair-incubator/columbo"},{name:"DociQL",language:b,description:'DociQL generates beautiful static HTML5 documentation from a GraphQL endpoint using the introspection query. The goal of DociQL is help you "save time and look good" by providing an extensible platform for auto generating your API documentation. The default layout is a three column single page, similar to those employed by Stripe and Intercom.',href:"https://github.com/wayfair/dociql"},{name:"ExtRA-Model",language:g,description:"extra-model is an implementation of the ExtRA algorithm. Unsupervised, the algorithm executes an NLP task called Aspect-Based Sentiment Analysis, used routinely in production on more than 1 million reviews across the Wayfair catalog.",href:"https://github.com/wayfair-incubator/extra-model"},{name:"GBQ",language:g,description:"Python wrapper for interacting Google BigQuery. This package provides an interface by wrapping Google's low level library. It exposes options to provide input as json objects which can be used for various CI/CD tools.",href:"https://github.com/wayfair-incubator/gbq"},{name:"Git-Parse",language:b,description:"Javascript library which generates an array of javascript objects representing the current branch of a local git repository's commit history",href:"https://github.com/wayfair/git-parse"},{name:"OSS-Template",language:w,description:"Wayfair OSPO-sponsored template for starting an Open Source project. Open to be used by everyone, not just by Wayfairians.",href:"https://github.com/wayfair-incubator/oss-template"},{name:"PyGitOps",language:g,description:"Python wrapper for low level git operations and logic. Useful for systems automating git operations with Python.",href:"https://github.com/wayfair-incubator/pygitops"},{name:"Tremor",language:f,description:"Tremor is an early stage event processing system for unstructured data with rich support for structural pattern matching, filtering and transformation.",href:"https://github.com/tremor-rs"},{name:"VSM for iOS",language:m[7],description:"VSM is a reactive architecture for iOS that is unidirectional, highly type-safe, behavior-driven, and clean.",href:"https://github.com/wayfair/vsm-ios"}],v=function(){var e=(0,n.useState)(""),t=e[0],r=e[1],i=function(e,t){13===e.keyCode&&(r(t),e.stopPropagation())};return n.createElement(c.Z,null,n.createElement(o.Z,null,n.createElement(u.Z,{lg:"3",className:"d-none d-lg-inline"},n.createElement("h5",null,n.createElement("strong",null,"Filter")),m.map((function(e,t){return n.createElement("div",{key:t,tabIndex:t+50,style:{marginBottom:"5px"},role:"button","aria-label":"Filter language "+e,onClick:function(){return r(e)},onKeyDown:function(t){return i(t,e)}},e)}))),n.createElement(u.Z,{xs:!0,lg:"9"},n.createElement(d.Z,{className:"d-block d-lg-none"},n.createElement(d.Z.Header,{eventkey:"0",style:{marginLeft:"-1.25rem"}},"Filter"),n.createElement(d.Z.Body,{eventkey:"0"},n.createElement("div",null,m.map((function(e,t){return n.createElement("div",{key:t,tabIndex:t+50,style:{marginBottom:"5px"},role:"button","aria-label":"Filter language "+e,onClick:function(){return r(e)},onKeyDown:function(t){return i(t,e)}},e)}))))),""===t?"":n.createElement("p",{tabIndex:m.length+50,role:"button","aria-label":"Unset language filter",onClick:function(){return r("")},onKeyDown:function(e){return i(e,"")}},"Showing ",n.createElement("strong",null,t)," projects (click to unset)"),k.map((function(e,r){var i=e.name,s=e.language,l=e.description,c=e.href;return n.createElement(o.Z,{style:{marginBottom:"40px",borderBottom:"1px solid #332C36",paddingBottom:"20px",display:""===t||s===t?"flex":"none"},key:r},n.createElement("h4",{style:{margin:"0px"}},n.createElement("strong",null,i)),n.createElement("h5",{style:{marginBottom:"20px"}},s),n.createElement("p",null,l),n.createElement("a",{href:c,target:"_new",style:{color:"#332C36",textDecoration:"none"}},"Learn More",n.createElement(p.S,{src:"../../images/arrows/arrowdark.png",height:11,formats:["AUTO"],alt:"Link Arrow",style:{margin:"8px"},__imageData:a(4216)})))})))))},x=function(){return n.createElement(r.Z,null,n.createElement(i.Z,{title:"Featured Projects at Wayfair Open Source"}),n.createElement(o.Z,{className:"justify-content-end"},n.createElement(l.Z,null)),n.createElement(s.Z,null),n.createElement(v,null),n.createElement(s.Z,null))}},4216:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/97c51b85ca79b43395a7db90660c21b3/a66ce/arrowdark.png","srcSet":"/static/97c51b85ca79b43395a7db90660c21b3/3e980/arrowdark.png 4w,\\n/static/97c51b85ca79b43395a7db90660c21b3/ed263/arrowdark.png 8w,\\n/static/97c51b85ca79b43395a7db90660c21b3/a66ce/arrowdark.png 15w","sizes":"(min-width: 15px) 15px, 100vw"},"sources":[]},"width":15,"height":11}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-d29021783f4ef3f39bc8.js.map