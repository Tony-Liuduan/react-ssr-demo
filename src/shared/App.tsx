/**
 * @fileoverview App Component
 * @author liuduan
 * @Date 2020-06-26 11:55:59
 * @LastEditTime 2020-06-26 14:16:56
 */
import 'isomorphic-unfetch';
import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from './routes';


const App = () => {
    return <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>

        <hr />

        {renderRoutes(routes)}
    </div>;
};


export default App;