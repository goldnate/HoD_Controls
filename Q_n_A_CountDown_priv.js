
/* This countdown script adapted from one available at The JavaScript Source :: http://javascript.internet.com
Original script created by: Neill Broderick :: http://www.bespoke-software-solutions.co.uk/downloads/downjs.php */

var priv_mins;
var priv_secs;

function priv_cd(priv_Minutes, priv_Seconds) {
 	priv_mins = 1 * priv_m(priv_Minutes); // change minutes here
 	priv_secs = 0 + priv_s(":"+priv_Seconds); // change seconds here (always add an additional second to your total)
 	priv_secs++;
 	priv_CountPause();
}

function priv_reset(priv_Minutes, priv_Seconds) {
 	priv_mins = 1 * priv_m(priv_Minutes); // change minutes here
 	priv_secs = 0 + priv_s(":"+priv_Seconds); // change seconds here (always add an additional second to your total)
 	priv_secs++;
 	priv_CountPause();
}

function priv_restart(priv_Minutes, priv_Seconds) {
 	priv_mins = 1 * priv_m(priv_Minutes); // change minutes here
 	priv_secs = 0 + priv_s(":"+priv_Seconds); // change seconds here (always add an additional second to your total)
 	priv_secs++;
 	clearTimeout(priv_cd);
	document.priv_cd.priv_cp.value="Pause"; 
	document.getElementById('priv_PauseIndicator').innerHTML="&nbsp;";
	priv_redo("Count");
}

function priv_m(priv_obj) {
 	for(var i = 0; i < priv_obj.length; i++) {
  		if(priv_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(priv_obj.substring(0, i));
}

function priv_s(priv_obj) {
 	for(var i = 0; i < priv_obj.length; i++) {
  		if(priv_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(priv_obj.substring(i + 1, priv_obj.length));
}

function priv_dis(priv_mins,priv_secs) {
 	var priv_disp;
  		priv_disp = " ";
 	priv_disp += priv_mins + ":";
 	if(priv_secs <= 9) {
  		priv_disp += "0" + priv_secs;
 	} else {
  		priv_disp += priv_secs;
 	}
 	return(priv_disp);
}

function priv_ProjDisplay() 
{
	try
	{
	 Display.document.getElementById('privReadOut').innerHTML=priv_dis(priv_mins,priv_secs);
	}
	catch (err)
	{
	alert(err);
	}
}

function priv_redo(paused){
if (paused=="Pause")
	{document.getElementById('priv_ReadOut').innerHTML = priv_dis(priv_mins,priv_secs-1); clearTimeout (priv_cd);}
	else
	{
 	priv_secs--;
 	if(priv_secs == -1) {
  					priv_secs = 59;
 			 		priv_mins--;
			 	   }
// 	document.priv_cd.priv_disp.value = priv_dis(priv_mins,priv_secs); 
 	document.getElementById('priv_ReadOut').innerHTML=priv_dis(priv_mins,priv_secs); priv_ProjDisplay();
 // setup additional displays here.
 	if((priv_mins == 0) && (priv_secs == 0)) { 
  		priv_reset();   // change timeout message as required
  		// window.location = "yourpage.htm" // redirects to specified page once timer ends and ok button is pprivsed
 									} 
 								else {
 		priv_cd = setTimeout("priv_redo('Count')",1000);
 									}
	}
}

function priv_window() {
	Display.document.getElementById('privBox').style.display="block";
	Display.document.getElementById('privDisp').style.display="block";
	Display.document.getElementById('privCount').style.display="block";
	Display.document.getElementById('privCount').style.display="block";
	Display.document.getElementById('privReadOut').innerHTML="2:00";
	Display.document.getElementById('priv-remains').innerHTML="REMAIN FOR<BR/>PRIVILEGED MOTION";
}


function priv_PoO_disp() {
	Display.document.getElementById('privBoxDisp').innerHTML='Point of Order'; 	
	Display.document.getElementById('privDisp').innerHTML='The Privileged Speaker believes an error has been made in parliamentary procedure.'; 	
}

function PoO_init() {
	priv_window();
	priv_PoO_disp();
	if (document.sc_cd.sc_cp.value=="Pause") {sc_CountPause()};
	priv_restart("2","00");
}

function priv_PoI_disp() {
	Display.document.getElementById('privBoxDisp').innerHTML='Point of Information'; 	
	Display.document.getElementById('privDisp').innerHTML='The Privileged Speaker needs or has information that is essential for the discussion on the floor.'
	}

function PoI_init() {
	priv_window();
	priv_PoI_disp();
	if (document.sc_cd.sc_cp.value=="Pause") {sc_CountPause()};
	priv_restart("2","00");
}

function priv_PoPP_disp() {
	Display.document.getElementById('privBoxDisp').innerHTML='Point of Personal Privilege'; 	
	Display.document.getElementById('privDisp').innerHTML='The Privileged Speaker wishes to respond to a remark made by a previous speaker that bears on her or his reputation.'
}

function PoPP_init() {
	priv_window();
	priv_PoPP_disp();
	if (document.sc_cd.sc_cp.value=="Pause") {sc_CountPause()};
	priv_restart("2","00");
}

function priv_window_close() {
	Display.document.getElementById('privBox').style.display="none";
	Display.document.getElementById('privDisp').style.display="none";
	Display.document.getElementById('privCount').style.display="none";
	Display.document.getElementById('privCount').style.display="none";
	Display.document.getElementById('privReadOut').innerHTML="";
	Display.document.getElementById('privDisp').innerHTML="";
	Display.document.getElementById('priv-remains').innerHTML="";
}

function priv_count_inst_close() {
	Display.document.getElementById('privCountInst').style.display='none';	Display.document.getElementById('privCountInst').innerHTML=''; 	
}


function priv_close() {
	priv_redo('Pause');
	priv_window_close();
	if (document.sc_cd.sc_cp.value!="Pause") {sc_CountPause()};
}

function priv_CountPause()
{

	if (document.priv_cd.priv_cp.value!="Pause") 
	{	document.priv_cd.priv_cp.value="Pause"; document.getElementById('priv_PauseIndicator').innerHTML="&nbsp;"; priv_redo ('Count'); }
	else
	{	document.priv_cd.priv_cp.value="Count"; document.getElementById('priv_PauseIndicator').innerHTML="Paused"; priv_redo ('Pause'); }

}

function priv_text_disp (Content) {
	Display.document.getElementById('privDisp').innerHTML=Content;
}