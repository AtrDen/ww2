let zburger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-linck')

zburger.addEventListener('click',
 function (){
  zburger.classList.toggle('burger--active');
  menu.classList.toggle('header-nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
    el.addEventListener('click', function(){
    zburger.classList.remove('burger--active');
    menu.classList.remove('heder-nav--active');
    document.body.classList.remove('stop-scroll');
    })
})


let articlesMore = document.querySelector('.articles-more');
let articles = document.querySelectorAll('.articles-item');

articlesMore.addEventListener('click', 

function(){

  articles.forEach(function (el) {
    el.classList('articles-item--visible')
  });

  articlesMore.closest('articles-center').classList.add('articles-center');

})