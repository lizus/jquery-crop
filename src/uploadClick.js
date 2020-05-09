import isAjaxUploadSupported from './isAjaxUploadSupported';
import ie9formId from './ie9formId';
var $=jQuery;

var uploadClick=function (){
  if (isAjaxUploadSupported()) {
    $(this).siblings('[name="imgUpload"]').trigger('click');
  }else {
    var ie9=ie9formId($(this).siblings('[name="imgUpload"]')[0]);
    ie9.find('input[type="file"]').trigger('click');
  }
};

export default uploadClick;
