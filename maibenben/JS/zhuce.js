$(function(){
    $("btn").click(function(){
        alert(111);
        
        if($("#inputMsg").val()==""){
            alert(222);
            $("#phone").html("*您输入的电话号码为空！请重新输入");
        }
    
 
})
  
});