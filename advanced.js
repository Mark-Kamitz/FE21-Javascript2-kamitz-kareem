//advanced
function calculate(minutes){
 var hours = Math.floor( minutes / 60 );
 var minutes = minutes - ( hours * 60 );
 return [hours,minutes];
}

calculate(200);
document.write("Hours: " + calculate(200)[0] + "<br>");
document.write("Minutes: " + calculate(200)[1]);

