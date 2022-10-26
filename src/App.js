import { useState} from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';

function App() {

  const [products,setProduct]= useState([
    {id:"1",name:"Apple Watch SE (GPS+Cellular)",price:" 32,990",addtocart:false,image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/03/MKUW3_VW_34FRwatch-44-alum-silver-cell-se_VW_34FR_WF_CO_GEO_IN-photoutils.com_.jpeg?ssl=1"},
    {id:"2",name:"Garmin Forerunner 245",price:" 29,990",addtocart:false,image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/03/51Wzel4ZD-L._SL1000_.jpg?w=1000&ssl=1"},
    {id:"3",name:"Mobvoi TicWatch Pro 3",price:" 30,000",addtocart:false,image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2020/10/TicWatch-Pro-3.png?w=920&ssl=1"},
    {id:"4",name:"Fitbit Versa 3",price:" 18,999",addtocart:false,image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2020/06/Fitbit-Versa-2.jpg?resize=1024%2C1024&ssl=1"},
    {id:"5",name:"Motorola Moto 360",price:" 15,999",addtocart:false,image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/03/moto360-rose-gold-featured-images-online-resellers-01-main-opt.jpg?w=910&ssl=1"},
    {id:"6",name:"Amazfit GTS",price:" 9,999",addtocart:false,image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/03/615XvGy0XZL._SL1500_.jpg?resize=1024%2C1024&ssl=1"},
  ])
  const [initialValue,setInitialValue]=useState(0);
  const ToogleButton=(e)=>{
    let product=[...products];
    let index=products.findIndex(p=>p.id===e.target.id);
    setInitialValue(e.target.innerHTML === "Add to Cart" ? initialValue+1 : initialValue-1);
    console.log(e.target.innerHTML);
    console.log(index);
    product[index].addtocart=!product[index].addtocart;
    setProduct(product);
    
    
    console.log(initialValue);
    
  }
  return (
    <>
    <Nav value= {initialValue}/>
    <Header/>
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((prod,index)=>(
            <div class="col mb-3" key={index}>
                <div class="card h-100">
                    {/* <!-- Product image--> */}
                    <img class="card-img-top" src={prod.image} alt="..." />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* <!-- Product name--> */}
                            <h5 class="fw-bolder">{prod.name}</h5>
                            {/* <!-- Product price--> */}
                            <i class="fa fa-rupee fa-1x"> {prod.price}</i>
                        </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                          <button class="btn btn-outline-dark mt-auto" id={prod.id} onClick={(e)=>ToogleButton(e)}>{prod.addtocart ? "Remove from Cart" : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
          </div>
          </div>
    </section>
    </>
  )
}

export default App;

