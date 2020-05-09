import getIframeContentJSON from './getIframeContentJSON';
import afterUpload from './afterUpload';
import config from './config';
import {ie9WaitShow,ie9WaitRemove} from './ie9Wait';
var $=jQuery;

var ie9formId=function (ele){
  var iframe;
  var iframeobj = $("#crop_image_upload_iframe");
  if (iframeobj.length<1) {
    iframe = document.createElement("iframe");
    iframe.setAttribute("id", "crop_image_upload_iframe");
    iframe.setAttribute("name", "crop_image_upload_iframe");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("border", "0");
    iframe.setAttribute("src", "javascript:false;");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    var myContent = '<!DOCTYPE html>'
    + '<html><head><title>Uploading File</title></head>'
    + '<body>'
    + '<form '
    + 'class="crop_image_upload_iframe_form" '
    + 'name="crop_image_upload_iframe_form" '
    + 'action="' + config.ie9img + '" method="post" '
    + 'enctype="multipart/form-data" encoding="multipart/form-data" style="display:none;">'
    + ele.outerHTML
    + '</form></body></html>';

    iframe.contentWindow.document.open('text/htmlreplace');
    iframe.contentWindow.document.write(myContent);
    iframe.contentWindow.document.close();
    iframeobj = $("#crop_image_upload_iframe");

    var eventHandlermyFile = function () {
      if (iframe.removeEventListener) {
        iframe.removeEventListener("load", eventHandlermyFile, false);
      }else if (iframe.detachEvent) {
        iframe.detachEvent("onload", eventHandlermyFile);
      }

      var response = getIframeContentJSON(iframe);

      ie9WaitRemove();
      afterUpload(response);
    };
    if (iframe.addEventListener){
      iframe.addEventListener("load", eventHandlermyFile, true);
    } else if (iframe.attachEvent) {
      iframe.attachEvent("onload", eventHandlermyFile);
    }
    var iframeform=iframeobj.contents().find("html").find(".crop_image_upload_iframe_form");

    iframeform.on("change", "input", function () {
      ie9WaitShow();
      iframeform.trigger('submit');
    });
  }else {
    var iframeform=iframeobj.contents().find("html").find(".crop_image_upload_iframe_form");
  }
  return iframeform;
};

export default ie9formId;
