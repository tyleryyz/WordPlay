import "./register-apis.js";

/*Meteor.startup(function() {
  word_list_obj = JSON.parse(Assets.getText('test.json'));
  word_list = (word_list_obj.wordlist);
});
*/
 Meteor.methods({ read_json: function(){ return JSON.parse(Assets.getText('test.json')); }});
