import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productsActions";
import ProductComponent from "./ProductComponent";
import "./ProListing.css"
// import ".../App.css"

const ProductPage = () => {
  let [sort,setSort] = useState("")
  let [category,setCategory] = useState("")
  let [price,setPrice] = useState(0)
  const products = useSelector((state) => state.product.products);
  let n = products
  const dispatch = useDispatch();
  const fetchProducts = () => {
    console.log("sdkjflsdfjl")
    axios.get("https://ikea-api-server.onrender.com/productWindow")
      .then((res) =>{
        // console.log(res)
        dispatch(setProducts(res.data));
      } )
      .catch((err) => {
        console.log("Err: ", err);
      });
  };
  localStorage.setItem("path","/products")
//  console.log(sort)
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("hello")

  return (
    <><div id="filter-bar">
      <select onChange={(e)=>{setSort(e.target.value)}} name="price" id="price">
        <option value="">Sort</option>
        <option value="#" disabled></option>
        <option value="htl">Price: High to Low</option>
        <option value="#" disabled></option>
        <option value="lth">Price: Low to High</option>
      </select>
      <select onChange={(e)=>{setCategory(e.target.value)}} name="beds" id="beds">
        <option value="">Category</option>
        <option value="#" disabled></option>
        <option value="Stool">Stool</option>
        <option value="#" disabled></option>
        <option value="Bed">Bed</option>
        <option value="#" disabled></option>
        <option value="Chaise">Chaise</option>
        <option value="#" disabled></option>
        <option value="LED">LED</option>
        <option value="#" disabled></option>
        <option value="Chair">Chair</option>
        <option value="#" disabled></option>
        <option value="Wardrobe">Wardrobe</option>
      </select>
      <select onChange={(e)=>{setPrice(e.target.value)}} name="price-range" id="price-range">
        <option value="0">Price</option>
        <option value="#" disabled></option>
        <option value="4999">₹0 to 4999</option>
        <option value="#" disabled></option>
        <option value="9999">₹5,000 to 9999</option>
        <option value="#" disabled></option>
        <option value="14999">₹10,000 to 14999</option>
        <option value="#" disabled></option>
        <option value="15000">₹15,000 and above</option>
      </select>
      <select name="material" id="material">
        <option value="">Material</option>
        <option value="#" disabled></option>
        <option value="low">Fabric</option>
        <option value="#" disabled></option>
        <option value="medium">Cotton</option>
        <option value="#" disabled></option>
        <option value="high">Plastic</option>
        <option value="#" disabled></option>
        <option value="critical">Wood</option>
      </select>
      <select name="size" id="size">
        <option value="">Size</option>
        <option value="#" disabled></option>
        <option value="small">Small</option>
        <option value="#" disabled></option>
        <option value="medium">Medium</option>
        <option value="#" disabled></option>
        <option value="large">Large</option>

      </select>
      <select name="color" id="color">
        <option value="">Color</option>
        <option value="#" disabled></option>
        <option value="red">Red</option>
        <option value="#" disabled></option>
        <option value="blue">Blue</option>
        <option value="#" disabled></option>
        <option value="white">White</option>
        <option value="#" disabled></option>
        <option value="grey">Grey</option>
      </select>
      <select name="shape" id="shape">
        <option value="">Shape</option>
        <option value="#" disabled></option>
        <option value="rectangle">Rectangle</option>
        <option value="#" disabled></option>
        <option value="circle">Circle</option>
        <option value="#" disabled></option>
        <option value="square">Square</option>
        <option value="#" disabled></option>
        <option value="pentagon">Pentagon</option>
      </select>
    </div><div className="ui grid container">
        <ProductComponent sort = {sort} products = {products}
        category = {category}
        price = {price} />

        <h1>An efficient work setup in the comfort of your home</h1>
        <p >An organised workspace is just what you need to make working at home easier. To avoid distractions, use a room divider to separate your workspace from the rest of your home. Tuck away your files and papers in a standalone storage cabinet. Putting all your work papers away clears the desk for your children who want to use it for study or exam preparations.Putting all your work papers away clears the desk for your children who want to use it for study or exam preparations.</p>
        <div className="two-img">
          <img className="first-img" src="https://www.ikea.com/ext/ingkadam/m/7b62f3780cd98b22/original/PE832171-crop001.jpg?f=xl" />
          <img className="second-img" src="https://www.ikea.com/ext/ingkadam/m/4a70a6332905b2cc/original/PE832081-crop001.jpg?f=xl" />
        </div>
        <br />
        <h1 className="header2">No matter what kind of space you have, we’ve got your desk covered</h1>
        <p>Whether you’re looking for a desk for your gaming nook, an office or for working from home,you’re sure to find your dream desk below.</p>
        <div className="three-img">
          <img className="three-one" src="https://www.ikea.com/ext/ingkadam/m/3acbdb7d02745e9b/original/PH181122.jpg?f=s" />
          <img className="three-one" src="https://www.ikea.com/images/a-trotten-sit-stand-desk-with-a-lidkullen-active-sit-stand-s-8e8ab90ef3353d30c0eaa4001170f8dc.jpg?f=s" />
          <img className="three-one" src="https://www.ikea.com/ext/ingkadam/m/5c4613e116b06f24/original/PH182556-crop002.jpg?f=s" />
        </div>
        <h1>Desks, dining and other tables for you</h1>
        <p>A table is inevitably such a versatile piece of furniture. There are so many uses around the room. You need one for eating, working, dressing, meeting, and much more. IKEA understands that and that is why it offers a wide selection of tables.

          When you come to IKEA, you will find desks and computer desks, bedside tables, coffee and side tables, dining sets, dining tables, multifunctional tables, changing tables, dressing tables, children's tables, bar tables, conference and meeting tables, café tables, and console tables. So many different colours and styles. You will find the design which is just right for your specific needs at IKEA.
          <br />
          An IKEA table for everything

          There’s an IKEA table for this…

          A study table is an important feature of any student's or working professional's life. Here is where you study hard so that you can get good grades on your exams at school or university. <br /><p></p>A working professional needs a work table so that they can work and accomplish the tasks assigned to them. The sooner they finish their work, the sooner they are free to pursue their hobbies or spend time with their loved ones.<br /> Also, so much time is spent working that a work table is like an extension of your personality.
          <br /><p></p>
          You’re reading in bed at night. But now, it is time to switch off the lights and go to bed. What to do with your book? Here is where a bedside table comes to play. Your books, a bedside lamp, a bottle of water, and other small things can be placed on a bedside table for your convenience.<br /><p></p> Just extend your hand and get your glasses, have a drink of water or keep a favourite photo.

          A coffee table is the centrepiece of your living room. Your chairs and sofas are centred around this coffee table. A vase full of flowers, coffee table books, coasters, and cups of tea or coffee all find a home on this table.<br /><p></p> Coffee tables bring both form and function to your living room.<br /> <p></p>Besides, you can pick the whole lot from IKEA!
          <br /><p></p>
          A console table organises all your miscellaneous objects in one place so that you are not running around searching for these essential items. You can keep your favourite and special things in plain sight and close at hand. These tables are cleverly designed since they are both practical and gorgeous.

          Then, there’s an IKEA table for that…
        </p>

        <img className="fourth-img" src="https://www.ikea.com/images/how-to-build-your-own-desk-98b1ebe559a94c518ee174f5144d7f8c.jpg?f=xl" />

      </div></>
  );
};

export default ProductPage;
