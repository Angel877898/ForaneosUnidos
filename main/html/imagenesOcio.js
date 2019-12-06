var images=['../imgs/antea.jpg','../imgs/TeatroCarcajada.jpg','../imgs/solyluna.jpg'],
    cont=0;

function carrusel(imagenes){
    imagenes.addEventListener('click',e=>{
        let atras=imagenes.querySelector('.atras'),
            adelante=imagenes.querySelector('.adelante'),
            img=imagenes.querySelector('img'),
            tgt=e.target;

        if(tgt==atras){
            if(cont>0){
                img.src=images[cont-1];
                cont--;
            }else{
                img.src=images[images.length-1];
                cont=images.length-1;
            }
        }else if(tgt==adelante){
            if(cont<images.length-1){
                img.src=images[cont+1];
                cont++;
            }else{
                img.src=images[0];
                cont=0;
            }
        }
    })
}
document.addEventListener("DOMContentLoaded",()=>{
    let imagenes=document.querySelector('.imagenes');
    carrusel(imagenes)
})