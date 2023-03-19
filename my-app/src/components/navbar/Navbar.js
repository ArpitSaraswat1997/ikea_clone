import React from "react";
import "../navbar/header.css";

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthReducer from "../login-signup/AuthReducer/AuthReducer";
import { logout } from "../login-signup/AuthReducer/Actions";
import { useDispatch } from "react-redux";
import { useRef } from "react";



export default function Navbar() {
  let inputRef = useRef()
  const dispatch = useDispatch()
  const isAuth = useSelector((data)=>{
    return data.AuthReducer
  })
  console.log(isAuth.isAuth)
  const navigate = useNavigate()
  const [filteredData, setFilteredData] = useState([]);
  const [word, searchWord] = useState("")

  const [data,setData] =useState([])

  useEffect(() => {
    axios.get("https://ikea-api-server.onrender.com/productWindow")
      .then((res) => {
        console.log(res)
        setFilteredData(res.data)
      })

  }, [])


  const handleFilter = (event) => {
    searchWord(event.target.value)
    console.log(word)

  }
  let filteredItems = filteredData.filter((item) => item.typeName
    .includes(word));


  console.log(filteredItems);

  let slicedArr = filteredItems.slice(2,7 );


  return (
    <div>
      <header id="main-header">
        <div className="left-header">
          <button
            class="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            {" "}
            <span class="material-symbols-outlined">density_medium</span>
          </button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div id="canvasHeader" class="offcanvas-header">
              <h5
                class="offcanvas-title"
                id="offcanvasWithBothOptionsLabel"
                style={{ display: "flex", margin: "auto" }}
              >
                <img 
                style={{cursor:"pointer"}}
                  onClick={()=>{navigate("/")}}
                  src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
                  alt=""
                />
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="offcanvas-body"
              id="bodyHover"
              style={{
                display: "flex",
                flexDirection: "column",

                marginTop: "10px",

                paddingLeft: "50px"
              }}
            >
              <h2>Products</h2>
              <h2>Rooms</h2>
              <h2>New at IKEA</h2>
              <h2>Offers</h2>
              <br />
              <br />

              <h6>Tips and inspirations</h6>
              <h6>Currently at IKEA</h6>
              <h6>Track your order</h6>
              <br />
              <br />
              <p>Join IKEA Family</p>
              <p>IKEA Restaurant</p>
              <p>Our stores</p>
              <p>Design your room</p>
              <p>Customer service</p>
              <p>Download the IKEA app</p>
            </div>
          </div>
          <p>Menu</p>
        </div>

        <div className="image_logo">

          <img
            onClick={()=>{navigate("/")}}
            src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
            alt=""
          />
        </div>
        <div className="header__search">
          <div className="header2">

            <input
            
              type="text" className="header__searchInput"
              placeholder="What are you looking for?"
              onChange={handleFilter} />

            {/* <SearchIcon className="header__searchIcon" /> */}
            <span id="header__searchIcon" class="material-symbols-outlined">search</span>

            <div className="final-Data">
              {

                word === "" ? <div></div> :
                  slicedArr.map((items) => (


                    <li className="details" onClick={() => {
                      navigate(`products/${items.id}`)
                    }}>{items.typeName}</li>

                  ))
              }
            </div>
          </div>
        </div>


        <div className="right-header">
          <button

            class="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            {" "}
            <li className="login-icon">
              <span class="material-symbols-outlined"> person</span> <span className="hej">{isAuth.isAuth?isAuth.signup.firstName.toUpperCase():"Hej! Log in or sign up"}</span>
            </li>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header" >
              <h5 class="offcanvas-title" id="offcanvasRightLabel">.</h5>
              <br />

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div id="loggin">
                <h2>Hej! <span className="hej">{isAuth.isAuth?isAuth.signup.firstName.toUpperCase():"Hej! "}</span></h2>
                <button data-bs-dismiss="offcanvas" onClick={() => {
                  !isAuth.isAuth?navigate("/login"):dispatch(logout())
                }}>{!isAuth.isAuth?"Login":"Logout"}</button>
              </div>
              <hr />
              <div id="ikeaFamily">
                <h4>Join IKEA family</h4>
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
              <hr />
            </div>
          </div>
          <li className="cart-icon">
            {" "}
            <span class="material-symbols-outlined">local_shipping</span>
          </li>
          <li onClick={() => {
            navigate("/cart")
          }} className="cart-icon">
            <span class="material-symbols-outlined">shopping_basket</span>
          </li>
        </div>
      </header>

      <br />
      <div id="category">
        <li onClick={() => {

          navigate('/products')
        }}>Products</li>
        <li>Rooms</li>
        <li>New at IKEA</li>
        <li>Offers</li>
      </div>
    </div>
  );
}

