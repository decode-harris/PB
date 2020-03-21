
// btn event for page reload / new response
const btn_beer = document.querySelector('.btn_beer');
btn_beer.addEventListener('click', ()=>{
    
    // app();
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
    
    // container response selectors
    let container_imge = document.querySelector('#container_imge');
    let container_info = document.querySelector('#container_info');
    let container_misc = document.querySelector('#container_misc');
    let container_tips = document.querySelector('#container_tips');
    
    

    // container img
    let beer_title = document.createElement('h2');
    let beer_img = document.createElement('img');
    let beer_pic = beerData[0].image_url;

    // container info
    let beer_tag = document.createElement('h4');
    let beer_info = document.createElement('p');

    // container misc
    let beer_pair = document.createElement('h4');
    let beer_food = document.createElement('p');

    // container tips
    let beer_brew = document.createElement('h4');
    let beer_tips = document.createElement('p');
    
    // response info attachment
    beer_title.innerHTML = beerData[0].name;
    beer_tag.innerHTML = beerData[0].tagline;
    beer_info.innerHTML = beerData[0].description;
    beer_food.innerHTML = beerData[0].food_pairing[0];
    
    // set beer image to response image url
    beer_img.setAttribute('src', beer_pic);
    
    
    // response info styles

    // beer title [ h2 ]
    beer_title.style.color = 'darkblue';
    beer_title.style.fontWeight = 'bolder';
    beer_title.style.fontSize = '2rem'
    beer_title.style.padding = '5%';
    // beer_title.style.paddingTop = '15%';
    beer_title.style.letterSpacing = '3px';

    // beer image [ img ]
    beer_img.style.marginTop = '8%';

    // beer tagline [ h4 ]
    beer_tag.style.color = 'darkblue';
    beer_tag.style.fontStyle = 'italic';
    beer_tag.style.fontSize = '1.65rem';
    beer_tag.style.padding = '5%';
    beer_tag.style.textDecoration = 'underline';
    
    // beer info [ p ]
    beer_info.style.color = 'darkblue';
    beer_info.style.fontSize = '1.25rem';
    beer_info.style.letterSpacing = '2px';
    beer_info.style.padding = '5%';

    // beer pair [ h5 ]
    beer_pair.innerHTML = 'Pairs with ';
    beer_pair.style.color = 'darkblue';
    beer_pair.style.fontStyle = 'italic';
    beer_pair.style.fontSize = '1.65rem';
    beer_pair.style.padding = '5%';
    beer_pair.style.textDecoration = 'underline';
    

    // beer pair [ p ]
    beer_food.style.color = 'darkblue';
    beer_food.style.fontSize = '1.25rem';
    beer_food.style.letterSpacing = '2px';
    beer_food.style.padding = '5%';
    beer_food.style.fontStyle = 'italic';
    
    // beer brew [ h5 ]
    beer_brew.innerHTML = 'Brewers Tips ';
    beer_brew.style.color = 'darkblue';
    beer_brew.style.fontStyle = 'italic';
    beer_brew.style.fontSize = '1.65rem';
    beer_brew.style.padding = '5%';
    beer_brew.style.textDecoration = 'underline';

    // beer tips [ p ]
    beer_tips.innerHTML = beerData[0].brewers_tips;
    beer_tips.style.color = 'darkblue';
    beer_tips.style.padding = '5%';
    beer_tips.style.letterSpacing = '2px';
    beer_tips.style.fontSize = '1.25rem';

    
    // append response [ container imge ]
    container_imge.appendChild(beer_title);
    container_imge.appendChild(beer_img);

    // append response to [ container info ]
    container_info.appendChild(beer_tag);
    container_info.appendChild(beer_info);

    // append response to [ container misc ]
    container_tips.appendChild(beer_brew);
    container_tips.appendChild(beer_tips);
    
    // append response to [ container tips ]
    container_misc.appendChild(beer_pair);
    container_misc.appendChild(beer_food);
    

    

}


// request (GET) data from API
let app = function(){
    var url = "https://api.punkapi.com/v2/beers/random";
    makeRequest(url, requestComplete);

}
window.addEventListener('load', app);



    // let beer_ingr = document.createElement('li');
    
    // response info attachment
    

    // testing for beer ingredients
    // console.log(beerData[0].ingredients);
    // console.log(beerData[0].ingredients.malt[0,1,2]);
    // console.log(beerData[0].ingredients.yeast[0]);
    // console.log(beerData[0].ingredients.hops[0,1,2]);
    
    // let i;
    // let hops = beerData[0].ingredients.hops;
    
    // let hops_list = document.createElement('ul');
    // let malt_list = document.createElement('ul');
    // let yeast_list = document.createElement('ul');

    // let list = document.createElement('li');
    // for (i = 0; i < hops.length; i++) {
    
    //     list.innerHTML = hops[i].attribute;

        

    //     list.style.listStyleType = 'none';

    //     hops_list.appendChild(list);
    //     container_ingr.appendChild(hops_list);    

    //     console.log(hops);
    // }

    
    

    
    














