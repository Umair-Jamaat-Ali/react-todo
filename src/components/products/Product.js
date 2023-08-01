import React, { useState } from 'react';
import data from './Data';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%'
    },
};






        function Product() {


    const [products, setProducts] = useState(data);

    const [modelVisible, setModelVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [imageURL, setImageURL] = useState('');

    const submitHandler =() => {
        // console.log('title', title);
        // console.log('category', category);
        // console.log('description', description);
        // console.log('price', price);
        // console.log('imageURL', imageURL);


        let newItemAdd = {
        id: Math.round(Math.random() * 10),
        title: title,
        price: price,
        description: description,
        category: category,
        image: imageURL,
        }

        // console.log("newProduct", newItemAdd);
        setProducts(newItemAdd, ...products);
    }

    const onDeleteHandler = (id) => {
        const filteredProducts = products.filter((item) => item.id !== id)
        setProducts(filteredProducts);

    }

    console.log(products);
    return (
        <div>
            <div className="container " style={{ margin: "15px" }} >
                <div className="row">
                    <div className="col" style={{ display: "flex", justifyContent: "space-around" }}>
                        <h1>Lists Of Products</h1>
                        <button type="button" className="btn btn-success btn-lg" onClick={()=>setModelVisible(true)}>Add More Products</button>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th style={{ width: "40px" }}>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} alt="" style={{ width: "40px" }} /></td>
                                <button className="btn btn-outline-danger" onClick={() => onDeleteHandler(item.id)}>Delete</button>
                                <button className="btn btn-outline-info">Edit</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal
                isOpen={modelVisible}
                onAfterOpen={()=>null}
                onRequestClose={()=>setModelVisible(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row">
                    <div className="col-md-10">
                    <h4 >Add New Product</h4>
                    </div>
                    <div className="col-md-2">
                    <button type='button' className='btn-close' aria-label='Close' onClick={()=>setModelVisible(false)} ></button>
                    </div>
                </div>
                    <div className='mb-3'>
                    <label for="" className='form-label' >Title:</label>
                    <input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} id='' placeholder='Enter Title' />
                    </div>

                    <div className='mb-3'>
                    <label for="" className='form-label' >Category:</label>
                    <input type="text" className='form-control' onChange={(e)=>setCategory(e.target.value)} id='' placeholder='Enter Category' />
                    </div>

                    <div className='mb-3'>
                    <label for="" className='form-label' >Description:</label>
                    <input type="text" className='form-control' onChange={(e)=>setDescription(e.target.value)} id='' placeholder='Enter Description' />
                    </div>

                    <div className='mb-3'>
                    <label for="" className='form-label' >Price:</label>
                    <input type="number" className='form-control' onChange={(e)=>setPrice(e.target.value)} id='' placeholder='Enter Price' />
                    </div>

                    <div className='mb-3'>
                    <label for="" className='form-label' >Image:</label>
                    <input type="text" className='form-control' onChange={(e)=>setImageURL(e.target.value)} id='' placeholder='Enter Image URL' />
                    </div>


                    <button style={{margin: "30px"}} className="btn btn-success" onClick={submitHandler} >Submit</button>
            </Modal>



        </div>
    )
}

export default Product;
