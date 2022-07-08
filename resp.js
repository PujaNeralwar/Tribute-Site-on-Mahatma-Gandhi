burger = document.querySelector('.burger')
navbar= document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist= document.querySelector('.navlist')

burger.addEventListener('click',()=>{  
    navbar.classList.toggle('h-nav')
    rightnav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
})
navlist.addEventListener('click',()=>{  
    navbar.classList.toggle('h-nav')
    rightnav.classList.toggle('v-class')
   navlist.classList.toggle('v-class')
})