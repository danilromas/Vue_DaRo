<script>
import { normalizeProps } from 'vue';
  export default{
    name:'App',
	data() {
		return {
		name: 'Danil',
		group: 'I-1-21',
    image: 'welcome.png',
    text: 'page',
		href: 'page.html',
    selected: 'Число не было выбрано ',
    num: [5,1,3],
    obj: {x: 5, y: 1, z: 3},
    timebutton: 'Нажмите чтобы узнать время',
    text: 'str',
		}
	},
  methods: {
	show: function() {
		let selected1 = this.cape(this.selected);
		alert('Выбранный день по счету это ' + selected1);
        
        let date = new Date();
        let dayWeek = [ '1', '2', '3', '4', '5', '6', '7',][date.getDay()];
	},
	cape: function(day_number) {
		switch (day_number) {
      case '1':
        return (day_number = 'Понедельник')
        break
      case '2':
        return (day_number = 'Вторник')
        break
      case '3':
        return (day_number = 'Среда')
        break
      case '4':
        return (day_number = 'Четверг')
        break
      case '5':
        return (day_number = 'Пятница')
        break
      case '6':
        return (day_number = 'Суббота')
        break
      case '7':
        return (day_number = 'Воскресенье')
        break
      }
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
    <select v-model="selected">
        <option>1</option>
        <option>2</option>
        <option>3</option>     
        <option>4</option>     
        <option>5</option>     
        <option>6</option>     
        <option>7</option>      
    </select>
        <p><span>Номер дня недели по счету: {{selected}} </span></p>
        <button @click="show">Показать название дня</button>
  </div>
  
</template>