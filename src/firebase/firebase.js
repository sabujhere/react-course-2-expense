import * as firebase from 'firebase';
import moment from 'moment';

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

  export { firebase, database as default};

  // database.ref('expenses').push({
  //   description: 'Gum',
  //   note: '',
  //   amount: 195,
  //   createdAt: 0
  // });

  // database.ref('expenses').push({
  //   description: 'Rent',
  // note: '',
  // amount: 109500,
  // createdAt: moment(0).subtract(4, 'days').valueOf()
  // });

  // database.ref('expenses').push({
  //   description: 'Credit Card',
  //   note: '',
  //   amount: 4500,
  //   createdAt: moment(0).add(4, 'days').valueOf()
  // });

  // database.ref('expenses')
  // .once('value')
  // .then((snapshot)=>{
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses);
  // });

  // database.ref('expenses').on('child_changed', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val())
  // });

  // const onValueChange = database.ref('expenses').on('value', (snapshot)=>{
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses);
  // });


//   database.ref().set({
//       name:'Sabuj Saha',
//       age:26,
//       isSingle:false,
//       job:{
//           title:'Software developer',
//           company:'Google'
//       },
//       stressLevel:6,
//       location: {
//           city:'Chicago',
//           country:'USA'
//       }
//   }).then(()=>{
//       console.log('data is saved!')
//   }).catch((e)=>{
//     console.log('This failed.', e)
//   });



//  setTimeout(()=>{
//     database.ref().update({
//         stressLevel:9,
//         'job/company':'Amazon',
//         'location/city':'Seattle'
//     }).then(()=>{
//       console.log('user data updated')
//   }).catch((error)=>{
//       console.log('data update failed.error:', error)
//   })
//  },3500);


//  setTimeout(()=>{
//     database.ref().off('value', onValueChange)
// },7000);


