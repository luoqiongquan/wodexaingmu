$(function(){
    // var $sNavA=$("#sNavA");
    // $sNavA.hover(function(){
    //     var $sNav=$(".sNav");
    //     $sNav.show();
    //   })
    $(".sNavA").each(function(i){
      $(this).hover(
         function(){
          
           $(".sNav").eq(i).show();
       
           },
         function(){
          
           $(".sNav").hide();
           }
      )
      })	
    $(".sNav").each(function(i){
      $(this).hover(
         function () {
            $(this).show();
           },
         function(){
         
           $(".sNav").hide();
           }
      )
      });
     $('.classLayer').find('li').each(function(i){
        $(this).hover(
           function(){
             $(this).addClass('liNow');
          
             $('.classLayer1').eq(i).show();
             },
           function(){
             $(this).removeClass('liNow');
             $('.classLayer1').hide();
             }
        )
        });
        $('.classLayer').find('li').each(function(i){
          $(this).hover(
             function(){
               $(this).addClass('liNow');
              $('.classLayer1').eq(i).show();
               },
             function(){
               $(this).removeClass('liNow');
               $('.classLayer1').hide();
               }
          )
          })
        $('.classLayer1').each(function(i){
          $(this).hover(
             function(){
               $('#topClass').height(460);
               $('.classLayer').find('li').eq(i).addClass('liNow');
               $(this).show();
               },
             function(){
                 $('#topClass').height(0);
               $('.classLayer').find('li').removeClass('liNow');
               $('.classLayer1').hide();
               }
          )
          })
        $('.nav-category').hover(
          function(){
            $('#topClass').height(460);
            },
          function(){
            $('#topClass').height(0);
            }
        )
      
        $('#topClass').hover(
          function(){
            $('#topClass').height(460);
            },
          function(){
            $('#topClass').height(0);
            }
        )
           
})