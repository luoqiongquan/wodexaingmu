$(function(){
// 第一个轮播图
(function(){
  var i=0;
  var LIWIDTH=1920;
  var DURATION=500;
  var LICOUNT=2;
  var ulImgs=document.getElementById("ul-imgs");
  var ulIdxs=document.getElementById("ul-idxs");
  var lis=ulIdxs.children;
  function moveTo(to){
	if(to==undefined){
	  to=i+1;
	}
	if(i==0){
	  if(to>i){
		ulImgs.className="transition";
	  }else{
		ulImgs.className="";
		ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
		setTimeout(function(){
		  moveTo(LICOUNT-1);
		},1000);
		return;
	  }
	}
	i=to;
	ulImgs.style.marginLeft=-i*LIWIDTH+"px";
	for(var li of lis){
	  li.className=""
	}
	
	if(i==LICOUNT){
	  i=0;
	  setTimeout(function(){
		ulImgs.className="";
		ulImgs.style.marginLeft=0;
	  },DURATION)
	}
	lis[i].className="active";
  }
  var interval=8000;
  var timer=setInterval(function(){
	moveTo()
  },3000);
  var banner=document.getElementById("banner");
  banner.onmouseover=function(){
	clearInterval(timer);
  }
  banner.onmouseout=function(){
	timer=setInterval(function(){
	  moveTo()
	},3000);
  }

  var ulIdxs=document.getElementById("ul-idxs");
  var canClick=true;
  ulIdxs.onclick=function(e){
	if(canClick){
	  var li=e.target;
	  if(li.nodeName=="LI"){
		if(li.className!=="active"){
		  for(var i=0;i<lis.length;i++){
			if(lis[i]==li){
			  break;
			}
		  }
		  moveTo(i);
		  setTimeout(function(){
			canClick=true;
		  },DURATION);
		}
	  }
	}
  }
})();

// 第二个轮播图
 (function(){
	var i=0;
    var LIWIDTH=1226;
    var DURATION=500;
    var LICOUNT=2;
    var ulImgss=document.getElementById("ul-imgss");
    var ulIdxss=document.getElementById("ul-idxss");
    var lis=ulIdxss.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgss.className="transition";
        }else{
          ulImgss.className="";
          ulImgss.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgss.style.marginLeft=-i*LIWIDTH+"px";
      
     
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgss.className="";
          ulImgss.style.marginLeft=0;
        },DURATION)
      }
      
    }
  
    var btnLefts=document.getElementById("btn-lefts");
    var btnRights=document.getElementById("btn-rights");
    var canClick=true;
    btnRights.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        console.log(i+n);
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLefts.onclick=function(){
      move(-1);
    }
  
    var interval=10000;
    var timer=setInterval(function(){
      moveTo()
    },10000);
    var banner=document.getElementById("banner");
    banner1.onmouseover=function(){
      clearInterval(timer);
    }
    banner1.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },10000);
    }
  
   
})();

// 第三个轮播图
 (function(){
    var i=0;
    var wowidht=1226;
    var dn=500;
    var licount=2;
     var ulImgbb=document.getElementById("ul-imgbb");
    
     function moveTo(to){
        if(to==undefined){
           to=i+1;
        }
        if(i==0){
            if(to>i){
            ulImgbb.className="transition";
        }else{
                ulImgbb.className="";
                 ulImgbb.style.marginLeft=-wowidht*licount+"px";
                setTimeout(function(){
                    moveTo(licount-1);
                 },100);
                return;

            }
        }
        i=to;
        ulImgbb.style.marginLeft=-i*wowidht+"px";
       
          if(i==licount){
            i=0;
         setTimeout(function(){
             ulImgbb.className="";
                ulImgbb.style.marginLeft=0;
            },dn);

         }
       }
     var btnLeftbb=document.getElementById("leftaa");
     var btnRightbb=document.getElementById("rightbb");
     var canClick=true;
     btnRightbb.onclick=function(){        
         move(1)
      }
     function move(n){
        if(canClick){
             moveTo(i+n);
         canClick=false;
        
     setTimeout(function(){
            canClick=true;

         },dn+100);
      }
 }
  btnLeftbb.onclick=function(){
     move(-1);
 }
    var interval=3000;
    var timer=setInterval(function(){
        moveTo()
    },3000);
    var divUl=document.getElementById("div-ul");
    divUl.onmouseover=function(){
        clearInterval(timer);
    }
    divUl.onmouseout=function(){
        timer=setInterval(function(){
            moveTo()
     
    },3000);
 }
 })();

})