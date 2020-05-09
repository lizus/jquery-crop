

//用于获取上传文件的url信息
var getObjectURL = function(file) {
  var url = null;
  if (window.createObjectURL != undefined) {
    url = window.createObjectURL(file)
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    url = window.webkitURL.createObjectURL(file)
  }
  return url;
};

export default getObjectURL;
