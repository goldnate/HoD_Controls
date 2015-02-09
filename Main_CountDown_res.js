
/* This countdown script adapted from one available at The JavaScript Source :: http://javascript.internet.com
Original script created by: Neill Broderick :: http://www.bespoke-software-solutions.co.uk/downloads/downjs.php */

var res_mins;
var res_secs;

function res_cd(res_Minutes, res_Seconds) {
 	res_mins = 1 * res_m(res_Minutes); // change minutes here
 	res_secs = 0 + res_s(":"+res_Seconds); // change seconds here (always add an additional second to your total)
 	res_secs++;
 	res_CountPause();
}

function res_reset(res_Minutes, res_Seconds) {
 	res_mins = 1 * res_m(res_Minutes); // change minutes here
 	res_secs = 0 + res_s(":"+res_Seconds); // change seconds here (always add an additional second to your total)
 	res_secs++;
 	res_CountPause();
}

function res_restart(res_Minutes, res_Seconds) {
 	res_mins = 1 * res_m(res_Minutes); // change minutes here
 	res_secs = 0 + res_s(":"+res_Seconds); // change seconds here (always add an additional second to your total)
 	res_secs++;
 	clearTimeout(res_cd);
	document.res_cd.res_cp.value="Pause"; 
	document.getElementById('res_PauseIndicator').innerHTML="&nbsp;";
	res_redo("Count");
}

function res_m(res_obj) {
 	for(var i = 0; i < res_obj.length; i++) {
  		if(res_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(res_obj.substring(0, i));
}

function res_s(res_obj) {
 	for(var i = 0; i < res_obj.length; i++) {
  		if(res_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(res_obj.substring(i + 1, res_obj.length));
}

function res_dis(res_mins,res_secs) {
 	var res_disp;
 	if(res_mins <= 9) {
  		res_disp = " 0";
 	} else {
  		res_disp = " ";
 	}
 	res_disp += res_mins + ":";
 	if(res_secs <= 9) {
  		res_disp += "0" + res_secs;
 	} else {
  		res_disp += res_secs;
 	}
 	return(res_disp);
}

function res_ProjDisplay() 
{
	try
	{
	 Display.document.getElementById('ResReadOut').innerHTML=res_dis(res_mins,res_secs);
	}
	catch (err)
	{
	alert(err);
	}
}

function res_redo(paused){
if (paused=="Pause")
	{document.getElementById('res_ReadOut').innerHTML = res_dis(res_mins,res_secs-1); clearTimeout (res_cd);}
	else
	{
 	res_secs--;
 	if(res_secs == -1) {
  					res_secs = 59;
 			 		res_mins--;
			 	   }
// 	document.res_cd.res_disp.value = res_dis(res_mins,res_secs); 
 	document.getElementById('res_ReadOut').innerHTML=res_dis(res_mins,res_secs); res_ProjDisplay();
 // setup additional displays here.
 	if((res_mins == 0) && (res_secs == 0)) { 
  		res_reset();   // change timeout message as required
  		// window.location = "yourpage.htm" // redirects to specified page once timer ends and ok button is pressed
 									} 
 								else {
 		res_cd = setTimeout("res_redo('Count')",1000);
 									}
	}
}

function res_window() {
	Display.document.getElementById('ResBox').style.display="block";
	Display.document.getElementById('ResDisp').style.display="block";
	Display.document.getElementById('ResCount').style.display="block";
	Display.document.getElementById('ResCount').style.display="block";
	Display.document.getElementById('ResReadOut').innerHTML="15:00";
	Display.document.getElementById('res-remains').innerHTML="REMAIN FOR<BR/>DEBATE";
}

function res_SpeakerInstruct() {
	Display.document.getElementById('Instructions').innerHTML='A resolution has been moved. Speakers may:<br/><b>&bull;&nbsp;Speak in favor of the resolution&nbsp;&nbsp;&nbsp;&bull;&nbsp;Speak against the resolution<br/>&bull;&nbsp;Move to amend the resolution<br/>&bull;&nbsp;Move to table the resolution (address a more urgent matter first)<br/>&bull;&nbsp;Move to close debate (vote immediately)&nbsp;&nbsp;&nbsp;&bull;&nbsp;Move to adjourn</b>';
}

function res_count_inst() {
	Display.document.getElementById('ResCountInst').style.display='block';	Display.document.getElementById('ResCountInst').innerHTML='Debate may continue until this counter reaches zero even if the session times out.'; 	
}

function res_box_display() {
	Display.document.getElementById('ResBoxDisp').innerHTML='A resolution has been moved'; 
}

function res_init() {
	res_window();
	res_SpeakerInstruct() ;
	res_count_inst();
	res_box_display();
	res_restart("15","00");
}
function res_window_close() {
	Display.document.getElementById('ResBox').style.display="none";
	Display.document.getElementById('ResDisp').style.display="none";
	Display.document.getElementById('ResCount').style.display="none";
	Display.document.getElementById('ResCount').style.display="none";
	Display.document.getElementById('ResReadOut').innerHTML="";
	Display.document.getElementById('ResDisp').innerHTML="";
	Display.document.getElementById('res-remains').innerHTML="";
	document.res_Cont.res_Content.value="RESOLVED that ";
}

function res_SpeakerInstruct_close() {
	Display.document.getElementById('Instructions').innerHTML='No resolution is on the floor. The speaker (after identifying oneself) may:<b><br/> &nbsp;&bull;&nbsp;Ask a Question<br/>&nbsp;&bull;&nbsp;Move a Resolution<br/>&nbsp;&bull;&nbsp;Move to Adjourn<br/></b>';
}

function res_count_inst_close() {
	Display.document.getElementById('ResCountInst').style.display='none';	Display.document.getElementById('ResCountInst').innerHTML=''; 	
}


function res_close() {
	res_redo('Pause');
	res_window_close();
	res_SpeakerInstruct_close() ;
	res_count_inst_close();
}

function res_CountPause()
{

	if (document.res_cd.res_cp.value!="Pause") 
	{	document.res_cd.res_cp.value="Pause"; document.getElementById('res_PauseIndicator').innerHTML="&nbsp;"; res_redo ('Count'); }
	else
	{	document.res_cd.res_cp.value="Count"; document.getElementById('res_PauseIndicator').innerHTML="Paused"; res_redo ('Pause'); }

}

function res_text_disp (Content) {
	Display.document.getElementById('ResDisp').innerHTML=Content;
}

function prev_text_disp (Content) {
	Preview.document.getElementById('ResDisp').innerHTML=Content;
}