function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

    if (s<10){
        document.getElementById("txt").style.color = "red";
    }
    else if (s<20){
        document.getElementById("txt").style.color = "blue";
    }
    else if (s<30){
        document.getElementById("txt").style.color = "green";
    }
    else if (s<40){
        document.getElementById("txt").style.color = "purple";
    }
    else if (s<50){
        document.getElementById("txt").style.color = "orange";
    }
    else{
        document.getElementById("txt").style.color = "cyan";
    }

  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }