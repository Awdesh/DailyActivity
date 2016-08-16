// $(document).ready(function() {
//     $.ajax({
//       type: "GET",
//       dataType: "json",
//         url: "/",
//         success: function(data){
//       $('.greeting-id').append(data.id);          
//       $('.greeting-content').append(data.content);          
//       },
//       error: function(status){
//         console.log('error occurred calling endpoint' + status);
//       }
//   });
// })

$(function() {
  
  $.get('/activities', function(activities) {
    activities.forEach(function(activity) {
    console.log('activities called ' + activity);

      $('<li></li>').text(activity).appendTo('ul#activities');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var personalText = $('.personalText').val();
    var professionalText = $('.professionalText').val();
    var otherText = $('.otherText').val();
    console.log(personalText + professionalText + otherText);
    var formInput = { "personalText" : personalText, "professionalText" : professionalText, "otherText" : otherText };
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/activities",
      contentType: 'application/json',
      data: JSON.stringify(formInput),
      success: function(r){
        console.log('Thanks for sending the data for today!');
      },
      error: function(status){
        console.log('error occurred calling endpoint' + status);
      }
    });
  });
});


     
