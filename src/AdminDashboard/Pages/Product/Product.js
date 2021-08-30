import React from "react";
import Chart from "../../Components/Chart/Chart";
import "./Product.css";
import { productData } from "../../data";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="productMainDiv">
      <div className="productHeader">
        <h1 className="productHeaderTitle">Products</h1>
        <Link to="/newproduct">  
        <button className="productHeaderButton">Create</button>
        </Link>
      </div>
      <div className="productMidle">
        <div className="productPerformance">
          <Chart
            data={productData}
            title="Sales Performance"
            datakey="Sales"
            width={500}
            height={300}
          />
        </div>
        <div className="productInfo">
          <div className="productInfoImgName">
            <img
              className="productImg"
              alt="One Plus Nord"
              src="https://s.yimg.com/os/creatr-uploaded-images/2021-07/b6f2c730-eae0-11eb-bfe3-c73cce194ce4"
            />
            <p>One Plus Nord</p>
          </div>
          <div className="productInfoData">
            <p>id : </p>
            <p>523</p>
          </div>
          <div className="productInfoData">
            <p>sales : </p>
            <p>12000</p>
          </div>
          <div className="productInfoData">
            <p>active : </p>
            <p>yes</p>
          </div>
          <div className="productInfoData">
            <p>in stock : </p>
            <p>no</p>
          </div>
        </div>
      </div>
      <div className="productFooter">
        <div className="productData">
          <label>Product Name</label>
          <input type="text" placeholder="Apple AirPod" />
          <label>In Stock</label>
          <select name="inStock" id="idStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="productImgUpdateButton">
          <div className="productImgUpdate">
            <img
              className="productFooterImg"
              src="https://s.yimg.com/os/creatr-uploaded-images/2021-07/b6f2c730-eae0-11eb-bfe3-c73cce194ce4"
              alt="one Plus"
            />
            <label htmlFor="file"><Publish /></label>
            <input type="file" id="file" style={{display:"none"}}></input>
          </div>
          <button className="productUpdateButton">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
