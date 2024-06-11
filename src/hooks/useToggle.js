import { useState } from 'react';

export default function useToggle( initVal = false ) {
    const [state, settheState ] = useState(initVal);
    const toggle = () => {
        settheState(!state);
    }
    return [state, toggle];
}