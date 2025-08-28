"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark"); // Set a default if necessary
  }, []);

  return (
    <div {...theme}>
         Sanjay Rai <Button>Go</Button>
    </div>
  );
}
