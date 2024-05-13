import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

// const OrderStatusDetail = ({ order }: Props) => {
const OrderStatusDetail = ({ order }: Props) => {
  // Check if totalAmount is a valid number, default to 0 if not
  const totalAmount = Number.isFinite(order.totalAmount) ? order.totalAmount : 0;
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Your Order</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>₹{(totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;