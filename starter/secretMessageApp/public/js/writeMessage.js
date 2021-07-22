const messagesRef = firebase.database().ref();

messagesRef.push ({
    message: "yayy" ,
    passcode: "hi"
});