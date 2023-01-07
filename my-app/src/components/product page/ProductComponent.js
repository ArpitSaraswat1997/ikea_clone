import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProListing from "./ProListing.css"

const ProductComponent = () => {
  const products = useSelector((state) => state.product.products);
  const renderList = products.map((product) => {
    const { id, name, typeName, contextualImageUrl, mainImageUrl, salesPrice } = product;
    return (
      <div className="four wide column" key={id}>
        {/* <Link to={`/product/${id}`}> */}
        <div className="ui link cards">
          <div className="card">
            <div className="image">
                <img className="image1" src={mainImageUrl} alt={typeName} />
               {/* </div>  */}
             {/* <div className="img">  */}
             {/* <img  className="image2" src={contextualImageUrl} alt={typeName} /> */}
             {/* </div>  */}
             </div>

           


              <div className="content">

                <div className="header">{name}</div>
                <div className="header">{typeName}</div>
                <div className="meta price">&#x20B9;{Math.trunc(salesPrice.numeral) * 100 - 1}</div>
                <div className="meta">&#10084;{ }</div>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </div>
        );
  });
        return <>{renderList}</>;
};

        export default ProductComponent;

