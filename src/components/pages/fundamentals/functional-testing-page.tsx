import { TestCases } from "../../ui/test-cases";

const FunctionalTestingPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 id="pruebas-funcionales" className="text-3xl font-bold mb-4">
        Pruebas Funcionales
      </h1>
      <p className="text-gray-600 mb-6">
        Las pruebas funcionales son esenciales para garantizar que cada función
        del software opere conforme a los requisitos especificados. Se centran
        en validar las acciones y resultados del sistema desde la perspectiva
        del usuario.
      </p>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          ¿Qué son las Pruebas Funcionales?
        </h2>
        <p className="mb-4">
          Las pruebas funcionales son un tipo de prueba de caja negra que se
          realiza para confirmar que la funcionalidad de una aplicación o
          sistema se comporta como se espera. Se enfocan en verificar que las
          funciones del software cumplan con los requisitos especificados, sin
          considerar la estructura interna del código.
        </p>
        <p className="mb-4">
          Estas pruebas son fundamentales para identificar discrepancias entre
          el comportamiento esperado y el real del sistema, asegurando así la
          calidad del producto final.
        </p>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Tipos de Pruebas Funcionales
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pruebas Unitarias:</strong> Verifican el funcionamiento de
            componentes individuales.
          </li>
          <li>
            <strong>Pruebas de Integración:</strong> Aseguran que los módulos
            interactúan correctamente entre sí.
          </li>
          <li>
            <strong>Pruebas del Sistema:</strong> Evalúan el sistema completo
            como una unidad.
          </li>
          <li>
            <strong>Pruebas de Aceptación:</strong> Validan que el software
            cumple con los requisitos del cliente.
          </li>
          <li>
            <strong>Pruebas de Regresión:</strong> Aseguran que las nuevas
            modificaciones no afecten funcionalidades existentes.
          </li>
          <li>
            <strong>Pruebas de Interfaz:</strong> Verifican la interacción entre
            diferentes interfaces del sistema.
          </li>
          <li>
            <strong>Pruebas de Compatibilidad:</strong> Comprueban el
            funcionamiento del software en diferentes entornos y dispositivos.
          </li>
          <li>
            <strong>Pruebas Exploratorias:</strong> Permiten al tester explorar
            la aplicación sin casos de prueba predefinidos, identificando
            posibles errores inesperados.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Ejemplos de Casos Reales</h2>
        <p className="mb-4">
          A continuación, se presentan algunos ejemplos de casos reales donde se
          aplican pruebas funcionales:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Aplicación de Banca en Línea:</strong> Verificar que un
            usuario pueda iniciar sesión con credenciales válidas y realizar
            transferencias entre cuentas correctamente.
          </li>
          <li>
            <strong>Plataforma de Comercio Electrónico:</strong> Asegurar que
            los usuarios puedan buscar productos, añadirlos al carrito y
            completar el proceso de pago sin errores.
          </li>
          <li>
            <strong>Aplicación de Redes Sociales:</strong> Comprobar que los
            usuarios puedan publicar actualizaciones de estado y que estas se
            muestren correctamente en el feed de otros usuarios.
          </li>
          <li>
            <strong>Sistema de Gestión de Recursos Humanos:</strong> Validar que
            los empleados puedan actualizar su información personal y que los
            cambios se reflejen adecuadamente en el sistema.
          </li>
          <li>
            <strong>Aplicación de Reservas de Vuelos:</strong> Verificar que los
            usuarios puedan buscar vuelos, seleccionar opciones y completar la
            reserva con confirmación adecuada.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Mejores Prácticas</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Definir claramente los requisitos funcionales antes de diseñar las
            pruebas.
          </li>
          <li>
            Utilizar herramientas de automatización para mejorar la eficiencia.
          </li>
          <li>Documentar todos los casos de prueba y sus resultados.</li>
          <li>
            Realizar pruebas de regresión después de cada cambio significativo
            en el código.
          </li>
          <li>
            Involucrar a los usuarios finales en las pruebas de aceptación para
            garantizar que se cumplan sus expectativas.
          </li>
          <li>
            Implementar pruebas de compatibilidad para asegurar el
            funcionamiento en diversos entornos.
          </li>
          <li>
            Ejecutar pruebas exploratorias para descubrir errores no
            anticipados.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Herramientas Comunes para Pruebas Funcionales
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Selenium:</strong> Automatiza pruebas en navegadores web.
          </li>
          <li>
            <strong>JUnit:</strong> Framework para pruebas unitarias en Java.
          </li>
          <li>
            <strong>TestNG:</strong> Similar a JUnit, con funcionalidades
            adicionales.
          </li>
          <li>
            <strong>Postman:</strong> Pruebas de APIs.
          </li>
          <li>
            <strong>Cypress:</strong> Pruebas end-to-end para aplicaciones web
            modernas.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Ejemplo Reales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Aplicación de Banca en Línea: </strong>
            <strong>Esenario</strong> Un usuario desea transferir fondos entre
            sus cuentas. Pruebas Funcionales: Validación de Credenciales:
            Asegurar que el usuario pueda iniciar sesión con las credenciales
            correctas y que se le deniegue el acceso con credenciales
            incorrectas.​ Transferencia de Fondos: Verificar que el usuario
            pueda seleccionar la cuenta de origen y destino, ingresar el monto y
            confirmar la transferencia.​ Confirmación y Notificación: Comprobar
            que, tras una transferencia exitosa, se muestre una confirmación y
            se envíe una notificación por correo electrónico o mensaje de texto.
          </li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-amber-600 mb-6">
          Casos de Prueba
        </h1>
        <p className="text-gray-700 mb-8">
          A continuación se presentan los casos de prueba para diferentes
          aplicaciones y escenarios. Cada caso incluye los pasos de prueba y los
          resultados esperados.
        </p>

        <TestCases />
      </div>
    </div>
  );
};

export default FunctionalTestingPage;
