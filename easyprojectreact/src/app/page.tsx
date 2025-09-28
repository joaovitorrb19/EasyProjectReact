"use client";

import Image from "next/image";
import { MenubarBottom } from "../components/MenubarBottom"
import { BarChartBarras } from "../components/BarChartBarras"
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";


export default function Home() {

  const [stateGrapich, stateGrapichATL] = useState(false);

  const grapichVisibility = () => {
    stateGrapichATL(prev => !prev)
  }

  return (

    <div className="relative min-h-screen justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Vendas">Vendas</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Vendas">Vendas</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2010">2010</SelectItem>
                  <SelectItem value="2011">2011</SelectItem>
                  <SelectItem value="2012">2012</SelectItem>
                  <SelectItem value="2013">2013</SelectItem>
                  <SelectItem value="2014">2014</SelectItem>
                  <SelectItem value="2015">2015</SelectItem>
                  <SelectItem value="2016">2016</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Mes" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Janeiro">Janeiro</SelectItem>
                  <SelectItem value="Fevereiro">Fevereiro</SelectItem>
                  <SelectItem value="Março">Março</SelectItem>
                  <SelectItem value="Abril">Abril</SelectItem>
                  <SelectItem value="Maio">Maio</SelectItem>
                  <SelectItem value="Junho">Junho</SelectItem>
                  <SelectItem value="Julho">Julho</SelectItem>
                  <SelectItem value="Agosto">Agosto</SelectItem>
                  <SelectItem value="Setembro">Setembro</SelectItem>
                  <SelectItem value="Outubro">Outubro</SelectItem>
                  <SelectItem value="Novembro">Novembro</SelectItem>
                  <SelectItem value="Dezembro">Dezembro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button className="w-[180px] mt-2">Filtrar</Button>
          </div>
        </div>

        <div style={{ width: '60%' }}>

          {
            stateGrapich && (
              <div>
                <BarChartBarras></BarChartBarras>
              </div>
            )
          }
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <MenubarBottom onShowGrapichs={grapichVisibility}></MenubarBottom>
      </div>
    </div>
  );
}
