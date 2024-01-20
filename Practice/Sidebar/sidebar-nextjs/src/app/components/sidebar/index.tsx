'use client';

import React from 'react'
import {
  LayoutDashboard,
  BadgeDollarSign,
  WalletCards,
  CircleUserRound,
  Settings,
  HelpingHandIcon,
  LucideIcon
} from "lucide-react"
import SidebarItem from './item';

interface ISubItem {
  name: string;
  path: string;
}

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

const items = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transaction",
    path: "/transactions",
    icon: BadgeDollarSign,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: WalletCards,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: CircleUserRound,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/settings",
      },
      {
        name: "Security",
        path: "/settings/security"
      },
      {
        name: "Notifications",
        path: "/settings/notifications"
      }
    ],
  },
  {
    name: "Help",
    path: "/help",
    icon: HelpingHandIcon,
    items: [
      {
        name: "FAQs",
        path: "/help/faqs",
      },
      {
        name: "Support",
        path: "/help/support",
      },
      {
        name: "ContactUs",
        path: "/help/contactus",
      },
    ]
  },
]

const Sidebar = () => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-3'
    >
      <div className='flex flex-col space-y-10 w-full'>
        <img
          className='h-15 w-fit' src="/Go-Live-Faster.png" alt='logo'
        />
        <div
          className='flex flex-col space-y-1'
        >
          {items.map(item => (
            <SidebarItem
              key={item.path}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar