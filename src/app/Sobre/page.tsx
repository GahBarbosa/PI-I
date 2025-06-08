import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white text-black">
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

      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent consectetur
          dapibus lectus nec efficitur.
        </p>
      </section>

      {/* Bloco 1 */}
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-20 py-12 bg-gray-50">
        <Image
          src="/maquina.png"
          alt="Imagem Máquina"
          width={500}
          height={300}
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">Nossa História</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentesque ac placerat
            dui. Suspendisse potenti.
          </p>
        </div>
      </section>

      {/* Bloco 2 */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-6 px-6 md:px-20 py-12 bg-white">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">Nossa Missão</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet justo vitae erat tincidunt
            tincidunt. Nam eget porttitor nulla.
          </p>
        </div>
        <Image
          src="/costura.jpg"
          alt="Imagem Costura"
          width={500}
          height={300}
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
      </section>

      {/* Bloco 3 */}
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-20 py-12 bg-gray-50">
        <Image
          src="/tecido.jpg"
          alt="Imagem Tecido"
          width={500}
          height={300}
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">Nossos Valores</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, libero a venenatis placerat, velit
            ante fermentum augue, ac lobortis magna.
          </p>
        </div>
      </section>
    </div>
  );
}
