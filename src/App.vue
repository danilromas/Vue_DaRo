<script>
  export default{
    name:'App',
	data() {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const yearsArray = Array.from({ length: 100 }, (_, i) => today.getFullYear() - i);
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
    selected: '<--',
    selectedDay: today.getDate(),
      selectedMonth: today.getMonth(),
      selectedYear: today.getFullYear(),
      days: daysArray,
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
      message: '',
        actualmessage: '',
        text: '',
        text1: '',
      methods: 
    {
      submit: function(){
            this.actualmessage = this.message
        },
        show: function(){
            this.text = 'ALT key is pressed!'
        },
        displayText(button) {
        if (button === 'left') {
            this.text1 = 'left'} 
            else if (button === 'right') {
            this.text1 = 'right'} 
            else if (button === 'middle') {
            this.text1 = 'middle'
        }
        }
    }
}
    }
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
    <input type="checkbox" v-model="isDisabled">
    <input v-bind:disabled="isDisabled" type="text">
    <input v-model="message" @keyup.enter="submit"/>
        <p> {{ actualmessage  }}</p>

        <a href="#" @click.alt="show" > ссылка </a>
        <p>{{ text }}</p>
        <a href="#" @click.left="displayText('left')" @click.right="displayText('right')" @click.middle="displayText('middle')">Click</a>
        <p>{{ text1 }}</p>
</template>

<style>

</style>

  