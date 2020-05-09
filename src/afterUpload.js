import showError from './showError';
import showImage from './showImage';
import {setCropConfig} from './config';

var $=jQuery;

//在ie9中上传图片返回后执行
var afterUpload=function (response){
  response = typeof response =='object' ? response : jQuery.parseJSON(response);
  if (response.status == 'success') {
    var data=response.data;
    if (data) {
      showImage(data);
      if (response.type) {
        setCropConfig('current_type',response.type.split('/').pop());
      }
    }
  }else {
    showError('请检查上传图片的文件类型和文件大小');
  }
  $('#crop_image_upload_iframe').remove();
};

export default afterUpload;
