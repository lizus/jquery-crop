import stopE from './stopE';
import getShadowImage from './getShadowImage';
var $=jQuery;

var cropImageMouseDown=function (e){
  //stopE(e);
  var img=getShadowImage();
  e.stopPropagation();
  img.data('x',e.clientX);
  img.data('y',e.clientY);
  $(this).addClass('grabing');
};
export default cropImageMouseDown;
