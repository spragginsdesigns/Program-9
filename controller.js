 function controller() {
   var type = document.getElementById("apBox").value;
   var length = document.getElementById("lengthBox").value;
   var width = document.getElementById("widthBox").value;
   var mainSolution = document.getElementById("message");
   var answer;
   var label;
   if (type == "a" || type == "A") {
     answer = length * width;
     label = 'Area';
   } else if (type == "p" || type == "P") {
     answer = 2 * length + 2 * width;
     label = 'Perimiter';
   } else {
     mainSolution.innerText = "Invalid. Must Enter 'A' or 'P'";
     return;
   }
   if (length.length > 0 && width.length > 0) {
     if (!isNaN(answer)) {
       mainSolution.innerHTML = `${label} =&nbsp ${answer}`;
     }
   } else {
     mainSolution.innerHTML = "";
   }
 }


 function clearText() {
   document.getElementById("message").innerHTML = ("<br>");
   document.getElementById("apBox").value = "";
   document.getElementById("lengthBox").value = "";
   document.getElementById("widthBox").value = "";
 }