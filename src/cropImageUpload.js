import showError from './showError';
import config from './config';

var $=jQuery;

//确定上传
var cropImageUpload=function (){
  var img=$('#crop_canvas');
  if (img.length<1) {
    showError('你还没有图片喔。');
    return;
  }
  var imgurl=img[0].toDataURL('image/'+config.current_type);
  var data={
    'img':imgurl,
    'action':'image_upload',
  };
  $.post(config.url,data,function (res){
    $('#image_crop_panel').remove();
    $(config.current_ele).trigger('cropImageUploaded',res);
  });
};

export default cropImageUpload;
