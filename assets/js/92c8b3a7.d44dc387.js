"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1955],{3905:(t,a,e)=>{e.d(a,{Zo:()=>c,kt:()=>N});var n=e(7294);function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){s(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,s=function(t,a){if(null==t)return{};var e,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(s[e]=t[e]);return s}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var i=n.createContext({}),l=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):m(m({},a),t)),e},c=function(t){var a=l(t.components);return n.createElement(i.Provider,{value:a},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,s=t.mdxType,r=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),o=l(e),d=s,N=o["".concat(i,".").concat(d)]||o[d]||u[d]||r;return e?n.createElement(N,m(m({ref:a},c),{},{components:e})):n.createElement(N,m({ref:a},c))}));function N(t,a){var e=arguments,s=a&&a.mdxType;if("string"==typeof t||s){var r=e.length,m=new Array(r);m[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=t,p[o]="string"==typeof t?t:s,m[1]=p;for(var l=2;l<r;l++)m[l]=e[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},8452:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=e(7462),s=(e(7294),e(3905));const r={title:"Accounts",description:"The information storage entity is an account"},m="Accounts",p={unversionedId:"arch/accounts",id:"arch/accounts",title:"Accounts",description:"The information storage entity is an account",source:"@site/../../src/arch/40-accounts.md",sourceDirName:"arch",slug:"/arch/accounts",permalink:"/arch/accounts",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/40-accounts.md",tags:[],version:"current",lastUpdatedAt:1694439889,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:40,frontMatter:{title:"Accounts",description:"The information storage entity is an account"},sidebar:"tutorialSidebar",previous:{title:"Logical Time",permalink:"/arch/logic-time"},next:{title:"Message",permalink:"/arch/message"}},i={},l=[{value:"Simplified representation of an Everscale Account",id:"simplified-representation-of-an-everscale-account",level:4},{value:"Account Lifecycle",id:"account-lifecycle",level:4},{value:"Account Structure Definition",id:"account-structure-definition",level:2},{value:"AccountStuff structure fields",id:"accountstuff-structure-fields",level:4},{value:"Account Address",id:"account-address",level:2},{value:"MsgAddrStd structure fields",id:"msgaddrstd-structure-fields",level:4},{value:"Account Storage",id:"account-storage",level:2},{value:"StorageInfo structure fields",id:"storageinfo-structure-fields",level:4},{value:"StorageUsed structure fields",id:"storageused-structure-fields",level:4},{value:"Account Data",id:"account-data",level:2},{value:"Account Storage structure",id:"account-storage-structure",level:3},{value:"AccountStorage fields",id:"accountstorage-fields",level:4},{value:"Account State",id:"account-state",level:3},{value:"Smart-Contract Storage (StateInit)",id:"smart-contract-storage-stateinit",level:3}],c={toc:l},o="wrapper";function u(t){let{components:a,...e}=t;return(0,s.kt)(o,(0,n.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"accounts"},"Accounts"),(0,s.kt)("p",null,"Within a single workchain, the most basic information storage entity is the ",(0,s.kt)("em",{parentName:"p"},"account"),".",(0,s.kt)("br",{parentName:"p"}),"\n","An account is uniquely determined by its ",(0,s.kt)("em",{parentName:"p"},"identifier"),".",(0,s.kt)("br",{parentName:"p"}),"\n","Within the whole blockchain \u2014 the collection of workchains \u2014 the account is uniquely determined by its ",(0,s.kt)("em",{parentName:"p"},"address"),": that is, when we put together the workchain identifier and its account identifier."),(0,s.kt)("p",null,"The account record stores account address, account balance and maybe a smart-contract state. The latter might be missing, and yet the account is able to receive basic messages."),(0,s.kt)("h4",{id:"simplified-representation-of-an-everscale-account"},"Simplified representation of an Everscale Account"),(0,s.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IquiIb5mJ4xEByqhKQZcKb18J4y5iX9JKefIYulX_AJ4dCIyv5GWFnca8RWaiIGLh1oc83a_9HM9cv9OaWZardBL0W00",alt:"Simplified representation of an Everscale Account"}),(0,s.kt)("p",null,"An account could be created either by a user, or by a smart-contract.",(0,s.kt)("br",{parentName:"p"}),"\n","It is done by sending a message carrying a special payload to an address of the account."),(0,s.kt)("p",null,"In the process of its operation, an account might become frozen or deleted. This is usually the result of an account being in debt, or executing a special instruction. We depict the life-cycle of an account in Fig."),(0,s.kt)("h4",{id:"account-lifecycle"},"Account Lifecycle"),(0,s.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VP0nQyCm48Lt_Og3Re52EcJfK324GfTicK86nNfEZjed8vr3xL_VCpMAIw6J1E_JTqztum12r-j80RbEt2j7SVcJfVV9TzJx45YkzB9pxhGvq_CR7QBWYxD2rAtkStGK5bPwfGm9TFVj02THGHfxYiqZ_x23VKjPlQMMw0tawpeE9bqeyrMryXt6ym_F4qfwUjhljzkgEXltdk84CIuCiCfZDtTR3owYGqoTpUsGixyQcs9jL_kXMn3pNgps_zOMZSxQGXobIS248exIZcw9LyhIOrWUh9Z7TygQ_b2_jZytGml5Dm00",alt:"Account Lifecycle"}),(0,s.kt)("p",null,"In the beginning, the account remains in an ",(0,s.kt)("em",{parentName:"p"},"Nonexistent")," state \u2014 it stores no funds and no data. Only after you send some value to the account, does it switch to the ",(0,s.kt)("em",{parentName:"p"},"Uninit")," state. In that state, it is not yet very useful: it may only receive coins from the incoming messages."),(0,s.kt)("p",null,"The account might be initialized with a message carrying a ",(0,s.kt)("em",{parentName:"p"},"StateInit")," data blob containing smart-contract code and data. In this case, with enough coins on the balance, the account becomes initialized with this smart-contract, and it is then switched into ",(0,s.kt)("em",{parentName:"p"},"Active")," state."),(0,s.kt)("p",null,"Due to storage fees, the account balance might become negative, leading to ",(0,s.kt)("em",{parentName:"p"},"Frozen")," state and even being deleted afterwards. The other option for deletion is if the smart-contract itself executes a special action. After the deletion, the account state is switched back to ",(0,s.kt)("em",{parentName:"p"},"Nonexistent")," state."),(0,s.kt)("h2",{id:"account-structure-definition"},"Account Structure Definition"),(0,s.kt)("p",null,"The account structure is defined as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"struct AccountStuff {\n    addr: MsgAddressInt,\n    storage_stat: StorageInfo,\n    storage: AccountStorage,\n}\n\ntype Account = Option<AccountStuff>;\n")),(0,s.kt)("h4",{id:"accountstuff-structure-fields"},"AccountStuff structure fields"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"addr"),(0,s.kt)("td",{parentName:"tr",align:null},"Account address")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"storage_stat"),(0,s.kt)("td",{parentName:"tr",align:null},"Account storage use statistics")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"storage"),(0,s.kt)("td",{parentName:"tr",align:null},"Account smart-contract storage")))),(0,s.kt)("h2",{id:"account-address"},"Account Address"),(0,s.kt)("p",null,"The location of an account on Everscale blockchain is represented as a two-value structure: the workchain number and the account identifier. This structure is called an ",(0,s.kt)("em",{parentName:"p"},"account address"),". Hereinafter, we just call it address for greater convenience."),(0,s.kt)("p",null,"Addresses are defined as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum MsgAddressInt {\n    AddrStd(MsgAddrStd),\n    AddrVar(MsgAddrVar),\n}\n\npub struct MsgAddrStd {\n    pub anycast: Option<AnycastInfo>,\n    pub workchain_id: i8,\n    pub address: AccountId,\n}\n\npub type AccountId = SliceData;\n")),(0,s.kt)("p",null,"The address may be encoded by one of the two structures: ",(0,s.kt)("em",{parentName:"p"},"MsgAddrStd")," or ",(0,s.kt)("em",{parentName:"p"},"MsgAddrVar"),". The latter is used to locate accounts in huge blockchains, when the standard 8-bit ",(0,s.kt)("em",{parentName:"p"},"workchain_id")," is not enough, and not supported currently."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("em",{parentName:"li"},"SliceData")," denotes a binary blob encoded in a tree data structure."),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("inlineCode",{parentName:"li"},"i8")," is an 8-bit signed integer.")),(0,s.kt)("h4",{id:"msgaddrstd-structure-fields"},"MsgAddrStd structure fields"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"anycast"),(0,s.kt)("td",{parentName:"tr",align:null},"Multi-shard contracts routing information")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"workchain_id"),(0,s.kt)("td",{parentName:"tr",align:null},"Workchain identifier")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"address"),(0,s.kt)("td",{parentName:"tr",align:null},"Account identifier within the workchain")))),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Anycast-addresses are planned to be removed shortly.")),(0,s.kt)("h2",{id:"account-storage"},"Account Storage"),(0,s.kt)("p",null,"Any account on the Everscale blockchain is being charged for occupying space on a regular basis. The fee depends on the size of data being stored, the current prices and when the last charge took place. In some circumstances, an account may also have a debt, called due payment. Most of this information is stored in the ",(0,s.kt)("em",{parentName:"p"},"StorageInfo")," structure."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct StorageInfo {\n  used: StorageUsed,\n  last_paid: u32,\n  due_payment: Option<Grams>,\n}\n\npub struct StorageUsed {\n    cells: VarUInteger7,\n    bits: VarUInteger7,\n    public_cells: VarUInteger7,\n}\n")),(0,s.kt)("h4",{id:"storageinfo-structure-fields"},"StorageInfo structure fields"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"used"),(0,s.kt)("td",{parentName:"tr",align:null},"Blockchain storage use  statistics")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"last_paid"),(0,s.kt)("td",{parentName:"tr",align:null},"Time of the latest payment, in Unix Epoch")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"due_payment"),(0,s.kt)("td",{parentName:"tr",align:null},"Debt of the account")))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("em",{parentName:"li"},"Grams")," denotes a set of natural numbers ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"256")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\{0, ..., 2^{256}\\}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"..."),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"256"))))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}"))))),", equipped with ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2295")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\oplus")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2295")))))," and ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2296")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ominus")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2296")))))," operators, such that:")),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mi"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"m"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"o"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"d"))),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"256"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus b = (a + b) \\,\\, \\boldsymbol{mod} \\,\\, 2^{256}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord boldsymbol"},"mod"))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"256")))))))))))))),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2296"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mi"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"m"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"a"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"bold-italic"},"x"))),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\ominus b = \\boldsymbol{max}(a - b, 0)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2296"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord boldsymbol"},"max"))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"Here ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"+")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"+")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"+")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212")))))," operators are standard addition and subtraction operators in a set of integers ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"Z")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\mathbb{Z}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathbb"},"Z"))))),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Amount of storage used by the account is encoded with ",(0,s.kt)("em",{parentName:"li"},"StorageUsed")," struct.")),(0,s.kt)("h4",{id:"storageused-structure-fields"},"StorageUsed structure fields"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"cells"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of cells occupied by the account")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"bits"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of bits occupied by the account")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"public_cells"),(0,s.kt)("td",{parentName:"tr",align:null},"Field is not used")))),(0,s.kt)("p",null,"To store the data in a tree-like form, it is encoded as a series of interlinked cells. This data structure also consumes some space and it is accounted for in the ",(0,s.kt)("em",{parentName:"p"},"cell")," field. The ",(0,s.kt)("em",{parentName:"p"},"bits")," field refers to data size being encoded in the cells."),(0,s.kt)("h2",{id:"account-data"},"Account Data"),(0,s.kt)("p",null,"The full account record is represented by several nested data structures:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Account storage"),(0,s.kt)("li",{parentName:"ul"},"Account state"),(0,s.kt)("li",{parentName:"ul"},"Smart-contract storage called StateInit")),(0,s.kt)("h3",{id:"account-storage-structure"},"Account Storage structure"),(0,s.kt)("p",null,"The most outer record is the account storage. It contains the account balance and the account state. The account state ",(0,s.kt)("em",{parentName:"p"},"may")," contain the smart-contract code and data, described by the structure called ",(0,s.kt)("em",{parentName:"p"},"StateInit"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct AccountStorage {\n  last_trans_lt: u64,\n  balance: CurrencyCollection,\n  state: AccountState,\n}\n")),(0,s.kt)("h4",{id:"accountstorage-fields"},"AccountStorage fields"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"last_trans_lt"),(0,s.kt)("td",{parentName:"tr",align:null},"Last transaction logical time")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"balance"),(0,s.kt)("td",{parentName:"tr",align:null},"Amount of cryptocurrency tokens available for the account")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"state"),(0,s.kt)("td",{parentName:"tr",align:null},"Current account state")))),(0,s.kt)("h3",{id:"account-state"},"Account State"),(0,s.kt)("p",null,"The account state defines the mode of operation for the account, during the message being executed for that account. The Transaction Executor logic varies greatly depending on what the current account state is."),(0,s.kt)("p",null,"The account state may have additional data fields. See the enumeration below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"enum AccountState {\n  AccountUninit,\n  AccountActive{\n    init_code_hash: Option<UInt256>,\n    state_init: StateInit,\n  },\n  AccountFrozen{\n    init_code_hash: Option<UInt256>,\n    state_init_hash: UInt256,\n  },\n}\n")),(0,s.kt)("p",null,"The life cycle of an account is depicted on ",(0,s.kt)("a",{parentName:"p",href:"#account-lifecycle"},"Fig"),"."),(0,s.kt)("p",null,"Let us clarify the fields of enumeration items."),(0,s.kt)("p",null,"For ",(0,s.kt)("em",{parentName:"p"},"AccountActive"),", the value state",(0,s.kt)("em",{parentName:"p"},"init defines the byte-code and data of the associated smart-contract. The field _init_code_hash")," defines the hash of the field ",(0,s.kt)("em",{parentName:"p"},"state_init.code")," that was used at the moment of the account initialization, or at the moment of the account freeze."),(0,s.kt)("p",null,"In Everscale, it is possible to change the smart-contract's code on the fly using the ",(0,s.kt)("em",{parentName:"p"},"SetCode")," action. However, the value ",(0,s.kt)("em",{parentName:"p"},"init_code_hash")," stays unaffected."),(0,s.kt)("p",null,"The same holds for ",(0,s.kt)("em",{parentName:"p"},"AccountFrozen"),". The value of ",(0,s.kt)("em",{parentName:"p"},"state_init_hash")," defines the hash of the smart-contract ",(0,s.kt)("em",{parentName:"p"},"state_init.code")," at the moment of a freeze."),(0,s.kt)("h3",{id:"smart-contract-storage-stateinit"},"Smart-Contract Storage (StateInit)"),(0,s.kt)("p",null,"The byte-code and data of a contract are stored within a structure called ",(0,s.kt)("em",{parentName:"p"},"StateInit"),". Its name may seem quite confusing. It could have been named just State. The Init part comes from the fact that\nthis structure is also used for the initialization of an account when it is uninitialized."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct StateInit {\n  pub split_depth: Option<Number5>,\n  pub special: Option<TickTock>,\n  pub code: Option<Cell>,\n  pub data: Option<Cell>,\n  pub library: StateInitLib,\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"split_depth")," field was initially devoted to large multi-shard smart-contracts, but currently it is not used.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"special")," fields signal the fact that the smart-contract is related to the blockchain system functioning. This is related to the very small amount or contracts residing in the Masterchain, i.e. Elector, Config, Giver, etc. There is a special logic to executing messages destined for those contracts.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"code")," and ",(0,s.kt)("em",{parentName:"p"},"data")," fields encodes the current byte-code and data of a contract. Here, data denote values of contract's variables.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"library")," used to encode the code libraries the contract may refer to from its code. This mechanism is deprecated."))))}u.isMDXComponent=!0}}]);