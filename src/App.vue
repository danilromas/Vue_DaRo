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
    day_n: 4,
    age: 25,
    active: false,
		valid: true,
    message: 'проверка',
    number: 0,
    num: 0,
		res: 0,
    value: "проверка",
    value_but: "",
    value_arr: "",
    checked: true,
    arr: [],
    methods: 
    {
    split_value: function () {
      this.value_array = this.value_button.split(" ")},
        computed: 
    {    }
      }
    }
  }
}
</script>

<template>  
 <p>Выберите язык ваш</p>
  <input type="checkbox" v-model="arr" value="russian"> Русский
	<input type="checkbox" v-model="arr" value="english"> Английский
	<input type="checkbox" v-model="arr" value="german"> Немецкий

    <ul>
        <li v-for="items in arr"> {{ items }} </li>

    </ul>
</template>

<style>

</style>

  