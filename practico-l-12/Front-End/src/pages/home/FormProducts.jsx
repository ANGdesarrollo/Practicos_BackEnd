import React from 'react';
import { useContext } from "react";
import { SocketContext } from "../../context/socket-context";


export const FormProducts = ( { isLogged, logOut } ) => {

    const { onInputChange, sendProduct } = useContext( SocketContext );

    return (
        <>
            {isLogged.status ? <div className="w-100 d-flex justify-content-center align-items-center">
                <div><h1>¡ Welcome {isLogged.user} !</h1> </div>
                <div className="m-4"><button onClick={logOut} className="btn btn-primary">Log out</button></div>
            </div> : <div className="w-100 d-flex justify-content-center align-items-center">
                <div><h1>¡ Goodbye !</h1> </div>
            </div> }
            <form className="container p-4" id="js-form" onSubmit={ sendProduct }>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input name="product" onChange={ onInputChange } type="text" id="form3Example1"
                                   className="form-control"/>
                            <label className="form-label" htmlFor="form3Example1">Product Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input onChange={ onInputChange } name="price" type="number" id="form3Example2"
                                   className="form-control"/>
                            <label className="form-label" htmlFor="form3Example2">Price</label>
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <input onChange={ onInputChange } name="thumbnail" type="url" id="form3Example3"
                           className="form-control"/>
                    <label className="form-label" htmlFor="form3Example3">URL IMG</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Add Product</button>
            </form>
        </>
    )
}
