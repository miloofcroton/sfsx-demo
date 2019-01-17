const request = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if (!ok) throw new Error('Failed request');
      return json;
    });
};

export const get = url => request(url, 'GET');

export const post = (url, body) => request(url, 'POST', body);
