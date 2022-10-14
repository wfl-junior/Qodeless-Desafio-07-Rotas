import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InferType } from "yup";
import { RegisterFormFirstStep } from "../components/RegisterForm/RegisterFormFirstStep";
import { RegisterFormSecondStep } from "../components/RegisterForm/RegisterFormSecondStep";
import { sleep } from "../utils/sleep";
import {
  registerFirstStepValidationSchema,
  registerSecondStepValidationSchema,
} from "../validation/register";

const firstStep = 1;
const totalSteps = 2;

type RegisterFormValues = InferType<typeof registerFirstStepValidationSchema> &
  InferType<typeof registerSecondStepValidationSchema>;

export const Register: React.FC = () => {
  const [step, setStep] = useState(firstStep);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchemas = [
    registerFirstStepValidationSchema,
    registerSecondStepValidationSchema,
  ];

  const form = useForm<RegisterFormValues>({
    resolver: yupResolver(validationSchemas[step - 1]),
  });

  const handleRegister = form.handleSubmit(async values => {
    if (step < totalSteps) {
      return setStep(step => step + 1);
    }

    setIsSubmitting(true);
    await sleep(1000);
    console.log(values);
    setIsSubmitting(false);
  });

  function handleReturn() {
    setStep(step => Math.max(step - 1, firstStep));
  }

  const steps = [
    <RegisterFormFirstStep />,
    <RegisterFormSecondStep
      onReturn={handleReturn}
      isSubmitting={isSubmitting}
    />,
  ];

  return (
    <form
      className="flex w-full max-w-md flex-col gap-8 rounded bg-zinc-800 p-6 sm:rounded-md"
      onSubmit={handleRegister}
    >
      <h1 className="text-center text-2xl text-zinc-100">Cadastro</h1>

      <FormProvider {...form}>{steps[step - 1]}</FormProvider>
    </form>
  );
};
