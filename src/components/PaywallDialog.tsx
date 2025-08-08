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
  game?: { name: string; story?: string; shortDescription?: string };
  message?: string;
}

const PaywallDialog = ({ open, onOpenChange, game, message }: PaywallDialogProps) => (
  <Dialog open={open} onOpenChange={() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('navigateToFirstFreeGame', { detail: { gameId: 1 } }));
    }
  }}>
    <DialogContent hideClose>
      <DialogHeader>
        <DialogTitle>{game?.name}</DialogTitle>
        <DialogDescription>
          <span className="block mb-2">{game?.shortDescription}</span>
          <span className="block mb-2">{message ? message : "Ce jeu est réservé aux membres premium."}</span>
          <span className="block mb-2">Pour accéder à toutes les règles et détails, veuillez effectuer le paiement.</span>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <Button className="w-1/2" onClick={() => {/* payment logic here */}}>Payer 4,99€</Button>
          <Button variant="outline" className="w-1/2" onClick={() => {
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('navigateToFirstFreeGame', { detail: { gameId: 1 } }));
            }
          }}>Retourner aux jeux gratuits</Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default PaywallDialog;
