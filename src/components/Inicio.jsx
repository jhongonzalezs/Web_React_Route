import React from 'react';
import Card from './Card';
import '../assets/css/CardInicio.css'; 

function Inicio() {
    return (
        <React.Fragment>
            <div className='card-row'>
                <Card autor="Viaje al centro de la tierra" imagen={"https://grupoalmuzara.com/libro/9788411310697_portada.jpg"} descripcion="Publicada en 1864, Viaje al centro de la Tierra fue la segunda de las grandes novelas de aventuras que darían fama universal al escritor francés. Relata la expedición del profesor Lidenbrock, su sobrino Axel y un guía llamado Hans, hacia el mismísimo centro del planeta." />
                <Card autor="Moby Dick" imagen={"https://images.cdn2.buscalibre.com/fit-in/360x360/1d/e6/1de6be553561d83d272563c2f2a06109.jpg"} descripcion="Narra la travesía del barco ballenero Pequod, comandado por el capitán Ahab, junto a Ismael y el arponero Queequeg en la obsesiva y autodestructiva persecución de un gran cachalote blanco" />
                <Card autor="La ladrona de libros" imagen={"https://www.libreriacasatomada.com/imagenes/9788426/978842641621.GIF"} descripcion="La historia de una niña que sobrevive al nazismo y a la guerra leyendo; Quien se convierte en una reconocida escritora en su adultez. Es una historia de transformación en la que, la protagonista logra reparar su herida." />
                <Card autor="Las 48 leyes del poder" imagen={"https://upload.wikimedia.org/wikipedia/commons/a/af/Las_48_Leyes_del_Poder_cover.svg"} descripcion="Habla en nombre de Greene a adultos, niños, todos los estudiantes, emprendedores, trabajadores y buscadores de poder para cambiar su mentalidad y percepción que los llevará a una forma de pensar más amplia generando felicidad y habilidad." />
            </div>   
        </React.Fragment>
    )
}

export default Inicio;
