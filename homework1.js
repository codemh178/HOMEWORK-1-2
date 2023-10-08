
// J QUERY CND
// --------------------SCROLL----------------------
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
                $('header').addClass('sticky');
        }
        else {
                $('header').removeClass('sticky');
        }
    })
});

//-----------------------TEST-------------------------
// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
//   }

// function fullView(imgLink) {
//     document.getElementById("full-img").src = imgLink;
//     document.getElementById("full-img-view").style.display = "block";
// }

// function closeFullView() {
//     document.getElementById("full-img-view").style.display = "none"
// }

//--------------SHOW IMAGE ON FULL SCREEN WHEN CLICK--------------
document.querySelectorAll('.gallery img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.getElementById("caption").innerHTML = image.alt;
    }
})

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

//-------------SHOW MENU ON SMALL SCREEN---------------
let x = 0;
function toggleFunction() {
    x ++;
    if (x==1) {
    document.querySelector('#main-menu-small').style.display = "block";
    }
    else {
        x = 0;
        document.querySelector('#main-menu-small').style.display = "none";
    }
    document.getElementById("test").innerHTML = x;
}

function hideMenu() {
    document.querySelector('#main-menu-small').style.display = "none";
    x = 0;
}