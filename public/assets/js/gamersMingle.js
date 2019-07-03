$(document).ready(function(){

    //Container that holds all of the users posts
    var postContainer = $(".postContainer");
    //edit user's post
    // $(document).on("click", "button.edit", handlePostEdit);
    

    $("#textBox").on("submit", function(event) {
        console.log("clicked")
        event.preventDefault();
        var newPost = {
            body: $("#body").val().trim(),
        }
        $.ajax("/api/newpost" , {
            type: "POST",
            data: newPost
        }).then(
            function(stuff) {
                console.log(stuff);
                console.log(newPost);
                
                
                console.log("User's Posted");
                location.reload();
                $.ajax("/api/newpost", {
                    type: "GET",
                    
                }).then(data => {
                    console.log(data);
                    
                })
            }
        );


    });
    // <li><strong id="userName">Pengu</strong><br><span id="userPost">Hello</span>
    // <hr><br></li>
    // var list = 


});
