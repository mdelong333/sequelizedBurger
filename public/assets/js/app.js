$(document).ready(function() {

    $(".make").on("click", function(event) {
        // event.preventDefault();
        // console.log("click");
        var newBurg = {
            name: $("#burger-entry").val().trim(),
            devoured: false
        };
        $.ajax({
            method: "POST",
            url: "/api/burgers",
            data: newBurg
        }).then(function(data) {
            location.reload();
        });
    });

    // console.log("helloooooo");
    $(".eat").on("click", function(event) {
        event.preventDefault();
        // console.log("clicked!");
        var burger_id = $(this).val();
        var devoured = $(this).attr("data-devoured");
        console.log(burger_id);
        console.log(devoured);
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burger_id
        }).then(function(data) {
            location.reload();
        });
    })
})