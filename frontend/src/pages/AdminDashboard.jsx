// import { useEffect, useState } from "react";
// import API from "../services/api";

// function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [doctors, setDoctors] = useState([]);
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [u, d, a] = await Promise.all([
//           API.get("/admin/users"),
//           API.get("/admin/doctors"),
//           API.get("/admin/appointments"),
//         ]);
//         setUsers(u.data);
//         setDoctors(d.data);
//         setAppointments(a.data);
//       } catch (err) {
//         console.error("Admin fetch failed", err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto">
//       {/* Header */}
//       <div className="flex items-center gap-2 mb-6">
//         <img src="public/MannMitra.png" alt="Logo" className="w-8 h-8" />
//         <h2 className="text-2xl font-bold text-blue-700">Admin Dashboard</h2>
//       </div>

//       {/* Users Section */}
//       <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
//         <h3 className="text-lg font-semibold text-green-600 mb-4">Users</h3>
//         <table className="w-full border-collapse text-sm">
//           <thead>
//             <tr className="bg-green-50">
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Email</th>
//               <th className="p-2 border">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((u, i) => (
//               <tr key={i} className="hover:bg-gray-50">
//                 <td className="p-2 border">{u.name}</td>
//                 <td className="p-2 border">{u.email}</td>
//                 <td className="p-2 border capitalize">{u.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Doctors Section */}
//       <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
//         <h3 className="text-lg font-semibold text-purple-600 mb-4">Doctors</h3>
//         <table className="w-full border-collapse text-sm">
//           <thead>
//             <tr className="bg-purple-50">
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Specialization</th>
//               <th className="p-2 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {doctors.map((d, i) => (
//               <tr key={i} className="hover:bg-gray-50">
//                 <td className="p-2 border">{d.name}</td>
//                 <td className="p-2 border">{d.specialization}</td>
//                 <td className="p-2 border">
//                   <span
//                     className={`px-2 py-1 rounded-lg text-xs font-semibold ${
//                       d.approved
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {d.approved ? "Approved" : "Pending"}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Appointments Section */}
//       <div className="bg-white rounded-2xl shadow-md p-6">
//         <h3 className="text-lg font-semibold text-blue-600 mb-4">Appointments</h3>
//         <table className="w-full border-collapse text-sm">
//           <thead>
//             <tr className="bg-blue-50">
//               <th className="p-2 border">Patient</th>
//               <th className="p-2 border">Doctor</th>
//               <th className="p-2 border">Date</th>
//               <th className="p-2 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((a, i) => (
//               <tr key={i} className="hover:bg-gray-50">
//                 <td className="p-2 border">{a.patientName}</td>
//                 <td className="p-2 border">{a.doctorName}</td>
//                 <td className="p-2 border">{new Date(a.date).toLocaleString()}</td>
//                 <td className="p-2 border">
//                   <span
//                     className={`px-2 py-1 rounded-lg text-xs font-semibold ${
//                       a.status === "completed"
//                         ? "bg-green-100 text-green-700"
//                         : a.status === "pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {a.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [trustedContacts, setTrustedContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [s, m, a, c] = await Promise.all([
          API.get("/admin/students"),
          API.get("/admin/mentors"),
          API.get("/admin/appointments"),
          API.get("/admin/trusted-contacts"),
        ]);
        setStudents(s.data);
        setMentors(m.data);
        setAppointments(a.data);
        setTrustedContacts(c.data);
      } catch (err) {
        console.error("Admin fetch failed", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <img src="/MannMitra.png" alt="Logo" className="w-10 h-10" />
        <h2 className="text-3xl font-bold text-blue-700">Admin Dashboard</h2>
      </div>

      {/* Students Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-green-600 mb-4">Students</h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-green-50">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Performance</th>
              <th className="p-2 border">Mentor</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-2 border">{s.name}</td>
                <td className="p-2 border">{s.email}</td>
                <td className="p-2 border">{s.latestScore || "N/A"} ({s.severity || "-"})</td>
                <td className="p-2 border">{s.mentorName || "Not Assigned"}</td>
                <td className="p-2 border space-x-2">
                  <Link
                    to={`/admin/student/${s._id}`}
                    className="text-blue-600 underline"
                  >
                    View
                  </Link>
                  <button className="bg-purple-500 text-white px-2 py-1 rounded">
                    Assign Mentor
                  </button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    Schedule Appointment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trusted Contacts Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-purple-600 mb-4">
          Trusted Contacts (Admin-managed)
        </h3>
        <ul className="space-y-2">
          {trustedContacts.map((c, i) => (
            <li key={i} className="p-3 border rounded-md flex justify-between">
              <span>{c.name} ({c.role}) - {c.phone}</span>
              <button className="text-red-600">Remove</button>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-green-600 text-white px-3 py-1 rounded">
          + Add Contact
        </button>
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Appointments</h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-2 border">Student</th>
              <th className="p-2 border">Mentor</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-2 border">{a.studentName}</td>
                <td className="p-2 border">{a.mentorName}</td>
                <td className="p-2 border">{new Date(a.date).toLocaleString()}</td>
                <td className="p-2 border">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
