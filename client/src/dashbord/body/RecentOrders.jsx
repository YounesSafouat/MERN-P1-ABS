import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function RecentOrders() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/api/class");
        setClasses(await response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  },[]);

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2>Recent Orders</h2>
        <a href="#" className="btn">
          View All
        </a>
      </div>

      <table>
        <thead>
          <tr>
            <td>class Name</td>
            <td>class quote</td>
            <td>coach</td>
            <td>operation</td>
          </tr>
        </thead>

        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td>{classItem.className}</td>
              <td>{classItem.classQuote}</td>
              <td>{classItem.coach.username}</td>
              <td>
               <a href="" style={{textDecoration : 'none'}}><span className="status delivered">visite</span></a> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
