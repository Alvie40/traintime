// Initialize Firebase
   // Your web app's Firebase configuration
   var config = {
    apiKey: "AIzaSyAEl7-XBccoctpkSDortgY2Eh7bcIixtVI",
    authDomain: "train-schedule-5151.firebaseapp.com",
    databaseURL: "https://train-schedule-5151.firebaseio.com",
    projectId: "train-schedule-5151",
    storageBucket: "train-schedule-5151.appspot.com",
    messagingSenderId: "284077912940",
    // appId: "1:284077912940:web:4de5af7e4895b84b"
  };

  firebase.initializeApp(config);
  var database = firebase.database();
 
  //train object
  var trainShedule = function (name, destination, firstTrain, frequency) {
    this.trainName = name;
    this.trainDestination = destination;
    this.firstTrain = firstTrain;
    this.trainFrequency = frequency;

    if(typeof(name) === undefined){
      this.name = "";
    }
    if(typeof(destination) === undefined){
      this.trainDestination = "";
    }

    if(typeof(firstTrain) === undefined){
      this.firstTrain = "";
    }
    if(typeof(frequency) === undefined){
      this.trainFrequency = "";
    }
}
