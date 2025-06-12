'use server';
import prisma from '@/lib/prisma'
import { unstable_noStore as noStore } from 'next/cache';

export async function getClientes() {
  noStore();
  const clientes = await prisma.dim_cliente.findMany();
  return clientes
}

export async function getCliente(cliente_id: number) {
  noStore();
  const cliente = await prisma.dim_cliente.findUnique({
    where: { cliente_id: cliente_id },
  });
  return cliente;
}

export async function updateCliente(cliente_id: number, data: {
  nome?: string
  cpf_cnpj?: string
  telefone?: string
  email?: string
  endereco?: string
}) {
  noStore()
  const clienteAtualizado = await prisma.dim_cliente.update({
    where: { cliente_id },
    data: {
      nome: data.nome,
      cpf_cnpj: data.cpf_cnpj,
      telefone: data.telefone,
      email: data.email,
      endereco: data.endereco,
    },
  })

  return clienteAtualizado
}

export async function getProdutos() {
  noStore();
  const produtos = await prisma.dim_produto.findMany();
  return produtos
}

export async function getPedidos() {
  noStore();
  const pedidos = await prisma.fct_pedido.findMany();

  return pedidos.map(pedido => ({
    ...pedido,
    valor_total: pedido.valor_total ? pedido.valor_total.toNumber() : null,
  }));
}


export async function getPedido(pedido_id: number) {
  noStore();
  const pedidos = await prisma.fct_pedido.findFirst({
    where: {
      pedido_id: pedido_id,
    },
  });
  return pedidos
}


export async function getPedidosPorCliente(cliente_id: number) {
  noStore();
  const pedidos = await prisma.fct_pedido.findMany({
    where: {
      cliente_id: cliente_id,
    },
  });

  const pedidosSerializados = pedidos.map(pedido => ({
    ...pedido,
    valor_total: pedido.valor_total ? Number(pedido.valor_total) : null,
  }));

  return pedidosSerializados;
}

export async function getProdutosDoPedido(pedidoId: number) {
  const detalhes = await prisma.map_pedido_detalhe.findMany({
    where: {
      pedido_id: pedidoId,
    },
    include: {
      produto: true,
    },
  });

  return detalhes.map(item => ({
    produto_id: item.produto_id,
    nome: item.produto.nome,
    descricao: item.produto.descricao,
    quantidade: item.quantidade,
    preco_unitario: item.preco_unitario,
    subtotal: item.quantidade * Number(item.preco_unitario),
  }));
}

export async function criarCliente({ data }: { data: { nome: string, cpf_cnpj: string, telefone: string | null, email: string, endereco: string | null } }) {
  return await prisma.dim_cliente.create({
    data: {
      nome: data.nome,
      cpf_cnpj: data.cpf_cnpj,
      telefone: data.telefone || null,
      email: data.email,
      endereco: data.endereco || null,
      data_cadastro: new Date(),
    },
  })
} 