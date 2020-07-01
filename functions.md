# EXPLANATION
## walkthough.js
### function editSubgoal(subgoalNum):

### function drawAction(actionNum, subgoalId):
when is it called?
sidebarBody().find(**sideActionIdForClick**).unbind( "click" ).click(function(){
			drawAction(item.actionId, item.subgoalId);
		});
