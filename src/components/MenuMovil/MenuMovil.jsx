import './menuMovil.scss';

export default function MenuMovil(){
    return(
        <>
        <nav className= "menu menuMovil">
            <div className= "contenedor">
                <div className="btn">
                    <i class="fas fa-bars"></i>
                </div>
                <img src="img/logo.png" alt="" className= "logoMovil" />
            </div>

        </nav>
        <div> className= "enlacesMoviles"
            <a href=""> Iniciar secion</a>
            <a href="">Registrate</a>
        </div>
            
        </>
        
    )
}