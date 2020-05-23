//源图的canvas，用于上传源图数据

import getShadowImage from './getShadowImage';
import {trace} from 'lizus';
import config from './config';
var $=jQuery;

var getSourceCanvas=function (create){
  var img=$('#crop_source_canvas');
  if (img.length<1 && create==true) {
    $('.crop-show').before('<canvas class="crop-source-canvas" id="crop_source_canvas" style="display:none;"></canvas>');
    img=$('#crop_source_canvas');
  }
  return img;
};

var draw_source=function (){
  var img=getShadowImage();
  var canvas=getSourceCanvas(true)[0];
  var cxt=canvas.getContext('2d');
  var w=img[0].naturalWidth;
  var h=img[0].naturalHeight;
  canvas.width=w;
  canvas.height=h;
  cxt.clearRect(0, 0, w, h);
  cxt.drawImage(img[0],0,0,w,h,0,0,w,h);
};

export default draw_source;
export {getSourceCanvas};
