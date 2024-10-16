document.querySelectorAll('.video-conteiner video').forEach(vid =>{
    vid.onclick = () =>{
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popp-video video').src = vid.getAttribute('src');
    }
});
document.querySelector(',popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';
}