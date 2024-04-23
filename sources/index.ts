import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v5 as uuidv5 } from 'uuid';
import { createHash } from 'crypto';
import { getAllzone , getzone } from './zone';

dotenv.config();

const express_port = process.env.SERVER_PORT;
const express_host = process.env.SERVER_HOST;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/token", async (req,res)=>{
    
    try{

        const zone =  getzone( req.body.zone );
        const countries = getAllzone();

        if(countries.TH.toString() == zone.toString()){

             // SETUP 
            const id:any = await req.body.id ;
            const user:any = await req.body.user ;
            const hash_sha256 = createHash('sha256').update(id).digest('hex');
            const api_uid = uuidv5(hash_sha256, uuidv5.URL);

            res.send({
                identifier:  [
                    {
                        "user" : user,
                        "zone" : countries.TH,
                        "encrypt" : {
                            uuid: api_uid,
                            hash: hash_sha256
                        },
                        
                    },
                    
                ]
            });

        }else{
            res.status(404).send('Not found');
        }

    }catch{
        res.status(500).send({message: "Error"});
    }
    
})

app.listen(express_port , () =>{
    console.log("server",`http://${express_host}:${express_port}`)
})