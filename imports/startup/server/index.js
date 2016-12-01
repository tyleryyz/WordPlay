import "./register-apis.js";

Meteor.startup(function() {
  var word_list_obj = JSON.parse(Assets.getText('test.json'));
  var word_list = (word_list_obj.wordlist);
});
