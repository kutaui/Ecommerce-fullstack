"use client"
import Products from "../../../products"
import {useParams, useRouter} from "@node_modules/next/navigation";

const ProductsPage = () => {
    const router = useRouter()
    const {id} = useParams()
    const products = Products;
    const product = products.find((p) => p.id === Number(id))


    console.log(product)

    return <>
        <h1>hello</h1>
        {product && <p>{product.title}</p>}
    </>

        ;
}

export default ProductsPage
