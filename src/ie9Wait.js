
var $=jQuery;

var ie9WaitShow=function (){
  $('.crop-show').removeClass('crop-image-upload');
  $('.crop-show').addClass('crop-image-ie9wait');
};

var ie9WaitRemove=function (){
  $('.crop-show').removeClass('crop-image-ie9wait');
};

export {ie9WaitShow,ie9WaitRemove};
