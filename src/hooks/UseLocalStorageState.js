import { useState, useEffect } from "react";

export default function useLocalStorageState(key, defaultVal) {
    // make piece of state, based off of value in localstorage ( or default value )
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
            console.log('try', val)
        } catch (e) {
            val = defaultVal;
            console.log('catch', e, val)
        }
        console.log('return', val)
        return val;
    });
    // use useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}