import showError from './showError';
import config from './config';
import bodyEventOff from './bodyEventOff';

var $=jQuery;

//确定上传
var cropImageUpload=function (){
  var img=$('#crop_canvas');
  if (img.length<1) {
    showError('你还没有图片喔。');
    return;
  }
  var imgurl=img[0].toDataURL('image/'+config.current_type,0.7);
  var source_imgurl=$('#crop_source_canvas')[0].toDataURL('image/'+config.current_type,0.9);
  var data={
    'img':imgurl,
    'source':source_imgurl,
    'action':'crop_upload',
  };
  $.post(config.url,data,function (res){
    $('#image_crop_panel').remove();
    $(config.current_ele).trigger('cropImageUploaded',res);
    bodyEventOff();
  });
};

export default cropImageUpload;
