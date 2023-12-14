function firstNonRepeatedChar(str) {
 // Write your code here
	let ans= null;
	let myMap= new Map();
	let n= str.length;
	for(let i=0; i<n; i++){
		if(myMap.has(str[i])){
			myMap.set(str[i],myMap.get(str[i])+1);
		}else{
			myMap.set(str[i],1);
		}
	}
	for(const values of myMap.values()){
		if(value<==1) ans= value;
	}
	return ans;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
