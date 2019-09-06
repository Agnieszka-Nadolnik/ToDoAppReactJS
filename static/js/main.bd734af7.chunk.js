(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),c=(a(32),a(33),a(34),a(35),a(19)),l=a(9),s=a(10),u=a(12),d=a(11),h=a(13),m=a(7),f=function(){return o.a.createElement(m.a,{type:"bounce"},o.a.createElement("h1",null,"To Do List"))},p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",date:a.minDate},a.handleDateChange=function(e){a.setState({date:e.target.value})},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleClick=function(e){e.preventDefault(),console.log("click");var t=a.state,n=t.text,o=t.date;n.length>0?a.props.add(n,o)&&a.setState({text:"",date:a.minDate}):alert("Brak nazwy zadania!")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"add_task"},o.a.createElement("form",{className:"task_form"},o.a.createElement("label",{htmlFor:"title"}," Dodaj zadanie"),o.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Nazwa zadania",value:this.state.text,onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"date"}),o.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,onChange:this.handleDateChange,style:{width:"50%"}}),o.a.createElement(m.b,{color:"unique",style:{width:"50%",margin:"10px 0"},type:"submit",onClick:this.handleClick},"Dodaj")))}}]),t}(n.Component),g=function(e){var t=e.task,a=t.text,n=t.date,i=t.id,r=t.active,c=t.finishDate,l={width:"70px",height:"35px",margin:"10px 10px 0 0",padding:0,fontSize:"10px"},s={fontSize:"15px",margin:0};return r?o.a.createElement("div",null,o.a.createElement("p",{style:s},a),o.a.createElement("p",{style:s},"Data rozpocz\u0119cia: ",n),o.a.createElement(m.b,{style:l,color:"unique",onClick:function(){return e.change(i)}},"Zako\u0144cz"),o.a.createElement(m.b,{style:l,color:"amber",onClick:function(){return e.delete(i)}},"Usu\u0144")):o.a.createElement("div",null,o.a.createElement("p",{style:s},a),o.a.createElement("p",{style:s},"Data rozpocz\u0119cia: ",n),o.a.createElement("p",{style:s},"Data zako\u0144czenia: ",c),o.a.createElement(m.b,{style:l,color:"amber",onClick:function(){return e.delete(i)}},"Usu\u0144"))},k=function(e){var t=e.tasks.filter(function(e){return!0===e.active}),a=e.tasks.filter(function(e){return!1===e.active}),n=t.map(function(t){return o.a.createElement(g,{key:t.id,task:t,delete:e.delete,change:e.change})}),i=a.map(function(t){return o.a.createElement(g,{key:t.id,task:t,delete:e.delete,change:e.change})});return o.a.createElement("section",{className:"all_lists"},o.a.createElement("div",{className:"to_do_list",id:"test"},o.a.createElement("h4",null,"Lista zada\u0144"),n.length>0?n:o.a.createElement("p",null,"Brak zada\u0144")),o.a.createElement("div",{className:"done_task_list"},o.a.createElement("h5",null,"Zadania zako\u0144czone"),i))},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).counter=3,a.state={tasks:[]},a.handleDeleteTask=function(e){console.log("usuni\u0119te"+e);var t=Object(c.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.handleChangeTaskStatus=function(e){console.log("edycja"+e);var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).toLocaleDateString())}),a.setState({tasks:t})},a.addTask=function(e,t){var n={id:a.counter,text:e,date:t,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(c.a)(e.tasks),[n])}}),!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement(f,null),o.a.createElement("section",{className:"task_container"},o.a.createElement(p,{add:this.addTask}),o.a.createElement(k,{tasks:this.state.tasks,delete:this.handleDeleteTask,change:this.handleChangeTaskStatus})))}}]),t}(n.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ToDoAppReactJS",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ToDoAppReactJS","/service-worker.js");E?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.bd734af7.chunk.js.map