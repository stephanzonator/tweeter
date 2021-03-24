// const tweetDb = require("../../server/lib/in-memory-db");
$(document).ready(function() {

  //New Tweet handler
  $("form").on("submit", function(event) {
    // console.log(this);
    event.preventDefault();
    const data = $(this).serialize();
    const contents = $(this.querySelector("textarea")).val();
    if (contents.length > 140) {
      alert("Tweet length too long; please reduce size before submitting");
    } else if (contents.length === 0) {
      alert("Tweet can't be blank!");
    } else {
    $.post('/tweets', data)
    .then(function (result) {
      console.log('Success: ', data, result);
      loadTweets();
    });
    }

  });

  const createTweetElement = function(tweet) {
  let $tweet = `
  <article>
    <div class="inline-justify">
      <img src=${tweet["user"]["avatars"]}> 
      <span class="username">${tweet["user"]["handle"]}</span>
    </div>
    <p>
    ${tweet["content"]["text"]}
    </p>
    <hr class="solid">
    <footer class="inline-justify">          
      <span>${tweet["created_at"]}</span>
      <span>Like this tweet!</span>
    </footer>
  </article>`;
  return $tweet;
  // return "returned tweet";
  };

  const renderTweets = function(tweets) {
    let result = "";
    for (let tweet in tweets) {
      // console.log(tweets[tweet]);
      result += createTweetElement(tweets[tweet]);
    }
    // console.log(result);
    return $(".container").append(result);
    
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  };

  const loadTweets  = function() {
    $.get('/tweets')
    .then(function (result) {
      renderTweets(result);
    });
  };

  // renderTweets(data);
  loadTweets();
});



/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */