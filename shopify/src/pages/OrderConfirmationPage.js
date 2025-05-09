import { useLocation } from 'react-router-dom';

function OrderConfirmationPage() {
  const location = useLocation();

  const { selectedProduct, quantity, totalPrice } = location.state;

  return (
    <div>

      <h2>Order Confirmed!</h2>

    
      <p>Product: {selectedProduct.name}</p>

      <p>Quantity: {quantity}</p>

      <p>Total Paid: ₹ {totalPrice}</p>

      <p>Thank you for shopping with us!</p>

    </div>
  );
}

export default OrderConfirmationPage
