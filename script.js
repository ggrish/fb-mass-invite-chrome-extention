
(function inviteAll(){
	var buttons;
			buttons = document.getElementsByClassName('_42ft _4jy0 FriendRequestAdd addButton _4jy3 _517h _51sy');
			var i = 0;
			(function (){
			  if (i++ > buttons.length) return;
			  setTimeout(function(){
			  	console.log('[' + i + ']');
			  	console.log(buttons[i]);
					for(var i=0; i < buttons.length;i++) {
						if(buttons[i].className === '_42ft _4jy0 FriendRequestAdd addButton _4jy3 _517h _51sy') {
						buttons[i].click();
						console.log('Clicked');
					}
				}

			  }, 1500);
			})();
			})();
