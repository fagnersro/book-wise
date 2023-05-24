import { Login } from '@/components/Login'

export default function Home() {
  return (
    <div className="grid h-[58.25] w-screen grid-cols-2 p-[1.25rem]">
      <div className="h-[57rem] w-[37.375rem] rounded-lg bg-[url(../assets/bg-hero.png)] bg-cover"></div>

      <div className="flex h-full items-center justify-center">
        <Login />
      </div>
    </div>
  )
}
