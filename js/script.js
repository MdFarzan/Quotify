async function getQuote(){
    let data =  await fetch('https://api.quotable.io/random/');

    data.json().then(data=>{
        let quote = data.content;
        let author = data.author;
        
        document.querySelector('#quote').innerText = quote;
        document.querySelector('#author').innerText = author;

        // setting href attribute for share with link
        document.querySelector('#twitter-link').setAttribute('href',`https://twitter.com/intent/tweet?url=https://mdfarzan.github.io/quotify&text=${quote} --By ${author}`);

        document.querySelector('#facebook-link').setAttribute('href',`https://www.facebook.com/sharer/sharer.php?u=https://mdfarzan.github.io/quotify`);

        document.querySelector('#telegram-link').setAttribute('href',`https://t.me/share/url?url=https://mdfarzan.github.io/quotify&text=${quote} -- By ${author}`);

        document.querySelector('#generate-quote i').classList.remove('rotate');
    }).catch(error=>{
        alert('Unable to show quote!' + error);
    });
        
    
};

document.querySelector('#generate-quote').addEventListener('click', ()=>{
    document.querySelector('#generate-quote i').classList.add('rotate');
    getQuote();

});
