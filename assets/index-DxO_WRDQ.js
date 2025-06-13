(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function s(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const u=[{id:1,nome:"Royal Oud",descricao:"Uma fragrância luxuosa com notas de oud e especiarias raras",preco:899.9,imagem:"/img/logo.png"},{id:2,nome:"Elixir Imperial",descricao:"Blend exclusivo de ingredientes nobres",preco:749.9,imagem:"/img/logo.png"},{id:3,nome:"Essência Sublime",descricao:"Composição única de flores preciosas",preco:679.9,imagem:"/img/logo.png"}],g=[{id:1,nome:"Essência de Jasmim",descricao:"Uma fragrância floral suave e elegante",preco:299.9,imagem:"/img/logo.png"},{id:2,nome:"Noites de Âmbar",descricao:"Fragrância oriental misteriosa",preco:349.9,imagem:"/img/logo.png"},{id:3,nome:"Brisa Marinha",descricao:"Frescor aquático revigorante",preco:279.9,imagem:"/img/logo.png"},{id:4,nome:"Flor de Lótus",descricao:"Uma fragrância delicada e serena",preco:320,imagem:"/img/logo.png"},{id:5,nome:"Madeira de Cedro",descricao:"Fragrância amadeirada e terrosa",preco:360,imagem:"/img/logo.png"},{id:6,nome:"Cítricos Refrescantes",descricao:"Uma explosão de frescor cítrico",preco:280,imagem:"/img/logo.png"}];function p(e){return`<div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative pb-2/3">
                <img src="${e.imagem}" alt="${e.nome}" class="absolute h-full w-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-playfair font-bold text-gray-900">${e.nome}</h3>
                <p class="mt-1 text-gray-500">${e.descricao}</p>
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-amber-800 font-bold">${s(e.preco)}</span>
                    <div class="flex gap-2">
                        <button id="adicionar-produto" class="btn-comprar bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                            Comprar
                        </button>
                        <button id="remover-produto" class="btn-remover bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>`}const f=document.querySelector("#colecao-container");for(const e of u)f.insertAdjacentHTML("beforeend",p(e));function h(e){return`<div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative pb-2/3">
                <img src="${e.imagem}" alt="${e.nome}" class="absolute h-full w-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-playfair font-bold text-gray-900">${e.nome}</h3>
                <p class="mt-1 text-gray-500">${e.descricao}</p>
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-amber-800 font-bold">${s(e.preco)}</span>
                    <div class="flex gap-2">
                        <button id="adicionar-produto" class="btn-comprar bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                            Comprar
                        </button>
                        <button id="remover-produto" class="btn-remover bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>`}const v=document.querySelector("#fragancias-container");for(const e of g)v.insertAdjacentHTML("beforeend",h(e));let a=0;const b=document.querySelectorAll("#adicionar-produto"),y=document.querySelectorAll("#remover-produto"),x=document.getElementById("carrinho-painel"),d=document.getElementById("carrinho-sidebar"),l=document.getElementById("carrinho-overlay"),w=document.getElementById("fechar-carrinho");y.forEach(e=>{e.addEventListener("click",()=>{if(a>0){const o=document.getElementById("carrinho-quantidade"),c=e.closest(".bg-white").querySelector("h3").textContent,t=document.getElementById("carrinho-items");Array.from(t.children).map(n=>{n.querySelector("h3").textContent===c&&(n.remove(),a--,o.textContent=a)})}})});b.forEach(e=>{e.addEventListener("click",()=>{a++;const o=e.closest(".bg-white"),i=o.querySelector("h3").textContent,c=o.querySelector(".text-amber-800").textContent,t=o.querySelector("img").src,r=document.getElementById("carrinho-items"),n=document.getElementById("carrinho-quantidade");n.textContent=a;const m=`
            <div class="flex items-center space-x-4 p-4 border-b">
                <img src="${t}" alt="${i}" class="w-16 h-16 object-cover rounded">
                <div class="flex-1">
                    <h3 class="font-medium">${i}</h3>
                    <p class="text-amber-800">${c}</p>
                </div>
                <button id="remover-item" class="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        `;r.insertAdjacentHTML("beforeend",m),document.getElementById("carrinho-sidebar").classList.remove("translate-x-full")})});document.addEventListener("click",e=>{if(e.target.closest("#remover-item")){const o=e.target.closest(".flex.items-center");o.querySelector("h3").textContent;const i=document.getElementById("carrinho-quantidade");a--,i.textContent=a,o.remove()}});x.addEventListener("click",()=>{d.classList.remove("translate-x-full"),l.classList.remove("hidden")});w.addEventListener("click",()=>{d.classList.add("translate-x-full"),l.classList.add("hidden")});
