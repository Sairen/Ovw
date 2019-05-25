import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfoNew } from './completeinfoNew';
import { Hero } from './hero';
import { GameItem } from './gameitem';
@Injectable()
export class AnniversaryService {

completeInfo = new CompleteInfoNew();


  
  constructor()
  {     
    let getData = localStorage.getItem("anniversary19");
    if (getData==null)
    {
      this.initEveryting();
      this.saveInfo();
      getData = localStorage.getItem("anniversary19");
    }
    this.completeInfo = JSON.parse(getData);
  }

  getInfo()
{
  return this.completeInfo;
}


saveInfo()
{  
    let savedInfo = JSON.stringify(this.completeInfo);
    localStorage.setItem("anniversary19", savedInfo);
}

initEveryting()
{
  this.initSkis();
  this.initHeroes1();
  this.initHeroes2();
  this.initIcons();
  this.initSprays();
}

initSkis()
{
  this.completeInfo = new CompleteInfoNew();

  this.completeInfo.goldSkins2019.push(new Skin("lskinmei19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskindiv19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinwin19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinpha19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinbri19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinroa19", 3000));

  this.completeInfo.goldSkins2018.push(new Skin("lskinmcc18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskindoo18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinsym18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskintor18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinori18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinbri18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinbas18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinjun18",1000));

  this.completeInfo.goldSkins2017.push(new Skin("lskingen17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinmei17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinsym17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinsol17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskintra17",1000)); 
  this.completeInfo.goldSkins2017.push(new Skin("lskindiv17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinbas17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinluc17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinzar17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinhan17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinpha17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("skintime",0));
   //from 2018 year

//skins for 18 and 19
  this.completeInfo.purpleSkins2018.push(new Skin("skinsol18",250));
  this.completeInfo.purpleSkins2018.push(new Skin("skintra18",250));
  this.completeInfo.purpleSkins2018.push(new Skin("skinluc18",250));

  this.completeInfo.purpleSkins2018.push(new Skin("skinsom19", 750));
  this.completeInfo.purpleSkins2018.push(new Skin("skindiv19", 750));
  this.completeInfo.purpleSkins2018.push(new Skin("skindoo19", 750));
  this.completeInfo.purpleSkins2018.push(new Skin("skinpha19", 750));
  this.completeInfo.purpleSkins2018.push(new Skin("skinwid19", 750));

  this.saveInfo();
}


initHeroes1()
{
  this.completeInfo.allHeroesPoseVoice.push(new Hero("Ана",
  new GameItem("Следуй за мной", "anavoice1", 25),
  new GameItem("Взрослые разговаривают", "anavoice2", 25),
  new GameItem("Научись расслабляться", "anavoice3", 25),
  new GameItem(" ", "anavoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Бастион",
  new GameItem("Биу-ву-у", "basvoice1", 25),
  new GameItem("Ду-у дун", "basvoice2", 25),
  new GameItem("Зур-р зур-р", "basvoice3", 25),
  new GameItem(" ", "basvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Батист",
  new GameItem("Не моя проблема [75]", "batvoice1", 75),
  new GameItem("Смешно [75]", "batvoice2", 75),
  new GameItem("Тебе бы отлежаться [75]", "batvoice3", 75),
  new GameItem(" ", "batvoice4", 0)));

  this.completeInfo.allHeroesPoseVoice.push(new Hero("Бригитта",
  new GameItem("Всё будет!", "brivoice1", 25),
  new GameItem("Всего лишь царапина", "brivoice2", 25),
  new GameItem("Доверьтесь эксперту", "brivoice3", 25),
  new GameItem("Прогуляйся", "brivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Вдова",
  new GameItem("Как скучно", "widvoice1", 25),
  new GameItem("Прости", "widvoice2", 25),
  new GameItem("Мне только в радость", "widvoice3", 25),
  new GameItem("Удачи мало", "widvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Генджи",
  new GameItem("Не впечатляет", "genvoice1", 25),
  new GameItem("Ты мне нравишься", "genvoice2", 25),
  new GameItem("Исцели себя", "genvoice3", 25),
  new GameItem("Изящное оружие", "genvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Дзенъятта",
  new GameItem("Во всем сущем - тайна", "zenvoice1", 25),
  new GameItem("Какое разочарование", "zenvoice2", 25),
  new GameItem("Терпение", "zenvoice3", 25),
  new GameItem("", "zenvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Дива",
  new GameItem("Да ну вас всех!", "divvoice1", 25),
  new GameItem("Новый уровень", "divvoice2", 25),
  new GameItem("Без проблем!", "divvoice3", 25),
  new GameItem("Свой рейт", "divvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Думфист",
  new GameItem("Бей в кость", "doovoice1", 25),
  new GameItem("Меня огорчает", "doovoice2", 25),
  new GameItem("Ты не победишь", "doovoice3", 25),
  new GameItem(" ", "doovoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Жнец",
  new GameItem("Никто не уцелел", "reavoice1", 25),
  new GameItem("Увидимся", "reavoice2", 25),
  new GameItem("Убожество", "reavoice3", 25),
  new GameItem(" ", "reavoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Заря",
  new GameItem("Добро с кулаками", "zarvoice1", 25),
  new GameItem("И это все?", "zarvoice2",25),
  new GameItem("Делай зарядку", "zarvoice3", 25),
  new GameItem("Мой секрет?", "zarvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Крысавчик",
  new GameItem("Ой, обронил", "junvoice1", 25),
  new GameItem("Тупица", "junvoice2", 25),
  new GameItem("Неприметнейше!", "junvoice3", 25),
  new GameItem("Это была бомба!", "junvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Лусио",
  new GameItem("Всех бафну", "lucvoice1", 25),
  new GameItem("Отведайте Луси-Оуз", "lucvoice2", 25),
  new GameItem("А теперь слышно?", "lucvoice3", 25),
  new GameItem(" ", "lucvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("МакКри",
  new GameItem("Цепляй кобуру", "mccvoice1", 25),
  new GameItem("Я угощаю", "mccvoice2", 25),
  new GameItem("Как я вам?", "mccvoice3", 25),
  new GameItem("Оба стиля", "mccvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Мерси",
  new GameItem("Всегда пожалуйста", "mervoice1", 25),
  new GameItem("Спорная оценка", "mervoice2", 25),
  new GameItem("И не такое видела", "mervoice3", 25),
  new GameItem("Вызывайте скорую", "mervoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Мойра",
  new GameItem("Невероятно", "moivoice1", 25),
  new GameItem("Отличные новости", "moivoice2", 25),
  new GameItem("Это был триумф", "moivoice3", 25),
  new GameItem("Эволюция обходит", "moivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Мэй",
  new GameItem("Так подло", "meivoice1", 25),
  new GameItem("Хочу помочь", "meivoice2", 25),
  new GameItem("Доброе утро", "meivoice3", 25),
  new GameItem("Простите...", "meivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Ориса",
  new GameItem("Благодарю за содействие", "orivoice1", 25),
  new GameItem("Вы довольны?", "orivoice2", 25),
  new GameItem("Плохие предчувствия", "orivoice3", 25),
  new GameItem("Вернуть Ифи", "orivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Райнхардт",
  new GameItem("Пиво!", "reivoice1", 25),
  new GameItem("Честь! Справедливость! Райнхардт!", "reivoice2", 25),
  new GameItem("Иди сюда!", "reivoice3", 25),
  new GameItem("Молот мне!", "reivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Симметра",
  new GameItem("Комната смерти", "symvoice1", 25),
  new GameItem("Ход твоих мыслей", "symvoice2", 25),
  new GameItem("Обсудим ошибки", "symvoice3", 25),
  new GameItem("Как драматично", "symvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Солдат76",
  new GameItem("Как скажешь", "solvoice1", 25),
  new GameItem("Учить тебя жить", "solvoice2", 25),
  new GameItem("Сделай это сам", "solvoice3", 25),
  new GameItem("Я умер герояем", "solvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Сомбра",
  new GameItem("В горле пересохло", "somvoice1", 25),
  new GameItem("Закончили трепаться?", "somvoice2", 25),
  new GameItem("Больше так не делать", "somvoice3", 25),
  new GameItem("", "somvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Торбьорн",
  new GameItem("Верь мне", "torvoice1", 25),
  new GameItem("Старушка выдержит", "torvoice2", 25),
  new GameItem("Не додумался", "torvoice3", 25),
  new GameItem("Кому фрикаделек?", "torvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Трейсер",
  new GameItem("Тормозишь", "travoice1", 25),
  new GameItem("Я что-то пропустила?", "travoice2", 25),
  new GameItem("Что-нибудь забуду", "travoice3", 25),
  new GameItem("Самое интересное", "travoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Турбосвин",
  new GameItem("Начнется свинство", "roavoice1", 25),
  new GameItem("Не люблю болтунов", "roavoice2", 25),
  new GameItem("Это мое дело", "roavoice3", 25),
  new GameItem("Много болтаешь", "roavoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Уинстон",
  new GameItem("Да!", "winvoice1", 25),
  new GameItem("Настало мое время", "winvoice2", 25),
  new GameItem("Хорошая горилла", "winvoice3", 75),
  new GameItem(" ", "winvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Фара",
  new GameItem("Покажи что можешь", "phavoice1", 25),
  new GameItem("Порхай как бабочка", "phavoice2", 25),
  new GameItem("Не сбивайся с курса", "phavoice3", 75),
  new GameItem("", "phavoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Хаммонд",
  new GameItem("Прокачено [75]", "hamvoice1", 75),
  new GameItem("Самоанализ [75]", "hamvoice2", 75),
  new GameItem("Трепещите [75]", "hamvoice4", 75),
  new GameItem("", "hamvoice3", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Ханзо",
  new GameItem("Да будет так", "hanvoice1", 25),
  new GameItem("Неверное суждение", "hanvoice2", 25),
  new GameItem("Не буди дракона", "hanvoice3", 75),
  new GameItem("Мое предназначение", "hanvoice4", 75)));

  this.completeInfo.allHeroesPoseVoice.push(new Hero("Эш",
  new GameItem("Жизнь - дорога [75]", "ashvoice1", 75),
  new GameItem("Легка на подъем [75]", "ashvoice2", 75),
  new GameItem("Хочешь усложнить? [75]", "ashvoice4", 75),
  new GameItem(" ", "ashvoice3", 0)));
this.saveInfo();
}


initHeroes2()
{
  this.completeInfo.allHeroesSprayPotg.push(new Hero("Ана",
  new GameItem("Туз червей", "anaspray1", 25),
  new GameItem(" ", "anapose1", 0),
  new GameItem("Танец", "anaemot1", 250),
  new GameItem("", "anapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Бастион",
  new GameItem("Десятка треф", "basspray1", 25),
  new GameItem(" ", "baspose1", 0),
  new GameItem("Робо-буги", "basemot1", 250),
  new GameItem(" ", "baspotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Батист",
  new GameItem("Восьмерка червей [75]", "batspray1", 75),
  new GameItem(" ", "batpose1", 0),
  new GameItem("Конпа [750]", "batemot1", 750),
  new GameItem(" ", "batpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Бригитта",
  new GameItem("Восьмерка пик", "brispray1", 25),
  new GameItem("", "bripose1", 0),
  new GameItem("Танец", "briemot1", 250),
  new GameItem(" ", "bripotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Вдова",
  new GameItem("Дама червей", "widspray1", 25),
  new GameItem("", "widpose1", 0),
  new GameItem("Балет", "emot1", 250),
  new GameItem(" ", "widpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Генджи",
  new GameItem("Валет треф", "genspray1", 25),
  new GameItem("Взгляд через плечо [225]", "genpose1", 225),
  new GameItem("Танец", "genemot1", 250),
  new GameItem(" ", "genpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Дзенъятта",
  new GameItem("Король пик", "zenspray1", 25),
  new GameItem("", "zenpose1", 0),
  new GameItem("Танец", "zenemot1", 250),
  new GameItem("", "zenpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Дива",
  new GameItem("Десятка червей", "divspray1", 25),
  new GameItem(" ", "divpose1", 0),
  new GameItem("Танец", "divemot1", 250),
  new GameItem("", "divpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Думфист",
  new GameItem("Девятка треф", "doospray1", 25),
  new GameItem("Замах", "doopose1", 0),//check this
  new GameItem("Танец", "dooemot1", 250),
  new GameItem("", "doopotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Жнец",
  new GameItem("Туз треф", "reaspray1", 25),
  new GameItem("Готов убивать [225]", "reapose1", 225),
  new GameItem("Танец", "reaemot1", 250),
  new GameItem(" ", "reapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Заря",
  new GameItem("Десятка пик", "zarspray1", 25),
  new GameItem("", "zarpose1", 0),
  new GameItem("Танец", "zaremot1", 250),
  new GameItem(" ", "zarpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Крысавчик",
  new GameItem("Джокер", "junspray1", 25),
  new GameItem("", "junpose1", 0),
  new GameItem("Топчу асфальт", "junemot1", 250),
  new GameItem(" ", "junpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Лусио",
  new GameItem("Валет бубуей", "lucspray1", 25),
  new GameItem("", "lucpose1", 0),
  new GameItem("Кто так может", "lucemot1", 250),
  new GameItem(" ", "lucpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("МакКри",
  new GameItem("Валет пик", "mccspray1", 25),
  new GameItem("", "mccpose1", 0),
  new GameItem("Ковбойский танец", "mccemot1", 250),
  new GameItem(" ", "mccpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Мерси",
  new GameItem("Дама треф", "merspray1", 25),
  new GameItem("Зонтик", "merpose1", 0),
  new GameItem("Хастл", "meremot1", 250),
  new GameItem(" ", "merpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Мойра",
  new GameItem("Девятка черв", "moispray1", 25),
  new GameItem("", "moipose1", 0),
  new GameItem("Танец", "moiemot1", 250),
  new GameItem(" ", "moipotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Мэй",
  new GameItem("Десятка бубей", "meispray1", 25),
  new GameItem(" ", "meipose1", 0),
  new GameItem("Потанцулечки", "meiemot1", 250),
  new GameItem(" ", "meipotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Ориса",
  new GameItem("Девятка пик", "orispray1", 25),
  new GameItem("Маяк [225]", "oripose1", 225),
  new GameItem("Танец", "oriemot1", 250),
  new GameItem("", "oripotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Райнхардт",
  new GameItem("Король червей", "reispray1", 25),
  new GameItem("", "reipose1", 0),
  new GameItem("Вальс", "reiemot1", 250),
  new GameItem(" ", "reipotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Симметра",
  new GameItem("Девятка бубей", "symspray1", 25),
  new GameItem("", "sympose1", 0),
  new GameItem("Танец", "symemot1", 250),
  new GameItem(" ", "sympotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Солдат76",
  new GameItem("Туз пик", "solspray1", 25),
  new GameItem(" ", "solpose1", 0),
  new GameItem("Танец", "solemot1", 250),
  new GameItem(" ", "solpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Сомбра",
  new GameItem("Дама пик", "somspray1", 25),
  new GameItem("", "sompose1", 0),
  new GameItem("Танец", "somemot1", 250),
  new GameItem(" ", "sompotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Торбьорн",
  new GameItem("Король треф", "torspray1", 25),
  new GameItem(" ", "torpose1", 0),
  new GameItem("Танец", "toremot1", 250),
  new GameItem("", "torpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Трейсер",
  new GameItem("Туз бубей", "traspray1", 25),
  new GameItem("Подмигивание", "trapose1", 0),
  new GameItem("Хастл", "traemot1", 250),
  new GameItem(" ", "trapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Турбосвин",
  new GameItem("Джокер ", "roaspray1", 25),
  new GameItem("", "roapose1", 0),
  new GameItem("Танец", "roaemot1", 250),
  new GameItem(" ", "roapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Уинстон",
  new GameItem("Валет Червей", "winspray1", 25),
  new GameItem("", "winpose1", 0),
  new GameItem("Танец", "winemot1", 250),
  new GameItem(" ", "winpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Фара",
  new GameItem("Дама бубей", "phaspray1", 25),
  new GameItem(" ", "phapose1", 0),
  new GameItem("Убойное соло", "phaemot1", 250),
  new GameItem(" ", "phapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Хаммонд",
  new GameItem("Восьмерка треф [75]", "hamspray1", 75),
  new GameItem(" ", "hampose1", 0),
  new GameItem("Хип-хомяк [750]", "hamemot1", 750),
  new GameItem("", "hampotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Ханзо",
  new GameItem("Король бубей", "hanspray1", 25),
  new GameItem(" ", "hanpose1", 0),
  new GameItem("Танец рыбака", "hanemot1", 250),
  new GameItem("", "hanpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Эш",
  new GameItem("Восьмерка бубей [75]", "ashspray1", 75), //there is second spary Семерка пик for Bob
  new GameItem(" ", "ashpose1", 0),
  new GameItem("Ковбойский танец [750]", "ashemot1", 750),
  new GameItem(" ", "ashpotg1", 0)));

this.saveInfo();
}

initIcons() {
  this.completeInfo.allIcons.push(
    new GameItem("Годовщина 2017", "anni17icon", 0),
    new GameItem("Годовщина 2018", "anni18icon", 0),
    new GameItem("Годовщина 2019", "anni19icon", 0),
	  new GameItem("Иллюзионистка", "illuicon", 0),
	  new GameItem("Шерлок", "shericon", 0),
	  new GameItem("Буканьер", "bukaicon", 0),
	  new GameItem("Бьорн", "bjoricon", 0),
    new GameItem("Дух лесов", "duhicon", 0),
    new GameItem("Смокинг", "smokicon", 0),
    new GameItem("Кибербьорн", "kibeicon", 0),    
    new GameItem("Полицейская", "poliicon", 0),
    new GameItem("Астронавтка", "astroicon", 0),
    new GameItem("Горгулья", "gorgicon", 0),
    new GameItem("Чумосвин", "chumicon", 0),
    new GameItem("Школьница", "shkoicon", 0),
    new GameItem("Частная школа", "chasicon", 0),
    new GameItem("Зимняя дыня", "dinaicon", 0),
    //new GameItem("Невидимка", "neviicon", 0), 
    new GameItem("Праздничмари", "prazicon", 0),
    new GameItem("Пачикексик", "keksicon", 0),
    new GameItem("Золотая Ана", "ganaicon", 0),
    new GameItem("Золотой Бастион", "gbasicon", 0),
    new GameItem("Золотой Батист", "gbaticon", 0),
    new GameItem("Золотая Бригитта", "gbriicon", 0),
    new GameItem("Золотая Вдова", "gwidicon", 0),
	  new GameItem("Золотой Генджи", "ggenicon", 0),  	  
      new GameItem("Золотой Дзенъятта", "gzenicon", 0),
      new GameItem("Золотая Дива", "gdivicon", 0),
      new GameItem("Золотой Думфист", "gdooicon", 0),
      new GameItem("Золотой Жнец", "greaicon", 0),
      new GameItem("Золотая Заря", "gzaricon", 0),
      new GameItem("Золотой Крысавчик", "gjunicon", 0),
      new GameItem("Золотой Лусио", "glucicon", 0),      
      new GameItem("Золотой МакКри", "gmccicon", 0),
      new GameItem("Золотая Мерси", "gmericon", 0),
      new GameItem("Золотая Мойра", "gmoiicon", 0),
      new GameItem("Золотая Мэй", "gmeiicon", 0),
      new GameItem("Золотая Ориса", "goriicon", 0),
      new GameItem("Золотой Райнхардт", "greiicon", 0),
      new GameItem("Золотая Симметра", "gsymicon", 0),
      new GameItem("Золотой Солдат76", "gsolicon", 0),
      new GameItem("Золотая Сомбра", "gsomicon", 0),
      new GameItem("Золотой Торбьорн", "gtoricon", 0),
      new GameItem("Золотая Трейсер", "gtraicon", 0),
      new GameItem("Золотой Турбосвин", "groaicon", 0),
      new GameItem("Золотой Уинстон", "gwinicon", 0),
      new GameItem("Золотая Фара", "gphaicon", 0),
      new GameItem("Богачка Эш", "gashicon", 0),
      new GameItem("Золотой Таран", "ghamicon", 0),
      new GameItem("Золотой Ханзо", "ghanicon", 0)
  );

  this.saveInfo();
}

initSprays() {
  this.completeInfo.allSprays.push(
  new GameItem("Годовщина", "assaspray", 25)
  );
  this.saveInfo();
}



}
