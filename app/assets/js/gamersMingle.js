$(document).ready(function(){

    //Container that holds all of the users posts
    var postContainer = $(".postContainer");
    //edit user's post
    $(document).on("click", "button.edit", handlePostEdit);
    

    $("#textBox").on("submit", function(event) {
        event.preventDefault();
        var newPost = {
            post: $("#autocomplete-input").val(),
        }
        $.ajax("/api/home/" + id, {
            type: "POST",
            data: newPost
        }).then(
            function() {
                console.log("User's Posted");
                location.reload();
            }
        );
    });

    // {{!-- need to connect the signin button to the signin page --}}

        // $.ajax({
        //     type: "POST",
        //     url: "/api/signin",
        //     data: ,
        //     success: function(data){
        //         console.log("success");
        //     }
        // })

        // $.ajax({
        //     type: "POST",
        //     url: "/api/signup",
        //     data:,
        //     success: function(data){
        //         console.log("success");
        //     }
        // })

});
