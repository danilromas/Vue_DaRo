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
		surn: 'Smit',
    cost: 100,
    amount: 10,
    visible: true,
    hidden: false,
		}
	},
  methods: {
	show: function(str) {
		alert(str ** 2);
	  },
  computed: {
	  full: function() {
        this.amount * this.cost;
	    }
    }, 
  change: function(){
    this.cost += 100; 
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
    <p>Цена на данный момент {{ cost }}</p>
    <p>{{ amount * cost }}</p>
	  <button @click = "change"> повысить цену </button>
    <button><a @click.prevent href="http://github.com/danilromas/">GitHub</a></button>
    <p v-if="visible">Текст видим пока я не пропишу false</p>
    <p v-if="!visible">Текст видим пока я не пропишу false</p>
    <p v-if="hidden">Текст видим пока я не пропишу false</p>
    <p v-if="!hidden">Текст видим пока я не пропишу false</p>
  </div>
</template>
  