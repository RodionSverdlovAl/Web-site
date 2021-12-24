let artistJS = document.getElementById("slider");
let artists = [];
class slide {
    constructor(sourselink){
        this.slide_div = document.createElement('div');
        this.slide_div.className = "slide";
        this.sourselink = sourselink;
        this.slide_div.innerHTML =
        `<img src="${sourselink}" alt="image">`;
    }
}

artists[0] = new slide('../assets/image/artist1.png'); artistJS.append(artists[0].slide_div);
artists[1] = new slide('../assets/image/artist2.jpg'); artistJS.append(artists[1].slide_div);
artists[2] = new slide('../assets/image/artist3.jpg'); artistJS.append(artists[2].slide_div);
artists[3] = new slide('../assets/image/artist4.jpg'); artistJS.append(artists[3].slide_div);
artists[4] = new slide('../assets/image/artist5.jpg'); artistJS.append(artists[4].slide_div);
artists[0].slide_div.style.display = "block";
let number_slide = 0;

function change(n){
   
    showSlides(number_slide+=n)
}

function showSlides(n){
    let i;
    if(n>artists.length){
        number_slide = 1;
    }
    if(n<1){
        number_slide = artists.length;
    }
    
    for(i=0; i<artists.length; i++){
        artists[i].slide_div.style.display = "none";
    }
    artists[number_slide-1].slide_div.style.display = "block";
}