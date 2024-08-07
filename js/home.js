const sliderTable = [
    {
        textHead: "",
        textContent: "Rejestracja w kilka kliknięć. \n Po rozmowie online, decydujesz kiedy \n idziesz do pracy.",
        photo: "telefonbg.png"
    },
    {
        textHead: "",
        textContent: "Dostęp do ofert pracy 24/7, które nie czekają. \n Kto pierwszy ten zarabia.",
        photo: "telefonbg.png"
    },
    {
        textHead: "",
        textContent: "Wszystkie formalności realizowane drogą online, \n wynagrodzenie co dwa tygodnie.",
        photo: "telefonbg.png"
    }
]

let SLIDER_INDEX = 0;

//EVENT

document.getElementsByClassName('c')[0]
    .addEventListener('click', function (event) {
        console.log("1")
        changeSlideTo(0);
    });
document.getElementsByClassName('c')[1]
    .addEventListener('click', function (event) {
        console.log("2")
        changeSlideTo(1);
    });
document.getElementsByClassName('c')[2]
    .addEventListener('click', function (event) {
        console.log("3")
        changeSlideTo(2);
    });
    document.getElementsByClassName('c')[3]
    .addEventListener('click', function (event) {
        console.log("1")
        changeSlideTo(0);
    });
document.getElementsByClassName('c')[4]
    .addEventListener('click', function (event) {
        console.log("2")
        changeSlideTo(1);
    });
document.getElementsByClassName('c')[5]
    .addEventListener('click', function (event) {
        console.log("3")
        changeSlideTo(2);
    });
//

//SLIDES MODULE

const changeSlideTo = (index) => {
    console.log("ss")
    switch(index){
        case 0:{
            document.getElementById('slideTextContent').innerText = sliderTable[0].textContent;
            document.getElementById('slideImage').src="assets/"+sliderTable[0].photo;
            document.getElementsByClassName('c')[0].style.backgroundColor = "#FF4221";
            document.getElementsByClassName('c')[1].style.backgroundColor = "#D9D2FA";
            document.getElementsByClassName('c')[2].style.backgroundColor = "#D9D2FA";

            document.getElementById('slideTextContentM').innerText = sliderTable[0].textContent;
            document.getElementById('slideImageM').src="assets/"+sliderTable[0].photo;
            document.getElementsByClassName('c')[3].style.backgroundColor = "#FF4221";
            document.getElementsByClassName('c')[4].style.backgroundColor = "#D9D2FA";
            document.getElementsByClassName('c')[5].style.backgroundColor = "#D9D2FA";
        } break;
        case 1:{
            document.getElementById('slideTextContent').innerText = sliderTable[1].textContent;
            document.getElementById('slideImage').src="assets/"+sliderTable[1].photo;
            document.getElementsByClassName('c')[1].style.backgroundColor = "#FF4221";
            document.getElementsByClassName('c')[0].style.backgroundColor = "#D9D2FA";
            document.getElementsByClassName('c')[2].style.backgroundColor = "#D9D2FA";

            document.getElementById('slideTextContentM').innerText = sliderTable[1].textContent;
            document.getElementById('slideImageM').src="assets/"+sliderTable[1].photo;
            document.getElementsByClassName('c')[4].style.backgroundColor = "#FF4221";
            document.getElementsByClassName('c')[3].style.backgroundColor = "#D9D2FA";
            document.getElementsByClassName('c')[5].style.backgroundColor = "#D9D2FA";
        } break;
        case 2:{
            document.getElementById('slideTextContent').innerText = sliderTable[2].textContent;
            document.getElementById('slideImage').src="assets/"+sliderTable[2].photo;
            document.getElementsByClassName('c')[2].style.backgroundColor = "#FF4221";
            document.getElementsByClassName('c')[1].style.backgroundColor = "#D9D2FA";
            document.getElementsByClassName('c')[0].style.backgroundColor = "#D9D2FA";

            document.getElementById('slideTextContentM').innerText = sliderTable[2].textContent;
            document.getElementById('slideImageM').src="assets/"+sliderTable[2].photo;
            document.getElementsByClassName('c')[5].style.backgroundColor = "#FF4221";
            document.getElementsByClassName('c')[4].style.backgroundColor = "#D9D2FA";
            document.getElementsByClassName('c')[3].style.backgroundColor = "#D9D2FA";
        } break;

        default: {
            console.log("chuj")
        };
    }
}

//



// START ACTION
    changeSlideTo(SLIDER_INDEX);
//


//SWIPE EVENT

const touchableElement = document.getElementById("swipeArea");

touchableElement.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);


touchableElement.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

const touchableElementMobile = document.getElementById("swipeAreaMob");

touchableElementMobile.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);


touchableElementMobile.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);



function handleGesture() {
    if (touchendX < touchstartX) {
        if(SLIDER_INDEX == 2){
            SLIDER_INDEX = 0;
            changeSlideTo(0);
        }else{
            SLIDER_INDEX = SLIDER_INDEX+1;
            changeSlideTo(SLIDER_INDEX);
        }
    }

    if (touchendX > touchstartX) {
        if(SLIDER_INDEX == 0){
            SLIDER_INDEX = 2;
            changeSlideTo(2);
        }else{
            SLIDER_INDEX = SLIDER_INDEX-1;
            changeSlideTo(SLIDER_INDEX);
        }
    }

    if (touchendY < touchstartY) {
        //console.log('Swiped Up');
    }

    if (touchendY > touchstartY) {
        //console.log('Swiped Down');
    }

    if (touchendY === touchstartY) {
        //console.log('Tap');
    }
}

setInterval(()=>{
    if(SLIDER_INDEX == 2){
        SLIDER_INDEX = 0;
        changeSlideTo(0);
    }else{
        SLIDER_INDEX = SLIDER_INDEX+1;
        changeSlideTo(SLIDER_INDEX);
    }
}, 5000)

//