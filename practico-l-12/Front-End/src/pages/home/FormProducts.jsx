import React from 'react';
import {useContext} from "react";
import {SocketContext} from "../../context/socket-context";


export const FormProducts = () => {

    const { onInputChange, sendProduct } = useContext(SocketContext);

    return (
        <form className="container p-4" id="js-form" onSubmit={sendProduct}>
            <div className="row mb-4">
                <div className="col">
                    <div className="form-outline">
                        <input name="product" onChange={onInputChange} type="text" id="form3Example1" className="form-control"/>
                        <label className="form-label" htmlFor="form3Example1">Product Name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                        <input onChange={onInputChange} name="price" type="number" id="form3Example2" className="form-control"/>
                        <label className="form-label" htmlFor="form3Example2">Price</label>
                    </div>
                </div>
            </div>
            <div className="form-outline mb-4">
                <input onChange={onInputChange} name="thumbnail" type="url" id="form3Example3" className="form-control"/>
                <label className="form-label" htmlFor="form3Example3">URL IMG</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">Add Product</button>
        </form>
    )
}