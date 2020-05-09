import stopE from './stopE';
import getShadowImage from './getShadowImage';
import {imgWidth,imgHeight,imgLeft,imgTop} from './getShadowImage';
import draw from './draw';
import {wrapWidth,wrapHeight} from './wrapCss';

var cropImageWheel=function (e){
  stopE(e);
  e.stopPropagation();
  var img=getShadowImage();
  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
  (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
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
  if (delta > 0) {
    step=Math.floor(w*0.01) || 1;
    w=w+step;
    h=w/ratio;
  } else if (delta < 0) {
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
};

export default cropImageWheel;
