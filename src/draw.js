import getShadowImage from './getShadowImage';
import {imgWidth,imgHeight,imgLeft,imgTop} from './getShadowImage';
import {trace} from 'lizus';
import config from './config';
var $=jQuery;

var getCanvas=function (){
  var img=$('#crop_canvas');
  if (img.length<1) {
    $('.crop-show').html('<canvas class="crop-show-image" id="crop_canvas"></canvas>');
    img=$('#crop_canvas');
  }
  return img;
};

var draw=function (){
  var img=getShadowImage();
  var canvas=getCanvas()[0];
  var cxt=canvas.getContext('2d');
  var w=config.width;
  var h=config.height;
  canvas.width=w;
  canvas.height=h;
  var iw=imgWidth();
  var ih=imgHeight();
  var x=imgLeft();
  var y=imgTop();
  var ow=img.attr('data-ow')-0;
  var oh=img.attr('data-oh')-0;
  var scale=ow/iw;
  var sw=w*scale;
  var sh=h*scale;

  cxt.clearRect(0, 0, w, h);

  var ratio=img.attr('data-ratio')-0;
  if (isNaN(ratio)) ratio=0;
  if (ratio!=0) {
    cxt.translate(w / 2, h / 2);
    cxt.rotate(ratio / 180 * Math.PI);
    cxt.translate(-w / 2, -h / 2);
  }

  var sx=0-x*scale;
  var sy=0-y*scale;
  trace('x:',x);
  trace('y:',y);
  trace('scale:',scale);
  trace('sx:',sx);
  trace('sy:',sy);
  trace('sw:',sw);
  trace('sh:',sh);
  cxt.drawImage(img[0],sx,sy,sw,sh,0,0,w,h);
};

export default draw;
