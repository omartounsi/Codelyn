import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ResponsivePie } from "@nivo/pie";
import axios from "axios";
import { LoadingSpinner } from "../tools/loadingspinner";

const adminTabs = [
  { id: 1, name: "Overview" },
  { id: 2, name: "User Management" },
  { id: 3, name: "Course Management" },
  { id: 4, name: "Lesson Management" },
  { id: 5, name: "Project Management" },
  { id: 6, name: "Code Environment" },
  { id: 7, name: "Platform Settings" },
  { id: 8, name: "Feedback & Reports" },
  { id: 9, name: "Security Tools" },
  { id: 10, name: "Content Moderation" },
];

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const { user } = useAuth();
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="flex items-center justify-center w-full h-screen text-white bg-zinc-950 pt-14 "
    >
      <div className="w-[90%] h-[90%] border rounded-xl grid grid-cols-12 gap-1 border-neutral-800 p-2">
        {/* SELECTOR */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="flex flex-col items-center col-span-2 border border-neutral-700 rounded-tl-xl rounded-bl-xl bg-zinc-950/10"
        >
          <h1 className="flex items-center justify-center h-14 text-3xl font-bold leading-tight tracking-tighter w-[90%] my-4 rounded-full border-neutral-700 text-neutral-200">
            Dashboard
          </h1>
          <ul className="flex flex-col items-start gap-2 px-3 font-light">
            {adminTabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center w-auto px-4 py-2 rounded-full select-none  min-h-10  will-change-auto border border-transparent hover:border-neutral-800 hover:bg-neutral-900 transition-all  ${activeTab === tab.id ? "bg-neutral-200 text-neutral-900 font-medium hover:border-transparent hover:text-neutral-200" : ""}`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENT */}
        <div className="col-span-10 border border-neutral-700 rounded-tr-xl rounded-br-xl">
          {activeTab === 1 ? <Overview /> : <></>}
        </div>
      </div>
    </div>
  );
};

type DashboardStats = {
  userCount: number;
  courseCount: number;
  lessonsCount: number;
};

type RecentUser = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  createdAt: string;
};

type RecentActivity = {
  _id: string;
  user: string;
  email: string;
  type: string;
  details: any;
  timestamp: string;
};

type DashboardData = {
  stats: DashboardStats;
  recentUsers: RecentUser[];
  recentActivities: RecentActivity[];
};

const Overview = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDashboardData(response.data);
        console.log(dashboardData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="p-6 text-red-400 border border-red-800 bg-red-900/20 rounded-xl">
          <p className="text-xl">{error}</p>
          <p className="mt-2">
            Please check your network connection or server status.
          </p>
        </div>
      </div>
    );
  }
  const userData = {
    labels: ["Students", "Viewers", "Admins"],
    datasets: [
      {
        data: [65, 30, 5],
        backgroundColor: ["#4f46e5", "#64748b", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };
  const data = dashboardData
    ? [
        {
          id: "students",
          label: "Students",
          value: Math.floor(dashboardData.stats.userCount * 0.6),
          color: "#222831",
        },
        {
          id: "viewers",
          label: "Viewers",
          value: Math.floor(dashboardData.stats.userCount * 0.2),
          color: "#1a2c47",
        },
        {
          id: "admins",
          label: "Admins",
          value: Math.floor(dashboardData.stats.userCount * 0.2),
          color: "#141e2e",
        },
      ]
    : [];
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 p-10 font-[Geist]">
      <div className="flex flex-col row-span-1 p-6 border shadow-2xl rounded-xl bg-zinc-950 border-neutral-800">
        <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
          Total Users:{" "}
        </h3>
        <div className="flex items-center gap-2 my-auto">
          <p>Labels:</p>
          <div className="w-3 h-3 bg-red-400"></div>
        </div>

        <div className="w-full mt-auto border h-46 border-neutral-800 rounded-xl">
          <MyPie data={data} />
        </div>
      </div>
      <div className="row-span-1 p-6 border rounded-xl border-neutral-800 bg-zinc-950">
        <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
          Recent Activities:
        </h3>
      </div>
      <div className="col-span-2 row-span-1 border ">Some charts</div>
      {/* NEW ACCOUNTS */}
      <div className="col-span-3 row-span-1 p-6 border rounded-xl bg-zinc-950 border-neutral-800">
        <h3 className="mb-3 text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
          Recent Signups
        </h3>
        <div className="flex flex-col gap-1">
          {dashboardData?.recentUsers.map((user) => (
            <div className="grid h-10 grid-cols-3 px-3 overflow-auto text-sm transition-colors border rounded-lg border-neutral-900 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-400">
              <p className="flex items-center">
                {user.first_name} {user.last_name}
              </p>
              <p className="flex items-center">{user.email}</p>
              <p className="flex items-center justify-end">
                {new Date(user.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="border rounded-xl"></div>
    </div>
  );
};

type PieDatum = {
  id: string | number;
  label?: string;
  value: number;
  color?: string;
};

const MyPie = ({ data }: { data: PieDatum[] }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    innerRadius={0.01}
    padAngle={1}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ datum: "data.color" }}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 2.2]] }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#ffffff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["brighter", 4]] }}
    theme={{
      text: {
        fill: "#e5e5e5",
        fontFamily: "Geist",
        fontSize: "14px",
      },
      tooltip: {
        container: {
          background: "#333333",
          color: "#ffffff",
          fontSize: 12,
        },
      },
    }}
  />
);
