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
    arr: ['1', '2', '3'],
    obj: {
			red_color: true,
			font_big_size:  true,
      hidden: false,
		},
    methods: 
    {
        computed: 
    {    }
      }
    }
  }
}
</script>

<template>  
 <p :class="{isActive: active, hasError: valid}"> Текст какой-то </p>
</template>

<style>
.cssClasses{
  font-size: 30px;
  margin-left: 5%;

}
p.hidden {
	display: none;
}
.withMargin {
    margin-left: 20px;
}
.active {
	display: none;
}
.valid {
    color: red;
}

.isActive {
	display: none;
}
.hasError {
    color: red;
}
</style>

  