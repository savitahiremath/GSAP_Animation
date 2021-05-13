const flightPath = {

    curviness: 1,
    autoRotate: true,
    values: [{ x: 100, y: -20 },
             { x: 300, y: 10  },
             { x: 500, y: 100  },
             { x: 750, y: -100  },
             { x: 350, y: -50  },
             {  x:600, y: 100  },
             {  x:800, y: 0  },
             {  x:window.innerWidth, y: -250  }

            ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);  

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
triggerElement: ".animation",
duration: 2000,
triggerHook: 0

})
.setTween(tween)
.addIndicators()
.setPin(".animation")
.addTo(controller);

const text = document.querySelector(".text-animation");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){

    const span = text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length){
        Complete();
        return;
    }
}

function Complete(){
    clearInterval(timer);
    timer = null;
}
