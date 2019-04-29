// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 
  //and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 
  // and a length of 16, 18, or 19.

  var visaLengths = [13,16,19];
  var masterPrefix = ['51','52','53','54','55']
  var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65']
  var discoverLengths = [16, 19]
  var maestroPrefix = ['5018', '5020', '5038', '6304']
  var maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19]
  var switchPrefix = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110']
  var switchLengths = [16, 18, 19]

  if ((cardNumber.substr(0,2) === '38' ||  cardNumber.substr(0,2) === '39') && cardNumber.length === 14) {
  	return 'Diner\'s Club'
  } 
  if ((cardNumber.substr(0,2) === '34' ||  cardNumber.substr(0,2) === '37') && cardNumber.length === 15) {
  	return 'American Express'
  } 
  if (cardNumber.substr(0,1) === '4' && visaLengths.includes(cardNumber.length) && !switchPrefix.includes(cardNumber.substr(0,4))){
  	return 'Visa'
  } 
  if (masterPrefix.includes(cardNumber.substr(0,2)) && cardNumber.length === 16){
  	return 'MasterCard';
  } 

  for (elements of discoverPrefix){
  	if(cardNumber.indexOf(elements) === 0  && discoverLengths.includes(cardNumber.length)){
  	  return 'Discover'
  	}
  }

  if (maestroPrefix.includes(cardNumber.substr(0,4)) && maestroLengths.includes(cardNumber.length)){
  	return 'Maestro'
  }

  var chinaPrefix = ['624','625','626', '6282', '6283', '6284', '6285', '6286', '6287', '6288']
  for(var count = 622126; count <= 622925; count ++){
  	chinaPrefix.push(count.toString())
  }
  var chinaLengths = [16, 17, 18, 19]

  for (elements of chinaPrefix){
  	if(cardNumber.indexOf(elements) === 0  && chinaLengths.includes(cardNumber.length)){
  		return 'China UnionPay'
  	}
  }

  for (elements of switchPrefix){
  	if(cardNumber.indexOf(elements) === 0  && switchLengths.includes(cardNumber.length)){
  		return 'Switch'
  	}
  }

};


