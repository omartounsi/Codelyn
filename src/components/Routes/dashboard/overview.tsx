import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { LoadingSpinner } from "../../tools/loadingspinner";
import { CreateUserModal } from "./createuser";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

type DashboardStats = {
  userCount: number;
  studentsCount: number;
  adminsCount: number;
  viewersCount: number;
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

type SystemHealth = {
  uptime: number;
  memoryUsage: {
    used: number;
    total: number;
    percentage: number;
  };
  cpu: {
    loadAverage: number;
    coreCount: number;
  };
  platform: string;
  nodeVersion: string;
  database: {
    status: "connected" | "disconnected";
    responseTime: number;
  };
};

type DashboardData = {
  stats: DashboardStats;
  recentUsers: RecentUser[];
  recentActivities: RecentActivity[];
  systemHealth: SystemHealth;
};

export const Overview = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const { token } = useAuth();

  //FETCHING
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
      } catch (err: any) {
        console.error("Error fetching dashboard data:", err);
        setError(err);
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [token]);

  //REFRESH
  const refresh = async () => {
    try {
      const response = await axios.get("/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDashboardData(response.data);
    } catch (err) {
      console.error("error refreshing:", err);
    }
  };

  //LOADING SPINNER
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
  // const userData = {
  //   labels: ["Students", "Viewers", "Admins"],
  //   datasets: [
  //     {
  //       data: [65, 30, 5],
  //       backgroundColor: ["#4f46e5", "#64748b", "#ef4444"],
  //       borderWidth: 0,
  //     },
  //   ],
  // };
  const data = dashboardData
    ? [
        {
          id: "students",
          label: "Students",
          value: dashboardData.stats.studentsCount,
          color: "#e37c07", // green
        },
        {
          id: "admins",
          label: "Admins",
          value: dashboardData.stats.adminsCount,
          color: "#4F1C51",
        },
        {
          id: "viewers",
          label: "Viewers",
          value: dashboardData.stats.viewersCount,
          color: "#210F37", // blue
        },
      ].filter((item) => item.value > 0)
    : [];
  // DEBUGGING
  console.log("Dashboard data:", dashboardData);
  console.log("Pie chart data:", data);
  console.log("Students count:", dashboardData?.stats.studentsCount);
  console.log("Admins count:", dashboardData?.stats.adminsCount);
  console.log("Viewers count:", dashboardData?.stats.viewersCount);
  const systemStatsData = dashboardData
    ? [
        {
          metric: "Memory",
          value: dashboardData.systemHealth.memoryUsage.percentage,
          color:
            dashboardData.systemHealth.memoryUsage.percentage > 80
              ? "#ef4444"
              : dashboardData.systemHealth.memoryUsage.percentage > 60
                ? "#f59e0b"
                : "#10b981",
          unit: `${Math.round(dashboardData.systemHealth.memoryUsage.used / 1024 / 1024)}MB`,
        },
        {
          metric: "CPU load",
          value: Math.min(
            dashboardData.systemHealth.cpu.loadAverage * 100,
            100
          ),
          color:
            dashboardData.systemHealth.cpu.loadAverage > 0.8
              ? "#ef4444"
              : dashboardData.systemHealth.cpu.loadAverage > 0.6
                ? "#f59e0b"
                : "#10b981",
          unit: `${dashboardData.systemHealth.cpu.loadAverage.toFixed(2)}`,
        },
        {
          metric: "Response",
          value: Math.min(
            dashboardData.systemHealth.database.responseTime / 10,
            100
          ),
          color:
            dashboardData.systemHealth.database.responseTime > 500
              ? "#ef4444"
              : dashboardData.systemHealth.database.responseTime > 200
                ? "#f59e0b"
                : "#10b981",
          unit: `${dashboardData.systemHealth.database.responseTime}ms`,
        },
      ]
    : [];
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 p-10 font-[Geist]">
      <div
        style={{
          backdropFilter: "blur(2px)",
          backgroundColor: "",
        }}
        className="flex flex-col row-span-1 p-6 border shadow-md shadow-neutral-900 rounded-xl border-neutral-800 bg-neutral-700/20"
      >
        <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
          Total Users:{" "}
        </h3>
        <div className="flex items-center gap-2 my-auto">
          <p>Labels:</p>
          <div className="w-3 h-3 bg-red-400"></div>
        </div>

        <div className="w-full mt-auto border shadow-md h-46 border-neutral-600 rounded-xl bg-neutral-700/20 shadow-neutral-900">
          <MyPie data={data} />
        </div>
      </div>
      <div className="row-span-1 p-6 border rounded-xl border-neutral-800 bg-neutral-700/20">
        <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-3">
          Course Stats:
        </h3>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-400">Total Courses:</span>
            <span className="text-neutral-200">
              {dashboardData?.stats.courseCount}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Total Lessons:</span>
            <span className="text-neutral-200">
              {dashboardData?.stats.lessonsCount}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Avg. Lessons/Course:</span>
            <span className="text-neutral-200">
              {Math.round(
                (dashboardData?.stats.lessonsCount || 0) /
                  (dashboardData?.stats.courseCount || 1)
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1 p-6 overflow-auto border shadow-md rounded-xl border-neutral-800 bg-zinc-700/20 shadow-neutral-900">
        <div className="flex w-full h-full ">
          {/* LEFT */}
          <div className="flex flex-col w-[50%] ">
            <h3 className="text-3xl mb-4 font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
              System Health:
            </h3>
            <p className="text-neutral-400">
              Server Status:{" "}
              {dashboardData?.systemHealth.database.status === "connected" ? (
                <span className="text-lime-600">Connected</span>
              ) : (
                <span className="text-yellow-600">Disconnected</span>
              )}
            </p>
            <p className="text-neutral-400">
              Database Status:{" "}
              {dashboardData?.systemHealth.database.status === "connected" ? (
                <span className="text-lime-600">Connected</span>
              ) : (
                <span className="text-yellow-600">Disconnected</span>
              )}
            </p>
            <p className="text-neutral-400">
              Uptime:{" "}
              <span className="text-neutral-200">
                {Math.floor(dashboardData?.systemHealth.uptime || 0)}s
              </span>
            </p>
            <p className="text-neutral-400">
              CPU Load average:{" "}
              <span className="text-neutral-200">
                {dashboardData?.systemHealth.cpu.loadAverage}
              </span>
            </p>
            <p className="text-neutral-400">
              Platform:{" "}
              <span className="text-neutral-200">
                {dashboardData?.systemHealth.platform}
              </span>
            </p>
            <p className="text-neutral-400">
              Version:{" "}
              <span className="text-neutral-200">
                {dashboardData?.systemHealth.nodeVersion}
              </span>
            </p>
          </div>
          {/* RIGHT */}
          <div className="w-[50%] h-auto p-1 border  bg-zinc-900/20 border-neutral-700">
            <MyBar data={systemStatsData} />
          </div>
        </div>
      </div>
      {/* NEW ACCOUNTS */}
      <div className="col-span-3 row-span-1 p-6 border shadow-md rounded-xl bg-zinc-700/20 border-neutral-800 shadow-neutral-900">
        <h3 className="mb-3 text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
          Recent Signups
        </h3>
        <div className="flex flex-col gap-1">
          {dashboardData?.recentUsers.map((user) => (
            <div className="grid h-10 grid-cols-3 px-3 overflow-auto text-sm transition-colors border rounded-lg border-neutral-700 text-neutral-400 hover:bg-neutral-300 hover:text-neutral-800">
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
      <div className="p-6 border shadow-md rounded-xl bg-zinc-700/20 border-neutral-800 shadow-neutral-900 ">
        <h3 className="mb-4 text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200">
          Quick Actions:
        </h3>

        <div className="flex flex-col items-center justify-center w-full text-neutral-400">
          <button className="px-4 py-2 text-red-400 transition-colors border rounded-full cursor-pointer text-md hover:bg-neutral-100">
            Restart Services
          </button>
          <button className="px-4 py-2 transition-colors border border-transparent rounded-full cursor-pointer text-md hover:border-neutral-700 hover:text-neutral-200 hover:bg-neutral-800">
            Maintenance Mode
          </button>
          <button className="px-4 py-2 transition-colors border border-transparent rounded-full cursor-pointer text-md hover:border-neutral-700 hover:text-neutral-200 hover:bg-neutral-800">
            Send test E-mail
          </button>
          <button className="px-4 py-2 transition-colors border border-transparent rounded-full cursor-pointer text-md hover:border-neutral-700 hover:text-neutral-200 hover:bg-neutral-800">
            Create announcement
          </button>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="px-4 py-2 transition-colors border border-transparent rounded-full cursor-pointer text-lime-300 text-md hover:border-neutral-700 hover:text-neutral-900 hover:bg-neutral-300"
          >
            Create new user
          </button>
        </div>
      </div>
      <CreateUserModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onUserCreated={refresh}
      />
    </div>
  );
};

type PieData = {
  id: string | number;
  label?: string;
  value: number;
  color?: string;
};

const MyPie = ({ data }: { data: PieData[] }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    innerRadius={0}
    padAngle={0}
    cornerRadius={1}
    activeOuterRadiusOffset={8}
    colors={{ datum: "data.color" }}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["brighter", 2.2]] }}
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

// Complete BarData type
type BarData = {
  metric: string;
  value: number;
  color: string;
  unit?: string;
};

// Updated MyBar component for system stats
const MyBar = ({ data }: { data: BarData[] }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="metric"
      margin={{ top: 20, right: 30, bottom: 60, left: 30 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ datum: "data.color" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 10,
        tickPadding: 5,
        tickRotation: -45,
        legend: "",
        legendPosition: "middle",
        legendOffset: 50,
      }}
      axisLeft={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["brighter", 1.6]],
      }}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: "#e5e5e5",
              fontFamily: "Geist",
              fontSize: 12,
            },
          },
          legend: {
            text: {
              fill: "#e5e5e5",
              fontFamily: "Geist",
              fontSize: 14,
            },
          },
        },
        grid: {
          line: {
            stroke: "#374151",
            strokeWidth: 1,
          },
        },
        tooltip: {
          container: {
            background: "#333333",
            color: "#ffffff",
            fontSize: 12,
            fontFamily: "Geist",
          },
        },
      }}
      tooltip={({ data }) => (
        <div className="p-2 border rounded shadow-lg bg-zinc-800 border-neutral-600">
          <strong className="text-white">{data.metric}</strong>
          <br />
          <span className="text-neutral-300">
            {data.value}% {data.unit && `(${data.unit})`}
          </span>
        </div>
      )}
      animate={true}
    />
  );
};
