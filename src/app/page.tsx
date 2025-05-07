import { getClientes, getComposicao, getDetalhes, getFornecedores, getInsumos, getPedidos, getProdutos } from '@/api/database';
import List from '@/components/List';

// type Cliente = {
//   id: number,
//   nome: string,
//   cpf_cnpj: string;
//   telefone: string | null;
//   email: string;
//   endereco: string | null;
//   data_cadastro: Date | null;
// }

export default async function Home() {
  const clientes = await getClientes()
  const produtos = await getProdutos()
  const insumos = await getInsumos()
  const fornecedores = await getFornecedores()
  const pedidos = await getPedidos()
  const detalhes = await getDetalhes()
  const composicao = await getComposicao()

  return (
    <div className="min-h-screen bg-black text-amber-50 grid grid-cols-1 gap-4 p-4 col-s">
      <List code='cli' title='Lista de Clientes' dados={clientes} />
      <List code='pro' title='Lista de Produtos' dados={produtos} />
      <List code='ins' title='Lista de Insumos' dados={insumos} />
      <List code='for' title='Lista de Fornecedores' dados={fornecedores} />
      <List code='ped' title='Lista de Pedidos' dados={pedidos} />
      <List code='det' title='Lista de Detalhes dos Pedidos' dados={detalhes} />
      <List code='com' title='Lista de Composicao dos Produtos' dados={composicao} />
    </div>
  );
}
