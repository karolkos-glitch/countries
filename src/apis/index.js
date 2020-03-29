const fetchData = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/region/europe");
    const result = await response.json();
    return result
}
export default fetchData;