import galeria from '../../helpers/galeria';
export default function Galeria(){
    return(

        <section className="galeria">
            <div className="cabecera">
                <div className="contenedor">
                
            <div className="texto">
                <h3>¿Quiénes somos?</h3>
                <p>es una agencia de viajes con mas de 14 años de trayectoria en el mercado, caracterizada por el buen servicio y oferta de productos turísticos de calidad en destinos nacionales e internacionales, trabajando con un equipo de más de 60 personas comprometido con cumplir los sueños de viaje de nuestros clientes. <br/>
                Coordinamos todos los servicios de un paquete turístico, como tiquetes aéreos, alojamiento, alimentación, traslados, tours, asistencias médicas, alquiler de autos, cruceros. entre otros. <br/>
                Igualmente gestionamos todos los servicios de viajes corporativos, convenciones, viajes de incentivos y eventos.</p>
            </div>
        
                    <h3>Galería</h3>
                </div>
            </div>
            <div className="imagenes"></div>
            {galeria.map[(imagen, index)=>(
                <div style={{background: `url('${imagen}')`}} key= {index}></div>
            )]}
        </section>
    )
}