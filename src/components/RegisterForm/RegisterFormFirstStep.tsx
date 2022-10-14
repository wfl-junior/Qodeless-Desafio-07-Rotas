import { Envelope, Lock, LockOpen, User } from "phosphor-react";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { InferType } from "yup";
import { registerFirstStepValidationSchema } from "../../validation/register";
import { Button } from "../Button";
import { Input } from "../Input";

type FirtStepValues = InferType<typeof registerFirstStepValidationSchema>;

export const RegisterFormFirstStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FirtStepValues>();

  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        <Input
          label="Nome de usuário"
          icon={User}
          placeholder="john-doe"
          {...register("username")}
          errorMessage={errors.username?.message}
        />

        <Input
          label="E-mail"
          icon={Envelope}
          placeholder="johndoe@gmail.com"
          type="email"
          {...register("email")}
          errorMessage={errors.email?.message}
        />

        <Input
          type="password"
          label="Senha"
          icon={LockOpen}
          placeholder="************"
          {...register("password")}
          errorMessage={errors.password?.message}
        />

        <Input
          type="password"
          label="Confirme sua senha"
          icon={Lock}
          placeholder="************"
          {...register("password_confirmation")}
          errorMessage={errors.password_confirmation?.message}
        />
      </div>

      <Button type="submit">Próxima etapa</Button>
    </Fragment>
  );
};
