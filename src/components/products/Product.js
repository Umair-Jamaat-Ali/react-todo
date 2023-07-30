import React, {useState} from 'react';
import data from './Data';
function Product() {

    const [products, setProducts] = useState(data);

    const onDeleteHandler = (id) => {
        const filteredProducts = products.filter((item)=> item.id !== id)
        setProducts(filteredProducts);
       
    }

    console.log(products);
    return(
        <div>
            <div className="container " style={{margin: "15px"}} >  
                <div className="row">
                    <div className="col" style={{display: "flex", justifyContent: "space-around"}}>
                    <h1>Lists Of Products</h1>
                        <button type="button" class="btn btn-success btn-lg">Add More Products</button>
                    </div>
                </div>
            </div>
            <table class="table">
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th style={{width:"40px"}}>Description</th>
                <th>Price</th>
                <th>Image</th>
                </tr>
                </thead>

                <tbody>
                {products.map((item, index)=> {
                   return(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td><img src={item.image} alt=""  style={{width: "40px"}}/></td>
                    <button class="btn btn-outline-danger" onClick={()=> onDeleteHandler(item.id)}>Delete</button>
                    <button class="btn btn-outline-info">Edit</button>
                    </tr>
                    )
                })}
                 </tbody>
            </table>
        </div>
    )
}

export default Product;
