import{r as p,a as C,o as a,c as i,b as o,w as g,d as _,e as h,f as m,g as I,h as T,t as f,n as z,i as x,T as K,F as E,j as M,k as U,v as V,l as F,m as A,u as W,p as Y,q as G,s as Q,x as X,y as Z,z as ee}from"./vendor.c1165ff5.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};te();var d=(t,e)=>{const n=t.__vccOpts||t;for(const[l,r]of e)n[l]=r;return n};const oe={},ne={class:"main-header flex items-center justify-between"},re={class:"logo uppercase"},se=m("Cars"),ce=[se],le={class:"flex gap-1"},ae=m("Home"),ie=m("Car"),ue=m("About");function de(t,e){const n=p("router-link"),l=C("rainbow");return a(),i("header",ne,[o("div",re,[g((a(),i("h2",null,ce)),[[l]])]),o("nav",le,[_(n,{class:"link",to:"/"},{default:h(()=>[ae]),_:1}),_(n,{class:"link",to:"/car"},{default:h(()=>[ie]),_:1}),_(n,{class:"link",to:"/about"},{default:h(()=>[ue]),_:1})])])}var _e=d(oe,[["render",de]]);const me={name:"app",created(){this.$store.dispatch({type:"loadCars"})},methods:{clicked(){alert("I got clicked!")}},components:{appHeader:_e}},pe={class:"app-container container"};function fe(t,e,n,l,r,s){const c=p("app-header"),u=p("router-view");return a(),i("section",pe,[_(c),_(u)])}var he=d(me,[["render",fe]]);const ve={},ge={class:"custom-card flex flex-col gap-1 items-center"};function be(t,e){return a(),i("article",ge,[o("header",null,[I(t.$slots,"header",{},void 0,!0)]),o("main",null,[I(t.$slots,"default",{},void 0,!0)]),o("footer",null,[I(t.$slots,"footer",{},void 0,!0)])])}var R=d(ve,[["render",be],["__scopeId","data-v-24d2a57c"]]);const ye={props:{msg:String,type:String},data(){return{isOpen:!1}}},$e={class:"root"},Ce={key:0,class:"modal flex items-center justify-center"};function xe(t,e,n,l,r,s){return a(),i("div",$e,[o("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=c=>r.isOpen=!0)},"Open"),(a(),T(K,{to:"body"},[r.isOpen?(a(),i("div",Ce,[o("div",{class:z(["flex flex-col items-center justify-center gap-1",n.type])},[o("h2",null,f(n.msg),1),o("button",{class:"btn btn-secondary-text",onClick:e[1]||(e[1]=c=>r.isOpen=!1)},"Close")],2)])):x("",!0)]))])}var ke=d(ye,[["render",xe],["__scopeId","data-v-5609dbea"]]);const Se={name:"home",components:{customCard:R,notificationHandler:ke}},we={class:"py-4 flex flex-col gap-2"},Ve=o("h1",null,"Home page",-1),Te=o("h1",null,"Teleport Component",-1),Be=o("h1",null,"This is my custom header title",-1),qe=o("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum, velit doloribus perspiciatis odit autem numquam harum quaerat impedit reprehenderit excepturi amet? Consequatur non facere rem quos quasi autem impedit? ",-1),Ie=o("h1",null,"This is the footer",-1),Ee=o("h1",null,"This is another header",-1),De=o("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum, velit doloribus perspiciatis odit autem numquam harum quaerat impedit reprehenderit excepturi amet? Consequatur non facere rem quos quasi autem impedit? ",-1),Oe=o("h1",null,"coffeeRights \xA9 2022",-1);function Fe(t,e,n,l,r,s){const c=p("notification-handler"),u=p("custom-card");return a(),i("section",we,[Ve,Te,_(c,{msg:"it worked!",type:"success"}),_(u,null,{header:h(()=>[Be]),footer:h(()=>[Ie]),default:h(()=>[qe]),_:1}),_(u,null,{header:h(()=>[Ee]),footer:h(()=>[Oe]),default:h(()=>[De]),_:1})])}var Ae=d(Se,[["render",Fe]]);const Ne={name:"fancy-text",props:{txt:{type:String,required:!0,default:"This is a really fancy text",validator(t){return t.length>5}},num:{type:[String,Number],required:!0,default:8,validator(t){return[8,1,2,3,"4","5"].includes(t)}},testTxt:String}},Le={key:0};function Me(t,e,n,l,r,s){const c=C("rainbow");return n.num&&n.txt?(a(),i("section",Le,[g((a(),i("h1",null,[m(f(n.txt),1)])),[[c]]),g((a(),i("h2",null,[m(f(n.num),1)])),[[c]])])):x("",!0)}var Ue=d(Ne,[["render",Me]]);const Re={name:"color-picker",props:{},data(){return{colors:["#f87171","#fbbf24","#34d399","#a1a1aa","#f472b6","#a78bfa","#818cf8","#60a5fa","#2dd4bf"]}},methods:{changeColor(t){this.$emit("update:modelValue",t)}}},He={class:"color-picker"},Pe=["onClick"];function je(t,e,n,l,r,s){return a(),i("div",He,[(a(!0),i(E,null,M(r.colors,c=>(a(),i("div",{key:c},[o("div",{onClick:u=>s.changeColor(c),class:"color-item",style:U({backgroundColor:c})},null,12,Pe)]))),128))])}var Je=d(Re,[["render",je],["__scopeId","data-v-6fb36dd6"]]);const ze={props:["modelValue"],methods:{changeSection(t){this.$emit("update:modelValue",t)}}},Ke={class:"dropdown-nav"},We=o("h2",null,"Drop Down Menu",-1),Ye=o("input",{class:"dropdown-input",id:"toggle",type:"checkbox",checked:""},null,-1),Ge=["value"],Qe=["value"],Xe=["value"],Ze=["value"];function et(t,e,n,l,r,s){return a(),i("nav",Ke,[We,Ye,o("ul",null,[o("li",null,[o("a",{value:n.modelValue,onClick:e[0]||(e[0]=c=>s.changeSection("Section 01"))}," Section 01 ",8,Ge)]),o("li",null,[o("a",{value:n.modelValue,onClick:e[1]||(e[1]=c=>s.changeSection("Section 02"))}," Section 02 ",8,Qe)]),o("li",null,[o("a",{value:n.modelValue,onClick:e[2]||(e[2]=c=>s.changeSection("Section 03"))}," Section 03 ",8,Xe)]),o("li",null,[o("a",{value:n.modelValue,onClick:e[3]||(e[3]=c=>s.changeSection("Section 04"))}," Section 04 ",8,Ze)])])])}var tt=d(ze,[["render",et]]);const ot={props:{modelValue:Boolean},methods:{toggleBtn(){this.$emit("update:modelValue",!this.modelValue)}}},nt={class:"switch"},rt=["checked"],st=o("div",null,null,-1),ct=o("span",{class:"fw-bold"},"modelValue",-1);function lt(t,e,n,l,r,s){return a(),i(E,null,[o("label",nt,[o("input",{type:"checkbox",checked:n.modelValue,onChange:e[0]||(e[0]=(...c)=>s.toggleBtn&&s.toggleBtn(...c))},null,40,rt),st]),o("div",null,[ct,m(" "+f(n.modelValue),1)])],64)}var at=d(ot,[["render",lt]]);const it={name:"hello-world",props:{msg:String,num:Number},data(){return{count:0}}};function ut(t,e,n,l,r,s){return a(),i("section",null,[o("h3",null,f(n.msg),1),o("button",{onClick:e[0]||(e[0]=c=>r.count++),class:"btn btn-secondary fw-bold"},"Count is: "+f(r.count),1)])}var dt=d(it,[["render",ut]]);const _t={},mt=o("h1",null,"Component A",-1),pt=[mt];function ft(t,e){return a(),i("div",null,pt)}var ht=d(_t,[["render",ft]]);const vt={},gt=o("h1",null,"Component B",-1),bt=[gt];function yt(t,e){return a(),i("div",null,bt)}var $t=d(vt,[["render",yt]]);const D={name:"about",data(){return{query:"Regular v-model",color:"",section:null,isOn:!1,isShow:!1,activeComponent:"cmp-a",fn:console.log,msg:"console.log"}},methods:{clicked(){alert("I got clicked!")},onChange(t){console.log("Look ma! I use custom input"),console.log("ev.target.value :>> ",t.target.value)}},components:{fancyText:Ue,colorPicker:Je,customDropdown:tt,toggleBtn:at,helloWorld:dt,cmpA:ht,cmpB:$t}},N=()=>{W(t=>({"2cbfe240":t.color}))},L=D.setup;D.setup=L?(t,e)=>(N(),L(t,e)):N;const Ct=D,xt={class:"py-4 flex flex-col gap-2"},kt=o("hr",null,null,-1),St=o("h1",{class:"v-model-title"},"v-model on components",-1),wt={class:"flex items-center justify-between gap-1"},Vt={class:"flex flex-col text-center gap-1"},Tt={class:"flex-flex-col text-center"},Bt=o("hr",null,null,-1),qt=o("h1",null,"custom-on directive",-1),It={class:"btn btn-primary"},Et=m("click me!"),Dt=[Et],Ot=o("h2",null,"Dynamic function",-1),Ft={type:"text",class:"form-input"},At=o("hr",null,null,-1),Nt=o("h1",null,"For Vitest",-1),Lt=o("hr",null,null,-1),Mt=o("h1",null,"Animation",-1),Ut={key:0},Rt=o("h1",null,"Animation between components",-1),Ht=m(" A "),Pt=m(" B ");function jt(t,e,n,l,r,s){const c=p("fancy-text"),u=p("color-picker"),q=p("custom-dropdown"),H=p("toggle-btn"),P=p("hello-world"),j=C("focus"),J=C("rainbow"),O=C("custom-on");return a(),i("div",xt,[_(c,{txt:"Lets try this text!",num:"4",testTxt:"hello"}),g(o("input",{"onUpdate:modelValue":e[0]||(e[0]=v=>r.query=v),class:"form-input",type:"text",placeholder:"Search anything..."},null,512),[[j],[J],[V,r.query]]),o("pre",null,"      "+f(r.query)+`\r
    `,1),kt,St,o("div",wt,[o("div",Vt,[_(u,{modelValue:r.color,"onUpdate:modelValue":e[1]||(e[1]=v=>r.color=v)},null,8,["modelValue"]),o("div",{style:U({backgroundColor:r.color}),class:"fw-bold"},"Hello",4)]),o("div",Tt,[_(q,{modelValue:r.section,"onUpdate:modelValue":e[2]||(e[2]=v=>r.section=v)},null,8,["modelValue"]),o("p",null,"Selected Section: "+f(r.section),1)])]),_(H,{modelValue:r.isOn,"onUpdate:modelValue":e[3]||(e[3]=v=>r.isOn=v)},null,8,["modelValue"]),Bt,qt,g((a(),i("button",It,Dt)),[[O,s.clicked,"click"]]),Ot,g(o("input",Ft,null,512),[[O,s.onChange,"change"]]),At,Nt,_(P,{msg:"hello world"}),Lt,Mt,o("button",{class:"btn btn-secondary",onClick:e[4]||(e[4]=v=>r.isShow=!r.isShow)},"Toggle Text"),_(F,{name:"fade"},{default:h(()=>[r.isShow?(a(),i("h1",Ut,"hello")):x("",!0)]),_:1}),Rt,o("label",null,[g(o("input",{type:"radio","onUpdate:modelValue":e[5]||(e[5]=v=>r.activeComponent=v),value:"cmp-a"},null,512),[[A,r.activeComponent]]),Ht]),o("label",null,[g(o("input",{type:"radio","onUpdate:modelValue":e[6]||(e[6]=v=>r.activeComponent=v),value:"cmp-b"},null,512),[[A,r.activeComponent]]),Pt]),_(F,{name:"fade",mode:"out-in"},{default:h(()=>[(a(),T(Y(r.activeComponent)))]),_:1})])}var Jt=d(Ct,[["render",jt]]);const w={query:k,get:zt,post:Kt,put:Yt,remove:Gt,postMany:Wt};function k(t){var e=JSON.parse(localStorage.getItem(t))||[];return Promise.resolve(e)}function zt(t,e){return k(t).then(n=>n.find(l=>l.id===e))}function Kt(t,e){return e.id=Qt(),k(t).then(n=>(n.push(e),B(t,n),e))}function Wt(t,e){return k(t).then(n=>(n.push(...e),B(t,n),n))}function Yt(t,e){return k(t).then(n=>{const l=n.findIndex(r=>r.id===e.id);return n.splice(l,1,e),B(t,n),e})}function Gt(t,e){return k(t).then(n=>{const l=n.findIndex(r=>r.id===e);n.splice(l,1),B(t,n)})}function B(t,e){localStorage.setItem(t,JSON.stringify(e))}function Qt(t=8){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=0;l<t;l++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}const S={saveToStorage:Xt,loadFromStorage:Zt,makeId:eo};function Xt(t,e){localStorage.setItem(t,JSON.stringify(e)||null)}function Zt(t){let e=localStorage.getItem(t);return e?JSON.parse(e):void 0}function eo(t=8){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=0;l<t;l++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}const y="cars_db";co();const b={query:to,getById:oo,remove:no,save:ro,getEmptyCar:so};function to(){return w.query(y)}function oo(t){return w.get(y,t)}function no(t){return w.remove(y,t)}function ro(t){return t.id?w.put(y,t):w.post(y,t)}function so(){return{vendor:"",speed:0,price:0}}function co(){let t=S.loadFromStorage(y);return(!t||!t.length)&&(t=[{id:S.makeId(),vendor:"Fiat",speed:30,price:980},{id:S.makeId(),vendor:"Honda",speed:87,price:500},{id:S.makeId(),vendor:"Toyota",speed:54,price:305}],S.saveToStorage(y,t)),t}const lo={name:"car-filter",data(){return{filterBy:{vendor:""}}},methods:{setFilter(){this.$emit("setFilter",this.filterBy)}}},ao={class:"car-filter"};function io(t,e,n,l,r,s){const c=C("focus");return a(),i("section",ao,[g(o("input",{"onUpdate:modelValue":e[0]||(e[0]=u=>r.filterBy.vendor=u),onInput:e[1]||(e[1]=(...u)=>s.setFilter&&s.setFilter(...u)),type:"text",class:"form-input",placeholder:"Search vendor..."},null,544),[[c],[V,r.filterBy.vendor]])])}var uo=d(lo,[["render",io]]);const _o={name:"car-preview",props:{car:Object},components:{customCard:R},methods:{goToDetail(){this.$router.push(`/car/${this.car.id}`)},goToEdit(){this.$router.push(`/car/edit/${this.car.id}`)},removeCar(t){this.$emit("removeCar",t)}}},mo={class:"car-preview"},po=o("span",{class:"fw-bold"},"Vendor:",-1),fo=o("span",{class:"fw-bold"},"Speed:",-1),ho=o("span",{class:"fw-bold"},"Price:",-1),vo={class:"btn-group"};function go(t,e,n,l,r,s){const c=p("custom-card");return a(),i("li",mo,[_(c,null,{header:h(()=>[o("p",null,[po,m(" "+f(n.car.vendor),1)]),o("p",null,[fo,m(" "+f(n.car.speed),1)]),o("p",null,[ho,m(" "+f(t.$filters.currencyUSD(n.car.price)),1)])]),footer:h(()=>[o("div",vo,[o("button",{onClick:e[0]||(e[0]=(...u)=>s.goToEdit&&s.goToEdit(...u)),class:"btn btn-primary"},"edit"),o("button",{onClick:e[1]||(e[1]=(...u)=>s.goToDetail&&s.goToDetail(...u)),class:"btn btn-info"},"details"),o("button",{onClick:e[2]||(e[2]=u=>s.removeCar(n.car.id)),class:"btn btn-danger"},"delete")])]),_:1})])}var bo=d(_o,[["render",go]]);const yo={props:{cars:{type:Array,required:!0}},components:{carPreview:bo},methods:{removeCar(t){this.$emit("removeCar",t)}}},$o={class:"car-list clean-list grid gap-1"};function Co(t,e,n,l,r,s){const c=p("car-preview");return a(),i("ul",$o,[(a(!0),i(E,null,M(n.cars,u=>(a(),T(c,{onRemoveCar:s.removeCar,car:u,key:u.id},null,8,["onRemoveCar","car"]))),128))])}var xo=d(yo,[["render",Co]]);const ko={name:"car-app",data(){return{filterBy:null}},computed:{cars(){return this.$store.getters.cars},carsToShow(){if(!this.filterBy)return this.cars;const t=new RegExp(this.filterBy.vendor,"i");return this.cars.filter(e=>t.test(e.vendor))}},created(){},methods:{loadCars(){b.query().then(t=>this.cars=t)},setFilter(t){this.filterBy=t},goToEdit(){this.$router.push("/car/edit")},removeCar(t){this.$store.dispatch({type:"removeCar",id:t})}},components:{carList:xo,carFilter:uo}},So={class:"car-app container flex flex-col gap-1"};function wo(t,e,n,l,r,s){const c=p("car-filter"),u=p("car-list");return a(),i("section",So,[o("button",{onClick:e[0]||(e[0]=(...q)=>s.goToEdit&&s.goToEdit(...q)),class:"btn btn-secondary"},"Add a new car"),_(c,{onSetFilter:s.setFilter},null,8,["onSetFilter"]),s.cars?(a(),T(u,{key:0,onRemoveCar:s.removeCar,cars:s.carsToShow},null,8,["onRemoveCar","cars"])):x("",!0)])}var Vo=d(ko,[["render",wo]]);const To={name:"car-detail",data(){return{car:null}},created(){const{id:t}=this.$route.params;b.getById(t).then(e=>{this.car=e})},methods:{goBack(){this.$router.push("/car")}}},Bo={key:0,class:"car-details flex flex-col items-center gap-2"},qo=o("span",{class:"fw-bold"},"ID:",-1),Io=o("span",{class:"fw-bold"},"Vendor:",-1),Eo=o("span",{class:"fw-bold"},"Speed:",-1);function Do(t,e,n,l,r,s){return r.car?(a(),i("section",Bo,[o("article",null,[o("p",null,[qo,m(" "+f(r.car.id),1)]),o("p",null,[Io,m(" "+f(r.car.vendor),1)]),o("p",null,[Eo,m(" "+f(r.car.speed),1)])]),o("button",{onClick:e[0]||(e[0]=(...c)=>s.goBack&&s.goBack(...c)),class:"btn btn-primary"},"go back")])):x("",!0)}var Oo=d(To,[["render",Do]]);const Fo={name:"car-edit",data(){return{carToEdit:null}},created(){const{id:t}=this.$route.params;t?b.getById(t).then(e=>{this.carToEdit=e}):this.carToEdit=b.getEmptyCar()},methods:{goBack(){this.$router.push("/car")},saveCar(){this.$store.dispatch({type:"saveCar",car:this.carToEdit}).then(()=>{this.$router.push("/car")})}}},Ao={key:0,class:"car-edit py-2"},No={class:"form-control"},Lo=o("label",{for:"txt",class:"form-label"},"Car Vendor",-1),Mo={class:"form-control"},Uo=o("label",{for:"speed",class:"form-label"},"Car Speed",-1),Ro={class:"btn-group"};function Ho(t,e,n,l,r,s){return r.carToEdit?(a(),i("section",Ao,[o("form",{onSubmit:e[4]||(e[4]=G((...c)=>s.saveCar&&s.saveCar(...c),["prevent"])),class:"form"},[o("div",No,[Lo,g(o("input",{required:"","onUpdate:modelValue":e[0]||(e[0]=c=>r.carToEdit.vendor=c),id:"txt",type:"text",class:"form-input",placeholder:"Enter your car vendor here..."},null,512),[[V,r.carToEdit.vendor]])]),o("div",Mo,[Uo,g(o("input",{required:"","onUpdate:modelValue":e[1]||(e[1]=c=>r.carToEdit.speed=c),id:"speed",type:"number",class:"form-input"},null,512),[[V,r.carToEdit.speed,void 0,{number:!0}]])]),o("div",Ro,[o("button",{onClick:e[2]||(e[2]=(...c)=>s.saveCar&&s.saveCar(...c)),class:"btn btn-info"},"save"),o("button",{onClick:e[3]||(e[3]=(...c)=>s.goBack&&s.goBack(...c)),class:"btn btn-danger-text"},"go back")])],32)])):x("",!0)}var Po=d(Fo,[["render",Ho]]);const jo=Q({history:X(),linkActiveClass:"active",routes:[{path:"/",name:"home",component:Ae},{path:"/car",name:"car-app",component:Vo},{path:"/car/:id",name:"car-details",component:Oo},{path:"/car/edit/:id?",name:"car-edit",component:Po},{path:"/about",name:"about",component:Jt}]});var Jo={state:{cars:null},getters:{cars(t){return t.cars}},mutations:{setCars(t,{cars:e}){t.cars=e},removeCar(t,{id:e}){const n=t.cars.findIndex(l=>l.id===e);t.cars.splice(n,1)},saveCar(t,{car:e}){const n=t.cars.findIndex(l=>l.id===e.id);n!==-1?t.cars.splice(n,1,e):t.cars.push(e)}},actions:{loadCars({commit:t}){b.query().then(e=>{t({type:"setCars",cars:e})})},removeCar({commit:t},{id:e}){b.remove(e).then(()=>{t({type:"removeCar",id:e})})},saveCar({commit:t},{car:e}){b.save(e).then(n=>{t({type:"saveCar",car:n})})}}};const zo=Z({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{carStore:Jo}}),Ko={mounted:t=>{t.focus()}},Wo={mounted(t){t.onkeyup=()=>{const e=Qo();t.style.backgroundColor=e,t.style.color=Go(e)?"white":"black"}}},Yo={mounted(t,e){const n=e.arg,l=e.value;t.addEventListener(n,l)}};function Go(t){t=t.substring(1);const e=parseInt(t,16),n=e>>16&255,l=e>>8&255,r=e>>0&255;var s=.2126*n+.7152*l+.0722*r;return s<100}function Qo(){const t="0123456789ABCDEF";let e="#";for(let n=0;n<6;n++)e+=t[Math.floor(Math.random()*16)];return e}const $=ee(he);$.config.globalProperties.$filters={currencyUSD(t){return"$"+t}};$.directive("rainbow",Wo);$.directive("focus",Ko);$.directive("custom-on",Yo);$.use(jo);$.use(zo);$.mount("#app");