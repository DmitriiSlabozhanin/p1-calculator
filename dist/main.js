(()=>{"use strict";const e=e=>{const t="Загрузка из сервера . . .",o=document.getElementById(e),n=document.createElement("div");n.textContent=t,n.style.cssText="font-size:1.8rem;color:white;padding:5px 0",o.addEventListener("submit",(e=>{e.preventDefault(),o.appendChild(n),n.textContent=t;const a=new FormData(o);let r={};a.forEach(((e,t)=>{r[t]=e})),(e=>fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(r).then((e=>{if(200!==e.status)throw new Error("Response status code is not a 200");n.textContent="Спасибо! Данные получены! Мы скоро с Вами свяжемся!"})).catch((e=>{n.textContent="Что-то пошло не так . . ."})),o.querySelectorAll("input").forEach((e=>{e.value=""})),setTimeout((()=>{n.remove()}),7500)}))};(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),a=e=>e>=0&&e<10?"0"+e:e,r=()=>{const e=(()=>{const e=(new Date("9 13 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}})();e.timeRemaining>0?(t.textContent=a(e.hours),o.textContent=a(e.minutes),n.textContent=a(e.seconds)):(t.textContent="00",o.textContent="00",n.textContent="00")};r(),setInterval(r,1e3)})(),(e=>{const t=document.querySelector(".menu"),o=document.querySelector("menu"),n=e=>{o.style.transform&&"translateX(-100%)"!==o.style.transform?o.style.transform="translateX(-100%)":window.innerWidth>768?(()=>{let e=0,t=0,n=setInterval((()=>{e++,t=(e=>.07*e**2-99)(e),o.style.transform=`translateX(${t}%)`,(t>100||e>200)&&(o.style.transform="translate(100%)",clearInterval(n))}),10)})():o.style.transform="translateX(100%)"};o.addEventListener("click",(e=>{const t=e.target;if(t.matches(".close-btn"))n();else{if(!t.matches("a"))return;n()}})),t.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close"),a=e=>{"Escape"!==e.key&&"Escape"!==e.code||r()},r=t=>{let o=e.style.opacity;if(window.innerWidth>768){let t=0,n=setInterval((()=>{o>0||t>100?(e.style.opacity=o,o=parseInt(10*(o-.1))/10):(e.style.display="none",e.style.opacity=1,clearInterval(n))}),30)}else e.style.display="none",e.style.opacity=1;document.removeEventListener("keydown",a)},l=o=>{t.style.top="-382px",e.style.display="block",t.style.display="block";let n=Math.ceil(.1*window.innerHeight),r=0;if(e.style.opacity=r,window.innerWidth>768){let o=0,a=setInterval((()=>{o++,e.style.opacity=r,r=r<1?parseInt(100*(r+.03))/100:1;let l=9*o-382;t.style.top=`${l}px`,(l>n||o>400)&&(e.style.opacity=1,clearInterval(a))}),6)}else e.style.display="block",e.style.opacity=1,t.style.top=`${n}px`;document.addEventListener("keydown",a)};o.forEach((e=>{e.addEventListener("click",l)})),e.addEventListener("click",(t=>{const o=t.target;if(o===n)r(t);else{if(o!==e)return;r(t)}})),t.style.left=50-15500/window.innerWidth+"%"})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab"),n=e=>{t.forEach(((t,n)=>{n===e?(t.classList.add("active"),o[n].classList.remove("d-none")):(t.classList.remove("active"),o[n].classList.add("d-none"))}))};n(0),e.addEventListener("click",(e=>{let o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o&&n(t)}))}))})(),(()=>{(()=>{const e=document.querySelector(".portfolio-dots");document.querySelectorAll(".portfolio-item").forEach(((t,o)=>{const n=document.createElement("li");n.classList.add("dot"),0===o&&n.classList.add("dot-active"),e.append(n)}))})();const e=document.querySelectorAll(".portfolio-item"),t=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content");let n,a=0;const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{r(e,a,"portfolio-item-active"),r(t,a,"dot-active"),a++,a>=e.length&&(a=0),l(e,a,"portfolio-item-active"),l(t,a,"dot-active")},c=(e=3e3)=>{n=setInterval(s,e)};o.addEventListener("click",(o=>{o.preventDefault();const n=o.target;n.matches(".portfolio-btn, .dot")&&(r(e,a,"portfolio-item-active"),r(t,a,"dot-active"),n.matches("#arrow-right")?a++:n.matches("#arrow-left")?a--:n.matches(".dot")&&t.forEach(((e,t)=>{e===n&&(a=t)})),a>=e.length&&(a=0),a<0&&(a=e.length-1),l(e,a,"portfolio-item-active"),l(t,a,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&c(2e3)})),c(2e3)})(),document.querySelector(".command").querySelectorAll(".command__photo").forEach((e=>{let t;e.addEventListener("mouseenter",(o=>{o.target.matches(".command__photo")&&(t=e.src,e.src=e.dataset.img)})),e.addEventListener("mouseleave",(o=>{o.target.matches(".command__photo")&&t&&(e.src=t)}))})),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll("input");e.forEach((e=>{e.classList.contains("calc-type")||e.addEventListener("input",(e=>{let t=e.target;e.target.value=t.value.replace(/[^\d]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(t=>{const o=t.target;let n=o.value;if("user_name"===e.name)o.value=o.value.replace(/[^а-яё\s]/gi,"");else if("user_message"===e.name)o.value=o.value.replace(/[^а-яё0-9\s\,\.\!\?\:\;\-]/gi,"");else if("user_email"===e.name){const e=/([^a-z@0-9\_\-\.\!\~\*\'])|((?<=^)@+)|((?<=@.*)@+)|((?<=[@\.])[@\.]+)/gi;o.value=n.replace(e,"")}else if("user_phone"===e.name){const e=/([^\d\+])|((?<=.{12,}).)|((?<!^)\++)/gi;o.value=n.replace(e,"")}})),e.addEventListener("blur",(e=>{(e=>{let t=e.value;if("user_message"===e.name)e.value=t.replace(/((^[\s\-]+))|((?<=\s)\s+)|((?<=\-)\-+)|([\s\-]+$)/g,"");else if("user_name"===e.name){if(t.trim()){let e=t.match(/[а-яё]+/gi);e=e.map((e=>e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase())),t=e.join(" ")}else t="";e.value=t}else"user_email"===e.name?e.value=t.replace(/(?<=@)@+/g,""):"user_phone"===e.name&&(e.value=t.replace(/((?<=\()\({1,})|((?<=\))\){1,})|((?<=\-)\-{1,})|((?<=\+)\+{1,})/g,""))})(e.target)}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=t.querySelector(".calc-type"),n=t.querySelector(".calc-square"),a=t.querySelector(".calc-count"),r=t.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("change",(t=>{let s=t.target;s!==o&&s!==n&&s!==a&&s!==r||(()=>{let t=o.options[o.selectedIndex].value,s=+n.value,c=1,i=1,d=0;a.value&&a.value>1?c+=(+a.value-1)/10:c=1,r.value&&r.value<5?i*=2:r.value<10&&(i*=1.5),t&&s&&(d=parseInt(e*t*s*c*i*100)/100),l.textContent=d})()}))})(100),e("form1"),e("form2"),e("form3")})();