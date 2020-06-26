const express = require('express');
app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
var http = require('follow-redirects').http;
const cors = require('cors');
var fs = require('fs');
const parser = require('xml-js');
//const { response } = require('express');

app.use(session(
	{secret: 'ssshhhhh',
	 saveUninitialized: false,
	resave: false
}));
app.use(bodyParser.json());
app.use(cors());
var sess;
app.get('/isloggedin',(req,res) => {
	res.json({
		status: !!sess.user,
		
	})
	
})
app.get('/logout',(req,res) => {
	
   sess.destroy()
   res.json({
	status: !!sess.user

})
})
/*************************************************CUSTOMER LOGIN********************************************************************************* */
var customerLoginOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_dkcustomerlogin&receiverParty=&receiverService=&interface=SI_customerlogin_req&interfaceNamespace=http://dk.com/',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': 'Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};

app.post('/customerlogin', (req, res) => {
    const custID = req.body.customerid;
    const pwd = req.body.customerpwd;
    console.log(custID,pwd);
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dk="http://dk.com/">
    <soapenv:Header/>
    <soapenv:Body>
       <dk:MT_customerlogin_req>
          <CUSTID>${custID}</CUSTID>
          <PWD>${pwd}</PWD>
       </dk:MT_customerlogin_req>
    </soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(customerLoginOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_customerlogin_res'];
			res.send({
				response: resp['RESPONSE']['_text'],
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/**********************************************************************VENDOR LOGIN********************************************************************************** */
var vendorLoginOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_Vendorlogin_Req&interfaceNamespace=http://vendor.com/login',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorlogin', (req, res) => {
    const venID = req.body.id;
    const pwd = req.body.pwd;
    console.log(venID,pwd);
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:log="http://vendor.com/login">
	<soapenv:Header/>
	<soapenv:Body>
	   <log:MT_Vendorlogin_Req>
		  <VEN_ID>${venID}</VEN_ID>
		  <PWD>${pwd}</PWD>
	   </log:MT_Vendorlogin_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorLoginOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_Vendorlogin_Res'];
			console.log(resp)
			res.send({
				response: resp['RESPONSE']['_text'],
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			var logres  = resp['RESPONSE']['_text']
			if(logres == 'success'){
				sess = req.session;
				sess.user = req.body.id;
				sess.save()

			}
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/*******************************************************************VENDOR PROFILE DISPLAY*************************************************************************************************** */
var vendorProfileDisplayOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendorProfiledisp_Req&interfaceNamespace=http://vendor.com/profiledisplay',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorprofiledisplay', (req, res) => {
    const venID = sess.user;
    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:prof="http://vendor.com/profiledisplay">
	<soapenv:Header/>
	<soapenv:Body>
	   <prof:MM_VendorProfiledisp_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </prof:MM_VendorProfiledisp_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorProfileDisplayOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MM_VendorProfiledisp_Res'];
			console.log(resp)
			res.send({
				name: resp['NAME']['_text'],
				city: resp['CITY']['_text'],
				district: resp['DISTRICT']['_text'],
				country: resp['COUNTRY']['_text'],
				postalcode: resp['POSTAL_CODE']['_text'],
				address: resp['ADDRESS']['_text'],
				faxno: resp['FAX_NO']['_text'],
				teleno: resp['TELE_NO']['_text'],
				venid: resp['VEN_ID']['_text'],
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/*******************************************************************VENDOR PROFILE UPDATE************************************************************************************************** */
var vendorchangeprofileOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendorProfile_Req&interfaceNamespace=http://vendor.com/profileupdate',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorchangeprofile', (req, res) => {
	const id = sess.user;
	const name = req.body.name;
    const city = req.body.city;
	const dist = req.body.district;
	const pcode = req.body.postalcode;
	const addr = req.body.address;
	const country = req.body.country;
	const fax = req.body.fno;
	const telephone = req.body.tno;
	
    console.log(id);
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:prof="http://vendor.com/profileupdate">
	<soapenv:Header/>
	<soapenv:Body>
	   <prof:MT_VendorProfile_Req>
		  <VEN_ID>${id}</VEN_ID>
		  <NAME>${name}</NAME>
		  <CITY>${city}</CITY>
		  <DISTRICT>${dist}</DISTRICT>
		  <COUNTRY>${country}</COUNTRY>
		  <POSTAL_CODE>${pcode}</POSTAL_CODE>
		  <ADDRESS>${addr}</ADDRESS>
		  <FAX_NO>${fax}</FAX_NO>
		  <TELE_NO>${telephone}</TELE_NO>
	   </prof:MT_VendorProfile_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorchangeprofileOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VendorProfile_Res'];
			console.log(resp)
			res.send({
				response: resp['RESPONSE']['_text'],
				
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************VENDOR PURCHASE ORDER*********************************************************************************** */
var vendorpuchaseorderOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_Vendorpo_Req&interfaceNamespace=http://vendor.com/purchaseorder',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorpurchaseorder' ,(req,res) => {
	const venID = sess.user;
	console.log(venID)
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:pur="http://vendor.com/purchaseorder">
	<soapenv:Header/>
	<soapenv:Body>
	   <pur:MT_Vendorpo_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </pur:MT_Vendorpo_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorpuchaseorderOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_Vendorpo_Res']['PURCHASE_ORDER'];
			
		 /*res.status(200).json({resp: result})*/
		 console.log(resp);
		 res.json({response: resp})
				//name: resp[['name']['_text']]
				/*vendorName: resp['VendorName']['_text']*/
			
			
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************VENDOR QUOTATION*********************************************************************************** */
var vendorquotationOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendorQd_Req&interfaceNamespace=http://vendor.com/quotationdetails',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorquotation' ,(req,res) => {
    const venID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:quot="http://vendor.com/quotationdetails">
	<soapenv:Header/>
	<soapenv:Body>
	   <quot:MT_VendorQd_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </quot:MT_VendorQd_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorquotationOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VendorQd_Res']['QUOTATIONS'];
			console.log(resp);
			res.json({response: resp})
				//name: resp[['name']['_text']]
				/*vendorName: resp['VendorName']['_text']*/
			
			
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************VENDOR GOODS RECEIPT******************************************************************************************** */
var vendorgoodsreceiptOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendorGR_Req&interfaceNamespace=http://vendor.com/goodsreceipt',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorgoodsreceipt' ,(req,res) => {
    const venID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:good="http://vendor.com/goodsreceipt">
	<soapenv:Header/>
	<soapenv:Body>
	   <good:MT_VendorGr_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </good:MT_VendorGr_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorgoodsreceiptOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VendorGr_Res']['GOODS_RECEIPT'];
			const result = {};
			console.log(resp);
			res.json({response: resp})
			
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************VENDOR INVOICE*************************************************************************************8 */
var vendorinvoiceOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendoeInvoice_Req&interfaceNamespace=http://vendor.com/invoice',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorinvoice' ,(req,res) => {
    const venID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inv="http://vendor.com/invoice">
	<soapenv:Header/>
	<soapenv:Body>
	   <inv:MT_VendorInvoice_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </inv:MT_VendorInvoice_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorinvoiceOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VendorInvoice_Res']['INVOICES'];
			const result = {};
			console.log(resp);
			res.json({response: resp})

		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************VENDOR CREDIT MEMO**************************************************************************************** */
var vendorcreditmemoOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendorCredit_Req&interfaceNamespace=http://vendor.com/creditmemo',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorcreditmemo' ,(req,res) => {
    const venID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cred="http://vendor.com/creditmemo">
	<soapenv:Header/>
	<soapenv:Body>
	   <cred:MT_VendorCredit_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </cred:MT_VendorCredit_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorcreditmemoOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VendorCredit_Res']['CREDIT_MEMO'];
			const result = {};
			console.log(resp);
			res.json({response: resp})
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************VENDOR PAYMENT OVERDUES**************************************************************************************** */
var vendorpaymentOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_SBIS&receiverParty=&receiverService=&interface=SI_VendorPay_Req&interfaceNamespace=http://vendor.com/paymentoverdues',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/vendorpayment' ,(req,res) => {
    const venID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:pay="http://vendor.com/paymentoverdues">
	<soapenv:Header/>
	<soapenv:Body>
	   <pay:MT_VendorPay_Req>
		  <VEN_ID>${venID}</VEN_ID>
	   </pay:MT_VendorPay_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(vendorpaymentOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VendorPay_Res']['PAYMENT_OVERDUES'];
			const result = {};
			console.log(resp);
			res.json({response: resp})
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/************************************************************************************************************************************************************** */
/********************************************************************EMPLOYEE LOGIN****************************************************************************** */
var employeeLoginOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Employee_SBIS&receiverParty=&receiverService=&interface=SI_dkemployeelogin_req&interfaceNamespace=http://dk.com/employeelogin/',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/employeelogin', (req, res) => {
    const empID = req.body.id;
    const pwd = req.body.pwd;
    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:emp="http://dk.com/employeelogin/">
	<soapenv:Header/>
	<soapenv:Body>
	   <emp:MT_dkemployeelogin_req>
		  <EMPID>${empID}</EMPID>
		  <PWD>${pwd}</PWD>
	   </emp:MT_dkemployeelogin_req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(employeeLoginOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_dkemployeelogin_res'];
			console.log(resp)
			res.send({
				response: resp['RESPONSE']['_text'],
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			var logres  = resp['RESPONSE']['_text']
			if(logres == 'success'){
				sess = req.session;
				sess.user = req.body.id;
				sess.save()

			}
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************EMPLOYEE PROFILE DISPLAY************************************************************************************************ */
var employeeProfileDisplayOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Employee_SBIS&receiverParty=&receiverService=&interface=SI_EmployeeLogin_Req&interfaceNamespace=http://employee.com/login',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/employeerprofiledisplay', (req, res) => {
    
    const empID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:log="http://employee.com/login">
	<soapenv:Header/>
	<soapenv:Body>
	   <log:MT_EmloyeeLogin_Req>
		  <EmployeeId>${empID}</EmployeeId>
	   </log:MT_EmloyeeLogin_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(employeeProfileDisplayOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EmloyeeLogin_Resp'];
			console.log(resp)
			res.send({
				name: resp['Name']['_text'],
				gender: resp['Gender']['_text'],
				designation: resp['Designation']['_text'],
				contact: resp['Contact']['_text'],
				
				address: resp['Address']['_text'],
				age: resp['Age']['_text'],
				
				
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************EMPLOYEE LEAVE DISPLAY******************************************************************************************* */
var employeeleavedisplayOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Employee_SBIS&receiverParty=&receiverService=&interface=SI_EMPLOYEELEAVEDISPLAY_REQ&interfaceNamespace=http://employee.com/leavedisplay',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/employeeleavedisplay' ,(req,res) => {
    const empID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:leav="http://employee.com/leavedisplay">
	<soapenv:Header/>
	<soapenv:Body>
	   <leav:MT_EMPLOYEELEAVEDISPLAY_REQ>
		  <EMP_ID>${empID}</EMP_ID>
	   </leav:MT_EMPLOYEELEAVEDISPLAY_REQ>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(employeeleavedisplayOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EMPLOYEELEAVEDISPLAY_RES'];
			const result = {};
			console.log(resp);
			res.json({response: resp})
			 
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************EMPLOYEE LEAVE REQUEST************************************************************************************** */
var employeeleaverequestOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Employee_SBIS&receiverParty=&receiverService=&interface=SI_EMPLOYEELEAVE_REQ&interfaceNamespace=http://employee.com/leaverequest',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/employeeleaverequest', (req, res) => {
	const empID = sess.user;
	const name = req.body.name;
    const purpose = req.body.purpose;
	const noofdays = req.body.noofdays;
	const from = req.body.from;
	const to = req.body.to;
	const hrname = req.body.hrname;
	const leavetype = req.body.leavetype;
	
	
    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:leav="http://employee.com/leaverequest">
	<soapenv:Header/>
	<soapenv:Body>
	   <leav:MT_EMPLOYEELEAVE_REQ>
		  <EMP_ID>${empID}</EMP_ID>
		  <NAME>${name}</NAME>
		  <PURPOSE>${purpose}</PURPOSE>
		  <NO_OF_DAYS>${noofdays}</NO_OF_DAYS>
		  <FROM>${from}</FROM>
		  <TO>${to}</TO>
		  <HR_NAME>${hrname}</HR_NAME>
		  <LEAVE_TYPE>${leavetype}</LEAVE_TYPE>
	   </leav:MT_EMPLOYEELEAVE_REQ>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(employeeleaverequestOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EMPLOYEELEAVE_RES'];
			console.log(resp)
			res.send({
				response: resp['RESPONSE']['_text'],
				
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/********************************************************************EHSM LOGIN*******************************************************************************88 */
var ehsmLoginOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EHSM_SBIS&receiverParty=&receiverService=&interface=SI_EhsmLogin_Req&interfaceNamespace=http://ehsm.com/login',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/ehsmlogin', (req, res) => {
    const safeID = req.body.id;
    const pwd = req.body.pwd;
    console.log(safeID,pwd);
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:log="http://ehsm.com/login">
	<soapenv:Header/>
	<soapenv:Body>
	   <log:MT_EhsmLogin_Req>
		  <SAFE_ID>${safeID}</SAFE_ID>
		  <PWD>${pwd}</PWD>
	   </log:MT_EhsmLogin_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(ehsmLoginOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EhsmLogin_Res'];
			console.log(resp)
			res.send({
				response: resp['RESPONSE']['_text'],
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			var logres  = resp['RESPONSE']['_text']
			if(logres == 'success'){
				sess = req.session;
				sess.user = req.body.id;
				
				sess.save()

			}
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/******************************************************************************EHSM INCIDENTS**************************************************************************************** */
var ehsmincidentsOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EHSM_SBIS&receiverParty=&receiverService=&interface=SI_EhsmIncidents_Request&interfaceNamespace=http://ehsm.com/incidents',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/ehsmincidents' ,(req,res) => {
    const ehsmID = sess.user;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inc="http://ehsm.com/incidents">
	<soapenv:Header/>
	<soapenv:Body>
	   <inc:MT_EhsmIncidents_Request>
		  <SAFE_ID>${ehsmID}</SAFE_ID>
	   </inc:MT_EhsmIncidents_Request>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(ehsmincidentsOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EhsmIncidents_Response']['INCIDENTS'];
			const result = {};
			console.log(resp);
			res.json({response: resp})
			
			
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
 /*****************************************************************************EHSM CREATE INCIDENT************************************************************** */
 var ehsmCreateIncidentOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EHSM_SBIS&receiverParty=&receiverService=&interface=SI_EhsmIncidentCreate_Req&interfaceNamespace=http://ehsm.com/incidentcreate',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/ehsmcreateincident', (req, res) => {
	const id = sess.user;
    const title = req.body.incidenttitle;
	const desc = req.body.incidentdesc;
	const cat = req.body.incidentcat;
	const grp = req.body.incidentgrp;
	const idate = req.body.incidentdate;
	const itime = req.body.incidenttime;
	const pid = req.body.plantid;
	const paddr = req.body.plantaddr;
	const rperson = req.body.reportingperson;
	const rdate = req.body.reportingdate;
	const rtime = req.body.repportingtime;
    console.log(id);
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inc="http://ehsm.com/incidentcreate">
	<soapenv:Header/>
	<soapenv:Body>
	   <inc:MT_EhsmIncidentCreate_ReQ>
	   		<SAFE_ID>${id}</SAFE_ID>
		  <INCIDENT_TITLE>${title}</INCIDENT_TITLE>
		  <INCIDENT_DESC>${desc}</INCIDENT_DESC>
		  <INCIDENT_CAT>${cat}</INCIDENT_CAT>
		  <INCIDENT_GRP>${grp}</INCIDENT_GRP>
		  <PLANT_ID>${pid}</PLANT_ID>
		  <ADDRESS>${paddr}</ADDRESS>
		  <INCIDENT_DATE>${idate}</INCIDENT_DATE>
		  <INCIDENT_TIME>${itime}</INCIDENT_TIME>
		  <REPORTING_PERSON>${rperson}</REPORTING_PERSON>
		  <REPORTING_DATE>${rdate}</REPORTING_DATE>
		  <REPORTING_TIME>${rtime}</REPORTING_TIME>
	   </inc:MT_EhsmIncidentCreate_ReQ>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(ehsmCreateIncidentOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EhsmIncidentCreate_Res'];
			res.send({
				response: resp['RESPONSE']['_text'],
				incidentid: resp['INCIDENT_ID']['_text']
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/************************************************************************LIST************************************************************************* */
var listOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Employee_SBIS&receiverParty=&receiverService=&interface=SI_List_Req&interfaceNamespace=http://list.com',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/list' ,(req,res) => {
    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:list="http://list.com">
	<soapenv:Header/>
	<soapenv:Body>
	   <list:MT_List_Req>
		  <value></value>
	   </list:MT_List_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(listOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_List_Resp']['student'];
			console.log(resp);
			res.send({
				response: resp
				//name: resp[['name']['_text']]
				/*vendorName: resp['VendorName']['_text']*/
			});
			 
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/************************************************************EHSM INCIDENT CHANGE*********************************************************************************** */
var ehsmChangeIncidentOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EHSM_SBIS&receiverParty=&receiverService=&interface=SI_EhsmIncidentChange_Req&interfaceNamespace=http://ehsm.com/incidentchange',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': ' Basic UE9VU0VSOmthYXIyMDIw',
	},
	'maxRedirects': 20
};
app.post('/ehsmchangeincident', (req, res) => {
	const id = sess.user;
	const iid = req.body.incidentid
    const title = req.body.incidenttitle;
	const desc = req.body.incidentdesc;
	const cat = req.body.incidentcat;
	const grp = req.body.incidentgrp;
	const idate = req.body.incidentdate;
	const itime = req.body.incidenttime;
	const pid = req.body.plantid;
	const paddr = req.body.plantaddr;
	const rperson = req.body.reportingperson;
	const rdate = req.body.reportingdate;
	const rtime = req.body.repportingtime;
    console.log(id);
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inc="http://ehsm.com/incidentchange">
	<soapenv:Header/>
	<soapenv:Body>
	   <inc:MT_EhsmIncidentChange_Req>
		  <SAFE_ID>${id}</SAFE_ID>
		  <INCIDENT_ID>${iid}</INCIDENT_ID>
		  <INCIDENT_TITLE>${title}</INCIDENT_TITLE>
		  <INCIDENT_CAT>${cat}</INCIDENT_CAT>
		  <INCIDENT_GRP>${grp}</INCIDENT_GRP>
		  <INCIDENT_DESC>${desc}</INCIDENT_DESC>
		  <INCIDENT_DATE>${idate}</INCIDENT_DATE>
		  <INCIDENT_TIME>${itime}</INCIDENT_TIME>
		  <PLANT_ID>${pid}</PLANT_ID>
		  <ADDRESS>${paddr}</ADDRESS>
		  <REPORTING_PERSON>${rperson}</REPORTING_PERSON>
		  <REPORTING_DATE>${rdate}</REPORTING_DATE>
		  <REPORTING_TIME>${rtime}</REPORTING_TIME>
	   </inc:MT_EhsmIncidentChange_Req>
	</soapenv:Body>
 </soapenv:Envelope>`;
	const req1 = http.request(ehsmChangeIncidentOptions, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_EhsmIncidentChange_Res'];
			res.send({
				response: resp['RESPONSE']['_text'],
				
				/*vendorDesc: resp['VendorDesc']['_text'],
				vendorName: resp['VendorName']['_text']*/
			});
			
			
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
/************************************************************************************************************************************************* */
 //app.get('/data', (req,res) =>{
	//console.log('user is =>'+req.session.user);
//})
/*var samOptions = {
	'method': 'POST',
	'port': 50000,
	'host': 'dxktpipo.kaarcloud.com',
	'path': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_Sam&receiverParty=&receiverService=&interface=SI_LoginAll_Req&interfaceNamespace=http%3A%2F%2Floginall.com%2Fdemo',
	'headers': {
		'Content-Type': 'application/xml',
		'Authorization': 'Basic UE9VU0VSOkthYXJAUE8yMDIw',
	},
	'maxRedirects': 20
};

app.post('/samlogin', (req, res) => {
	const vendorID = req.body.vendId;
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:demo="http://loginall.com/demo">
	<soapenv:Header/>
	<soapenv:Body>
	<demo:MT_LoginAll_Req>
	<Designation>1</Designation>
	<Password>1</Password>
	<UserId>1</UserId>
	</demo:MT_LoginAll_Req>
	</soapenv:Body>
	</soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];

		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			const resp = JSON.parse(data)['SOAP:Envelope']['SOAP:Body'];
			res.send({
				resp: resp
			});
		});

		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
});
*/
app.listen(8000, () => {
	console.log('Reading on port ', 8000);
})