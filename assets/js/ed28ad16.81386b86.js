"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Bug bounty program",description:"We are interested in finding bugs in the following software components"},o="Everscale Bug Bounty Program",l={unversionedId:"contribute/bug-bounty-program",id:"contribute/bug-bounty-program",title:"Bug bounty program",description:"We are interested in finding bugs in the following software components",source:"@site/../../src/contribute/bug-bounty-program.md",sourceDirName:"contribute",slug:"/contribute/bug-bounty-program",permalink:"/contribute/bug-bounty-program",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/contribute/bug-bounty-program.md",tags:[],version:"current",lastUpdatedAt:1694439889,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"Bug bounty program",description:"We are interested in finding bugs in the following software components"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/contribute/getting-started"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Program Objectives",id:"program-objectives",level:2},{value:"Definition of a Bug",id:"definition-of-a-bug",level:2},{value:"Bug Bounty Scope",id:"bug-bounty-scope",level:2},{value:"Bugs Severity Ranking",id:"bugs-severity-ranking",level:2},{value:"Involved Parties",id:"involved-parties",level:2},{value:"Application and Evaluation Process",id:"application-and-evaluation-process",level:2},{value:"Report Evaluation Summary",id:"report-evaluation-summary",level:2},{value:"Reward Structure",id:"reward-structure",level:2},{value:"Conflicts Resolution",id:"conflicts-resolution",level:2},{value:"Non-Disclosure Agreement",id:"non-disclosure-agreement",level:2},{value:"Rules of Conduct",id:"rules-of-conduct",level:2},{value:"Contacts",id:"contacts",level:2},{value:"Appendix A. Vulnerability Report Example",id:"appendix-a-vulnerability-report-example",level:2},{value:"Notes",id:"notes",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"everscale-bug-bounty-program"},"Everscale Bug Bounty Program"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Everscale is an asynchronous message passing system of stateful programmable agents called smart-contracts. Those\ncontracts manage digital assets of users on their behalf. In this context, digital assets mean tokens, NFTs, native\ncryptocurrency, etc. Some smart-contracts lock value worth millions of dollars. Hence, to be trustworthy, the Everscale platform has to provide security, integrity and availability of user assets."),(0,n.kt)("h2",{id:"program-objectives"},"Program Objectives"),(0,n.kt)("p",null,"The Everscale Bug Bounty Program aims to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide security researchers, white hackers, developers and other interested parties incentives to report found severe vulnerabilities to Everscale Platform developers"),(0,n.kt)("li",{parentName:"ul"},"Rapidly improve Everscale Platform security by addressing critical and major vulnerabilities in a timely, confidential manner"),(0,n.kt)("li",{parentName:"ul"},"Improve the overall public image of the platform as security-oriented and trustworthy")),(0,n.kt)("h2",{id:"definition-of-a-bug"},"Definition of a Bug"),(0,n.kt)("p",null,"Three pillars of the blockchain platform reliability are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Security")," - digital assets are allowed to be managed only by eligible users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Integrity")," - digital assets are managed exactly in a way anticipated by users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Availability")," - digital assets are constantly accessible to be managed for eligible users")),(0,n.kt)("p",null,"Any Everscale Platform software defect possibly leading to partial or full disruption of one of the above is called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"a bug")),". Throughout the document, we use the terms ",(0,n.kt)("em",{parentName:"p"},"bug, vulnerability")," and ",(0,n.kt)("em",{parentName:"p"},"software defect")," interchangeably."),(0,n.kt)("h2",{id:"bug-bounty-scope"},"Bug Bounty Scope"),(0,n.kt)("p",null,"We are interested in finding bugs in the following software components. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Only master branches"))," of those repositories are in scope of this Bug Bounty."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Everscale Node modules:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-vm"},"TVM virtual machine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-node"},"Node protocol")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-executor"},"Transaction Executor")),(0,n.kt)("li",{parentName:"ul"},"Main data structures:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-block/tree/master/src"},"block structures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-types"},"Low-level types")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"TON Solidity Compiler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TVM-linker"},"TVM Linker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-1/blob/master/crypto/smartcont/config-code.fc"},"Config smart-contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig"},"Safe Multisig Wallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broxus/ton-wton"},"Wrapped Ever")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broxus/flatqube-contracts"},"Flat Qube")),(0,n.kt)("li",{parentName:"ul"},"Octus Bridge modules:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broxus/octusbridge-relay"},"Relay")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/broxus/octusbridge-contracts"},"Contracts"))))),(0,n.kt)("h2",{id:"bugs-severity-ranking"},"Bugs Severity Ranking"),(0,n.kt)("p",null,"To rank submitted bug reports it is suggested to use the DREAD",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," vulnerabilities rating system. The reported bug is\nevaluated by the following criteria:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D"),"amage potential - If the threat is exploited, how severe consequences are?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"R"),"eproducibility - How easy is it to reproduce the attack?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"E"),"xploitability - How easy is it to perform the attack?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A"),"ffected users - After successful attack, how many users would be affected and how important are they?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D"),"iscoverability - How easy is it to spot the vulnerability in the software?")),(0,n.kt)("p",null,"For a specific bug, each criteria is assigned a number from 0 to 10. The overall bug rating is an arithmetic average of\nall those values. The higher the rating, the more valuable the finding, hence the higher reward."),(0,n.kt)("h2",{id:"involved-parties"},"Involved Parties"),(0,n.kt)("p",null,"We distinguish the following parties involved in the Bug Bounty application and evaluation process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Applicant")," is a person that found software vulnerability and wants to submit it and receive the reward."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reviewers")," - a group of experts evaluating the submission."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Administrator")," - a person responsible for receiving bug reports from Applicants and transferring them to the Review\nCommittee, conducting their evaluation of the report. This person is the manager of the whole evaluation process,\nstarting from receiving the initial report from the Applicant, and up to transferring the final reward, if any.")),(0,n.kt)("h2",{id:"application-and-evaluation-process"},"Application and Evaluation Process"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Applicant conducts the vulnerability report that should reflect the following:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Threat short title"),(0,n.kt)("li",{parentName:"ol"},"Affected components"),(0,n.kt)("li",{parentName:"ol"},"Description"),(0,n.kt)("li",{parentName:"ol"},"Result of attack"),(0,n.kt)("li",{parentName:"ol"},"Mitigation strategies"),(0,n.kt)("li",{parentName:"ol"},"DREAD vulnerability evaluation with rational for each item"))),(0,n.kt)("li",{parentName:"ol"},"Applicant sends the report to the Administrator. From that very moment, all details of the vulnerability shall stay\nundisclosed! This is of paramount importance for both Platform developers and the Applicant."),(0,n.kt)("li",{parentName:"ol"},"Administrator acknowledges the report and does the pre-evaluation of the report. If the report looks reasonable and\nwithin the scope of Bug Bounty Program, then the report is sent to the corresponding Reviewers for further in-depth\nevaluation. If the report is not good enough, or out of scope, the Administrator informs the Applicant about that."),(0,n.kt)("li",{parentName:"ol"},"Reviewers evaluate the vulnerability report and prepare the Report Evaluation Summary document, (RES). The RES\ndocument contains the experts opinion on how severe the presented vulnerability is, and if it deserves to be fixed."),(0,n.kt)("li",{parentName:"ol"},"Reviewers send the RES to the Administrator."),(0,n.kt)("li",{parentName:"ol"},"Administrator acknowledges the Applicant about the RES evaluation. If RES is positive, and the Applicant agrees on\nit, the Administrator initiates the reward transaction to the Application wallet according to the Reward Structure\nsection."),(0,n.kt)("li",{parentName:"ol"},"After the bug is fixed, all involved parties are free to report the vulnerability to the public. Before that, it is\nstrictly prohibited.")),(0,n.kt)("h2",{id:"report-evaluation-summary"},"Report Evaluation Summary"),(0,n.kt)("p",null,"Reviewers are responsible for in-depth technical evaluation of the report. In particular, they evaluate the submitted\nreport from the perspective of DREAD:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How severe are the consequences if the vulnerability gets exploited?"),(0,n.kt)("li",{parentName:"ul"},"How easy is it to reproduce the bug?"),(0,n.kt)("li",{parentName:"ul"},"How easy is it to exploit the bug on the real network?"),(0,n.kt)("li",{parentName:"ul"},"If the attack succeeds, what are the consequences for users and how important are they?"),(0,n.kt)("li",{parentName:"ul"},"How difficult is it to discover this bug having the software artifacts at hand?")),(0,n.kt)("p",null,"For each item, RC assigns a number from 0 to 10. The final score is an arithmetic average of those. This score equipped\nwith a short rationale is put into the Report Evaluation Summary document."),(0,n.kt)("h2",{id:"reward-structure"},"Reward Structure"),(0,n.kt)("p",null,"The reward depends on the final score stated in the Report Evaluation Summary. The following severity levels and their\nrespective rewards are suggested."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Bug Severity"),(0,n.kt)("th",{parentName:"tr",align:null},"DREAD score"),(0,n.kt)("th",{parentName:"tr",align:null},"Reward (USD equivalent)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Critical"),(0,n.kt)("td",{parentName:"tr",align:null},"[8 .. 10)"),(0,n.kt)("td",{parentName:"tr",align:null},"50000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"High"),(0,n.kt)("td",{parentName:"tr",align:null},"[5 .. 7)"),(0,n.kt)("td",{parentName:"tr",align:null},"30000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"[3 .. 5)"),(0,n.kt)("td",{parentName:"tr",align:null},"10000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Low"),(0,n.kt)("td",{parentName:"tr",align:null},"[1 .. 3)"),(0,n.kt)("td",{parentName:"tr",align:null},"1500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information"),(0,n.kt)("td",{parentName:"tr",align:null},"[0 .. 1)"),(0,n.kt)("td",{parentName:"tr",align:null},"0")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Rewards are paid in USDT tokens, LEVER",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," tokens or some of their combinations, depending on the current Bug Bounty\nbudget restrictions. The specific reward structure is decided individually, after the bug report is accepted and\napproved. The current Bug Bounty budget restrictions are decided by DeFi Alliance members.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The Bug Bounty program may be stopped for some period of time without prior notice. In this case, if there are pending\nbug reports, they will be processed on a fair basis after the program is resumed.")),(0,n.kt)("h2",{id:"conflicts-resolution"},"Conflicts Resolution"),(0,n.kt)("p",null,"In case the Applicant does not agree with the Reviewers decision, or Administrator decision regarding their bug report,\nthe Administrator reserves the right to draw the final decision on the vulnerability severity evaluation and the reward.\nIt is well understood by all parties that unfair or inadequate evaluation of Applicant\u2019s work will result in a\nsignificant reputation harm."),(0,n.kt)("h2",{id:"non-disclosure-agreement"},"Non-Disclosure Agreement"),(0,n.kt)("p",null,"After the application process is started, all involved parties shall not publish the vulnerability details within the\npublic space. The vulnerability publishing is prohibited up until the moment the vulnerability is fixed in the software\nand corresponding updates are uploaded into the network."),(0,n.kt)("h2",{id:"rules-of-conduct"},"Rules of Conduct"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Applicants shall not break the rules stated in this document. Otherwise, an Applicant may be banned from the program,\ntemporarily or forever."),(0,n.kt)("li",{parentName:"ul"},"Applicants shall not be affiliated with EverX Labs and Broxus companies."),(0,n.kt)("li",{parentName:"ul"},"Applicants shall not use social engineering techniques to gain knowledge of bugs."),(0,n.kt)("li",{parentName:"ul"},"Applicants shall not impersonate others work. It is prohibited to publish the report based on findings of another\nperson."),(0,n.kt)("li",{parentName:"ul"},"Applicants shall not test found vulnerabilities on the main network or public test networks. Only private networks\nshall be used for that purpose."),(0,n.kt)("li",{parentName:"ul"},"After the report is submitted, Applicant shall not disclose the report details to the public. This rule is canceled\nafter the vulnerability is fixed."),(0,n.kt)("li",{parentName:"ul"},"Both Administrator and Reviewers shall not disclose the report details to the public until the vulnerability has been\nfixed and reward is paid."),(0,n.kt)("li",{parentName:"ul"},"Applicants shall not report a bug that was previously disclosed by others."),(0,n.kt)("li",{parentName:"ul"},"Applicants shall not underreport or misinterpret found vulnerabilities"),(0,n.kt)("li",{parentName:"ul"},"Administrator shall provide feedback to the Applicant, and act on the report in a timely manner. If the process\nstalls, the Applicant has the right to ask for an action.")),(0,n.kt)("h2",{id:"contacts"},"Contacts"),(0,n.kt)("p",null,"Bug report shall be sent to ",(0,n.kt)("a",{parentName:"p",href:"mainto:bugreport@everx.dev"},"bugreport@everx.dev")),(0,n.kt)("p",null,"The applicant may also contact our support team on Telegram:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://t.me/Custler"},"@Custler"),", ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/lotumba"},"@lotumba"),", ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/isheldon"},"@isheldon"),", ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/Rexagon"},"@Rexagon"),", ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/UsernameBarsik"},"@UsernameBarsik"),"\n, ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/prigolovko"},"@prigolovko")),(0,n.kt)("h2",{id:"appendix-a-vulnerability-report-example"},"Appendix A. Vulnerability Report Example"),(0,n.kt)("p",null,"Here, we provide a brief example of how the Vulnerability Report should look like for some fictional vulnerability in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/02363b35c39745a067d866a0dd1c748ff0653350/solidity/safemultisig"},"SafeMultisigWallet"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Threat title")," \u2014 Safe MultiSig allows unauthorized token transfers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Affected components")," \u2014 All deployed SafeMultiSig wallets in the network"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description")," \u2014 We consider the method SafeMultisigWallet: ",(0,n.kt)("inlineCode",{parentName:"li"},"Transfer(param:uint, send_to: address)")," as vulnerable. If the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"param = 1"),", and the wallet has less than 3 owners, the method will not perform proper user authorization and transfer all the wallet funds to send_to address. This is due to incorrect check at line 123. The current check is: ",(0,n.kt)("inlineCode",{parentName:"li"},"<incorrect check goes check>"),", the correct check would be: ",(0,n.kt)("inlineCode",{parentName:"li"},"<correct check goes here>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Result of attack")," \u2014 Complete loss of user funds in the worst case."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mitigation strategies")," \u2014 To fix the code error: Fix the check at line 123, Inspect all probable places with similar checks in the source code. To overcome the bug on the deployed wallets: If you have less than 3 custodians, add extra wallet custodians so their total amount becomes at least 3."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DREAD score")," ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Damage potential: ",(0,n.kt)("strong",{parentName:"li"},"9")," \u2014 Wallet users lose their funds"),(0,n.kt)("li",{parentName:"ul"},"Reproducibility: ",(0,n.kt)("strong",{parentName:"li"},"9")," \u2014 The bug is reproducible on all wallets with a number of custodians less than 3."),(0,n.kt)("li",{parentName:"ul"},"Exploitability: ",(0,n.kt)("strong",{parentName:"li"},"9")," \u2014 The bug can be exploited by a simple transaction with proper parameters"),(0,n.kt)("li",{parentName:"ul"},"Affected users: ",(0,n.kt)("strong",{parentName:"li"},"6")," \u2014 All users of the network with SafeMultiSig wallets with custodian number less than 3 . By our estimation, the total number of such user wallets is ~200 which is less than 5% of all the population, with total funds locked for 1$ mln worth of Ever."),(0,n.kt)("li",{parentName:"ul"},"Discoverability: ",(0,n.kt)("strong",{parentName:"li"},"9")," \u2014 The incorrect check is easy to spot. You need no special knowledge to discover this bug."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total:")," (9 + 9 + 9 + 6 + 9) / 5 = ",(0,n.kt)("strong",{parentName:"li"},"8.4 Critical"))))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},(0,n.kt)("a",{parentName:"li",href:"https://adam.shostack.org/modsec08/Shostack-ModSec08-Experiences-Threat-Modeling-At-Microsoft.pdf"},"DREAD is part of a system for risk-assessing computer security threats that was formerly used at Microsoft"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"The LEVER token is an EVER equivalent locked for 2 years after being minted. This token is not yet introduced into wide usage. A brief description may be found ",(0,n.kt)("a",{parentName:"li",href:"https://everdao.net/governance/proposals/86"},"here"),".",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);