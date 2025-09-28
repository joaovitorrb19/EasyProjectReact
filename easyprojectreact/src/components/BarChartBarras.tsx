"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import axios from "axios";
import { useEffect,useState } from "react";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


interface chartDataItem {
  valueY : string;
  valueX : number;
}

const chartConfig = {
 valueX:{
  label:"Nome",
  color:"#000000ff"
 },
 valueY:{
  label:"Valor",
  color:"#000000ff"
 },
 
} satisfies ChartConfig

export function BarChartBarras() {

  const[chartData,setChartData] = useState<chartDataItem[]>([])
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/return_grafico")
      .then((res) => {
        setChartData(res.data);
      })
  },[]);

 

  return (
      <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full min-h-[200px]">
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="valueX"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="valueY" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
