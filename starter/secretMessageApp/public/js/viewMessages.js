const findMessages = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value',(snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data) {
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode) {
            renderMessage(message);
            }
        }
    });
}

document.querySelector("#viewMsg").addEventListener("click" , (e) => {
  const userPasscodeGuess = document.querySelector("#passcode").value;
  //findMessages(passcode);
  const messagesRef = firebase.database().ref();
  messagesRef.on("value", (snapshot) => {
    const data = snapshot.val();
        for(let key in data) {
            if(data[key].passcode == userPasscodeGuess) {
                display(data[key]);
              //  const top = document.querySelector("#top");
             //   top.innerHTML = data[key].message;
            }
            
        }
  });
});

function display(message) {
    console.log(message);
    document.querySelector("#message").innerHTML = message.message;
}