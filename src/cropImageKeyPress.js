import stopE from './stopE';
import getShadowImage from './getShadowImage';
import {imgWidth,imgHeight,imgLeft,imgTop} from './getShadowImage';
import draw from './draw';
import {wrapWidth,wrapHeight} from './wrapCss';

//使用键盘上的上下方向键进行缩放
var cropImageKeyPress=function (e){
  if (e.keyCode!=40 && e.keyCode!=38 ) return;
  stopE(e);
  e.stopPropagation();
  var img=getShadowImage();
  var w=imgWidth();
  var h=imgHeight();
  var l=imgLeft();
  var t=imgTop();
  var ow=img.attr('data-ow')-0;
  var oh=img.attr('data-oh')-0;
  var ratio=ow/oh;
  var cw=wrapWidth();
  var ch=wrapHeight();
  var step=0;
  if (e.keyCode===40) {//down
    step=Math.floor(w*0.01) || 1;
    w=w+step;
    h=w/ratio;
  }
  if (e.keyCode===38) {//up
    w=w*(0.99);
    h=w/ratio;
    if (w+l<cw) {
      w=cw-l;
      h=w/ratio;
    }
    if(h+t<=ch) {
      h=ch-t+1;
      w=h*ratio;
    }
  }
  img.css({
    width:Math.floor(w),
    height:Math.floor(h)
  });
  draw();

  return false;
};
export default cropImageKeyPress;
