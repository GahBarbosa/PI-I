"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { redirect } from "next/navigation";



export type Pedido = {
  cliente_id: number | null;
  pedido_id: number;
  data_pedido: Date | null;
  data_entrega: Date | null;
  status: string;
  valor_total: number | null;
};

export const columns: ColumnDef<Pedido>[] = [

  {
    accessorKey: "pedido_id",
    header: "Pedido Id",
  },
  {
    accessorKey: "client_id",
    header: "Cliente Id",
  },
  {
    accessorKey: "data_pedido",
    header: "Data do Pedido",
    cell: ({ row }) =>
      row.original.data_pedido
        ? new Date(row.original.data_pedido).toLocaleDateString("pt-BR")
        : "-",
  },
  {
    accessorKey: "data_entrega",
    header: "Data do Entrega",
    cell: ({ row }) =>
      row.original.data_entrega
        ? new Date(row.original.data_entrega).toLocaleDateString("pt-BR")
        : "-",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "valor_total",
    header: "Valor Total",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const cliente = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => redirect(`/Pedidos/${cliente.pedido_id}`)}
            >
              Visualizar Pedido
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => redirect(`/Clientes/${cliente.cliente_id}`)}
            >
              Visualizar Cliente
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
