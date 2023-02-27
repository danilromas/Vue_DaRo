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
    visible1: false,
		visible2: false,
    visible3: false,
		}
	},
  methods: 
    {
        hide: function() {
		this.visible = false;
	    },
        show: function() {
		this.visible = true;
	    },
        reversal: function() {
		this.visible = !this.visible;
        },
    computed: {
      toggle: function() {
	    this.visible1 = !this.visible1;
    },
        toggle1: function() {
	    this.visible2 = !this.visible2;
    },
        toggle2: function() {
	    this.visible3 = !this.visible3;
    },
    computed: 
    {
    }
    }
  }
}
</script>

<template>
  <p v-if="visible">текст</p>
    <br>
    <button @click="hide">скрыть</button>
    <button @click="show">показать</button>
    <button @click="reversal">скрыть/показать</button>
    <button @click="reversal">скрыть/показать</button>
    <button @click="toggle1">1</button>
	<p v-if="visible1">Текст Текст Текст</p>
<br>
    <button @click="toggle2">2</button>
    <p v-if="visible2">Текст Текст Текст</p>
<br>
    <button @click="toggle3">3</button>
    <p v-if="visible3">Текст Текст Текст</p>
</template>
  