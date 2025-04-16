import {
  BookOpen,
  CheckCircle,
  Code,
  ExternalLink,
  FileCode,
  PenToolIcon as Tool
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export default function SeleniumPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Selenium</h1>
          <p className="text-gray-600 mt-1">
            Framework de automatización para aplicaciones web
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
              ¿Qué es Selenium?
            </h2>
            <p className="text-gray-700 mb-4">
              Selenium es un conjunto de herramientas de código abierto que
              permite la automatización de navegadores web. Es ampliamente
              utilizado para pruebas automatizadas de aplicaciones web,
              asegurando que funcionen correctamente en diferentes navegadores y
              plataformas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                title="Multiplataforma"
                description="Compatible con Windows, macOS y Linux"
              />
              <FeatureCard
                title="Multilenguaje"
                description="Soporta Java, Python, C#, JavaScript y más"
              />
              <FeatureCard
                title="Multinavegador"
                description="Funciona con Chrome, Firefox, Safari, Edge"
              />
              <FeatureCard
                title="Integración CI/CD"
                description="Compatible con Jenkins, GitHub Actions, etc."
              />
            </div>
          </div>

          {/* Tabs for different content */}
          <Tabs
            defaultValue="code"
            className="bg-white rounded-lg border border-gray-200"
          >
            <TabsList className="border-b border-gray-200 w-full rounded-t-lg bg-gray-50 p-0">
              <TabsTrigger
                value="code"
                className="py-3 px-5 data-[state=active]:bg-white rounded-none data-[state=active]:border-b-2 data-[state=active]:border-amber-500"
              >
                <FileCode className="h-4 w-4 mr-2" />
                Ejemplo de Código
              </TabsTrigger>
              <TabsTrigger
                value="guide"
                className="py-3 px-5 data-[state=active]:bg-white rounded-none data-[state=active]:border-b-2 data-[state=active]:border-amber-500"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Guía Rápida
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="py-3 px-5 data-[state=active]:bg-white rounded-none data-[state=active]:border-b-2 data-[state=active]:border-amber-500"
              >
                <Tool className="h-4 w-4 mr-2" />
                Herramientas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Ejemplo de Prueba con Selenium WebDriver
              </h3>
              <div className="bg-gray-900 text-gray-100 rounded-md overflow-hidden mb-4">
                <Code>
                  {`import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class LoginTest {
    private WebDriver driver;
    
    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }
    
    @Test
    public void testSuccessfulLogin() {
        // Navegar a la página de login
        driver.get("https://example.com/login");
        
        // Encontrar elementos del formulario
        WebElement username = driver.findElement(By.id("username"));
        WebElement password = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.id("login-button"));
        
        // Ingresar credenciales
        username.sendKeys("usuario_test");
        password.sendKeys("contraseña_segura");
        
        // Hacer clic en el botón de login
        loginButton.click();
        
        // Verificar que el login fue exitoso
        WebElement welcomeMessage = driver.findElement(By.id("welcome-message"));
        assertEquals("Bienvenido, usuario_test!", welcomeMessage.getText());
    }
    
    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`}
                </Code>
              </div>
              <p className="text-gray-600 text-sm">
                Este ejemplo muestra una prueba básica de login utilizando
                Selenium WebDriver con Java y JUnit.
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
                    <p className="font-medium">Configuración del entorno</p>
                    <p className="text-gray-600 mt-1">
                      Instala Java JDK, configura las variables de entorno y
                      descarga el WebDriver para tu navegador.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Crear un proyecto</p>
                    <p className="text-gray-600 mt-1">
                      Configura un proyecto Maven o Gradle e incluye las
                      dependencias de Selenium.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Escribir pruebas</p>
                    <p className="text-gray-600 mt-1">
                      Crea clases de prueba utilizando un framework como JUnit o
                      TestNG.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Ejecutar pruebas</p>
                    <p className="text-gray-600 mt-1">
                      Ejecuta las pruebas desde tu IDE o mediante línea de
                      comandos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 mt-0.5">
                    5
                  </span>
                  <div>
                    <p className="font-medium">Integrar con CI/CD</p>
                    <p className="text-gray-600 mt-1">
                      Configura tus pruebas para ejecutarse automáticamente en
                      tu pipeline de integración continua.
                    </p>
                  </div>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="tools" className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Herramientas del Ecosistema Selenium
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ToolCard
                  title="Selenium WebDriver"
                  description="API para controlar navegadores web de forma programática."
                />
                <ToolCard
                  title="Selenium IDE"
                  description="Extensión para grabar y reproducir interacciones con el navegador."
                />
                <ToolCard
                  title="Selenium Grid"
                  description="Permite ejecutar pruebas en paralelo en diferentes máquinas y navegadores."
                />
                <ToolCard
                  title="Selenium Manager"
                  description="Gestiona automáticamente los controladores de navegador necesarios."
                />
              </div>
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
                title="Documentación Oficial"
                href="https://www.selenium.dev/documentation/"
              />
              <QuickLink
                title="GitHub Repository"
                href="https://github.com/SeleniumHQ/selenium"
              />
              <QuickLink
                title="WebDriver Downloads"
                href="https://www.selenium.dev/downloads/"
              />
              <QuickLink
                title="Selenium IDE"
                href="https://www.selenium.dev/selenium-ide/"
              />
            </ul>
          </div>

          {/* Best practices */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Mejores Prácticas
            </h3>
            <ul className="space-y-2">
              <BestPractice text="Utiliza Page Object Model para organizar tu código" />
              <BestPractice text="Implementa esperas explícitas en lugar de implícitas" />
              <BestPractice text="Usa selectores CSS o XPath estables" />
              <BestPractice text="Mantén las pruebas independientes entre sí" />
              <BestPractice text="Implementa reportes detallados" />
            </ul>
          </div>

          {/* Related frameworks */}
          <div className="bg-amber-50 rounded-lg border border-amber-100 p-5">
            <h3 className="text-sm font-medium text-amber-800 mb-4">
              Frameworks Relacionados
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-8 h-8 rounded bg-white border border-amber-200 flex items-center justify-center mr-3">
                  <span className="text-amber-600 font-medium text-xs">TS</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">TestNG</p>
                  <p className="text-xs text-gray-500">
                    Framework de pruebas para Java
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded bg-white border border-amber-200 flex items-center justify-center mr-3">
                  <span className="text-amber-600 font-medium text-xs">CP</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Cucumber</p>
                  <p className="text-xs text-gray-500">
                    BDD con lenguaje Gherkin
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded bg-white border border-amber-200 flex items-center justify-center mr-3">
                  <span className="text-amber-600 font-medium text-xs">AP</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Appium</p>
                  <p className="text-xs text-gray-500">
                    Automatización de apps móviles
                  </p>
                </div>
              </li>
            </ul>
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

interface ToolCardProps {
  title: string;
  description: string;
}

function ToolCard({ title, description }: ToolCardProps) {
  return (
    <div className="border border-gray-200 rounded-md p-4 hover:border-amber-300 hover:bg-amber-50 transition-colors">
      <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
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
