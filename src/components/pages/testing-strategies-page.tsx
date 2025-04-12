import { CodeBlock } from "../ui/code-block";

const TestingStrategiesPage = () => {
  const jestCode = `// Test unitario con Jest
export function sum(a, b) {
  return a + b;
}

// test.js
import { sum } from './math';

test('suma 1 + 2 para obtener 3', () => {
  expect(sum(1, 2)).toBe(3);
});`;

  const cypressCode = `// Test de integración con Cypress
describe('Formulario de login', () => {
  it('debería mostrar mensaje de error con credenciales inválidas', () => {
    cy.visit('/login');
    
    cy.get('input[name="email"]').type('usuario@ejemplo.com');
    cy.get('input[name="password"]').type('contraseñaIncorrecta');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Credenciales inválidas').should('be.visible');
  });
});`;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Estrategias de Testing Automatizado
      </h1>
      <p className="text-gray-600 mb-6">
        Elige la estrategia de testing adecuada según tu contenido:
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <CodeBlock code={jestCode} language="js" fileName="math.test.js" />

        <div className="mt-4">
          <p className="mb-4">
            Las pruebas unitarias son la base de una estrategia de testing
            sólida. Permiten verificar que cada unidad de código funciona
            correctamente de forma aislada. Jest es una de las herramientas más
            populares para realizar pruebas unitarias en JavaScript.
          </p>

          <p className="mb-4">
            Para implementar pruebas unitarias efectivas, es importante seguir
            el patrón AAA (Arrange-Act-Assert):
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Arrange:</strong> Preparar los datos y condiciones
              necesarias para la prueba.
            </li>
            <li>
              <strong>Act:</strong> Ejecutar la función o método que se está
              probando.
            </li>
            <li>
              <strong>Assert:</strong> Verificar que el resultado es el
              esperado.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <CodeBlock code={cypressCode} language="js" fileName="login.cy.js" />
      </div>
    </div>
  );
};

export default TestingStrategiesPage;
