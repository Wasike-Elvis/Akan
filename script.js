var date = document.forms["Akan"]["Date"];
var month = document.forms["Akan"]["Month"];
function validate(){
    if(date.value < 1 && date.value> 31){
        date.style.border="2px color red";
        return false;
    }
}