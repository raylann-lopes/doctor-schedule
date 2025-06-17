import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { auth } from "@/lib/auth";

import FormPage from "./components/form";

const ClinicFormPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/authentication");
  }
  if (!session.user.plan) {
    redirect("/new-subscription");
  }
  return (
    <div>
      <Dialog open>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar Clinica</DialogTitle>
            <DialogDescription>
              Adicione uma clínica para começar a gerenciar seus pacientes e
              consultas.
            </DialogDescription>
          </DialogHeader>
          <FormPage />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ClinicFormPage;
