
export const moneyCurrency = (value) => {
    if (value) {
        let currencys = new Intl.NumberFormat("en-CA").format(value);
        return currencys;
    } else {
        return 0;
    }
};