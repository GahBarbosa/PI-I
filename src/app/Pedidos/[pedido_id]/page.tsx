import { notFound } from "next/navigation";
import { getCliente, getPedido, getPedidosPorCliente, getProdutosDoPedido } from "@/api/database";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Params = Promise<{ pedido_id: string }>;

export default async function PedidoPage({ params }: { params: Params }) {
  const { pedido_id } = await params;
  const pedido = await getPedido(parseInt(pedido_id));
  const produtos = await getProdutosDoPedido(parseInt(pedido_id));

  if (!pedido) return notFound();

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
            <Link href="/Clientes" className=" text-white hover:underline">Clientes</Link>
            <Link href="/Produtos" className="text-white hover:underline">Produtos</Link>
            <Link href="/Pedidos" className="text-white relative">
              Pedidos
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
            </Link>
          </div>
        }
        right={<Button className="bg-[#950404] hover:bg-[#7a0303]">Sair</Button>}
      />
      <div className="w-full flex justify-center items-center min-h-[calc(100vh-64px)]">

        <div className="bg-[#D9D9D9] w-3/4 rounded-xl p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Pedido: {pedido.pedido_id}</h2>
            <p><strong>Data Pedido:</strong> {pedido.data_pedido ? new Date(pedido.data_pedido).toLocaleDateString() : 'Sem data'}</p>
            <p><strong>Data Entrega:</strong> {pedido.data_entrega ? new Date(pedido.data_entrega).toLocaleDateString() : 'Sem data'}</p>
            <p><strong>Valor Total:</strong> {String(pedido.valor_total)}</p>
            <p><strong>Status:</strong> {pedido.status}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Produtos</h3>
            {produtos.length === 0 ? (
              <p className="text-gray-400">Nenhum produto encontrado para este pedido.</p>
            ) : (
              <ul className="divide-y divide-gray-700 gap-2 flex flex-col">
                {produtos.map((produto) => (
                  <li key={produto.produto_id} className="py-3 bg-[#6C0404] text-white p-4 flex gap-3 rounded-2xl justify-between">
                    <div className="flex flex-row gap-3">
                      <p><strong>ID do produto:</strong> {produto.produto_id}</p>
                      <p><strong>Nome:</strong> {produto.nome}</p>
                      <p><strong>Quantidade:</strong> {String(produto.quantidade)}</p>
                      <p><strong>Descrição:</strong> {produto.descricao}</p>
                      <p><strong>Preço Unitario:</strong> R$ {produto.preco_unitario ? Number(produto.preco_unitario).toFixed(2) : '0,00'}</p>
                      <p><strong>SubTotal:</strong> R$ {produto.subtotal ? Number(produto.subtotal).toFixed(2) : '0,00'}</p>
                    </div>
                    <Button asChild className="bg-amber-50 text-black">
                      <Link href={`/Produtos/${produto.produto_id}`}>Ver Detalhes</Link>
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
