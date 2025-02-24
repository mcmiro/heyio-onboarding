"use client";

import { useState } from "react";
import StepOne from "../molecules/onboarding/step-one";

export function Onboarding() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="h-screen">
      <StepOne />
    </div>
  );
}
