import { useForm, Head } from '@inertiajs/react'
import { Button } from '~/components/Button/button'
import { Input } from '~/components/Input/input'
import React from 'react'
import { KeyRound } from 'lucide-react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    post('/login')
  }

  return (
    <>
      <Head title="Login" />
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-mono mb-2">Page de connexion</h1>
            <p className="text-black/50">Entrez vos identifiants pour vous connecter.</p>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-5">
            <Input
              type="email"
              label="Email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              error={errors.email}
              placeholder="hello@example.com"
            />

            <Input
              type="password"
              label="Password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              error={errors.password}
              placeholder="••••••••"
            />

            {(errors as any).E_INVALID_CREDENTIALS && (
              <div className="text-sm text-red-500 text-center font-medium bg-red-50 p-2 rounded-lg border border-red-100">
                {(errors as any).E_INVALID_CREDENTIALS}
              </div>
            )}

            <div className="mt-2">
              <Button
                icon={<KeyRound strokeWidth={1} />}
                type="submit"
                disabled={processing}
                className="w-full justify-center"
              >
                Se connecter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
