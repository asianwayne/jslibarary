jQuery(document).ready(($) => {
  $('#subscriber-form').submit((e) => {
    e.preventDefault();

    //serialize form 输出序列化表单值的结果 
    var subscriber_data = $('#subscriber-form').serialize(); //传递数据到php文件

    $.ajax({
      type:'POST',
      url:$('#subscriber-form').attr('action'),
      data:subscriber_data,
      success:(response) => {
        $('.form-msg').removeClass('error');
      $('.form-msg').addClass('success');

      $('.form-msg').text(response);

      //clear fields
      $('#exampleInputEmail1').val('');
      $('#exampleInputPassword1').val('');

      console.log("Success");
      
    },
    error:(response) => {
      $('.form-msg').addClass('error');
      $('.form-msg').removeClass('success');

      $('.form-msg').text(response.responseText);
    }
    });
  })
});
