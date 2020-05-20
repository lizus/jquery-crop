
var $=jQuery;

var getShadowImage=function (create){
  var img=$('.crop-shadow-image');
  if (img.length<1 && create==true) {
    $('.crop-show').after('<img class="crop-shadow-image">');
    img=$('.crop-shadow-image');
  }
  return img;
};

export default getShadowImage;


var imgWidth=function (){
  var img=$('.crop-shadow-image');
  if (img.length<1) return 0;
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('width')));
};
var imgHeight=function (){
  var img=$('.crop-shadow-image');
  if (img.length<1) return 0;
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('height')));
};
var imgLeft=function (){
  var img=$('.crop-shadow-image');
  if (img.length<1) return 0;
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('left')));
};
var imgTop=function (){
  var img=$('.crop-shadow-image');
  if (img.length<1) return 0;
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('top')));
};

export {imgWidth,imgHeight,imgLeft,imgTop};
