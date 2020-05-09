
var getIframeContentJSON=function (iframe) {
  try {
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document,
    response;

    var innerHTML = doc.body.innerHTML;
    if (innerHTML.slice(0, 5).toLowerCase() == "<pre>" && innerHTML.slice(-6).toLowerCase() == "</pre>") {
      innerHTML = doc.body.firstChild.firstChild.nodeValue;
    }
    response = jQuery.parseJSON(innerHTML);
  } catch (err) {
    response = { success: false };
  }

  return response;
};

export default getIframeContentJSON;
