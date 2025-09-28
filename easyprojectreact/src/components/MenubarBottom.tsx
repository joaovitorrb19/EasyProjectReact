"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  useRouter
} from 'next/navigation';

interface MenubarBottomProps {
  onShowGrapichs:() => void;
}


export function MenubarBottom({onShowGrapichs}:MenubarBottomProps) {

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Client</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Product</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Order</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={onShowGrapichs}>Graphics</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
};
