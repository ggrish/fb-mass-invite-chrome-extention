

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		// console.log("Hello!");
		// ----------------------------------------------------------
		appendcss();

	}
	}, 10);
});

chrome.runtime.onMessage.addListener(messageGot);

function messageGot(message) {
  if ( message.invite) {
    invite(2500,1500);
  }
}

function invite(num,delay) {
	var count=0;


openbox("Inviting "+num+ " people with delay "+(delay/1000)+" seconds");
function start(count,j){

	 if(count<num){
		setTimeout(function(){
		 //code starts here

		  var scrollarea = document.getElementsByClassName("uiScrollableAreaWrap")[0];
			var box = document.getElementsByClassName("_4-i2 _50f4")[0];
			var liker = box.getElementsByClassName("_42ft _4jy0 _4jy3 _517h _51sy");
			//var liker = $('input[role="button"]._42ft._4jy0._4jy3._517h._51sy')[0];
			var nextpage = $('.uiScrollableArea .pam.uiBoxLightblue.uiMorePagerPrimary:contains("See more"), .uiScrollableArea .pam.uiBoxLightblue.uiMorePagerPrimary:contains("See More")')[0];
			//better piece
			for (var i=j;i<liker.length;i++) {
				console.log(i+" total= "+liker.length);
				if(liker[i].innerHTML=="Invite") {
				   (function(ind,count1) {
				       setTimeout(function(){
				       	console.log("count1 === "+count1);
				      	 	liker[ind].click();
				      	 	openbox("Inviting "+parseInt(count1+1) + " / "+num+" people");

				      	 	if(count1+1 >= num)  {
								 	closebox();
								 	console.log("count1 ends here == "+count1);
				      	 	}
				       }, delay*count);
				   })(i,count);
				   count++;
				}
				if(count >= num){
					//openbox("Invite Done! "+count +" people invited");
					break;
				}
				$(".uiScrollableAreaWrap").scrollTop((i*64));
			}

			nextpage.click();
			//wait(2000);
		 //code ends here
		  console.log(count);
		  start(count,i);
		}, delay);
	 } else {
	 	openbox("Invite Done! "+count +" people invited");

	 }
	}
	start(0,0);

}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


function openbox(text) {
    var overlay = `color: white;
  position:absolute;
  top: 10%;
  left: 40%;
  color:white;
  font-size: 19px;
  text-align: center;
  z-index: 9999 !important;
  font-family: Verdana, Geneva, sans-serif;
  padding: 20px;
 width:300px;
 height: 100px;
  background: #1a4969;
background: -moz-linear-gradient(top, #1a4969 0%, #157a8c 100%);
background: -webkit-linear-gradient(top, #1a4969 0%,#157a8c 100%);
background: linear-gradient(to bottom, #1a4969 0%,#157a8c 100%);
-webkit-border-radius: 12px;
-moz-border-radius: 12px;
border-radius: 12px;
-webkit-box-shadow: 3px 3px 1px 0 #8C8C8C;
box-shadow : 3px 3px 1px 0 #8C8C8C;`;

if ($("#openbox").length == 0) {
     $('body').append('<div id="openbox" style="' + overlay + '"><div id="msgtxt">'+text+`</div><div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div></div>`);
 } else {
 	$("#msgtxt").text(text);
 }

}
function closebox() {
	openbox("Job Done!");
	if ($("#openbox").length != 0) {
		setTimeout(function(){
    	 $('#openbox').fadeOut('slow');
	 	setTimeout(function(){
			 	$('#openbox').remove();
			 },3000);
				SendMessageToBackgroundPage("Completed!");
			 },1000);
		}
}
function appendcss() {
	var spinner= `.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1);
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}`;
$('head').append('<style>'+spinner+'</style>');

}

function SendMessageToBackgroundPage(data)
{
    chrome.runtime.sendMessage({
        action: 'text',
        source: data,
    });
}
