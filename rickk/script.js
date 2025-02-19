let score=0;
   async function karakterleker() {
    
      let promise = await fetch('https://rickandmortyapi.com/api/character');
      let cucc = await promise.json();
      return cucc.results;
    }
    function gyoz() {
       alert("nyertéll!!");
          
          document.getElementById('option1').disabled = true;
          document.getElementById('option2').disabled = true;
          document.getElementById('option3').disabled = true;
      
          
          setTimeout(() => {
            score = 0; 
            updateScore();
            document.getElementById('option1').disabled = false;
            document.getElementById('option2').disabled = false;
            document.getElementById('option3').disabled = false;
            friss(); 
          }, 2000); 
        }
      

  async function friss() {
    let karakterek = await karakterleker();
    let randomIndex = Math.floor(Math.random() * karakterek.length);
    let karakter = karakterek[randomIndex];
    const kep = document.getElementById('character-image');
    kep.src = karakter.image;
    kep.style.display = 'block'; 

    function joe(selected,jo) {
        if (selected === jo) {
            score++;
            updateScore();
            if(score===10)
            { gyoz();}
      else{
        alert("helyes!")
      }
       
          
        } else {
          alert("nem jooooo de majdnem a jó megoldás ez volt: " + jo);
        }
        
        setTimeout(() => {
            friss();
          }, 500);
      }
      
      
  
    document.getElementById('species').innerHTML = "Species: " + karakter.species;

    let options = [karakter.name];
    
    while (options.length < 3) {
      let nemjo = karakterek[Math.floor(Math.random() * karakterek.length)].name;
      if (!options.includes(nemjo)) {
        options.push(nemjo);
      }
    }
    options = options.sort(() => Math.random() - 0.5);


    document.getElementById('option1').innerHTML = options[0];
    document.getElementById('option2').innerHTML = options[1];
    document.getElementById('option3').innerHTML = options[2];
    document.getElementById('option1').onclick = () =>joe(options[0], karakter.name);
    document.getElementById('option2').onclick = () => joe(options[1], karakter.name);
    document.getElementById('option3').onclick = () =>joe(options[2], karakter.name);
  }
  function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
  }
  function main() {
   
    friss();
  }

  main();
