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
        $.ajax("/dashboard", {
            type: "POST",
            data: newPost
        }).then(
            function() {
                console.log("User's Posted");
                location.reload();
            }
        );
    });



});





var PictureUpdate = /** @class */function () {
    function PictureUpdate() {
      this.profile = $('.profile-pic'); //direct parent
      this.cover = $('.cover'); //direct parent
      this.updateProfile();
      this.updateCover();
    }
    PictureUpdate.prototype.updateProfile = function () {
      var _this = this;
      var input = $('input', this.profile);
      input.change(function (e) {
        var img = URL.createObjectURL(e.target.files[0]);
        _this.fireAJAX(null, img, _this.profile);
      });
    };
    PictureUpdate.prototype.updateCover = function () {
      var _this = this;
      var input = $('input', this.cover);
      input.change(function (e) {
        var img = URL.createObjectURL(e.target.files[0]);
        _this.fireAJAX(null, img, _this.cover);
      });
    };
    PictureUpdate.prototype.fireAJAX = function (url, data, element) {
      var _this = this;
      $.ajax({
        type: "POST",
        data: data,
        beforeSend: function () {
          _this.startLoader(element);
        },
        success: function () {
          setTimeout(function () {
            _this.destroyLoader(element);
            $('> img', element).attr("src", data);
          }, 2000);
        } });
  
    };
    PictureUpdate.prototype.startLoader = function (element) {
      var loader = $('.layer', element);
      loader.addClass("visible");
    };
    PictureUpdate.prototype.destroyLoader = function (element) {
      var loader = $('.layer', element);
      loader.removeClass("visible");
    };
    return PictureUpdate;
  }();
  new PictureUpdate();