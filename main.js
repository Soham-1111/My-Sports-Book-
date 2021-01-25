var images=["Cover.jpg", "MSD.jpeg", "Virat.jpg", "Sachin.jpeg", "Zaheer Khan.jpeg"];
var names=["", "MS Dhoni" ,"Virat Kohli", "Sachin Tendulkar", "Zaheer Khan"];

var i=0;
function change(){
  document.getElementById("name").innerHTML=names[i];
 document.getElementById("Cricketer").src=images[i];
i++;
 
 
}







