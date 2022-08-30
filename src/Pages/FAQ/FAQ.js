import NavBar from "../../global-components/NavBar/Navbar";
import { FAQCardComponent } from "./components/FAQCardComponent";
import Header from "./Header";
import { quotes } from './Quotes';



export default function FAQ() {
  const QUOTE =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <NavBar />
      <Header text={QUOTE} />
      <FAQCardComponent />
    </>
  )
}
