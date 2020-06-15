const baseUrl = 'https://compare.monedero.com/api/getPrice';

const fetchApiInfo = (pairQueryFrom, pairQueryTo, amountQuery) => 
    fetch(`${baseUrl}?pair=${pairQueryFrom}-${pairQueryTo}&amount=${amountQuery}`)
    .then(response => response.json());

export { fetchApiInfo };

