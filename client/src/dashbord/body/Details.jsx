import RecentCustomers from "./RecentCustomers";
import RecentOrders from "./RecentOrders";

export default function Details() {
  return <div className="details">
    <RecentOrders/>
    <RecentCustomers />
  </div>;
}
