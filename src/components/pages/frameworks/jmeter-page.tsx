import {
  Activity,
  BookOpen,
  CheckCircle,
  Code,
  ExternalLink,
  FileCode,
  Settings
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export default function JMeterPage() {
  // Dummy token for demonstration purposes. In a real application, this would be dynamically obtained.
  const token = "your_auth_token";
  const __P = (variableName: string) => {
    // This is a placeholder. In a real JMeter setup, this would retrieve the value of the JMeter variable.
    // For this example, we'll just return a default value or the variable name itself.
    return variableName === "token" ? token : `\${${variableName}}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Apache JMeter</h1>
          <p className="text-gray-600 mt-1">
            Herramienta de pruebas de rendimiento y carga
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Introduction */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              ¿Qué es Apache JMeter?
            </h2>
            <p className="text-gray-700 mb-4">
              Apache JMeter es una aplicación de código abierto diseñada para
              realizar pruebas de carga, rendimiento y estrés en recursos como
              aplicaciones web, bases de datos, servidores FTP y más. Permite
              analizar y medir el rendimiento de una variedad de servicios con
              énfasis en aplicaciones web.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                title="Pruebas de Carga"
                description="Simula múltiples usuarios accediendo simultáneamente"
              />
              <FeatureCard
                title="Multiplataforma"
                description="Funciona en cualquier sistema con Java instalado"
              />
              <FeatureCard
                title="Extensible"
                description="Arquitectura de plugins para ampliar funcionalidades"
              />
              <FeatureCard
                title="Reportes Detallados"
                description="Gráficos y estadísticas para análisis de resultados"
              />
            </div>
          </div>

          {/* Tabs for different content */}
          <Tabs
            defaultValue="config"
            className="bg-white rounded-lg border border-gray-200"
          >
            <TabsList className="border-b border-gray-200 w-full rounded-t-lg bg-gray-50 p-0">
              <TabsTrigger
                value="config"
                className="py-3 px-5 data-[state=active]:bg-white rounded-none data-[state=active]:border-b-2 data-[state=active]:border-amber-500"
              >
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </TabsTrigger>
              <TabsTrigger
                value="script"
                className="py-3 px-5 data-[state=active]:bg-white rounded-none data-[state=active]:border-b-2 data-[state=active]:border-amber-500"
              >
                <FileCode className="h-4 w-4 mr-2" />
                Script de Ejemplo
              </TabsTrigger>
              <TabsTrigger
                value="guide"
                className="py-3 px-5 data-[state=active]:bg-white rounded-none data-[state=active]:border-b-2 data-[state=active]:border-amber-500"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Guía Rápida
              </TabsTrigger>
            </TabsList>
            <TabsContent value="config" className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Configuración de un Plan de Pruebas
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    1. Grupo de Hilos (Thread Group)
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Define el número de usuarios virtuales, tiempo de arranque y
                    ciclos de ejecución.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                    <p>
                      <strong>Número de hilos (usuarios):</strong> 100
                    </p>
                    <p>
                      <strong>Período de subida (segundos):</strong> 30
                    </p>
                    <p>
                      <strong>Contador de bucle:</strong> 5
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    2. Peticiones HTTP
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Configura las solicitudes que realizarán los usuarios
                    virtuales.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                    <p>
                      <strong>Servidor:</strong> api.ejemplo.com
                    </p>
                    <p>
                      <strong>Puerto:</strong> 443
                    </p>
                    <p>
                      <strong>Protocolo:</strong> https
                    </p>
                    <p>
                      <strong>Método:</strong> GET
                    </p>
                    <p>
                      <strong>Ruta:</strong> /api/productos
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    3. Elementos de Configuración
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Añade elementos como HTTP Header Manager, HTTP Cookie
                    Manager, etc.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                    <p>
                      <strong>HTTP Header Manager:</strong>
                    </p>
                    <p className="ml-4">Content-Type: application/json</p>
                    <p className="ml-4">Authorization: Bearer {__P("token")}</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    4. Listeners
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Configura elementos para visualizar y analizar los
                    resultados.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                    <p>- View Results Tree</p>
                    <p>- Aggregate Report</p>
                    <p>- Graph Results</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="script" className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Script JMeter en formato XML
              </h3>
              <div className="bg-gray-900 text-gray-100 rounded-md overflow-hidden mb-4">
                <Code>
                  {`<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Plan de Prueba API REST" enabled="true">
      <stringProp name="TestPlan.comments"></stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
    </TestPlan>
    <hashTree>
      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Grupo de Usuarios" enabled="true">
        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
        <elementProp name="ThreadGroup.main_controller" elementType="LoopController">
          <boolProp name="LoopController.continue_forever">false</boolProp>
          <stringProp name="LoopController.loops">5</stringProp>
        </elementProp>
        <stringProp name="ThreadGroup.num_threads">100</stringProp>
        <stringProp name="ThreadGroup.ramp_time">30</stringProp>
        <boolProp name="ThreadGroup.scheduler">false</boolProp>
        <stringProp name="ThreadGroup.duration"></stringProp>
        <stringProp name="ThreadGroup.delay"></stringProp>
      </ThreadGroup>
      <hashTree>
        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="Petición API" enabled="true">
          <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
            <collectionProp name="Arguments.arguments"/>
          </elementProp>
          <stringProp name="HTTPSampler.domain">api.ejemplo.com</stringProp>
          <stringProp name="HTTPSampler.port">443</stringProp>
          <stringProp name="HTTPSampler.protocol">https</stringProp>
          <stringProp name="HTTPSampler.method">GET</stringProp>
          <stringProp name="HTTPSampler.path">/api/productos</stringProp>
          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
        </HTTPSamplerProxy>
        <hashTree/>
        <ResultCollector guiclass="ViewResultsFullVisualizer" testclass="ResultCollector" testname="Ver Árbol de Resultados" enabled="true">
          <boolProp name="ResultCollector.error_logging">false</boolProp>
          <objProp>
            <name>saveConfig</name>
            <value class="SampleSaveConfiguration">
              <time>true</time>
              <latency>true</latency>
              <timestamp>true</timestamp>
              <success>true</success>
              <label>true</label>
              <code>true</code>
              <message>true</message>
              <threadName>true</threadName>
              <dataType>true</dataType>
              <encoding>false</encoding>
              <assertions>true</assertions>
              <subresults>true</subresults>
              <responseData>false</responseData>
              <samplerData>false</samplerData>
              <xml>false</xml>
              <fieldNames>true</fieldNames>
              <responseHeaders>false</responseHeaders>
              <requestHeaders>false</requestHeaders>
              <responseDataOnError>false</responseDataOnError>
              <saveAssertionResultsFailureMessage>true</saveAssertionResultsFailureMessage>
              <assertionsResultsToSave>0</assertionsResultsToSave>
              <bytes>true</bytes>
              <sentBytes>true</sentBytes>
              <url>true</url>
              <threadCounts>true</threadCounts>
              <idleTime>true</idleTime>
              <connectTime>true</connectTime>
            </value>
          </objProp>
          <stringProp name="filename"></stringProp>
        </ResultCollector>
        <hashTree/>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>`}
                </Code>
              </div>
              <p className="text-gray-600 text-sm">
                Este es un ejemplo básico de un plan de pruebas JMeter en
                formato XML que configura 100 usuarios virtuales realizando
                peticiones GET a una API REST.
              </p>
            </TabsContent>
            <TabsContent value="guide" className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Guía de Inicio Rápido
              </h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Instalación</p>
                    <p className="text-gray-600 mt-1">
                      Descarga JMeter desde el sitio oficial de Apache,
                      asegúrate de tener Java instalado y descomprime el
                      archivo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Crear un Plan de Pruebas</p>
                    <p className="text-gray-600 mt-1">
                      Inicia JMeter, crea un nuevo plan de pruebas y añade un
                      grupo de hilos para simular usuarios.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Configurar Peticiones</p>
                    <p className="text-gray-600 mt-1">
                      Añade muestreadores HTTP para las peticiones web que
                      deseas probar.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Añadir Listeners</p>
                    <p className="text-gray-600 mt-1">
                      Agrega elementos para visualizar resultados como gráficos,
                      tablas y reportes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    5
                  </span>
                  <div>
                    <p className="font-medium">Ejecutar y Analizar</p>
                    <p className="text-gray-600 mt-1">
                      Ejecuta el plan de pruebas y analiza los resultados para
                      identificar cuellos de botella.
                    </p>
                  </div>
                </li>
              </ol>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right column - Sidebar */}
        <div className="space-y-6">
          {/* Quick links */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <QuickLink
                title="Sitio Oficial de JMeter"
                href="https://jmeter.apache.org/"
              />
              <QuickLink
                title="Documentación"
                href="https://jmeter.apache.org/usermanual/index.html"
              />
              <QuickLink
                title="Descargas"
                href="https://jmeter.apache.org/download_jmeter.cgi"
              />
              <QuickLink
                title="Plugins de JMeter"
                href="https://jmeter-plugins.org/"
              />
            </ul>
          </div>

          {/* Best practices */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Mejores Prácticas
            </h3>
            <ul className="space-y-2">
              <BestPractice text="Utiliza tiempos de espera realistas entre peticiones" />
              <BestPractice text="Monitorea los recursos del servidor durante las pruebas" />
              <BestPractice text="Incrementa la carga gradualmente" />
              <BestPractice text="Usa variables para parametrizar las pruebas" />
              <BestPractice text="Guarda los resultados para análisis posteriores" />
            </ul>
          </div>

          {/* Performance metrics */}
          <div className="bg-amber-50 rounded-lg border border-amber-100 p-5">
            <h3 className="text-sm font-medium text-amber-800 mb-4">
              Métricas de Rendimiento
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    Tiempo de Respuesta
                  </span>
                  <span className="text-xs text-gray-500">
                    Objetivo: &lt; 2s
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    Throughput
                  </span>
                  <span className="text-xs text-gray-500">
                    Objetivo: &gt; 100 req/s
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    Tasa de Error
                  </span>
                  <span className="text-xs text-gray-500">
                    Objetivo: &lt; 1%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-700 text-sm flex items-center"
                >
                  <Activity className="h-4 w-4 mr-1" />
                  Ver métricas detalladas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-md p-4">
      <h3 className="font-medium text-gray-900 mb-1 flex items-center">
        <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

interface QuickLinkProps {
  title: string;
  href: string;
}

function QuickLink({ title, href }: QuickLinkProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-amber-600 hover:text-amber-700 hover:underline"
      >
        <ExternalLink className="h-3.5 w-3.5 mr-2" />
        <span>{title}</span>
      </a>
    </li>
  );
}

interface BestPracticeProps {
  text: string;
}

function BestPractice({ text }: BestPracticeProps) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-gray-700 text-sm">{text}</span>
    </li>
  );
}
