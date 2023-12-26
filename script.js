let SHEET_ID = '138AkMo3HwXfvEouNgPANlLRGBnZrK_WpTK8M2gjg5Gk'
let SHEET_TITLE = 'Form Responses 1';
let SHEET_RANGE ='A2:H100';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {

    let data = JSON.parse(rep.substr(47).slice(0,-2));
   // Assuming your data looks something like this
    // Extract rows from the response
    let length = data.table.rows.length;
    let rows = data.table.rows;

    
    // Now, data2 contains only the rows where the value of column H is 1
    // console.log(data2);
    
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


    // cardh1.innerHTML = data.table.rows[0].c[3].v
    // cardh5.innerHTML = data.table.rows[0].c[5].v
    // cardh6.innerHTML = "By, " + data.table.rows[0].c[2].v
    // carda.href = data.table.rows[0].c[4].v

    for(let i = 0; i<length; i++){
                // Filter the data based on the value of column H
            var data2 = rows.filter(function (row) {
                // Assuming H is the 8th column (index 7)
                return row.c[7] && row.c[7].v === 1;
            });

        
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

        h1.innerHTML = data2[i].c[3].v;
        h5.innerHTML = data2[i].c[5].v;
        h6.innerHTML = "By, " + data2[i].c[2].v
        a.href = data2[i].c[4].v;
        a.innerHTML = "Visit Website";

        // Append the h2 element to the NewBox div
        NewBox.appendChild(h1);
        div.appendChild(h5);
        div.appendChild(h6);
        div.appendChild(a);
        NewBox.appendChild(div);
        }


});

function searchdata() {
    let SHEET_ID = '138AkMo3HwXfvEouNgPANlLRGBnZrK_WpTK8M2gjg5Gk';
    let SHEET_TITLE = 'Form Responses 1';
    let SHEET_RANGE ='A2:H100';
  
    let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;
  
    return fetch(FULL_URL)
      .then(res => res.text())
      .then(rep => {
        return JSON.parse(rep.substr(47).slice(0, -2));
      });
  }

const searchFun = () => {
    searchdata()
      .then(data => {
        let length = data.table.rows.length;
        let rows = data.table.rows;
        let filter = document.getElementById('myinput').value.toUpperCase();
        let card = document.getElementById('card');
        let card2 = document.getElementById('card2');
        let card3 = document.getElementById('card3');
  
        for (let i = 0; i < length; i++) {
          let rowData = rows[i].c;
          let columnHValue = rowData[7] && rowData[7].v;
          let data6 = data
  
        //   console.log('Row:', i, 'Column H Value:', columnHValue, 'Data 6 Value:', data6);
  
          if (columnHValue === 1 && data6 && data6.table.rows[i].c[5].v.toUpperCase().includes(filter)) {
            var data7 = data6
            card.style.display = "none"
            card2.style.display = "none"
            var NewBox = document.createElement('div');
            NewBox.id = ("box" + i);
            NewBox.className = ("card4")
            card3.append(NewBox);

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
            
            // Set the content for the h2 element (you can replace "Your Heading" with the actual heading text)

            h1.innerHTML = data7.table.rows[i].c[3].v;
            h5.innerHTML = data7.table.rows[i].c[5].v;
            h6.innerHTML = "By, " + data7.table.rows[i].c[2].v
            a.href = data7.table.rows[i].c[4].v;
            a.innerHTML = "Visit Website";

            // Append the h2 element to the NewBox div
            NewBox.appendChild(h1);
            div.appendChild(h5);
            div.appendChild(h6);
            div.appendChild(a);
            NewBox.appendChild(div);
            console.log(data7);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    searchFun(); // Call your search function when the form is submitted
  });
