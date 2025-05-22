import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
  requiredRole?: string;
};

export const ProtectedRoute = ({
  children,
  requiredRole,
}: ProtectedRouteProps) => {
  const { loading, isAuthenticated, user } = useAuth();

  if (loading) return <div className="">Loading</div>;

  if (!isAuthenticated) return <Navigate to="/login" />;

  //check role
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};
