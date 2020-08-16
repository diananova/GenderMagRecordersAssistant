	
function editWhyText(){
	sidebarBody().find("#editSubgoal").hide();
	sidebarBody().find('#editSubName').hide();
	sidebarBody().find('#addAction').hide();
	sidebarBody().find("#A0Q0whyYes").show();
	sidebarBody().find("#A0Q0whyYes").html(subgoal.why);
	sidebarBody().find('#submitWhy').show();
}