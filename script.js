let SHEET_ID = '10PEpj1wra80e9yJbwjMy9mn4J-M8Nr29ycHRHWrZeEo'
let SHEET_TITLE = 'Form Responses 1';
let SHEET_RANGE ='A2:G100';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    
    let length = data.table.rows.length;
    let card = document.getElementById('card');
    let card2 = document.getElementById('card2');
    let cardh1 = document.getElementById('cardh1');
    let cardh5 = document.getElementById('cardh5');
    let cardimg = document.getElementById('cardimg');

    // let dt_title = document.getElementById('dt_title');
    // let dt_description = document.getElementById('dt_description');
    // let dt_image = document.getElementById('dt_image');
    let elem2 = document.getElementById('card');
    // elem2.innerHTML = data.table.rows[0].c[0].v;


    cardh1.innerHTML = data.table.rows[0].c[3].v
    cardh5.innerHTML = data.table.rows[0].c[5].v
    cardimg.src = data.table.rows[0].c[6].v

    for(let i = 1; i<length; i++){
                // Assuming you have a reference to your NewBox div
        var NewBox = document.createElement('div');
        NewBox.id = ("box" + i);
        NewBox.className = ("carding")
        card2.append(NewBox);

        // // Create an h6 element
        var img = document.createElement('img');
        img.className ="cardimg"
        var h1 = document.createElement('h1');
        h1.className ="cardh1"
        var h5 = document.createElement('h5');
        h5.className ="cardh5"
        var h52 = document.createElement('h5');
        h52.className ="cardh52"

        // Set the content for the h2 element (you can replace "Your Heading" with the actual heading text)
        console.log(data.table.rows[i].c[5].v)

        h1.innerHTML = data.table.rows[i].c[3].v;
        h5.innerHTML = data.table.rows[i].c[5].v;
        h52.innerHTML = data.table.rows[i].c[4].v;

        // Append the h2 element to the NewBox div
        NewBox.appendChild(h1);
        NewBox.appendChild(h5);
        NewBox.appendChild(h52);
        NewBox.appendChild(img);
    }
});