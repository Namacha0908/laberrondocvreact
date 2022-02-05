import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import '../sass/pages/_home.scss';





const Home = () => {
  
    return ( 
        <section id="home">
            <Nav></Nav>
            <div class="accueil">
                <div class="card-name">
                    <h1>Théo Laberrondo</h1>
                    <h2>IIM A3 Développement Web</h2>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}
 
export default Home;