fetch('https://covid-19.dataflowkit.com/v1/usa')
.then(res=>res.json())
.then(data=>console.log(data))

let fetchStatistics =async() => {
    let statistics = await fetch('https://covid-19.dataflowkit.com/v1/usa')
    let data = await statistics.json()
    console.log(data.items.volumeInfo)
    let response = data.items
    response.map((statisticsdata) => {
        console.log(statisticsdata)
    })

      const list = document.querySelector('.statistics-display.list')
      const li= document.createElement("li");
      li.textContent = statisticsdata.volumeInfo.title
      list.appendChild(li);
}



fetchStatistics()
