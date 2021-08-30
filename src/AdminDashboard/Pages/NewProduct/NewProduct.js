import React from 'react'
import "./NewProduct.css";

const NewProduct = () => {
    return (
        <div className="newProductMainDiv">
            <h1 className="newProductTitle">New Product</h1>
                <form className="newProductForm">
                    <label>Image</label>
                    <input type="file" id="file" />
                    <label>Name</label>
                    <input type="text" placeholder="add name"/>
                    <label>Stock</label>
                    <input type="number"  placeholder="add stock"/>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <button type="submit" className="newProductFormButton">Create</button>
                </form>
        </div>
    )
}

export default NewProduct
