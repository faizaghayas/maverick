$(document).ready(function(){

    $(".bttnplus").click(function(){
         var quantity = parseInt($("#quantity").val());
         if(quantity<5){
             $("#quantity").val(quantity + 1);
         }
var price= parseInt($("#quantity").val());
switch(price){
    case 0: $("#price").text(" Rs 0" );
 break;
 case 1: $("#price").text("Rs 2,000" );
 break;
 case 2: $("#price").text("Rs 3,000" );
 break;
 case 3: $("#price").text("Rs 4,000" );
 break;
 case 4: $("#price").text("Rs 5,000" );
 break;
 case 5: $("#price").text("Rs 6,000" );
 break;
 default:$("#price").text("Rs 2,000" );
}

});
     
 
      $(".bttnminus").click(function(){
         var quantity = parseInt($("#quantity").val());
             if(quantity>0){
             $('#quantity').val(quantity - 1);
             }
// if(quantity>5){
//     $("#price").text()
// }
var price= parseInt($("#quantity").val());
switch(price){
    case 0: $("#price").text(" Rs 0" );
 break;
 case 1: $("#price").text("Rs 2,000" );
 break;
 case 2: $("#price").text("Rs 3,000" );
 break;
 case 3: $("#price").text("Rs 4,000" );
 break;
 case 4: $("#price").text("Rs 5,000" );
 break;
 case 5: $("#price").text("Rs 6,000" );
 break;
 default:$("#price").text("Rs 2,000" );
}
     });
     
 });
