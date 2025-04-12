import { CodeBlock } from "../../ui/code-block";

const PlaywrightPage = () => {
  const playwrightExampleCode = `// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('página de inicio tiene el título correcto', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Espera a que el título contenga la palabra esperada
  await expect(page).toHaveTitle(/Example/);
  
  // Verifica que existe un h1 con el texto correcto
  const heading = page.locator('h1');
  await expect(heading).toContainText('Example Domain');
});

test('proceso de login funciona correctamente', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Completa el formulario
  await page.fill('input[name="username"]', 'usuario@ejemplo.com');
  await page.fill('input[name="password"]', 'contraseña123');
  await page.click('button[type="submit"]');
  
  // Verifica redirección y mensaje de bienvenida
  await expect(page).toHaveURL(/dashboard/);
  const welcomeMessage = page.locator('.welcome-message');
  await expect(welcomeMessage).toBeVisible();
  await expect(welcomeMessage).toContainText('Bienvenido');
});`;

  const playwrightConfigCode = `// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    baseURL: 'https://example.com',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['html'],
    ['json', { outputFile: 'results.json' }]
  ],
});`;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Playwright</h1>
      <p className="text-gray-600 mb-6">
        Framework de automatización de navegadores para pruebas end-to-end
        confiables
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">¿Qué es Playwright?</h2>
        <p className="mb-4">
          Playwright es una herramienta de automatización de navegadores
          desarrollada por Microsoft que permite realizar pruebas end-to-end
          confiables y rápidas en aplicaciones web. Soporta todos los
          navegadores modernos (Chromium, Firefox y WebKit) y ofrece una API
          potente y flexible para automatizar interacciones web.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-3">
          Características principales:
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Soporte para múltiples navegadores (Chrome, Firefox, Safari)</li>
          <li>Ejecución en modo headless o con interfaz gráfica</li>
          <li>Auto-espera inteligente para elementos y acciones</li>
          <li>Capacidades avanzadas de red y manipulación de peticiones</li>
          <li>Generación de capturas de pantalla, videos y trazas</li>
          <li>Soporte para móviles y emulación de dispositivos</li>
          <li>Ejecución paralela de pruebas para mayor velocidad</li>
        </ul>

        <h3 className="text-lg font-medium mb-3">
          Ejemplo básico de prueba con Playwright:
        </h3>
        <CodeBlock
          code={playwrightExampleCode}
          language="js"
          fileName="tests/example.spec.js"
        />

        <h3 className="text-lg font-medium mt-6 mb-3">
          Configuración de Playwright:
        </h3>
        <CodeBlock
          code={playwrightConfigCode}
          language="js"
          fileName="playwright.config.js"
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Ventajas de Playwright</h2>

        <h3 className="text-lg font-medium mb-3">
          ¿Por qué elegir Playwright?
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Compatibilidad multiplataforma</strong> - Ejecuta pruebas en
            Windows, macOS y Linux
          </li>
          <li>
            <strong>Soporte para múltiples lenguajes</strong> - JavaScript,
            TypeScript, Python, .NET y Java
          </li>
          <li>
            <strong>Arquitectura moderna</strong> - Diseñado para aplicaciones
            web modernas y SPAs
          </li>
          <li>
            <strong>Rendimiento superior</strong> - Ejecución más rápida que
            otras herramientas similares
          </li>
          <li>
            <strong>Herramientas de depuración avanzadas</strong> - Trazas,
            capturas de pantalla y grabación de video
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-3">Mejores prácticas:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Utiliza localizadores específicos y robustos</li>
          <li>
            Implementa el patrón Page Object Model para mejor mantenibilidad
          </li>
          <li>
            Aprovecha las capacidades de aislamiento de contexto para pruebas
            independientes
          </li>
          <li>Utiliza fixtures para configuración y limpieza de pruebas</li>
          <li>Integra con CI/CD para ejecución automática de pruebas</li>
          <li>
            Utiliza el modo de depuración para solucionar problemas complejos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlaywrightPage;
