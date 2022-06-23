fetch('https://covid-19.dataflowkit.com/v1/usa')
.then(res=>res.json())
.then(data=>console.log(data))