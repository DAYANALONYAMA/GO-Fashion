import { useState } from "react";

export const useColor = () => {
    const [primaryColor, setPrimaryColor] = useState('#111464');


    return { primaryColor };
}