import {ItemProduct} from "./ItemProduct.jsx";
import {useContext} from "react";
import {SocketContext} from "../../context/socket-context";

export const ProductsListed = () => {

    const {data, isLoading, products, allProducts} = useContext(SocketContext);

    return (
        <div className="container">
            {isLoading ? <div>Loading</div> :
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Img</th>
                    </tr>
                    </thead>
                    <tbody id="js-allProducts">
                    {data.products.map((el, i) => {
                        return (
                            <ItemProduct key={i} fakerProducts={el}/>
                        )
                    })}
                    {allProducts.length > 0 && allProducts.map(el => {
                        return (
                            <ItemProduct fakerProducts={el}></ItemProduct>
                        )
                    })}
                    {products.map(el => {
                        return (
                            <ItemProduct fakerProducts={el}></ItemProduct>
                        )
                    })}
                    </tbody>
                </table>
            }
        </div>
    )
}
