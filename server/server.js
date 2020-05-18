 const express = require('express');
 const bodyParser  = require('body-parser');
 const cors = require('cors');
 var http = require('follow-redirects').http;
 var fs = require('fs');
 const parser = require('xml2js');

 const PORT = 3000;
 const app = express();
 app.use(bodyParser.json());
 app.use(cors());
 
/*const api = require('.routes/api');
app.use('/api',api);*/

 var options = {
    'method':'POST',
    'port':50000,
    'host':'dxktpipo.kaarcloud.com',
    'path':'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_dkcustomerlogin&receiverParty=&receiverService=&interface=SI_customerlogin_req&interfaceNamespace=http://dk.com/',
    'headers':{
        'content-type': 'application/xml',
        'Authorization': 'Basic UE9VU0VSOkthYXJAUE8yMDIw',
    },
    'maxRedirects': 20
};

 
 app.post('/customerlogin',function(req,res) {
    
     const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dk="http://dk.com/">
     <soapenv:Header/>
     <soapenv:Body>
        <dk:MT_customerlogin_req>
           <CUSTID>${userid}</CUSTID>
           <PWD>${password}</PWD>
        </dk:MT_customerlogin_req>
     </soapenv:Body>
  </soapenv:Envelope>`;
     const req1 = http.request(options,function (res1){
         const chunks = [];
         res1.on("data",function (chunk){
             chunks.push(chunk);
         });
         res1.on("end",function (chunk){
             const body = Buffer.concat(chunks);
             const xml = body.toString();
             const data = parser.xml2json(xml,{compact: true,spaces:4});
             const resp = JSON.parse(data)['SOAP:ENVELOPE']['SOAP:BODY'][''];
             res.send({
                 response: resp['response']['_text']           
                  });
         
     });
     res1.on("error",function(error){
         console.error(error);
     });
 });
 req1.write(postData);
 req1.end();
});
 app.listen(PORT,function(){
     console.log("server running on:" + PORT);
 })

