const express=require("express"); 
const app=express();
const path=require("path");
const {MongoClient}=require("mongodb");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const uri="mongodb://localhost:27017/employee"
app.get("/",(req,res)=>{
res.sendFile(path.join( __dirname,"employee.html"));
})
app.post("/login",(req,res)=>{ const query1=req.body;
const main_1=async()=>{
MongoClient.connect(uri,async(err,client)=>{ if(err) throw err;
const check=await
client.db("employee").collection("resume").findOne(query1); if(check==null){
await client.db("employee").collection("resume").insertOne(query1);
client.close(); res.send(`
<h1>Inserted Employee details</h1>
<h2>Employee name:${req.body.name}</h2>
<h2>Employee date of birth:${req.body.dob}</h2>
<h2>Employee qualification:${req.body.Qualification}</h2>
<imgsrc=${req.body.image}>Employee image</img>
`);
}else{ res.send(`
<h1>Data is already present in the database</h1>
`);
}
}); };
main_1();
})
app.post("/login/update",(req,res)=>{ const query2={
name:req.body.name
}
const update={
image:req.body.image
}
const main2=async()=>{
MongoClient.connect(uri,async(err,client)=>{ if(err) throw err;
const check=await client.db("employee").collection("resume").findOne(query2); 
if(check==null){
res.send(`<h1>Data is not present in the database</h1>`);
}
else{
await client.db("employee").collection("resume").updateOne(query2,{
$set:update, });
client.close(); res.send(`
<h1>Employee Updated details</h1>
<h2>Employee name:${req.body.name}</h2>
<imgsrc=${req.body.image}>Employee image</img> `);
}
});
};
main2();
})
app.get("/update",(req,res)=>{
res.sendFile(path.join( __dirname,"employee_update.html"));
})
app.listen(3002,()=>{ console.log("Server running in port 3002");
})
