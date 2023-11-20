import React from "react";
import Product from "../components/Product";

function Homee() {
  return (
    <div className="d-flex justify-content-center" style={{marginLeft:'auto',marginRight:'auto',maxWidth:'1500px'}}>
          
      <div className="home_container">
        <img
          style={{width:'100%',zIndex:'-1',marginBottom:"-150px",maskImage:'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'}}
          src="https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg"
          alt=""
        />


<div className="d-flex" style={{zIndex:'1',marginLeft:'5px',marginRight:'5px'}}>
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="4953894"
            title="Sheaffer Prelude 340 Fountain Pen"
            price={123}
            rating={4}
            image="https://m.media-amazon.com/images/I/51VzdOGBBGL.jpg"
          />
          <Product
            id="4953809"
            title="JBL Cinema SB271, Dolby Digital Soundbar with Wireless Subwoofer for Extra Deep Bass, 2.1 Channel Home Theatre with Remote, HDMI ARC, Bluetooth & Optical Connectivity (220W)"
            price={45}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tg0idP5cL._AC_UF1000,1000_QL80_.jpg"
          />
        </div>

       

        <div className="d-flex" style={{zIndex:'1',marginLeft:'5px',marginRight:'5px'}}>
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="4958094"
            title="Paperkraft Expression 5 Subject| Hard  Cover Notebook | 18.2 cm x 24.3 cm | Single Line | 400 Pages"
            price={29.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71cegIQWxQL._AC_UF1000,1000_QL80_.jpg"
          />
        </div>

        <div className="d-flex" style={{zIndex:'1',marginLeft:'5px',marginRight:'5px'}}>
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"

          />
          <Product
            id="9538094"
            title="Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens"
            price={645}
            rating={3}
            image="https://5.imimg.com/data5/SELLER/Default/2022/11/IN/YO/PZ/4711162/nikon-d7500-camera-500x500.jpg"
          />
          <Product
            id="42538094"
            title="Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty (Black)"
            price={234}
            rating={2}
            image="https://www.jiomart.com/images/product/original/rvdgbahtjr/lifelong-llmg200-power-pro-lx-500w-mixer-grinder-with-3-jars-liquidizing-grinding-and-chutney-jar-black-product-images-orvdgbahtjr-p592557095-0-202207132010.jpg?im=Resize=(420,420)"
          />
          <Product
            id="49538294"
            title="LG 7 Kg 5 Star Wind Jet Dry Semi-Automatic Top Loading Washing Machine (P7020NGAZ, Dark Gray, Rat Away Feature)"
            price={239.0}
            rating={2}
            image="https://www.lg.com/in/images/washing-machines/md07532556/gallery/P7020NGAZ-Washing-Machines-Front-View-D-01-v1.jpg"
          />
         
        </div>
      </div>

    </div>
    );
};

export default Homee;
