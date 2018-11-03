var currentSlide;
var distanceToMove;

function services_init(){
    window.onbeforeunload = function(){ window.scrollTo(0,0); }
    currentSlide = 1;
    distanceToMove = 0;
    showContent(1,300);
}

//Inicializar la página en el primer servicio -----------------------------


//funciones de las flechas izquierda y derecha -----------------------------
function scrollWinRight() {
    if(currentSlide==1){
        hideContent(1,"right");
        showContent(2,900);
        currentSlide = 2;
    }else if(currentSlide==2){
        hideContent(2,"right");
        showContent(3,900);
        currentSlide = 3;
    }
}

function scrollWinLeft() {
    if(currentSlide==2){
        hideContent(2,"left");
        showContent(1,900);
        currentSlide = 1;
    }else if(currentSlide==3){
        hideContent(3,"left");
        showContent(2,900);
        currentSlide = 2;
    }
}

//Mostrar y ocultar contenido -----------------------------
function hideContent(service,moveTo){
    if(moveTo=="right"){
        distanceToMove = 1370;
    }else{
        distanceToMove = -1370;
    }
    $(".slidesInfo".concat(service)).fadeOut(400);
    setTimeout(
        function(){
            document.getElementById("service".concat(service)).style.width = "0";
            window.scrollBy({left: distanceToMove, behavior: 'smooth'})
        }
    ,250);
}

function showContent(service,timeToWait){
    $(".slidesInfo".concat(service)).fadeOut(400);
    setTimeout(function(){
        document.getElementById("service".concat(service)).style.width = "100%";
        setTimeout(function(){
            $(".slidesInfo".concat(service)).fadeIn(400);
        },250);
    },timeToWait);
}