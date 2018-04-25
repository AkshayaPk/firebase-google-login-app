 (function(){
 var config = {
    apiKey: "AIzaSyDRMtTyhtUU6I0AA9uEsN5M2_p-jmXQF78",
    authDomain: "reports-revature-project.firebaseapp.com",
    databaseURL: "https://reports-revature-project.firebaseio.com",
    projectId: "reports-revature-project",
    storageBucket: "",
    messagingSenderId: "546745876258"
  };
  firebase.initializeApp(config);

//Get all the elements into the DOM
// var emailId=document.getElementById("inputEmail");
// var pass=document.getElementById("inputPassword");
 var btnLogin=document.getElementById("login");
// var btnSignUp=document.getElementById("signUp");

//Add Login Event
btnLogin.addEventListener('click',e=>{
//For Firebase
var provider = new firebase.auth.GoogleAuthProvider();
// var auth=firebase.auth();
// var email=emailId.value;
// var password=pass.value;
//Sign In
// firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
// console.log(user);
// window.location.href="reports.html";
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
//   window.alert("Error" + errorMessage);
// });
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  window.location.href="reports.html";
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  window.alert("Error" + errorMessage);
  // ...
});

});

// btnSignUp.addEventListener('click',e=>{
// var email=emailId.value;
// var password=pass.value;
// var auth=firebase.auth();
// var promise=auth.createUserWithEmailAndPassword(email,password);
// promise.catch(e=>window.alert(e.message));

// });



}());



