import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalCost } = location.state || { cart: [], totalCost: 0 };

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/payment', {
        cart,
        totalCost,
      });

      if (response.data.success) {
        navigate('/order-confirmation', { state: { cart, totalCost } });
      } else {
        alert('Payment failed!');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Payment server error!');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Payment Page</h2>
      <div style={styles.cartDetails}>
        {cart.map((product) => (
          <div key={product.id} style={styles.cartItem}>
            <p>{product.name} - ₹{product.price} x {product.quantity}</p>
          </div>
        ))}
      </div>
      <h3 style={styles.totalCost}>Total Cost: ₹{totalCost}</h3>
      <button onClick={handlePayment} style={styles.button}>
        Confirm Payment
      </button>
    </div>
  );
}


const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


export default PaymentPage;