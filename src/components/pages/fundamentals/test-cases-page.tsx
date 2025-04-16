"use client";

import { useState } from "react";
import { TestCasesUI } from "../../ui/test-cases";
import testCasesData from "../../../data/test-cases.json";

export interface TestStep {
  title: string;
  description: string;
}

export type StatusType = "aprobado" | "fallido" | "pendiente";
export type PriorityType = "alta" | "media" | "baja";

export interface TestCase {
  id: string;
  title: string;
  scenario: string;
  steps: TestStep[];
  status: StatusType;
  priority: PriorityType;
  application: string;
  createdBy?: string;
  createdAt?: string;
  lastRun?: string;
  environment?: string;
  notes?: string;
}

export function TestCases() {
  const [selectedTestCase, setSelectedTestCase] = useState<TestCase | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (testCase: TestCase) => {
    setSelectedTestCase(testCase);
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const testCases = testCasesData as TestCase[];

  return (
    <TestCasesUI
      testCases={testCases}
      selectedTestCase={selectedTestCase}
      isModalOpen={isModalOpen}
      onSelect={handleSelect}
      onClose={handleClose}
    />
  );
}
