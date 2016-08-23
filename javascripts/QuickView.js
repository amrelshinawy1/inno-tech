$(document).ready(function(){ 

    $(document).on('mouseenter', '._myProducts', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '._myProducts', function () {
        $(this).find(":button").hide();
    });

    $(document).on('click','.cls',function(){
         $("#quickpro").hide();
    });
    $(document).on('click', '.cd-trigger', function () {
        $("#quickpro").html("");
    for (var i = 0; i < arr.length; i++) 
        {
            if(arr[i].id ==  $(this).attr("name") ){
             $("#quickpro").append("<div  id="+(i+1000)+"><img src="+ arr[i].srcImage+" style=\"float: left\" width=\"300px\" height=\"300px\"> <h3>Name : "+arr[i].Name+"</h3><h3>Price : "+arr[i].price +"</h3> <h3>Details : "+arr[i].description +"</h3><a class=\"cls\" href=\"#\"><img src=\"close.png\"  title=\"Close\"></a> </div>");
                if(arr[i].quantity >0){
                    $("#quickpro").append("<h3 style=\"color:Green\">In Stock</h3>");
                }
                else{

                    $("#quickpro").append("<h3 style=\"color:Red\">OUt Stock</h3>");   
                }
             }
              if(arr[i].attribute != null ){
                    for(var j=0; j<arr[i].attribute.length; j++){
                    $("#"+(i+1000)+"").append("<h3>"+arr[i].attribute[j].key +" : "+arr[i].attribute[j].value  +"</h3>")
                    }
                }
         }
    $("#quickpro").show();
        
    });

            arr = JSON.parse(localStorage.getItem("products"));
            if (arr == null)
                arr = [];
            for (var i = 0; i < arr.length; i++) 
            {
                $("body").append("<div class=\"_myProducts\" id="+i+"><img src="+ arr[i].srcImage+" width=\"200px\" height=\"200px\"> <h3>"+arr[i].Name+"</h3><h3>"+arr[i].price +"</h3> <button href=\"#0\" name="+arr[i].id+" class=\"cd-trigger\">Quick View</button></div>");    
                  
              /*  if(arr[i].attribute != null ){
                    for(var j=0; j<arr[i].attribute.length; j++){
                    $("#"+i+"").append("<h3>"+arr[i].attribute[j].key +" : "+arr[i].attribute[j].value  +"</h3>")
                    }
                }
            */
        }

});