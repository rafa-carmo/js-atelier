'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async () => {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    })
  }
  return (
    <div className="flex flex-1 py-2 md:py-24 items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Seu Email
              </label>
              <input
                type="string"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                placeholder="email@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Sua Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full text-white bg-zinc-600 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
