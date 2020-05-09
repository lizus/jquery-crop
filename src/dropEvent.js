import fileUpload from './fileUpload';
import isAjaxUploadSupported from './isAjaxUploadSupported';

var dropEvent=function (e){
  e.preventDefault();
  e.stopPropagation();

  if (isAjaxUploadSupported()) {
    var fileLists = e.originalEvent.dataTransfer.files;
    var file=fileLists[0];
    fileUpload(file);
  }
};
export default dropEvent;
