import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, changeData] = useState(null);
  const [isLoading, changeLoading] = useState(true);
  const [error, changeError] = useState(null);

  
  useEffect(() => {

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("We can't any fetch data sire");
          }
          return res.json();
        })
        .then((data) => {
          changeData(data);
          changeLoading(false);
        })
        .catch((err) => {
          changeLoading(false);
          changeError(err.message);
        })
    }, 100);
  }, [url])

  return {data, isLoading, error};
}

export default useFetch;
