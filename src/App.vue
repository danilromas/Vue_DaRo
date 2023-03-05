<script>
  export default{
    name:'App',
    props: ['name', 'salary', 'age'],
	data() {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const yearsArray = Array.from({ length: 100 }, (_, i) => today.getFullYear() - i);
    
		return {
    name: String,
		salary: String,
		age: Number,
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
    selected: '<--',
    selectedDay: today.getDate(),
      selectedMonth: today.getMonth(),
      selectedYear: today.getFullYear(),
      days: daysArray,
      props: ['name'],
      months: [
        "Январь",
        "Февраль",
        "Mарт",
        "Aпрель",
        "Mай",
        "Июнь",
        "Июль",
        "Aвгуст",
        "Сентябрь",
        "Oктябрь",
        "Ноябрь",
        "Декабрь",
      ],
      isDisabled: false,
      years: yearsArray,
      newItem: '',
		  items: ['a', 'b', 'c', 'd', 'e'],
      users: [
			{
				id: 1,
				name: 'name1',
				surn: 'surn1',
				isEdit: false,
        age: 10,
			},
			{
				id: 2,
				name: 'name2',
				surn: 'surn2',
				isEdit: false,
        age: 10,
			},
			{
				id: 3,
				name: 'name3',
				surn: 'surn3',
				isEdit: false,
        age: 10,
			},
		],
	}
},
methods: {
  one: function () {
      document.write('Сообщение 1')
    },
    two: function () {
      document.write('Сообщение 2')
    }
  }
}

        import uchenik from './components/User.vue'
        components: {
              uchenik
           }
</script>

<template>  
<div class="withMargin">
<select v-model="selectedDay">
      <option v-for="day in days">{{ day }}</option>


    </select>

    <select v-model="selectedMonth">
      <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
    </select>

    <select v-model="selectedYear">
      <option v-for="year in years">{{ year }}</option>
    </select>
    </div>
  <input v-model="newItem">
	<button @click="addItem" >добавить в начало</button>
	<button @click="addItemToBegin" >добавить в конец</button>
  <ul>
		<li v-for="(item, index) in items" :key="index">
			{{ item }}
		</li>
	</ul>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th> 
          <th>Surname</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <template v-if="!user.isEdit">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surn }}</td>
          <button @click="edit(user)"> редактировать</button>
        </template>
        <template v-else>
                <td>{{ user.id }}</td>
				<td> <input v-model="user.name"> </td>
				<td>  <input v-model="user.surn"> </td>
                <td>  <button @click="save(user)">сохранить</button></td>
			</template>
        </tr>
      </tbody>
    </table>
  </div>
  <Rabotnik v-for="user in users"
    :id="user.id" :name="user.name" :salary="user.salary" :age="user.age" :key="user.id"/>
    <Rabotnik @show="Name" @show1="Salary"/>
    <Rabotnik @show1="one" @show2="two"/>
</template>

<style>

</style>

  