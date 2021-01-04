function syori(){
  var eFrom = document.getElementById("txtFrom");
  var eTo = document.getElementById("txtTo");
  var lineA = eFrom.value.split('\n');

  var txtTo = "";
  
  var stime="";
  var etime="";
  var strNaiyo ="";
  for(i=2; i<lineA.length; i++){
    var line = String(lineA[i]);
    var valA =  line.split('|');
    if (i===2){
      console.log('valA[0]:' + valA[0]);
      console.log('valA[1]:' + valA[1]);
      console.log('valA[2]:' + valA[2]);



      stime = valA[1];
      strNaiyo = valA[2];
    }else{
      etime = valA[1];
      var strTime = stime + '\t' + etime;
      txtTo = txtTo + "\n" + strTime + '\t' + strNaiyo;
      
      strNaiyo = valA[2];
      stime = etime;
    }
  }
  eTo.textContent = txtTo;

}

