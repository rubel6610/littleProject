
 const gallery = document.querySelector('.gallery')
function openimg(imgElement){
    const imgbox = document.querySelector('#imgbox');
    const boxImg = document.querySelector('#boxImg');
   

    boxImg.src = imgElement.src;
    imgbox.style.display = "flex";
     gallery.style.opacity = 0.6;
}

function closeimgbox(){
    imgbox.style.display = 'none';
   let  closeBtn = document.querySelector('.close');
   gallery.style.opacity = 1;
    
}