function mycheck() {
    var tag = document.querySelector('.my_optinal');

    if (tag.style.display === "none") {
        tag.style.display = "block";
        tag.classList.add('bubble');



    } else {
        tag.style.display = "none";
        tag.classList.remove('bubble');

    }
}

function mySlider(evt, productgallery) {
    var img = document.querySelectorAll('.product_gallery>img');
    var pr = document.querySelector('.presnt');
    for (var i = 0; i < img.length; i++) {
        img[i].style.display = "none";

    }
    var box = document.getElementsByClassName('i_g_f');
    for (var i = 0; i < box.length; i++) {
        box[i].className = box[i].className.replace(" active", "");
        pr.style.display = "block";
    }
    document.getElementById(productgallery).style.display = "block";
    pr.style.display = "none";
    evt.currentTarget.className += "active";
}