import express from 'express';
import { open, close} from 'node:fs';
const app = express();
const port = 3001;

app.use(express.static('public'))



app.get('/api/files/:filename', (req, res) => {
  const filename = req.params["filename"] + ".json";
  console.log(filename)
  open(filename, 'r', (error, fd) =>{
    if(error){
      if(error.code === 'ENOENT'){
        res.json({error: "File not found"});
        return;
      }
      throw error;
    }

    try{
      console.log("FDSFDSF")
      console.log(fd);
       readMyData(fd);
    } finally {
      close(fd,(error)=>{
        if(error) throw error;
      });
    }
  });


 // res.send('Hello World!')
})

  app.post('/api/files/:filename', (request, response) => {
    console.log("create");
    response.send('Files is created');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




