'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar
        left={
          <Link href="/">
            <Image src="/AMGLogo.svg" alt="Logo AMG" width={40} height={40} />
          </Link>
        }
        right={
          <>
            <Button asChild variant={'ghost'} className="text-black hover:cursor-pointer">
              <Link href="/Sobre">Sobre Nós</Link>
            </Button>

            <Button asChild className="bg-[#950404] hover:bg-[#7a0303]">
              <Link href="/Login">Login</Link>
            </Button>
          </>
        }
      />

      <div className="relative h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/maquina.png')" }}>
        <div className="absolute inset-0 bg-[#950404] opacity-40 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-[viga]">Bem-vindo(a) à</h1>
          <h1 className="text-9xl font-[literata]">AMG</h1>

          <div className="flex flex-row items-center justify-center gap-4 w-full max-w-xl mt-4">
            <div className="h-px flex-1 bg-white" />
            <h1 className="text-4xl font-[literata]">Confecções</h1>
            <div className="h-px flex-1 bg-white" />
          </div>

          <Button className="mt-6 bg-[#FFC3C3] text-black hover:bg-[#f2bebe] hover:cursor-pointer">
            Saiba Mais
          </Button>
        </div>
      </div>
    </div>
  );
}
