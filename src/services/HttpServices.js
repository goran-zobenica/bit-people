class HttpService {
    get(url,token) {
        return fetch(url,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'x-api-key': 'B1tD3V'
                }
            })
            .then(response => response.json())
    };

    post(url, data, token,method='POST') {

        return fetch(url,
            {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'x-api-key': 'B1tD3V'
                }
            })
            .then(response => response.json())

    };

}

export const http = new HttpService()