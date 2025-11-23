import React, { useEffect, useState } from 'react';
import ProductGridWithDetails from '../ProductGridWithDetails/ProductGridWithDetails';
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("stoneData.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
         <ProductGridWithDetails products={products} />
    );
};

export default Products;