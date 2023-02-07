
const checkbox = document.querySelector("#day-night");
const body = document.querySelector("body");
const tog = document.querySelector("myText");
const dayClass = 'day';
let dayVal = 'false';



//document.getElementById("rrr").innerHTML = "Working";

//var element =document.getElementById('rrr').innerHTML= +a;



function getAndSetTheme() {
    let theme = sessionStorage.getItem('theme');
    if(theme == null)  {
        theme = 'day';
        fetch(`https://theme-api.vercel.app/api/${theme}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.status)
            sessionStorage.setItem('theme', JSON.stringify({theme: data.theme}));
            if (data.status) {
                body.classList.remove(dayClass);
            } else {
                body.classList.add(dayClass);
            }
        });
    }
    
}

checkbox.addEventListener('change', (e,) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Origin', 'http://localhost:3000');
    
    let theme = sessionStorage.getItem('theme');

    if(theme == null)  {
        theme = 'day';
    }else {
        theme = JSON.parse(sessionStorage.getItem('theme')).theme;
    }

    fetch(`https://theme-api.vercel.app/api/${theme}`, {
        mode: 'cors',
        method: 'GET',
        credentials: 'include',
        headers: headers,
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data.status)
        sessionStorage.setItem('theme', JSON.stringify({theme: data.theme}));
        if (data.status) {
            body.classList.remove(dayClass);
        } else {
            body.classList.add(dayClass);
        }
    });
});


function totaltest() {
    document.getElementById("rrr").innerHTML = " Working";
}
function totaltest2() {
    document.getElementById("rrr").innerHTML = "Not Working";
}




