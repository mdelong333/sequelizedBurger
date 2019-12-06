$(document).ready(function() {
    // console.log("helloooooo");
    $(".eat").on("click", function(event) {
        
        // console.log("clicked!");
        var burger_id = $(this).val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function(data) {
            location.reload();
        });
    })
})