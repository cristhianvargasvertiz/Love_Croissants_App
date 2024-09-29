import React, { useState,useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList(props) {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [cart, setCart] = useState([]); // State to store the items added to the cart
    const dispatch = useDispatch();
    const cartItems=useSelector(state => state.cart.items);
    console.log(cartItems);
    // setCart(cartItems);
    useEffect(() => {
        
    }, []);
    const alreadyInCart = (itemName) => {
        return cartItems.some((item) => item.name === itemName);
    }
    const handleAddToCart = (item) => {
        console.log("clicked");
        dispatch(addItem(item));
    }
    const totalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    const plantsArray = [
        {
            category: "Croissant",
            plants: [
                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

            ]
        },
        {
            category: "Coffee",
            plants: [
                
                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

            ]
        },
        {
            category: "Merch",
            plants: [
                
                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },

                {
                    name: "Butter Croissant",
                    image: "/Love_Croissants_App/1.png",
                    description: "Traditional LOVE croissant, prepared over 3 days. - Beurremont Beurre 82%, Normandy, France",
                    cost: "$6"
                },
            ]
        }
    ];


   const styleObj={
    backgroundColor: 'white',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignIems: 'center',
    fontSize: '20px',
    fontfamily: 'sans-serif',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'black',
    fontSize: '30px',
    textDecoration: 'none',
    justifyContent: 'center',
    textAlign: 'center',
   }
   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
};
const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
};

   const handleContinueShopping = (e) => {
    console.log("clicked");
    e.preventDefault();
    setShowCart(false);
  };
    return (
        <div>
             
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div style={{cursor:"pointer"}} onClick={props.toLanding} className="luxury">
               <img src="/Love_Croissants_App/Logo3.png" alt="Logo3" />
                    <a style={{textDecoration:'none'}}>
                    </a>
                </div>
              
            </div>
            <div style={{...styleObjUl, position: 'relative'}}>  
                    <div style={{ ...styleA, display: 'block', textAlign: 'center', margin: '0 auto'}}> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={{ ...styleA, position: 'absolute', left: '30%', transform: 'translateX(-50%)'}} >Croissants Crafted with <i>Love</i></a></div>
                <div> 
                    <a href="#" onClick={(e) => handleCartClick(e)} style={{...styleA, justifyContent: "center", textAlign: 'center', margin: '0 auto', display: 'flex' }}>
                        <h1 className='cart'>
                        <label style={{zIndex:1, color: "black", fontSize:"1.5rem",cursor:"pointer",display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>{totalItems()}</label>
                            0
                            <img src="/Love_Croissants_App/basket.png" style={{width: "60px"}}></img>
                            
                        </h1>
                    </a>
                </div>
            </div>
            </div>


        {!showCart? (
        <div className="product-grid">
            <br></br>
            {plantsArray.map((item)=><div className='mainCategoryDiv'> <h1>{item.category}</h1> 
            <div className="product-list">
                {item.plants.map((plant)=>
                    <div className='product-card'>
                        <img className='product-image' src={plant.image} alt={plant.name} />
                        <h2>{plant.name}</h2>
                        <p>{plant.description}</p>
                        <p>{plant.cost}</p>
                        <button style={{backgroundColor:alreadyInCart(plant.name)?"gray":"#4CAF50"}} disabled={alreadyInCart(plant.name)? true:false} onClick={()=>handleAddToCart({name:plant.name,cost:plant.cost,image:plant.image})} className='product-button'>Add to Cart</button>
                    </div>)}
                    </div>
                </div>)}


        </div>
 ) :  (
    <CartItem onContinueShopping={handleContinueShopping}/>
)}
    </div>
    );
}

export default ProductList;