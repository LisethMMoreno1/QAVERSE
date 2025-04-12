// src/components/pages/foundations-of-qa-page.tsx

const FoundationsOfQAPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 id="fundamentos-qa" className="text-3xl font-bold mb-4">
        Fundamentos de QA
      </h1>
      <p className="text-gray-600 mb-6">
        Introducción a los conceptos básicos del aseguramiento de la calidad en
        el desarrollo de software.
      </p>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">¿Qué es QA?</h2>
        <p className="mb-4">
          QA (Quality Assurance) es un conjunto de prácticas y metodologías que
          buscan garantizar que los productos de software cumplan con altos
          estándares de calidad. Se centra en prevenir errores y mejorar los
          procesos de desarrollo para asegurar la calidad desde el principio.
        </p>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Principios Clave del Aseguramiento de la Calidad
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Prevención de defectos:</strong> El objetivo principal del
            QA es prevenir defectos y mejorar constantemente los procesos para
            minimizar la probabilidad de errores en el software.
          </li>
          <li>
            <strong>Enfoque en el proceso:</strong> QA se centra en mejorar los
            procesos de desarrollo para garantizar la calidad del producto
            final.
          </li>
          <li>
            <strong>Participación continua:</strong> QA está involucrado en todo
            el ciclo de vida del proyecto, desde la planificación hasta la
            entrega, para garantizar que se cumplan los estándares de calidad en
            cada fase.
          </li>
          <li>
            <strong>Mejora continua:</strong> QA promueve la mejora continua de
            los procesos y prácticas para adaptarse a las necesidades cambiantes
            y mejorar la eficiencia.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Estándares Internacionales
        </h2>
        <p className="mb-4">
          Existen varios estándares internacionales que guían las prácticas de
          QA en el desarrollo de software:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>ISO/IEC 25000 (SQuaRE):</strong> Proporciona un marco para
            evaluar la calidad del producto software, incluyendo características
            como funcionalidad, fiabilidad, usabilidad, eficiencia,
            mantenibilidad y portabilidad.
          </li>
          <li>
            <strong>ISO/IEC 9126:</strong> Fue un estándar internacional para la
            evaluación de la calidad del software, reemplazado en 2005 por la
            serie ISO/IEC 25000.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Mejores Prácticas en QA</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            Definir criterios de calidad claros desde el inicio del proyecto.
          </li>
          <li>Implementar revisiones de código y pruebas automatizadas.</li>
          <li>
            Utilizar herramientas de seguimiento de errores y gestión de
            pruebas.
          </li>
          <li>
            Fomentar una cultura de calidad en todo el equipo de desarrollo.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FoundationsOfQAPage;
