
var $=jQuery;

var cropImageReset=function (){
  $('.crop-shadow-image').remove();
  $('#crop_canvas').remove();
  $('.crop-show').removeClass('crop-has-image').addClass('crop-image-upload');
  $('.crop-image-upload').trigger('click');
};

export default cropImageReset;
