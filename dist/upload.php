<?php

$img=isset($_REQUEST['img']) ? strip_tags($_REQUEST['img']) : '';
$source=isset($_REQUEST['source']) ? strip_tags($_REQUEST['source']) : '';
if (!empty($img)) {
  $type='jpg';
  if (preg_match('/data:image\/([^;]+);base64,/',$img,$m)) {
    $type=$m[1];
    switch ($type) {
      case 'png':
        $type='png';
        break;
      case 'gif':
        $type='gif';
        break;
      default:
        $type='jpg';
        break;
    }
  }
  $img=preg_replace('/data:image\/([^;]+);base64,/','',$img);
  $name=md5($img).'.'.$type;
  $source=preg_replace('/data:image\/([^;]+);base64,/','',$source);
  $sourcename=md5($img).'_source.'.$type;
  $dir=dirname(dirname(__FILE__)).'/img/';
  $r=file_put_contents($dir.$name,base64_decode($img));
  $sourcer=file_put_contents($dir.$sourcename,base64_decode($source));
  if ($r) {
    echo json_encode([
      'src'=> 'https://linzili.com/html/img/'.$name,
      'source_src'=> 'https://linzili.com/html/img/'.$sourcename,
    ]);
  }else {
    echo json_encode([
      'error'=> '未生成图像',
    ]);
  }
}
