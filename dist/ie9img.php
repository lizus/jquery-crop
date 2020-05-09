<?php

//ie9因为不支持files，需要通过上传图片再返回的方式来对图片进行处理
//该程序返回的data为图片的base64code

//支持的图片格式
$types=[
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/pjpeg',
];

//支持的图片最大文件大小
$size=2*1024*1024;//2M


$status='error';
if (!empty($_FILES)) {
  $f=$_FILES['imgUpload'];
  if ($f['error']<=0) {
    $type=$f['type'];
    if (in_array($type,$types)) {
      if ($f['size']<=$size) {
        $status='success';
        $data=file_get_contents($f['tmp_name']);
        $data='data:'.$type.';base64,'.base64_encode($data);
      }
    }
  }
}

$response = [
  "status" => $status,
  "data" => $data,
  "type" => $type,
];
echo json_encode($response);
die();
