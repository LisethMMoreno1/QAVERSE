import { CheckCircle, AlertCircle, Clock } from "lucide-react";

interface TestStep {
  title: string;
  description: string;
}

interface TestCase {
  id: string;
  title: string;
  scenario: string;
  steps: TestStep[];
  status: "approved" | "failed" | "pending";
  priority: "high" | "medium" | "low";
  application: string;
}

interface StatusBadgeProps {
  status: "approved" | "failed" | "pending";
}

interface PriorityBadgeProps {
  priority: "high" | "medium" | "low";
}

export function TestCases() {
  const testCases: TestCase[] = [
    {
      id: "TC-1001",
      title: "Aplicación de Banca en Línea",
      scenario: "Un usuario desea transferir fondos entre sus cuentas.",
      application: "Banca en Línea",
      priority: "high",
      status: "approved",
      steps: [
        {
          title: "Validación de Credenciales",
          description:
            "Asegurar que el usuario pueda iniciar sesión con las credenciales correctas y que se le deniegue el acceso con credenciales incorrectas.",
        },
        {
          title: "Transferencia de Fondos",
          description:
            "Verificar que el usuario pueda seleccionar la cuenta de origen y destino, ingresar el monto y confirmar la transferencia.",
        },
        {
          title: "Confirmación y Notificación",
          description:
            "Comprobar que, tras una transferencia exitosa, se muestre una confirmación y se envíe una notificación por correo electrónico o mensaje de texto.",
        },
      ],
    },
    {
      id: "TC-1002",
      title: "Comercio Electrónico - Proceso de Compra",
      scenario: "Un cliente realiza una compra y completa el proceso de pago.",
      application: "Comercio Electrónico",
      priority: "high",
      status: "approved",
      steps: [
        {
          title: "Selección de Productos",
          description:
            "Verificar que el usuario pueda buscar, filtrar y añadir productos al carrito de compras.",
        },
        {
          title: "Proceso de Pago",
          description:
            "Comprobar que el usuario pueda ingresar información de envío, facturación y método de pago.",
        },
        {
          title: "Confirmación de Orden",
          description:
            "Verificar que se genere un número de orden y se envíe un correo de confirmación al cliente.",
        },
      ],
    },
    {
      id: "TC-1003",
      title: "CRM - Gestión de Clientes",
      scenario: "Un agente de ventas registra un nuevo cliente potencial.",
      application: "CRM",
      priority: "medium",
      status: "failed",
      steps: [
        {
          title: "Registro de Cliente",
          description:
            "Verificar que se puedan ingresar todos los datos del cliente y se validen correctamente.",
        },
        {
          title: "Asignación de Categoría",
          description:
            "Comprobar que el sistema asigne automáticamente una categoría según el potencial del cliente.",
        },
        {
          title: "Notificación al Equipo de Ventas",
          description:
            "Verificar que se notifique al equipo de ventas sobre el nuevo cliente potencial.",
        },
      ],
    },
  ];

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
                <PriorityBadge priority={testCase.priority} />
              </div>
              <p className="text-gray-600 mt-1 text-sm">{testCase.scenario}</p>
            </div>
            <StatusBadge status={testCase.status} />
          </div>

          <div className="px-6 py-4">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Pruebas Funcionales:
            </h4>
            <ul className="space-y-4">
              {testCase.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-amber-500" />
                  </div>
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
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {testCase.application}
              </span>
              <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "approved") {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="h-3.5 w-3.5 mr-1" />
        Aprobado
      </span>
    );
  } else if (status === "failed") {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <AlertCircle className="h-3.5 w-3.5 mr-1" />
        Fallido
      </span>
    );
  } else {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        <Clock className="h-3.5 w-3.5 mr-1" />
        Pendiente
      </span>
    );
  }
}

function PriorityBadge({ priority }: PriorityBadgeProps) {
  const colors: Record<"high" | "medium" | "low", string> = {
    high: "bg-red-50 text-red-700 border-red-200",
    medium: "bg-amber-50 text-amber-700 border-amber-200",
    low: "bg-blue-50 text-blue-700 border-blue-200",
  };

  const labels: Record<"high" | "medium" | "low", string> = {
    high: "Alta",
    medium: "Media",
    low: "Baja",
  };

  return (
    <span
      className={`ml-3 text-xs px-2 py-0.5 rounded border ${colors[priority]}`}
    >
      {labels[priority]}
    </span>
  );
}
