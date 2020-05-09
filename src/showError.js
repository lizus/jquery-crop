
var $=jQuery;

var showError=function (txt){
  var e=$('.crop-error');
  if (e.length>0) {
    setTimeout(function (){
      showError(txt);
    },1000);
  }
  $('body').append('<div class="crop-error">'+txt+'</div>');
  setTimeout(function (){
    var e=$('.crop-error');
    e.addClass('show');
  },10);
  setTimeout(function (){
    $('.crop-error').remove();
  },2000);
};

export default showError;
