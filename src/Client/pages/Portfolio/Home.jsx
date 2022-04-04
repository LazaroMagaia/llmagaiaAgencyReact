import react from 'react'
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"
import portfolio from "../../images/portfolio.png";
import Nft from "../../images/NftLandingpage.png"
const Home = () =>
{
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="Portfolio">
                      <div className="filtros">
                          <p>Todos projectos</p>
                          <p>Web</p>
                          <p>App</p>
                      </div>
                    <div className="portfolio-wrapper">
                        <div className="portfolio-single">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={portfolio} alt={portfolio}/>
                                    <center>
                                        <a href="">
                                            <p> <strong>llmagaia </strong> -llmagaia é o portfolio de lázaro
                                                Lourenço Magaia</p>
                                        </a>
                                    </center>
                                </div>
                                <div className="col-md-6 mt">
                                        <img src={Nft} alt={Nft}/>
                                        <center>
                                            <a href="">
                                                <p> <strong>nft website </strong> -nft é a nova forma de web
                                                que usa a web 3.0 dando a si o maior controle</p>
                                            </a>
                                        </center>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home