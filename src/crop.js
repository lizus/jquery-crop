import {getWidth,getHeight,getSize,getType,getIe9Img,getUrl} from './getData';
import {isEmpty,isNil} from 'ramda';
import {trace} from 'lizus';
import wrapCss from './wrapCss';
import isAjaxUploadSupported from './isAjaxUploadSupported';
import ie9formId from './ie9formId';
import config from './config';
import {setCropConfig} from './config';
import bodyEventOn from './bodyEventOn';
var $=jQuery;

var addPanel=function (){
  var html='<div id="image_crop_panel" class="image-crop-panel">';
  //html+='<div class="crop-mark"></div>';
  html+='<span class="crop-close"></span>';
  html+='<div class="crop-control">';
  html+='<div class="crop-show-btns">';
  var w=getWidth(config.current_ele);
  var h=getHeight(config.current_ele);
  html+='裁剪宽高：';
  html+='<input type="text" name="crop_width" value="'+config.width+'" title="裁剪宽度">';
  html+='x';
  html+='<input type="text" name="crop_height" value="'+config.height+'" title="裁剪高度">';

  html+='<button type="button" class="crop-show-cancel crop-btn">重新选择</button>';
  html+='<button type="button" class="crop-show-upload crop-btn">确定上传</button>';
  html+='</div>';//crop-show-btns
  html+='</div>';//crop-control
  html+='<div class="crop-wrap">';
  html+='<input type="file" name="imgUpload">';
  html+='<div class="crop-show crop-image-upload"></div>';
  html+='</div>';//crop-wrap
  html+='</div>';//image-crop-panel
  $('body').append(html);
  return $('#image_crop_panel');
};

var wrapInit=function (j,w,h){
  var wrap=j.find('.crop-wrap');
  setTimeout(function (){
    wrap.addClass('show');
    wrapCss(w,h);
  },10);
};

var fileInit=function (size,type){
  var a=$('.crop-wrap [type=file]');
  if (a.length<1) return;
  a.attr('data-size',size);
  a.attr('data-type',type);
  if (!isAjaxUploadSupported()) {
    ie9formId(a[0]);
  }
};

//显示图片处理面板,并初始化设置
var crop=function (e){
  var default_config={
    'ie9img':'./ie9img.php',//ie9无法直接客户端处理图片，所以要先上传到服务器，然后再从服务器传回图片数据，详见dist/ajax.php
    'url':'./upload.php',//上传图片的处理地址
    'width':500,//要裁剪的宽度
    'height':300,//要裁剪的高度
    'size':3.5*1024*1024,//最大允许文件大小
    'type':'jpg,jpeg,gif,png',//上传文件类型
  };
  var panel=$('#image_crop_panel');
  var w=getWidth(this) || default_config.width;
  var h=getHeight(this) || default_config.height;
  var size=getSize(this) || default_config.size;
  var type=getType(this) || default_config.type;
  var ie9img=getIe9Img(this) || default_config.ie9img;
  var url=getUrl(this) || default_config.url;
  bodyEventOn();
  setCropConfig('current_ele',this);
  setCropConfig('width',w);
  setCropConfig('height',h);
  setCropConfig('default_width',w);
  setCropConfig('default_height',h);
  setCropConfig('size',size);
  setCropConfig('type',type);
  setCropConfig('ie9img',ie9img);
  setCropConfig('url',url);
  if (panel.length<1) {
    panel=addPanel();
  }
  wrapInit(panel,w,h);
  fileInit(size,type);
  return false;
};

export default crop;
