var tng_num;//回答する単語数
var way;//回答方法
var json;//単語配列を記録
var lang;//回答言語
var past_num=[];//過去に出た問題を記録
var host=location.host;
console.log(host);
// history.replaceState(null,null,"./")

$('.modal_bg').click(function(){
  $(this).fadeOut(200);
  $('#modal').fadeOut(200);
  
});

$('.start>button').click(function(){
  $('.loader').show();
  $('.mod_1').hide();
  $('.mod_2').hide();
  $('.mod_3').hide();
$('.modal_bg').fadeIn(400);
$('#modal').fadeIn(400);
  $('.loader').fadeOut(1100);
  
  
 setTimeout(function(){
   $('.loader').hide();
     $('.mod_1').fadeIn(100);
   
},800);
});

$('#next').click(function(){

var tng_num = Number($('select option:selected').text());
  if(tng_num==0){
    $(".error").css({"visibility":"visible"});
  }else{
    $('.mod_1').hide(); 
    $('.loader').show();
    $(".error").css({"visibility":"hideen"});
    setTimeout(function(){
   $('.loader').hide();
     $('.mod_2').fadeIn(100);
   
},800);
  }
    
});

$('.mod_2>div>button').click(function(){
  way=$(this).val();
  $('.mod_2').hide();
  $('.loader').show();
  setTimeout(function(){
    $('.loader').hide();
      $('.mod_3').fadeIn(100);
    
 },800);
})

$('.mod_3>div>button').click(function(){
  lang=$(this).val();
  $('.mod_3').hide(); 
    $('.loader').show();
   setTimeout(function(){
     
    create();
},800);
});
// create();
function create(){
 $('.start_menu').html('<div class="loader"></div>');
$('.modal_bg').click(); 
 $.getJSON("./tango.json")
    .done(function (data) {
    var json=data;
    var r = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;
   $('.start_menu').hide();
   $('#quiz').show();
   $('#q').text('「'+json[r][1]+'」を英語で');
   var t=Math.floor(Math.random() * ((4 + 1) - 1)) + 1;
   $('#b_'+t).text(json[r][0]);
   console.log('#b_'+t);

  });
}