function getCarouselCardHtml(imgPath,caption,active=false){
    let result =""
    if (active){
        result = '<div class="carousel-item active">'
    }
    else{
        result = '<div class="carousel-item">'
    }
    result +='<img src="'+imgPath+'"  class="d-block w-100">'
    result += '<div class="carousel-caption d-none d-md-block">\n' +
        '                            <h5>' + caption + '</h5>\n' +
        '                        </div>'
    result += "</div>"
    return result
}

function createIndicators(count,id){
    let innerHtml = '<ol class="carousel-indicators">'
    for (var i = 0; i < count; i++){
        if (i == 0){
            innerHtml += '<li data-target="#' + id + '" data-slide-to="0" class="active"></li>'
        }
        else{
            innerHtml += '<li data-target="#' + id + '" data-slide-to="' + i.toString() + '"></li>'
        }
    }

    innerHtml +="</ol>"
    return innerHtml
}

function createCarouselCards(cards) {
    let innerHtml = '';
    for (let i = 0; i < cards.length; i++) {
        innerHtml += getCarouselCardHtml(cards[i].imgPath, cards[i].caption, i === 0);
    }
    return innerHtml;
}

function populateCarousel() {
    const carouselInnerId = $("#carouselInnerId");
    const cards = [
        { imgPath: 'images/cats/DOD_cat.JPG', caption: 'General Nips' },
        { imgPath: 'images/cats/DOA_cat.JPG', caption: 'FarmLord Bitch' },
        { imgPath: 'images/cats/DOJ_cat.JPG', caption: 'Judge Snyder' },
        { imgPath: 'images/cats/Designer.png', caption: 'President Cat' },
        { imgPath: 'images/cats/Designer (1).png', caption: 'President Cat' }
    ];
    carouselInnerId.append(createIndicators(cards.length, "carouselInnerId"));
    carouselInnerId.append(createCarouselCards(cards));
    console.log("Kittens");
}



function enableAudioSlider(){
    // Get the audio element
    var audio = document.getElementById("bgMusic");

    // Get the new button element
    var newButton = document.getElementById("newButton");

    // Add click event listener to new button to toggle mute state
    newButton.addEventListener("click", function() {
        audio.muted = !audio.muted; // Toggle mute state
        if(audio.muted) {
            newButton.innerHTML = '&#128263;'; // Megaphone symbol with cancel symbol
        } else {
            newButton.innerHTML = '&#128264;'; // Only megaphone symbol
        }
    });

    // Get the slider container
    var sliderContainer = document.querySelector('.slider-container');

    // Get the slider input element
    var sliderInput = document.querySelector('.slider-input');

    // Add input event listener to slider to adjust volume
    sliderInput.addEventListener("input", function() {
        audio.volume = sliderInput.value / 100; // Set audio volume based on slider value
    });

    // Add event listeners to show/hide slider
    sliderContainer.addEventListener('mouseenter', function() {
        slider.style.display = 'block';
    });

    sliderContainer.addEventListener('mouseleave', function() {
        slider.style.display = 'none';
    });
}

populateCarousel()
enableAudioSlider()