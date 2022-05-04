import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>BIENVENUE DANS MON MONDE</h3>
            <h1>
              Salut, Je suis <span>Maguette seck</span>
            </h1>
            <h2>
              a
              <span>
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
              </span>
            </h2>

            <p>Je suis developpeur web et mobile ,de plus je travaille sur les disigne </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>TROUVEZ AVEC MOI</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                   <a href="https://m.facebook.com/maguette.seck.334"><i class='fab fa-facebook-f'></i></a>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-telegram'></i>
                  </button>
                  <button className='btn_shadow'>
                
                    <a href="https://www.linkedin.com/in/maguette-seck-899786238/"><i class='fab fa-linkedin-in'></i></a>
               
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>MEILLEURE COMPÉTENCE SUR</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Home
