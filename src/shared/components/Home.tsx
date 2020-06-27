/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-25 11:21:44
 * @LastEditTime 2020-06-27 22:08:30
 */
import React, { useState, useEffect } from 'react';
import CheckboxGroup from './CheckboxGroup';
import { sendRequest } from '../utils/request';

const list = [
    {
        id: '1',
        value: '苹果',
    },
    {
        id: '2',
        value: '鸡蛋',
    },
    {
        id: '3',
        value: '鸭梨',
    },
];

function Home() {

    const [selected, setSelected] = useState(['1', '2', '3']);

    function handleChange(newSelected) {
        setSelected(newSelected);
    }

    useEffect(() => {
        let urls = Array.from({ length: 10 }, (v, k) => `http://localhost:6027/api/${k}`);
        let max = 3;
        let callback = (res) => {
            console.log('run callback', res);
        };
        //执行
        sendRequest(urls, max, callback);
    }, [])

    return (
        <div>
            <h2>Home</h2>
            <CheckboxGroup list={list} onChange={handleChange} selected={selected} />
        </div>
    );
}

export default Home;