'use strict';
let Randomizer = document.querySelector('#random');       // Valitsee Random napin HTML tiedostosta
Randomizer.addEventListener('click', function(){      // Lisätään kuuntelijafunktio, joka suorittaa sisälle luotu funktiot, kun sitä painaa
  let nappirandom = document.getElementById('hakunappi')   
  let Main1 = document.querySelector('main'); // Luodaan Mainille arvo
  let osoite = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'; // random-haun api osoite
  let Keho1 = document.querySelector('body'); // LIsätään bodylle arvo
                                            
  // API fetch haku alkaa tästä
  fetch(osoite).then(res => res.json()).then(data => { 

    let data2 = data.drinks
    console.log(data)       // Konsoliin lisätään tiedot
    
    // Luodaan funktio, jossa lisätään konsoliin saadut tiedot sivustoon
    function reseptit (cv, index, data2) {

      let Figu = document.createElement('figure');
      let Header2 = document.createElement('h2');
      let DrinkImage = document.createElement('img');
      let Paragraph = document.createElement('p');
      let Header3 = document.createElement('h3')
      let Ohjeet = document.createElement('h3')
      const Aineet = document.createElement('ul')
      let Brk = document.createElement('br')
      let Head = document.createElement('h3')
      Head.innerText = 'Type' // Innertextillä lisätään tiedot HTML tageihin, kuten headeriin jne.

      let Kategoria = document.createElement('p')
      Kategoria.innerText = data2[index].strCategory // Innertextillä lisätään tiedot HTML tageihin, kuten headeriin jne.

      Header3.innerText = 'Ingredients ' 

      Ohjeet.innerText = 'Instructions'

      let Annos = document.createElement('h3')

      Annos.innerText = 'Serving Method'

      let Metodi = document.createElement('p')
      Metodi.innerText = 'Serve in a ' + data2[index].strGlass + '.' // Innertextillä lisätään tiedot HTML tageihin, kuten headeriin jne.

      const Ainesosat = []; // Tässä luodaan taulukot ainesosille
      Ainesosat[0] = data2[index].strIngredient1
      Ainesosat[1] = data2[index].strIngredient2
      Ainesosat[2] = data2[index].strIngredient3
      Ainesosat[3] = data2[index].strIngredient4
      Ainesosat[4] = data2[index].strIngredient5
      Ainesosat[5] = data2[index].strIngredient6
      Ainesosat[6] = data2[index].strIngredient7
      Ainesosat[7] = data2[index].strIngredient8
      Ainesosat[8] = data2[index].strIngredient9
      Ainesosat[9] = data2[index].strIngredient10
      Ainesosat[10] = data2[index].strIngredient11
      Ainesosat[11] = data2[index].strIngredient12
      Ainesosat[12] = data2[index].strIngredient13
      Ainesosat[13] = data2[index].strIngredient14
      Ainesosat[14] = data2[index].strIngredient15

      const Maara = []; // Tässä toinen taulukko ainesosien määrille
      Maara[0] = data2[index].strMeasure1;
      Maara[1] = data2[index].strMeasure2;
      Maara[2] = data2[index].strMeasure3;
      Maara[3] = data2[index].strMeasure4;
      Maara[4] = data2[index].strMeasure5;
      Maara[5] = data2[index].strMeasure6;
      Maara[6] = data2[index].strMeasure7;
      Maara[7] = data2[index].strMeasure8;
      Maara[8] = data2[index].strMeasure9;
      Maara[9] = data2[index].strMeasure10;
      Maara[10] = data2[index].strMeasure11;
      Maara[11] = data2[index].strMeasure12;
      Maara[12] = data2[index].strMeasure13;
      Maara[13] = data2[index].strMeasure14;
      Maara[14] = data2[index].strMeasure15;

      // Tämä funktio vaihtaa ainesosan tai määrän sanoilla "Your choice", jos sen arvo on "null" tai "undefined".
      function del (cv, index, measure) {
        if (measure[index] == null) {
          measure[index] = 'Your choice';
        }
        if (measure[index] === undefined) {
          measure[index] = 'Your choice';
        }
      }
      Maara.forEach(del)


      // For looppi lisää arvot listaan.
      for (let i = 0; i < Ainesosat.length; i++) {
        let li = document.createElement('li')
        li.innerText = Ainesosat[i] + ' : ' + Maara[i]
        Aineet.appendChild(li)
        if (Ainesosat[i] === '') {
          Aineet.removeChild(li)

        } else if (Ainesosat[i] == null) {
          Aineet.removeChild(li)
        }
      }

      // Nämä ovat kielinapit, eli luodaan button elementti ja lisätään innertextiin kieli 
      let NappiEng = document.createElement('button')
      NappiEng.innerText = 'ENG'

      let NappiDeu = document.createElement('button')
      NappiDeu.innerText = 'DEU'

      let NappiFra = document.createElement('button')
      NappiFra.innerText = 'FRA'

      let NappiIta = document.createElement('button')
      NappiIta.innerText = 'ITA'

      let NappiEs = document.createElement('button')
      NappiEs.innerText = 'ES'

      
      // Tässä lisätään kuuntelijat kielinapeille ja lisätään aiemmin luotuun paragraph arvoon eri kielet, jos niitä ei löydy niin siihen tulee "Not available".
      
      NappiDeu.addEventListener('click', function() {
        Paragraph.innerText = data2[index].strInstructionsDE
        if ( data2[index].strInstructionsDE == null)
          Paragraph.innerText = 'Not available'
        else {
          Paragraph.innerText = data2[index].strInstructionsDE
        }
      })

      NappiFra.addEventListener('click', function() {
        Paragraph.innerText = data2[index].strInstructionsFR
        if ( data2[index].strInstructionsFR == null)
          Paragraph.innerText = 'Not available'
        else {
          Paragraph.innerText = data2[index].strInstructionsFR
        }
      })
      NappiIta.addEventListener('click', function() {
        Paragraph.innerText = data2[index].strInstructionsIT
        if ( data2[index].strInstructionsIT == null)
          Paragraph.innerText = 'Not available'
        else {
          Paragraph.innerText = data2[index].strInstructionsIT
        }
      })
      NappiEs.addEventListener('click', function() {
        Paragraph.innerText = data2[index].strInstructionsES
        if ( data2[index].strInstructionsES == null)
          Paragraph.innerText = 'Not available'
        else {
          Paragraph.innerText = data2[index].strInstructionsES
        }
      })

      DrinkImage.src = data2[index].strDrinkThumb // Juomien kuvat lisätään innertextillä



      Header2.innerText = data2[index].strDrink // Juoman nimi lisätään innertextillä

      Paragraph.innerText = data2[index].strInstructions // Juomien ohjeet lisätään innertextillä

      // Sama kieli nappi, kuin aikaisemmin nyt vaan englanniksi
      NappiEng.addEventListener('click', function() {
        Paragraph.innerText = data2[index].strInstructions
        if ( data2[index].strInstructions == null)
          Paragraph.innerText = 'Not available'
        else {
          Paragraph.innerText = data2[index].strInstructions
        }
      })

      // Tässä kohtaa appendChildiä käyttäen lisätään kaikki arvot figureen
      Figu.appendChild(Header2)
      Figu.appendChild(DrinkImage)
      Figu.appendChild(Ohjeet)
      Figu.appendChild(Paragraph)
      Figu.appendChild(Brk)
      Figu.appendChild(NappiEng)
      Figu.appendChild(NappiDeu)
      Figu.appendChild(NappiFra)
      Figu.appendChild(NappiIta)
      Figu.appendChild(NappiEs)
      Figu.appendChild(Header3)
      Figu.appendChild(Aineet)
      Figu.appendChild(Annos)
      Figu.appendChild(Metodi)
      Figu.appendChild(Head)
      Figu.appendChild(Kategoria)
      Main1.appendChild(Figu)
      Keho1.appendChild(Main1)

      //Tämä poistaa vanhan figure arvon napin painalluksella
      Randomizer.addEventListener('click', function() {
        Figu.remove()
      })
      // Hakunappi poistaa myös vanhan arvon
      nappirandom.addEventListener('click', function (){
        Figu.remove()
      })
    }

    data2.forEach(reseptit)
  })



})
