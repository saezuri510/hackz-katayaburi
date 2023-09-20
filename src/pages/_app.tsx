import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { RecoilRoot } from "recoil";

const NUNITO_SANS_BOLD = Nunito_Sans({ style: "normal", subsets: ["cyrillic"], weight: "900" });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <style global jsx>
        {`
          :root {
            --font-nunito-sans--bold: ${NUNITO_SANS_BOLD.style.fontFamily};
          }
        `}
      </style>
    </RecoilRoot>
  );
};

export default MyApp;
