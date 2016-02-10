


// Attach events to buttons on page load
function Startup()
{
	var buttonObj = document.getElementById("TooltipTop");

	if(buttonObj.addEventListener)
	{
		buttonObj.addEventListener('click', TooltipTopClicked, false);
	}
	else if(buttonObj.attachEvent)
	{
		buttonObj.attachEvent('onclick', TooltipTopClicked);
	}
	else
	{
		buttonObj.onclick = TooltipTopClicked;
	}
}

// When 'TooltipTop' is clicked, this function will execute
function TooltipTopClicked()
{
	$.ajax({ url: 'test.php',
			 data: 'testValue=5000',
			 method: 'POST',
			 success: function(response){
			 	$('body').append("<div>" + response + "</div>");
			 }
			});
}