import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import "./Shop.css"
import { Link } from 'react-router-dom';

const Shop = () => {
    //product er data fetch
    const [products, setProducts] = useState([]);
    //cart e product add korte
    const [cart, setCart] = useState([]);
    //filtered product dekhate
    const [displayProducts,setDisplayProducts] = useState([]);


    //product er data fetch
    useEffect(() => {
        // console.log("product api called");

        //products.JSON public folder e r public folder er file j kono jaiga theke ./ dilei access kora jai
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log("products recieved");
            });
    }, []);

    useEffect(() => {
        // console.log("L S CALLED");
        if (products.length) {
            const savedCart = getStoredCart();
            //display in the UI
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                //handling various quantity problem
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
               
                // console.log(key, addedProduct)
            }
            setCart(storedCart);
       }
    },[products])

    //button handler er function ta ekhane call korte hobe cause eta product.js er parent..ar child theke parent e data pathano jai na
    //handleAddToCart diye function ta product.js e pathai and data jeta pathacchi button click korle sheta korbe!
    const handleAddtoCart = (product) => {
        //spread operator diye newCart e ager array of products gula ene new product jegula add hobe shegula o push kortesi
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage for now
        addToDb(product.key);
    }
    //search option e kichu likhle suggestion
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);

    }
    return (
        <div>
            <div className="search-area">
                <form action="">
                    <input onChange = {handleSearch} type="text" placeholder="type here to search" />
                    <a href="#order" id="cart-search"><span><FontAwesomeIcon icon={faShoppingCart} /></span></a>
                </form>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product key={product.key} product={product} handleAddtoCart={handleAddtoCart}></Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart} >
                        <Link to="/review">
                            <button className="main-btn">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
         </div>
    );
};

export default Shop;