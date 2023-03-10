import React, {useContext} from "react";

import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";

export const Productoslista = () => {

const value = useContext(DataContext)
const [productos] = value.productos

console.log(productos)


  return (
<>
<h1 className="tittle"> PRODUCTOS </h1>
<div className="productos">
    {
        productos.map(producto => (
<ProductoItem 
key={producto.id} 
id={producto.id}
title={producto.tittle}
price={producto.price}
image={producto.image}
category={producto.category}
cantidad={producto.cantidad}

/>

        ))
    }
    




    </div>

</>
  )
}
