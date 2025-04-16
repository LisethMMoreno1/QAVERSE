import { useState } from "react";
import { CodeBlock } from "../../ui/code-block";
import { LanguageSwitcher } from "../../ui/language-switcher";

const CypressPage = () => {
  const [activeLanguage, setActiveLanguage] = useState<
    "javascript" | "typescript"
  >("javascript");

  const cypressExampleCodeJS = `describe('Mi primera prueba con Cypress', () => {
  it('Visita la página de inicio y verifica el título', () => {
    cy.visit('https://example.com')
    cy.title().should('include', 'Example')
    cy.get('h1').should('contain', 'Example Domain')
  })
})`;

  const cypressExampleCodeTS = `describe('Mi primera prueba con Cypress', () => {
  it('Visita la página de inicio y verifica el título', () => {
    cy.visit('https://example.com')
    cy.title().should('include', 'Example')
    cy.get('h1').should('contain', 'Example Domain')
  })
}) as void;`;

  const cypressConfigCodeJS = `// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implementar event listeners aquí
    },
  },
})`;

  const cypressConfigCodeTS = `// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implementar event listeners aquí
    },
  },
})`;

  const codeToShow =
    activeLanguage === "javascript"
      ? cypressExampleCodeJS
      : cypressExampleCodeTS;
  const configToShow =
    activeLanguage === "javascript" ? cypressConfigCodeJS : cypressConfigCodeTS;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 id="cypress" className="text-3xl font-bold mb-2">
        Cypress
      </h1>
      <p className="text-gray-600 mb-6">
        Framework de testing end-to-end para aplicaciones web modernas.
      </p>

      <LanguageSwitcher
        activeLanguage={activeLanguage}
        onLanguageChange={setActiveLanguage}
      />

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">¿Qué es Cypress?</h2>
        <p className="mb-4">
          Cypress es un framework de testing front-end de próxima generación
          diseñado para la web moderna. Permite realizar pruebas de forma rápida
          y confiable.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-3">
          Ejemplo básico de prueba con Cypress:
        </h3>
        <CodeBlock code={codeToShow} language={activeLanguage} />

        <h3 className="text-lg font-medium mt-6 mb-3">
          Configuración de Cypress:
        </h3>
        <CodeBlock code={configToShow} language={activeLanguage} />
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Mejores prácticas con Cypress
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>cypress/e2e/</strong> - Pruebas end-to-end
          </li>
          <li>
            <strong>cypress/fixtures/</strong> - Datos de prueba
          </li>
          <li>
            <strong>cypress/support/</strong> - Comandos personalizados y
            configuración
          </li>
          <li>
            <strong>cypress/component/</strong> - Pruebas de componentes
          </li>
        </ul>
        <h3 className="text-lg font-medium mb-3">Recomendaciones:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Utiliza selectores de datos específicos (data-testid) en lugar de
            clases CSS
          </li>
          <li>Crea comandos personalizados para operaciones repetitivas</li>
          <li>Utiliza fixtures para datos de prueba</li>
          <li>
            Implementa patrones de Page Object para pruebas más mantenibles
          </li>
          <li>Ejecuta pruebas en CI/CD para detección temprana de problemas</li>
        </ul>
      </div>
    </div>
  );
};

export default CypressPage;
