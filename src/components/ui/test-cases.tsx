import { CheckCircle } from "lucide-react";
import { Button } from "./button";
import { Modal } from "./modal";
import { TestCase } from "../pages/fundamentals/test-cases-page";

interface Props {
  testCases: TestCase[];
  selectedTestCase: TestCase | null;
  isModalOpen: boolean;
  onSelect: (tc: TestCase) => void;
  onClose: () => void;
}

export function TestCasesUI({
  testCases,
  selectedTestCase,
  isModalOpen,
  onSelect,
  onClose,
}: Props) {
  const renderBadge = (text: string, type: "status" | "priority") => {
    const colorMap = {
      approved: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
      pending: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-blue-100 text-blue-800",
    };
    return (
      <span
        className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
          colorMap[text as keyof typeof colorMap]
        }`}
      >
        {text.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {testCases.map((testCase) => (
        <div
          key={testCase.id}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <div className="bg-amber-50 border-b border-amber-100 px-6 py-4 flex justify-between items-center">
            <div>
              <div className="flex items-center">
                <h3 className="text-lg font-medium text-amber-700">
                  {testCase.title}
                </h3>
                {renderBadge(testCase.priority, "priority")}
              </div>
              <p className="text-gray-600 mt-1 text-sm">{testCase.scenario}</p>
            </div>
            {renderBadge(testCase.status, "status")}
          </div>

          <div className="px-6 py-4">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Pruebas Funcionales:
            </h4>
            <ul className="space-y-4">
              {testCase.steps.map((step, index) => (
                <li key={index} className="flex">
                  <CheckCircle className="h-5 w-5 text-amber-500 mt-1" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-200">
            <span className="text-xs text-gray-500">ID: {testCase.id}</span>
            <Button
              className="text-amber-600 hover:text-amber-700 text-sm font-medium"
              onClick={() => onSelect(testCase)}
              size="sm"
              variant="outline"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={onClose}
        title="Detalles del caso de prueba"
      >
        {selectedTestCase && (
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {selectedTestCase.title}
            </h2>
            <p>
              <strong>Escenario:</strong> {selectedTestCase.scenario}
            </p>
            <p>
              <strong>Aplicación:</strong> {selectedTestCase.application}
            </p>
            <p>
              <strong>Creado por:</strong> {selectedTestCase.createdBy}
            </p>
            <p>
              <strong>Fecha de creación:</strong> {selectedTestCase.createdAt}
            </p>
            <p>
              <strong>Última ejecución:</strong> {selectedTestCase.lastRun}
            </p>
            <p>
              <strong>Entorno:</strong> {selectedTestCase.environment}
            </p>
            <p>
              <strong>Notas:</strong> {selectedTestCase.notes}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
