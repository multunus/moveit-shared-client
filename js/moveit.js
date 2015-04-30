$(function(){
  $('.add-entry-btn').on('click', 'i' , function(){
    window.location = "index.html";
  });
});

var disableSaveButtonWith = function(form, text){
  var saveBtn = $(form).find('button[type=submit]')[0];
  saveBtn.disabled = true;
  saveBtn.textContent = text;
};

var enableSaveButtonWith = function(form, text){
  var saveBtn = $(form).find('button[type=submit]')[0];
  saveBtn.disabled = false;
  saveBtn.textContent = text;
};

var getParameterByName = function(name, location) {
  var query_name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + query_name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


var UserInteraction =
      {
        bump: function(from_user_email, to_user_email, drag_section){
          var data = {
            from_email_id : from_user_email,
            to_email_id : to_user_email
          };

          drag_section.animate({
            left: '+=400px'
          }, 250);
          
          drag_section.siblings('.interaction-message.bump').removeClass('hidden');
          drag_section.hide();
          $.ajax({
            dataType: 'json',
            url: settings.getSetting("apiUrl") + 'user/bump',
            type: 'POST',
            data: data,
            success: function(data, textStatus, jqXHR) {
              drag_section.show();
              drag_section.animate({
                left: '-=400px'
              }, 250);
              drag_section.siblings('.interaction-message.bump').addClass('hidden');
            },
            error: function() {
              alert("failed");
            },
            timeout: 30000
          });
        },

        nudge: function(from_user_email, to_user_email){

        }
      };
