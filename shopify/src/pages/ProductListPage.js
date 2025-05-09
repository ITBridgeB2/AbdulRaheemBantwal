import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Watch',
        price: 2500,
        image: 'https://th.bing.com/th/id/OIP.hlhC0L07E6Zfiek0L_kcAAHaFj?rs=1&pid=ImgDetMain',
      },
      {
        id: 2,
        name: 'Perfume',
        price: 1500,
        image: 'https://th.bing.com/th/id/OIP.IN4DaM8c_xXntVNOcesl7gHaE7?rs=1&pid=ImgDetMain',
      },
    ];

    setProducts(mockProducts);
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setQuantity(1); // Reset quantity after adding to cart
  };

  const handleProceedToCart = () => {
    if (cart.length > 0) {
      navigate('/cart', { state: { cart } });
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Products</h2>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <h3 style={styles.productName}>
              {product.name} - ₹{product.price}
            </h3>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={styles.quantityInput}
            />
            <button
              onClick={() => addToCart(product)}
              style={styles.addToCartButton}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleProceedToCart} style={styles.proceedButton}>
        Go to Cart
      </button>
    </div>
  );
}

  
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    color: 'red',
    marginBottom: '20px',
    
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
  selectButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  selectedContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  selectedTitle: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  quantityInput: {
    padding: '8px',
    width: '60px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  proceedButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  
  
  addToCartButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  
  }
};

export default ProductListPage;