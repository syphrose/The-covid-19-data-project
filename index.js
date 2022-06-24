document.addEventListener('DOMContentLoaded', ()=> {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8fd1e108cdmshbd7af98f47bd8c0p117edejsndc62622f656a',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  // fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
  // 	.then(response => response.json())
  // 	.then(response => console.log(response))
  // 	.catch(err => console.error(err));

  let fetchStatistics =async() => {
      let resp = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
      let data = await resp.json()
      console.log(data)
      let response = data
      response.map((stats) => {
          // console.log(stats.country)
      
        const list = document.querySelector('.container ul')
        const li= document.createElement("li");
        li.textContent = `${stats.Country} total deaths: ${stats.TotalDeaths}`
        list.appendChild(li);

      })


    }
  fetchStatistics()
})
function openlogin(){
  document.getElementById('formlogin').style.display = "block"
}

function closeform(){
  document.getElementById('formlogin').style.display = "none"
}