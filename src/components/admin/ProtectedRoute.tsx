import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading admin...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}
