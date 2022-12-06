import { useState } from 'react';
import { redirect } from 'react-router-dom';

export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);

  function doFetch(url, method = 'GET', postData = null) {
    setLoading(true);
    setData([]);
    setError(undefined);
    setSuccess(false);

    const config = {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    };

    if (method === 'POST') {
      config.body = JSON.stringify(postData);
    }

    fetch(url, config)
      .then((res) => {
        if (res.status == 200) {
          setSuccess(true);
        }
        return res.json();
      })
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  return { data, loading, error, success, doFetch };
}
