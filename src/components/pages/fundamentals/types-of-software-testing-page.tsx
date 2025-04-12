
const TypesOfSoftwareTestingPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 id="tipos-pruebas-software" className="text-3xl font-bold mb-4">
        Tipos de Pruebas de Software
      </h1>
      <p className="text-gray-600 mb-6">
        Exploración de los diferentes tipos de pruebas utilizadas en el
        desarrollo de software para garantizar la calidad y funcionalidad del
        producto.
      </p>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Pruebas Funcionales</h2>
        <p className="mb-4">
          Las pruebas funcionales se centran en verificar que cada función del
          software opere conforme a los requisitos especificados. Estas pruebas
          incluyen:
        </p>
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
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Pruebas No Funcionales</h2>
        <p className="mb-4">
          Las pruebas no funcionales evalúan aspectos como el rendimiento, la
          usabilidad y la seguridad del software. Estas pruebas incluyen:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pruebas de Rendimiento:</strong> Miden la velocidad y
            capacidad de respuesta del sistema.
          </li>
          <li>
            <strong>Pruebas de Carga:</strong> Determinan cómo el sistema maneja
            grandes volúmenes de datos o usuarios simultáneos.
          </li>
          <li>
            <strong>Pruebas de Estrés:</strong> Evalúan el comportamiento del
            sistema bajo condiciones extremas.
          </li>
          <li>
            <strong>Pruebas de Seguridad:</strong> Identifican vulnerabilidades
            y aseguran la protección de datos.
          </li>
          <li>
            <strong>Pruebas de Usabilidad:</strong> Analizan la facilidad de uso
            y experiencia del usuario.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Importancia de las Pruebas de Software
        </h2>
        <p className="mb-4">
          La implementación de pruebas funcionales y no funcionales es esencial
          para:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Garantizar que el software cumple con los requisitos y expectativas
            del cliente.
          </li>
          <li>
            Identificar y corregir errores antes del lanzamiento del producto.
          </li>
          <li>Mejorar la calidad y confiabilidad del software.</li>
          <li>Reducir costos asociados a fallos en producción.</li>
        </ul>
      </section>


    </div>
  );
};

export default TypesOfSoftwareTestingPage;
