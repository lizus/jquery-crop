
var $=jQuery;

export default function (w,h){
  var wrap=$('.crop-wrap');
  if (wrap.length<1) return;
  w=Math.floor(w);
  h=Math.floor(h);
  var ct=document.documentElement.clientHeight;
  var mt=Math.floor(h/2);
  if (mt>ct/2) mt=ct/2;
  wrap.css({
    width:w,
    height:h,
    'margin-left':0-Math.floor(w/2),
    'margin-top': 0-mt,
  });
};

var wrapWidth=function (){
  var p=$('.crop-wrap');
  if (p.length<1) return 0;//如果找不到crop-wrap说明有错误，不必执行了
  return Math.floor(parseFloat(p.css('width')));
};
var wrapHeight=function (){
  var p=$('.crop-wrap');
  if (p.length<1) return 0;//如果找不到crop-wrap说明有错误，不必执行了
  return Math.floor(parseFloat(p.css('height')));
};

export {wrapWidth,wrapHeight};
