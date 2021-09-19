var apiKey = "eff0cad38555137d967a491b3b5288fb"
var apiUrl = "https://api.openweathermap.org"
var searchForm = document.querySelector("#search-form")
var searchBtn = document.querySelector("#search-btn")
var cityInput = document.querySelector("#city")


function citySearch(cityInput) {
  var cityApi = `${apiUrl}/data/2.5/weather?q=${cityInput}&appid=${apiKey}`
  fetch(cityApi).then(function (response) {
    return response.json()
    
  }).then(function(data){
    console.log(data)})

}
function handleSearchEvent(e) {
  e.preventDefault()
  var search = cityInput.value.trim()
  citySearch(search)
  cityInput = ""
}
console.log("connected")

searchForm.addEventListener("submit", handleSearchEvent)


