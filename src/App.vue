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
    arr: ['1', '2', '3'],
    methods: 
    {
        add: function() {
		this.arr.push(this.arr.length); // добавить элемент
        },
        removeb: function(){
        this.arr.shift(0) // убрать первый
        },
        removef: function(){
        this.arr.splice(this.arr.length-1) //убрать последний
        },
        removel: function(){
        this.arr.splice(this.arr.length-2, 1) //убрать предпоследний
        },
        sort1: function(){
        this.arr.sort() //отсортировать
        },
        reverse1: function(){
        this.arr.reverse() //отсортировать
        },
        computed: 
    {    }
      }
    }
  }
}
</script>

<template>
 <button @click="add">add</button>   
    <br>
    <button @click="removeb">убрать 1</button> 
    <br>    
    <button @click="removef">убрать last</button> 
    <br>    
    <button @click="removel">убрать last-1</button> 
    <br>    
    <button @click="sort1">sort</button> 
    <br>    
    <button @click="reverse1">перевернуть</button> 
    <br>    

    <ul>
        <li v-for="elem in arr">
            <p> {{ elem }}</p>
        </li>
    </ul>
</template>
  