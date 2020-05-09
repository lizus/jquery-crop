
var $=jQuery;

var getShadowImage=function (){
  var img=$('.crop-shadow-image');
  if (img.length<1) {
    $('.crop-show').after('<img class="crop-shadow-image">');
    img=$('.crop-shadow-image');
  }
  return img;
};

export default getShadowImage;


var imgWidth=function (){
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('width')));
};
var imgHeight=function (){
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('height')));
};
var imgLeft=function (){
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('left')));
};
var imgTop=function (){
  var p=getShadowImage();
  return Math.floor(parseFloat(p.css('top')));
};

export {imgWidth,imgHeight,imgLeft,imgTop};
