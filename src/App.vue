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
<p>
        Какой язык для вас родной?
    </p>
    <input name="radio" type="radio" v-model="arr" value="Реп"> Реп
	<input name="radio" type="radio" v-model="arr" value="Рок"> Рок
	<input name="radio" type="radio" v-model="arr" value="Металл"> Металл
    <br>

    you choosed: {{ arr }}

    <p v-if="arr == 'Реп'">
      из-за меня вы все пали, будто вы все эффект домино(few)
я разложил трупы на пол так же, как и сейчас карты таро(гадалка)
раньше кенты были близко, но сейчас даже вдали никого(never)
если вдали никого, значит уже они легли на пол</p>
    <p v-if="arr == 'Рок'">
      Вот и всё что было
Не было и нету
Все слои размокли
Все слова истлели.

Всё как у людей.
Всё как у людей.

В стоптанных ботинках годы и окурки,
В стиранных карманах паспорта и пальцы.

Всё как у людей.
Всё как у людей.

Резвые колеса, новые декреты,
Прочные постройки, братские могилы.

Всё как у людей.
Всё как у людей.

Вот и всё что было. Не было и нету,
Правильно и ясно. Здорово и вечно.

Всё как у людей.
Всё как у людей.
Всё как у людей.</p>
<p v-if="arr == 'Металл'">
      Тыщу лет, как в земле лежал
Железякой простой металл.
И ржавел и ржавел, и не знал,
Что внутри стержень стал
Чист, как сталь.

Как стихи завсегда спорят с прозою,
А грехи же Проказой - Коррозией,
Покрывают лицо чистой музыки.
Так подай ей стихами же Русскими,</p>
</template>

<style>

</style>

  