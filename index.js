'use strict';

function getDogImage(input) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
      .then(response => response.json())
      .then(responseJson => 
        console.log(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let curEvent = event.currentTargert;
    let input = $('.numInput').val();
    if(curEvent === undefined){
        input = 3;
    }
    getDogImage(input);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});