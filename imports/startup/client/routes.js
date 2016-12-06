import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/home.js';
import '../../ui/layouts/default.js';
import '../../ui/pages/play_game.js';
import '../../ui/pages/easy_gamemode.js';
import '../../ui/pages/medium_gamemode.js';
import '../../ui/pages/hard_gamemode.js';
import'../../ui/pages/submit_score.js';
import'../../ui/pages/view_scores.js';

const authroutes = FlowRouter.group({
  name: 'authenticated',
})

authroutes.route('/', {
   name: 'home',
   action(){
     BlazeLayout.render('default', {yield: 'home'})
   }
 })

 authroutes.route('/play_game', {
    name: 'play_game',
    action(){
      BlazeLayout.render('default', {yield: 'play_game'})
    }
  })

  authroutes.route('/easy_gamemode', {
     name: 'easy_gamemode',
     action(){
       BlazeLayout.render('default', {yield: 'easy_gamemode'})
     }
   })

   authroutes.route('/medium_gamemode', {
      name: 'medium_gamemode',
      action(){
        BlazeLayout.render('default', {yield: 'medium_gamemode'})
      }
    })
    authroutes.route('/hard_gamemode', {
       name: 'hard_gamemode',
       action(){
         BlazeLayout.render('default', {yield: 'hard_gamemode'})
       }
     })

   authroutes.route('/submit_score', {
      name: 'submit_score',
      action(){
        BlazeLayout.render('default', {yield: 'submit_score'})
      }
    })
    authroutes.route('/view_scores', {
       name: 'view_scores',
       action(){
         BlazeLayout.render('default', {yield: 'view_scores'})
       }
     })
