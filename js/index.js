const main = document.getElementById('main');
const darkModeButton = document.getElementById('mybtn');
const header = document.getElementById('header');
const filter = document.getElementById('filter');
const search = document.getElementById('search');
const countrySearch = document.getElementById('countrySearch');
const moreInfo = document.getElementById('moreInfo');
const country = document.querySelectorAll('#country');


<<<<<<< HEAD
=======

>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
darkModeButton.addEventListener('click',()=>{
  header.classList.toggle('darkMode');
  darkModeButton.classList.toggle('darkMode')
  main.classList.toggle('darkMode_2')
  filter.classList.toggle('darkMode_2')
  document.body.classList.toggle('darkMode_2')
  search.classList.toggle('searchDark')
  countrySearch.classList.toggle('searchDark')
  let card = document.querySelectorAll('#card');
<<<<<<< HEAD
  back.classList.toggle('searchDark')
=======
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
  card.forEach((c)=>{
    c.classList.toggle('cardDark')
  })
  country.forEach((c)=>{
    c.classList.toggle('searchDark')
  })
<<<<<<< HEAD
  let borbutton = document.querySelectorAll('.bor')
  borbutton.forEach(b => {
    b.classList.toggle('searchDark')
  })
})

function innerCard(city) {
  main.innerHTML =""
  for (let c of city) {
=======
  back.classList.toggle('searchDark')
})
function insertar_carta(ciudad) {
  main.innerHTML =""
  for (let c of ciudad) {
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
      main.innerHTML += `
      <div class="card mb-2 mt-2" id="card">
        <img src="${c.flag}" class="card-img-top" alt="Bandera de ${c['name']}">
        <div class="card-body">
          <h4 class="card-title font-weight-bold">${c.name}</h4>
          <p class="card-text"><strong>Population:</strong> ${c.population}</p>
          <p class="card-text"><strong>Region:</strong> ${c.region}</p>
          <p class="card-text"><strong>Capital:</strong> ${c.capital}</p>
        </div>
      </div>
      `
    }
}
<<<<<<< HEAD
async function consultation() {
     await fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(res=>{
      innerCard(res)
=======
async function consulta() {
     await fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(res=>{
      insertar_carta(res)
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
      let card = document.querySelectorAll('#card');
      card.forEach(c => {
        c.addEventListener('click', function(){
          console.dir(this)
          let name = this.children[1].children[0].innerText;
<<<<<<< HEAD
          consultation_info(name)
=======
          consulta_2(name)
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
        })
      })
    })
   .catch((err)=>{
    console.log(err)
    })
}
<<<<<<< HEAD
consultation()
async function consultation_name(name) {
     await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res=>res.json())
    .then(res=>{
     innerCard(res)
=======
consulta()
async function consulta_name(name) {
     await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res=>res.json())
    .then(res=>{
     insertar_carta(res)
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
      let card = document.querySelectorAll('#card');
      card.forEach(c => {
        c.addEventListener('click', function(){
          console.dir(this)
          let name = this.children[1].children[0].innerText;
          consulta_2(name)
        })
      })
    })
   .catch((err)=>{
      console.log(err)
    })
}
<<<<<<< HEAD
async function consultation_info(name) {
     await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res=>res.json())
    .then(res=>{
     innerInfo(res)
=======
async function consulta_2(nombre) {
  console.log(nombre)
     await fetch(`https://restcountries.eu/rest/v2/name/${nombre}`)
    .then(res=>res.json())
    .then(res=>{
     insertar_info(res)
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
     showMoreInfo()
     const back = document.getElementById('back');
     back.addEventListener('click',()=>{
      showMoreInfo()
})
    })
   .catch((err)=>{
    console.log(err)
    })
}
<<<<<<< HEAD
async function consultation_alpha(alpha) {
  console.dir(alpha.innerHTML)
     await fetch(`https://restcountries.eu/rest/v2/alpha/${alpha.innerHTML}`)
    .then(res=>res.json())
    .then(res=>{
     innerborder(res)
     showMoreInfoBorder()
     const back = document.getElementById('back');
     back.addEventListener('click',()=>{
      showMoreInfo()
})
    })
   .catch((err)=>{
    console.log(err)
    })
}
async function consultation_region(region) {
     await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(res=>res.json())
    .then(res=>{
     innerCard(res)
      let card = document.querySelectorAll('#card');
      card.forEach(c => {
        c.addEventListener('click', function(){
          let name = this.children[1].children[0].innerText;
          consulta_info(name)
=======
async function consulta_region(region) {
     await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(res=>res.json())
    .then(res=>{
     insertar_carta(res)
      let card = document.querySelectorAll('#card');
      card.forEach(c => {
        c.addEventListener('click', function(){
          console.dir(this)
          let name = this.children[1].children[0].innerText;
          consulta_2(name)
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
        })
      })
    })
   .catch((err)=>{
    console.log(err)
    })
}
<<<<<<< HEAD
function innerInfo(c) {
  c = c[0]
  let len = ""
  for (const l of c['languages']) {
    len += " " + l.name
  }
=======
function insertar_info(c) {
  c = c[0]
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
  moreInfo.innerHTML = `
    <div class="container"><button class="btn mt-3" id="back">Back</button></div>
     <div class="d-flex container justify-content-center align-items-center" id="subcontainer">
       <figure class="" id="wrapperImg">
         <img src="${c.flag}" alt="">
       </figure>
       <div class="" id="wrapperInfo">
            <h4 class="mb-4">${c.name}</h4>
         <div id="item1">
          <p class="card-text"><strong>Native Name:</strong> ${c.nativeName}</p>
          <p class="card-text"><strong>Population:</strong> ${c.population}</p>
          <p class="card-text"><strong>Region:</strong> ${c.region}</p>
          <p class="card-text"><strong>Sub Region:</strong> ${c.subregion}</p>
          <p class="card-text"><strong>Capital:</strong> ${c.capital}</p>
         </div>
          <div id="item2">
           <p class="card-text"><strong>Top Level Domain:</strong>${c.topLevelDomain}</p>
           <p class="card-text"><strong>Currencies:</strong> ${c.currencies[0]['name']}</p>
<<<<<<< HEAD
           <p class="card-text id="len"><strong>Languages:</strong> ${len}</p>
         </div>
         <footer class="d-flex justify-content-center align-items-center mt-5">
           <p class="align-content-center mb-0 mr-2">Border Countries:</p>
           <div id="borders">
           
=======
           <p class="card-text"><strong>Lenguages:</strong    </p>
         </div>
         <footer class="d-flex justify-content-center align-items-center mt-5">
           <p class="align-content-center mb-0 mr-2">Border Countries:</p>
           <div>
           ${c.borders}
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
           </div>
         </footer>
       </div>
     </div>
  `
<<<<<<< HEAD
  let bor = document.getElementById('borders')
  for (const b of c['borders']) {
      bor.innerHTML += `
      <button class="bor btn">${b}</button>
      `
  }
  let borbutton = document.querySelectorAll('.bor')
  borbutton.forEach(b => {
    b.addEventListener('click', function(){consultation_alpha(this)})
  })
}
function innerborder(c) {
  let len = ""
  for (const l of c['languages']) {
    len += " " + l.name
  }
  moreInfo.innerHTML = `
    <div class="container"><button class="btn mt-3" id="back">Back</button></div>
       <figure class="" id="wrapperImg">
         <img src="${c.flag}" alt="">
       </figure>
       <div class="" id="wrapperInfo">
            <h4 class="mb-4">${c.name}</h4>
         <div id="item1">
          <p class="card-text"><strong>Native Name:</strong> ${c.nativeName}</p>
          <p class="card-text"><strong>Population:</strong> ${c.population}</p>
          <p class="card-text"><strong>Region:</strong> ${c.region}</p>
          <p class="card-text"><strong>Sub Region:</strong> ${c.subregion}</p>
          <p class="card-text"><strong>Capital:</strong> ${c.capital}</p>
         </div>
          <div id="item2">
           <p class="card-text"><strong>Top Level Domain:</strong>${c.topLevelDomain}</p>
           <p class="card-text"><strong>Currencies:</strong> ${c.currencies[0]['name']}</p>
           <p class="card-text id="len"><strong>Languages:</strong> ${len}</p>
         </div>
         <footer class="d-flex justify-content-center align-items-center mt-5">
           <p class="align-content-center mb-0 mr-2">Border Countries:</p>
           <div id="borders">
           
           </div>
         </footer>
       </div>
     </div>
  `
  let bor = document.getElementById('borders')
  for (const b of c['borders']) {
      bor.innerHTML += `
      <button class="bor btn">${b}</button>
      `
  }
  let borbutton = document.querySelectorAll('.bor')
  borbutton.forEach(b => {
    b.addEventListener('click', function(){consultation_alpha(this)})
  })
}

=======
}
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
function showMoreInfo() {
  let info = document.getElementById('moreInfo');
    info.classList.toggle('show')
    main.classList.toggle('hidden')
    filter.classList.toggle('hidden')
}
<<<<<<< HEAD
function showMoreInfoBorder(){
  let info = document.getElementById('moreInfo');
    info.classList.add('show')
    main.classList.add('hidden')
    filter.classList.add('hidden')
}

countrySearch.addEventListener('change',function(){
  console.log(this.value)
  consultation_region(this.value)
})
search.addEventListener('keyup',function(){
  console.log(this.value)
  consultation_name(this.value)
=======

countrySearch.addEventListener('change',function(){
  console.log(this.value)
  consulta_region(this.value)
})
search.addEventListener('keyup',function(){
  console.log(this.value)
  consulta_name(this.value)
>>>>>>> 0323780fb25aaf7fe65083de607abc9e0ecb5b39
})

