
import isAjaxUploadSupported from './isAjaxUploadSupported';
import fileUpload from './fileUpload';

var imgUploadChange=function (){
  if (this.files && isAjaxUploadSupported()) {
    if(this.files.length>0) {
      var file=this.files[0];
      fileUpload(file);
    }
  }
};
export default imgUploadChange;
