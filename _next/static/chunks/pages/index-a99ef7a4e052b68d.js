(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7966)}])},7966:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return S}});var l,i,n=a(85893);let r=(e,s,a)=>e&&""!==e?"".concat(e.substr(0,s),"...").concat(e.substr(e.length-a,e.length)):"";var c=a(67294),t=a(93513),d=a(31993),o=a(782),m=a(27484),h=a.n(m);(l=i||(i={}))[l.NetworkWarning=0]="NetworkWarning",l[l.WalletSelector=1]="WalletSelector",l[l.NFTBuy=2]="NFTBuy",l[l.NFTListing=3]="NFTListing";let x=(e,s)=>({modalType:void 0,openModal:async s=>{e({modalType:s})},openNFTModal:async(s,a)=>{e({modalType:a,NFTProduct:s})},openMarketNFTModal:async(s,a)=>{e({modalType:a,NFTMarket:s})},closeModal:()=>{e({modalType:void 0})},setRandomRefresh:()=>{e({randomRefresh:h()().unix()})}});(0,t.MD)();let g=(0,d.U)()((0,o.XR)((0,o.mW)(function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return{...x(...s)}})));"undefined"!=typeof document&&(document.onreadystatechange=function(){document.readyState});var j=a(92345),p=a(59598),v=a(9134);function u(e,s){e?v.Am.success(s,{autoClose:5e3,position:"top-right",theme:"dark",closeOnClick:!0,style:{borderRadius:"6px"}}):v.Am.error("".concat(s),{autoClose:2500,position:"top-right",theme:"dark",closeOnClick:!0,style:{borderRadius:"6px"}})}let f=()=>{let{connectors:e,connect:s}=(0,p.$)(),a=["metaMaskSDK","coinbaseWalletSDK","walletConnect","com.okex.wallet","com.bitget.web3","app.phantom","com.trustwallet.app","injected"],l=e.find(e=>"metaMaskSDK"==e.id),i=e.find(e=>"coinbaseWalletSDK"==e.id),r=e.find(e=>"walletConnect"==e.id),c=e.find(e=>"com.okex.wallet"==e.id),t=e.find(e=>"injected"==e.id),d=e.filter(e=>!1==a.includes(e.id)),{closeModal:o}=g();function m(e){s({connector:e},{onSuccess:()=>void setTimeout(()=>{o()},1e3),onError:()=>void u(!1,"User rejected the request.")})}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{name:"MetaMask",onClick:()=>l?m(l):window.open("https://metamask.io/","_blank"),icon:"/wallets/metamask.svg"},null==l?void 0:l.uid),(0,n.jsx)(b,{name:"Coinbase Wallet",onClick:()=>i?m(i):window.open("https://www.coinbase.com/wallet/downloads","_blank"),icon:"/wallets/coinbase-icon.svg"},null==i?void 0:i.uid),(0,n.jsx)(b,{name:"OKX Wallet",onClick:()=>c?m(c):window.open("https://www.okx.com/download","_blank"),icon:"/wallets/okex.svg"},null==c?void 0:c.uid),(0,n.jsx)(b,{name:"WalletConnect",onClick:()=>r?m(r):window.open("https://walletguide.walletconnect.network/","_blank"),icon:"/wallets/walletconnect-icon.svg"},null==r?void 0:r.uid),d.map(e=>(0,n.jsx)(b,{name:e.name,onClick:()=>m(e),icon:e.icon?e.icon:"/wallets/browser-wallet-dark.svg"},e.uid)),(0,n.jsx)(b,{name:"Browser wallet",onClick:()=>t?m(t):window.open("https://walletguide.walletconnect.network/","_blank"),icon:"/wallets/browser-wallet-dark.svg"},null==t?void 0:t.uid)]})};function b(e){let{name:s,icon:a,onClick:l}=e;return(0,n.jsxs)("button",{className:"wallet-row",onClick:()=>l(),children:[(0,n.jsx)("span",{className:"w-name",children:s}),(0,n.jsx)("img",{className:"w-ico",src:a})]})}let _=()=>{let{modalType:e,closeModal:s}=g();return(0,n.jsxs)(j.Z,{className:"cb-popup",open:e==i.WalletSelector,closeOnDocumentClick:!0,onClose:s,contentStyle:{maxHeight:"70%",overflowY:"auto",width:"92%"},overlayStyle:{zIndex:"88"},children:[(0,n.jsxs)("header",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)("h3",{style:{color:"#ffffff"},children:"Connect a wallet"}),(0,n.jsx)("button",{type:"button",className:"close",onClick:()=>{s()},children:(0,n.jsx)("svg",{width:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",fill:"currentColor"})})})]}),(0,n.jsx)("div",{className:"modal-cb-wrap  margin-t-20 gap-10",style:{display:"flex",flexDirection:"column",gap:"8px"},children:(0,n.jsx)(f,{})}),(0,n.jsx)("div",{className:"margin-t-20",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)("a",{target:"_blank",href:"https://ethereum.org/en/wallets/find-wallet/#main-content",children:"Need another wallet?"})}),(0,n.jsx)("div",{className:"margin-t-20",style:{display:"flex",alignItems:"center",fontWeight:400,fontSize:"11px"},children:"Wallets are provided by External Providers and by selecting you agree to Terms of those Providers. Your access to the wallet might be reliant on the External Provider being operational."})]})};var N=a(20583),w=a(48486),y=a(80687),k=a(47);let I=e=>{let{active:s}=e;(0,k.ac)({query:"(max-width: 1204px)"});let{openModal:a,modalType:l}=g(),{address:t,chainId:d,isConnecting:o}=(0,N.m)(),{disconnect:m}=(0,w.q)(),{data:h}=(0,y.F)({address:t}),[x,j]=(0,c.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"gap-10",style:{display:"flex",alignItems:"center"},children:t?(0,n.jsxs)("a",{className:"btn_primary far",onClick:()=>m(),style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",cursor:"pointer",gap:"10px"},children:[(0,n.jsx)("span",{children:(0,n.jsx)("img",{className:"width-20",src:"/networks/".concat(11155111==d?"ethereum.svg":"base.svg"),style:{marginTop:"2px"}})}),(0,n.jsx)("span",{children:null!=h?h:r(t.toString(),4,4)})]}):(0,n.jsxs)("a",{className:"btn_primary far fa-user",style:{cursor:"pointer",display:"flex",gap:"10px"},onClick:()=>a(i.WalletSelector),children:[" ",o?"Login...":"Login"," "]})}),(0,n.jsx)(_,{})]})};var A=a(9008),C=a.n(A);let T=()=>(0,n.jsxs)(C(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("title",{children:"Wildcraft - A dynamic survival game where AI shapes your world and journey."}),(0,n.jsx)("meta",{name:"description",content:"Wildcraft is an AI-driven survival simulation game where players must navigate a world controlled by AI Agents. The ecosystem includes animals, plants, and minerals, creating a dynamic environment where survival depends on managing hunger, fatigue, thirst, and shelter. Below is the development roadmap outlining key milestones and future expansions."}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/all.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/bootstrap.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/slick.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/utilities_spacing.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/venobox.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/animate.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/responsive.css"})]});function S(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)("nav",{className:"navbar navbar-expand-lg main_menu",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("a",{className:"navbar-brand",href:"index.html",children:(0,n.jsx)("img",{src:"/logo-title.png",alt:"AI Image Generator",className:"img-fluid"})}),(0,n.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,n.jsx)("i",{className:"far fa-bars menu_icon_bar"}),(0,n.jsx)("i",{className:"far fa-times close_icon_close"})]}),(0,n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[(0,n.jsxs)("ul",{className:"navbar-nav m-auto",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{className:"nav-link",target:"_blank",href:"https://game.wildcraft.fun/",children:"Game"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)("a",{className:"nav-link",target:"_blank",href:"https://wildcraftfuns-organization.gitbook.io/wildcraft-docs/solutions",children:["Solutions ",(0,n.jsx)("span",{children:"New"})]})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{className:"nav-link",target:"_blank",href:"https://wildcraftfuns-organization.gitbook.io/wildcraft-docs/terms-of-service",children:"services"})}),(0,n.jsxs)("li",{className:"nav-item",children:[(0,n.jsxs)("a",{className:"nav-link",href:"#",children:["More ",(0,n.jsx)("i",{className:"far fa-angle-down"})]}),(0,n.jsxs)("ul",{className:"droap_menu",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",href:"https://x.com/wildcraft_fun",children:"Twitter"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",href:"https://t.me/wildcraft_game_ai",children:"Telegram"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",href:"https://wildcraftfuns-organization.gitbook.io/",children:"Gitbook"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",href:"https://github.com/orgs/WildCraftAI/repositories",children:"GitHub"})})]})]})]}),(0,n.jsx)("ul",{className:"menu_right d-flex align-items-center",children:(0,n.jsx)("li",{children:(0,n.jsx)(I,{})})})]})]})}),(0,n.jsxs)("section",{className:"banner_area",style:{backgroundImage:"url(/assets/images/banner_bg.jpg)"},children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsxs)("div",{className:"banner_content wow fadeInUp",children:[(0,n.jsxs)("h1",{children:["where ",(0,n.jsx)("span",{children:"AI Agents"})," shapes your world and journey."]}),(0,n.jsxs)("ul",{className:"pt_30 pb_60",children:[(0,n.jsx)("li",{children:"AI-driven"}),(0,n.jsx)("li",{children:"Survival Simulation"}),(0,n.jsx)("li",{children:"Exploration & Interaction"})]}),(0,n.jsx)("div",{className:"banner_btn d-flex justify-content-center pb_120 xs_pb_80",children:(0,n.jsx)("a",{className:"btn_secondary",target:"_blank",href:"https://youtu.be/EJZUTGvy_GQ",children:"Watch Demo"})}),(0,n.jsx)("h2",{children:"Survival in an AI-Driven World"})]})})})}),(0,n.jsxs)("div",{className:"row banner_slider pt_30",children:[(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-1.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-1.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})}),(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-2.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-2.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})}),(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-7.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-7.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})}),(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-4.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-4.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})}),(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-5.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-5.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})}),(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-6.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-6.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})}),(0,n.jsx)("div",{className:"col-xl-3 wow fadeInUp",children:(0,n.jsxs)("a",{className:"venobox banner_slide_item","data-gall":"gallery01",target:"_blank",href:"/assets/images/banner-slide-3.jpg",children:[(0,n.jsx)("img",{src:"/assets/images/banner-slide-3.jpg",alt:"Slider Image",className:"img-fluid w-100"}),(0,n.jsx)("div",{className:"banner_slide_item_overly",children:(0,n.jsx)("i",{className:"far fa-plus"})})]})})]})]}),(0,n.jsx)("section",{className:"service pt_110 pb_115 xs_pb_80 xs_pt_80",style:{backgroundImage:"url(/assets/images/service-bg.jpg)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-8 m-auto wow fadeInUp",children:(0,n.jsx)("div",{className:"sec_title pb_60",children:(0,n.jsx)("h2",{children:"AI-Driven Survival Adventure"})})})}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("div",{className:"service_item",children:[(0,n.jsxs)("div",{className:"service_item_top d-flex justify-content-between align-items-center",children:[(0,n.jsx)("div",{className:"service_icon_box position-relative",children:(0,n.jsx)("div",{className:"service_icon",children:(0,n.jsx)("img",{src:"/assets/images/layer.png",alt:"Image"})})}),(0,n.jsx)("div",{className:"service_number",children:(0,n.jsx)("span",{children:"01"})})]}),(0,n.jsx)("h3",{children:"Dynamic Ecosystem"}),(0,n.jsx)("p",{children:"Immerse yourself in a living, breathing world where AI agents create a constantly evolving environment."})]})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("div",{className:"service_item mt_50 xs_mt_0",children:[(0,n.jsxs)("div",{className:"service_item_top d-flex justify-content-between align-items-center",children:[(0,n.jsx)("div",{className:"service_icon_box position-relative",children:(0,n.jsx)("div",{className:"service_icon",children:(0,n.jsx)("img",{src:"/assets/images/layer_2.png",alt:"Image"})})}),(0,n.jsx)("div",{className:"service_number",children:(0,n.jsx)("span",{children:"02"})})]}),(0,n.jsx)("h3",{children:"Adaptive Survival"}),(0,n.jsx)("p",{children:"Manage hunger, thirst, and fatigue with AI-driven behaviors that respond to your every action."})]})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("div",{className:"service_item",children:[(0,n.jsxs)("div",{className:"service_item_top d-flex justify-content-between align-items-center",children:[(0,n.jsx)("div",{className:"service_icon_box position-relative",children:(0,n.jsx)("div",{className:"service_icon",children:(0,n.jsx)("img",{src:"/assets/images/arrow-border.png",alt:"Image"})})}),(0,n.jsx)("div",{className:"service_number",children:(0,n.jsx)("span",{children:"03"})})]}),(0,n.jsx)("h3",{children:"Collaborative Play"}),(0,n.jsx)("p",{children:"Team up with AI companions for resource gathering, defense, and building, or challenge them in combat."})]})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("div",{className:"service_item mt_50 xs_mt_0",children:[(0,n.jsxs)("div",{className:"service_item_top d-flex justify-content-between align-items-center",children:[(0,n.jsx)("div",{className:"service_icon_box position-relative",children:(0,n.jsx)("div",{className:"service_icon",children:(0,n.jsx)("img",{className:"img-fluid",src:"/assets/images/gallary-img.png",alt:"Image"})})}),(0,n.jsx)("div",{className:"service_number",children:(0,n.jsx)("span",{children:"04"})})]}),(0,n.jsx)("h3",{children:"Endless Exploration"}),(0,n.jsx)("p",{children:"Discover procedurally generated landscapes, animals, and resources, each game offering a new adventure."})]})})]})]})}),(0,n.jsx)("section",{className:"generated_area pt_105 xs_pt_80 pb_140 xs_pb_80",style:{backgroundImage:"url(/assets/images/generated_area_bg.png)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-12 wow fadeInUp",children:(0,n.jsx)("div",{className:"sec_title pb_55 position-relative z-1",children:(0,n.jsx)("h2",{children:"Understanding WildCraft from AI & Game"})})})}),(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-12",children:(0,n.jsx)("div",{className:"generated_content position-relative",children:(0,n.jsxs)("div",{className:"nav flex-column nav-pills",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:[(0,n.jsx)("div",{className:"nav-link",id:"v-pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-home",role:"tab","aria-controls":"v-pills-home","aria-selected":"true",children:(0,n.jsxs)("div",{className:"generated_list_wrapper",children:[(0,n.jsx)("div",{className:"generated_number",children:(0,n.jsx)("span",{children:"01"})}),(0,n.jsxs)("div",{className:"generated_text",children:[(0,n.jsx)("h3",{children:"AI Agent"}),(0,n.jsx)("p",{children:"AI Agent Technologies and Implementation - Wildcraft + AI."})]}),(0,n.jsx)("div",{className:"generated_icon",children:(0,n.jsx)("a",{target:"_blank",href:"https://wildcraftfuns-organization.gitbook.io/wildcraft-docs/content/quickstart",children:(0,n.jsx)("img",{src:"/assets/images/arrow-angle.png",alt:"Image"})})})]})}),(0,n.jsx)("div",{className:"nav-link active",id:"v-pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-profile",role:"tab","aria-controls":"v-pills-profile","aria-selected":"false",children:(0,n.jsxs)("div",{className:"generated_list_wrapper",children:[(0,n.jsx)("div",{className:"generated_number",children:(0,n.jsx)("span",{children:"02"})}),(0,n.jsxs)("div",{className:"generated_text",children:[(0,n.jsx)("h3",{children:"Solutions"}),(0,n.jsx)("p",{children:"Provides a comprehensive framework for developing a dynamic survival game driven by intelligent AI agents. "})]}),(0,n.jsx)("div",{className:"generated_icon",children:(0,n.jsx)("a",{target:"_blank",href:"https://wildcraftfuns-organization.gitbook.io/wildcraft-docs/solutions",children:(0,n.jsx)("img",{src:"/assets/images/arrow-angle.png",alt:"Image"})})})]})}),(0,n.jsx)("div",{className:"nav-link",id:"v-pills-messages-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-messages",role:"tab","aria-controls":"v-pills-messages","aria-selected":"false",children:(0,n.jsxs)("div",{className:"generated_list_wrapper mb_0",children:[(0,n.jsx)("div",{className:"generated_number",children:(0,n.jsx)("span",{children:"03"})}),(0,n.jsxs)("div",{className:"generated_text",children:[(0,n.jsx)("h3",{children:"Terms of Service"}),(0,n.jsx)("p",{children:"You acknowledge that you have read and understood this Services Agreement."})]}),(0,n.jsx)("div",{className:"generated_icon",children:(0,n.jsx)("a",{target:"_blank",href:"https://wildcraftfuns-organization.gitbook.io/wildcraft-docs/terms-of-service",children:(0,n.jsx)("img",{src:"/assets/images/arrow-angle.png",alt:"Image"})})})]})})]})})}),(0,n.jsx)("div",{className:"col-xl-7 col-lg-6 col-md-12",children:(0,n.jsx)("div",{className:"tab-content",id:"v-pills-tabContent",children:(0,n.jsx)("div",{className:"tab-pane fade show active",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab",children:(0,n.jsx)("div",{className:"generated_img position-relative",children:(0,n.jsx)("img",{src:"/assets/images/generated-img.png",alt:"generator",className:"img-fluid w-100"})})})})})]})]})}),(0,n.jsx)("section",{className:"price_area pt_100 pb_140 xs_pb_20 xs_pt_80  position-relative",style:{backgroundImage:"url(/assets/images/veripus_bg.png)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-8 m-auto wow fadeInUp",children:(0,n.jsx)("div",{className:"sec_title pb_50 xs_pb_20",children:(0,n.jsx)("h2",{children:"Tailored Survival Experiences Powered by AI"})})})}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"tab-content mt_40 xs_mt_20",id:"pills-tabContent",children:(0,n.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"various_tab_one",children:(0,n.jsxs)("div",{className:"price_wrapper",children:[(0,n.jsxs)("div",{className:"price_item wow fadeInUp",children:[(0,n.jsx)("h3",{children:"Behavior Trees"}),(0,n.jsx)("p",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{style:{color:"#999EA7"},children:"When an AI agent detects hunger or fatigue, the behavior tree will decide what to do next, such as finding food, resting, or drinking."}),(0,n.jsx)("li",{style:{color:"#999EA7"},children:"The AI can choose different strategies during combat, such as attacking, evading, or setting traps."})]})]}),(0,n.jsxs)("div",{className:"price_item wow fadeInUp",children:[(0,n.jsx)("h3",{children:"Finite State Machines"}),(0,n.jsx)("p",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{style:{color:"#999EA7"},children:'AI agents will shift between different states depending on environmental and internal conditions (e.g., hunger, thirst, fatigue), such as switching from "rest" to "find water."'}),(0,n.jsx)("li",{style:{color:"#999EA7"},children:'Animal AI switches between "escape" and "attack" states depending on player actions and environmental threats.'})]})]}),(0,n.jsxs)("div",{className:"price_item wow fadeInUp",children:[(0,n.jsx)("h3",{children:"Reinforcement Learning"}),(0,n.jsx)("p",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{style:{color:"#999EA7"},children:"AI learns how to manage resources more efficiently, such as deciding when to plant crops, harvest, craft tools, or build structures."}),(0,n.jsx)("li",{style:{color:"#999EA7"},children:"The AI can optimize its behavior through trial and error, adapting to new challenges and dynamic environments."})]})]}),(0,n.jsxs)("div",{className:"price_item wow fadeInUp",children:[(0,n.jsx)("h3",{children:"Genetic Algorithms "}),(0,n.jsx)("p",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{style:{color:"#999EA7"},children:"AI agents can evolve based on player interactions, adjusting to different playstyles and needs for a more personalized experience."}),(0,n.jsx)("li",{style:{color:"#999EA7"},children:"AI evolves to adapt to varying environments, selecting the most efficient survival strategies through optimization."})]})]})]})})})}),(0,n.jsx)("div",{className:"price_btm mt_30 wow fadeInUp",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,n.jsxs)("div",{className:"price_btm_item",children:[(0,n.jsx)("h4",{children:"WILDCRAFT"}),(0,n.jsx)("h5",{children:"Embrace the AI-Powered"}),(0,n.jsx)("p",{children:"Immerse yourself in a dynamic world where AI agents create ever-evolving ecosystems, manage survival challenges, and adapt to your every move. Whether it's hunting, building, or exploring, AI makes every moment unique."}),(0,n.jsx)("a",{className:"btn_primary",href:"https://game.wildcraft.fun/",target:"_blank",children:"PLAY WILDCRAFT"})]})}),(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,n.jsx)("div",{className:"price_btm_img",children:(0,n.jsx)("img",{src:"/assets/images/price-btm-img.png",alt:"Image"})})})]})})]})}),(0,n.jsxs)("section",{className:"faq_area",children:[(0,n.jsx)("div",{className:"bg_img wow fadeInLeft",children:(0,n.jsx)("img",{className:"img-fluid",src:"/assets/images/faq-bg.png",alt:"Image"})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row justify-content-between",children:[(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-12",children:(0,n.jsx)("div",{className:"faq_left wow fadeInUp",children:(0,n.jsxs)("div",{className:"faq_exprieance_wrapper",children:[(0,n.jsx)("div",{className:"faq_bg_liner"}),(0,n.jsxs)("div",{className:"faq_exprieance",children:[(0,n.jsx)("div",{className:"faq_exprieance_item",children:(0,n.jsx)("h2",{children:"228+"})}),(0,n.jsx)("div",{className:"faq_exprieance_item",children:(0,n.jsx)("img",{className:"img-fluid",src:"/assets/images/hand-icon.png",alt:"Image"})})]})]})})}),(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-12 wow fadeInRight",children:(0,n.jsxs)("div",{className:"faq_right pt_90 pb_80 xs_pb_80 xs_pt_40",children:[(0,n.jsx)("a",{className:"video_btn venobox vbox-item","data-autoplay":"true","data-vbtype":"video",href:"https://youtu.be/EJZUTGvy_GQ",children:(0,n.jsx)("i",{className:"fas fa-play","aria-hidden":"true"})}),(0,n.jsx)("div",{className:"modal fade",id:"exampleModal","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsx)("div",{className:"modal-header",children:(0,n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),(0,n.jsx)("div",{className:"modal-body",children:(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/R8lHaEZYpCU?si=Xt38scf0VJQ8uF9H",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})})}),(0,n.jsx)("h3",{children:"Frequently Asked Questions?"}),(0,n.jsxs)("div",{className:"accordion",id:"accordionExample",children:[(0,n.jsxs)("div",{className:"accordion-item",children:[(0,n.jsx)("h2",{className:"accordion-header",children:(0,n.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"How realistic is the AI-driven survival world?"})}),(0,n.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:(0,n.jsx)("div",{className:"accordion-body",children:(0,n.jsx)("p",{children:"The AI in Wildcraft creates a dynamic, ever-changing world with lifelike animal behaviors, resource management, and evolving environments. The game’s AI adapts to your actions, making each playthrough unique and immersive."})})})]}),(0,n.jsxs)("div",{className:"accordion-item",children:[(0,n.jsx)("h2",{className:"accordion-header",children:(0,n.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Can I customize the behavior of AI companions?"})}),(0,n.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample",children:(0,n.jsx)("div",{className:"accordion-body",children:(0,n.jsx)("p",{children:"Yes! Wildcraft allows you to customize the actions and roles of your AI companions, from farming and gathering resources to defending your farm. You can tailor their behavior to suit your gameplay style."})})})]}),(0,n.jsxs)("div",{className:"accordion-item",children:[(0,n.jsx)("h2",{className:"accordion-header",children:(0,n.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Does Wildcraft require an internet connection?"})}),(0,n.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:(0,n.jsx)("div",{className:"accordion-body",children:(0,n.jsx)("p",{children:"While Wildcraft offers single-player mode that can be played offline, certain features like multiplayer, cloud saves, and online trading with NPCs may require an internet connection."})})})]})]})]})})]})})]}),(0,n.jsx)("section",{className:"painting_area pt_130 xs_pt_80 pb_140 xs_pb_60",style:{backgroundImage:"url(/assets/images/printing_bg.png)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row wow fadeInUp",children:(0,n.jsx)("div",{className:"col-xl-9 m-auto",children:(0,n.jsx)("div",{className:"sec_title pb_35",children:(0,n.jsx)("h2",{children:"Painting the Future of AI Agent in Gaming"})})})}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("article",{className:"painting_item",style:{backgroundImage:"url(/assets/images/painting-1.jpg)"},children:[(0,n.jsx)("span",{children:"News"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"June 21, 2023"})}),(0,n.jsx)("h3",{children:(0,n.jsx)("a",{target:"_blank",href:"https://autogpt.net/deepminds-ai-agent-a-game-changer-in-the-gaming-universe/",children:"A Game Changer in the Gaming Universe."})})]})}),(0,n.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("article",{className:"painting_item",style:{backgroundImage:"url(/assets/images/painting-2.jpg)"},children:[(0,n.jsx)("span",{children:"News"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"March 13, 2024"})}),(0,n.jsx)("h3",{children:(0,n.jsx)("a",{target:"_blank",href:"https://www.fastcompany.com/91058360/deepmind-new-ai-agent-video-games",children:"DeepMind’s new agent can learn complex games."})})]})}),(0,n.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6 wow fadeInUp",children:(0,n.jsxs)("article",{className:"painting_item",style:{backgroundImage:"url(/assets/images/painting-3.jpg)"},children:[(0,n.jsx)("span",{children:"News"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"October 31, 2024"})}),(0,n.jsx)("h3",{children:(0,n.jsx)("a",{target:"_blank",href:"https://news.northeastern.edu/2024/10/31/ai-in-gaming-responsible-practices/",children:"Northeastern researchers urge industry to adopt responsible AI practices"})})]})})]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"painting_btn mt_60 xs_pb_20 d-flex justify-content-center",children:(0,n.jsxs)("a",{className:"btn_primary",target:"_blank",href:"https://news.northeastern.edu/?s=game",children:["See All Articles ",(0,n.jsx)("i",{className:"fa-solid fa-arrow-right"})]})})})]})}),(0,n.jsx)("footer",{className:"footer pt_120 xs_pt_80 position-relative",style:{backgroundImage:"url(/assets/images/veripus_bg.png)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-lg-4",children:(0,n.jsxs)("div",{className:"footer_item",children:[(0,n.jsx)("a",{className:"footer_logo",href:"index.html",children:(0,n.jsx)("img",{src:"/logo.png",className:"img-fluid",alt:"Footer Logo"})}),(0,n.jsxs)("ul",{className:"footer_social d-flex",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://x.com/wildcraft_fun",target:"_blank",children:(0,n.jsx)("i",{className:"fa-brands fa-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://t.me/wildcraft_game_ai",target:"_blank",children:(0,n.jsx)("i",{className:"fab fa-telegram"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",onClick:()=>(u(!1,"Coming soon"),!1),children:(0,n.jsx)("i",{className:"fab fa-discord"})})})]})]})}),(0,n.jsx)("div",{className:"col-xl-2 col-lg-4 col-md-4 col-lg-4",children:(0,n.jsxs)("div",{className:"footer_item",children:[(0,n.jsx)("h4",{children:"Product"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>(u(!1,"Coming soon"),!1),children:"Chat by Wild"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:()=>(u(!1,"Coming soon"),!1),children:"WildCraft Game"})})]})]})}),(0,n.jsx)("div",{className:"col-xl-2 col-lg-4 col-md-4 col-lg-4",children:(0,n.jsxs)("div",{className:"footer_item",children:[(0,n.jsx)("h4",{children:"Solutions"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{children:"Core Features"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{children:"Development"})})]})]})}),(0,n.jsx)("div",{className:"col-xl-2 col-lg-4 col-md-4 col-lg-4",children:(0,n.jsxs)("div",{className:"footer_item",children:[(0,n.jsx)("h4",{children:"Resources"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",href:"https://whitepaper.virtuals.io/",children:"Virtual"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{target:"_blank",href:"https://platform.openai.com/",children:"Openai"})})]})]})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-4 col-lg-4",children:(0,n.jsxs)("div",{className:"footer_item",children:[(0,n.jsx)("h4",{children:"Feeling Like Subscribe?"}),(0,n.jsxs)("form",{className:"d-flex mt_10",role:"search",children:[(0,n.jsx)("input",{type:"search",placeholder:"Enter your email","aria-label":"Search"}),(0,n.jsx)("button",{type:"submit",children:"Get"})]})]})})]}),(0,n.jsx)("div",{className:"footer_btm mt_55",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,n.jsx)("div",{className:"footer_btmItem",children:(0,n.jsx)("p",{children:"\xa9 2025 WILDCRAFT. All rights reserved."})})}),(0,n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,n.jsx)("div",{className:"footer_btmItem",children:(0,n.jsxs)("ul",{className:"d-flex gap-3 justify-content-end",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"privacy_policy.html",children:"Privacy Policy"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"terms_condition.html",children:"Term of Service"})})]})})})]})})]})}),(0,n.jsx)("div",{className:"scroll_btn",children:(0,n.jsx)("i",{className:"far fa-long-arrow-up"})}),(0,n.jsx)("script",{src:"/assets/js/jquery-3.7.0.min.js"}),(0,n.jsx)("script",{src:"/assets/js/bootstrap.bundle.min.js"}),(0,n.jsx)("script",{src:"/assets/js/Font-Awesome.js"}),(0,n.jsx)("script",{src:"/assets/js/slick.min.js"}),(0,n.jsx)("script",{src:"/assets/js/isotope.pkgd.min.js"}),(0,n.jsx)("script",{src:"/assets/js/venobox.min.js"}),(0,n.jsx)("script",{src:"/assets/js/wow.min.js"}),(0,n.jsx)("script",{src:"/assets/js/jquery.marquee.min.js"}),(0,n.jsx)("script",{src:"/assets/js/main.js"})]})]})}}},function(e){e.O(0,[799,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);