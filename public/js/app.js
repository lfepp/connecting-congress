'use strict';

var passedData = decodeURIComponent(window.location.href);
var data = JSON.parse(passedData.substring(35));

// Loop to cycle through each representative
for (var rep in data.results) {
  var chamber = data.results[rep].chamber.substring(0, 1).toUpperCase() + data.results[rep].chamber.substring(1);
  // Display rep name and party
  $('.rep-data').append('<div class="panel panel-default"><div class="panel-heading"><h2 class="panel-title">' + data.results[rep].first_name + ' ' + data.results[rep].last_name + ' </h2>' + data.results[rep].party + ' - ' + data.results[rep].state + '</div>'
  // Display rep chamber
  + '<div class="panel-body ' + data.results[rep].bioguide_id + '"><strong>Chamber:</strong> ' + chamber + '<br>'
  // Display rep phone
  + '<strong>Phone:</strong> ' + data.results[rep].phone + '<br>'
  // Display rep email
  + '<strong>OpenCongress Email:</strong> ' + data.results[rep].oc_email + '<br>'
  // Display rep website
  + '<strong>Website:</strong> ' + data.results[rep].website + '<br>'
  // Display/embed rep contact form
  + '<strong>Contact Form:</strong> ' + data.results[rep].contact_form + '<br><br>\
  <strong>Social Media</strong><br></div></div>');
  // Display rep social channels (FB, Twitter, YT)
  if (data.results[rep].facebook_id != null) {
    $('.' + data.results[rep].bioguide_id).append('<a href="https://www.facebook.com/' + data.results[rep].facebook_id + '"><img class="logo" src="../img/facebook_logo.png"></a>');
  }
  if (data.results[rep].twitter_id != null) {
    $('.' + data.results[rep].bioguide_id).append('<a href="https://www.twitter.com/' + data.results[rep].twitter_id + '"><img class="logo" src="../img/twitter_logo.png"></a>');
  }
  if (data.results[rep].youtube_id != null) {
    $('.' + data.results[rep].bioguide_id).append('<a href="https://www.youtube.com/"' + data.results[rep].youtube_id + '"><img class="logo" src="../img/youtube_logo.png"></a>');
  }
}
