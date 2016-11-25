$(function () {
  $('#more-options').click(function() {
    $('.block-additional').show()
  });
  $('.button-checkbox').each(function() {
    $(this).on('click', function() {
      var image = $(this).find(".logo-icon");
      var checkbox = $(this).find("input");
      var newState = checkbox.attr("checked") == "checked" ? false : true;

      if (checkbox.attr("type") == "radio"){
	$(".logo-icon[data-component="+ $(this).data('component') +"]").removeClass('selected');
	$("input[data-component="+ $(this).data('component') +"]").removeAttr("checked");
      }

      console.debug(newState)

      if(newState == true) {
	image.addClass('selected');
	checkbox.prop("checked", newState);
      } else {
	image.removeClass('selected');
	checkbox.removeAttr('checked');
      }
    });
  });
});
