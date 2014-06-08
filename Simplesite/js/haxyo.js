$(document).ready(function()
{
    $("#topbar").hide();
    var bottom = $('#navigationmenu').position().top + $('#navigationmenu').outerHeight(true);
    $(window).scroll(function() 
	{
        if($(window).scrollTop() > bottom)
		{
            $("#topbar").show(200);
        }
		else
		{
			$("#topbar").hide(200);
		}
    });
});
