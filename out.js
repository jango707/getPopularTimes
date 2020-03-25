var xmlhttp = new XMLHttpRequest();
var url = "output.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(array) {
    var out = "";
    var i;
    for(i = 0; i < 6; i++) {
        out += '<div id="superMarket' + i + '"><li>' +
        array[i].name + '</li></div><br>';
        
    }
    document.getElementById("output").innerHTML = out ;
    
  

   
document.getElementById("superMarket0").addEventListener("click", function(){
  showGraph(0,array);
  
});

document.getElementById("superMarket1").addEventListener("click", function(){
  showGraph(1,array);
  
});
document.getElementById("superMarket2").addEventListener("click", function(){
  showGraph(2,array);
  
});

document.getElementById("superMarket3").addEventListener("click", function(){
  showGraph(3,array);
  
});
document.getElementById("superMarket4").addEventListener("click", function(){
  showGraph(4,array);
  
});

document.getElementById("superMarket5").addEventListener("click", function(){
  showGraph(5,array);
  
});
}

function showGraph(i,array){
  
  var whichDay = 0; //0 = Monday, 1= tuesday, etc...
  var data = [
    {
      x: ['0','1', '2','3','4','5','6','7', '8','9','10','11','12','13', '14','15','16','17','18','19', '20', '21', '22', '23', '24'],
      y: [array[i].populartimes[whichDay].data[0],
      array[i].populartimes[whichDay].data[1],
      array[i].populartimes[whichDay].data[2],
      array[i].populartimes[whichDay].data[3],
      array[i].populartimes[whichDay].data[4],
      array[i].populartimes[whichDay].data[5],
      array[i].populartimes[whichDay].data[6],
      array[i].populartimes[whichDay].data[7],
      array[i].populartimes[whichDay].data[8],
      array[i].populartimes[whichDay].data[9],
      array[i].populartimes[whichDay].data[10],
      array[i].populartimes[whichDay].data[11],
      array[i].populartimes[whichDay].data[12],
      array[i].populartimes[whichDay].data[13],
      array[i].populartimes[whichDay].data[14],
      array[i].populartimes[whichDay].data[15],
      array[i].populartimes[whichDay].data[16],
      array[i].populartimes[whichDay].data[17],
      array[i].populartimes[whichDay].data[18],
      array[i].populartimes[whichDay].data[19],
      array[i].populartimes[whichDay].data[20],
      array[i].populartimes[whichDay].data[21],
      array[i].populartimes[whichDay].data[22],
      array[i].populartimes[whichDay].data[23],
      array[i].populartimes[whichDay].data[24]],
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('myDiv', data);


  let out= "<b>" + array[i].name + "</b>" + "<br><br>";
  for (j = 0; j< 7; j++){
  out +=    "<div class='day'><b>" + array[i].populartimes[j].name + ":</b></div><br>"+
   array[i].populartimes[j].data + "<br><br>"
   ;
  document.getElementById("data").innerHTML = out ;
  }
  
  document.getElementById("day").style.display= "block";
  document.getElementById("day").innerHTML = "<b>Click here for next day, current day: " + array[0].populartimes[whichDay].name + "</b>";

  document.getElementById("day").addEventListener("click", function(){
    if(whichDay != 6)document.getElementById("day").innerHTML = "<b>Click here for next day, current day: " + array[0].populartimes[whichDay+1].name + "</b>";
    else document.getElementById("day").innerHTML = "<b>Click here for next day, current day: " + array[0].populartimes[0].name + "</b>";
    if(whichDay >= 6)whichDay=0;
    else{
      whichDay ++;
    }
  var data = [
    {
      x: ['0','1', '2','3','4','5','6','7', '8','9','10','11','12','13', '14','15','16','17','18','19', '20', '21', '22', '23', '24'],
      y: [array[i].populartimes[whichDay].data[0],
      array[i].populartimes[whichDay].data[1],
      array[i].populartimes[whichDay].data[2],
      array[i].populartimes[whichDay].data[3],
      array[i].populartimes[whichDay].data[4],
      array[i].populartimes[whichDay].data[5],
      array[i].populartimes[whichDay].data[6],
      array[i].populartimes[whichDay].data[7],
      array[i].populartimes[whichDay].data[8],
      array[i].populartimes[whichDay].data[9],
      array[i].populartimes[whichDay].data[10],
      array[i].populartimes[whichDay].data[11],
      array[i].populartimes[whichDay].data[12],
      array[i].populartimes[whichDay].data[13],
      array[i].populartimes[whichDay].data[14],
      array[i].populartimes[whichDay].data[15],
      array[i].populartimes[whichDay].data[16],
      array[i].populartimes[whichDay].data[17],
      array[i].populartimes[whichDay].data[18],
      array[i].populartimes[whichDay].data[19],
      array[i].populartimes[whichDay].data[20],
      array[i].populartimes[whichDay].data[21],
      array[i].populartimes[whichDay].data[22],
      array[i].populartimes[whichDay].data[23],
      array[i].populartimes[whichDay].data[24]],
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('myDiv', data);
});


}



