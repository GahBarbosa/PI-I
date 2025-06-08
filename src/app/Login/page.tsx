'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    if (usuario === senha && usuario !== '') {
      redirect('/Clientes')
    } else {
      setErro('Usuário e senha inválidos');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        left={
          <Link href="/">
            <Image src="/AMGLogo.svg" alt="Logo AMG" width={40} height={40} />
          </Link>
        }
        right={
          <Button asChild variant={'ghost'} className="text-black hover:cursor-pointer">
            <Link href="/Sobre">Sobre Nós</Link>
          </Button>
        }
      />

      < div className="flex h-[calc(100vh-64px)]" >
        <div className="w-1/3 bg-[#fff2f2ea] text-black flex flex-col justify-center items-center p-8 gap-4">
          <h1 className="text-8xl font-[viga] text-[#6C0404] flex mb-20">Login <Image alt='' src={'/botao.png'} width={100} height={100} /></h1>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full bg-white"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full bg-white"
          />
          {erro && <p className="text-red-600">{erro}</p>}
          <Button className="bg-[#950404] hover:bg-[#7a0303] w-full" onClick={handleLogin}>
            Entrar
          </Button>
        </div>

        <div className="w-2/3 relative">
          <Image
            src="/maquina2.png"
            alt="Máquina de costura"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-[#950404] opacity-40 z-10" />
        </div>
      </div >
    </div >
  );
}
