const app = require('express')();

const PORT = 8080 ;

app.listen(
    PORT,
    () => console.log('Server is running ${PORT}')
);
app.get('/users',(req ,res) =>{
    res.send({
        
            "users": [
              { "name": "Carl", "id": 536 ,"number":7894651230},
              { "name": "Heather", "id": 857,"number":8071481579 },
              {"name": "Tej", "id":001,"number":7984513135}
            ]    

    })

});