import getObjectURL from './getObjectURL';
import {isEmpty,isNil} from 'ramda';
import cropShowHasImageInit from './cropShowHasImageInit';
import imgInit from './imgInit';
import getShadowImage from './getShadowImage';

//拿到文件名或图片数据（ie9）后显示图片
export default function (file){
  var img=getShadowImage();
  var src=getObjectURL(file);
  if (isEmpty(src) || isNil(src)) {
    src=file;
  }
  var image=new Image();
  image.src=src;
  console.dir(image);
  img.attr('src',src);
  cropShowHasImageInit();
  image.onload=imgInit;
};
