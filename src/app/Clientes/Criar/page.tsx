'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { criarCliente } from "@/api/database"

export default function NovoClientePage() {
  const [form, setForm] = useState({
    nome: "",
    cpf_cnpj: "",
    telefone: "",
    email: "",
    endereco: "",
  })

  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await criarCliente({ data: form })
    if (res) {
      router.push(`/Clientes/${res.cliente_id}`)
    } else {
      alert("Erro ao criar cliente.")
    }

    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Novo Cliente</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <Input name="cpf_cnpj" placeholder="CPF ou CNPJ" value={form.cpf_cnpj} onChange={handleChange} required />
        <Input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} />
        <Button type="submit" disabled={loading} className="bg-[#6C0404] hover:bg-[#950404]">
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </div>
  )
}
