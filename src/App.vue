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
      toggle1: function() {
	    this.visible1 = !this.visible1;
    },
        toggle2: function() {
	    this.visible2 = !this.visible2;
    },
        toggle3: function() {
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
    <button @click="toggle1"> {{ visible1 ? 'hide' : 'show' }} </button>
    <p v-if="visible1">text</p>
    <br>

	<button @click="toggle2"> {{ visible2 ? 'hide' : 'show' }} </button>
    <p v-if="visible2">text</p>
    <br>

	<button @click="toggle3"> {{ visible3 ? 'hide' : 'show' }} </button>
    <p v-if="visible3">text</p>
</template>
  