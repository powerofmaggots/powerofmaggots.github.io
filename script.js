let pont = 0;



let dobozok = document.querySelectorAll('.negyzet');
function pontok(e)
 {
    if(e.target.classList.contains('cel')){
        pont+=1;
        e.target.classList.toggle('cel');
        let célpont = ujdoboz(dobozok);
        let alma=pont;
        célpont.classList.toggle('cel');
        
        document.getElementById("output").innerHTML = pont;
      }
}
let count = 0;
setInterval(() => {
    count++;
    document.getElementById("timer").textContent = count;
}, 1000);

 
function ujdoboz(dobozok){
    return dobozok[Math.floor(Math.random()*16)];
    
}


function main(){



    
    for (const doboz of dobozok) {
        doboz.addEventListener('click',pontok);
    }   
    let célpont = ujdoboz(dobozok);
    célpont.classList.toggle('cel');
 
}



main()