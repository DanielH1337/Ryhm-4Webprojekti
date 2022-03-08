'use strict';
let fnappi = document.getElementById('fetter');

fnappi.addEventListener('click', function() {

// Hakunapille evemt listener

  let nappirandom = document.getElementById('random')
  let kho = document.querySelector('body');
  let hku2 = document.querySelector('input');
  let main = document.querySelector('main');

  // Haetaan api osoite

  let addres = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + hku2.value;

  // Haetaan fetchillä json muodolla


  fetch(addres).then(res => res.json()).then(data => {


    // Toiminto missä sivulle tulee teksti 'No result' kun tuloksia ei löydy //

    let dta2 = data.drinks
    let result = document.createElement('h2')
    result.innerText = 'No result'
    if (dta2 === null) {
      main.appendChild(result)
    }


    // No result toiminnon poisto

    fnappi.addEventListener('click', function() {
      result.remove()
    })
    nappirandom.addEventListener('click', function() {
      result.remove()
    })

    dta2.length = [8]


    // Rajoitetaan saaman datan määrä taulukossa 8 kohtaan //

    function reseptit (a, b, dta2) {

      // Funktio j

      let fg = document.createElement('figure');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
      let h3 = document.createElement('h3')
      let instr = document.createElement('h3')
      const aine = document.createElement('ul')
      let br = document.createElement('br')

      // Luodaan Elementit

      let hrd = document.createElement('h3')
      hrd.innerText = 'Type'

      let category = document.createElement('p')
      category.innerText = dta2[b].strCategory

      h3.innerText = 'Ingredients '

      instr.innerText = 'Instructions'

      let serv = document.createElement('h3')

      serv.innerText = 'Serving Method'

      let mthd = document.createElement('p')
      mthd.innerText = 'Serve in a ' + dta2[b].strGlass + '.'

      // Lisätään arvot taulukkoon null arvon kiertämiseksi

      const ingr = [];
      ingr[0] = dta2[b].strIngredient1
      ingr[1] = dta2[b].strIngredient2
      ingr[2] = dta2[b].strIngredient3
      ingr[3] = dta2[b].strIngredient4
      ingr[4] = dta2[b].strIngredient5
      ingr[5] = dta2[b].strIngredient6
      ingr[6] = dta2[b].strIngredient7
      ingr[7] = dta2[b].strIngredient8
      ingr[8] = dta2[b].strIngredient9
      ingr[9] = dta2[b].strIngredient10
      ingr[10] = dta2[b].strIngredient11
      ingr[11] = dta2[b].strIngredient12
      ingr[12] = dta2[b].strIngredient13
      ingr[13] = dta2[b].strIngredient14
      ingr[14] = dta2[b].strIngredient15

      // Taulukot null avrojen kiertämiseksi

      const msure = [];
      msure[0] = dta2[b].strMeasure1;
      msure[1] = dta2[b].strMeasure2;
      msure[2] = dta2[b].strMeasure3;
      msure[3] = dta2[b].strMeasure4;
      msure[4] = dta2[b].strMeasure5;
      msure[5] = dta2[b].strMeasure6;
      msure[6] = dta2[b].strMeasure7;
      msure[7] = dta2[b].strMeasure8;
      msure[8] = dta2[b].strMeasure9;
      msure[9] = dta2[b].strMeasure10;
      msure[10] = dta2[b].strMeasure11;
      msure[11] = dta2[b].strMeasure12;
      msure[12] = dta2[b].strMeasure13;
      msure[13] = dta2[b].strMeasure14;
      msure[14] = dta2[b].strMeasure15;

      function del (a, b, msure) {
        if (msure[b] == null) {
          msure[b] = 'Your choice';
        }
        if (msure[b] === undefined) {
          msure[b] = 'Your choice';
        }
      }
      msure.forEach(del)

      // Null tarkistus


      for (let i = 0; i < ingr.length; i++) {
        let li = document.createElement('li')
        li.innerText = ingr[i] + ' : ' + msure[i]
        aine.appendChild(li)
        if (ingr[i] === '') {
          aine.removeChild(li)

        } else if (ingr[i] == null) {
          aine.removeChild(li)
        }
      }
      // Null tarkistus


      let nppi = document.createElement('button')
      nppi.innerText = 'ENG'

      let nppi1 = document.createElement('button')
      nppi1.innerText = 'DEU'

      let nppi2 = document.createElement('button')
      nppi2.innerText = 'FRA'

      let nppi3 = document.createElement('button')
      nppi3.innerText = 'ITA'

      let nppi4 = document.createElement('button')
      nppi4.innerText = 'ES'

      // Kielivaihtoehdot


      nppi1.addEventListener('click', function() {
        p.innerText = dta2[b].strInstructionsDE
        if ( dta2[b].strInstructionsDE == null)
          p.innerText = 'Not available'
        else {
          p.innerText = dta2[b].strInstructionsDE
        }
      })

      nppi2.addEventListener('click', function() {
        p.innerText = dta2[b].strInstructionsFR
        if ( dta2[b].strInstructionsFR == null)
          p.innerText = 'Not available'
        else {
          p.innerText = dta2[b].strInstructionsFR
        }
      })
      nppi3.addEventListener('click', function() {
        p.innerText = dta2[b].strInstructionsIT
        if ( dta2[b].strInstructionsIT == null)
          p.innerText = 'Not available'
        else {
          p.innerText = dta2[b].strInstructionsIT
        }
      })
      nppi4.addEventListener('click', function() {
        p.innerText = dta2[b].strInstructionsES
        if ( dta2[b].strInstructionsES == null)
          p.innerText = 'Not available'
        else {
          p.innerText = dta2[b].strInstructionsES
        }
      })

      // Ehtolause, joka tarkistaa null arvot

      img.src = dta2[b].strDrinkThumb



      h2.innerText = dta2[b].strDrink

      p.innerText = dta2[b].strInstructions

      nppi.addEventListener('click', function() {
        p.innerText = dta2[b].strInstructions
        if ( dta2[b].strInstructions == null)
          p.innerText = 'Not available'
        else {
          p.innerText = dta2[b].strInstructions
        }
      })

      fg.appendChild(h2)
      fg.appendChild(img)
      fg.appendChild(instr)
      fg.appendChild(p)
      fg.appendChild(br)
      fg.appendChild(nppi)
      fg.appendChild(nppi1)
      fg.appendChild(nppi2)
      fg.appendChild(nppi3)
      fg.appendChild(nppi4)
      fg.appendChild(h3)
      fg.appendChild(aine)
      fg.appendChild(serv)
      fg.appendChild(mthd)
      fg.appendChild(hrd)
      fg.appendChild(category)
      main.appendChild(fg)
      kho.appendChild(main)

      // Liitetään elementit
      fnappi.addEventListener('click', function() {
        fg.remove()
      })
      nappirandom.addEventListener('click', function(){
        fg.remove()
      })


      // Uudelleena painalluksen tyhjentäminen

    }

    dta2.forEach(reseptit)

    // loopataan fetch


  })
})