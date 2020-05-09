import isAjaxUploadSupported from './isAjaxUploadSupported';

var dragoverEvent=function (e){
  e.preventDefault();
  e.stopPropagation();
  if (isAjaxUploadSupported()) {
    e.originalEvent.dataTransfer.dropEffect = 'copy';
  }
};

export default dragoverEvent;
