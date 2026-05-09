let hamburger = document.querySelector(".hamburger");
let navHamburgerList = document.querySelector('.navHamburgerList');
let crossicon = document.querySelector('.fa-bars');

let change = 0;
hamburger.addEventListener('click', function(){

navHamburgerList.classList.toggle('navHamburgerList-active')

   if(change === 0){
       crossicon.classList.remove('fa-bars');
       crossicon.classList.add('fa-xmark');
        change = 1;
   }else{
    crossicon.classList.remove('fa-xmark');
    crossicon.classList.add('fa-bars'); 
    change = 0;
   }
})
