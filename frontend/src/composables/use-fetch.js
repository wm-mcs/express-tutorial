import { useState } from 'react';

export function useFetch() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(undefined);

  /**
   *
   * @param {String} url
   * @param {String} method
   * @param {Object} postData
   * @param {Function} onSuccess
   * @param {Function} onError
   * @returns
   */
  function doFetch(url, method = 'GET', postData = null, onSuccess, onError) {
    setLoading(true);
    setError(undefined);

    let data = [];

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

    return fetch(url, config)
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((json) => {
        const { status, body } = json;

        if (status === 200) {
          data = body.data;

          if (onSuccess) {
            setTimeout(() => {
              onSuccess();
            }, 300);
          }

          return data;
        } else {
          setError(body.message);

          if (onError) {
            setTimeout(() => {
              onError();
            }, 300);
          }
        }

        setLoading(false);
      })
      .then((data) => {
        return data;
      })

      .catch((err) => {
        setError(err.message);
        setLoading(false);

        if (onError) {
          setTimeout(() => {
            onError();
          }, 300);
        }
      });
  }

  return { loading, error, doFetch };
}
