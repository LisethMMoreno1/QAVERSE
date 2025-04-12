import { Helmet } from "react-helmet";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>QAVERSE - Estrategias de Testing Automatizado</title>
        <meta
          name="description"
          content="Plataforma de guías y buenas prácticas para QA"
        />
      </Helmet>
      <body>{children}</body>
    </>
  );
}
