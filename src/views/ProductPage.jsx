import { Link } from "react-router-dom";

function ProductList() {
    const products = [
        { id: '1', name: 'Keyboard' },
        { id: '2', name: 'Laptop' },
        { id: '3', name: 'Screen' },
        // Add more products as needed
    ];

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
