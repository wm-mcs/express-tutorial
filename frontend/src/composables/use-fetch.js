import { useState } from 'react';

export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);

  function doFetch(url, method = 'GET', postData = null, onSuccess, onError) {
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
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((json) => {
        const { status, body } = json;

        if (status === 200) {
          if (onSuccess) {
            setData(body.data);

            setTimeout(() => {
              onSuccess();
            }, 300);
          }
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);

        if (onError) {
          setTimeout(() => {
            onError();
          }, 300);
        }
      });
  }

  return { data, loading, error, success, doFetch };
}
