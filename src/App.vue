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
</template>
  