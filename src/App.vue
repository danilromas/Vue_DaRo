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
 <valuearea v-model="value"></valuearea>
 <p>{{ value }}</p>
 <valuearea v-model="value_but"></valuearea>
 <ul v-for="elem in value_arr">
    <li :key="key">
      {{ elem }}
    </li>
  </ul>
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
.my-input {
    border: none;
    border-radius: 3px;
    padding: 1rem;
    font-size: 1.2rem;
    background-color: whitesmoke;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .my-input:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  } 
</style>

  