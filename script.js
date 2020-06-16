// ------------------------HEX COLOR CODE GENERATOR FUNCTION----------------------
function HEXCode() {
  var numOfDiv = document.querySelectorAll(".color-background").length;
  for (x=0; x<numOfDiv; x++){
      // Generates the hex code
      var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

      // Assigns a hex code to each div
      document.querySelectorAll(".color-background")[x].style.backgroundColor = randomColor;

      // Displays the hex code in the respective div
      document.querySelectorAll(".color-code")[x].innerHTML = randomColor;
     
  }
}

// ---------------------RGB COLOR CODE GENERATOR FUNCTION----------------------
function getRandomRgb() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);

  //var num = Math.round(0xffffff * Math.random());
  // //var r = num >> 16;
  // var g = num >> 8 & 255;
  // var b = num & 255;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// ---------------------SET BACKGROUND COLOR TO ALL DIVS----------------------
function RGBColor(){
  for (var i = 0; i < document.querySelectorAll(".color-background").length; i++) {
    let color = getRandomRgb()
    document.querySelectorAll(".color-background")[i].style.backgroundColor = color;
    document.querySelectorAll(".color-code")[i].innerHTML = color;
  }
  
}

// ------------------------FUNTION TO BE CARRY OUT BY CLICK-----------------------
function generate(){
  let type = document.getElementById("color-output")
  if (type.value == "RGB"){
    RGBColor();
  }else{
    HEXCode();
  }
}
