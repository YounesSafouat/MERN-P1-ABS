import axios from "axios";
import { useEffect, useState } from "react";

export default function RecentCustomers() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/api/trainee");
        setStudent(await response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  },[]);
  console.log('student',student);
  return (
    <div className="recentCustomers">
      <div className="cardHeader">
        <h2>Recent Customers</h2>
      </div>

      <table>
      {student.map((studentItem) => (
        <tr key={studentItem._id}>
          <td width="60px">
            <div className="imgBx">
              <img src={`/uploads/${studentItem.profilePicture}`} alt="" />
            </div>
          </td>
          <td>
            <h4>
            {studentItem.username} <br /> <span>{studentItem.email}</span>
            </h4>
          </td>
        </tr>
        ))}
       
      </table>
    </div>
  );
}
