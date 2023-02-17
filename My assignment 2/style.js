let outputScreenEl = document.getElementById("outputScreen");

function display(num) {
    outputScreenEl.value += num;
}

function calculator(){
   try { 
    outputScreenEl.value = eval
    (outputScreenEl.value);
}
catch(err) {
    alert ("Invalid");
}

}
function Clear(){
    outputScreenEl.value = "";
}
function del() {
    outputScreenEl.value = outputScreenEl.value
    .slice(0, -1);
}
function percentage(num, per){
  outputScreenEl.value = (num/100)*per;
  
}
console.log();