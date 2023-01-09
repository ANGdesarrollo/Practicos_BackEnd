import {FormProducts} from "./FormProducts";
import {ProductsListed} from "./ProductsListed";
import {Chat} from "./Chat.jsx";
import {FormChat} from "./FormChat";

export const HomeContainer = () => {
    return (
        <>
            <FormProducts/>
            <ProductsListed/>
            <Chat/>
            <FormChat/>
        </>
    )
}
