import "../styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Saludable</title>
        <meta name="description" content="Saludable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="author" content="Saludable" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Saludable" />
        <meta property="og:description" content="Saludable descripcion" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:url" content="https://www.saludable.com" />
        <meta property="og:site_name" content="Saludable" />
        <meta property="og:image" content="/images/ogsaludable.jpg" />
        <meta
          property="og:image:secure_url"
          content="/images/ogsaludable.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:alt" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Saludable" />
        <meta name="twitter:description" content="Saludable descripcion" />
        <meta name="twitter:image" content="/images/ogsaludable.jpg" />
        <meta name="twitter:creator" content="@saludable" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DH606GGYFF"
        strategy="afterInteractive"
      /> */}
      {/* Google tag (gtag.js) */}
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DH606GGYFF');`}
      </Script> */}
      {/* Google tag (gtag.js) */}
      <CartProvider>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </>
  );
}
