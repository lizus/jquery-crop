import closePanel from './closePanel';
import uploadClick from './uploadClick';
import fileUpload from './fileUpload';
import cropImageWheel from './cropImageWheel';
import cropImageMouseDown from './cropImageMouseDown';
import cropImageMouseMove from './cropImageMouseMove';
import cropImageMouseUp from './cropImageMouseUp';
import cropImageReset from './cropImageReset';
import cropImageUpload from './cropImageUpload';
import resetWidth from './resetWidth';
import resetHeight from './resetHeight';
import dragoverEvent from './dragoverEvent';
import dropEvent from './dropEvent';
import imgUploadChange from './imgUploadChange';

var $=jQuery;

var bodyEventOn=function (){
  //$('body').on('click','.crop-mark',closePanel);
  $('body').on('click','.crop-close',closePanel);
  $('body').on('click','.crop-image-upload',uploadClick);
  $('body').on('dragover','.crop-show',dragoverEvent);
  $('body').on('drop','.crop-show',dropEvent);
  $('body').on('change','[name="imgUpload"]',imgUploadChange);
  $('body').on('mousewheel DOMMouseScroll','.crop-has-image',cropImageWheel);
  $('body').on('mousedown','.crop-has-image',cropImageMouseDown);
  $('body').on('mouseup',cropImageMouseUp);
  //$('body').on('mousemove','.crop-has-image',cropImageMouseMove);
  $('body').on('mousemove','#image_crop_panel',cropImageMouseMove);
  //$('body').on('mouseleave','.crop-has-image',cropImageMouseUp);
  $('body').on('mouseleave','#image_crop_panel',cropImageMouseUp);
  $('body').on('click','.crop-show-cancel',cropImageReset);
  $('body').on('click','.crop-show-upload',cropImageUpload);
  $('body').on('blur','[name=crop_width]',resetWidth);
  $('body').on('blur','[name=crop_height]',resetHeight);
};

export default bodyEventOn;
