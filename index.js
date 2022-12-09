const express = require('express')
const app = express()
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.get('/posts', (request, response) => {
    response.set('Access-Control-Allow-Origin','* ')
    let posts=[ ]
     db.collection('posts'). orderBy('date', 'desc'). get().then(snapshot=>{
        snapshot.forEach((doc) => {
           posts.push(doc.data())
          }); 
          response.send(posts)
     })

})

app.get('/createPost', (request, response) => {
    response.set('Access-Control-Allow-Origin','* ')
    response.send('createpost')

})
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("listening on port 3000")
    }
})