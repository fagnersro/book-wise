import Image from 'next/image'
import bgHero from '../assets/bg-hero.png'
import { Login } from '@/components/Login'

export default function Home() {
  return (
    <div className="grid h-[58.25] w-screen grid-cols-2 p-[1.25rem]">
      <div className="h-[57rem] w-[37.375rem] rounded-lg object-cover">
        <Image
          src={bgHero}
          width={598}
          height={912}
          quality={100}
          priority
          alt="hero"
        />
      </div>

      <div className="flex h-full items-center justify-center">
        <Login />
      </div>
    </div>
  )
}
