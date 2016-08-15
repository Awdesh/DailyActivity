$(document).ready(function() {
    $.ajax({
      type: "GET",
      dataType: "json",
        url: "/activities",
        success: function(data){
      $('.greeting-id').append(data.id);          
      $('.greeting-content').append(data.content);          
      },
      error: function(status){
        console.log('error occurred calling endpoint' + status);
      }
  });
})

// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  // $.get('/', function(dreams) {
  //   dreams.forEach(function(dream) {
  //     $('<li></li>').text(dream).appendTo('ul#dreams');
  //   });
  // });

  $('form').submit(function(event) {
    event.preventDefault();
    activity = $('.otherText').val();
    console.log(activity);
    $.post('/activities?' + $.param({activity: activity}), function() {
      $('<li></li>').text(activity).appendTo('ul#activities');
      $('input').val('');
      $('input').focus();
    });
  });

});


     
