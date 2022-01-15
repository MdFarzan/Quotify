async function getQuote(){
    let data =  await fetch('https://api.quotable.io/random/');

    data.json().then(data=>{
        let quote = data.content;
        let author = data.author;
        
        document.querySelector('#quote').innerText = quote;
        document.querySelector('#author').innerText = author;
        document.querySelector('#generate-quote i').classList.remove('rotate');
    }).catch(error=>{
        alert(error);
    });
        
    
};

document.querySelector('#generate-quote').addEventListener('click', ()=>{
    document.querySelector('#generate-quote i').classList.add('rotate');
    getQuote();

});
