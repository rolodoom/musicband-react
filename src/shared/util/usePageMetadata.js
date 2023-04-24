import { useEffect } from "react";

function usePageMetadata(jsonDB) {
  useEffect(() => {
    if (jsonDB) {
      const sitename = jsonDB?.band.name || "MusicBand";
      const description = jsonDB?.band.description || "A musician page theme";
      const slogan = jsonDB.band?.description || "A musician page theme";

      const pageTitle =
        sitename && slogan ? `${sitename} - ${slogan}` : "MusicBand";

      document.title = pageTitle;
      const metaTags = document.getElementsByTagName("meta");
      for (let i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute("name") === "description") {
          metaTags[i].setAttribute("content", description);
        }
      }

      return () => {
        document.title = "Default Title";
        const metaTags = document.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
          if (metaTags[i].getAttribute("name") === "description") {
            metaTags[i].setAttribute("content", "");
          }
        }
      };
    }
  }, [jsonDB]);
}

export default usePageMetadata;
