import { useLocation, useNavigate } from 'react-router-dom';

function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const totalCost = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { cart, totalCost } });
  };

  if (cart.length === 0) {
    return <h2>Your cart is empty!</h2>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cart</h2>
      <div style={styles.cartList}>
        {cart.map((product) => (
          <div key={product.id} style={styles.cartItem}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Subtotal: ₹{product.price * product.quantity}</p>
          </div>
        ))}
      </div>
      <h3 style={styles.totalCost}>Total Cost: ₹{totalCost}</h3>
      <button onClick={handleProceedToPayment} style={styles.paymentButton}>
        Proceed to Payment
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
      color: '#333',
      marginBottom: '20px',
    },
    cartList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '20px',
    },
    cartItem: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    totalCost: {
      textAlign: 'center',
      fontSize: '20px',
      color: '#333',
      marginBottom: '20px',
    },
    paymentButton: {
      display: 'block',
      margin: '0 auto',
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
export default CartPage;