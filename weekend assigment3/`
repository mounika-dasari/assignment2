<!DOCTYPE HTML>
<HTML>
<HEAD>
<script>
let request=new XMLHttpRequest();                                   

request.open('GET','https://restcountries.eu/rest/v2/all',true);	

request.send();														

request.onload=function(){											
	var data=JSON.parse(this.response);								

	let filteredCountries = data.filter(x =>x.population<200000).map(x => x.name);   
																			
	console.log('Countries list with less than 2 lacs population - '+filteredCountries.join(';'));		
};
</script>
</HEAD>
</HTML>
