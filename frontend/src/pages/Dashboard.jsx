// import { useEffect, useState } from "react";
// import { getHistory } from "../services/assessmentService";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import MoodTracker from "../components/MoodTracker";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// function Dashboard() {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getHistory();
//         setHistory(data);
//       } catch (err) {
//         console.error("Failed to load history", err);
//       }
//     };
//     fetchData();
//   }, []);

//   const chartData = {
//     labels: history.map((h) => new Date(h.createdAt).toLocaleDateString()),
//     datasets: [
//       {
//         label: "PHQ-9 Score",
//         data: history.map((h) => h.score),
//         borderColor: "rgb(74,144,226)",
//         backgroundColor: "rgba(74,144,226,0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* Header with logo */}
//       <div className="flex items-center gap-2 mb-6">
//         <img src="public/MannMitra.png" alt="Logo" className="w-8 h-8" />
//         <h2 className="text-2xl font-bold text-blue-700">Your Mental Health Dashboard</h2>
//       </div>

//       {/* Latest Result */}
//       {history.length > 0 ? (
//         <>
//           <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
//             <h3 className="text-lg font-semibold text-green-600 mb-2">Latest Result</h3>
//             <p>
//               Score: <strong>{history[0].score}</strong> ({history[0].severity})
//             </p>
//             <p className="text-gray-500 text-sm">Taken on {new Date(history[0].createdAt).toLocaleString()}</p>
//           </div>

//           {/* Progress Chart */}
//           <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
//             <h3 className="text-lg font-semibold text-purple-600 mb-4">Progress Over Time</h3>
//             <Line data={chartData} />
//           </div>

//           {/* History Table */}
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-lg font-semibold text-blue-600 mb-4">Assessment History</h3>
//             <table className="w-full border-collapse text-sm">
//               <thead>
//                 <tr className="bg-blue-50">
//                   <th className="p-2 border">Date</th>
//                   <th className="p-2 border">Score</th>
//                   <th className="p-2 border">Severity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {history.map((h, i) => (
//                   <tr key={i} className="hover:bg-gray-50">
//                     <td className="p-2 border">{new Date(h.createdAt).toLocaleString()}</td>
//                     <td className="p-2 border">{h.score}</td>
//                     <td className="p-2 border">{h.severity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       ) : (
//         <p className="text-center text-gray-600 mt-10">
//           No assessments yet. Take one to see your progress 🌱
//         </p>
//       )}
//     </div>
//   );
// }

// export default Dashboard;

import { useEffect, useState } from "react";
import { getHistory } from "../services/assessmentService";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import MoodTracker from "../components/MoodTracker";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHistory();
        setHistory(data);
      } catch (err) {
        console.error("Failed to load history", err);
      }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: history.map((h) => new Date(h.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: "PHQ-9 Score",
        data: history.map((h) => h.score),
        borderColor: "#4a90e2",
        backgroundColor: "rgba(74,144,226,0.15)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/MannMitra.png" alt="Logo" className="w-10 h-10" />
        <h2 className="text-3xl font-bold text-blue-700">Your Wellness Dashboard 🌿</h2>
      </div>

      {/* Mood Tracker Section */}
      <MoodTracker />

      {/* Assessment Section */}
      {history.length > 0 ? (
        <>
          {/* Latest Result */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-3">Latest PHQ-9 Result</h3>
            <p className="text-gray-700 text-lg">
              Score: <strong>{history[0].score}</strong>{" "}
              <span className="text-sm text-gray-500">({history[0].severity})</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Taken on {new Date(history[0].createdAt).toLocaleString()}
            </p>
          </div>

          {/* Progress Chart */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Your Progress Over Time</h3>
            <Line data={chartData} />
          </div>

          {/* History Table */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Past Assessments
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-50 text-gray-700">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Score</th>
                    <th className="p-2 border">Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-2 border">{new Date(h.createdAt).toLocaleString()}</td>
                      <td className="p-2 border">{h.score}</td>
                      <td className="p-2 border capitalize">{h.severity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center bg-white rounded-2xl shadow-md p-8 text-gray-600">
          <p>No assessments yet. Take your first one to begin your journey 🌱</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
