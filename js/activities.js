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
        { imgPath: 'images/cats/DOD_cat.JPG', caption: 'General Nips of DOD' },
        { imgPath: 'images/cats/DOA_cat.JPG', caption: 'Farmer Boots of DOA' },
        { imgPath: 'images/cats/DOJ_cat.JPG', caption: 'Judge Snyder of DOJ' },
        { imgPath: 'images/cats/DOE_cat.JPG', caption: 'Professor Kits of DOE' },
        { imgPath: 'images/cats/DHS_cat.JPG', caption: 'Director Minnie of DHS' },
        { imgPath: 'images/cats/VP_dog.JPG', caption: 'Vice President Chewy' },
        { imgPath: 'images/cats/Designer.png', caption: 'Presidential Candidate Cotus' }
    ];
    carouselInnerId.append(createIndicators(cards.length, "carouselInnerId"));
    carouselInnerId.append(createCarouselCards(cards));


    console.log("Kittens");
}

function getAddress(){
    // Add copy-to-clipboard icon and cursor style change on hover
    const contractAddressSpan = $('.address span');
    const copyAddressText = $('.address p');
    
    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    // Add click event listeners to copy the address to clipboard
    contractAddressSpan.click(function() {
        copyToClipboard($(this).text());
        
        // Provide visual feedback to the user
        $(this).text("Copied!");
        setTimeout(() => {
            $(this).text("ECzqjyD5fyoimdpJSLNbCuJPS1pUWpZaxUgqPSNLfq8f"); // Restore the original address after 1 second
        }, 1000);
    });

    copyAddressText.click(function() {
        const addressText = $(this).next().text(); // Get the text of the following span (contract address)
        copyToClipboard(addressText);
        
        // Provide visual feedback to the user
        $(this).text("Copied!");
        setTimeout(() => {
            $(this).text("Contract Address 📋"); // Restore the original text after 1 second
        }, 1000);
    });

    // Change cursor style of contract address span
    contractAddressSpan.css('cursor', 'pointer');
    copyAddressText.css('cursor', 'pointer');
}






function enableAudioSlider(){
    // Get the audio element
    var audio = document.getElementById("bgMusic");
    
    // Mute the audio by default
    audio.muted = true;
    

    // Get the new button element
    var newButton = document.getElementById("newButton");
    newButton.innerHTML = '&#128263;'; // Megaphone symbol with cancel symbol

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
getAddress()
