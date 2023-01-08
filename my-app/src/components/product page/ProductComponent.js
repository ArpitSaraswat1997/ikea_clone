import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProListing.css"
import { useNavigate } from "react-router-dom";

// const ProductComponent = () => {
//   const products = useSelector((state) => state.product.products);
//   const renderList = products.map((product) => {
//     const { id, name, typeName, contextualImageUrl, mainImageUrl, salesPrice } = product;
//     return (
//       <div className="four wide column" key={id}>
//         {/* <Link to={`/product/${id}`}> */}
//         <div className="ui link cards">
//           <div className="card">
//             <div className="image">
//                 <img className="image1" src={mainImageUrl} alt={typeName} />
               
//              </div>
//               <div className="content">

//                 <div className="header">{name}</div>
//                 <div className="header">{typeName}</div>
//                 <div className="meta price">&#x20B9;{Math.trunc(salesPrice.numeral) * 100 - 1}</div>
//                 <div className="meta">&#10084;{ }</div>
//               </div>
//             </div>
//           </div>
//           {/* </Link> */}
//         </div>
//         );
//   });
//         return <>{renderList}</>;
// };

function ProductComponent({sort,products,category,price}){
  const navigate = useNavigate()
  let abc = false;
  if(sort!==""){
    products.sort((a,b)=>{
      if(sort === "lth") return a.salesPrice.numeral- b.salesPrice.numeral
      else if(sort === 'htl') return b.salesPrice.numeral- a.salesPrice.numeral
    })
  }
  // localStorage.setItem("path","/")
  return (
    <div className="container">
        {
          products.filter((elem)=>{
            console.log(category)
            return elem.typeName.includes(category)
          })
          .filter((el)=>{
            console.log(price)
            if(price == 0) return el
            if(price ==15000) return (Math.trunc(el.salesPrice.numeral) * 100 - 1)>15000
            else return (Math.trunc(el.salesPrice.numeral) * 100 - 1)<price && 
                        (Math.trunc(el.salesPrice.numeral) * 100 - 1)>price-5000
          })
          .map((elem)=>{
            abc = true
            return (
              <>
              <div onClick={()=>{navigate(`/products/${elem.id}`)}} className="singleContainer">
                  <div style={{marginBottom:"35px"}}>
                      <img width="100%" src= {elem.mainImageUrl} alt= {elem.typeName} />
                  </div>
                  <div>
                      <h4 style={{fontWeight:"bold"}}>{elem.name}</h4>
                      <p style={{color:"rgb(93, 93, 93)",fontSize:"13px",height:"25px"}}>{elem.mainImageAlt}</p>
                      <p style={{textDecoration: "line-through"}}><span style={{fontSize:"14px"}} >Rs.</span>{Math.trunc(((elem.salesPrice.numeral) * 100 - 1)*1.1)}</p>
                      <h4 style={{fontWeight:"bolder",marginTop:"-10px"}}><span style={{fontSize:"14px"}} >Rs.</span>{Math.trunc(elem.salesPrice.numeral) * 100 - 1}</h4>
                      <p style={{bottom:"10px",fontSize:"14px",color:"rgb(93, 93, 93)"}}>Price valid Dec 15 - Jan 15</p>
                  </div>
              </div>
              
              </>
            )
          })
        }
    </div>
  )
    
}

        export default ProductComponent;

