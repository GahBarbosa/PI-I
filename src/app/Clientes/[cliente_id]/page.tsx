'use server';

import { getCliente, getPedidosPorCliente } from "@/api/database";
import ClienteForm from "./form";

type Params = Promise<{ cliente_id: string }>;

export default async function ClientePage({ params }: { params: Params }) {
  const { cliente_id } = await params;

  const id = parseInt(cliente_id);
  const clienteData = await getCliente(id);
  const pedidosData = await getPedidosPorCliente(id);

  return (
    <ClienteForm cliente={clienteData} pedidos={pedidosData} />
  );
}
