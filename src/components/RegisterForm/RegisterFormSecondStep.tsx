import { Hash, Phone, User } from "phosphor-react";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { InferType } from "yup";
import { registerSecondStepValidationSchema } from "../../validation/register";
import { Button } from "../Button";
import { Input } from "../Input";

interface FormSecondStepProps {
  onReturn: () => void;
  isSubmitting: boolean;
}

type SecondStepValues = InferType<typeof registerSecondStepValidationSchema>;

export const RegisterFormSecondStep: React.FC<FormSecondStepProps> = ({
  onReturn,
  isSubmitting,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SecondStepValues>();

  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        <Input
          label="Nome"
          icon={User}
          placeholder="John Doe"
          {...register("name")}
          errorMessage={errors.name?.message}
        />

        <Input
          label="Idade"
          icon={Hash}
          placeholder="25"
          inputMode="numeric"
          {...register("age")}
          errorMessage={errors.age?.message}
        />

        <Input
          label="Telefone"
          icon={Phone}
          placeholder="(99) 9 9999-9999"
          {...register("phone")}
          errorMessage={errors.phone?.message}
        />
      </div>

      <div className="flex gap-4">
        <Button type="button" onClick={onReturn}>
          Voltar
        </Button>

        <Button type="submit" isLoading={isSubmitting}>
          Enviar
        </Button>
      </div>
    </Fragment>
  );
};
