// const axios = require("axios");

// TODO: Authentication, email JS, and admin JS will be added.
// let email;
// let password;
// let emailL;
// let passwordL;

// function showAlert() {
//   email = document.getElementById("email").value;
//   password = document.getElementById("pwd").value;

//   console.log(email);
//   console.log(password);

//   // login(email,password);
//   alert(
//     "You have successfully finished your registration. You could login now."
//   );

//   return [email, password];
// }

// function login() {
//   alert("Visit this site for more information https://bit.ly/35RnjHV");
// }

// const search = () => {
//   const searchBox = document.getElementById("search-box");
//   const searchTerm = searchBox.value;
//   console.log(searchTerm + "asd")
//   // return searchTerm;
// }


let searchValue;

// console.log(searchValue + "searchValue")

function search() {
  const searchBox = document.getElementById("search-box");
  const searchTerm = searchBox.value;
  searchValue = searchTerm
  // do something with the search term, such as pass it to your API call

  console.log(searchTerm + " searchTerm")
  return searchTerm;

}

// let searchValue = search;
// window.alert("hello")

console.log(searchValue);

// let searchValue1= document.getElementById("search-value").value;

// console.log(searchValue1 + "searchValue")


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c4d6c0c4acmsh702c0e116543742p177df0jsndf87800ec25a',
// 		'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
// 	}
// };

// fetch(`https://skyscanner50.p.rapidapi.com/api/v1/searchAirport?query=${searchValue}`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport?query=london");
// xhr.setRequestHeader("X-RapidAPI-Key", "c4d6c0c4acmsh702c0e116543742p177df0jsndf87800ec25a");
// xhr.setRequestHeader("X-RapidAPI-Host", "skyscanner50.p.rapidapi.com");

// xhr.send(data);

// const options = {
//   method: 'GET',
//   url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
//   params: {query: searchValue},
//   headers: {
//     'X-RapidAPI-Key': 'c4d6c0c4acmsh702c0e116543742p177df0jsndf87800ec25a',
//     'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });