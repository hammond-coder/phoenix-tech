
function hamburgerToggle(){
    let navLink=document.getElementsByClassName('nav-link');
    
    for(let i=0;i<navLink.length;i++){
        if (navLink[i].style.display=='none'){
            navLink[i].style.display='block';
        }
        else{
            navLink[i].style.display='none';
        }
    } 
    }  
     