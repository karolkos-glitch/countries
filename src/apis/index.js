export const countries = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/region/europe");
    const result = await response.json();
    return result;
}
export const countryName = async (name) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const result = await response.json();
    console.log(result);
    return result;
}