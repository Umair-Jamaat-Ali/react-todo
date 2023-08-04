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

    const [addTitle, setAddTitle] = useState('');
    const [addCategory, setAddCategory] = useState('');
    const [addDescription, setAddDescription] = useState('');
    const [addPrice, setAddPrice] = useState();
    const [addImageURL, setAddImageURL] = useState('');

    const submitHandler = () => {
        // console.log('title', title);
        // console.log('category', category);
        // console.log('description', description);
        // console.log('price', price);
        // console.log('imageURL', imageURL);


        let newItemAdd = {
            id: Math.round(Math.random() * 1000),
            title: addTitle,
            price: addPrice,
            description: addDescription,
            category: addCategory,
            image: addImageURL,
        }

        // console.log("newProduct", newItemAdd);
        setProducts([newItemAdd, ...products]);
        setModelVisible(false)
    }


    const [editModel, setEditModel] = useState(false);

    const [editId, setEditId] = useState("");
    const [editTital, setEditTital] = useState("");
    const [editCategory, setEditCategory] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editImageURL, setEditImageURL] = useState("");



    const onEditHandler = () => {

        const itemIndex = products.findIndex((item) => item.id === editId);

        if (itemIndex !== -1) {
            // Create a copy of the array
            const updatedProducts = [...products];


            updatedProducts[itemIndex] = {
                id: editId,
                title: editTital,
                price: editPrice,
                description: editDescription,
                category: editCategory,
                image: editImageURL,
            }
            }

            setProducts([products]);
            setEditModel(false)
        
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
                        <button type="button" className="btn btn-success btn-lg" onClick={() => setModelVisible(true)}>Add More Products</button>
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
                                <button className="btn btn-outline-info" onClick={() => setEditModel(true)} >Edit</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal
                isOpen={modelVisible}
                onAfterOpen={() => null}
                onRequestClose={() => setModelVisible(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row">
                    <div className="col-md-10">
                        <h4 >Add New Product</h4>
                    </div>
                    <div className="col-md-2">
                        <button type='button' className='btn-close' aria-label='Close' onClick={() => setEditModel(false)} ></button>
                    </div>
                </div>
                <div className='mb-3'>
                    <label for="" className='form-label' >Title:</label>
                    <input type="text" className='form-control' onChange={(e)=>setAddTitle(e.target.value)} id='' placeholder='Enter Title' />
                </div>

                <div className='mb-3'>
                    <label for="" className='form-label' >Category:</label>
                    <input type="text" className='form-control' onChange={(e)=>setAddCategory(e.target.value)} id='' placeholder='Enter Category' />
                </div>

                <div className='mb-3'>
                    <label for="" className='form-label' >Description:</label>
                    <input type="text" className='form-control' onChange={(e)=>setAddDescription(e.target.value)} id='' placeholder='Enter Description' />
                </div>

                <div className='mb-3'>
                    <label for="" className='form-label' >Price:</label>
                    <input type="number" className='form-control' onChange={(e)=>setAddPrice(e.target.value)} id='' placeholder='Enter Price' />
                </div>

                <div className='mb-3'>
                    <label for="" className='form-label' >Image:</label>
                    <input type="text" className='form-control' onChange={(e)=>setAddImageURL(e.target.value)} id='' placeholder='Enter Image URL' />
                </div>


                <button style={{ margin: "30px" }} className="btn btn-success" onClick={submitHandler} >Submit</button>
            </Modal>
            {/* Edit Model */}
            <Modal
                isOpen={editModel}
                onAfterOpen={() => null}
                onRequestClose={() => setEditModel(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="row">
                    <div className="col-md-10">
                        <h4 >Edit The Product</h4>
                    </div>
                    <div className="col-md-2">
                        <button type='button' className='btn-close' aria-label='Close' onClick={() => setModelVisible(false)} ></button>
                    </div>
                </div>
                <form>
                    <div className='mb-3'>
                        <label for="" className='form-label' >Id:</label>
                        <input type="number" className='form-control' onChange={(e) => setEditId(e.target.value)} id='' placeholder='Enter Id' />
                    </div>
                    <div className='mb-3'>
                        <label for="" className='form-label' >Title:</label>
                        <input type="text" className='form-control' onChange={(e) => setEditTital(e.target.value)} id='' placeholder='Enter Title' />
                    </div>

                    <div className='mb-3'>
                        <label for="" className='form-label' >Category:</label>
                        <input type="text" className='form-control' onChange={(e) => setEditCategory(e.target.value)} id='' placeholder='Enter Category' />
                    </div>

                    <div className='mb-3'>
                        <label for="" className='form-label' >Description:</label>
                        <input type="text" className='form-control' onChange={(e) => setEditDescription(e.target.value)} id='' placeholder='Enter Description' />
                    </div>

                    <div className='mb-3'>
                        <label for="" className='form-label' >Price:</label>
                        <input type="number" className='form-control' onChange={(e) => setEditPrice(e.target.value)} id='' placeholder='Enter Price' />
                    </div>

                    <div className='mb-3'>
                        <label for="" className='form-label' >Image:</label>
                        <input type="text" className='form-control' onChange={(e) => setEditImageURL(e.target.value)} id='' placeholder='Enter Image' />
                    </div>
                    <button type="button" class="btn btn-primary" style={{ margin: "30px" }} onClick={onEditHandler}>Submit</button>
                </form>
            </Modal>

        </div>
    )
}

export default Product;
