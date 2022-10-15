let menu =document.querySelector('menu-bar');
let navbar =document.querySelector('navbar');

menu.classList.toggle('fa-time');
navbar.classList.toggle('active');

windowscrollon = () =>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
    if(window.scrolly > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
    function loader(){
        document.querySelector('preloader').classList.add(fade-out);
    }
    function fadeout(){
        setInterval(loader,3000);
    }
    window  .onload = fadeout();
}




window.addeventlistener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrilly > 0);
})
