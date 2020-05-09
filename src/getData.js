import {curry} from 'ramda';
var $=jQuery;

var getData=curry(function (tag,ele){
  return $(ele).attr('data-'+tag);
});

var getWidth=getData('width');//图片宽度
var getHeight=getData('height');//图片高度
var getSize=getData('size');//文件大小限制
var getType=getData('type');//文件类型限制
var getIe9Img=getData('ie9img');//ie9兼容处理图片地址
var getUrl=getData('url');//图片上传处理地址

export default getData;

export {
  getWidth,
  getHeight,
  getSize,
  getType,
  getIe9Img,
  getUrl,
};
