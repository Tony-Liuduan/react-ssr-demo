/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-27 19:36:03
 * @LastEditTime 2020-06-27 21:54:01
 */
export function sendRequest(urls: string[], max: number, callback: (res: any[]) => void) {

    let count = 0;
    let cur = 0;
    let l = urls.length;

    let result = [];

    if (cur === l) {
        callback(result);
        return
    };

    function request() {
        if (cur >= l) {
            return;
        }

        let url = urls[cur];
        let point = cur++;

        function handle(response) {
            console.log(point, 'end 当前并发数为: ' + count);
            result[point] = response;
            count--;
            if (cur < l) {
                request();
            } else if (count === 0) {
                callback(result);
            }
        }

        if (url) {
            count++;
            fetch(url)
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    const error = new Error(response.statusText);
                    // @ts-ignore
                    error.response = response;
                    throw error;
                })
                .then(res => res.json())
                .then(handle)
                .catch(handle);
        }

        console.log(point, 'start 当前并发数为: ' + count);

        if (count < max && cur < l) {
            request();
        }
    }

    request();
}
