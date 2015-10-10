var passedData = decodeURIComponent(window.location.href);
var data = JSON.parse(passedData.substring(35));

// Loop to cycle through each representative
for (var rep in data.results) {
  // Display rep name and party
  $('.container').append('<div class="page-header"><h2>' + data.results[rep].first_name + ' ' + data.results[rep].last_name + ' <small>' + data.results[rep].party + ' - ' + data.results[rep].state + '</small></h2></div>');
  // Display rep chamber
  // Display rep phone
  // Display rep email
  // Display rep website
  // Display/embed rep contact form
  // Display rep social channels (FB, Twitter, YT)
}
