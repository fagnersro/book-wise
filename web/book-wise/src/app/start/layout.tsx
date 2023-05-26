import { ReactNode } from 'react'
import '../globals.css'
import Image from 'next/image'

import Logo from '../../assets/Logo.png'
import SideNavigation from '@/components/SideNavigation'
import Avatar from '@/components/Avatar'
import { LogOut } from 'lucide-react'

export default function startLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-[62.5rem] w-screen grid-cols-[14.5rem_auto] gap-[6rem] p-5">
      <aside className="flex h-full w-full flex-col items-center rounded-xl bg-gray-700">
        <Image
          className="mt-10"
          src={Logo}
          width={128}
          quality={100}
          priority
          alt="Book-Wise"
        />

        <SideNavigation />

        <div className="mt-[38.375rem] flex h-[2rem] w-[8.625rem] items-center justify-between">
          <Avatar />
          <span className="text-sm font-normal text-gray-200">Fagner</span>
          <button className="flex h-[1.75rem] w-[1.75rem] items-center justify-center rounded-md border-red-500 focus:border-[1px]">
            <LogOut className="text-red-500" />
          </button>
        </div>
      </aside>
      {children}
    </div>
  )
}
