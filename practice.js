const firebaseConfig = {
    apiKey: "AIzaSyCFudlKjcX_q3w-5Z3pP41gCnZteiTJWd8",
    authDomain: "c-96-kwitter-app.firebaseapp.com",
    databaseURL: "https://c-96-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "c-96-kwitter-app",
    storageBucket: "c-96-kwitter-app.appspot.com",
    messagingSenderId: "231991097484",
    appId: "1:231991097484:web:819684e02b433a8d81a3a9"
  };

   firebase.initializeApp(firebaseConfig);
 
  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addUser"
    });
    
}