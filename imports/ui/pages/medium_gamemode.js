import './medium_gamemode.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';
import '../components/scrambled_word.js'

Template.medium_gamemode.onCreated(() => {
  Session.set("difficulty", "MEDIUM")
})
/*
Template.easy_gamemode.events({
  'submit .make_guess':function (event,template) {
    event.preventDefault();
    console.log("button_pressed");
    console.log(Session.get("rand_word"));
    var target = event.target;
    var text = target.guess.value;
    Session.set("guess", text);
    console.log(Session.get("guess"))
    if (Session.get("guess")==(Session.get("rand_word"))){
        score +=1;
        console.log("score:", score);
        helper +=1;
        console.log("helper:", helper);
    }
    else helper +=1;
    if (helper == 10){
      Session.set("score", score);
      FlowRouter.go('/submit_score');
    }

  }
})
*/
