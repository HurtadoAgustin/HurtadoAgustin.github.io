'use strict';
/*
const sacha = {
  name: 'sacha',
  twitter: '@sachalifs',
  sayHello: function () {
    function followMe() {
      console.log('followMeOnTwitter: ' + this.twitter);
    };
    console.log("My name is " + this.name);
    console.log(this);
    sayHello.followMe();
  }
}
sacha.sayHello();
*/

const sacha = {
  name: 'sacha',
  twitter: '@sachalifs',
  sayHello: function () {
    console.log("My name is " + this.name);
    this.followMe();
  },
  followMe: function() {
    console.log('followMeOnTwitter: ' + this.twitter);
  }
}
sacha.sayHello();
