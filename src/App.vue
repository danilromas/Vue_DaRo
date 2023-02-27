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
    Admin: true,
		}
	},
  methods: 
    {
      func: function() {
        this.Admin = !this.Admin;
    },  
    computed:
    { }
    }
  }
</script>

<template>
 <p v-if="Admin">+++</p>
    <p v-else>---</p>

	<button @click="func"> {{ Admin ? 'спрячь' : 'покажи' }} </button>
</template>
  