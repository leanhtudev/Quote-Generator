

function runSubmit(){

  var subject1=["Tom","Thomas","Mike"];
  var verb1 = ["uses","has","eats"];
  var adverb1=["apples","bananas","oranges"];

  var subject2=["John","Peter","Mike"];
  var verb2 = ["plays","swims","drives"];
  var adverb2=["fast","slowly","well"];

  var sentence="";
  var quoteNum;
  var quoteType;
  var result;
  var times=document.getElementsByName("times");
  for(i=0;i<times.length;i++){
    if(times[i].checked){
    quoteNum=times[i].value;
    break;
    }
  }

    var type=document.getElementsByName("type");
    for(i=0;i<type.length;i++){
      if(type[i].checked){
      quoteType=type[i].value;
      break;
    }
    }

    quoteNum=Number(quoteNum);
    quoteType=Number(quoteType);
    
  if(quoteType==1){
     for(i=0;i<quoteNum;i++){
        var randomSubject = subject1[Math.floor(Math.random()*subject1.length)];
        var randomVerb=verb1[Math.floor(Math.random()*verb1.length)];
        var randomAdverb=adverb1[Math.floor(Math.random()*adverb1.length)];
        sentence += randomSubject + " " + randomVerb + " " + randomAdverb+ " <br> ";
        }

        document.getElementById("content").innerHTML="<strong>" + sentence + "</strong>";
  }
  else{
    for(i=0;i<quoteNum;i++){
      var randomSubject = subject2[Math.floor(Math.random()*subject2.length)];
        var randomVerb=verb2[Math.floor(Math.random()*verb2.length)];
      var randomAdverb=adverb2[Math.floor(Math.random()*adverb2 .length)];
      sentence += randomSubject + " " + randomVerb + " " + randomAdverb + " <br>"  ;
    }
    
      document.getElementById("content").innerHTML="<u>" + sentence + "</u>";
  }

    
}


