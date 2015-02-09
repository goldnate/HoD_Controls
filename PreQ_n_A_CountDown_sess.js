
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

function sess_CountPause()
{

	if (document.sess_cd.sess_cp.value!="Pause") 
	{	document.sess_cd.sess_cp.value="Pause"; document.getElementById('sess_PauseIndicator').innerHTML="&nbsp;"; sess_redo ('Count'); }
	else
	{	document.sess_cd.sess_cp.value="Count"; document.getElementById('sess_PauseIndicator').innerHTML="Paused"; sess_redo ('Pause'); }

}


function countMins() {
	var today=new Date();
	var mm=today.getMinutes();
	var mmmm=0;
	var ss=today.getSeconds();

	if (mm>=45) {
	mmmm=104-mm;return(mmmm)} else {mmmm=45-mm;return(mmmm)};
/*
		mmmm+=30;
	Display.document.getElementById('Instructions').innerHTML=mmmm+" okay60Mins";
//		return (mmmm);
		}
	else {
 		mmmm="30";
 	Display.document.getElementById('Instructions').innerHTML=mmmm+" okay60Mins";
//		return (mmmm);
 		}
*/
}

function countSecs() {
	var todays=new Date();
	var ss=todays.getSeconds();
	var ssss=0;
	
//	return(ss);
//Display.document.getElementByID('Instructions').innerHTML=ssss+"&nbsp;"+ss+"okaySecs";
if (ss==0) {return (ss)} else {return (60-ss)}

//return (ssss) else { ssss+=60; ssss-=ss; return (ssss)};

}
function sess_init() {
	var mmm = countMins();	
	var sss = countSecs(); if (sss==0) mmm+=1;
var mstring=" "+mmm;
var sstring=""+sss;
sess_cd(mstring,sstring);
/*
//	document.getElementById('sess_PauseIndicator').innerHTML="Ending";
//window.open('Main_Preview.htm','Preview','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,height=600,width=800,top=0,left=100');
*/
}

