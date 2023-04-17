import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/layout';
import "@/styles/globals.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}