$(function(){
    $("#btn").click(function(){
        var TEL_REGEXP=/^1[3456789]\d{9}$/;
        if($("#inputMsg").val()==""){
            $("#phone").html("*您输入的电话号码为空！请重新输入");
        }else{
            if(!TEL_REGEXP.test($("#inputMsg").val())){
                $("#phone").html('*请输入正确的手机号码');
            }else{
                $("#phone").html("");
            }

        }
            

       
 
})
  
});