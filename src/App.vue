<script>
  export default{
    name:'App',
	data() {
		return {
		name: 'Danil',
		group: 'I-1-21',
    image: 'welcome.png',
    text1: 'page',
		href: 'page.html',
    selected: 'Число не было выбрано ',
    num: [5,1,3],
    obj: {x: 5, y: 1, z: 3},
    timebutton: 'Нажмите чтобы узнать время',
    text: 'xxx',
		}
	},
  methods: {
	show: function(str) {
		alert(str ** 2);
	  },
  change: function() {
		this.text = 'yyy';
   
    },
    change2: function() {
		this.text1 = 'Меняется';
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
    <button v-on:click="showdata()">{{timebutton}}</button>
	  <button @click="show(2)">квадрат 2</button>
	  <button @click="show(3)">квадрат 3</button>
	    {{ text }}
	  <button @click="change">text</button>

    {{ text1 }}
	  <button @click="change2">text1</button>
  </div>
</template>
  