
// btn event for page reload / new response
const btn_beer = document.querySelector('.btn_beer');
btn_beer.addEventListener('click', ()=>{
    location.reload();
    return false;

});

// request function for punk api
function makeRequest(url, callback){
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();

}
// request complete function
function requestComplete() {
    if (this.status != 200) return;
    let jsonString = this.responseText;
    let beerData = JSON.parse(jsonString);

    // check for response info
    console.log(beerData[0].name);
    console.log(beerData[0].description);
    console.log(beerData[0].image_url);
    
    // response info elmnts
    let container_imge = document.querySelector('#container_imge');
    let container_info = document.querySelector('#container_info');
    let container_misc = document.querySelector('#container_misc');

    let beer_title = document.createElement('h2');
    let beer_info = document.createElement('p');
    let beer_label = document.createElement('h5');
    let beer_pair = document.createElement('p');
    

    beer_label.innerHTML = 'Pairs with :';

    let beer_img = document.createElement('img');
    let beer_pic = beerData[0].image_url;
    
    // response info attachment
    beer_title.innerHTML = beerData[0].name;
    beer_info.innerHTML = beerData[0].description;
    beer_pair.innerHTML = beerData[0].food_pairing;

    // response info styles
    beer_title.style.color = 'red';
    beer_title.style.fontSize = '1.65rem'
    beer_title.style.letterSpacing = '4px';
    beer_title.style.letterSpacing = '3px';
    
    beer_info.style.color = '#FFF';
    beer_info.style.letterSpacing = '2px';
    beer_info.style.padding = '5%';

    beer_label.style.color = 'red';
    beer_label.style.fontSize = '1.35rem'
    beer_label.style.letterSpacing = '3px';

    beer_pair.style.color = '#FFF';
    beer_pair.style.letterSpacing = '2px';
    beer_pair.style.fontStyle = 'italic';
    beer_pair.style.padding = '5%';


    // set beer image to response image url
    beer_img.setAttribute('src', beer_pic);

    // append response to html
    container_imge.appendChild(beer_img);
    container_info.appendChild(beer_title);
    container_info.appendChild(beer_info);
    container_misc.appendChild(beer_label);
    container_misc.appendChild(beer_pair);

}

// request (GET) data from API
let app = function(){
    var url = "https://api.punkapi.com/v2/beers/random";
    makeRequest(url, requestComplete);

}
window.addEventListener('load', app);
