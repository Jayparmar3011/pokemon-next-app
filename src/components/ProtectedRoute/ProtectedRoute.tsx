"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const router = useRouter();

  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    if (!token) {
      router.push("/login");
    } else {
      setIsAllowed(true);
    }
  }, [router]);

  if (!isAllowed) {
    return null;
  }

  return <>{children}</>;
}
