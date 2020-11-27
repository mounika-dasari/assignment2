<!DOCTYPE HTML>
<HTML>
<HEAD>
<script>
let request=new XMLHttpRequest();                                   


request.open('GET','https://restcountries.eu/rest/v2/all',true);	
request.send();														


request.onload=function(){											

	var data=JSON.parse(this.response);								

	let asianCountries = data.filter(x =>x.region=='Asia').map(x => x.name);  
																			
	console.log('Asian Countries list  - '+asianCountries.join(';'));		
};
</script>
</HEAD>
</HTML>
