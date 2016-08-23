$(document).ready(function(){
   $("div.login").animate({
    marginTop: '100'
   },500) ;
    $("div.login").animate({
    height: '200'
   },500) ;
    $("h1").delay(1300).fadeIn();
    $("input").delay(1700).fadeIn();
 
    $('#loginbtn').click(function(){
        var userName=$('#name').val();
        var passWord=$('#pass').val();

       if(userName=="admin" && passWord =="admin"){
            window.location.href = 'addproduct.html';   
       }
        else{
         $('#name').val('');
         $('#pass').val('');
         $('#error').show().html("The login or password is incorrect. Please tryagain.");
        }

     });  
});