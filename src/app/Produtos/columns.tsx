"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { redirect } from "next/navigation";

export type Produto = {
  produto_id: number;
  nome: string | any;
  descricao: string | any;
  preco_unitario: number | any;
  unidade_medida: string | any;
};

export const columns: ColumnDef<Produto>[] = [
  {
    accessorKey: "produto_id",
    header: "ID",
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "preco_unitario",
    header: "Preço",
    cell: ({ row }) => {
      const valor = row.original.preco_unitario;
      return `R$ ${valor.toFixed(2)}`;
    },
  },
  {
    accessorKey: "unidade_medida",
    header: "Unidade",
  },
  {
    accessorKey: "estoque",
    header: "Estoque",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const produto = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:cursor-pointer">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => redirect(`/produtos/${produto.produto_id}`)}
            >
              Visualizar Produto
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
