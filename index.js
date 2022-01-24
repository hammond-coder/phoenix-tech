
document.getElementById("hide-btn").addEventListener("click",myBtn);
document.getElementById("show-btn").addEventListener("click",showBtn);
function myBtn(){
    let paragraph=document.getElementById('sentence');
    paragraph.style.display="none";
}
function showBtn(){
    let paragraph=document.getElementById('sentence');
    paragraph.style.display="block";
}

let hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click',menuToggle);


function menuToggle(){
    let items=document.getElementsByClassName('items');
    for(let i=0;i<items.length;i++){

    if (items[i].style.display=='none'){
        items[i].style.display='block';
        
    }
    else{
        items[i].style.display='none';
    }
}
}
