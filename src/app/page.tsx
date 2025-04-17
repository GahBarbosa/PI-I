import List from '@/components/List';
import prisma from '@/lib/prisma'

type Cliente = {
  id: number,
  nome: string,
  cpf_cnpj: string;
  telefone: string | null;
  email: string;
  endereco: string | null;
  data_cadastro: Date | null;
}


export default async function Home() {
  const clientes: Cliente[] = await prisma.cliente.findMany();
  const produtos = await prisma.produto.findMany();
  const insumos = await prisma.insumo.findMany();
  const fornecedores = await prisma.fornecedor.findMany();
  const pedidos = await prisma.pedido.findMany();

  return (
    <div className="min-h-screen bg-black text-amber-50 grid grid-rows-3 grid-cols-1 p-4 col-s">
      <List title='Lista de Clientes' dados={clientes} />
      <List title='Lista de Produtos' dados={produtos} />
      <List title='Lista de Insumos' dados={insumos} />
      <List title='Lista de Fornecedores' dados={fornecedores} />
      <List title='Lista de Pedidos' dados={pedidos} />
    </div>
  );
}
