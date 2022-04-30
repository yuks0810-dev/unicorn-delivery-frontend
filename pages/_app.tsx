// import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import SideBar from "../components/sideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SideBar>
        <Component {...pageProps} />
      </SideBar>
    </Layout>
  );
}

export default MyApp;
