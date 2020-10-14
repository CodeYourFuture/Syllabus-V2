(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(240)),o=n(241),c={id:"lesson",title:"JavaScript Core II - 2",sidebar_label:"Lesson"},i={unversionedId:"js-core-2/week-2/lesson",id:"js-core-2/week-2/lesson",isDocsHomePage:!1,title:"JavaScript Core II - 2",description:"Contents",source:"@site/docs/js-core-2/week-2/lesson.md",slug:"/js-core-2/week-2/lesson",permalink:"/js-core-2/week-2/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-2/week-2/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"JavaScriptCore2",previous:{title:"Instructor Notes",permalink:"/js-core-2/week-1/instructors"},next:{title:"Homework",permalink:"/js-core-2/week-2/homework"}},s=[{value:"Contents",id:"contents",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"JS in the Browser",id:"js-in-the-browser",children:[{value:"The DOM",id:"the-dom",children:[]},{value:"Access DOM elements",id:"access-dom-elements",children:[]},{value:"Attach events to DOM elements",id:"attach-events-to-dom-elements",children:[]},{value:"Create DOM elements",id:"create-dom-elements",children:[]},{value:"Manipulate DOM elements",id:"manipulate-dom-elements",children:[]}]},{value:"Feedback",id:"feedback",children:[]}],b={rightToc:s};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"contents"},"Contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#js-in-the-browser"}),"JS in the Browser"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#the-dom"}),"The DOM")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#access-dom-elements"}),"Access DOM elements"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#preparation-for-exercises"}),"Preparation for exercises")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#exercise-1"}),"Exercise (1)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#attach-events-to-dom-elements"}),"Attach events to DOM elements"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#exercise-2"}),"Exercise (2)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#exercise-3"}),"Exercise (3)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#create-dom-elements"}),"Create DOM elements"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#exercise-4"}),"Exercise (4)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#manipulate-dom-elements"}),"Manipulate DOM elements"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#exercise-5"}),"Exercise (5)"))))))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(l.b)("p",null,"By the end of this lesson students should be able to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Define what the DOM is and what it does"),Object(l.b)("li",{parentName:"ul"},"Use query selectors to retrieve elements from the DOM"),Object(l.b)("li",{parentName:"ul"},"Use event listeners to respond to events that happen on the DOM"),Object(l.b)("li",{parentName:"ul"},"Create DOM elements using JavaScript and add them to the DOM"),Object(l.b)("li",{parentName:"ul"},"Manipulate DOM elements using JavaScript to change their properties")),Object(l.b)("hr",null),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"In-class exercises can also be found on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/JavaScript-Core-2-Homework"}),"JavaScript Core 2 Homework")," in ",Object(l.b)("strong",{parentName:"p"},"Week 2"),".")),Object(l.b)("h2",{id:"js-in-the-browser"},"JS in the Browser"),Object(l.b)("p",null,"Up until now we've been using ",Object(l.b)("inlineCode",{parentName:"p"},"console.log")," to see the results of our code running, because it allows us to focus on writing code and seeing the results instantly. But JavaScript was not meant to be run in ",Object(l.b)("inlineCode",{parentName:"p"},"console.log"),": it was meant to make web pages dynamic."),Object(l.b)("p",null,"Lots of websites are powered by JavaScript today, and some (like Facebook) cannot function at all without it: it's become that important to the look and feel of the website."),Object(l.b)("h3",{id:"the-dom"},"The DOM"),Object(l.b)("p",null,"Your webpages are made up of a bunch of HTML elements, nested within each other (parents and children). But JavaScript doesn't know about any of that."),Object(l.b)("p",null,'Thankfully, in JavaScript we have access to this "DOM" object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.'),Object(l.b)("p",null,"Here are two examples, HTML and then JavaScript, of how the DOM might look like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<html>\n  <body>\n    <h1>Welcome!</h1>\n    <p>Hello world!</p>\n  </body>\n</html>\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let document = {\n  body: {\n    h1: "Welcome",\n    p: "Hello world!",\n  },\n};\n')),Object(l.b)("p",null,"This is how we would represent the document hierarchy above as a tree of nodes:"),Object(l.b)("img",{src:n(341).default}),Object(l.b)("h3",{id:"access-dom-elements"},"Access DOM elements"),Object(l.b)("p",null,"The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'document.querySelector("#mainHeader");\ndocument.querySelectorAll("p");\n')),Object(l.b)("p",null,"Both ",Object(l.b)("inlineCode",{parentName:"p"},".querySelector")," and ",Object(l.b)("inlineCode",{parentName:"p"},"querySelectorAll")," accept a CSS selector as an input.\n",Object(l.b)("inlineCode",{parentName:"p"},".querySelector")," selects only the first element it finds, ",Object(l.b)("inlineCode",{parentName:"p"},"querySelectorAll")," selects all elements (it returns a ",Object(l.b)("inlineCode",{parentName:"p"},"NodeList"),", which you can think of as being similar to an array; it is an ordered sequence of DOM elements which you can loop through like with an array. The difference is that many common array methods like ",Object(l.b)("inlineCode",{parentName:"p"},".map")," or ",Object(l.b)("inlineCode",{parentName:"p"},".concat")," can't be used on a ",Object(l.b)("inlineCode",{parentName:"p"},"NodeList"),". To turn a ",Object(l.b)("inlineCode",{parentName:"p"},"NodeList")," into an array, you can use ",Object(l.b)("inlineCode",{parentName:"p"},"Array.from"),", e.g. ",Object(l.b)("inlineCode",{parentName:"p"},'let elementArray = Array.from(document.querySelectorAll("div"));'),")."),Object(l.b)("h4",{id:"preparation-for-exercises"},"Preparation for exercises"),Object(l.b)("blockquote",null,Object(l.b)("hr",{parentName:"blockquote"}),Object(l.b)("p",{parentName:"blockquote"},"Let's work on the code provided here:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/js-exercises/tree/master/week-5/InClass/A-dom-manipulation"}),"https://github.com/CodeYourFuture/js-exercises/tree/master/week-5/InClass/A-dom-manipulation")),Object(l.b)("ol",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ol"},'Open "A-dom-manipulation" project in VS code'),Object(l.b)("li",{parentName:"ol"},"You will have to work on the ",Object(l.b)("inlineCode",{parentName:"li"},"exercise.js")," file for today's homework"),Object(l.b)("li",{parentName:"ol"},"View your changes by",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"using ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ritwickdey/vscode-live-server"}),"vscode-live-server")," plugin to get live updates of your changes.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Install the plugin"),Object(l.b)("li",{parentName:"ul"},"Right click on ",Object(l.b)("inlineCode",{parentName:"li"},"index.html"),' and select "Open with Live Server"'))),Object(l.b)("li",{parentName:"ul"},"or just open the ",Object(l.b)("inlineCode",{parentName:"li"},"index.html")," on your browser and refresh every time you change your code")))),Object(l.b)("hr",{parentName:"blockquote"})),Object(l.b)("h4",{id:"exercise-1"},"Exercise (1)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/*\nTask 1\n=======\nWrite JavaScript below that logs:\n    1. all the "p" element nodes of the document,\n    --\x3e should log a list of nodes with a length of 6\n\n    2. the first div element node\n    --\x3e should log the ".site-header" node\n\n    3. the element with id "jumbotron-text"\n    --\x3e should log the "#jumbotron-text" node\n\n    4. all the "p" elements contained inside  the .primary-content element node\n    --\x3e should log a list of nodes with a length of 3\n\n*/\n')),Object(l.b)("h3",{id:"attach-events-to-dom-elements"},"Attach events to DOM elements"),Object(l.b)("p",null,"Once you retrieve an element using ",Object(l.b)("inlineCode",{parentName:"p"},".querySelector"),", you can attach an ",Object(l.b)("strong",{parentName:"p"},"event")," to it. An event is any action that can be performed on that element. For now, we will just use the ",Object(l.b)("strong",{parentName:"p"},"click")," event:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let myButton = document.querySelector("#myButton");\nmyButton.addEventListener("click", alertSomething);\n\nfunction alertSomething() {\n  alert("Something");\n}\n')),Object(l.b)("p",null,"You will notice in the example that we passed a second argument to ",Object(l.b)("inlineCode",{parentName:"p"},"addEventListener"),". That second argument is the ",Object(l.b)("strong",{parentName:"p"},"function")," that we want to invoke when that event has happened."),Object(l.b)("h4",{id:"exercise-2"},"Exercise (2)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/*\nTask 2\n======\n\nWhen a user clicks the "ALERT" button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"\n*/\n')),Object(l.b)("p",null,"The elements returned by ",Object(l.b)("inlineCode",{parentName:"p"},"document.querySelector")," have the same properties as a normal HTML element: for example, you can get access to their css ",Object(l.b)("strong",{parentName:"p"},"styles"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let myElement = document.querySelector("#myElement");\nmyElement.style.backgroundColor = "red";\n')),Object(l.b)("h4",{id:"exercise-3"},"Exercise (3)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/*\nTask 3\n=======\n\nWrite JavaScript below that changes the background colour of the page when the "Change colour" button is clicked.\n*/\n')),Object(l.b)("h3",{id:"create-dom-elements"},"Create DOM elements"),Object(l.b)("p",null,"Using the ",Object(l.b)("inlineCode",{parentName:"p"},"document"),", you can also create new elements. These elements will not appear until you append them as a child of another element though:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let paragraph = document.createElement(\"p\"); // here we're just creating it, element is not visible yet\nmyElement.appendChild(paragraph); // now the element is added to our view, but it's empty\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"document.createElement")," accepts as an input any element type. So for example ",Object(l.b)("inlineCode",{parentName:"p"},'document.createElement("article")')," will create a new article element."),Object(l.b)("h4",{id:"exercise-4"},"Exercise (4)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/*\nTask 4\n======\n\nWhen a user clicks the "Add some text" button, a new paragraph should be added below the buttons that says "Read more below."\n*/\n')),Object(l.b)("h3",{id:"manipulate-dom-elements"},"Manipulate DOM elements"),Object(l.b)("p",null,"You can then change the text displayed inside elements using the ",Object(l.b)("inlineCode",{parentName:"p"},"innerText")," property:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen\n')),Object(l.b)("p",null,"We've been using ",Object(l.b)("inlineCode",{parentName:"p"},"document.querySelector")," to retrieve a single element.\nTo retrieve a list of multiple elements (that match a specific class name for example, or a specific tag) we use ",Object(l.b)("inlineCode",{parentName:"p"},"document.querySelectorAll"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'//change the background of all the paragraph items on our page\nlet paragraphs = document.querySelectorAll("p");\nfor (let i = 0; i < paragraphs.length; i++) {\n  paragraphs[i].style.backgroundColor = "blue";\n}\n')),Object(l.b)("p",null,"We've learned that ",Object(l.b)("inlineCode",{parentName:"p"},"style")," and ",Object(l.b)("inlineCode",{parentName:"p"},"innerText")," are properties of DOM elements. Image tags can also have ",Object(l.b)("inlineCode",{parentName:"p"},"width")," and ",Object(l.b)("inlineCode",{parentName:"p"},"height"),"."),Object(l.b)("p",null,"While it's really easy to change styles directly on elements using the ",Object(l.b)("inlineCode",{parentName:"p"},"style")," property, it is not usually a good idea to mix JavaScript and CSS (see separation of concerns in the first lesson). To solve this, we can use the ",Object(l.b)("inlineCode",{parentName:"p"},"className")," property to set the class for an element instead of changing its styles directly:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'//before: <div id="myContainer"></div>\nlet container = document.querySelector("#myContainer");\ncontainer.className = "largeBlock";\n//after: <div id="myContainer" class="largeBlock"></div>\n')),Object(l.b)("p",null,"To get the text from an Input field:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let updateTitleBtn = document.querySelector("#updateTitleBtn");\n\nupdateTitleBtn.addEventListener("click", function () {\n  let inputBox = document.querySelector("#titleInput");\n  let title = inputBox.value;\n\n  let titleElement = document.querySelector("#lessonTitle");\n  titleElement.innerText = title;\n  inputBox.value = title;\n});\n')),Object(l.b)("p",null,"The above waits for click on a button. When the button is clicked, it gets the input box element (",Object(l.b)("inlineCode",{parentName:"p"},"inputBox")," variable).\nTo get the entered text from it, we use the ",Object(l.b)("inlineCode",{parentName:"p"},"value")," property: ",Object(l.b)("inlineCode",{parentName:"p"},"let title = inputBox.value"),"."),Object(l.b)("h4",{id:"exercise-5"},"Exercise (5)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/*\nTask 5\n======\n\nWhen the "Larger links!" button is clicked, the text of all links on the page should increase.\n*/\n')),Object(l.b)("h2",{id:"feedback"},"Feedback"),Object(l.b)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future"),Object(l.b)(o.a,{module:"JavaScript Core 2",week:"Week 2",mdxType:"Feedback"}))}p.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a);n(48);function l(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return r.a.createElement("div",{className:"feedback"},r.a.createElement("div",{className:"feedback__wrapper"},r.a.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),r.a.createElement("center",null,r.a.createElement("p",null,"Not loading? Form can be found"," ",r.a.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",r.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},341:function(e,t,n){"use strict";n.r(t),t.default=n.p+"91f23c157d97a7987a67b729c1494a91.png"}}]);