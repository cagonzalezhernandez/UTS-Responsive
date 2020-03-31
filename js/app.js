var imagenes = ['images/uts.jpg','images/laboratorio.jpg','images/aulamagistral.jpg'],
contador = 0;

function slider( contenedor ) {

    contenedor.addEventListener('click', e=>{
        console.log('SI ENTRA A LA FUNCION');	
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt=e.target;
    
        if (tgt==atras) {
            if (contador>0) {
            img.src = imagenes[contador - 1];
            contador--;
        }else{
            img.src = imagenes[imagenes.length - 1];
            contador = imagenes.length - 1;
            }
        }else if(tgt==adelante){
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1];
                contador++;
            }else{
                img.src = imagenes[0];
                contador=0;
            }
        } } 
    );
}

document.addEventListener("DOMContentLoaded",() =>{
    console.log('SI CARGA FUNCION 2');
    let contenedor = document.querySelector('.contenedor');

    slider(contenedor);
});