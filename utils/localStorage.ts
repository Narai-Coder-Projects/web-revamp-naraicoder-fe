export const setItemLocalStorage = <T>(key: string, value: T): void => {
    if (typeof window !== "undefined") {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error(`Error setting item to localStorage: ${error}`);
        }
    }
};


export const getItemLocalStorage = <T>(key: string): T | null => {
    if (typeof window !== "undefined") {
        try {
            const serializedValue = localStorage.getItem(key);
            if (serializedValue === null) {
                return null;
            }
            return JSON.parse(serializedValue) as T;
        } catch (error) {
            console.error(`Error getting item from localStorage: ${error}`);
            return null;
        }
    }
    return null;
};

export const removeItemLocalStorage = (key: string): void => {
    if (typeof window !== "undefined") {
        try {
            localStorage.removeItem(key);
            
        } catch (error) {
            console.error(`Error removing item from localStorage: ${error}`);
        }
    }
};
