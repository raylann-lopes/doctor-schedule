"use client";
import { ColumnDef } from "@tanstack/react-table";

import { patientsTable } from "@/db/schema";

import PatientTableActions from "./table-action";

type Patient = typeof patientsTable.$inferSelect;

export const PatientTableColumns: ColumnDef<Patient>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "phoneNumber",
    accessorKey: "phoneNumber",
    header: "Telefone",
    cell: ({ row }) => {
      const patient = row.original;
      const phone = patient.phoneNumber;

      if (!phone) return "-";

      const formatted = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");

      if (phone.replace(/\D/g, "").length !== 11) {
        return <span className="text-red-500">Número inválido</span>;
      }

      return formatted;
    },
  },
  {
    id: "sexo",
    accessorKey: "sexo",
    header: "Sexo",

    cell: ({ row }) => {
      const patient = row.original;
      return patient.sex === "male" ? "Masculino" : "Feminino";
    },
  },
  {
    id: "actions",
    cell: (params) => {
      const patient = params.row.original;
      return <PatientTableActions patient={patient} />;
    },
  },
];
