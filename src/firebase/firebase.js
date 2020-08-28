import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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


