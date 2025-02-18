const képek = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];
let pakli = [...képek, ...képek];
pakli = pakli.sort(() => Math.random() - 0.5);  
let forditott = 0;  
let felforditott = [];
let fel=0;
function kartyaak() {
  for (let i = 1; i <= pakli.length; i++) {
    let alma = document.getElementById(i.toString());
    alma.children[0].innerHTML = pakli[i - 1];
    alma.children[0].style.display = 'none';  
    alma.classList.remove('flipped');  
  }
}

function fordit(e) {
  const clickedCard = e.target;

  if (clickedCard.children[0].style.display === 'block' || clickedCard.classList.contains('flipped')) {
    return;
  }

  clickedCard.children[0].style.display = 'block';  
  clickedCard.classList.add('flipped');
  felforditott.push(clickedCard);  
  forditott++;  

  if (forditott === 2) {
    disableClicks(true);

    if (felforditott[0].children[0].innerHTML === felforditott[1].children[0].innerHTML) {
      felforditott = [];  
      forditott = 0;  
      fel++;
      disableClicks(false);  
    } else {
      setTimeout(() => {
        felforditott[0].children[0].style.display = 'none';
        felforditott[1].children[0].style.display = 'none';
        felforditott[0].classList.remove('flipped');
        felforditott[1].classList.remove('flipped');
        felforditott = [];  
        forditott = 0;  
        disableClicks(false);  
      }, 1000);

    }
if (fel===18)
{
    alert('nyertél!');
}

  }

}

function disableClicks(state) {
  const paklim = document.querySelectorAll('.kartya');
  paklim.forEach(card => {
    card.style.pointerEvents = state ? 'none' : 'auto';
  });
}

function main() {
  let paklim = document.querySelectorAll('.kartya');  
  
  paklim.forEach((kar) => {
    kar.addEventListener('click', fordit);
  });
}

kartyaak();
main();
