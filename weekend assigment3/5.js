<!DOCTYPE HTML>
<HTML>
<HEAD>
<script>
et request=new XMLHttpRequest();                                   

request.open('GET','https://restcountries.eu/rest/v2/all',true);	
request.send();														

request.onload=function(){											

	var data=JSON.parse(this.response);								
	let sumPopulationAsian = data.filter(item => item.region=='Asia').reduce((s,x) =>s+=x.population,0);   
																			
	console.log('Total population of Asian countries is = '+sumPopulationAsian);  
};
</script>
</HEAD>
</HTML>
