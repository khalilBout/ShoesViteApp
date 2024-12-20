import { Outlet } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { ReactLenis } from "lenis/dist/lenis-react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/{{ns}}.json",
    },
  });

export default function Root() {
  // const [orderPopup, setOrderPopup] = useState(false);

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          // infinite: true,
        }}
      >
        <Outlet />
      </ReactLenis>
    </>
  );
}
