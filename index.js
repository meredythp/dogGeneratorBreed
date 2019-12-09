'use strict';

function getDogImage(dog) {
  fetch(`https://dog.ceo/api/breed/${dog}/images/random/` 
  )
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status === "success") {
    $('.randomDog').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
  } else {
    $('.resultsText').replaceWith(`${responseJson.message}`);
  }
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.results').addClass('hidden');
    $('.resultsText').replaceWith(`<h2 class="resultsText">Look at this dog!</h2>`);
    $('.randomDog').replaceWith(`<img src="" class="results-img">`);
    var dog = document.getElementById('dogBreed').value;
    getDogImage(dog);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});