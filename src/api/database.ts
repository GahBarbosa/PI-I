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

export async function getProdutos() {
  noStore();
  const produtos = await prisma.dim_produto.findMany();
  return produtos
}

export async function getInsumos() {
  noStore();
  const insumos = await prisma.dim_insumo.findMany();
  return insumos
}

export async function getFornecedores() {
  noStore();
  const fornecedores = await prisma.dim_fornecedor.findMany();
  return fornecedores
}

export async function getPedidos() {
  noStore();
  const pedidos = await prisma.fct_pedido.findMany();
  return pedidos
}

export async function getPedidosPorCliente(cliente_id: number) {
  noStore();
  const pedidos = await prisma.fct_pedido.findMany({
    where: {
      cliente_id: cliente_id,
    },
  });
  return pedidos;
}

export async function getComposicao() {
  noStore();
  const composicao = await prisma.map_produto_composicao.findMany();
  return composicao
}

export async function getDetalhes() {
  noStore();
  const detalhe = await prisma.map_pedido_detalhe.findMany();
  return detalhe
}