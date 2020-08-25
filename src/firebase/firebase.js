import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBINkmOD5xotJ0Tr-kwHWCZczEeXONplM4",
    authDomain: "expensify-b120c.firebaseapp.com",
    databaseURL: "https://expensify-b120c.firebaseio.com",
    projectId: "expensify-b120c",
    storageBucket: "expensify-b120c.appspot.com",
    messagingSenderId: "238831287582",
    appId: "1:238831287582:web:cdfdaca78446bdb48c5d0f",
    measurementId: "G-0PG95BZWW8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  database.ref().set({
      name:'Sabuj Saha',
      age:26,
      isSingle:false,
      location: {
          city:'Chicago',
          country:'USA'
      }
  });
  
  database.ref('location/city').set('San Diago');
  //database.ref().set('This is some data')

  
  database.ref('attributes').set({
    height:6,
    weight:216   
 });