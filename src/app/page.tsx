"use client";
import { useEffect, useState } from "react";
import Home from "./home/page";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Home />
    </>
  );
}
