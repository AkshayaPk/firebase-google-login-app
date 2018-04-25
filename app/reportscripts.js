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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
  } else {
    // No user is signed in.
    window.location.href="index.html";
  }
});

var logout=document.getElementById("logout");

logout.addEventListener('click',e=>{
	firebase.auth().signOut();
})

}());
