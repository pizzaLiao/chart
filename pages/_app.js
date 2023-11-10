import "@/styles/globals.css";
import "@/styles/ubike.css";
import { UserProvider } from "@/context/userContext";
// import { BrowserRouter } from 'react-router-dom';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>;
}
