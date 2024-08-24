import { useState, useEffect } from "react";
export const useFetch = (url, isList=true) => {
    const [productData, setProductData] = useState(isList ? [] : null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchProducts = async() => {
            try{
                const response = await fetch(url);
                const responseData = await response.json();
                setProductData(isList ? responseData.products : responseData);
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchProducts();
    },[url])

    return {productData, error, loading}
}