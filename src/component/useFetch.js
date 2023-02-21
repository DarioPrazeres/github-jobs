import { useState, useEffect } from "react";
//https://serpapi.com/search.json?engine=google_jobs&q=webdev&hl=en
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;