/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-27 22:08:38
 * @LastEditTime 2020-06-27 22:08:58
 */

function flatx(arr) {

    let res = [];

    function dfs(arr) {
        for (const item of arr) {
            if (Array.isArray(item)) {
                dfs(item);
            } else {
                res.push(item);
            }
        }
    }

    dfs(arr);

    return res;
}

function flat(arr) {
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flat(b) : b), []);
}


let test: any[] = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(test.join().split(','));
// @ts-ignore
console.log(test.flat(Infinity));
let a = flat(test);
console.log(a);