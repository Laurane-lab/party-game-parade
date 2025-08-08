import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaywallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  game?: { name: string; story?: string };
  message?: string;
}

const PaywallDialog = ({ open, onOpenChange, game, message }: PaywallDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{game?.name}</DialogTitle>
        <DialogDescription>
          <span className="block mb-2">{message ? message : "Ce jeu est réservé aux membres premium."}</span>
          <span className="block mb-2">{game?.story}</span>
          <span className="block mb-2">Pour accéder à toutes les règles et détails, veuillez effectuer le paiement.</span>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button className="w-full" onClick={() => {/* payment logic here */}}>Payer pour débloquer</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default PaywallDialog;
