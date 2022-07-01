let takkies = JSON.parse(localStorage.getItem('takkies'))?
JSON.parse(localStorage.getItem('takkies')):
 localStorage.setItem('takkies',JSON.stringify(
 [
 
    {
    id : 1,
    name : 'Airmax 95',
    price : 'R 2821,18',
    size : 'Size : 1, 3, 4.5, 6',
    store : 'Store : Promanade',
    image :'./shoes/56b14265c1176e35d7dfeaf5bf7b36d3cb6ab710-1100x735.jpg',
    description : 'The Nike Air Max 95 isn’t celebrating a milestone anniversary, but it’s maintained a steady flow of releases throughout 2022’s first five months.'
    },
    {
    id : 2,
    name : 'Retro 1',
    price : 'R 2799,00',
    size : 'Size : 3, 4, 7, ',
    store : 'Store : Cavendish',
    image :'./shoes/a1205480-7243-4328-a796-94aa714b06ff.webp',
    description : 'The Air Jordan 1 High “Obsidian/University Blue” is a 2019 release of the legendary silhouette in a colourway inspired by Michael Jordan’s college career at the University of North Carolina.'
    },
    {
    id : 3,
    name : 'Retro 1',
    price : 'R 2999,00',
    size : 'Size : 2,3',
    store : 'Store : WestGate',
    image :'./shoes/Air-Jordan-1-High-OG-Florida-Gators-PE.webp',
    description : 'In an airy white, laser orange and royal blue colourway, these Air Jordan 1 Mid sneakers are a bold take on Michael Jordans first signature shoe.'
    },
    {
    id : 4,
    name : 'Retro 1',
    price : 'R 3599,99',
    size : 'Size : 4, Promanade',
    store : 'Store : Kenilworth',
    image :'./shoes/air-jordan-1-i-denim-womens-release-date-dm9036-104-pair.jpg',
    description : 'Nike has been on a roll releasing the Air Max 1 Premium, Air Max 90 Premium, Air Max 97 Ultra and even the Air VaporMax in luscious burgundy tones.'
    },
    {
    id : 5,
    name : 'Airmax 95',
    price : 'R 2799,99,',
    size : 'Size : 2, 3, 4, 4.5',
    store : 'Store : CenturyCity',
    image :'./shoes/CJ3906-104-1_370x.webp',
    description : 'Back in October, images began to circulate teasing one of 2021s most anticipated Air Jordan 1 releases. Here we are months later, and the long-awaited "Hyper Royal" pair is finally set to release this weekend on April 17.'
    },
    {
    id : 6,
    name : 'Airmax 97',
    price : 'R 4099,99',
    size : 'Size : 2, 5',
    store : 'Store : Kenilworth',
    image :'./shoes/data.jpeg.webp',
    description : 'Another crisp edition of the Nike (NYSE:NKE -6.99%) Air Max 97 is on the way. Following its black and yellow iteration'
    },
    {
    id : 7,
    name : 'Airmax 90',
    price : 'R 7254,45',
    size : 'Size : 2, 4, 5',
    store : 'Store : Kenilworth',
    image :'./shoes/download.jpg',
    description : 'Nike Sportswear’s forthcoming “First Use” collection already includes different Nike Blazer Mid, Nike Air Force 1 and Nike Air Max 90 styles, but it continues to add tallies to its roster.'
    },
    {
    id : 8,
    name : 'Retro 1',
    price : 'R 3062,99',
    size : 'Size : 3, 4, 4.5, 5',
    store : 'Store : Cavendish',
    image :'./shoes/Nike-air-jordan-1-x-off-white.jpg',
    description : 'Although his name is a mainstay in sneaker culture, Tinker Hatfield’s name has been trending lately. '
    },
    {
    id : 9,
    name : 'Airmax 90',
    price : 'R 2599,99',
    size : 'Size : 2, 3',
    store : 'Store : WestGate',
    image :'./shoes/nike-air-max-90-first-use-DB0636-400.webp',
    description : 'The Men’s Nike Air Max 90 is truly one of the most iconic sneakers of all time. Released in a plethora of color combinations and materials throughout the years'
    },
    {
    id : 10,
    name : 'Airmax 1',
    price : 'R 2999,99',
    size : 'Size : 5, 6, 8',
    store : 'Store : Promanade',
    image :'./shoes/Nike-Airmax-1-1-scaled.jpeg',
    description : 'Highsnobiety’s dedicated #hskicks community is always guaranteed to provide the goods, and it is this knowledge that keeps us seeking out the most creative sneaker shots from across Instagram, week after week.'
    },
    {
    id : 11,
    name : 'Airmax 1',
    price : 'R 2256,94',
    size : 'Size : 1, 4.5, 6, 7',
    store : 'Store : CenturyCity',
    image :'./shoes/Patta-Air-max-Monarch.jpg',
    description : 'The Nike Air Max 1 Anniversary Orange features similar color blocking styles to its OG Red and Royal Blue colorways.'
    },
    {
    id : 12,
    name : 'Retro 4',
    price : 'R 3499,99',
    size : 'Size : 2, 3, 5, 7',
    store : 'Store : Cavendish',
    image :'./img/0ea-02-Air-jordan-4-Retro-Blog-f18.webp',
    description : 'The latest Air Jordan 4 retro features a near-identical arrangement on the ‘Infrared 23’-accented sneaker, similar to the ‘Green Glow’ style from August 2013.'
    }
 ]

 ));

 let row = document.querySelector('#row1');
function readData(shoes) {
    row.innerHTML = "";

    shoes.forEach( (item)=> {
        row.innerHTML += `
           <div class="col-4 pb-5">
           <div class="card" style="width: 18rem;">
           <img src='${item.image}' class="card-img-top" alt="Apartment" width="240px" height="240px">
           <div class="card-body">
               <h5 class="card-title">${item.id}</h5>
               <h3 class='name'>${item.name}</h3>
               <p class='price'>${item.price}</p>
               <h6 class='size'>${item.size}</h6>
               <br>
               <h6 class="store">${item.store}</h6>
           </div>
           <div class="card-body">
               <h6>Description</h6>
               <p class='lead'>${item.description}</p>
           </div>
       </div>
           </div>
        `;
    });
}

readData(takkies);

// function checktakkies(takkies) {
//   return takkies > document.getElementById("myInput").value;
// }

// function myFunction() {
//   document.getElementById("list").innerHTML = takkies.filter(checktakkies);
// }

// let newtakkies = takkies.filter(function (takkies) {
//   return takkies.name == "Airmax";
// });

// console.log(newtakkies);

function airmax(event){
    console.log(event);
    let newairmax = takkies.filter(a => {
        return a.name == event.target.value
    })
    readData(newairmax);
}

function airmax(event){
    console.log(event);
    let newairmax = takkies.filter(a => {
        return a.name == event.target.value
    })
    readData(newairmax);
}

function buy(event){
    console.log(event);
    let newairmax = takkies.filter(a => {
        return a.store == event.target.value
    })
    readData(newairmax);
}

function fit(event){
    console.log(event);
    let newairmax = takkies.filter(a => {
        return a.size == event.target.value
    })
    readData(newairmax);
}

document.getElementById('shoes').addEventListener('change', airmax);
document.getElementById('place').addEventListener('change', buy);
document.getElementById('feet').addEventListener('change', fit);