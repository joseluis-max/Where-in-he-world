const main = document.getElementById('main');
const darkModeButton = document.getElementById('mybtn');
const header = document.getElementById('header');
const filter = document.getElementById('filter');
const search = document.getElementById('search');
const countrySearch = document.getElementById('countrySearch');
const moreInfo = document.getElementById('moreInfo');
const country = document.querySelectorAll('#country');



darkModeButton.addEventListener('click',()=>{
  header.classList.toggle('darkMode');
  darkModeButton.classList.toggle('darkMode')
  main.classList.toggle('darkMode_2')
  filter.classList.toggle('darkMode_2')
  document.body.classList.toggle('darkMode_2')
  search.classList.toggle('searchDark')
  countrySearch.classList.toggle('searchDark')
  let card = document.querySelectorAll('#card');
  card.forEach((c)=>{
    c.classList.toggle('cardDark')
  })
  country.forEach((c)=>{
    c.classList.toggle('searchDark')
  })
  back.classList.toggle('searchDark')
})
function insertar_carta(ciudad) {
  main.innerHTML =""
  for (let c of ciudad) {
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
async function consulta() {
     await fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(res=>{
      insertar_carta(res)
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
consulta()
async function consulta_name(name) {
     await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res=>res.json())
    .then(res=>{
     insertar_carta(res)
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
async function consulta_2(nombre) {
  console.log(nombre)
     await fetch(`https://restcountries.eu/rest/v2/name/${nombre}`)
    .then(res=>res.json())
    .then(res=>{
     insertar_info(res)
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
        })
      })
    })
   .catch((err)=>{
    console.log(err)
    })
}
function insertar_info(c) {
  c = c[0]
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
           <p class="card-text"><strong>Lenguages:</strong    </p>
         </div>
         <footer class="d-flex justify-content-center align-items-center mt-5">
           <p class="align-content-center mb-0 mr-2">Border Countries:</p>
           <div>
           ${c.borders}
           </div>
         </footer>
       </div>
     </div>
  `
}
function showMoreInfo() {
  let info = document.getElementById('moreInfo');
    info.classList.toggle('show')
    main.classList.toggle('hidden')
    filter.classList.toggle('hidden')
}

countrySearch.addEventListener('change',function(){
  console.log(this.value)
  consulta_region(this.value)
})
search.addEventListener('keyup',function(){
  console.log(this.value)
  consulta_name(this.value)
})

