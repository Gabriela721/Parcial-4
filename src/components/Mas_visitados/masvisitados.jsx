export default function Mas_visitados(){
    return(
        <section className= "masvisitados">
            <div className="contenedor">
            <div className="titulo">
                <h2>Lugares más visitados</h2>    
            </div>
            <div className="lugares">
                <div className= "peru">
                    <h3>Machu Pichu, Perú</h3> <br/>
                    <p>Los turistas cada vez se interesan más por América del Sur, ya que buscan lugares menos conocidos en el mundo. Machu Picchu es uno de los iconos más reconocidos del continente y las cifras de turismo lo reflejan.<br/>
                    Este santuario histórico construido durante la primera mitad del siglo XV, es parada obligatoria para quienes decidan conocer Perú.</p>
                </div>
                <div className= "imagen1">
                    <img src="img/machu.jpg" alt="" className= "lugar1" />
                </div>
                <div className="roca">
                    <h3>Stonehenge, Reino Unido</h3> <br/>
                    <p>Este conjunto de monumentos históricos de piedra data de 2000 a 3000 a.C. Es un punto de referencia icónico y uno de los símbolos y atraccciones turísticas más conocidas del Reino Unido. <br/>
                    Desde que Stonehenge se agregó a la lista del Patrimonio Mundial de la UNESCO en 1982, los visitantes anuales se han disparado a 1.3 millones de turistas por año. ¿Te gustaría visitar este atractivo turístico? </p>
                </div>
                <div className="imagen2">
                    <img src="img/rocas.jpg" alt="" className="lugar2" />
                </div>
                <div className="torre">
                    <h3>Torre Eiffel, Francia</h3> <br/>
                    <p>Situada en el corazón de París, la ciudad más romántica del mundo, la Torre Eiffel se ha convertido en un símbolo universal de los viajes. Una visita a la Torre Eiffel encabeza muchas listas de categorías, algo no sorprendente teniendo en cuenta que unos 7 millones de visitantes al año se toman fotografías bajo el edificio de 81 pisos.</p>
                </div>
                <div className="imagen3">
                    <img src="img/torre.jpg" alt="" className="lugar3" />
                </div>

            </div>
            </div>
        </section>
        
    )
}