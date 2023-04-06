import { useEffect } from "react";

function usePageMetadata({ sitename, description, slogan }) {
  const pageTitle =
    sitename && slogan ? `${sitename} - ${slogan}` : "MusicBand";

  useEffect(() => {
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
  }, [pageTitle, description]);

  return pageTitle;
}

export default usePageMetadata;
