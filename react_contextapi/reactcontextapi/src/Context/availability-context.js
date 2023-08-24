import { createContext, useState } from "react";

const AvailabilityContext = createContext();

export const AvailabilityProvider = ({children}) => {
    const[isAvailable, setAvailability] = useState(false);
    const toggleAvailable = () => {
        setAvailability((prev) => !prev)
    }

    const val = {
        availability:isAvailable,
        toggler: toggleAvailable
    };

    return (
        <AvailabilityContext.Provider value={val}>
            {children}
        </AvailabilityContext.Provider>
    )


}


export default AvailabilityContext;