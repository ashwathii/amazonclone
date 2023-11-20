import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {  
  return (
    <div className="bg  align-items-center d-flex mt-0" style={{height:"60px",top:'0',zIndex:'100',position:'sticky',backgroundColor:'#131921'}} >
     
        <img style={{width:'100px',objectFit:'contain',margin:'0 20px',marginTop:'18px'}} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
           
        
 
      <div className=" d-flex align-items-center" style={{ flex:'1', borderRadius:'24px'}}>
      
        <input  placeholder="Search" style={{height:'12px',padding:'10px',border:'none',width:"100%"}} type="text" />
        <SearchIcon  style={{padding:'5px',height:'22px !important',backgroundColor:'#cd9042'}} />
        
      </div>
    
      <div className=" d-flex" style={{justifyContent:'space-evenly'}}>
     
          <div className=" d-flex" style={{flexDirection:'column',marginLeft:'10px',marginRight:'10px',color:'white'}}>
            <span  style={{fontSize:"10px"}}>Hello Guest</span>
            <span  style={{fontSize:'13px',fontWeight:'800'}}>Sign In</span>
          </div>
        
       
        
          <div className=" d-flex" style={{flexDirection:'column',marginLeft:'10px',marginRight:'10px',color:'white'}}>
            <span style={{fontSize:"10px"}}>Returns</span>
            <span style={{fontSize:'13px',fontWeight:'800'}}>& Orders</span>
          </div>
        
        

        <div className=" d-flex" style={{flexDirection:'column',marginLeft:'10px',marginRight:'10px',color:'white'}}>
          <span style={{fontSize:"10px"}}>Your</span>
          <span style={{fontSize:'13px',fontWeight:'800'}}>Prime</span>
        </div>
      
        
          <div className=" d-flex align-items-center" style={{color:'white'}}>
            <ShoppingBasketIcon />
            <span  style={{marginLeft:'10px',marginRight:'10px'}}>0</span>
            
               
          </div>
        
      </div>
    </div>
  );
}

export default Header;