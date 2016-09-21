$(function() {
  $(".myButton").click(function() {

    $.get('/activities', function(activities) {
      activities.forEach(function(activity) {
        console.log(activity);
        console.log('called get');
        $('<li></li>').text(activity.personalText).appendTo('ul#personalactivities');
        $('<li></li>').text(activity.professionalText).appendTo('ul#professionalactivities');
        $('<li></li>').text(activity.otherText).appendTo('ul#otheractivities');
      });
    });
  });

  $(".myButton1").click(function() {

    $.get('/todayactivities', function(activities) {
      activities.forEach(function(activity) {
        console.log(activity);
        console.log('called get');
      });
    });
  });

  $('form').submit(function(event) {
    console.log('subitting');
    event.preventDefault();
    var personalText = $('.personalText').val();
    var professionalText = $('.professionalText').val();
    var otherText = $('.otherText').val();
    // console.log(personalText + professionalText + otherText + d);
    var formInput = {
      "personalText": personalText,
      "professionalText": professionalText,
      "otherText": otherText
    };
    $.ajax({
      type: "POST",
      dataType: 'jsonp',
      url: "/activities",
      contentType: 'application/json',
      data: JSON.stringify(formInput),
      success: function(r) {
        $('textarea').val('');
        $('textarea').focus();
        console.log('Good job recording today\'s activity!');
      },
      error: function(status) {
        console.log('error occurred calling endpoint' + status);
      }
    });
  });
});

// var getActivity = function() {
//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: "/activities",
//     success: function(data) {
//       console.log('called success!!');
//       $('.activities').append(data.id);
//     },
//     error: function(status) {
//       console.log('error occurred calling endpoint' + status);
//     }
//   });

// };       // }; // };
