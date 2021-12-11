
const main = document.getElementById('main');
const darkModeButton = document.getElementById('mybtn');
const header = document.getElementById('header');
const filter = document.getElementById('filter');
const search = document.getElementById('search');
const countrySearch = document.getElementById('countrySearch');
const moreInfo = document.getElementById('moreInfo');
const country = document.querySelectorAll('#country');

let mode = false

darkModeButton.addEventListener('click', () => {
  mode ? mode = false : mode = true;
  header.classList.toggle('darkMode');
  darkModeButton.classList.toggle('darkMode')
  main.classList.toggle('darkMode_2')
  filter.classList.toggle('darkMode_2')
  document.body.classList.toggle('darkMode_2')
  search.classList.toggle('searchDark')
  countrySearch.classList.toggle('searchDark')
  let card = document.querySelectorAll('#card');
  card.forEach((c) => {
    c.classList.toggle('cardDark')
  })
  country.forEach((c) => {
    c.classList.toggle('searchDark')
  })
  let borbutton = document.querySelectorAll('.bor')
  mode ? borbutton.forEach(b => { b.classList.add('searchDark') }) : borbutton.forEach(b => { b.classList.remove('searchDark') })
  const back = document.getElementById('back');
  mode ? back.classList.add('searchDark') : back.classList.remove('searchDark')
})
function addDot({ population }) {
  population = new String(population)
  if (population.length == 3) {
    population = population
  } else if (population.length <= 6) {
    population = population.slice(0, population.length - 3) + "." + population.slice(population.length - 3, population.length)
  } else if (population.length <= 9) {
    population = population.slice(0, population.length - 3) + "." + population.slice(population.length - 3, population.length)
    population = population.slice(0, population.length - 7) + "." + population.slice(population.length - 7, population.length)
  } else {
    population = population.slice(0, population.length - 3) + "." + population.slice(population.length - 3, population.length)
    population = population.slice(0, population.length - 7) + "." + population.slice(population.length - 7, population.length)
    population = population.slice(0, population.length - 11) + "." + population.slice(population.length - 11, population.length)
  }
  return population
}
function innerCard(city) {
  main.innerHTML = ""
  for (let c of city) {
    let population = addDot(c)
    main.innerHTML += `
      <div class="card mb-2 mt-2 ${mode == true ? "cardDark" : ""} " id="card">
        <img src="${c.flag}" class="card-img-top" alt="Bandera de ${c['name']}">
        <div class="card-body">
          <h4 class="card-title font-weight-bold">${c.nativeName}</h4>
          <p class="card-text ${c.population == 0 ? hidden_p = "hidden" : null}"><strong>Population:</strong> ${population}</p>
          <p class="card-text  ${ c.region === "" ? hidden_r = "hidden" : null}"><strong>Region:</strong> ${c.region}</p>
          <p class="card-text  ${c.capital === "" ? hidden_c = "hidden" : null}"><strong>Capital:</strong> ${c.capital}</p>
        </div>
        <button onclick="consultation_info('${c.name}')" class="btn btn-outline-info" id="info" >More info...</button>
      </div>
      `
  }
}
consultation()
async function consultation() {
  let ajax = new XMLHttpRequest()
  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      let datos = JSON.parse(ajax.responseText)
      innerCard(datos)
      console.log(datos)
    }
  }
  ajax.open("GET", "https://restcountries.com/v2/all", true)
  ajax.send()
}

async function consultation_name(name) {
  if (name == "") {
    consultation()
  } else {
    let ajax = new XMLHttpRequest()
    ajax.onreadystatechange = () => {
      if (ajax.readyState == 4 && ajax.status == 200) {
        let datos = JSON.parse(ajax.responseText)
        innerCard(datos)
      }
    }
    ajax.open("GET", `https://restcountries.com/v2/name/${name}`, true)
    ajax.send()
  }
}
async function consultation_info(name) {
  await fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => res.json())
    .then(res => {
      innerInfo(res)
      showMoreInfo()
      const back = document.getElementById('back');
      let borbutton = document.querySelectorAll('.bor')
      mode ? borbutton.forEach(b => { b.classList.add('searchDark') }) : borbutton.forEach(b => { b.classList.remove('searchDark') })
      mode ? back.classList.add('searchDark') : back.classList.remove('searchDark')
      back.addEventListener('click', () => {
        showMoreInfo()
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
async function consultation_alpha(alpha) {
  await fetch(`https://restcountries.com/v2/alpha/${alpha.innerHTML}`)
    .then(res => res.json())
    .then(res => {
      innerborder(res)
      showMoreInfoBorder()
      let borbutton = document.querySelectorAll('.bor')
      mode ? borbutton.forEach(b => { b.classList.add('searchDark') }) : borbutton.forEach(b => { b.classList.remove('searchDark') })
      const back = document.getElementById('back');
      mode ? back.classList.add('searchDark') : back.classList.remove('searchDark')
      back.addEventListener('click', () => {
        showMoreInfo()
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
async function consultation_region(region) {
  await fetch(`https://restcountries.com/v2/region/${region}`)
    .then(res => res.json())
    .then(res => {
      innerCard(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

function innerInfo(c) {
  c = c[0]
  let len = ""
  for (const l of c['languages']) {
    len += " " + l.name
  }
  let population = addDot(c)
  moreInfo.innerHTML = `
    <div class="container"><button class="btn mt-3" id="back">Back</button></div>
     <div class="d-flex container justify-content-center align-items-center" id="subcontainer">
       <figure class="" id="wrapperImg">
         <img src="${c.flag}" alt="">
       </figure>
       <div class="" id="wrapperInfo">
            <h4 class="mb-4">${c.name}</h4>
          <div class="d-flex  justify-content-between">
          <div id="item1">
            <p class="card-text"><strong>Native Name:</strong> ${c.nativeName}</p>
            <p class="card-text ${c.population == 0 ? hidden_p = "hidden" : ""}"><strong>Population:</strong> ${population}</p>
            <p class="card-text ${ c.region === "" ? hidden_r = "hidden" : ""}"><strong>Region:</strong> ${c.region}</p>
            <p class="card-text ${c.capital === "" ? hidden_s = "hidden" : ""} ><strong>Sub Region:</strong> ${c.subregion}</p>
            <p class="card-text ${ c.capital === "" ? hidden_c = "hidden" : ""}"><strong>Capital:</strong> ${c.capital}</p>
          </div>
            <div id="item2">
            <p class="card-text"><strong>Top Level Domain:</strong>${c.topLevelDomain}</p>
            <p class="card-text"><strong>Currencies:</strong> ${c.currencies[0]['name']}</p>
            <p class="card-text id="len"><strong>Languages:</strong> ${len}</p>
          </div>
         </div>
         <footer class="d-flex justify-content-center align-items-center mt-5">
          <p class="align-content-center mb-0 mr-2 ${ c['borders'] != undefined && c['borders'].length == 0 ? hidden = "hidden" : ""}" id="BC">
            Border Countries:
          </p>
          <div id="borders">
          
          </div>
         </footer>
       </div>
     </div>
  `

  let bor = document.getElementById('borders')
  if (c['borders'] != undefined && !c['borders'].length == 0) {
    for (const b of c['borders']) {
      bor.innerHTML += `
      <button class="bor btn">${b}</button>
      `
    }
    let borbutton = document.querySelectorAll('.bor')
    borbutton.forEach(b => {
      b.addEventListener('click', function () { consultation_alpha(this) })
    })
  }
}


function innerborder(c) {
  let len = ""
  for (const l of c['languages']) {
    len += " " + l.name
  }
  let population = addDot(c)
  moreInfo.innerHTML = `
    <div class="container"><button class="btn mt-3" id="back">Back</button></div>
     <div class="d-flex container justify-content-center align-items-center" id="subcontainer">
       <figure class="" id="wrapperImg">
         <img src="${c.flag}" alt="">
       </figure>
       <div class="" id="wrapperInfo">
            <h4 class="mb-4">${c.name}</h4>
          <div class="d-flex  justify-content-between">
          <div id="item1">
            <p class="card-text"><strong>Native Name:</strong> ${c.nativeName}</p>
            <p class="card-text ${c.population == 0 ? hidden_p = "hidden" : ""}"><strong>Population:</strong> ${population}</p>
            <p class="card-text ${ c.region === "" ? hidden_r = "hidden" : ""}"><strong>Region:</strong> ${c.region}</p>
            <p class="card-text ${c.capital === "" ? hidden_s = "hidden" : ""} ><strong>Sub Region:</strong> ${c.subregion}</p>
            <p class="card-text ${ c.capital === "" ? hidden_c = "hidden" : ""}"><strong>Capital:</strong> ${c.capital}</p>
          </div>
            <div id="item2">
            <p class="card-text"><strong>Top Level Domain:</strong>${c.topLevelDomain}</p>
            <p class="card-text"><strong>Currencies:</strong> ${c.currencies[0]['name']}</p>
            <p class="card-text id="len"><strong>Languages:</strong> ${len}</p>
          </div>
         </div>
         <footer class="d-flex justify-content-center align-items-center mt-5">
           <p class="align-content-center mb-0 mr-2 ${ c['borders'] != undefined && c['borders'].length == 0 ? hidden = "hidden" : ""}" id="BC">Border Countries:</p>
           <div id="borders">
           
           </div>
         </footer>
       </div>
     </div>
  `
  let bor = document.getElementById('borders')
  if (c['borders'] != undefined && !c['borders'].length == 0) {
    for (const b of c['borders']) {
      bor.innerHTML += `
      <button class="bor btn">${b}</button>
      `
    }
    let borbutton = document.querySelectorAll('.bor')
    borbutton.forEach(b => {
      b.addEventListener('click', function () { consultation_alpha(this) })
    })
  }
}

function showMoreInfo() {
  let info = document.getElementById('moreInfo');
  info.classList.toggle('show')
  main.classList.toggle('hidden')
  filter.classList.toggle('hidden')
}
function showMoreInfoBorder() {
  let info = document.getElementById('moreInfo');
  info.classList.add('show')
  main.classList.add('hidden')
  filter.classList.add('hidden')
}

countrySearch.addEventListener('change', function () {
  consultation_region(this.value)
})
search.addEventListener('keyup', function (ev) {
  if (ev.code == "Enter" && !ev.target.value == "") {
    consultation_name(this.value)
  } else if (ev.code == 'Backspace' && ev.target.value == "") {
    main.innerHTML = ` <div class="pin"></div class="pin">`
    consultation()
  }
})

