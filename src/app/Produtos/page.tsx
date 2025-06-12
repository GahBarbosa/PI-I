'use server';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DataTable } from '../../components/data-table';
import { columns } from './columns';
import { getProdutos } from '@/api/database';

export default async function ProdutosPage() {
  const produtos = await getProdutos();

  return (
    <div className="min-h-screen bg-white text-amber-50">
      <Navbar
        color="bg-[#6C0404]"
        left={
          <Link href="/">
            <img src="/AMGLogo.svg" alt="Logo AMG" width={40} height={40} />
          </Link>
        }
        middle={
          <div className="flex gap-6 items-center">
            <Link href="/Clientes" className="text-white hover:underline">Clientes</Link>
            <Link href="/Produtos" className="relative text-white">
              Produtos
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
            </Link>
            <Link href="/Pedidos" className="text-white hover:underline">Pedidos</Link>
          </div>
        }
        right={<Button className="bg-[#950404] hover:bg-[#7a0303]">Sair</Button>}
      />

      <main className="mt-12 bg-white text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Lista de Produtos</h1>
        <div className="max-w-4xl mx-auto">
          <DataTable columns={columns} data={produtos} />
        </div>
      </main>
    </div>
  );
}
