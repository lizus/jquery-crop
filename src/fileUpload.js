import showImage from './showImage';
import {filter,isEmpty} from 'ramda';
import showError from './showError';
import {setCropConfig} from './config';
import config from './config';

var $=jQuery;

//前端上传文件处理
var fileUpload=function (file){
  var max_size=config.size;
  var types=config.type.split(',');
  var type=file['type'].split('/').pop();
  var size=file['size'];
  if(filter(function (item){
    return item==type;
  },types).length<1) {
    showError('仅允许上传图片类型：'+types.join(','));
    return;
  }
  if (size>max_size) {
    showError('请控制文件大小，不能超过'+(max_size/1024/1024)+'M');
    return;
  }
  setCropConfig('current_type',type);
  showImage(file);

};

export default fileUpload;
