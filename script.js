
window.onload = function Next() {
   
    async function getData() {
        const response = await fetch ('https://thatsthespir.it/api ');

        const blockquote = await response.json();
        return blockquote;
    }
    getData().then(blockquote => {
            document.getElementById('quote').innerHTML = blockquote.quote;
            document.getElementById("author").innerHTML = blockquote.author;
            document.getElementById('img').innerHTML = `<img src='${
                blockquote.photo}' alt='photo'>`
                
        });
        
        document.getElementById("run").addEventListener("click", () => {
            Next(); 
        })
            
        
};

