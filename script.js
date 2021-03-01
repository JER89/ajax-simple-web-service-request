window.onload = function() {
    async function getData() {
        const response = await fetch ('https://thatsthespir.it/api ');

        if (!response.ok) {
            const message = ` Error: ${reponse.status}`
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
    getData()

        .then(data => {
            document.getElementById('quote').innerHTML = data.quote;
            document.getElementById("author").innerHTML = data.author;
            document.getElementById('img').innerHTML = `<img src='${
                data.photo}' alt='photo'>`
                console.log(data)
        })
        .catch(error => {
            error.message;
        });
}