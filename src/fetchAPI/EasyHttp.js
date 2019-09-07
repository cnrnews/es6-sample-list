/**
 * http 2.0
 * fetch http 封装
 */
class EasyHttp {
    // get
    async get(url) {
        const response = await
            fetch(url, {
                'Content-type': 'application/json'
            });
        return response.json();
    }
    // psot
    async post(url, data) {
        const response = await
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        return response.json();
    }
    // put
    async  put(url, data) {
        const response = await
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        return response.json();
    }
    // delete
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        });
        return await('数据删除成功');
    }
}