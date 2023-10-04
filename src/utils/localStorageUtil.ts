export const localStorageUtil = {
    // Set an item in local storage
    setItem: (key: string, value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error setting local storage item:', error);
        }
    },

    // Get an item from local storage
    getItem: <T>(key: string): T | null => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error getting local storage item:', error);
            return null;
        }
    },

    // Remove an item from local storage
    removeItem: (key: string) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing local storage item:', error);
        }
    },
};
