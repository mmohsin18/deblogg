let SHEET_ID = '138AkMo3HwXfvEouNgPANlLRGBnZrK_WpTK8M2gjg5Gk'
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
    let cardh6 = document.getElementById('cardh6');
    let carda = document.getElementById('carda');

    // let dt_title = document.getElementById('dt_title');
    // let dt_description = document.getElementById('dt_description');
    // let dt_image = document.getElementById('dt_image');
    let elem2 = document.getElementById('card');
    // elem2.innerHTML = data.table.rows[0].c[0].v;


    cardh1.innerHTML = data.table.rows[0].c[3].v
    cardh5.innerHTML = data.table.rows[0].c[5].v
    cardh6.innerHTML = "By, " + data.table.rows[0].c[2].v
    carda.href = data.table.rows[0].c[4].v
    console.log(data.table.rows[0].c[4].v);

    for(let i = 1; i<length; i++){
                // Assuming you have a reference to your NewBox div
        var NewBox = document.createElement('div');
        NewBox.id = ("box" + i);
        NewBox.className = ("card")
        card2.append(NewBox);

        // // Create an h6 element
        var h1 = document.createElement('h1');
        h1.className ="cardh1"
        var h5 = document.createElement('h5');
        h5.className ="cardh5"
        var h6 = document.createElement('h6');
        h6.className ="cardh6"
        var div = document.createElement('div');
        div.className ="carding"
        var a = document.createElement('a');
        a.className ="carda"

    //     // Set the content for the h2 element (you can replace "Your Heading" with the actual heading text)
    //     // console.log(data.table.rows[i].c[5].v)

        h1.innerHTML = data.table.rows[i].c[3].v;
        h5.innerHTML = data.table.rows[i].c[5].v;
        h6.innerHTML = "By, " + data.table.rows[0].c[2].v
        a.href = data.table.rows[i].c[4].v;
        a.innerHTML = "Visit Website";

        // Append the h2 element to the NewBox div
        NewBox.appendChild(h1);
        div.appendChild(h5);
        div.appendChild(h6);
        div.appendChild(a);
        NewBox.appendChild(div);
    }
});
