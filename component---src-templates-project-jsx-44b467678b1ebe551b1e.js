(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{324:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return y}));var r=n(52),i=n(5),o=n(2),a=n.n(o),c=n(322),p=n.n(c),s=n(56),d=n(44),u=n(320),l=n(331),m=n(321),g=Object(r.a)("div",{target:"ex6n7340"})("background:",s.a.grey200,";display:flex;justify-content:center;align-items:flex-end;overflow:hidden;position:relative;padding-top:2.25em;margin-bottom:3.5em;img{max-width:600px;}"),b=Object(r.a)("div",{target:"ex6n7341"})({name:"1vn4ady",styles:"max-width:550px;margin:0 auto;text-align:center;"}),j=Object(r.a)("div",{target:"ex6n7342"})({name:"8ykxe0",styles:"max-width:550px;margin:0 auto;.block-img{margin-top:3.5em;margin-bottom:0.5em;img{width:100%;}}"}),h=Object(r.a)(d.Link,{target:"ex6n7343"})({name:"1voh43f",styles:"margin-top:3em;display:block;text-align:center;"}),f=function(t){var e=t.project,n=t.meta;return Object(i.c)(a.a.Fragment,null,Object(i.c)(p.a,{title:e.project_title[0].text+" | Burak Sümer",titleTemplate:"%s | "+n.title,meta:[{name:"description",content:n.description},{property:"og:title",content:e.project_title[0].text+" | Burak Sümer"},{property:"og:description",content:n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter:title",content:n.title},{name:"twitter:description",content:n.description}].concat(n)}),Object(i.c)(m.a,null,Object(i.c)(b,null,u.RichText.render(e.project_title)),e.project_hero_image&&Object(i.c)(g,null,Object(i.c)("img",{src:e.project_hero_image.url,alt:"Burak Sümer"})),Object(i.c)(j,null,u.RichText.render(e.project_description),Object(i.c)(h,{to:"/work"},Object(i.c)(l.a,{className:"Button--secondary"},"Diğer işlerimi gör")))))};e.default=function(t){var e=t.data,n=e.prismic.allProjects.edges[0].node,r=e.site.siteMetadata;return Object(i.c)(f,{project:n,meta:r})};var y={id:"383803344",source:"\n    query ProjectQuery($uid: String) {\n        prismic {\n            allProjects(uid: $uid) {\n                edges {\n                    node {\n                        project_title\n                        project_preview_description\n                        project_preview_thumbnail\n                        project_category\n                        project_post_date\n                        project_hero_image\n                        project_description\n                        _meta {\n                            uid\n                        }\n                    }\n                }\n            }\n        }\n        site {\n            siteMetadata {\n                title\n                description\n                author\n            }\n        }\n    }\n",toString:function(){return this.id}}},331:function(t,e,n){"use strict";n(40),n(7),n(8),n(4),n(12);var r=n(52),i=n(5),o=n(2),a=n(56),c=n(31);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var s=Object(r.a)("button",{target:"e1fjr65g0"})("padding:1em 2em;background:",a.a.blue400,";font-weight:600;color:white;outline:none;border:none;font-size:1rem;border-radius:2px;position:relative;transition:background 100ms ease-in-out;@media(max-width:",c.a.maxwidthMobile,'px){padding:0.8em 1.8em;font-size:1em;}p{margin:0;}&:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(135deg,',a.a.pink400," 0%,",a.a.purple400," 100%);z-index:-1;}&:hover{cursor:pointer;background:transparent;transition:background 100ms ease-in-out;}&.Button--secondary{background:",a.a.blue200,";color:",a.a.blue600,";padding:0.95em 1.8em;font-size:0.95rem;&:hover{background:",a.a.blue300,";transition:background 100ms ease-in-out;}}"),d=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=(t.children,function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["children"]));return Object(i.c)(s,p({onClick:this.props.onClick},e),this.props.children)},r}(o.Component);e.a=d}}]);
//# sourceMappingURL=component---src-templates-project-jsx-44b467678b1ebe551b1e.js.map