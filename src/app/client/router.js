// export const routes = [
//     {
//         path: '/sandwiches',
//         component: Sandwiches
//     },
//     {
//         path: '/tacos',
//         component: Tacos,
//         routes: [
//             {
//                 path: '/tacos/bus',
//                 component: Bus
//             },
//             {
//                 path: '/tacos/cart',
//                 component: Cart
//             }
//         ]
//     }
// ];
import React, {Component, PureComponent} from 'react';
import {Switch, Route} from "react-router-dom";
import {Header} from '../shared/components/header/header';

export const xxx = () => (
    <Switch>
        <Route exact path='/invoices' component={Header}/>
    </Switch>
)