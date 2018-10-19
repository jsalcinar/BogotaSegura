//Inicializar la página en el primer servicio -----------------------------
window.onbeforeunload = function(){ window.scrollTo(0,0); }
var currentSlide = 1;
var distanceToMove = 0;
showConent(1,300);

//funciones de las flechas izquierda y derecha -----------------------------
function scrollWinRight() {
    if(currentSlide==1){
        hideContent(1,"right");
        showConent(2,1800);
        currentSlide = 2;
    }else if(currentSlide==2){
        hideContent(2,"right");
        showConent(3,1800);
        currentSlide = 3;
    }
}

function scrollWinLeft() {
    if(currentSlide==2){
        hideContent(2,"left");
        showConent(1,1800);
        currentSlide = 1;
    }else if(currentSlide==3){
        hideContent(3,"left");
        showConent(2,1800);
        currentSlide = 2;
    }
}

//Mostrar y ocultar contenido -----------------------------
function hideContent(service,moveTo){
    if(moveTo=="right"){
        distanceToMove = 1370;
        console.log(distanceToMove);
    }else{
        distanceToMove = -1370;
    }
    console.log(distanceToMove);
    $(".slidesInfo".concat(service)).fadeOut(800);
    setTimeout(
        function(){
            document.getElementById("service".concat(service)).style.width = "0";
            window.scrollBy({left: distanceToMove, behavior: 'smooth'})
        }
    ,1000);
}

function showConent(service,timeToWait){
    $(".slidesInfo".concat(service)).fadeOut(800);
    setTimeout(function(){
        document.getElementById("service".concat(service)).style.width = "100%";
        setTimeout(function(){
            $(".slidesInfo".concat(service)).fadeIn(800);
        },500);
    },timeToWait);
}