import stopE from './stopE';
import getShadowImage from './getShadowImage';
var $=jQuery;

var cropImageMouseUp=function (e){
  stopE(e);
  e.stopPropagation();
  var img=getShadowImage();
  img.removeData('x');
  img.removeData('y');
  $('.crop-show').removeClass('grabing');
};
export default cropImageMouseUp;
