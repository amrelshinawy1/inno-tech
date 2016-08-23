var arr=[];
var attrarr=[];

$(document).ready(function(){
    
    $(document).on('click','.cls',function(){
      $("#_addProduct").delay(300).fadeOut();
      $("#tbl").delay(500).fadeIn();
    });
    
  $("#Add").click(function(){
     $("#_addProduct").delay(500).fadeIn();
     $(".tl").delay(300).fadeOut(); 
      
  });
    $("#addnewatt , #_addnewatt").click(function(){
        
     $("#_addProduct").delay(300).fadeOut();
     $("#addatt").delay(500).fadeIn();
              
        if(attrarr == null)
          attrarr = [];
        for(var i=0; i<attrarr.length; i++){
    
        $('<input type="text" class="textinput1"  value="'+attrarr[i].key+'"> <input type="text" class="textinput2"  value="'+attrarr[i].value+'">').appendTo('#newel');
    }
        
	$( '<input type="text" class="textinput1" placeholder="key" > <input type="text" class="textinput2" placeholder="value" >').appendTo('#newel');
  });
    
    $("#bttadd").on("click",(function(e){
     
	$( '<input type="text" class="textinput1" placeholder="key" > <input type="text" class="textinput2" placeholder="value" >').appendTo('#newel');
        
         e.preventDefault();
        
    }));
    
    $("#SaveAttribute").on("click",function(e){
        $("#addatt").delay(300).fadeOut();
        $("#_addProduct").delay(500).fadeIn();
        
        var keys=[];
        var values=[];
        for(var i=0;i<$('.textinput1').length;i++){ 
            keys[i]=$('.textinput1').eq(i).val();
            values[i] = $('.textinput2').eq(i).val();
        }
    attrarr = [];
    
    for(var i=0; i<keys.length; i++){
        if( keys[i] == null || keys[i] == ''){
            continue;
        }
        var spec = {"key":"", "value":""};
        spec.key = keys[i];
        spec.value = values[i];
        attrarr.push(spec);
    }
    e.preventDefault();
        });
     var function2 =function(arr){
                if(arr == null)
                    arr = [];
        
         $("#myTable").find("tr:gt(0)").remove();
       for(var i=0;i<arr.length; i++){
        $('#myTable').append('<tr><td><INPUT type=\"checkbox\" value=\"1\" checked /></td><td>'+arr[i].id+'</td><td>'+arr[i].Name+'</td><td>'+arr[i].price+'</td><td>'+arr[i].description+'</td><td>'+arr[i].quantity+'</td><td><img src=\"'+arr[i].srcImage +'\" alt=\"p1\"  height=100 width=100></td><td>'+arr[i].category+'</td><td><INPUT type=\"button\" value=\"Edit Row\" id=\"editRow\" /></td><td><INPUT type=\"button\" value=\"Delete Row\" id=\"deleteRow\"/></td></tr>');
       }
        $(".tl").delay(500).fadeIn();                    
        }; 
    var function1 =function(){
            arr= JSON.parse( localStorage.getItem("products"));
                if(arr == null)
                    arr = [];
        
         $("#myTable").find("tr:gt(0)").remove();
       for(var i=0;i<arr.length; i++){
        $('#myTable').append('<tr><td><INPUT type=\"checkbox\" value=\"1\" checked /></td><td>'+arr[i].id+'</td><td>'+arr[i].Name+'</td><td>'+arr[i].price+'</td><td>'+arr[i].description+'</td><td>'+arr[i].quantity+'</td><td><img src=\"'+arr[i].srcImage +'\" alt=\"p1\"  height=100 width=100></td><td>'+arr[i].category+'</td><td><INPUT type=\"button\" value=\"Edit Row\" id=\"editRow\" /></td><td><INPUT type=\"button\" value=\"Delete Row\" id=\"deleteRow\"/></td></tr>');
       }
        $(".tl").delay(500).fadeIn();                    
        }; 
    $("#showProduct").click(function(){
    function1();     
    });
   $("#SaveProduct").click(function(){
        var _arc    =1;     
        var _id     =arr.length+1;
        var _name   =$("#Name").val();
        var _price  =$("#price").val();
        var _desc   =$("#description").val();
        var _qty    =$("#quantity").val();
        var _img    =$("#image").get(0).files[0].name;
        var _cat    =$("#category").val();
        var att     =attrarr;
        var product ={cb:_arc, id:_id, Name:_name, price:_price, description:_desc, quantity:_qty, srcImage:_img, category:_cat,attribute:att};
        arr.push(product);   
   localStorage.setItem("products", JSON.stringify(arr));
       $("#myTable").find("tr:gt(0)").remove();
       for(var i=0;i<arr.length; i++){
       $('#myTable').append('<tr><td><INPUT type=\"checkbox\" value=\"1\" checked /></td><td>'+arr[i].id+'</td><td>'+arr[i].Name+'</td><td>'+arr[i].price+'</td><td>'+arr[i].description+'</td><td>'+arr[i].quantity+'</td><td><img src=\"'+arr[i].srcImage +'\" alt=\"p1\"  height=100 width=100></td><td>'+arr[i].category+'</td><td><INPUT type=\"button\" value=\"Edit Row\" id=\"editRow\" /></td><td><INPUT type=\"button\" value=\"Delete Row\" id=\"deleteRow\"/></td></tr>');
       }
     $("#_addProduct").delay(300).fadeOut();
     $(".tl").delay(500).fadeIn();     
   });
    
    $(document).on('click','#deleteRow', function() {
        $(this).closest('tr').remove();
       arr.splice($(this).closest('tr').index('tr'),1);
    localStorage.setItem("products", JSON.stringify(arr));     
    });
    
    $(document).on('click','#editRow', function() {
      var row= $(this).closest('tr').index('tr');
        $("#_id").val(arr[row-1].id);
        $("#_Name").val(arr[row-1].Name);
        $("#_price").val(arr[row-1].price);
        $("#_description").val(arr[row-1].description);
        $("#_quantity").val(arr[row-1].quantity);
        $("#_image").val("");
        $("#_category").val(arr[row-1].category);
        attrarr          = arr[row-1].attribute;
        
        $(".tl").delay(300).fadeOut();
        $("#_EditProduct").delay(500).fadeIn();
    
    });
  $("#_SaveProduct").click(function(){
        $("#_EditProduct").delay(300).fadeOut();
        $(".tl").delay(500).fadeIn();
    
     $("#_addProduct").delay(300).fadeOut();
    for(i=0; i < arr.length; i++){
        if(arr[i].id == $("#_id").val()){
            break;
        }
    }  
     arr[i].Name =$("#_Name").val();
     arr[i].price =$("#_price").val();
     arr[i].description =$("#_description").val();
     arr[i].quantity =$("#_quantity").val();
     arr[i].srcImage =$("#_image").get(0).files[0].name;
     arr[i].category =$("#_category").val();
     arr[i].attribute=attrarr;
      
    localStorage.setItem("products", JSON.stringify(arr));
      function1();
  }); 

var togglesort =true;
$("#sortID , #sortPrice , #sortQuantity ,#sortName ,#sortDescription ,#sortCategory ").click(function(){
if(this.id == "sortID" ){
    if(togglesort){ 
    arr.sort(function(a, b) {
    return a.id - b.id;
        });  
    }
    else{
         arr.sort(function(a, b) {
    return b.id - a.id;
        }); 
    }
}
   
else if(this.id == "sortPrice" ){
    if(togglesort){ 
    arr.sort(function(a, b) {
    return  a.price - (b.price);
        });  
    }
    else{
         arr.sort(function(a, b) {
    return b.price - (a.price);
        }); 
    }
}
else if(this.id == "sortDescription" ){
    if(togglesort){ 
    arr.sort(function(a, b) {
    return a.description.localeCompare(b.description);
        });  
    }
    else{
         arr.sort(function(a, b) {
    return b.description.localeCompare(a.description);
        }); 
    }
}
else if(this.id == "sortCategory" ){
    if(togglesort){ 
    arr.sort(function(a, b) {
    return a.category.localeCompare(b.category);
        });  
    }
    else{
         arr.sort(function(a, b) {
    return b.category.localeCompare(a.category);
        }); 
    }
}    
else if(this.id == "sortName" ){
    if(togglesort){ 
    arr.sort(function(a, b) {
    return a.Name.localeCompare(b.Name);
        });  
    }
    else{
         arr.sort(function(a, b) {
    return b.Name.localeCompare(a.Name);
        }); 
    }
}    
else if(this.id == "sortQuantity" ){
    if(togglesort){ 
    arr.sort(function(a, b) {
    return a.quantity - (b.quantity);
        });  
    }
    else{
         arr.sort(function(a, b) {
    return b.quantity-(a.quantity);
        }); 
    }
}
 function2(arr);
        togglesort =! togglesort;
});
    
    
 $("#mySearch").keyup(function () {
    var table = $("#myTable");
   text =$("#mySearch").val();
    var i, obj;
    var array = [];
    for (i = 0; i < arr.length; i++) {
        var obj = arr[i];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (('' + obj[key]).indexOf(text) >= 0 ) {

                    array.push(obj);
                break;
                }
            }
        }
    }
    function2(array);
});
    function1();
});

