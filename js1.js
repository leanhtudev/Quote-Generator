	var subject=["Tom","Thomas","Mike"];
	var verb = ["use","have","eat"];
	var adverb=["apples","bananas","oranges"];


function change(){
	

	var randomSubject = subject[Math.floor(Math.random()*subject.length)];
	var randomVerb=verb[Math.floor(Math.random()*verb.length)];
	var randomAdverb=adverb[Math.floor(Math.random()*adverb.length)];
	var text;
	text=randomSubject+ " " + randomVerb+ " " + randomAdverb;

	document.getElementById("content").innerHTML=text;
}
