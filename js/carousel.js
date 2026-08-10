

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(imagem, titulo, url){
        this.imagem = imagem;
        this.titulo = titulo;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
               // Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let veiculo = carouselArr[Carousel._sequence];

        let imagem_veiculo = document.getElementById("carousel");
        imagem_veiculo.innerHTML = `<img src="${veiculo.imagem}" alt="${veiculo.titulo}">`;

        let titulo_veiculo = document.getElementById("carousel-title");
        titulo_veiculo.innerHTML = `<a href="${veiculo.url}"><p>${veiculo.titulo}</p></a>`;

        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static veiculo1(){
        Carousel._sequence = 0;
        Carousel.Next();
    }

    static veiculo2(){
        Carousel._sequence = 1;
        Carousel.Next();
    }

    static veiculo3(){
        Carousel._sequence = 2;
        Carousel.Next();
    }

};

function veiculo1(){
    Carousel.veiculo1();
}

function veiculo2(){
    Carousel.veiculo2();
}

function veiculo3(){
    Carousel.veiculo3();
}


