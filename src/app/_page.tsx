import { getClientes, getComposicao, getDetalhes, getFornecedores, getInsumos, getPedidos, getProdutos } from '@/api/database';
import List from '@/components/List';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen bg-black text-amber-50 gap-4 p-4 col-s">
      <Navbar
        right={
          <>
            <Button variant={'ghost'} className='text-black'>Sobre Nós</Button>
            <Button className='bg-[#950404]' >Login</Button>
          </>
        }
      />

      <div className='w-full h-full flex flex-col justify-center items-center bg-red-900'>
        <div className='w-full bg-yellow-400 justify-center items-center flex flex-col'>
          <h1>Bem Vindo(a) á</h1>
          <h1>AMG</h1>
          <h1>Confecções</h1>
        </div>
        <Button className='bg-[#FFC3C3] text-black'>Saiba Mais</Button>
      </div>

      {/* <List code='cli' title='Lista de Clientes' dados={clientes} />
      <List code='pro' title='Lista de Produtos' dados={produtos} />
      <List code='ins' title='Lista de Insumos' dados={insumos} />
      <List code='for' title='Lista de Fornecedores' dados={fornecedores} />
      <List code='ped' title='Lista de Pedidos' dados={pedidos} />
      <List code='det' title='Lista de Detalhes dos Pedidos' dados={detalhes} />
      <List code='com' title='Lista de Composicao dos Produtos' dados={composicao} /> */}
    </div>
  );
}
