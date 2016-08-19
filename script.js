
		var quotes = ["I don’t want to earn my living, I want to live.", 
									
									"Live for yourself.",
                  
									"Life must be lived forwards, but can only be understood backwards.", 
                  
									"The trouble is you think you have time.", 
									
								 "Life is a shipwreck, but we must not forget to sing in the lifeboats.", 
                  
								 "Life is ten percent what happens to you and ninety percent how you      respond to it.",
                  
								 "Youth is counted sweetest by those who are no longer young.",
                  
                  "Life is really simple, but we insist on making it complicated.",
                  
                  "Life isn't about finding yourself. It is about creating yourself.",
                  
                  "He who is not courageous enough to take risks will accomplish nothing in life.",
                  
                  "The purpose of our lives is to be happy.",
                  
                  "You have enemies? Good, that means you have stood up for something, sometime in your life.",
                  
                  "Stay hungry, stay foolish.",
                  
                  "Nothing is impossible. The word itself says 'I'm possible'.",
                  
                  "Be less curious about people, and more curious about ideas.",
                  
                  "What is money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
                  
                  "The most courageous act still, is to think for yourself. Aloud."
                 ];
		
		
		var author = ["Oscar Wilde", 
                  
									"Unknown", 
                  
									"Kierkegaard", 
                  
									"Buddha", 
                  
									"Voltaire", 
                  
									"Lou Holtz", 
                  
									"John Green",
                 
                 "Confucius",
                 
                 "George Bernard Shaw",
                 
                 "Muhammad Ali",
                 
                 "Dalai Lama",
                 
                 "Winston Churchill",
                 
                 "Steve Jobs",
                 
                 "Audrey Hepburn",
                 
                 "Marie Curie",
                 
                 "Bob Dylan",
                 
                 "CoCo Chanel"];
		
	
		
		$("#quote").html(quoteArray[0]);
$("#quote-author").html("- " + authorArray[0]);
tweetQuote();

function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

function newQuote() {
  var randomInt = getRandom(quotes.length );
  $("#quote").html(quotes[randomInt]);
  $("#quote-author").html("- " + author[randomInt]);
  tweetQuote();
}

function tweetQuote(){
  var tweet = "https://twitter.com/intent/tweet?text=".concat($("#quote").text()+"  "+$("#quote-author").text());
  $(".twitter-share-button").attr("href",tweet);
}


