
/* This countdown script adapted from one available at The JavaScript Source :: http://javascript.internet.com
Original script created by: Neill Broderick :: http://www.bespoke-software-solutions.co.uk/downloads/downjs.php */

var sess_mins;
var sess_secs;

function sess_cd(sess_Minutes, sess_Seconds) {
 	sess_mins = 1 * sess_m(sess_Minutes); // change minutes here
 	sess_secs = 0 + sess_s(":"+sess_Seconds); // change seconds here (always add an additional second to your total)
 	sess_secs++;
 	sess_CountPause();
}

function sess_reset(sess_Minutes, sess_Seconds) {
 	sess_mins = 1 * sess_m(sess_Minutes); // change minutes here
 	sess_secs = 0 + sess_s(":"+sess_Seconds); // change seconds here (always add an additional second to your total)
 	sess_secs++;
 	sess_CountPause();
}

function sess_restart(sess_Minutes, sess_Seconds) {
 	sess_mins = 1 * sess_m(sess_Minutes); // change minutes here
 	sess_secs = 0 + sess_s(":"+sess_Seconds); // change seconds here (always add an additional second to your total)
 	sess_secs++;
 	clearTimeout(sess_cd);
	document.sess_cd.sess_cp.value="Pause"; 
	document.getElementById('sess_PauseIndicator').innerHTML="&nbsp;";
	sess_redo("Count");
}

function sess_m(sess_obj) {
 	for(var i = 0; i < sess_obj.length; i++) {
  		if(sess_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(sess_obj.substring(0, i));
}

function sess_s(sess_obj) {
 	for(var i = 0; i < sess_obj.length; i++) {
  		if(sess_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(sess_obj.substring(i + 1, sess_obj.length));
}

function sess_dis(sess_mins,sess_secs) {
 	var sess_disp;
 	if(sess_mins <= 9) {
  		sess_disp = " 0";
 	} else {
  		sess_disp = " ";
 	}
 	sess_disp += sess_mins + ":";
 	if(sess_secs <= 9) {
  		sess_disp += "0" + sess_secs;
 	} else {
  		sess_disp += sess_secs;
 	}
 	return(sess_disp);
}

function sess_ProjDisplay() 
{
	try
	{
	 Display.document.getElementById('SessReadOut').innerHTML=sess_dis(sess_mins,sess_secs);
	}
	catch (err)
	{
	alert(err);
	}
}

function sess_redo(paused){
if (paused=="Pause")
	{document.getElementById('sess_ReadOut').innerHTML = sess_dis(sess_mins,sess_secs-1); clearTimeout (sess_cd);}
	else
	{
 	sess_secs--;
 	if(sess_secs == -1) {
  					sess_secs = 59;
 			 		sess_mins--;
			 	   }
// 	document.sess_cd.sess_disp.value = sess_dis(sess_mins,sess_secs); 
 	document.getElementById('sess_ReadOut').innerHTML=sess_dis(sess_mins,sess_secs); sess_ProjDisplay();
 // setup additional displays here.
 	if((sess_mins == 0) && (sess_secs == 0)) { 
  		sess_reset();   // change timeout message as required
  		// window.location = "yourpage.htm" // redirects to specified page once timer ends and ok button is pressed
 									} 
 								else {
 		sess_cd = setTimeout("sess_redo('Count')",1000);
 									}
	}
}

function sess_init() {
	
	sess_cd("15","00");
}

function sess_CountPause()
{

	if (document.sess_cd.sess_cp.value!="Pause") 
	{	document.sess_cd.sess_cp.value="Pause"; document.getElementById('sess_PauseIndicator').innerHTML="&nbsp;"; sess_redo ('Count'); }
	else
	{	document.sess_cd.sess_cp.value="Count"; document.getElementById('sess_PauseIndicator').innerHTML="Paused"; sess_redo ('Pause'); }

}
window.onload=sess_init();
