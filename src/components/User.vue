<template>
	<p>{{ name }}</p>
	<p>{{ surn }}</p>
	<p>{{ age }}</p>
 </template>
 
 
 
 <script>
 export default {
	 props: ['name', 'surn', 'age'],
	 data() {
		 return {
		 }
	 }
 }
 </script>