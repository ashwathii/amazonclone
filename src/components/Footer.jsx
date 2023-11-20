import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div style={{height:'300px',color:'white'}} className='d-flex justify-content-center w-100 align-items-center flex-column bg-dark'>
        <div className='d-flex justify-content-evenly align-items-center w-100'>

            <div style={{width:'400px'}} className="websites">
            <h4 className='mb-3 ' style={{overflowY:'hidden'}}>

            <img style={{width:'100px',objectFit:'contain',margin:'0 20px',marginTop:'18px',alignItems:'center'}} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            </h4>
            <h6 style={{overflowY:'hidden'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa sit qui consectetur, quod animi expedita aliquid nam illum dolorem incidunt. Alias repellat nihil est, amet eius modi suscipit eum?</h6>
            </div>

            
                <div className='d-flex justify-content-evenly align-items-center mt-3 me-3 '>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white',padding:'10px'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white',padding:'10px'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white',padding:'10px'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white',padding:'10px'}}><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
                </div>
            </div>
            
        
        <p>Copyright @ 2023 Amazon</p>
    </div>
    </>
  )
}

export default Footer