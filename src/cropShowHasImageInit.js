
var $=jQuery;

//当crop-show的div中载入图片时，将crop-image-upload去掉
var cropShowHasImageInit=function (){
  var a=$('.crop-show');
  if (a.length<1) return;
  a.removeClass('crop-image-upload');
  a.addClass('crop-has-image');
};
export default cropShowHasImageInit;
