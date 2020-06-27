/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-25 11:21:44
 * @LastEditTime 2020-06-26 23:07:22
 */
import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';

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

    return (
        <div>
            <h2>Home</h2>
            <CheckboxGroup list={list} onChange={handleChange} selected={selected} />
        </div>
    );
}

export default Home;