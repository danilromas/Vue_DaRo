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
    isAuth: true,
    products: [
			{
				name: 'Гречка',
				price: 100,
				quantity: 5
			},
			{
				name: 'Кофе',
				price: 200,
				quantity: 4
			},
			{
				name: 'Сахар',
				price: 300,
				quantity: 3
			},]
		}
	},
  methods: 
    {
      func: function() {
        this.Admin = !this.Admin;
    },  
      delogin: function(){
        this.isAuth = !this.isAuth
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

  <p v-if="day_n === 1">Понедельник</p>
	<p v-if="day_n === 2">Вторник</p>
	<p v-if="day_n === 3">Среда</p>
	<p v-if="day_n === 4">Четверг</p>
	<p v-if="day_n === 5">Пятница</p>
	<p v-if="day_n === 6">Суббота</p>
	<p v-if="day_n === 7">Воскресенье</p>

  <p v-if="age < 18">Несовершеннолетний</p>
	<p v-else-if="age < 25">Молодой человек</p>
	<p v-else>Старше</p>
  
  <button @click="delogin"> {{ isAuth ? 'скрой' : 'покаж' }}</button>
	<div v-if="isAuth">
		<p>+++</p>
		<p>+++</p>
		<p>+++</p>
	</div>
  <div v-for="elem in items">
        <li>
        {{ elem }}
        </li>
        <li class="divider">divider</li>
    </div>
    <div>
        <table>
            <tr v-for="things in products">
                <td> {{ things.name }} </td>
                <td> - {{ things.price }} </td>
                <td> - {{ things.quantity }} </td>
            </tr>
        </table>
    </div>
    <p v-for="num in 30">
		{{ num }}
	</p>
</template>
  