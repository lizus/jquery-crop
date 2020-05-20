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
import cropImageKeyPress from './cropImageKeyPress';

var $=jQuery;

var bodyEventOff=function (){
  //$('body').off('click','.crop-mark',closePanel);
  $('body').off('click','.crop-close',closePanel);
  $('body').off('click','.crop-image-upload',uploadClick);
  $('body').off('dragover','.crop-show',dragoverEvent);
  $('body').off('drop','.crop-show',dropEvent);
  $('body').off('change','[name="imgUpload"]',imgUploadChange);
  //$('body').off('mousewheel DOMMouseScroll','.crop-has-image',cropImageWheel);
  $(window).off('keydown',cropImageKeyPress);
  $('body').off('mousedown','.crop-has-image',cropImageMouseDown);
  $('body').off('mouseup',cropImageMouseUp);
  //$('body').off('mousemove','.crop-has-image',cropImageMouseMove);
  $('body').off('mousemove','#image_crop_panel',cropImageMouseMove);
  //$('body').off('mouseleave','.crop-has-image',cropImageMouseUp);
  $('body').off('mouseleave','#image_crop_panel',cropImageMouseUp);
  $('body').off('click','.crop-show-cancel',cropImageReset);
  $('body').off('click','.crop-show-upload',cropImageUpload);
  $('body').off('blur','[name=crop_width]',resetWidth);
  $('body').off('blur','[name=crop_height]',resetHeight);
};

export default bodyEventOff;
