import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/actions/productActions";
import { ProductComponent } from "./ProductComponent";

export const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
            console.log("Err", err)
        });
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
      fetchProducts()
    }, [])
    
    console.log(products);

  return (
    <div className="ui grid container" style={{paddingTop: '4rem'}}>
        <ProductComponent />
    </div>
  )
}
