import React from "react";

import './main.css';
import organic from './imageMain/organic-header.png';
import avocado from './imageMain/avocado.png';

export default () => {
    return <>
    <section className="main-part">
        <img src={organic}/>
        <img src={avocado} className="avocado"/>
        <p className="main-text">На відміну від фрешу (свіжовичавленого соку), для приготування смузі продукти використовуються цілком,
            що збільшує вміст в ньому корисних речовин. За структурою смузі — густа маса, що містить вітаміни і волокна її складових інгредієнтів,
            чим і відрізняється від фрешу та соку.</p>
    </section>
    </>
}