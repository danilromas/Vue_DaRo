<script>
  export default{
    name:'App',
	data() {
		return {
		name: 'Danil',
		group: 'I-1-21',
    image: 'welcome.png',
    text: 'page',
		href: 'page.html',
    num1: 1,
    num2: 3,
    num3: 5,
		}
	}
}
</script>

<template>
  <div>
    <img v-bind:src="image">
    <h1> Hi, my name is {{name}} this is my Vue page {{group}} </h1>
    <p> I don't undestand this :(</p>
    <p><a href={{href}}>{{text}}</a></p>
    <p>{{ num1 + num2 + num3 }}</p>
  </div>
</template>