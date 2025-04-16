import {
  BarChart2,
  CheckCircle,
  Code,
  FileText,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { FeatureCard } from "../ui/featureCard";

export function WelcomeBannerAlt() {
  return (
    <div className="rounded-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-6 text-white">
        <h1 className="text-2xl font-bold mb-2 flex items-center">
          <Shield className="h-6 w-6 mr-2" />
          QAVERSE: Plataforma de Gestión de Calidad
        </h1>
        <p className="text-amber-50 max-w-3xl">
          Optimiza tus procesos de QA con nuestra plataforma integral para la
          gestión de pruebas, documentación y estándares de calidad en el
          desarrollo de software.
        </p>
      </div>

      <div className="bg-white border-x border-b border-amber-100 px-8 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FileText className="h-5 w-5" />}
            title="Gestión de Casos de Prueba"
            description="Crea, organiza y ejecuta casos de prueba funcionales y automatizados."
          />

          <FeatureCard
            icon={<CheckCircle className="h-5 w-5" />}
            title="Estándares de Calidad"
            description="Documenta y aplica estándares de calidad consistentes en todos tus proyectos."
          />

          <FeatureCard
            icon={<BarChart2 className="h-5 w-5" />}
            title="Métricas y Reportes"
            description="Visualiza el progreso y la cobertura de tus pruebas con reportes detallados."
          />

          <FeatureCard
            icon={<Code className="h-5 w-5" />}
            title="Integración con CI/CD"
            description="Conecta con tus pipelines de integración continua para automatizar pruebas."
          />

          <FeatureCard
            icon={<Users className="h-5 w-5" />}
            title="Colaboración en Equipo"
            description="Trabaja en tiempo real con tu equipo en la creación y revisión de pruebas."
          />

          <FeatureCard
            icon={<Zap className="h-5 w-5" />}
            title="Automatización Inteligente"
            description="Genera casos de prueba automáticamente basados en patrones y comportamientos."
          />
        </div>
      </div>

      <div className="bg-white border-x border-b border-amber-100 px-8 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cositas</h2>
      </div>
    </div>
  );
}

export default WelcomeBannerAlt;
