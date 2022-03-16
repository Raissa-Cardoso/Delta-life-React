import './App.css';

function Header() {
  return (
    <header class="cabecalho">
        <div class="logo">
            <a href="index.html">
                <img src="../assets/delta.jpg" alt="Logo da Delta Life" onclick="clicou()"></img>
            </a>            
        </div>
        <div class="busca">
            <input type="text" placeholder=""></input>
            <button>Pesquisar</button>
        </div>  
        <aside class="lateral">                       
            <ul> 
                <li>Seja Bem-vindo!</li>             
                <li><a href="">Minha conta</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Carrinho</a></li>
            </ul>
        </aside>        
           
    </header>
  );
}

export default Header;

