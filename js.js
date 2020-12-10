let myProject = () => {
    const total = document.querySelectorAll('.tab-item');
    const skill = document.querySelector('.skill');
    const exp = document.querySelector('.experience');
    const education = document.querySelector('.education');
    const listDataItems = document.querySelectorAll('.demo .box');
    const listSrcs = document.querySelectorAll('.demo .box .img img');
    const dowload = document.querySelector('#dowloadCv');
    const body = document.body;

//showmenu
    const btn = document.querySelector(".btn");
    const menu = document.querySelector(".menu"); 

    btn.addEventListener('click',function(){
    //    
       
        if(menu.style.display == "block"){
           menu.style.display = "none";
          
        }else{
           menu.style.display = "block";          
        }
}) 
menu.querySelector('.menu__close').addEventListener('click', function(){
    menu.style.display = "none";
})
//showmenu
    total.forEach(function (index) {
        index.addEventListener('click', function(e){
            if(e.target == total[0]){
                education.style.display = 'none';
                skill.style.display = 'block';
                exp.style.display = 'none'
            }
            else if(e.target == total[1]){
                education.style.display = 'none';
                skill.style.display = 'none';
                exp.style.display = 'block'
            }
            else if(e.target == total[2]){
            education.style.display = 'block';
            skill.style.display = 'none';
            exp.style.display = 'none'
            }
        })
    })

//

//show backTop
    const backTop = document.querySelector('.backTop');
    window.addEventListener('scroll', function(e){
       // console.log(window.pageYOffset);
        if(window.pageYOffset > 200){
           backTop.classList.add('activeTop');
        }
        else{
            backTop.classList.remove('activeTop');
           
        }
        // backTop.addEventListener('click', function(){
        //     window.pageYOffset = 0;
        // })
    })
    
//

    //xu ly project
    const projects = document.querySelectorAll('.row__nav--items li a');
    const active = document.querySelector('.row__nav--items');
    
    active.addEventListener('click',function(e){
            if(!e.target.classList.contains('active')){
                active.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
            }
            
            //
    const target = e.target.getAttribute('data-target');
        listDataItems.forEach(function(items){
            // const classRandom = ['show', 'show1', 'show2'];
            // let numbers = (Math.floor(Math.random()*classRandom.length));
            // let clas= classRandom[numbers];
        
            if(target === items.getAttribute('data-app')||target === 'all'){
                items.classList.remove('hide');
                items.classList.add('show1');
                
            }
            else{
                items.classList.remove('show1');
                items.classList.add('hide');
            }
        })
        
        
    })

    
    //
    const img = document.querySelector('#image');
    const closeImg = document.querySelector('#closeImg');
    const showText = document.querySelector('#image .row__1')
    const imgShow = document.querySelector('#image .img img');
    listSrcs.forEach(function (element) {
        element.addEventListener('click',function(event){
            img.style.display = 'block';
            img.style.overflow = 'scroll';
            body.style.overflow="hidden" 
            const listSrc = event.target.src;
           console.log(listSrc);
           if(event.target){
               imgShow.src = `${listSrc}`;   
           }
        })
    })
    
//popup 
    let popup = document.querySelector('.popup');
    popup.addEventListener('click',function(){
        
        // showText.classList.toggle('showText');
        if(!showText.classList.contains('showText')){
            showText.classList.add('showText');
            popup.textContent = 'Show';
        }
        else{
            showText.classList.remove('showText');
            popup.textContent = 'Hide';
        }
        

    })

    //closeimg
    closeImg.addEventListener('click',function(){
        img.style.display = 'none';
        body.style.overflow="visible";    
    })
}


//darkLight
const body = document.body;
const changeColor = document.querySelector('.darkMode img');
const rain = document.querySelector('.rain');
changeColor.addEventListener('click',function(e){
    console.log(e.target.src);
    if(e.target.src=='http://192.168.1.22:5500/img/moon-regular.svg'||e.target.src=="https://dinhvietsuu.github.io/Mycv/img/moon-regular.svg"){
        changeColor.src = 'img/cloud-sun-solid.svg';
        body.style.backgroundColor = 'black';
        rain.style.display = 'block';

    }else {
        changeColor.src ='img/moon-regular.svg';
        body.style.backgroundColor = 'white';
        rain.style.display = 'none';
        
    }
    
   
})

myProject();    
    



   







