import { notFound } from "next/navigation";
import { getCliente, getPedidosPorCliente } from "@/api/database";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: {
    cliente_id: string;
  };
};

export default async function ClientePage({ params }: PageProps) {
  const cliente = await getCliente(parseInt(params.cliente_id));
  const pedidos = await getPedidosPorCliente(parseInt(params.cliente_id));

  if (!cliente) return notFound();

  return (
    <div>
      <Navbar
        color='bg-[#6C0404]'
        left={
          <Link href="/">
            <img src="/AMGLogo.svg" alt="Logo AMG" width={40} height={40} />
          </Link>
        }
        middle={
          <div className="flex gap-6 items-center">
            <Link href="/Clientes" className="relative text-white">
              Clientes
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
            </Link>
            <Link href="/produtos" className="text-white hover:underline">Produtos</Link>
            <Link href="/pedidos" className="text-white hover:underline">Pedidos</Link>
            <Link href="/relatorios" className="text-white hover:underline">Relatórios</Link>
          </div>
        }
        right={<Button className="bg-[#950404] hover:bg-[#7a0303]">Sair</Button>}
      />
      <div className="w-full flex justify-center items-center min-h-[calc(100vh-64px)]">

        <div className="bg-[#D9D9D9] w-3/4 rounded-xl p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Cliente: {cliente.nome}</h2>
            <p><strong>CPF/CNPJ:</strong> {cliente.cpf_cnpj}</p>
            <p><strong>Telefone:</strong> {cliente.telefone || 'Não informado'}</p>
            <p><strong>Email:</strong> {cliente.email}</p>
            <p><strong>Endereço:</strong> {cliente.endereco || 'Não informado'}</p>
            <p><strong>Data de Cadastro:</strong> {cliente.data_cadastro?.toLocaleDateString() || 'Não informada'}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Pedidos</h3>
            {pedidos.length === 0 ? (
              <p className="text-gray-400">Nenhum pedido encontrado para este cliente.</p>
            ) : (
              <ul className="divide-y divide-gray-700">
                {pedidos.map((pedido) => (
                  <li key={pedido.pedido_id} className="py-3 bg-[#6C0404] text-white p-4 flex gap-3 rounded-2xl">
                    <p><strong>ID do Pedido:</strong> {pedido.pedido_id}</p>
                    <p><strong>Data do Pedido:</strong> {pedido.data_pedido ? new Date(pedido.data_pedido).toLocaleDateString() : 'Sem data'}</p>
                    <p><strong>Entrega Prevista:</strong> {pedido.data_entrega ? new Date(pedido.data_entrega).toLocaleDateString() : 'Não informada'}</p>
                    <p><strong>Status:</strong> {pedido.status}</p>
                    <p><strong>Valor Total:</strong> R$ {pedido.valor_total ? Number(pedido.valor_total).toFixed(2) : '0,00'}</p>
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
