'use client';

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { updateCliente } from "@/api/database";

type ClienteType = {
  nome: string;
  cpf_cnpj: string;
  telefone: string | null;
  email: string;
  endereco: string | null;
  cliente_id: number;
  data_cadastro: Date | null;
} | null

export default function ClienteForm({ cliente, pedidos }: { cliente: ClienteType, pedidos: any[] }) {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: cliente?.nome ?? '',
    cpf_cnpj: cliente?.cpf_cnpj ?? '',
    telefone: cliente?.telefone ?? '',
    email: cliente?.email ?? '',
    endereco: cliente?.endereco ?? ''
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cliente) return
    const response = await updateCliente(cliente?.cliente_id, form)
    if (response) {
      alert('Informações atualizadas com sucesso.');
      router.refresh();
    } else {
      alert('Erro ao atualizar cliente.');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Navbar
        color='bg-[#6C0404]'
        left={<Link href="/"><img src="/AMGLogo.svg" alt="Logo AMG" width={40} height={40} /></Link>}
        middle={<div className="flex gap-6 items-center">
          <Link href="/Clientes" className="relative text-white">
            Clientes <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
          </Link>
          <Link href="/produtos" className="text-white hover:underline">Produtos</Link>
          <Link href="/pedidos" className="text-white hover:underline">Pedidos</Link>
        </div>}
        right={<Button className="bg-[#950404] hover:bg-[#7a0303]">Sair</Button>}
      />

      <div className="w-full flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="bg-[#D9D9D9] w-3/4 rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-2 gap-4">
            <h2 className="col-span-2 text-3xl font-bold mb-4">Editar Cliente</h2>
            <div>
              <label>Nome</label>
              <Input name="nome" value={form.nome} onChange={handleChange} required />
            </div>
            <div>
              <label>CPF/CNPJ</label>
              <Input name="cpf_cnpj" value={form.cpf_cnpj} onChange={handleChange} required />
            </div>
            <div>
              <label>Telefone</label>
              <Input name="telefone" value={form.telefone} onChange={handleChange} />
            </div>
            <div>
              <label>Email</label>
              <Input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="col-span-2">
              <label>Endereço</label>
              <Input name="endereco" value={form.endereco} onChange={handleChange} />
            </div>
            <Button type="submit" className="col-span-2 bg-[#6C0404] hover:bg-[#500303] mt-4">Salvar Alterações</Button>
          </form>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Pedidos</h3>
            {pedidos.length === 0 ? (
              <p className="text-gray-400">Nenhum pedido encontrado para este cliente.</p>
            ) : (
              <ul className="divide-y divide-gray-700 gap-2 flex flex-col">
                {pedidos.map((pedido) => (
                  <li key={pedido.pedido_id} className="py-3 bg-[#6C0404] text-white p-4 flex gap-3 rounded-2xl justify-between">
                    <div className="flex flex-row gap-3">
                      <p><strong>ID do Pedido:</strong> {pedido.pedido_id}</p>
                      <p><strong>Data do Pedido:</strong> {pedido.data_pedido ? new Date(pedido.data_pedido).toLocaleDateString() : 'Sem data'}</p>
                      <p><strong>Entrega Prevista:</strong> {pedido.data_entrega ? new Date(pedido.data_entrega).toLocaleDateString() : 'Não informada'}</p>
                      <p><strong>Status:</strong> {pedido.status}</p>
                      <p><strong>Valor Total:</strong> R$ {pedido.valor_total ? Number(pedido.valor_total).toFixed(2) : '0,00'}</p>
                    </div>
                    <Button asChild className="bg-amber-50 text-black">
                      <Link href={`/Pedidos/${pedido.pedido_id}`}>Ver Detalhes</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
