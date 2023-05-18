import ProductCard from "@src/ui/ProductCard";
import {useRouter} from "next/router";
import Link from "next/link";
import Products from "@src/products"

const ProductsPage = () => {
const products = Products
    return <>
        <div className="mt-20">
            <div className="w-[100%] flex justify-between flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} id={product.id} image={product.image} rating={product.rating.rate}
                                 price={product.price} title={product.title}/>
                ))}
            </div>
        </div>
    </>
        ;
}

export default ProductsPage


