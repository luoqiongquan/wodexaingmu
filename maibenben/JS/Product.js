$(function(){
$(".goods-item").each(function(i){
$(this).hover(function(){
    $(".btn-like").eq(i).show();
    $(".btn-buy").eq(i).show();

},function(){
    $(".btn-like").hide();
    $(".btn-buy").hide();
}
)
})
})