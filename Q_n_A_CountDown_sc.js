
/* This countdown script adapted from one available at The JavaScript Source :: http://javascript.internet.com
Original script created by: Neill Broderick :: http://www.bespoke-software-solutions.co.uk/downloads/downjs.php */

var sc_mins;
var sc_secs;

function sc_cd(sc_Minutes, sc_Seconds) {
 	sc_mins = 1 * sc_m(sc_Minutes); // change minutes here
 	sc_secs = 0 + sc_s(":"+sc_Seconds); // change seconds here (always add an additional second to your total)
 	sc_secs++;
 	sc_CountPause();
}

function sc_reset(sc_Minutes, sc_Seconds) {
 	sc_mins = 1 * sc_m(sc_Minutes); // change minutes here
 	sc_secs = 0 + sc_s(":"+sc_Seconds); // change seconds here (always add an additional second to your total)
 	sc_secs++;
 	sc_CountPause();
}

function sc_restart(sc_Minutes, sc_Seconds) {
 	sc_mins = 1 * sc_m(sc_Minutes); // change minutes here
 	sc_secs = 0 + sc_s(":"+sc_Seconds); // change seconds here (always add an additional second to your total)
 	sc_secs++;
 	clearTimeout(sc_cd);
	document.sc_cd.sc_cp.value="Pause"; 
	document.getElementById('sc_PauseIndicator').innerHTML="&nbsp;";
	sc_redo("Count");
}

function sc_m(sc_obj) {
 	for(var i = 0; i < sc_obj.length; i++) {
  		if(sc_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(sc_obj.substring(0, i));
}

function sc_s(sc_obj) {
 	for(var i = 0; i < sc_obj.length; i++) {
  		if(sc_obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(sc_obj.substring(i + 1, sc_obj.length));
}

function sc_dis(sc_mins,sc_secs) {
 	var sc_disp;
  		sc_disp = " ";
 	sc_disp += sc_mins + ":";
 	if(sc_secs <= 9) {
  		sc_disp += "0" + sc_secs;
 	} else {
  		sc_disp += sc_secs;
 	}
 	return(sc_disp);
}

function sc_ProjDisplay() 
{
	try
	{
	 Display.document.getElementById('SCReadOut').innerHTML=sc_dis(sc_mins,sc_secs);
	}
	catch (err)
	{
	alert(err);
	}
}

function sc_redo(paused){
if (paused=="Pause")
	{document.getElementById('sc_ReadOut').innerHTML = sc_dis(sc_mins,sc_secs-1); clearTimeout (sc_cd);}
	else
	{
 	sc_secs--;
 	if(sc_secs == -1) {
  					sc_secs = 59;
 			 		sc_mins--;
			 	   }
// 	document.sc_cd.sc_disp.value = sc_dis(sc_mins,sc_secs); 
 	document.getElementById('sc_ReadOut').innerHTML=sc_dis(sc_mins,sc_secs); sc_ProjDisplay();
 // setup additional displays here.
 	if((sc_mins == 0) && (sc_secs == 0)) { 
  		sc_reset();   // change timeout message as required
  		// window.location = "yourpage.htm" // redirects to specified page once timer ends and ok button is pressed
 									} 
 								else {
 		sc_cd = setTimeout("sc_redo('Count')",1000);
 									}
	}
}

function sc_init() {
	
	sc_cd("2","00");
}

function sc_CountPause()
{

	if (document.sc_cd.sc_cp.value!="Pause") 
	{	document.sc_cd.sc_cp.value="Pause"; document.getElementById('sc_PauseIndicator').innerHTML="&nbsp;"; sc_redo ('Count'); }
	else
	{	document.sc_cd.sc_cp.value="Count"; document.getElementById('sc_PauseIndicator').innerHTML="Paused"; sc_redo ('Pause'); }

}
window.onload=sc_init();
