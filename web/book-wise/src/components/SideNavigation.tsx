import { Glasses, LineChart, User2 } from 'lucide-react'

export default function SideNavigation() {
  return (
    <nav className="mt-16 flex h-[9.875rem] w-[7.663rem] break-before-column flex-col items-center space-y-4">
      <button className="yes-before flex h-[2.625rem] w-full items-center rounded-md text-base font-bold text-gray-400 before:mr-4 hover:text-gray-100 focus:text-gray-100">
        <LineChart className="mr-[0.75rem] h-[1.5rem] w-[1.5rem]" />
        Inicio
      </button>
      <button className="yes-before flex h-[2.625rem] w-full items-center rounded-md  text-base font-bold text-gray-400 before:mr-4 hover:text-gray-100 focus:text-gray-100">
        <Glasses className="mr-[0.75rem] h-[1.5rem] w-[1.5rem]" />
        Explorar
      </button>
      <button className="yes-before flex h-[2.625rem] w-full items-center rounded-md text-base font-bold text-gray-400 before:mr-4 hover:text-gray-100 focus:text-gray-100">
        <User2 className="mr-[0.75rem] h-[1.5rem] w-[1.5rem]" />
        Perfil
      </button>
    </nav>
  )
}
