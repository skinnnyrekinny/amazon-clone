import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
           <div className="home__row">
               <Product 
               id="345346342"
               title="The lean startup" 
               price={29.99} 
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
               rating={5}/>
               <Product 
               id="23562343456"
               title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with -beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
               price={239.0}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/B10%2BGNdkzKL._AC_5X450_.jpg"
               />
           </div>

           <div className="home__row">
           <Product 
               id="23562343456"
               title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with -beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
               price={239.0}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/B10%2BGNdkzKL._AC_5X450_.jpg"
               />
            <Product 
               id="345346342"
               title="The lean startup" 
               price={29.99} 
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
               rating={5}/>
            <Product 
               id="23562343456"
               title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with -beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
               price={239.0}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/B10%2BGNdkzKL._AC_5X450_.jpg"
               />
           </div>

           <div className="home__row">
            <Product />
           </div>
           
            </div>
        </div>
    )
}

export default Home
