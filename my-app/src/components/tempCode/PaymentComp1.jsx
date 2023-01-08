import React from "react";
import styles from "./PaymentComp1.module.css";

function PaymentComp1(props) {
  return (
    <div className={styles.container}>
      <div>
        <img
          style={{ width: "100px", height: "40px" }}
          src="https://prod-ibes-public-files.s3-eu-west-1.amazonaws.com/image/logo.png"
          alt="ikeaLogo"
        />
        <p>Logged In</p>
      </div>
      <div className={styles.processImgDiv}>
        <img
          src="https://lh3.googleusercontent.com/pw/AL9nZEULYQ-f-H_XUxhi5TNpgiM-11koi2KUbR5niZSlAHhXZb77G2PKmOdO-FNux0bxGe2lem6l4R6m8D5h33ZjY-xQ56rYUQgirD3uPzB2cHIWvo2SXEguinHFazjsFoa11T1GpRKf8Y-oNGRjssM0ytVW=w738-h83-no?authuser=0"
          alt="status1"
        />
        <img
          src="https://lh3.googleusercontent.com/pw/AL9nZEVZ_xWYEiPNZ7SBsMtvY-pdunmq51DAz3swcGTWEGoWIJsVxoOrvolzq48d8XVft4u3yELQiI_2XfCcGzzv5szPk_X71XGuIxQbTs8nRCpA_TWmP9hebv-4N0wm5tyDjoiR6jM21ClRxJ66FRZRVRfx=w883-h85-no?authuser=0"
          alt="status2"
        />
        <img
          src="https://lh3.googleusercontent.com/pw/AL9nZEUTWL7ayTTLA8wD3LDbhZSF20tWcW9f4K8mEmBuSijtx7K6f7Y41p2qcWjDJxvSj3qqQbTi3ZnmfgWQtEW9zsByFwrf36sG8-evWg8g-zlYkiPOUObZe02EZZ364x5TdCR4DPqZw5Ra7Gy-AZsKFZCd=w809-h84-no?authuser=0"
          alt="status3"
        />
      </div>
      <div>
        <h1>Your shopping cart</h1>
      </div>
      <div className={styles.totalDiv}>
        <div>
          <p>
            1 product in shopping cart <br />
            Delivery free/Picking free
          </p>
          <p>Rs. 159.00</p>
        </div>
        <hr />
        <div>
          <h5>Total amount:</h5>
          <div>
            <h5>Rs. 2149.00</h5>
            <p>All prices are inclusive of taxes</p>
            <button>Place order </button>
          </div>
        </div>
      </div>
      <div className={styles.productDiv}>
        <div>
          <div>
            <input style={{ width: "50px" }} value="1" /> X
          </div>
          <div>
            {" "}
            <img
              src="https://www.ikea.com/in/en/images/products/silverarv-tablecloth-beige__1062942_pe851137_s3.jpg"
              alt="product1"
              style={{ width: "125px" }}
            />{" "}
          </div>
          <div>
            <div>
              <h3>SILVERARV</h3>
              <p>tablecloth</p>
              <h2>Rs. 999.00</h2>
            </div>
            <div>
              <p>beige</p>
              <p>Article no: 605.265.80</p>
            </div>
          </div>
        </div>
        <div>
          <div>Total</div>
          <div>
            <p>Rs. 999.00</p>
            <button>⛔ Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentComp1;
