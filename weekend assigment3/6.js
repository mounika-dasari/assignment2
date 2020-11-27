<!DOCTYPE HTML>
<HTML>
<HEAD>
<script>
let request=new XMLHttpRequest();                                   
request.open('GET','https://restcountries.eu/rest/v2/all',true);	

request.send();														

request.onload=function(){											

	var data=JSON.parse(this.response);								
																	 

	let countriesUsingUSD = data.filter(item => item.currencies[0].code=='USD').map(x=> x.name);   
																			
	console.log('Countries using USD as currency are - ' + countriesUsingUSD.join(';')); 
</script>
</HEAD>
</HTML>
