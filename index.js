'use strict';

function getDogImage(input) {
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
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
    let input = $('.numInput').val();
    if(input === ''){
      input = 3;
    }
    else if (input > 50) {
      alert('Please enter a number less than 50');
    }
    getDogImage(input);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});