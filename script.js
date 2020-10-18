var firebaseConfig = {
  apiKey: "AIzaSyBEwLpbIRohgkY9-_qW5SMcNzrbHz54OMk",
  authDomain: "zhejtujpolityka.firebaseapp.com",
  databaseURL: "https://zhejtujpolityka.firebaseio.com",
  projectId: "zhejtujpolityka",
  storageBucket: "zhejtujpolityka.appspot.com",
  messagingSenderId: "615665011",
  appId: "1:615665011:web:766ffa877b849aeecb8906",
  measurementId: "G-SFKPTFTZJ0",
};
firebase.initializeApp(firebaseConfig);

var ref = firebase.database().ref("DANE");
ref.on(
  "value",
  function (snapshot) {
    document.getElementsByClassName("fb-info")[0].innerHTML =
      snapshot.val();
  },
  function (error) {
    console.log("Error: " + error.code);
  }
);
