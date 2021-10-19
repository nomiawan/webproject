// www.youtube.com - welcome to my home page
// /about - welcome to my about page
// /contact - welcome to my contact page
// /temp - welcome to my temp page

const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    // show multiple data
    res.write('<h1>welcome to my home page</h1>');
    res.write('<h1>welcome to my again home page</h1>');
    res.send();
});

app.get('/about', (req, res)=> {
    res.send('welcome to my about page');
});

app.get('/contact', (req, res)=> {
    res.send('welcome to my contact page');
});

// app.get('/temp', (req, res)=> {
//     res.send([
//         {
//             id: 1,
//             name: 'noman'
//         },
//         {
//             id: 1,
//             name: 'noman'
//         },
//         {
//             id: 1,
//             name: 'noman'
//         }
//     ]);
// });

app.get('/temp', (req, res)=> {
    res.json([
        {
            id: 1,
            name: 'noman'
        },
        {
            id: 1,
            name: 'noman'
        },
        {
            id: 1,
            name: 'noman'
        }
    ]);
});

// The methods are identical when an object or array is passed,
// but res.json() will also convert non-objects,
// such as null and undefined, which are not valid json.

app.listen(port, ()=> {
    console.log(`listening to the port no ${port}`);
})