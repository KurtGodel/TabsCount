var myIndex = -1;

function handleMessage(e) {
	if(e.message < 10) {
		if(document.title.length >= 3 && parseInt(document.title[0]) && document.title.substr(1,2) == ". ") {
			// update number
			document.title = (e.message%10) + ". " + document.title.substr(2);
		}
		else {
			// insert number
			document.title = (e.message%10) + ". " + document.title;
		}
	}
	else {
		// tab's index is above 9
		if(myIndex > -1 && myIndex < 10) {
			document.title = document.title.substr(3);
		}
	}
	myIndex = e.message;
}

// Message Event Listener
safari.self.addEventListener('message', handleMessage, false);