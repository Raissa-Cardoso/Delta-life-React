import './App.css';

function Main() {
  return (
    <section class="home">
            <main class="container">
                <div class="vitrine" wm-slider>
                    <p><img src="assets/imagem1.jpg"  onclick="clicou()"></img></p>            
                    <p><img src="assets/imagem2.jpg"  onclick="clicou()"></img></p>
                    <p><img src="assets/imagem3.jpg" onclick="clicou()"></img></p>
                    <p><img src="assets/imagem4.jpg"  onclick="clicou()"></img></p>            
                </div>                    
                <div class="categoria"></div>
                <div class="categoria"></div>
                <div class="categoria"></div>
                <div class="categoria"></div>
                <div class="categoria"></div>
                <div class="categoria"></div>
                <div class="categoria"></div>
                <div class="categoria"></div>
            </main>
        </section>
        );
    }

export default Main;