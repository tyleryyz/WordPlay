import './scrambled_word.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
import { ReactiveDict } from 'meteor/reactive-dict';

Template.scrambled_word.onCreated(() => {

  console.log("OnCreated getting rand word and shuffling it");
  Meteor.call('read_json',function(err,response){
      Session.set("rand_word", Random.choice(response.wordlist));
      console.log("OnCreated Current Random Word", Session.get("rand_word"));
      //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
  });
  Session.set("score", 0);
  Session.set("helper", 0);
  console.log("why does this execute first?");
  var temp = Session.get("rand_word").split(""),
    rand_length = temp.length;

  for(var i = rand_length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var new_temp = temp[i];
    temp[i] = temp[j];
    temp[j] = new_temp;
}
Session.set("shuffled_word", temp.join(""));
console.log("OnCreated shuffled word", Session.get("shuffled_word"));
})

Template.easy_gamemode.events({
  'submit .make_guess':function (event) {
    event.preventDefault();
    console.log("button_pressed");
    console.log("Random Word immediately after button press: ", Session.get("rand_word"));
    var target = event.target;
    var text = target.guess.value;
    Session.set("guess", text);
    console.log("guess: ", Session.get("guess"))
    if (Session.get("guess") == (Session.get("rand_word"))){
        Session.set("score", Session.get("score")+1);
        console.log("score:", Session.get("score"));
        Session.set("helper", Session.get("helper")+1);
        console.log("helper:", Session.get("helper"));
    }
    else {
      Session.set("helper", Session.get("helper")+1);
      console.log("helper:", Session.get("helper"));
    }
    if (Session.get("helper") == 10){
      FlowRouter.go('/submit_score');
    }
    //console.log("inside shuffler");
    if (typeof console !== 'undefined'){
        console.log("Calling read_json");
        Meteor.call('read_json',function(err,response){
            Session.set("rand_word", Random.choice(response.wordlist));
            console.log("Rand word after button press and checks: ", Session.get("rand_word"));
        });
    }
    var temp = Session.get("rand_word").split(""),
      rand_length = temp.length;

    for(var i = rand_length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var new_temp = temp[i];
      temp[i] = temp[j];
      temp[j] = new_temp;
  }
  Session.set("shuffled_word", temp.join(""));
  console.log("button press shuffled word after checks: ", Session.get("shuffled_word"));
  }
})

Template.scrambled_word.helpers({
  /*word_shuffler() {
    console.log("inside shuffler");
    var temp = Session.get("rand_word").split(""),
      rand_length = temp.length;

    for(var i = rand_length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var new_temp = temp[i];
      temp[i] = temp[j];
      temp[j] = new_temp;
  }
  Session.set("shuffled_word", temp.join(""));
  console.log(Session.get("shuffled_word"));
},
*/
  new_shuffled_word() {
    return Session.get("shuffled_word");
  }
})
