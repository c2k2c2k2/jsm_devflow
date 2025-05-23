"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signInValidation } from "@/lib/validations";
import React from "react";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={signInValidation}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
