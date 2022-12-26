interface InternalLocalStorageItem {
    key: string;
    value: string;
}

const internalLocalStorage: InternalLocalStorageItem[] = [];

export const getValueFromLocalStorage = (propName: string): string | null => {
    if (!localStorage) {
        const item = internalLocalStorage.find((item) => item.key === propName);
        return item?.value ?? null;
    }

    return localStorage.getItem(propName);
};

export const setValueInLocalStorage = (propName: string, value: string): void => {
    if (!localStorage) {
        internalLocalStorage.push({ key: propName, value: value });
    } else {
        localStorage.setItem(propName, value);
    }
};
