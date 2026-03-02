import BrevoForm from "@/components/BrevoForm";

interface GameBrevoFormProps {
  isCompact?: boolean;
}

const GameBrevoForm = ({ isCompact = false }: GameBrevoFormProps) => {
  return (
    <div className={isCompact ? "mt-8 max-w-xl lg:max-w-md mx-auto" : "mt-8 max-w-2xl"}>
      <BrevoForm />
    </div>
  );
};

export default GameBrevoForm;