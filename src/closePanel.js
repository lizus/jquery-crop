import bodyEventOff from './bodyEventOff';
var $=jQuery;

var closePanel=function (){
  if ($('.crop-has-image').length<1) {
    r=true;
  }else {
    var r=confirm('退出后不会保存已裁剪的图片喔，确定退出吗？')
  }
  if (r==true) {
    $('#image_crop_panel').remove();
    bodyEventOff();
  }
};

export default closePanel;
