import {useState, useEffect} from "react";

function UseLocalStorageState(key, defaultVal) {
    // make piece of state, based off of value (key) in localStorage (or else, default aka. 'defaultVal')
    const [state, setState] = useState(() => {
        // use this function to check if there is anything in localStorage under 'key'
        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch(error) {
            val = defaultVal;
        }
        return val;
    });
    // use useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}
export default UseLocalStorageState;