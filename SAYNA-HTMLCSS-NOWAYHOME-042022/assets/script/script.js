
// surligne 
 let liste = document.querySelectorAll(' ul li a');

 for (let i=0; i < liste.length; i++) {

     let li = liste[i];

     li.addEventListener('mouseover', function () {
        li.style.textDecoration='line-through';
      });
   li.addEventListener('mouseout', function () {
    li.style.textDecoration='none';
     
  });
 }



// animation sur le boutton
let button = document.getElementsByClassName('btn');

for (let i=0; i < button.length; i++) {

    let btn = button[i];

    btn.addEventListener('mouseover', function () {

    let arrierePlan = window.getComputedStyle(btn).getPropertyValue('background-color');
        if (arrierePlan=='rgb(255, 255, 255)') {
            btn.style.backgroundColor='inherit';
            btn.style.color='white';
            btn.style.border=' 3px solid white'
        } else {
            btn.style.backgroundColor='white';
            btn.style.color=' #b11313';
            btn.style.border=' 3px solid white'
        }
     
     });
     btn.addEventListener('mouseout', function () {

        let arrierePlan = window.getComputedStyle(btn).getPropertyValue('background-color');
        if (arrierePlan=='rgb(255, 255, 255)') {
            btn.style.backgroundColor='inherit';
            btn.style.color='white';
            btn.style.border=' 3px solid white'
        } else {
            btn.style.backgroundColor='white';
            btn.style.color=' #b11313';
            btn.style.border=' 3px solid white'
        }
       
     });
}

