
//用于停止事件的默认行为
export default function (e){
  if (e.cancelable) {
    // 判断默认行为是否已经被禁用
    if (!e.defaultPrevented) {
      e.preventDefault();
    }
  }
};
