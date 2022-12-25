async function fetchDataAsync(url) {
    const response = await fetch(url);
    console.log(await response.json());
    var myData = response.json();

}

fetchDataAsync('https://api.lanyard.rest/v1/users/898937224895270972');

if myData[0].status == 'idle'