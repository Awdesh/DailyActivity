$(function() {
  // $.get('/activities', function(activities) {
  //   activities.forEach(function(activity) {
  //   console.log('activities called ' + activity);
  //     // $('<li></li>').text(activity.personalText).appendTo('ul#activities');
  //     // $('<li></li>').text(activity.professionalText).appendTo('ul#activities');
  //     // $('<li></li>').text(activity.otherText).appendTo('ul#activities');
  //   });
  // });

  // $.ajax({
  //     type: "GET",
  //     dataType: "json",
  //       url: "/activities",
  //       success: function(data){
  //         console.log('called success!!');
  //         $('.activities').append(data.id);          
  //     },
  //     error: function(status){
  //       console.log('error occurred calling endpoint' + status);
  //     }
  // });

// $('getActivity').submit(function(event) {
//     event.preventDefault();
//     console.log('getting all the activities');
//     // var formInput = { "personalText" : personalText, "professionalText" : professionalText, "otherText" : otherText };
//     $.ajax({
//       type: "GET",
//       dataType: "json",
//         url: "/activities",
//         success: function(data){
//           console.log('called success!!');
//           $('.activities').append(data.id);          
//       },
//       error: function(status){
//         console.log('error occurred calling endpoint' + status);
//       }
//   });
// });

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
        console.log('Good job recording today\'s activity!');
      },
      error: function(status){
        console.log('error occurred calling endpoint' + status);
      }
    });
  });
});


     
