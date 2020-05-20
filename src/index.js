import crop from './crop';

(function($){
  window.$=jQuery;
  
  $('body').on('click','[data-component="image-crop"]',crop);
})(jQuery);
