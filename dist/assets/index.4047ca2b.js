const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ae();var M,f,I,S,U,W,A={},j=[],ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function q(t){var e=t.parentNode;e&&e.removeChild(t)}function K(t,e,n){var r,i,o,_={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:_[o]=e[o];if(arguments.length>2&&(_.children=arguments.length>3?M.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)_[o]===void 0&&(_[o]=t.defaultProps[o]);return H(t,_,r,i,null)}function H(t,e,n,r,i){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++I:i};return f.vnode!=null&&f.vnode(o),o}function L(t){return t.children}function E(t,e){this.props=t,this.context=e}function w(t,e){if(e==null)return t.__?w(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?w(t):null}function B(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return B(t)}}function R(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!N.__r++||W!==f.debounceRendering)&&((W=f.debounceRendering)||U)(N)}function N(){for(var t;N.__r=S.length;)t=S.sort(function(e,n){return e.__v.__b-n.__v.__b}),S=[],t.some(function(e){var n,r,i,o,_,c;e.__d&&(_=(o=(n=e).__v).__e,(c=n.__P)&&(r=[],(i=k({},o)).__v=o.__v+1,$(c,o,i,n.__n,c.ownerSVGElement!==void 0,o.__h!=null?[_]:null,r,_==null?w(o):_,o.__h),Y(r,o),o.__e!=_&&B(o)))})}function V(t,e,n,r,i,o,_,c,u,p){var l,y,a,s,d,b,v,m=r&&r.__k||j,g=m.length;for(n.__k=[],l=0;l<e.length;l++)if((s=n.__k[l]=(s=e[l])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?H(null,s,null,null,s):Array.isArray(s)?H(L,{children:s},null,null,null):s.__b>0?H(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(a=m[l])===null||a&&s.key==a.key&&s.type===a.type)m[l]=void 0;else for(y=0;y<g;y++){if((a=m[y])&&s.key==a.key&&s.type===a.type){m[y]=void 0;break}a=null}$(t,s,a=a||A,i,o,_,c,u,p),d=s.__e,(y=s.ref)&&a.ref!=y&&(v||(v=[]),a.ref&&v.push(a.ref,null,s),v.push(y,s.__c||d,s)),d!=null?(b==null&&(b=d),typeof s.type=="function"&&s.__k!=null&&s.__k===a.__k?s.__d=u=G(s,u,t):u=J(t,s,a,m,d,u),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=u):t.value=""):u&&a.__e==u&&u.parentNode!=t&&(u=w(a))}for(n.__e=b,l=g;l--;)m[l]!=null&&(typeof n.type=="function"&&m[l].__e!=null&&m[l].__e==n.__d&&(n.__d=w(r,l+1)),ee(m[l],m[l]));if(v)for(l=0;l<v.length;l++)Z(v[l],v[++l],v[++l])}function G(t,e,n){var r,i;for(r=0;r<t.__k.length;r++)(i=t.__k[r])&&(i.__=t,e=typeof i.type=="function"?G(i,e,n):J(n,i,i,t.__k,i.__e,e));return e}function J(t,e,n,r,i,o){var _,c,u;if(e.__d!==void 0)_=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),_=null;else{for(c=o,u=0;(c=c.nextSibling)&&u<r.length;u+=2)if(c==i)break e;t.insertBefore(i,o),_=o}return _!==void 0?_:i.nextSibling}function z(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ce.test(e)?n:n+"px"}function T(t,e,n,r,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||z(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||z(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?X:Q,o):t.removeEventListener(e,o?X:Q,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Q(t){this.l[t.type+!1](f.event?f.event(t):t)}function X(t){this.l[t.type+!0](f.event?f.event(t):t)}function $(t,e,n,r,i,o,_,c,u){var p,l,y,a,s,d,b,v,m,g,x,h=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,c=e.__e=n.__e,e.__h=null,o=[c]),(p=f.__b)&&p(e);try{e:if(typeof h=="function"){if(v=e.props,m=(p=h.contextType)&&r[p.__c],g=p?m?m.props.value:p.__:r,n.__c?b=(l=e.__c=n.__c).__=l.__E:("prototype"in h&&h.prototype.render?e.__c=l=new h(v,g):(e.__c=l=new E(v,g),l.constructor=h,l.render=de),m&&m.sub(l),l.props=v,l.state||(l.state={}),l.context=g,l.__n=r,y=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),h.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=k({},l.__s)),k(l.__s,h.getDerivedStateFromProps(v,l.__s))),a=l.props,s=l.state,y)h.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(h.getDerivedStateFromProps==null&&v!==a&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,g),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,g)===!1||e.__v===n.__v){l.props=v,l.state=l.__s,e.__v!==n.__v&&(l.__d=!1),l.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(P){P&&(P.__=e)}),l.__h.length&&_.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,g),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(a,s,d)})}l.context=g,l.props=v,l.state=l.__s,(p=f.__r)&&p(e),l.__d=!1,l.__v=e,l.__P=t,p=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(r=k(k({},r),l.getChildContext())),y||l.getSnapshotBeforeUpdate==null||(d=l.getSnapshotBeforeUpdate(a,s)),x=p!=null&&p.type===L&&p.key==null?p.props.children:p,V(t,Array.isArray(x)?x:[x],e,n,r,i,o,_,c,u),l.base=e.__e,e.__h=null,l.__h.length&&_.push(l),b&&(l.__E=l.__=null),l.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=fe(n.__e,e,n,r,i,o,_,u);(p=f.diffed)&&p(e)}catch(P){e.__v=null,(u||o!=null)&&(e.__e=c,e.__h=!!u,o[o.indexOf(c)]=null),f.__e(P,e,n)}}function Y(t,e){f.__c&&f.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){f.__e(r,n.__v)}})}function fe(t,e,n,r,i,o,_,c){var u,p,l,y=n.props,a=e.props,s=e.type,d=0;if(s==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((u=o[d])&&(u===t||(s?u.localName==s:u.nodeType==3))){t=u,o[d]=null;break}}if(t==null){if(s===null)return document.createTextNode(a);t=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,a.is&&a),o=null,c=!1}if(s===null)y===a||c&&t.data===a||(t.data=a);else{if(o=o&&M.call(t.childNodes),p=(y=n.props||A).dangerouslySetInnerHTML,l=a.dangerouslySetInnerHTML,!c){if(o!=null)for(y={},d=0;d<t.attributes.length;d++)y[t.attributes[d].name]=t.attributes[d].value;(l||p)&&(l&&(p&&l.__html==p.__html||l.__html===t.innerHTML)||(t.innerHTML=l&&l.__html||""))}if(function(b,v,m,g,x){var h;for(h in m)h==="children"||h==="key"||h in v||T(b,h,null,m[h],g);for(h in v)x&&typeof v[h]!="function"||h==="children"||h==="key"||h==="value"||h==="checked"||m[h]===v[h]||T(b,h,v[h],m[h],g)}(t,a,y,i,c),l)e.__k=[];else if(d=e.props.children,V(t,Array.isArray(d)?d:[d],e,n,r,i&&s!=="foreignObject",o,_,o?o[0]:n.__k&&w(n,0),c),o!=null)for(d=o.length;d--;)o[d]!=null&&q(o[d]);c||("value"in a&&(d=a.value)!==void 0&&(d!==t.value||s==="progress"&&!d)&&T(t,"value",d,y.value,!1),"checked"in a&&(d=a.checked)!==void 0&&d!==t.checked&&T(t,"checked",d,y.checked,!1))}return t}function Z(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){f.__e(r,n)}}function ee(t,e,n){var r,i;if(f.unmount&&f.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Z(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&ee(r[i],e,typeof t.type!="function");n||t.__e==null||q(t.__e),t.__e=t.__d=void 0}function de(t,e,n){return this.constructor(t,n)}function pe(t,e,n){var r,i,o;f.__&&f.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],$(e,t=(!r&&n||e).__k=K(L,null,[t]),i||A,A,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?M.call(e.childNodes):null,o,!r&&n?n:i?i.__e:e.firstChild,r),Y(o,t)}M=j.slice,f={__e:function(t,e){for(var n,r,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),i=n.__d),i)return n.__E=n}catch(o){t=o}throw t}},I=0,E.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},n),this.props)),t&&k(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),R(this))},E.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),R(this))},E.prototype.render=L,S=[],U=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N.__r=0;var te,F=[],ne=f.__b,oe=f.__r,re=f.diffed,le=f.__c,ie=f.unmount;function he(){F.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(D),t.__H.__h.forEach(O),t.__H.__h=[]}catch(e){t.__H.__h=[],f.__e(e,t.__v)}}),F=[]}f.__b=function(t){ne&&ne(t)},f.__r=function(t){oe&&oe(t);var e=t.__c.__H;e&&(e.__h.forEach(D),e.__h.forEach(O),e.__h=[])},f.diffed=function(t){re&&re(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(F.push(e)!==1&&te===f.requestAnimationFrame||((te=f.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),_e&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);_e&&(r=requestAnimationFrame(i))})(he))},f.__c=function(t,e){e.some(function(n){try{n.__h.forEach(D),n.__h=n.__h.filter(function(r){return!r.__||O(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],f.__e(r,n.__v)}}),le&&le(t,e)},f.unmount=function(t){ie&&ie(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(D)}catch(n){f.__e(n,e.__v)}};var _e=typeof requestAnimationFrame=="function";function D(t){typeof t.__c=="function"&&t.__c()}function O(t){t.__c=t.__()}var se=function(t,e,n,r){var i;e[0]=0;for(var o=1;o<e.length;o++){var _=e[o++],c=e[o]?(e[0]|=_?1:2,n[e[o++]]):e[++o];_===3?r[0]=c:_===4?r[1]=Object.assign(r[1]||{},c):_===5?(r[1]=r[1]||{})[e[++o]]=c:_===6?r[1][e[++o]]+=c+"":_?(i=t.apply(c,se(t,c,n,["",null])),r.push(i),c[0]?e[0]|=2:(e[o-2]=0,e[o]=i)):r.push(c)}return r},ue=new Map,C=function(t){var e=ue.get(this);return e||(e=new Map,ue.set(this,e)),(e=se(this,e.get(t)||(e.set(t,e=function(n){for(var r,i,o=1,_="",c="",u=[0],p=function(a){o===1&&(a||(_=_.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,a,_):o===3&&(a||_)?(u.push(3,a,_),o=2):o===2&&_==="..."&&a?u.push(4,a,0):o===2&&_&&!a?u.push(5,0,!0,_):o>=5&&((_||!a&&o===5)&&(u.push(o,0,_,i),o=6),a&&(u.push(o,a,0,i),o=6)),_=""},l=0;l<n.length;l++){l&&(o===1&&p(),p(l));for(var y=0;y<n[l].length;y++)r=n[l][y],o===1?r==="<"?(p(),u=[u],o=3):_+=r:o===4?_==="--"&&r===">"?(o=1,_=""):_=r+_[0]:c?r===c?c="":_+=r:r==='"'||r==="'"?c=r:r===">"?(p(),o=1):o&&(r==="="?(o=5,i=_,_=""):r==="/"&&(o<5||n[l][y+1]===">")?(p(),o===3&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(p(),o=2):_+=r),o===3&&_==="!--"&&(o=4,u=u[0])}return p(),u}(t)),e),arguments,[])).length>1?e:e[0]}.bind(K);(()=>{globalThis.di=new Proxy(Array.from(document.querySelectorAll('[type="application/ld+json"], [type="application/json"]')).map(t=>[t.id,JSON.parse(t.text)]).reduce((t,e)=>(t[e[0]]=e[1],t),{}),{set:(t,e,n)=>{t[e]=n;var r=document.getElementById(e);return r.text=JSON.stringify(n,null,2),!0}})})();function ve(t){return C`

  <!-- component -->
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  </head>
  <!-- Tailwind CSS better navbar -->
  <nav class="flex justify-between items-center bg-blue-600 h-16 shadow-lg">
    <div class="logo">
      <h1 class="ml-5 cursor-pointer text-white font-bold">${t.title}</h1>
    </div>
    <ul>
      <li>
        <a class="mr-6 bg-gray-500 p-3 pl-5 pr-5 rounded transition-all hover:bg-gray-600 text-white" href=""><i class="fas fa-home"></i> Home</a>
      </li>
    </ul>
  </nav>
  
`}function ye(t,e){const n=document.getElementById(t),r={attributes:!0,childList:!0,subtree:!0,characterData:!0},i=function(_,c){for(let u of _)console.log("mutation",u),(u.type==="characterData"||u.type==="childList")&&e()};new MutationObserver(i).observe(n,r)}var me="nos2x";console.log(di.data);class ge extends E{constructor(e){super(e);this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.processMutation=this.processMutation.bind(this)}async login(){var n;console.log("login");let e=await((n=window==null?void 0:window.nostr)==null?void 0:n.getPublicKey());navigator.userAgent.indexOf("Firefox")>0&&(e=e.split(/(..)/g).filter(r=>r).map(r=>String.fromCharCode(parseInt(r,16))).join("")),di.data.publicKey=e,di.data.publicKey&&(di.data.loggedIn=!0),di.data=di.data}async logout(){console.log("logout"),di.data.publicKey=null,di.data.loggedIn=!1,di.data=di.data}async componentDidMount(){console.log("handle mutations"),ye("data",this.processMutation)}processMutation(){console.log("process mutation!"),this.setState({mutation:!0})}render(){return C`
    <${ve} title="${me}" />

    <div class="bg-gray-100">
      <div class=" px-10 text-green-600 py-3">
      ${di.data.loggedIn?C`<a onClick=${this.logout}>Logout</a>`:C`<a onClick=${this.login}>Login with nos2x</a>`}
      
      <div>${di.data.publicKey}</div>
      </div>
    </div>`}}console.log(di.data);pe(C`<${ge} />`,document.body);
