const PubSub = require('../helpers/pub_sub.js');
const ResultView = function () {

};

ResultView.prototype.updateView = function (result) {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordChecker:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  });
};



module.exports = ResultView;
