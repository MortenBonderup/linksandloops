import { useParams } from "react-router-dom";

export default function DetailPage() {
    const products = [
        { id: '1', name: 'Keyboard', description: 'High performance keyboard', price: '$300' },
        { id: '2', name: 'Laptop', description: 'Powerful laptop', price: '$1500' },
        { id: '3', name: 'Screen', description: '27inch computerscreen', price: '$250' },
        // Add more products as needed
    ];
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}