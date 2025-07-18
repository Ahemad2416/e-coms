import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const ProductCarts = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                console.log("response:", response.data.products);
                setProduct(response.data.products);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, []);


    return (
        <div className="container my-4">
            <div className="row justify-content-center">

                {product.map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.thumbnail}
                                className="card-img-top"
                                alt={item.title}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text text-muted">
                                    {item.description}
                                </p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Category:</strong> {item.category}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Brand:</strong> {item.brand}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Price:</strong> ${item.price}
                                    </li>

                                    <li className="list-group-item">
                                        <strong>Stock:</strong> {item.stock}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Rating:</strong> {item.rating}
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-danger mt-auto">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default ProductCarts