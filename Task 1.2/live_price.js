const woc_api_url = 'https://api.whatsonchain.com/v1/bsv/main/exchangerate'
async function getwoc() {
    const response = await fetch(woc_api_url);
    const data = await response.json();
    const {rate} = data;
    document.getElementById('prc').textContent=rate;
    console.log(rate);
}
getwoc();