import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/home.js';
import '../../ui/layouts/default.js';
import '../../ui/pages/play_game.js';
import '../../ui/pages/easy_gamemode.js';

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
