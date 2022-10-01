let button__qiut = document.getElementById('quit');

let playername1 = prompt(`Write name player1`)
let playername2 = prompt(`Write name player2`)


if(playername1 === ''){
	playername1 = 'No name';

} 
if(playername2 === ''){
	playername2 = 'No name';

} 



paleyer__pl1.innerText = playername1;
paleyer__pl2.innerText = playername2;
name__toPoint.innerText = playername1;
name__toPoint2.innerText = playername2;
name__pl2.innerText = playername2;
name__pl1.innerText = playername1;




button__qiut.onclick = function() {
	window.open('https://www.google.com');

}

var myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};



button__rules.onclick = function() {
	rules.classList.remove('rules__animation__close');
	rules.classList.add('rules__animation');

}

ffff.onclick = function() {
	rules.classList.add('rules__animation__close');
}


music__off.onclick = function() {
	line.classList.toggle('line');
	line.classList.toggle('line__off');
}







button__play.onclick = function() {
	wrap.classList.add('display__flex');
	loading.classList.add('display__none');
	rules.classList.add('display__none');
	palayer1.classList.add('display__flex');
	palayer2.classList.add('display__flex');
	target.classList.add('display__flex');
	
}

menu__main.onclick = function() {
	wrap.classList.remove('display__flex');
	loading.classList.remove('display__none');
	palayer1.classList.remove('display__flex');
	palayer2.classList.remove('display__flex');
	target.classList.remove('display__flex');
	rules.classList.remove('display__none');
	rules.classList.remove('rules__animation__close');
	rules.classList.remove('rules__animation');
}



let topPos = 50;
let LeftPos = 50;

let topPos2 = 50;
let LeftPos2 = 50;


document.body.onkeyup = function (e) {


	  if(topPos > 98){
		topPos = 17 ;
}else if(LeftPos > 98){
	LeftPos = 2;
} else if(LeftPos == -2 ){
	LeftPos = 98;
}else if(topPos == 17 ){
	topPos = 98;
}

if(topPos2 > 98){
	topPos2 = 17 ;
}else if(LeftPos2 > 98){
LeftPos2 = 2;
} else if(LeftPos2 == -2 ){
LeftPos2 = 98;
}else if(topPos2 == 17 ){
topPos2 = 98;
}


    if (e.keyCode == 38) {
        topPos--;
        palayer1.style.top = topPos + '%';
				checkWinner();
    }else if (e.keyCode == 40) {
			topPos++;
			palayer1.style.top = topPos + '%';
			checkWinner();

	}else if (e.keyCode == 39) {
		LeftPos++;
		palayer1.style.left = LeftPos + '%';
		checkWinner();

   }else if (e.keyCode == 37) {
			LeftPos--;
	palayer1.style.left = LeftPos + '%';
	checkWinner();

  }
		if (e.keyCode == 87) {

			topPos2--;
			palayer2.style.top = topPos2 + '%';
			checkWinner();
	}else if (e.keyCode == 83) {
		topPos2++;
		palayer2.style.top = topPos2 + '%';
		checkWinner();

	}else if (e.keyCode == 68) {
	LeftPos2++;
	palayer2.style.left = LeftPos2 + '%';
	checkWinner();

	}else if (e.keyCode == 65) {
		LeftPos2--;
		palayer2.style.left = LeftPos2 + '%';
	checkWinner();

}




}












let targetTop = 50;
let targetLeft = 50;

function setTarget () {
	targetTop = Math.floor(Math.random() * 95);
	targetLeft = Math.floor(Math.random() * 95);
	target.style.top = targetTop + "%";
	target.style.left = targetLeft + "%";
	if(targetTop < 20){
		setTarget();
	}
	if(targetLeft < 1){
		setTarget();
	}
}
setTarget();

let i = 0;
let a = 0;
function checkWinner() {
	if(topPos == targetTop && LeftPos == targetLeft){
		i++;
		paleyernumber__pl1.innerText = i;
		console.log(i)
		setTarget();
		check20point();

	}else if(topPos2 == targetTop && LeftPos2 == targetLeft){
		a++;
		paleyernumber__pl2.innerText = a;
		setTarget();
		check20point();

	}

} 

function check20point() {
	if( a === 5){
		winner__menu.classList.add('display__flex');
		pointplayer2.innerText = a;
		pointplayer1.innerText = i;
		winner__name.innerText = playername2;





		
	} else if(i === 5){
		winner__menu.classList.add('display__flex');	
		pointplayer1.innerText = i;
		pointplayer2.innerText = a;
		winner__name.innerText = playername1;

	}

} 








restart.onclick = function() {
	winner__menu.classList.remove('display__flex');
	pointplayer2.innerText = 0;
	pointplayer1.innerText = 0;
	paleyernumber__pl2.innerText = 0;
	paleyernumber__pl1.innerText = 0;
	i = 0;
	a = 0;
}


setiings__main.onclick = function() {
	settings__menu.classList.add('display__flex');

}
settings__close.onclick = function() {
	settings__menu.classList.remove('display__flex');

}


qq = function() {
	bg1.classList.remove('bg__color');
	bg2.classList.remove('bg__color');
	bg3.classList.remove('bg__color');
	bg4.classList.remove('bg__color');
	bg5.classList.remove('bg__color');
	bg6.classList.remove('bg__color');
	wrap.classList.remove('bg__wrpa1');
	wrap.classList.remove('bg__wrpa2');
	wrap.classList.remove('bg__wrpa3');
	wrap.classList.remove('bg__wrpa4');
	wrap.classList.remove('bg__wrpa5');
	wrap.classList.remove('bg__wrpa6');
}




bg__image.onclick = function() {
	qq();
	wrap.classList.add('bg__wrpa1');
	bg1.classList.add('bg__color');
}

bg__image2.onclick = function() {
	qq();

	wrap.classList.add('bg__wrpa2');
	bg2.classList.add('bg__color');
}

bg__image3.onclick = function() {
	qq();

	wrap.classList.add('bg__wrpa3');
	bg3.classList.add('bg__color');
}
bg__image4.onclick = function() {
	qq();
	wrap.classList.add('bg__wrpa4');
	bg4.classList.add('bg__color');

}

bg__image5.onclick = function() {
	qq();
	wrap.classList.add('bg__wrpa5');
	bg5.classList.add('bg__color');

}


bg__image6.onclick = function() {
	qq();
	wrap.classList.add('bg__wrpa6');
	bg6.classList.add('bg__color');

}


bb = function() {
	bg1__pl1.classList.remove('bg__color');
	bg2__pl1.classList.remove('bg__color');
	bg3__pl1.classList.remove('bg__color');
	palayer1.classList.remove('bg__1pl1');
	palayer1.classList.remove('bg__2pl1');
	palayer1.classList.remove('bg__3pl1');
}

bg__image__pl.onclick = function() {
	bb();
	palayer1.classList.add('bg__1pl1');
	bg1__pl1.classList.add('bg__color');


}

bg__image3__pl.onclick = function() {
	bb();
	palayer1.classList.add('bg__2pl1');
	bg2__pl1.classList.add('bg__color');


}

bg__image5__pl.onclick = function() {
	bb();
	palayer1.classList.add('bg__3pl1');
	bg3__pl1.classList.add('bg__color');


}

bg__image2__pl.onclick = function() {
	palayer2.classList.add('bg__1pl2');
	bg1__pl2.classList.add('bg__color');
	bg2__pl2.classList.remove('bg__color');
	palayer2.classList.remove('bg__3pl2');
	bg3__pl2__pl.classList.remove('bg__color');
	palayer2.classList.remove('bg__2pl2');



}
bg__image4__pl.onclick = function() {
	palayer2.classList.add('bg__2pl2');
	bg2__pl2.classList.add('bg__color');
	palayer2.classList.remove('bg__3pl2');
	bg3__pl2__pl.classList.remove('bg__color');
	bg1__pl2.classList.remove('bg__color');
	palayer2.classList.remove('bg__1pl2');


}
bg__image6__pl.onclick = function() {
	palayer2.classList.add('bg__3pl2');
	bg3__pl2__pl.classList.add('bg__color');
	bg1__pl2.classList.remove('bg__color');
	palayer2.classList.remove('bg__1pl2');
	bg2__pl2.classList.remove('bg__color');
	palayer2.classList.remove('bg__2pl2');

}
