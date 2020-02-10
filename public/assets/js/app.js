$(document).ready(function() {

    $(".make").on("click", function(event) {
        event.preventDefault();
        // console.log("click");
        var newBurg = {
            name: $("#burger-entry").val().trim(),
            devoured: 0
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
        console.log(burger_id);

        var devourBurg = {
            id: burger_id,
            devoured: 1
        };

        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burger_id,
            data: devourBurg
        }).then(function(data) {
            location.reload();
        });
    });
});