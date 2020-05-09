import stopE from './stopE';
import {isNil} from 'ramda';
import getShadowImage from './getShadowImage';
import {imgWidth,imgHeight,imgLeft,imgTop} from './getShadowImage';
import {wrapWidth,wrapHeight} from './wrapCss';
import draw from './draw';
var $=jQuery;

var cropImageMouseMove=function (e){
  stopE(e);
  //e.stopPropagation();
  var img=getShadowImage();
  var ox=img.data('x');
  var oy=img.data('y');
  if (isNil(ox) || isNil(oy)) return;
  var w=imgWidth();
  var h=imgHeight();
  var l=imgLeft();
  var t=imgTop();
  var ratio=w/h;
  var cw=wrapWidth();
  var ch=wrapHeight();
  var x=e.clientX;
  var y=e.clientY;
  img.data('x',x);
  img.data('y',y);
  var deltaX=x-ox;
  var deltaY=y-oy;
  l=l+deltaX;
  t=t+deltaY;
  if (l>0) l=0;
  if (t>0) t=0;
  if (l+w<cw) l=cw-w;
  if (t+h<ch) t=ch-h;
  img.css({
    left:Math.floor(l),
    top:Math.floor(t),
  });
  draw();
};
export default cropImageMouseMove;
