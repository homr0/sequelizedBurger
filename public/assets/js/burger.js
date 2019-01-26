$(() => {
    // Changes the status of the burger to devoured.
    $("#burgers .devour").on("click", function(e) {
        e.preventDefault();

        var id = $(this).data("id");

        var devoured = {
            devoured: true
        };

        // Sends the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(() => {
            console.log("Ate the burger!");
            // Reload the page.
            location.reload();
        });
    });

    // Adds a new burger to eat.
    $("#burger-order").on("click", function(e) {
        e.preventDefault();

        var newBurger = {
            burger_name: $("#burger-new").val().trim(),
            devoured: false
        };

        // Sends the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Ordered a new burger!");
            // Reload the page.
            location.reload();
        })
    });
});