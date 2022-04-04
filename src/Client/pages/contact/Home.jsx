import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/footer';
import "./home.css";
const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='contact-section'>
          <div className='container'>
            <h3>Olá, Conte-me tudo</h3>
            <p>Estou interessado em...</p>
            <div className="interesting">
                <input type="checkbox" id="WebD" value="Web Design" />
                <label for="WebD" >Web Design</label>

                <input type="checkbox" id="blog" value="blog"/>
                <label for="blog">blog</label>

                <input type="checkbox" id="Publicidade" value="Publicidade" />
                <label for="Publicidade">Publicidade</label>
                
                <input type="checkbox" id="devWeb" 
                value="densevolvimento de web"/>
                <label for="devWeb">densevolvimento de web</label>

                <input type="checkbox" id="devS"
                value="desenvolvimento de um sistema"/>
                <label for="devS">desenvolvimento de um sistema</label>

                <input type="checkbox" id="Aplicações" value="Aplicações" 
                v-model="form.interesting"/>
                <label for="Aplicações">Aplicações</label>
            </div>
          </div>
        </div>
        <div className='form-contact'>
          <div className='container'>
            <form action="" encType='multipart/form-data'>
              <input type="text" placeholder='Nome' required/>
              <input type="email" placeholder='Email' required/>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <div className='price-rapper'>
                <p>Orçamento previsto para o projeto</p>
                <input type="radio" name="price" id="price-01" value="10.000,00Mts" />
                <label htmlFor="price-01">MN 10.000,00Mts</label>
                <input type="radio" name="price" id="price-02" value="20.000,00Mts"  />
                <label htmlFor="price-02">20.000,00Mts</label>
                <input type="radio" name="price" id="price-03" value="30.000,00Mts" />
                <label htmlFor="price-03">30.000,00Mts</label>
                <input type="radio" name="price" id="price-04" value="50.000,00Mts"  />
                <label htmlFor="price-04">MM50.000,00Mts</label>
              </div>
              <div className='file-sender'>
                <input type="file" name="file[]" id="files" multiple />
                <label htmlFor="files"><i className="fa-solid fa-paperclip"></i> anexar ficheiros</label>
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Contact