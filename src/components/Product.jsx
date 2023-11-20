import React from "react";

function Product({ id, title, image, price, rating }) {
 
  return (
   
    <div className="d-flex align-items-center" style={{flexDirection:'column',margin:'10px',padding:'20px',width:'100%',minWidth:'100px',maxWidth:'400px',backgroundColor:'white',justifyContent:'flex-end',zIndex:'1'}}>

      <div style={{height:'100px',marginBottom:'15px'}}>
        <p>{title}</p>
        
        <p style={{marginTop:'5px'}}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="d-flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
     
      <img src={image} alt="" style={{maxHeight:'200px',width:'100%',objectFit:'contain',marginBottom:'15px'}}/>
    
      <button style={{background:'#f0c14b',border:'1px solid',marginTop:'10px',borderColor:'#a88734 #9c7e31 #846a29',color:'#111'}}>Add to Basket</button>
    </div>
  );
}

export default Product;