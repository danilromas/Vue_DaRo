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
    num: [5,1,3],
    obj: {x: 5, y: 1, z: 3},
		}
	},
  methods: {
		showdata: function() {
		  alert(new Date());
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
    <p>{{ num[0]+num[1]+num[2]}}</p>
    <p>{{ obj.x + obj.y + obj.z }}</p>
    <p>{{showdata()}}</p>
  </div>
</template>