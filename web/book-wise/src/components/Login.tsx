import googleIcon from '../assets/iconGoogle.svg'
import gitIcon from '../assets/iconGithub.svg'
import rocketIcon from '../assets/iconRocket.svg'
import Image from 'next/image'

export function Login() {
  return (
    <div className="flex h-[21.875rem] w-[23.25rem] flex-col justify-between">
      <div className="w-100% flex h-[3.875rem] flex-col justify-between">
        <h2 className="text-2xl font-bold text-gray-100">Boas vindas!</h2>
        <span className="text-base font-normal text-gray-200">
          Faça seu login ou acesse como visitante.
        </span>
      </div>

      <div className="w-100% flex h-[15.5rem] flex-col gap-4">
        <a
          className="flex h-[4.5rem] items-center gap-5 rounded-lg bg-gray-600 pl-6 text-lg font-bold text-gray-200 duration-100 ease-in hover:bg-gray-500"
          href="#"
        >
          <Image
            src={googleIcon}
            width={32}
            height={32}
            priority
            alt="Icone de acesso ao GitHub"
          />
          Entrar com Google
        </a>
        <a
          className="flex h-[4.5rem] items-center gap-5 rounded-lg bg-gray-600 pl-6 text-lg font-bold text-gray-200 duration-100 ease-in hover:bg-gray-500"
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        >
          <Image
            src={gitIcon}
            width={32}
            height={32}
            priority
            alt="Icone de acesso ao GitHub"
          />
          Entrar com GitHub
        </a>
        <a
          className="flex h-[4.5rem] items-center gap-5 rounded-lg bg-gray-600 pl-6 text-lg font-bold text-gray-200 duration-100 ease-in hover:bg-gray-500"
          href=""
        >
          <Image
            src={rocketIcon}
            width={32}
            height={32}
            priority
            alt="Icone de acesso ao GitHub"
          />
          Acessar como visitante
        </a>
      </div>
    </div>
  )
}
