$(document).ready(function () {

    $("#introP").hide();
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBBf1Zz5aqsPPqqkBZMeYxErpxannJaNzI",
        authDomain: "portfoliov2-60d0f.firebaseapp.com",
        databaseURL: "https://portfoliov2-60d0f.firebaseio.com",
        projectId: "portfoliov2-60d0f",
        storageBucket: "portfoliov2-60d0f.appspot.com",
        messagingSenderId: "464857370645"
    };
    firebase.initializeApp(config);

    const database = firebase.database();

    database.ref().on("child_added", function (snapshot) {
        let data = snapshot.val()
        let snapshotName = data.Name;
        let snapshotMessage = data.Message;
        let tableRow = $("<tr>");
        let tableNameDisplay = $("<td>").text(snapshotName);
        let tableMessageDisplay = $("<td>").text('"' + snapshotMessage + '"').css("font-style", "italic");

        tableRow.append(tableNameDisplay, tableMessageDisplay);
        $("#tableSpace").append(tableRow);

    });


    $("#guestbookSubmit").click(function (event) {
        event.preventDefault();

        let name = $("#gBookNameInput")
        let message = $("#gBookMessageInput")

        database.ref().push({
            Name: name.val(),
            Message: message.val(),
        })

        name.val("");
        message.val("");

    })

    $("#learnMoreBtn").click(function (event){
        $("#introP").show();
        $("#learnMoreBtn").hide()
    })

    $("#contactSubmitBtn").click(function (event){
        event.preventDefault();

    })

});