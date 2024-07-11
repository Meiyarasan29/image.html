const imageSources =['1.jpg','2.jpg','4.jpg','7.jpg','11.jpg','ele 3.jpg','ele 6.png'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);