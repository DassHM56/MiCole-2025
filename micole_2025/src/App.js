import './App.css';



function App() {
  return (
    <div className="App">
      
      <div className="cabecera-seccion">
        <a href="#" className="logo-container">
          <h1>Mi Cole</h1>
          <i className="fas fa-user-graduate logo-icon"></i>
        </a>
        <nav className="cabecera-navegacion">
          <ul>
            <li><a href="#">Colegios</a></li>
            <li><a href="#">Información</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Servicios</a></li>
          </ul>
        </nav>
      </div>

     
      <header className="contenido-seccion">
        <div className="contenido-imagen"></div>
        <div className="contenido-overlay"></div>
        <div className="contenido-tarjeta">
          <h1>Mi colegio, yo elijo la calidad de estudio</h1>
          <p>micolePeru@gmail.com</p>
        </div>
      </header>

      <main>
        {/* 3. Sección "Academias de Perú" */}
        <section className="seccion-academias">
          <h2>Las mejores academias de Perú</h2>
          <div className="tarjetas-1">
            <div className="tarjeta-2">
              <div className="imagen-leccion-placeholder">
                
              </div>
              <h3>Academia de Inglés</h3>
              <p>Aprende inglés con los mejores profesores de Perú, gramatica, vocabulario, conversacion, etc</p>
            </div>
            <div className="tarjeta-2">
              <div className="imagen-leccion-placeholder lesson__matematica"></div>
              <h3>Aprende Matemática</h3>
              <p>Aprende matemática con los mejores profesores de Perú razonamiento matematico, aritmetica, algebra, geometria, trigonometria, calculo, etc</p>
            </div>
            <div className="tarjeta-2">
              <div className="imagen-leccion-placeholder lesson__RendimientoAcademico"></div>
              <h3>Rendimiento Académico</h3>
              <p>Mejor en los cursos que no sientes que no aprendes, aqui tienes la solucion aqui te mostraremos la forma de mejorar tu rendimiento academico</p>
            </div>
          </div>
          <button className="read-more-btn">MAS INFORMACIÓN</button>
        </section>

        {/* 4. Sección "Science Experiment" */}
        <section className="info-micole">
          <div className="info-text">
            <h3>Mi Cole buscamos por ti la mejor calidad de estudio</h3>
            <p>En mi colegio buscamos por ti la mejor calidad de estudio, para que puedas tener un mejor rendimiento academico, y asi poder tener un futuro mas brillante dando la informacion de los mejores colegios de Perú</p>
            <button className="read-more-btn">SOBRE NOSOTROS</button>
          </div>
          <div className="info-image-micole"></div>
        </section>

        <section className="seccion-servicio">
          <div className="seccion-servicio-imagen"></div>
          <div className="seccion-servicio-text">
            <h3>Brindamos servicios de calidad para tu hijo</h3>
            <p>En Mi Cole buscamos por ti la mejor calidad de estudio, para que puedas tener un mejor rendimiento academico, y asi poder tener un futuro mas brillante dando la informacion de los mejores colegios de Perú tambien armamos la mejor estudio academico para tu hijo escribanos en nuestras redes sociales precione el boton para saber mas información</p>
            <button className="read-more-btn">Servicio</button>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer>
        <div className="footer-main">
          <div className="footer-logo">
            <h1>Mi Cole</h1>
            <p>Brindamos información actualizada sobre los mejores colegios para tus hijos, ayudándote a tomar la mejor decisión educativa.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-enlaces">
            <h3>Enlaces</h3>
            <ul>
              <li><a href="#">Colegios</a></li>
              <li><a href="#">Información</a></li>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Servicios</a></li>
            </ul>
          </div>
          
          <div className="footer-contacto">
            <h3>Contacto</h3>
            <p><i className="fas fa-map-marker-alt"></i> Av. Las Palmeras 123, Lima, Perú</p>
            <p><i className="fas fa-phone-alt"></i> +51 987 654 321</p>
            <p><i className="fas fa-envelope"></i> info@micole.edu.pe</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MiCole. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
