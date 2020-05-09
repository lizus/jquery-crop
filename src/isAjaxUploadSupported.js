
/**
 * isAjaxUploadSupported
 * 现代浏览器可以使用客户端先处理图片，再通过formdata将图片上传,ie9不支持，要另外使用iframe的方式先上传到服务器上，再返回来处理图片，再重新上传。
 * @return {boolean} [是否支持ajax方式上传图片]
*/
var isAjaxUploadSupported= function () {
  var input = document.createElement("input");
  input.type = "file";

  return (
    "multiple" in input &&
    typeof File != "undefined" &&
    typeof FormData != "undefined" &&
    typeof (new XMLHttpRequest()).upload != "undefined");
};

export default isAjaxUploadSupported;
