import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
// import a from "./a.jpg"
// import b from "./b.jpg"
// import c from "./c.jpg"
// import d from "./d.jpg"
// import e from "./e.jpg"
// import f from "./f.jpg"
// import g from "./g.jpg"
// import h from "./h.jpg"
// import i from "./i.jpg"
// import j from "./j.jpg"
// import k from "./k.jpg"
// import l from "./l.jpg"
// import m from "./m.jpg"
// import n from "./n.jpg"
// import o from "./o.jpg"
// import p from "./p.jpg"
// import q from "./q.jpg"
// import r from "./r.jpg"
// import s from "./r.jpg"

const Portfolio = () => {
  return (
    
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISITEZ MON PORTEFEUILLE ET CONSERVEZ VOS COMMENTAIRES</h4>
            <h1>Mon portfolio</h1>
          </div>

          <div className='content grid'>
          
          {/* e */}
               {/* <img src={b} alt='' />
               <img src={c} alt='' />
               <img src={d} alt='' />
               <img src={e} alt='' />
               <img src={f} alt='' /> */}

          
           
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
              
            })}
        
            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    
  )
}

export default Portfolio
