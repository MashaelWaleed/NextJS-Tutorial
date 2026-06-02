"use client";
import { useRouter } from "next/navigation";
export default function orderProduct() {
  const router = useRouter();
  const handleOrder = () => {
    alert("Order placed successfully!");
    router.replace("/");
    // instead of push we can also use replace to prevent going back to the order page
    //or back to the previous page after placing the order
  };
  return (
    <div>
      <h1>Order Product</h1>
      <p>This is the order product page.</p>
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
}
