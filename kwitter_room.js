
const firebaseConfig = {
      apiKey: "AIzaSyD1l1ayD2pqrTKje9t373JsFpeguai9p6s",
      authDomain: "chat-space-c65e3.firebaseapp.com",
      databaseURL: "https://chat-space-c65e3-default-rtdb.firebaseio.com",
      projectId: "chat-space-c65e3",
      storageBucket: "chat-space-c65e3.appspot.com",
      messagingSenderId: "27739429758",
      appId: "1:27739429758:web:4410ab82cd0459b49f712f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}