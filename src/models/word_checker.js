const PubSub = require('../helpers/pub_sub.js');

const WordChecker = function() {

};

WordChecker.prototype.bindEvents = function(){
  PubSub.subscribe('InputView:text-inputted', (evt) =>{
    const inputtedText = evt.detail;
    const result = this.wordCount(inputtedText);
    PubSub.publish('WordChecker:result', result);
    console.log(result);
  })
};

WordChecker.prototype.wordCount = function(text){
  let total = 0;
  words = text.split(" ")
    for (var i = 0; i < words.length; i++){
      if (text(i) != "") {
        total = ++;
    }
  };
};

module.exports = WordChecker;
