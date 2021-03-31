var thisQuestion = null;
var thisQuestionResponses = null;


$( document ).ready(function() {
    console.log("test")


  if ($('#twodimensional-space-holder').length){
	  console.log("On charge le script EN");
	  thisQuestion = $('.multiple-short-txt');
	  thisQuestionResponses = $(':input[type=text]', thisQuestion);
	  thisAnswersContainer = $('.answer-container', thisQuestion);
	  thisAnswersContainer.addClass("ls-hidden");
	  var myp5 = new p5(sketch, 'twodimensional-space-holder');


  }else if ($('#twodimensional-space-holder2').length){
	  console.log("On charge le script CH");
	  thisQuestion = $('.multiple-short-txt');
	  thisQuestionResponses = $(':input[type=text]', thisQuestion);
	  thisAnswersContainer = $('.answer-container', thisQuestion);
	  thisAnswersContainer.addClass("ls-hidden");
	  var myp5 = new p5(sketch2, 'twodimensional-space-holder2');


  }else if ($('#twodimensional-space-holder3').length){
	  console.log("On charge le script CH2b");
	  thisQuestion = $('.multiple-short-txt');
	  thisQuestionResponses = $(':input[type=text]', thisQuestion);
	  thisAnswersContainer = $('.answer-container', thisQuestion);
	  thisAnswersContainer.addClass("ls-hidden");
	  var myp5 = new p5(sketch3, 'twodimensional-space-holder3');


  }
  else{
	  console.log("pas de div trouvé");
  }

  if ($('#emotionvideo').length){
	  console.log("on configure videojs");
	  videojs("emotionvideo", {}, function(){
	     aspectRatio="640:267"
	  });

  }



  var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
,"Yemen","Zambia","Zimbabwe"];

		var nationalities = [ "Afghan","Albanian","Algerian","American","Andorran","Angolan","Antiguans","Argentinean","Armenian","Australian","Austrian","Azerbaijani","Bahamian","Bahraini","Bangladeshi","Barbadian","Barbudans","Batswana","Belarusian","Belgian","Belizean","Beninese","Bhutanese","Bolivian","Bosnian","Brazilian","British","Bruneian","Bulgarian","Burkinabe","Burmese","Burundian","Cambodian","Cameroonian","Canadian","Cape Verdean","Central African","Chadian","Chilean","Chinese","Colombian","Comoran","Congolese","Costa Rican","Croatian","Cuban","Cypriot","Czech","Danish","Djibouti","Dominican","Dutch","East Timorese","Ecuadorean","Egyptian","Emirian","Equatorial Guinean","Eritrean","Estonian","Ethiopian","Fijian","Filipino","Finnish","French","Gabonese","Gambian","Georgian","German","Ghanaian","Greek","Grenadian","Guatemalan","Guinea-Bissauan","Guinean","Guyanese","Haitian","Herzegovinian","Honduran","Hungarian","I-Kiribati","Icelander","Indian","Indonesian","Iranian","Iraqi","Irish","Israeli","Italian","Ivorian","Jamaican","Japanese","Jordanian","Kazakhstani","Kenyan","Kittian and Nevisian","Kuwaiti","Kyrgyz","Laotian","Latvian","Lebanese","Liberian","Libyan","Liechtensteiner","Lithuanian","Luxembourger","Macedonian","Malagasy","Malawian","Malaysian","Maldivan","Malian","Maltese","Marshallese","Mauritanian","Mauritian","Mexican","Micronesian","Moldovan","Monacan","Mongolian","Moroccan","Mosotho","Motswana","Mozambican","Namibian","Nauruan","Nepalese","New Zealander","Nicaraguan","Nigerian","Nigerien","North Korean","Northern Irish","Norwegian","Omani","Pakistani","Palauan","Panamanian","Papua New Guinean","Paraguayan","Peruvian","Polish","Portuguese","Qatari","Romanian","Russian","Rwandan","Saint Lucian","Salvadoran","Samoan","San Marinese","Sao Tomean","Saudi","Scottish","Senegalese","Serbian","Seychellois","Sierra Leonean","Singaporean","Slovakian","Slovenian","Solomon Islander","Somali","South African","South Korean","Spanish","Sri Lankan","Sudanese","Surinamer","Swazi","Swedish","Swiss","Syrian","Taiwanese","Tajik","Tanzanian","Thai","Togolese","Tongan","Trinidadian/Tobagonian","Tunisian","Turkish","Tuvaluan","Ugandan","Ukrainian","Uruguayan","Uzbekistani","Venezuelan","Vietnamese","Welsh","Yemenite","Zambian","Zimbabwean"];



 /*$("#question151 input[type=text],#question155 input[type=text],#question168 input[type=text], #question613 input[type=text], #question617 input[type=text], #question619 input[type=text], #question947 input[type=text], #question951 input[type=text], #question953 input[type=text], #question1248 input[type=text], #question1252 input[type=text], #question1254 input[type=text], #question1549 input[type=text], #question1553 input[type=text], #question1555 input[type=text]").autocomplete({
 	source: country_list
 }); */




/*$("#question153 input[type=text], #question615 input[type=text], #question949 input[type=text], #question1250 input[type=text], #question1551 input[type=text]").autocomplete({
 	source: nationalities
 });*/




});

function resize() {

    var canvas2 = document.getElementById('defaultCanvas0');
	if(canvas2){

		//var resizeWidth=Math.min(window.outerWidth, window.innerWidth, screen.width);
		var resizeWidth=0;
		if( Number.isInteger(window.outerWidth) && window.outerWidth >10){
			resizeWidth=window.outerWidth;
		}else if( Number.isInteger(window.innerWidth) && window.innerWidth >10){
			resizeWidth=window.innerWidth;
		}

		console.log("resizeWidth:"+resizeWidth);

	    if (  resizeWidth > 200 && resizeWidth < 600) {
		    canvas2.style.width = resizeWidth + 'px';
		    canvas2.style.height = resizeWidth + 'px';
			canvas2.style.marginLeft = "-30px";
			//canvas2.width  = window.innerWidth + 'px';
			//canvas2.height = window.innerWidth + 'px';
		}else{
		    canvas2.style.width = '600px';
		    canvas2.style.height = '600px';
			canvas2.style.paddingLeft = "0px";
		}
	}
};

window.addEventListener('resize', resize, false);



var sketch = function( p ) {


	var words=[["afraid",162,541],
	["ambitious",452,595],
	["amorous",495,321],
	["amused",533,521],
	["angry",113,518],
	["anxious",87,633],
	["astonished",493,653],
	["bored",197,225],
	["confident",648,322],
	["contemptuous",133,490],
	["delighted",644,505],
	["depressed",250,379],
	["disappointed",235,420],
	["disgusted",223,449],
	["doubtful",100,100],
	["embarrassed",300,470],
	["enthusiastic",529,618],
	["excited",600,764],
	["happy",687,634],
	["hateful",80,600],
	["hopeful",594,403],
	["impatient",233,316],
	["jealous",320,680],
	["nostalgic",568,343],
	["proud",643,447],
	["relaxed",700,176],
	["sad",169,273],
	["surprised",652,727],
	["tense",115,400],
	["tired",113,67],
	["triumphant",668,656],
	["solemn",301,87],
	["dull",241,154],
	["relieved",490,490],
	["serene",489,265],
	["mesmerised",452,172],
	["neutral",400,400]];


	var alreadyTouched=false;
	var touchedCoordinates=[0,0];
	var lastMouseCoordinates=[0,0];
	var scaleXmin=scaleYmin=0;
	var scaleXmax=scaleYmax=800;
	var wordsx = new Array(words.length);
	var wordsy = new Array(words.length);

	var textSizeNormal=15; //MODIFIER ICI
	var textSizeHighlight=20; //MODIFIER ICI
	var textColorChosen="blue";
	var textColorHighlight=0;
	var textColorNormal=70; // 255 correspond à blanc, 0 correspond à noir

	var nearestword=0;


	var bigword=0;
	var is_inside=false;
	var is_otherword=false;
	var is_onotherword=false;
	var circle_diameter=490;

	var current_step=1;
	  var origin_x=300;
	  var origin_y=320;
	var choosenWord="";
	var choosenWord_x=0;
	var choosenWord_y=0;
	var otherWordButtonCoordinates=[[450,527],[540,557]];






 p.setup = function() {
  p.createCanvas(600, 600);
  for ( var i=0; i<words.length; i++) {
    wordsx[i] = p.map( words[i][1], scaleXmin, scaleXmax, origin_x-circle_diameter/2, origin_x+circle_diameter/2);
    wordsy[i] = p.map( words[i][2], scaleYmin, scaleYmax, origin_y+circle_diameter/2, origin_y-circle_diameter/2);
  }
  resize();

}

 p.draw = function() {

  p.background(250);
  is_inside=p.checkIsInsideCircle();

  p.drawCircleAndAxes();

  nearestword = is_inside? p.findNearestWord() : 0 ;
  if(current_step==2) p.drawWords();
  p.showTitle();

 if(current_step == 1 && is_inside){
    //fill(255,0,0);
    //ellipse(mouseX, mouseY, 10, 10);
    p.fill(50,0,150); //couleur curseur
    p.rectMode(p.RADIUS);
    p.rect(origin_x, p.mouseY, 10, 4);
    p.rect(p.mouseX, origin_y, 4, 10);

	 	//pointeur sous le curseur
	 	p.fill(255,0,116);
	if(!alreadyTouched){
			p.ellipse(p.mouseX, p.mouseY, 20, 20);
	}


  }
  if(alreadyTouched && current_step == 1 /*&& is_inside*/){
    p.fill(255,0,116);
    p.ellipse(touchedCoordinates[0], touchedCoordinates[1], 20, 20);
  }

  if(current_step==2){
	  p.drawOtherWordButton();
	  is_onotherword=p.checkIsOnOtherWord();

  }
  p.drawNoEmotionButton();

lastMouseCoordinates=[p.mouseX, p.mouseY];
}

p.touchStarted = function () {
    clickX = p.int(p.map( p.mouseX, origin_x-circle_diameter/2, origin_x+circle_diameter/2, scaleXmin, scaleXmax));
    clickY = p.int(p.map( p.mouseY, origin_y+circle_diameter/2, origin_y-circle_diameter/2, scaleYmin, scaleYmax));
  is_inside=p.checkIsInsideCircle();
  if(is_inside){
	    if(current_step == 1 ){
	    //current_step=2;

	    if(!alreadyTouched){
	      alreadyTouched=true;
	    }else{
	      //on est dans le cas d'une pression de confirmation
	      if( p.dist(p.mouseX, p.mouseY,touchedCoordinates[0], touchedCoordinates[1]) < 40 ){
	        current_step=2;
	        thisQuestionResponses.eq(0).val(clickX);
	        thisQuestionResponses.eq(1).val(clickY);
	      }
	    }
	  }
	  else if(current_step == 2 ){
		nearestword = p.findNearestWord();
	    choosenWord=words[nearestword][0];
	    choosenWord_x=wordsx[nearestword];
	    choosenWord_y=wordsy[nearestword];
	    thisQuestionResponses.eq(2).val(choosenWord);
		is_otherword=false;
		//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
	    //thisQuestion.css("border", "5px solid blue");
	  }

  	  is_onotherword=p.checkIsOnOtherWord();
	  if(is_onotherword){
		  if( !is_otherword ){
			is_otherword=true;
		  	choosenWord="";
			thisQuestionResponses.eq(2).val("OTHER");
			//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
		  }
	  }
	  touchedCoordinates=[p.mouseX, p.mouseY];
	  return false;
	}
	else return true;

}

p.mousePressed = function () {
  clickX = p.int(p.map( p.mouseX, origin_x-circle_diameter/2, origin_x+circle_diameter/2, scaleXmin, scaleXmax));
  clickY = p.int(p.map( p.mouseY, origin_y+circle_diameter/2, origin_y-circle_diameter/2, scaleYmin, scaleYmax));

  if(current_step == 1 && is_inside){
    // current_step=2;
    // thisQuestionResponses.eq(0).val(clickX);
    // thisQuestionResponses.eq(1).val(clickY);
    if(!alreadyTouched){
      alreadyTouched=true;
    }else{
      //on est dans le cas d'une pression de confirmation
      if( p.dist(p.mouseX, p.mouseY,touchedCoordinates[0], touchedCoordinates[1]) < 40 ){
        current_step=2;
        thisQuestionResponses.eq(0).val(clickX);
        thisQuestionResponses.eq(1).val(clickY);
      }
    }

  }
  else if(current_step == 2 && is_inside){
    //if(choosenWord==""){
      choosenWord=words[nearestword][0];
      choosenWord_x=wordsx[nearestword];
      choosenWord_y=wordsy[nearestword];
	  is_otherword=false;
    //}else{
    //  choosenWord="";
    //}
    thisQuestionResponses.eq(2).val(choosenWord);
	//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
    //thisQuestion.css("border", "5px solid blue");
  }
  touchedCoordinates=[p.mouseX, p.mouseY];
  if(is_onotherword){
	  if( !is_otherword ){
		is_otherword=true;
	  	choosenWord="";
		thisQuestionResponses.eq(2).val("OTHER");
		//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
	  }
  }
  if(is_inside){
  	return false;
  }

}

p.drawCircleAndAxes = function(){

  p.push(); // Start another new drawing state
  p.noFill();
  p.strokeWeight(3);
  p.stroke(0);
  p.translate(origin_x, origin_y);
  //ellipse(0, 0, circle_diameter, circle_diameter);
  p.rectMode(p.RADIUS);
  p.rect(0, 0, circle_diameter/2, circle_diameter/2);


	if(current_step == 1){

	    p.strokeWeight(1);
	    p.stroke(0,0,130);
	    p.line(-circle_diameter/2, 0, circle_diameter/2, 0);
	    p.line(0, -circle_diameter/2, 0, circle_diameter/2);
	    p.textSize(20);
	    p.noStroke();


		p.textAlign(p.CENTER, p.CENTER);
		p.fill(50,0,150); // couleur texte
		p.text("ACTIVATED / AGITATED", 0, -circle_diameter/2*1.07);
		p.text("CALM", 0, circle_diameter/2*1.07);
		p.rotate(p.HALF_PI);
		p.text("PLEASANT", 0, -circle_diameter/2*1.07);
		p.rotate(p.PI);
		p.text("UNPLEASANT", 0, -circle_diameter/2*1.07);
	}
  p.pop();

}

p.checkIsInsideCircle = function (){
	//console.log("Souris : "+p.mouseX+"-"+p.mouseY+">"+p.abs(p.mouseX - origin_x) +"-"+p.abs(p.mouseY - origin_y) );

  if( p.abs(p.mouseX - origin_x) > circle_diameter/2 || p.abs(p.mouseY - origin_y) > circle_diameter/2 )
    return false
  else return true;
}

p.checkIsOnOtherWord = function (){

  if( p.mouseX > otherWordButtonCoordinates[0][0] && p.mouseX < otherWordButtonCoordinates[1][0] &&
  	  p.mouseY > otherWordButtonCoordinates[0][1] && p.mouseY < otherWordButtonCoordinates[1][1] ){

	return true;
  }
  else return false;
}

p.drawWords = function () {
  var nearestWordX=wordsx[nearestword];
  var nearestWordY=wordsy[nearestword];

  for ( var i=0; i<words.length; i++) {

    var wordTextSize = textSizeNormal;
    var wordTextColor = textColorNormal;
    p.strokeWeight(0);


    if(choosenWord==""){
      p.textStyle(p.NORMAL);

      if( nearestword==i && is_inside) {
        p.textStyle(p.BOLD);
        wordTextSize=textSizeHighlight;
        wordTextColor = textColorHighlight;
      }
    }
    else{
      if( words[i][0] == choosenWord){
        p.textStyle(p.BOLD);
        wordTextColor=textColorHighlight;
        wordTextSize=textSizeHighlight;
      }
      else{
        p.textStyle(p.NORMAL);
        wordTextColor=textColorNormal;
        wordTextSize=textSizeNormal;
      }

    }


    p.textSize(wordTextSize);
    p.fill(wordTextColor);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(words[i][0], wordsx[i], wordsy[i]);


  }
  //on reimprime le mot le plus proche au dessus
  if(choosenWord==""){
    if(is_inside){
      p.textStyle(p.BOLD);
      p.textSize(textSizeHighlight);
      p.fill(textColorHighlight);
      p.strokeWeight(1);
      p.stroke('white');
      p.text(words[nearestword][0],  nearestWordX, nearestWordY)
    }
  }else if(choosenWord != "neutral") {
    p.textStyle(p.BOLD);
    p.textSize(textSizeHighlight);
    p.fill(textColorChosen);
    p.strokeWeight(1);
    p.stroke('white');
    p.text(choosenWord,  choosenWord_x, choosenWord_y)
  }
  p.textStyle(p.NORMAL);
}

p.findNearestWord = function() {
 // juste pour être certain que ce soit élevé
  nearestdistance=100000000;
  for ( var i=0; i<words.length; i++) {

    var worddist = p.int(p.dist(wordsx[i], wordsy[i], p.mouseX, p.mouseY));
    if(worddist < nearestdistance){
      nearestword=i;
      nearestdistance=worddist;
    }
  }
  return nearestword;
}

p.showTitle = function (){
  p.noStroke();
  p.textSize(40);
  p.fill(0);
  if(current_step==1){
    p.textAlign(p.CENTER);
    p.text('How does he feel?', p.width/2, 30);
  }
  else if(current_step==2){
    p.textAlign(p.LEFT);

    if(choosenWord=="") {
		p.text('He feels ...', origin_x - circle_diameter/2, 30);
	}
    else {
		//var tmpword = words[nearestword][0] ;
		p.text('He feels '+choosenWord, origin_x - circle_diameter/2, 30);
	}
  }

}

p.drawOtherWordButton = function (){


    p.strokeWeight(1);
    p.stroke('#111111');
    p.rectMode(p.CORNERS);
	if(!is_otherword){
		p.fill('#333333');
	}else{
		p.fill('#cccccc');
	}

  	p.rect(otherWordButtonCoordinates[0][0], otherWordButtonCoordinates[0][1], otherWordButtonCoordinates[1][0], otherWordButtonCoordinates[1][1]);

    p.textSize(20);
    p.noStroke();
	if(!is_otherword){
		p.fill('#ffffff');
		p.textStyle(p.NORMAL);
	}else{
		p.fill('blue');
		p.textStyle(p.BOLD);
	}


	p.textAlign(p.CENTER, p.CENTER);
	p.text("Other", (otherWordButtonCoordinates[0][0]+otherWordButtonCoordinates[1][0])/2, (otherWordButtonCoordinates[0][1]+otherWordButtonCoordinates[1][1])/2 );

}

p.drawNoEmotionButton = function (){


    p.strokeWeight(1);
    p.stroke('#111111');

	var tmpdist=p.dist(touchedCoordinates[0], touchedCoordinates[1], origin_x, origin_y);

    if(alreadyTouched && current_step == 1 && tmpdist<=35){
	    p.strokeWeight(3);
	    p.stroke(255,0,116);
    }
	else if (current_step==2 && choosenWord=="neutral"){
	    p.strokeWeight(3);
	    p.stroke("blue");
	}

    p.rectMode(p.RADIUS);
	p.fill('#cccccc');


  	p.rect(origin_x, origin_y, 35, 35);

    p.textSize(20);
    p.noStroke();


	p.fill('black');
	p.textSize(13);
	p.textAlign(p.CENTER, p.CENTER);
	//p.fill(255); // couleur texte
	p.text("Neutral /", origin_x, origin_y -10 );
	p.text("No emotion", origin_x, origin_y +10 );

}

};




var sketch2 = function( p2 ) {


	var words=[["害怕",162,541],
		["有野心的",452,595],
		["色情的",495,321],
		["愉快的",533,521],
		["气愤",113,518],
		["焦虑的",87,633],
		["震惊的",493,653],
		["无趣的",197,225],
		["自信的",648,322],
		["鄙视的",133,490],
		["愉悦的",644,505],
		["沮丧的",250,379],
		["失望的",235,420],
		["恶心",223,449],
		["令人生疑的",100,100],
		["尴尬",300,470],
		["热情的",529,618],
		["激动的",600,764],
		["愉悦",687,634],
		["可憎的",80,600],
		["有希望的",594,403],
		["没有耐心的",233,316],
		["嫉妒的",320,680],
		["怀旧的",568,343],
		["骄傲",643,447],
		["放松的",700,176],
		["悲伤",169,273],
		["惊讶",652,727],
		["紧张的",115,400],
		["疲劳的",113,67],
		["成功的",668,656],
		["郑重的",301,87],
		["迟钝的",241,154],
		["放心的",490,490],
		["安宁的",489,265],
		["入迷的",452,172],
		["中性",400,400]];


	var alreadyTouched=false;
	var touchedCoordinates=[0,0];
	var lastMouseCoordinates=[0,0];
	var scaleXmin=scaleYmin=0;
	var scaleXmax=scaleYmax=800;
	var wordsx = new Array(words.length);
	var wordsy = new Array(words.length);

	var textSizeNormal=15; //MODIFIER ICI
	var textSizeHighlight=20; //MODIFIER ICI
	var textColorChosen="blue";
	var textColorHighlight=0;
	var textColorNormal=70; // 255 correspond à blanc, 0 correspond à noir

	var nearestword=0;


	var bigword=0;
	var is_inside=false;
	var is_otherword=false;
	var is_onotherword=false;
	var circle_diameter=490;

	var current_step=1;
	  var origin_x=300;
	  var origin_y=320;
	var choosenWord="";
	var choosenWord_x=0;
	var choosenWord_y=0;
	var otherWordButtonCoordinates=[[450,527],[540,557]];






 p2.setup = function() {
  p2.createCanvas(600, 600);
  for ( var i=0; i<words.length; i++) {
    wordsx[i] = p2.map( words[i][1], scaleXmin, scaleXmax, origin_x-circle_diameter/2, origin_x+circle_diameter/2);
    wordsy[i] = p2.map( words[i][2], scaleYmin, scaleYmax, origin_y+circle_diameter/2, origin_y-circle_diameter/2);
  }
  resize();

}

 p2.draw = function() {


  p2.background(250);
  is_inside=p2.checkIsInsideCircle();

  p2.drawCircleAndAxes();

  nearestword = is_inside? p2.findNearestWord() : 0 ;
  if(current_step==2) p2.drawWords();
  p2.showTitle();

 if(current_step == 1 && is_inside){
    //fill(255,0,0);
    //ellipse(mouseX, mouseY, 10, 10);
    p2.fill(50,0,150); //couleur curseur
    p2.rectMode(p2.RADIUS);
    p2.rect(origin_x, p2.mouseY, 10, 4);
    p2.rect(p2.mouseX, origin_y, 4, 10);

	 	//pointeur sous le curseur
	 	p2.fill(255,0,116);
	if(!alreadyTouched){
			p2.ellipse(p2.mouseX, p2.mouseY, 20, 20);
	}


  }
  if(alreadyTouched && current_step == 1 /*&& is_inside*/){
    p2.fill(255,0,116);
    p2.ellipse(touchedCoordinates[0], touchedCoordinates[1], 20, 20);
  }

  if(current_step==2){
	  p2.drawOtherWordButton();
	  is_onotherword=p2.checkIsOnOtherWord();

  }
  p2.drawNoEmotionButton();

  lastMouseCoordinates=[p2.mouseX, p2.mouseY];

}

p2.touchStarted = function () {
    clickX = p2.int(p2.map( p2.mouseX, origin_x-circle_diameter/2, origin_x+circle_diameter/2, scaleXmin, scaleXmax));
    clickY = p2.int(p2.map( p2.mouseY, origin_y+circle_diameter/2, origin_y-circle_diameter/2, scaleYmin, scaleYmax));
  is_inside=p2.checkIsInsideCircle();
  if(is_inside){
	    if(current_step == 1 ){
	    //current_step=2;

	    if(!alreadyTouched){
	      alreadyTouched=true;
	    }else{
	      //on est dans le cas d'une pression de confirmation
	      if( p2.dist(p2.mouseX, p2.mouseY,touchedCoordinates[0], touchedCoordinates[1]) < 40 ){
	        current_step=2;
	        thisQuestionResponses.eq(0).val(clickX);
	        thisQuestionResponses.eq(1).val(clickY);
	      }
	    }
	  }
	  else if(current_step == 2 ){
		nearestword = p2.findNearestWord();
	    choosenWord=words[nearestword][0];
	    choosenWord_x=wordsx[nearestword];
	    choosenWord_y=wordsy[nearestword];
	    thisQuestionResponses.eq(2).val(choosenWord);
		is_otherword=false;
		//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
	  }

  	  is_onotherword=p2.checkIsOnOtherWord();
	  if(is_onotherword){
		  if( !is_otherword ){
			is_otherword=true;
		  	choosenWord="";
			thisQuestionResponses.eq(2).val("OTHER");
			//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
		  }
	  }
	  touchedCoordinates=[p2.mouseX, p2.mouseY];
	  return false;
	}
	else return true;

}

p2.mousePressed = function () {
  clickX = p2.int(p2.map( p2.mouseX, origin_x-circle_diameter/2, origin_x+circle_diameter/2, scaleXmin, scaleXmax));
  clickY = p2.int(p2.map( p2.mouseY, origin_y+circle_diameter/2, origin_y-circle_diameter/2, scaleYmin, scaleYmax));

  if(current_step == 1 && is_inside){
    // current_step=2;
    // thisQuestionResponses.eq(0).val(clickX);
    // thisQuestionResponses.eq(1).val(clickY);
    if(!alreadyTouched){
      alreadyTouched=true;
    }else{
      //on est dans le cas d'une pression de confirmation
      if( p2.dist(p2.mouseX, p2.mouseY,touchedCoordinates[0], touchedCoordinates[1]) < 40 ){
        current_step=2;
        thisQuestionResponses.eq(0).val(clickX);
        thisQuestionResponses.eq(1).val(clickY);
      }
    }

  }
  else if(current_step == 2 && is_inside){
    //if(choosenWord==""){
      choosenWord=words[nearestword][0];
      choosenWord_x=wordsx[nearestword];
      choosenWord_y=wordsy[nearestword];
	  is_otherword=false;
    //}else{
    //  choosenWord="";
    //}
    thisQuestionResponses.eq(2).val(choosenWord);
	//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
    //thisQuestion.css("border", "5px solid blue");
  }
  touchedCoordinates=[p2.mouseX, p2.mouseY];
  if(is_onotherword){
	  if( !is_otherword ){
		is_otherword=true;
	  	choosenWord="";
		thisQuestionResponses.eq(2).val("OTHER");
		//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
	  }
  }
  if(is_inside){
  	return false;
  }

}

p2.drawCircleAndAxes = function(){

  p2.push(); // Start another new drawing state
  p2.noFill();
  p2.strokeWeight(3);
  p2.stroke(0);
  p2.translate(origin_x, origin_y);
  //ellipse(0, 0, circle_diameter, circle_diameter);
  p2.rectMode(p2.RADIUS);
  p2.rect(0, 0, circle_diameter/2, circle_diameter/2);


	if(current_step == 1){

	    p2.strokeWeight(1);
	    p2.stroke(0,0,130);
	    p2.line(-circle_diameter/2, 0, circle_diameter/2, 0);
	    p2.line(0, -circle_diameter/2, 0, circle_diameter/2);
	    p2.textSize(20);
	    p2.noStroke();


		p2.textAlign(p2.CENTER, p2.CENTER);
		p2.fill(50,0,150); // couleur texte
		p2.text("激活", 0, -circle_diameter/2*1.07);
		p2.text("平静", 0, circle_diameter/2*1.07);
		p2.rotate(p2.HALF_PI);
		p2.text("愉悦", 0, -circle_diameter/2*1.07);
		p2.rotate(p2.PI);
		p2.text("不愉悦", 0, -circle_diameter/2*1.07);
	}
  p2.pop();

}

p2.checkIsInsideCircle = function (){
	//console.log("Souris : "+p2.mouseX+"-"+p2.mouseY+">"+p2.abs(p2.mouseX - origin_x) +"-"+p2.abs(p2.mouseY - origin_y) );

  if( p2.abs(p2.mouseX - origin_x) > circle_diameter/2 || p2.abs(p2.mouseY - origin_y) > circle_diameter/2 )
    return false
  else return true;
}

p2.checkIsOnOtherWord = function (){

  if( p2.mouseX > otherWordButtonCoordinates[0][0] && p2.mouseX < otherWordButtonCoordinates[1][0] &&
  	  p2.mouseY > otherWordButtonCoordinates[0][1] && p2.mouseY < otherWordButtonCoordinates[1][1] ){

	return true;
  }
  else return false;
}

p2.drawWords = function () {
  var nearestWordX=wordsx[nearestword];
  var nearestWordY=wordsy[nearestword];

  for ( var i=0; i<words.length; i++) {

    var wordTextSize = textSizeNormal;
    var wordTextColor = textColorNormal;
    p2.strokeWeight(0);


    if(choosenWord==""){
      p2.textStyle(p2.NORMAL);

      if( nearestword==i && is_inside) {
        p2.textStyle(p2.BOLD);
        wordTextSize=textSizeHighlight;
        wordTextColor = textColorHighlight;
      }
    }
    else{
      if( words[i][0] == choosenWord){
        p2.textStyle(p2.BOLD);
        wordTextColor=textColorHighlight;
        wordTextSize=textSizeHighlight;
      }
      else{
        p2.textStyle(p2.NORMAL);
        wordTextColor=textColorNormal;
        wordTextSize=textSizeNormal;
      }

    }


    p2.textSize(wordTextSize);
    p2.fill(wordTextColor);
    p2.textAlign(p2.CENTER, p2.CENTER);
    p2.text(words[i][0], wordsx[i], wordsy[i]);


  }
  //on reimprime le mot le plus proche au dessus
  if(choosenWord==""){
    if(is_inside){
      p2.textStyle(p2.BOLD);
      p2.textSize(textSizeHighlight);
      p2.fill(textColorHighlight);
      p2.strokeWeight(1);
      p2.stroke('white');
      p2.text(words[nearestword][0],  nearestWordX, nearestWordY)
    }
  }else if(choosenWord != "中性") {
    p2.textStyle(p2.BOLD);
    p2.textSize(textSizeHighlight);
    p2.fill(textColorChosen);
    p2.strokeWeight(1);
    p2.stroke('white');
    p2.text(choosenWord,  choosenWord_x, choosenWord_y)
  }
  p2.textStyle(p2.NORMAL);
}

p2.findNearestWord = function() {
 // juste pour être certain que ce soit élevé
  nearestdistance=100000000;
  for ( var i=0; i<words.length; i++) {

    var worddist = p2.int(p2.dist(wordsx[i], wordsy[i], p2.mouseX, p2.mouseY));
    if(worddist < nearestdistance){
      nearestword=i;
      nearestdistance=worddist;
    }
  }
  return nearestword;
}

p2.showTitle = function (){
  p2.noStroke();
  p2.textSize(40);
  p2.fill(0);
  if(current_step==1){
    p2.textAlign(p2.CENTER);
    p2.text('他感觉怎么样 ?', p2.width/2, 30);
  }
  else if(current_step==2){
    p2.textAlign(p2.LEFT);

    if(choosenWord=="") {
		p2.text(' 他感到 ...', origin_x - circle_diameter/2, 30);
	}
    else {
		//var tmpword = words[nearestword][0] ;
		p2.text('他感到 '+choosenWord, origin_x - circle_diameter/2, 30);
	}
  }

}

p2.drawOtherWordButton = function (){


    p2.strokeWeight(1);
    p2.stroke('#111111');
    p2.rectMode(p2.CORNERS);
	if(!is_otherword){
		p2.fill('#333333');
	}else{
		p2.fill('#cccccc');
	}

  	p2.rect(otherWordButtonCoordinates[0][0], otherWordButtonCoordinates[0][1], otherWordButtonCoordinates[1][0], otherWordButtonCoordinates[1][1]);

    p2.textSize(20);
    p2.noStroke();
	if(!is_otherword){
		p2.fill('#ffffff');
		p2.textStyle(p2.NORMAL);
	}else{
		p2.fill('blue');
		p2.textStyle(p2.BOLD);
	}


	p2.textAlign(p2.CENTER, p2.CENTER);
	p2.text("其他", (otherWordButtonCoordinates[0][0]+otherWordButtonCoordinates[1][0])/2, (otherWordButtonCoordinates[0][1]+otherWordButtonCoordinates[1][1])/2 );

}

p2.drawNoEmotionButton = function (){


    p2.strokeWeight(1);
    p2.stroke('#111111');

	var tmpdist=p2.dist(touchedCoordinates[0], touchedCoordinates[1], origin_x, origin_y);

    if(alreadyTouched && current_step == 1 && tmpdist<=35){
	    p2.strokeWeight(3);
	    p2.stroke(255,0,116);
    }
	else if (current_step==2 && choosenWord=="中性"){
	    p2.strokeWeight(3);
	    p2.stroke("blue");
	}

    p2.rectMode(p2.RADIUS);
	p2.fill('#cccccc');


  	p2.rect(origin_x, origin_y, 35, 35);

    p2.textSize(20);
    p2.noStroke();


	p2.fill('black');
	p2.textSize(13);
	p2.textAlign(p2.CENTER, p2.CENTER);
	//p2.fill(255); // couleur texte
	p2.text("中性 / ", origin_x, origin_y -10);
	p2.text("中性情绪", origin_x, origin_y +10 );

}

};



var sketch3 = function( p3 ) {


	var words=[["害怕",162,541],
		["有野心的",452,595],
		["色情的",495,321],
		["愉快的",533,521],
		["氣憤",113,518],
		["焦慮的",87,633],
		["震驚的",493,653],
		["無趣的",197,225],
		["自信的",648,322],
		["鄙視的",133,490],
		["愉悅的",644,505],
		["沮喪的",250,379],
		["失望的",235,420],
		["噁心",223,449],
		["令人懷疑的",100,100],
		["尷尬",300,470],
		["熱情的",529,618],
		["激動的",600,764],
		["愉悅",687,634],
		["可憎的",80,600],
		["有希望的",594,403],
		["沒有耐心的",233,316],
		["嫉妒的",320,680],
		["懷舊的",568,343],
		["驕傲",643,447],
		["放鬆的",700,176],
		["悲傷",169,273],
		["驚訝",652,727],
		["緊張的",115,400],
		["疲勞的",113,67],
		["成功的",668,656],
		["鄭重的",301,87],
		["遲鈍的",241,154],
		["放心的",490,490],
		["安寧的",489,265],
		["入迷的",452,172],
		["中性",400,400]];


	var alreadyTouched=false;
	var touchedCoordinates=[0,0];
	var lastMouseCoordinates=[0,0];
	var scaleXmin=scaleYmin=0;
	var scaleXmax=scaleYmax=800;
	var wordsx = new Array(words.length);
	var wordsy = new Array(words.length);

	var textSizeNormal=15; //MODIFIER ICI
	var textSizeHighlight=20; //MODIFIER ICI
	var textColorChosen="blue";
	var textColorHighlight=0;
	var textColorNormal=70; // 255 correspond à blanc, 0 correspond à noir

	var nearestword=0;


	var bigword=0;
	var is_inside=false;
	var is_otherword=false;
	var is_onotherword=false;
	var circle_diameter=490;

	var current_step=1;
	  var origin_x=300;
	  var origin_y=320;
	var choosenWord="";
	var choosenWord_x=0;
	var choosenWord_y=0;
	var otherWordButtonCoordinates=[[450,527],[540,557]];



 p3.setup = function() {
  p3.createCanvas(600, 600);
  for ( var i=0; i<words.length; i++) {
    wordsx[i] = p3.map( words[i][1], scaleXmin, scaleXmax, origin_x-circle_diameter/2, origin_x+circle_diameter/2);
    wordsy[i] = p3.map( words[i][2], scaleYmin, scaleYmax, origin_y+circle_diameter/2, origin_y-circle_diameter/2);
  }
  resize();

}

 p3.draw = function() {

  p3.background(250);
  is_inside=p3.checkIsInsideCircle();

  p3.drawCircleAndAxes();

  nearestword = is_inside? p3.findNearestWord() : 0 ;
  if(current_step==2) p3.drawWords();
  p3.showTitle();

 if(current_step == 1 && is_inside){
    //fill(255,0,0);
    //ellipse(mouseX, mouseY, 10, 10);
    p3.fill(50,0,150); //couleur curseur
    p3.rectMode(p3.RADIUS);
    p3.rect(origin_x, p3.mouseY, 10, 4);
    p3.rect(p3.mouseX, origin_y, 4, 10);

	 	//pointeur sous le curseur
	 	p3.fill(255,0,116);
	if(!alreadyTouched){
			p3.ellipse(p3.mouseX, p3.mouseY, 20, 20);
	}


  }
  if(alreadyTouched && current_step == 1 /*&& is_inside*/){
    p3.fill(255,0,116);
    p3.ellipse(touchedCoordinates[0], touchedCoordinates[1], 20, 20);
  }

  if(current_step==2){
	  p3.drawOtherWordButton();
	  is_onotherword=p3.checkIsOnOtherWord();

  }
  p3.drawNoEmotionButton();

  lastMouseCoordinates=[p3.mouseX, p3.mouseY];
}

p3.touchStarted = function () {
    clickX = p3.int(p3.map( p3.mouseX, origin_x-circle_diameter/2, origin_x+circle_diameter/2, scaleXmin, scaleXmax));
    clickY = p3.int(p3.map( p3.mouseY, origin_y+circle_diameter/2, origin_y-circle_diameter/2, scaleYmin, scaleYmax));
  is_inside=p3.checkIsInsideCircle();
  if(is_inside){
	    if(current_step == 1 ){
	    //current_step=2;

	    if(!alreadyTouched){
	      alreadyTouched=true;
	    }else{
	      //on est dans le cas d'une pression de confirmation
	      if( p3.dist(p3.mouseX, p3.mouseY,touchedCoordinates[0], touchedCoordinates[1]) < 40 ){
	        current_step=2;
	        thisQuestionResponses.eq(0).val(clickX);
	        thisQuestionResponses.eq(1).val(clickY);
	      }
	    }
	  }
	  else if(current_step == 2 ){
		nearestword = p3.findNearestWord();
	    choosenWord=words[nearestword][0];
	    choosenWord_x=wordsx[nearestword];
	    choosenWord_y=wordsy[nearestword];
	    thisQuestionResponses.eq(2).val(choosenWord);
		is_otherword=false;
		//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
	    //thisQuestion.css("border", "5px solid blue");
	  }

  	  is_onotherword=p3.checkIsOnOtherWord();
	  if(is_onotherword){
		  if( !is_otherword ){
			is_otherword=true;
		  	choosenWord="";
			thisQuestionResponses.eq(2).val("OTHER");
			//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
		  }
	  }
	  touchedCoordinates=[p3.mouseX, p3.mouseY];
	  return false;
	}
	else return true;

}

p3.mousePressed = function () {
  clickX = p3.int(p3.map( p3.mouseX, origin_x-circle_diameter/2, origin_x+circle_diameter/2, scaleXmin, scaleXmax));
  clickY = p3.int(p3.map( p3.mouseY, origin_y+circle_diameter/2, origin_y-circle_diameter/2, scaleYmin, scaleYmax));

  if(current_step == 1 && is_inside){
    // current_step=2;
    // thisQuestionResponses.eq(0).val(clickX);
    // thisQuestionResponses.eq(1).val(clickY);
    if(!alreadyTouched){
      alreadyTouched=true;
    }else{
      //on est dans le cas d'une pression de confirmation
      if( p3.dist(p3.mouseX, p3.mouseY,touchedCoordinates[0], touchedCoordinates[1]) < 40 ){
        current_step=2;
        thisQuestionResponses.eq(0).val(clickX);
        thisQuestionResponses.eq(1).val(clickY);
      }
    }

  }
  else if(current_step == 2 && is_inside){
    //if(choosenWord==""){
      choosenWord=words[nearestword][0];
      choosenWord_x=wordsx[nearestword];
      choosenWord_y=wordsy[nearestword];
	  is_otherword=false;
    //}else{
    //  choosenWord="";
    //}
    thisQuestionResponses.eq(2).val(choosenWord);
	//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
    //thisQuestion.css("border", "5px solid blue");
  }
  touchedCoordinates=[p3.mouseX, p3.mouseY];
  if(is_onotherword){
	  if( !is_otherword ){
		is_otherword=true;
	  	choosenWord="";
		thisQuestionResponses.eq(2).val("OTHER");
		//checkconditions(thisQuestionResponses.eq(2).val(), thisQuestionResponses.eq(2).attr('name'), 'text', 'keyup');
	  }
  }
  if(is_inside){
  	return false;
  }

}

p3.drawCircleAndAxes = function(){

  p3.push(); // Start another new drawing state
  p3.noFill();
  p3.strokeWeight(3);
  p3.stroke(0);
  p3.translate(origin_x, origin_y);
  //ellipse(0, 0, circle_diameter, circle_diameter);
  p3.rectMode(p3.RADIUS);
  p3.rect(0, 0, circle_diameter/2, circle_diameter/2);


	if(current_step == 1){

	    p3.strokeWeight(1);
	    p3.stroke(0,0,130);
	    p3.line(-circle_diameter/2, 0, circle_diameter/2, 0);
	    p3.line(0, -circle_diameter/2, 0, circle_diameter/2);
	    p3.textSize(20);
	    p3.noStroke();


		p3.textAlign(p3.CENTER, p3.CENTER);
		p3.fill(50,0,150); // couleur texte
		p3.text("激動", 0, -circle_diameter/2*1.07);
		p3.text("平靜", 0, circle_diameter/2*1.07);
		p3.rotate(p3.HALF_PI);
		p3.text("愉悅", 0, -circle_diameter/2*1.07);
		p3.rotate(p3.PI);
		p3.text("不愉悅", 0, -circle_diameter/2*1.07);
	}
  p3.pop();

}

p3.checkIsInsideCircle = function (){
	//console.log("Souris : "+p3.mouseX+"-"+p3.mouseY+">"+p3.abs(p3.mouseX - origin_x) +"-"+p3.abs(p3.mouseY - origin_y) );

  if( p3.abs(p3.mouseX - origin_x) > circle_diameter/2 || p3.abs(p3.mouseY - origin_y) > circle_diameter/2 )
    return false
  else return true;
}

p3.checkIsOnOtherWord = function (){

  if( p3.mouseX > otherWordButtonCoordinates[0][0] && p3.mouseX < otherWordButtonCoordinates[1][0] &&
  	  p3.mouseY > otherWordButtonCoordinates[0][1] && p3.mouseY < otherWordButtonCoordinates[1][1] ){

	return true;
  }
  else return false;
}

p3.drawWords = function () {
  var nearestWordX=wordsx[nearestword];
  var nearestWordY=wordsy[nearestword];

  for ( var i=0; i<words.length; i++) {

    var wordTextSize = textSizeNormal;
    var wordTextColor = textColorNormal;
    p3.strokeWeight(0);


    if(choosenWord==""){
      p3.textStyle(p3.NORMAL);

      if( nearestword==i && is_inside) {
        p3.textStyle(p3.BOLD);
        wordTextSize=textSizeHighlight;
        wordTextColor = textColorHighlight;
      }
    }
    else{
      if( words[i][0] == choosenWord){
        p3.textStyle(p3.BOLD);
        wordTextColor=textColorHighlight;
        wordTextSize=textSizeHighlight;
      }
      else{
        p3.textStyle(p3.NORMAL);
        wordTextColor=textColorNormal;
        wordTextSize=textSizeNormal;
      }

    }


    p3.textSize(wordTextSize);
    p3.fill(wordTextColor);
    p3.textAlign(p3.CENTER, p3.CENTER);
    p3.text(words[i][0], wordsx[i], wordsy[i]);


  }
  //on reimprime le mot le plus proche au dessus
  if(choosenWord==""){
    if(is_inside){
      p3.textStyle(p3.BOLD);
      p3.textSize(textSizeHighlight);
      p3.fill(textColorHighlight);
      p3.strokeWeight(1);
      p3.stroke('white');
      p3.text(words[nearestword][0],  nearestWordX, nearestWordY)
    }
  }else if(choosenWord != "中性") {
    p3.textStyle(p3.BOLD);
    p3.textSize(textSizeHighlight);
    p3.fill(textColorChosen);
    p3.strokeWeight(1);
    p3.stroke('white');
    p3.text(choosenWord,  choosenWord_x, choosenWord_y)
  }
  p3.textStyle(p3.NORMAL);
}

p3.findNearestWord = function() {
 // juste pour être certain que ce soit élevé
  nearestdistance=100000000;
  for ( var i=0; i<words.length; i++) {

    var worddist = p3.int(p3.dist(wordsx[i], wordsy[i], p3.mouseX, p3.mouseY));
    if(worddist < nearestdistance){
      nearestword=i;
      nearestdistance=worddist;
    }
  }
  return nearestword;
}

p3.showTitle = function (){
  p3.noStroke();
  p3.textSize(40);
  p3.fill(0);
  if(current_step==1){
    p3.textAlign(p3.CENTER);
    p3.text('他感覺怎麼樣？', p3.width/2, 30);
  }
  else if(current_step==2){
    p3.textAlign(p3.LEFT);

    if(choosenWord=="") {
		p3.text(' 他感到 ...', origin_x - circle_diameter/2, 30);
	}
    else {
		//var tmpword = words[nearestword][0] ;
		p3.text('他感到 '+choosenWord, origin_x - circle_diameter/2, 30);
	}
  }

}

p3.drawOtherWordButton = function (){


    p3.strokeWeight(1);
    p3.stroke('#111111');
    p3.rectMode(p3.CORNERS);
	if(!is_otherword){
		p3.fill('#333333');
	}else{
		p3.fill('#cccccc');
	}

  	p3.rect(otherWordButtonCoordinates[0][0], otherWordButtonCoordinates[0][1], otherWordButtonCoordinates[1][0], otherWordButtonCoordinates[1][1]);

    p3.textSize(20);
    p3.noStroke();
	if(!is_otherword){
		p3.fill('#ffffff');
		p3.textStyle(p3.NORMAL);
	}else{
		p3.fill('blue');
		p3.textStyle(p3.BOLD);
	}


	p3.textAlign(p3.CENTER, p3.CENTER);
	p3.text("其他", (otherWordButtonCoordinates[0][0]+otherWordButtonCoordinates[1][0])/2, (otherWordButtonCoordinates[0][1]+otherWordButtonCoordinates[1][1])/2 );

}

p3.drawNoEmotionButton = function (){


    p3.strokeWeight(1);
    p3.stroke('#111111');

	var tmpdist=p3.dist(touchedCoordinates[0], touchedCoordinates[1], origin_x, origin_y);

    if(alreadyTouched && current_step == 1 && tmpdist<=35){
	    p3.strokeWeight(3);
	    p3.stroke(255,0,116);
    }
	else if (current_step==2 && choosenWord=="中性"){
	    p3.strokeWeight(3);
	    p3.stroke("blue");
	}

    p3.rectMode(p3.RADIUS);
	p3.fill('#cccccc');


  	p3.rect(origin_x, origin_y, 35, 35);

    p3.textSize(20);
    p3.noStroke();


	p3.fill('black');
	p3.textSize(13);
	p3.textAlign(p3.CENTER, p3.CENTER);
	//p3.fill(255); // couleur texte
	p3.text("中性 /", origin_x, origin_y-10 );
	p3.text("中性情緒", origin_x, origin_y +10 );

}
};
