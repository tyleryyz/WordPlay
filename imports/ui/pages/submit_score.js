import './submit_score.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


Template.submit_score.helpers({
  get_score() {
    console.log("here");
    return Session.get("score")*100;
  },
  get_difficulty() {
    return Session.get("difficulty");
  }
})
