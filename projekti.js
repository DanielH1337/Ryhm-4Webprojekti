'use strict';
let nappi2 = document.getElementById('hakunappi');

nappi2.addEventListener('click', function() {

// Search napille event listener jolloin sivulle tulostuu sisältö //

  let nappirandom = document.getElementById('random')
  let keho = document.querySelector('body');
  let haku2 = document.querySelector('input');
  let main = document.querySelector('main');

  // Valitaan elementit joita halutaan käyttää //

  let osoite = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + haku2.value;

  // Määritetään osoite mikä syötetään fetch hakuun lisäämällä käyttäjän syöttämä teksti osoitteen perään //


  fetch(osoite).then(res => res.json()).then(data => {


    // Toiminto missä sivulle tulee teksti 'No result' kun tuloksia ei löydy //
    
    let data2 = data.drinks
    let result = document.createElement('h2')
        result.innerText = 'No result'
    if (data2 === null) {
      main.appendChild(result)
    }


    // Napeille toiminto missä poistetaan 'No result' teksti kun niitä painetaan uudestaan //

      nappi2.addEventListener('click', function() {
      result.remove()
    })
      nappirandom.addEventListener('click', function() {
        result.remove()
      })

    data2.length = [8]


    // Rajoitetaan saaman datan määrä taulukossa 8 kohtaan //

    function reseptit (cv, index, data2) {

      // Funktio minkä avulla voidaan tehdä saamalle datalle ForEach looppi //

      let fig = document.createElement('figure');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let p = document.createElement('p');
      let h3 = document.createElement('h3')
      let instructions = document.createElement('h3')
      const ainesosat = document.createElement('ul')
      let br = document.createElement('br')

      // Luodaan Elementit //

      let header = document.createElement('h3')
      header.innerText = 'Type'

      let category = document.createElement('p')
      category.innerText = data2[index].strCategory

      h3.innerText = 'Ingredients '

      instructions.innerText = 'Instructions'

      let serving = document.createElement('h3')

      serving.innerText = 'Serving Method'

      let method = document.createElement('p')
      method.innerText = 'Serve in a ' + data2[index].strGlass + '.'

      // Luodaan ainesosille taulukko niin voi tehdä for loopin null arvon kiertämiseksi //

      const ingredients = [];
      ingredients[0] = data2[index].strIngredient1
      ingredients[1] = data2[index].strIngredient2
      ingredients[2] = data2[index].strIngredient3
      ingredients[3] = data2[index].strIngredient4
      ingredients[4] = data2[index].strIngredient5
      ingredients[5] = data2[index].strIngredient6
      ingredients[6] = data2[index].strIngredient7
      ingredients[7] = data2[index].strIngredient8
      ingredients[8] = data2[index].strIngredient9
      ingredients[9] = data2[index].strIngredient10
      ingredients[10] = data2[index].strIngredient11
      ingredients[11] = data2[index].strIngredient12
      ingredients[12] = data2[index].strIngredient13
      ingredients[13] = data2[index].strIngredient14
      ingredients[14] = data2[index].strIngredient15

      // Luodaan ainesosien määrille taulukko niin voi tehdä for loopin null arvon kiertämiseksi //

      const measure = [];
      measure[0] = data2[index].strMeasure1;
      measure[1] = data2[index].strMeasure2;
      measure[2] = data2[index].strMeasure3;
      measure[3] = data2[index].strMeasure4;
      measure[4] = data2[index].strMeasure5;
      measure[5] = data2[index].strMeasure6;
      measure[6] = data2[index].strMeasure7;
      measure[7] = data2[index].strMeasure8;
      measure[8] = data2[index].strMeasure9;
      measure[9] = data2[index].strMeasure10;
      measure[10] = data2[index].strMeasure11;
      measure[11] = data2[index].strMeasure12;
      measure[12] = data2[index].strMeasure13;
      measure[13] = data2[index].strMeasure14;
      measure[14] = data2[index].strMeasure15;

      function del (cv, index, measure) {
      if (measure[index] == null) {
        measure[index] = 'Your choice';
      }
      if (measure[index] === undefined) {
        measure[index] = 'Your choice';
      }
      }
      measure.forEach(del)

      // For looppi jolla kierretään null arvo //


        for (let i = 0; i < ingredients.length; i++) {
          let li = document.createElement('li')
          li.innerText = ingredients[i] + ' : ' + measure[i]
          ainesosat.appendChild(li)
            if (ingredients[i] === '') {
              ainesosat.removeChild(li)

            } else if (ingredients[i] == null) {
              ainesosat.removeChild(li)
            }
          }
      // For looppi jolla kierretään null arvo //


      let nappi = document.createElement('button')
      nappi.innerText = 'ENG'

      let nappi3 = document.createElement('button')
      nappi3.innerText = 'DEU'

      let nappi4 = document.createElement('button')
      nappi4.innerText = 'FRA'

      let nappi5 = document.createElement('button')
      nappi5.innerText = 'ITA'

      let nappi6 = document.createElement('button')
      nappi6.innerText = 'ES'

      // Tehdään napit millä vaihtaa kieli //


      nappi3.addEventListener('click', function() {
        p.innerText = data2[index].strInstructionsDE
      if ( data2[index].strInstructionsDE == null)
        p.innerText = 'Not available'
      else {
        p.innerText = data2[index].strInstructionsDE
      }
      })

      nappi4.addEventListener('click', function() {
        p.innerText = data2[index].strInstructionsFR
        if ( data2[index].strInstructionsFR == null)
          p.innerText = 'Not available'
        else {
          p.innerText = data2[index].strInstructionsFR
        }
      })
      nappi5.addEventListener('click', function() {
        p.innerText = data2[index].strInstructionsIT
        if ( data2[index].strInstructionsIT == null)
          p.innerText = 'Not available'
        else {
          p.innerText = data2[index].strInstructionsIT
        }
      })
      nappi6.addEventListener('click', function() {
        p.innerText = data2[index].strInstructionsES
        if ( data2[index].strInstructionsES == null)
          p.innerText = 'Not available'
        else {
          p.innerText = data2[index].strInstructionsES
        }
      })

      // If ehto millä kierretään null arvo //

      image.src = data2[index].strDrinkThumb



      h2.innerText = data2[index].strDrink

      p.innerText = data2[index].strInstructions

      nappi.addEventListener('click', function() {
        p.innerText = data2[index].strInstructions
        if ( data2[index].strInstructions == null)
          p.innerText = 'Not available'
        else {
          p.innerText = data2[index].strInstructions
        }
      })

      fig.appendChild(h2)
      fig.appendChild(image)
      fig.appendChild(instructions)
      fig.appendChild(p)
      fig.appendChild(br)
      fig.appendChild(nappi)
      fig.appendChild(nappi3)
      fig.appendChild(nappi4)
      fig.appendChild(nappi5)
      fig.appendChild(nappi6)
      fig.appendChild(h3)
      fig.appendChild(ainesosat)
      fig.appendChild(serving)
      fig.appendChild(method)
      fig.appendChild(header)
      fig.appendChild(category)
      main.appendChild(fig)
      keho.appendChild(main)

      // Elementtien liittäminen //
      nappi2.addEventListener('click', function() {
        fig.remove()
    })
      nappirandom.addEventListener('click', function(){
        fig.remove()
      })


      // Nappeihin event missä se poistaa tulostamnsa sisällön mikäli nappia painetaan uudestaan //

  }

          data2.forEach(reseptit)

    // forEach loop jolla voidaan tehdä kyseinen funktio jokaiseen kohtaan sille datalle mikä saatiin fetchistä //


  })
})
