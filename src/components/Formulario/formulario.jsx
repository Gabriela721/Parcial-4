export default function Formulario(){
    return(
        <section className= "contacto">
            <div className="formulario">
                <form>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre de usuario</label>
                        <input type="text" id= "nombre" placeholder="usuario" />
                    </div>
                    <div className="campo">
                        <label htmlFor="nombre">Correo electrónico</label>
                        <input type="email" id= "nombre" placeholder="ejemplo@correo.com" />
                    </div>
                    <div className="campo">
                        <label htmlFor="nombre">Contraseña</label>
                        <input type="text" id= "nombre" placeholder="xxxxxxxx" />
                    </div>
                    <div className="botonera">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>

            </div>
        </section>
    )
}