import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { throttle } from "lodash";
import Card from "./card";

export default function Body({ setLoading }) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(null);
  const [lock, setLock] = useState(false);

  const blurDataURL =
    "data:image/png;base64,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";

  const fetchNewsUtil = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsaggregator-gyv0.onrender.com/${page}`
      );
      const data = await response.json();
      if (!Array.isArray(data)) throw Error;
      setNews((prevNews) => [...prevNews, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setErr("No more news to fetch :(");
    } finally {
      setLoading(false);
      setLock(false);
      console.log("Lock set :", lock);
    }
  };

  const fetchNews = async () => {
    if (!lock) {
      setLock(true);
      console.log("lock set : ", lock);
      await fetchNewsUtil();
    }
  };

  const throttledFunc = throttle(fetchNews, 1000);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const dummyImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png";
  const imageFixer = (img) => {
    if (Array.isArray(img) && img.length > 0) return img[0].URL;
    return dummyImage;
  };

  const extractDomain = (url) => {
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
    url = url.split(".");
    url = url.slice(0, url.length - 1);
    return url.join(".");
  };

  useEffect(() => {
    if (inView) {
      throttledFunc();
    }
  }, [inView]);

  return (
    <div className="flex flex-col justify-center align-middle">
      <ul className="flex flex-wrap justify-around gap-5 items-center p-2 w-full h-full flex-1">
        {news?.map((el, key) => (
          <Card
            title={el.Title}
            desc={el.Description}
            link={el.Link}
            img={imageFixer(el.Image)}
            domain={extractDomain(el.Link)}
            dummyImage={dummyImage}
            blurDataURL={blurDataURL}
            key={key}
          />
        ))}
      </ul>
      {err && (
        <div className="flex items-center align-middle h-full justify-center w-full flex-1 text-xl">
          <p className="bg-red-50 text-red-600 border-2 border-red-600 p-5 py-3 rounded-xl my-2 font-semibold">
            Error : {err}
          </p>
        </div>
      )}
      {!err && !lock && <li className="list-none font-sans font-medium text-lg" ref={ref}>Load More...</li>}
    </div>
  );
}
