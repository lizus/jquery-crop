# jQuery Crop

* `需要jQuery支持，测试使用jQuery v1.12.4 `
* `需要php后端支持，示例代码见dist/ie9img.php、dist/upload.php`

使用时引入 `jquery.crop.js` 、 `jquery.crop.css` ， 在html中添加可点击元素，元素的属性必须有 `data-component="image-crop"` 其他可选属性为：

* `data-width` 使用数字，表示裁剪框宽度
* `data-height` 使用数字，表示裁剪框高度
* `data-size` 使用数字，表示上传文件大小上限，因ie9无法在客户端设定，需要在ie9img.php中再添加一次
* `data-type` 使用字符串，表示上传文件类型限制，因ie9无法在客户端设定，需要在ie9img.php中再添加一次
* `data-ie9img` 使用字符串，ie9兼容处理图片地址
* `data-url` 使用字符串，图片上传处理地址

上传图片后返回数据处理使用触发元素事件`cropImageUploaded`，示例代码见dist/index.html，传值res为服务器返回数据
