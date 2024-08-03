// app/components/ProtectedRoute.js

"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
