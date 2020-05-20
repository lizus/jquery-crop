
import wrapCss from './wrapCss';
var $=jQuery;

var config={
  'ie9img':'./ie9img.php',//ie9无法直接客户端处理图片，所以要先上传到服务器，然后再从服务器传回图片数据，详见dist/ajax.php
  'url':'./upload.php',//上传图片的处理地址
  'default_width':500,//要裁剪的宽度默认值
  'default_height':300,//要裁剪的高度默认值
  'width':500,//要裁剪的宽度
  'height':300,//要裁剪的高度
  'size':3.5*1024*1024,//最大允许文件大小
  'type':'jpg,jpeg,gif,png',//上传文件类型
  'current_type':'jpeg',//当前图片的格式
};

var setCropConfig=function (tag,data){
  config[tag]=data;
  if (tag=='width' || tag=='height') {
    wrapCss(config.width,config.height);
    if ($('[name=crop_width]').val() != config.width) {
      $('[name=crop_width]').val(config.width);
    }
    if ($('[name=crop_height]').val() != config.height) {
      $('[name=crop_height]').val(config.height);
    }
  }
}

export default config;

export {setCropConfig};
