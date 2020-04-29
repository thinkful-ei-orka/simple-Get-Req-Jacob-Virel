'use strict';

function getDogImage(input) {
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayBreed(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayBreed(responseJson){
    let max = responseJson.message.length;
    let random = between(0,max);
    $('.results-img').replaceWith(`<img src="${responseJson.message[random]}" class="results-img">`);
}

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
}
function displayResults(responseJson){
  console.log(responseJson);
  let html = '';
  responseJson.message.forEach(img => {
    html += `<img src="${img}" class="results-img">`;
  });
  $('.results-img').replaceWith(html);
  $('.results').removeClass('hidden');
} 
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let input = $('.numInput').val('');
    /* if(input === ''){
      input = 3;
    }
    else if (input > 50) {
      alert('Please enter a number less than 50');
    } */
    getDogImage(input);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});