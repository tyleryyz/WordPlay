import './scrambled_word.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
import { Session } from 'meteor/session';

Template.scrambled_word.onCreated(() => {

      //console.log("OnCreated getting rand word and shuffling it");
      Meteor.call('read_json',function(err,response){
        Session.set("check", true);
        if (Session.get("difficulty")=="EASY"){
          console.log("inside easy check");
          while (Session.get("check") == true){
            console.log("inside easy oncreated while");
            Session.set("rand_word", Random.choice(response.wordlist));
            if (Session.get("rand_word").length <= 5){
              Session.set("check", false);
            }
            console.log("OnCreated Current Random Word", Session.get("rand_word"));
            console.log("why does this execute first?");
            var temp = Session.get("rand_word").split(""),
              rand_length = temp.length;

            for(var i = rand_length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var new_temp = temp[i];
              temp[i] = temp[j];
              temp[j] = new_temp;
          }
        }
          Session.set("shuffled_word", temp.join(""));
          console.log("OnCreated shuffled word", Session.get("shuffled_word"));
            //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
          }
          else if (Session.get("difficulty")=="MEDIUM"){
            console.log("inside medium check");
            while (Session.get("check") == true){
              console.log("inside medium on created while");
              Session.set("rand_word", Random.choice(response.wordlist));
              if (Session.get("rand_word").length <= 8){
                Session.set("check", false);
              }
              console.log("OnCreated Current Random Word", Session.get("rand_word"));
              console.log("why does this execute first?");
              var temp = Session.get("rand_word").split(""),
                rand_length = temp.length;

              for(var i = rand_length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var new_temp = temp[i];
                temp[i] = temp[j];
                temp[j] = new_temp;
            }
          }
            Session.set("shuffled_word", temp.join(""));
            console.log("OnCreated shuffled word", Session.get("shuffled_word"));
              //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
            }
            else if (Session.get("difficulty")=="HARD"){
              console.log("inside hard check");
              while (Session.get("check") == true){
                console.log("inside hard oncreated while");
                Session.set("rand_word", Random.choice(response.wordlist));
                if (Session.get("rand_word").length > 5){
                  Session.set("check", false);
                }
                console.log("OnCreated Current Random Word", Session.get("rand_word"));
                console.log("why does this execute first?");
                var temp = Session.get("rand_word").split(""),
                  rand_length = temp.length;

                for(var i = rand_length - 1; i > 0; i--) {
                  var j = Math.floor(Math.random() * (i + 1));
                  var new_temp = temp[i];
                  temp[i] = temp[j];
                  temp[j] = new_temp;
              }
            }
              Session.set("shuffled_word", temp.join(""));
              console.log("OnCreated shuffled word", Session.get("shuffled_word"));
                //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
              }
        });


  Session.set("score", 0);
  Session.set("helper", 0);
  Session.set("easy_levels", 10);
  Session.set("medium_levels", 15);
  Session.set("hard_levels", 20);

})

Template.scrambled_word.events({
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
    if (Session.get("difficulty") == "EASY" && Session.get("helper")==10){
      FlowRouter.go('/submit_score');
    }
    if (Session.get("difficulty") == "MEDIUM" && Session.get("helper")==15){
      FlowRouter.go('/submit_score');
    }
    if (Session.get("difficulty") == "HARD" && Session.get("helper")==20){
      FlowRouter.go('/submit_score');
    }
    //console.log("inside shuffler");

    Meteor.call('read_json',function(err,response){
      Session.set("check", true);
      if (Session.get("difficulty")=="EASY"){
        console.log("inside easy check");
        while (Session.get("check") == true){
          console.log("inside while");
          Session.set("rand_word", Random.choice(response.wordlist));
          if (Session.get("rand_word").length <= 5){
            Session.set("check", false);
          }
          console.log("OnCreated Current Random Word", Session.get("rand_word"));
          console.log("why does this execute first?");
          var temp = Session.get("rand_word").split(""),
            rand_length = temp.length;

          for(var i = rand_length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var new_temp = temp[i];
            temp[i] = temp[j];
            temp[j] = new_temp;
        }
      }
        Session.set("shuffled_word", temp.join(""));
        console.log("OnCreated shuffled word", Session.get("shuffled_word"));
          //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
        }
        else if (Session.get("difficulty")=="MEDIUM"){
          console.log("inside medium check");
          while (Session.get("check") == true){
            console.log("inside medium button while");
            Session.set("rand_word", Random.choice(response.wordlist));
            if (Session.get("rand_word").length <= 8){
              Session.set("check", false);
            }
            console.log("OnCreated Current Random Word", Session.get("rand_word"));
            console.log("why does this execute first?");
            var temp = Session.get("rand_word").split(""),
              rand_length = temp.length;

            for(var i = rand_length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var new_temp = temp[i];
              temp[i] = temp[j];
              temp[j] = new_temp;
          }
        }
          Session.set("shuffled_word", temp.join(""));
          console.log("OnCreated shuffled word", Session.get("shuffled_word"));
            //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
          }
          else if (Session.get("difficulty")=="HARD"){
            console.log("inside hard check");
            while (Session.get("check") == true){
              console.log("inside hard button while");
              Session.set("rand_word", Random.choice(response.wordlist));
              if (Session.get("rand_word").length > 5){
                Session.set("check", false);
              }
              console.log("OnCreated Current Random Word", Session.get("rand_word"));
              console.log("why does this execute first?");
              var temp = Session.get("rand_word").split(""),
                rand_length = temp.length;

              for(var i = rand_length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var new_temp = temp[i];
                temp[i] = temp[j];
                temp[j] = new_temp;
            }
          }
            Session.set("shuffled_word", temp.join(""));
            console.log("OnCreated shuffled word", Session.get("shuffled_word"));
              //console.log("OnCreated Current Random Word second check: ", Session.get("rand_word"));
            }
      });

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
  },
  get_helper() {
    return (Session.get("helper")+1);
  },
  get_levels() {
    if (Session.get("difficulty") == "EASY"){
      return Session.get("easy_levels");
    }
    else if (Session.get("difficulty") == "MEDIUM"){
      return Session.get("medium_levels");
    }
    else if (Session.get("difficulty") == "HARD"){
      return Session.get("hard_levels");
    }
  }
})
