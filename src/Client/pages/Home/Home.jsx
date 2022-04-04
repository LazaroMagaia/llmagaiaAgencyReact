import React,{useRef} from 'react';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import Woman from '../../images/woman.png';
import BestDeal from '../../images/bestdeal.png';
import Play from '../../images/play.png';
import Developer from '../../images/developer.png';
import Designer from '../../images/designer.png';
import uiux from '../../images/uiux.png';
import AboutMe from '../../images/about-me.png';
import Portfolio from '../../images/portfolio.png';
import Nft from '../../images/NftLandingpage.png';
import Seta from '../../images/seta.png';
import AspasWhite from '../../images/aspaswhite.png';
import Footer from '../../components/Footer/footer';
import UserNull from '../../images/usernull.png';
import { NavLink } from 'react-router-dom';
const Home = () => {

    /*const scrolltoRef = ()=>{
    scroller.scrollTo("service", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    }*/
    const scrollUp = () =>{
        window.scrollTo(0, 0);
    }
  return (
    <div>
      <div className='section1'>
        <Navbar></Navbar>
          <div className="container">
              <div className="scrollUp" onClick={scrollUp}>
                  <i className="fa-solid fa-circle-arrow-up"></i>
              </div>
          </div>
        <div className='section-header container'>
          <div className='row'>
            <div className='col-md-6 desc'>
                <h3><span>Ola! Eu sou</span> Lázaro Lourenco Magaia</h3>
                <p>Sou um densevolvedor com 2 anos de expericiência e com conhecimentos sólidos
                  em web e app, uso as mais actualizadas linguagens de programação</p>
                  <div className='call-to-action'>
                      <NavLink to="/contact" className="contract-to-action">Contratar</NavLink>
                      <NavLink to="#" className="play-to-action"><img src={Play} alt={Play} />
                       Ver mais</NavLink>
                  </div>
            </div>
            <div className='col-md-6'>
                <div className='best'>
                  <img src={BestDeal} alt={BestDeal} />
                  <p>Do melhor para o melhor</p>
                </div>
                <div className='image'>
                  <img src={Woman} alt={Woman}/>
                </div>
            </div>
          </div>
        </div>
      </div>{/* section1 */}
      <div className='social-network'>
        <div className='container'>
          <div className='social-flex-network'>
            <center>
              <i className="fa-brands fa-php"></i>
              <i className="fa-brands fa-laravel"></i>
              <i className="fa-brands fa-node-js"></i>
              <i className="fa-brands fa-js"></i>
              <i className="fa-brands fa-wordpress"></i>
              <i className="fa-brands fa-vuejs"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-github"></i>
              {/*<i class="fa-brands fa-linux"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>*/}
            </center>
          </div>
        </div>
      </div>
      <div className='service' id="service">
        <div className='container'>
        <h3>Meus servicos</h3>
        <p>Em meus poucos anos de expericiência descobri oque torna os meus productos incriveis,
          é a <span>autenticacidade</span></p>

          <div className='service-wrapper'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='service-single'>
                    <img src={Developer} alt={Developer}/>
                    <h3>Developer</h3>
                    <p>Neste servico eu densevolvo um site fullstack para si ou sua empresa
                      usando as melhor tecnologias e até permitindo que você escolha qual perfere
                    </p>
                    <div className='btn-read-more'>
                      <a href="#">saber mais</a>
                    </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='service-single'>
                    <img src={Designer} alt={Designer}/>
                    <h3>Designer</h3>
                    <p>Neste servico crio o design do seu site e faço o html e css que é o frontend da
                      pagina ou o desenho principal da mesma
                    </p>
                    <div className='btn-read-more'>
                      <a href="#">saber mais</a>
                    </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='service-single'>
                    <img src={uiux} alt={uiux}/>
                    <h3>Ui/Ux</h3>
                    <p>Neste servico crio o design mais focado em campanhas para sua empresa ou para 
                      si, para as suas redes sociais bombarem
                    </p>
                    <div className='btn-read-more'>
                      <a href="#">saber mais</a>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>{/*Service*/}

      <div className='about-me container' id="about">
        <div className='row'>
          <div className='col-md-6'>
            <img src={AboutMe} alt={AboutMe}/>
          </div>
          <div className='col-md-6'>
            <div className='desc'>
              <h1>Sobre mim</h1>
              <p>Olá eu sou Lázaro Lourenço Magaia, densevolvedor web e design web.
                  Tenho paixão pelo densevolvimento web, uso os melhores metodos de denvolvimento
                  e as melhores praticas da praça, fui formado pela Universidade Eduardo Mondlane,
                  em Egenharia informatica.
              </p>
              <div className='contact-info-wrapper'>
                  <div className='contact-info'>
                    <p>Nome</p>
                    <span> Lazaro Magaia</span>
                  </div>
                  <div className='contact-info'>
                    <p>Telemovel</p>
                    <span> +258827017601</span>
                  </div>
                  <div className='contact-info'>
                    <p>Email</p>
                    <span>llmagaia2@llmagaia.site</span>
                  </div>
              </div>

              <div>
                <button className='color-white'><span>27+</span><p>Cliente</p></button>
                <button className='color-yellow'><span>50+</span> <p>project done</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>{/* About me */}

      <div className='education'>
        <div className='container'>
            <div className='title-education'>
              <h1>Educação e Experiência</h1>
              <p>Olá eu sou Lázaro Magaia e nessa secção irei falar um pouco de minha trajectoria até o
                momento, com isso também das minhas experiencias e da minha educação estudantil.
              </p>
              </div>
                <div className='education-wrapper'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='education-single yellow-feebc5'>
                      <h1>Wordpress Developer</h1>
                      <h3>Fevereiro 2019 - Jubnho 2019</h3>
                      <p>Wordprees é um cms (sistema de gerenciamento de conteúdo)
                        serve para criar blogs, sites e lojas virtuais
                      </p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='education-single white border-FEEBC5'>
                      <h1>Engenharia informatica</h1>
                      <h3>Janeiro 2017 - Setembro 2021</h3>
                      <p>Curso de engenharia infórmatica é o curso mais completo para os estudos nas
                        tecnologias de informatica.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
        </div>
      </div>{/*Education */}

      <div className='project'>
        <div className='container'>
          <center>
          <h1>Projectos recentes</h1>
          <p>Nesta secção ficam os meus projectos recentes e talvez os melhores que já fiz. </p>
          </center>
          <div className='works'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card-portfolio bg-portf'>
                  <img className='img-works' src={Portfolio} alt={Portfolio} />
                  <h1>llmagaia portfolio</h1>
                  <h3>06/01/2022</h3>  
                  <p>Uso este portfolio comprado de um design e o traduzi para usar o mesmo
                  ele resolve todos problemas tanto de beleza e usabilidade.
                  </p>
                  <a href="">Leia mais <img src={Seta} alt={Seta}/></a>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card-portfolio bg-nft'>
                  <img className='img-works' src={Nft} alt={Nft} />
                  <h1>NFT website</h1>
                  <h3>06/09/2021</h3>  
                  <p>Nft é o assunto do momento e porque não ter um site e gerenviar as suas criptomoedas ?</p>
                  <a href="">Leia mais <img src={Seta} alt={Seta}/></a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>{/*Project */}

      <div className='feedback'>
        <div className='container'>
          <center>
            <h1>Veja oque os meus clientes dizem</h1>
              <p>Me importo muito com as avaliações de quem já usufruir dos meus servicos
                e aqui estão alguns dos comentarios deles.
              </p>
          </center>
          <div className='feedback-wrapper'>
            <div className='row'>
              <div className='col-md-4'>
                  <div className='feeback-wrapper-single'>
                    <div className='perfil'>
                      <div><img src={UserNull} alt={UserNull}/></div>
                      <div className='desc'>
                        <h3>Mauro Nhavoto</h3>
                        <p>20/03/2022</p>
                      </div>
                      <p><img src={AspasWhite} alt={AspasWhite}/></p>
                    </div>
                      <p className='text'>
                        Consigo alcançar os meus clientes e de todo pais em poucos cliques, trabalhar com 
                        lazaro magaia foi a melhor decisão
                      </p>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='feeback-wrapper-single'>
                    <div className='perfil'>
                      <div><img src={UserNull} alt={UserNull}/></div>
                      <div className='desc'>
                        <h3>Lizandra Luis</h3>
                        <p>10/01/2021</p>
                      </div>
                      <p><img src={AspasWhite} alt={AspasWhite}/></p>
                    </div>
                      <p className='text'>
                        Estou trabalhando com lazaro magaia em meus projectos e tenho tido bons resultados
                      </p>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>{/*Feedback*/}

    <div className='newsletter'>
      <div className='container'>
        <center>
          <h1>Se inscreva para receber novidades</h1>
          <p>Receba novidades do nosso site, em casa, no trabalho e onde estiver, com as novidades
            também podes receber promoções, eventos e muito mais. não perca tempo e inscreve-te
          </p>
        </center>
        <div className='row'>
            <div className='col-md-12'>
              <div className='form-newsletter'>
                <center>
                  <form action="">
                    <input type="text" name="email" id="email" placeholder='Seu melhor email' />
                      <button type='submit'>inscrever-me</button>
                  </form>
                </center>
              </div>
            </div>
        </div>
      </div>
    </div>{/* newsletter */}

    <div className='letsTalk'>
        <div className='container'>
          <div className='bg-letsTalk'>
              <center>
                <span>Contacto</span>
                <h1>Tem algum projecto ? conte-me</h1>
                <p><i className="fa-solid fa-envelope"></i> llmagaia@llmagaia.site</p>
                <NavLink to="/contact">contar</NavLink>
              </center>
          </div>
        </div>
    </div>{/*  letsTalk  */}
        <Footer /*scrolltoRef={scrolltoRef}*//>
    </div>
  )
}

export default Home