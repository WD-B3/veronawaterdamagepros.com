(function(){
var b=document.getElementById('menubtn'),m=document.getElementById('mobmenu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.textContent=o?'Close':'Menu';});}
var items=document.querySelectorAll('.navlinks>li.has-drop>button');
for(var i=0;i<items.length;i++){items[i].addEventListener('click',function(e){var li=e.currentTarget.parentNode;var o=li.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o?'true':'false');});}
})();
