<!DOCTYPE HTML>
<HTML>
<HEAD>
<script>
let request=new XMLHttpRequest();                                   

request.open('GET','https://restcountries.eu/rest/v2/all',true);	

request.send();														

request.onload=function(){											

	var data=JSON.parse(this.response);								
	data.forEach(x => console.log("Country name: "+x.name+"\t"+"Country capital: "+x.capital+"\t"+"Country flag image url: "+x.flag)); 

	
};
</script>
</HEAD>
</HTML>
