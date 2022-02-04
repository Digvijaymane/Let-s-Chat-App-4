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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() 
    { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
    { childKey = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message']; 
       like = message_data['like']; name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
      row = name_with_tag + message_with_tag +like_button + span_with_tag; 
      document.getElementById("output").innerHTML += row; 
} }); }); }
     getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLike(message_id)
{
      console.log("click on Like Button :-" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}
