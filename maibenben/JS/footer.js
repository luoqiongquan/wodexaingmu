//public/js/header.js
$(function(){
    //请求页头.html片段
    $.ajax({
      url:"footer.html",
      type:"get",
      success:function(result){
        //返回的是一段html片段
        //console.log(result);
        //用片段创建新的<header>元素，替换现有<header id="header">元素
        $(result).replaceAll("#footer");
        //并自动添加header.css到页面
        $(`<link rel="stylesheet" href="../css/footer.css">`).appendTo("head");
      }
    })
  });
  //在index.html等任何一个需要页头的页面底部引入<script src="js/header.js">