// top fixed
function stickymenu() {
    var sticky = document.querySelector("#sticky");
    if (window.pageYOffset > 10) {
        sticky.classList.add("sticky");
        // sticky.classList.remove("menu-ul");
    }
    else {
        sticky.classList.remove("sticky");
    }
}
window.onscroll = function () {
    stickymenu();
}


// slide image animation
// let background = document.querySelector(".top-background");
// let backgroundimg = document.createElement("img");
// backgroundimg.setAttribute("src","");
// backgroundimg.style.cssText = "width: 100%; height: 100%; position:absolute; top:0; bottom:0; z-index:-1;"

// background.appendChild(backgroundimg)


// let images = new Array (
//     "images/mock-up-living-room-interior-with-armchair-empty-dark-blue-wall-wall-background-3d-rendering.jpg",
//     "images/jonathan-borba-6sDuV840wxs-unsplash.jpg",
//     "images/mock-up-living-room-interior-with-armchair-empty-dark-blue-wall-wall-background-3d-rendering.jpg",
//     "images/jonathan-borba-6sDuV840wxs-unsplash.jpg",
//     "images/movie\ image.jpg",
//     "images/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering.jpg"
// );

// var len = images.length;
// var i = 0;

// function slider (){
//     if(i > len-1){
//         i=0;
//     }
//     backgroundimg.src =images[i];
//     i++;
//     setTimeout("slider()", 3000);
// }