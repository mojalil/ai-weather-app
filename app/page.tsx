"use client";

import { Inter } from "next/font/google";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#394F68]
     to-[#183B7E] p-10 flex flex-col justify-center items-center ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">Powered by GPT-4</Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City Picker */}
          <CityPicker></CityPicker>
        </Card>
      </Card>
    </main>
  );
}
