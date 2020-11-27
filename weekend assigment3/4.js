<!DOCTYPE HTML>
<HTML>
<HEAD>
<script>
let request=new XMLHttpRequest();                                   

request.open('GET','https://restcountries.eu/rest/v2/all',true);	
																	

request.send();														

request.onload=function(){											

	var data=JSON.parse(this.response);								/

	let sumPopulation = data.reduce((s,x) =>s+=x.population,0);   
	console.log('Total population of all countries is = '+sumPopulation);		
};
</script>
</HEAD>
</HTML>
