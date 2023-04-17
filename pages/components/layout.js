
import Header from "./header";
import Footer from "./footer";
import ScrollBartop from "./scrollbartop";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main_content">
        <div className="container">{children}</div>
      </div>
      <Footer />
      <ScrollBartop/>
    </>
  )
}
