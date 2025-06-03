import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormPage from "./components/form";

const ClinicFormPage = () => {
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
