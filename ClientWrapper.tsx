// app/ClientWrapper.tsx
'use client';

import { usePathname } from "next/navigation";
import Bar from "./app/Bar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideBar = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!hideBar && <Bar />}
      {children}
    </>
  );
}
