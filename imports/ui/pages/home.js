import './home.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../components/home_page_buttons.js';

//import '../components/main_page_buttons.js';
/*Template.home.onRendered(() => {
  return Meteor.user() ? FlowRouter.go('/main_page') : FlowRouter.go('/');
})
*/
/*Template.home.helpers({
  isUser() {
    return Meteor.user();
  }
})
*/
