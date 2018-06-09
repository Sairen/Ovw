import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { HeroBig } from './herobig';
import { GameItem } from './gameitem';

@Injectable()
export class AnniversaryService {

completeInfo = new CompleteInfo();


  
  constructor()
  {     
    let getData = localStorage.getItem("anniversary");
    if (getData==null)
    {
      this.initEveryting();
      this.saveInfo();
      getData = localStorage.getItem("anniversary");
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
    localStorage.setItem("anniversary", savedInfo);
}

initEveryting()
{
  this.initSkis();
  this.initHeroes();
  this.initIcons();
  this.initSprays();
  this.initPoses();
  this.initEmotes();
  this.initPotg();
}

initSkis()
{
  this.completeInfo = new CompleteInfo();

  this.completeInfo.goldSkins2018.push(new Skin("lskinmcc18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskindoo18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinsym18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskintor18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinori18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinbri18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinbas18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinjun18",3000));

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
  this.completeInfo.goldSkins2017.push(new Skin("lskintime",0));

  this.completeInfo.purpleSkins2018.push(new Skin("skinsol18",750));
  this.completeInfo.purpleSkins2018.push(new Skin("skintra18",750));
  this.completeInfo.purpleSkins2018.push(new Skin("skinluc18",750));
  this.completeInfo.purpleSkins2018.push(new Skin("skintime",0));

  this.saveInfo();
}


initHeroes()
{
  this.completeInfo.allHeroes.push(new HeroBig("Ана",
  new GameItem("Следуй за мной", "anavoice1", 25),
  new GameItem("Взрослые разговаривают", "anavoice2", 25),
  new GameItem("Научись расслабляться", "anavoice3", 75),
  new GameItem("Туз червей", "anaspray1", 25),
new GameItem("Танец", "anaemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Бастион",
  new GameItem("Биу-ву-у", "basvoice1", 25),
  new GameItem("Ду-у дун", "basvoice2", 25),
  new GameItem("Зур-р зур-р", "basvoice3", 75),
  new GameItem("Десятка треф", "basspray1", 25),
new GameItem("Робо-буги", "basemote1", 250)));

  this.completeInfo.allHeroes.push(new HeroBig("Бригитта",
  new GameItem("Всё будет! [75]", "brivoice1", 75),
  new GameItem("Всего лишь царапина [75]", "brivoice2", 75),
  new GameItem("Доверьтесь эксперту", "brivoice3", 75),
  new GameItem("Восьмерка пик [75]", "brispray1", 75),
new GameItem("Танец [750]", "briemote1", 750)));

this.completeInfo.allHeroes.push(new HeroBig("Вдова",
  new GameItem("Как скучно", "widvoice1", 25),
  new GameItem("Прости", "widvoice2", 25),
  new GameItem("Мне только в радость", "widvoice3", 75),
  new GameItem("Дама червей", "widspray1", 25),
new GameItem("Балет", "widemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Генджи",
  new GameItem("Не впечатляет", "genvoice1", 25),
  new GameItem("Ты мне нравишься", "genvoice2", 25),
  new GameItem("Исцели себя", "genvoice3", 75),
  new GameItem("Валет треф", "genspray1", 25),
new GameItem("Танец", "genemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Дзенъятта",
  new GameItem("Во всем сущем - тайна", "zenvoice1", 25),
  new GameItem("Какое разочарование", "zenvoice2", 25),
  new GameItem("Терпение", "zenvoice3", 75),
  new GameItem("Король пик", "zenspray1", 25),
new GameItem("Танец", "zenemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Дива",
  new GameItem("Да ну вас всех!", "divvoice1", 25),
  new GameItem("Новый уровень", "divvoice2", 25),
  new GameItem("Без проблем!", "divvoice3", 75),
  new GameItem("Десятка червей", "divspray1", 25),
new GameItem("Танец", "divemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Думфист",
  new GameItem("Бей в кость [75]", "doovoice1", 75),
  new GameItem("Меня огорчает [75]", "doovoice2", 75),
  new GameItem("Ты не победишь", "doovoice3", 75),
  new GameItem("Девятка треф [75]", "doospray1", 75),
new GameItem("Танец  [750]", "dooemote1", 750)));

this.completeInfo.allHeroes.push(new HeroBig("Жнец",
  new GameItem("Никто не уцелел", "reavoice1", 25),
  new GameItem("Увидимся", "reavoice2", 25),
  new GameItem("Убожество", "reavoice3", 75),
  new GameItem("Туз треф", "reaspray1", 25),
new GameItem("Танец", "reaemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Заря",
  new GameItem("Добро с кулаками", "zarvoice1", 25),
  new GameItem("И это все?", "zarvoice2",25),
  new GameItem("Делай зарядку", "zarvoice3", 75),
  new GameItem("Десятка пик", "zarspray1", 25),
new GameItem("Танец", "zaremote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Крысавчик",
  new GameItem("Ой, обронил", "junvoice1", 25),
  new GameItem("Тупица", "junvoice2", 25),
  new GameItem("Неприметнейше!", "junvoice3", 75),
  new GameItem("Джокер", "junspray1", 25),
new GameItem("Топчу асфальт", "junemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Лусио",
  new GameItem("Всех бафну", "lucvoice1", 25),
  new GameItem("Отведайте Луси-Оуз", "lucvoice2", 25),
  new GameItem("А теперь слышно?", "lucvoice3", 75),
  new GameItem("Валет бубуей", "lucspray1", 25),
new GameItem("Кто так может", "lucemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("МакКри",
  new GameItem("Цепляй кобуру", "mccvoice1", 25),
  new GameItem("Я угощаю", "mccvoice2", 25),
  new GameItem("Как я вам?", "mccvoice3", 75),
  new GameItem("Валет пик", "mccspray1", 25),
new GameItem("Ковбой. танец", "mccemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Мерси",
  new GameItem("Всегда пожалуйста", "mervoice1", 25),
  new GameItem("Спорная оценка", "mervoice2", 25),
  new GameItem("И не такое видела", "mervoice3", 75),
  new GameItem("Дама треф", "merspray1", 25),
new GameItem("Хастл", "meremote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Мойра",
  new GameItem("Невероятно [75]", "moivoice1", 75),
  new GameItem("Отличные новости [75]", "moivoice2", 75),
  new GameItem("Это был триумф", "moivoice3", 75),
  new GameItem("Девятка черв [75]", "moispray1", 75),
new GameItem("Танец [750]", "moiemote1", 750)));

this.completeInfo.allHeroes.push(new HeroBig("Мэй",
  new GameItem("Так подло", "meivoice1", 25),
  new GameItem("Хочу помочь", "meivoice2", 25),
  new GameItem("Доброе утро", "meivoice3", 75),
  new GameItem("Десятка бубей", "meispray1", 25),
new GameItem("Потанцулечки", "meiemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Ориса",
  new GameItem("Благодарю за содействие", "orivoice1", 25),
  new GameItem("Вы довольны?", "orivoice2", 25),
  new GameItem("Плохие предчувствия", "orivoice3", 75),
  new GameItem("Девятка пик", "orispray1", 25),
new GameItem("Танец", "oriemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Райнхардт",
  new GameItem("Пиво!", "reivoice1", 25),
  new GameItem("Честь! Справедливость! Райнхардт!", "reivoice2", 25),
  new GameItem("Иди сюда!", "reivoice3", 75),
  new GameItem("Король червей", "reispray1", 25),
new GameItem("Вальс", "reiemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Симметра",
  new GameItem("Комната смерти", "symvoice1", 25),
  new GameItem("Ход твоих мыслей", "symvoice2", 25),
  new GameItem("Обсудим ошибки", "symvoice3", 75),
  new GameItem("Девятка бубей", "symspray1", 25),
new GameItem("Танец", "symemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Солдат76",
  new GameItem("Как скажешь", "solvoice1", 25),
  new GameItem("Учить тебя жить", "solvoice2", 25),
  new GameItem("Сделай это сам", "solvoice3", 75),
  new GameItem("Туз пик", "solspray1", 25),
new GameItem("Танец", "solemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Сомбра",
  new GameItem("В горле пересохло", "somvoice1", 25),
  new GameItem("Закончили трепаться?", "somvoice2", 25),
  new GameItem("Больше так не делать", "somvoice3", 75),
  new GameItem("Дама пик", "somspray1", 25),
new GameItem("Танец", "somemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Торбьорн",
  new GameItem("Верь мне", "torvoice1", 25),
  new GameItem("Старушка выдержит", "torvoice2", 25),
  new GameItem("Не додумался", "torvoice3", 75),
  new GameItem("Король треф", "torspray1", 25),
new GameItem("Танец", "toremote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Трейсер",
  new GameItem("Тормозишь", "travoice1", 25),
  new GameItem("Я что-то пропустила?", "travoice2", 25),
  new GameItem("Что-нибудь забуду", "travoice3", 75),
  new GameItem("Туз бубей", "traspray1", 25),
new GameItem("Чарльстон", "traemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Турбосвин",
  new GameItem("Начнется свинство", "roavoice1", 25),
  new GameItem("Не люблю болтунов", "roavoice2", 25),
  new GameItem("Это мое дело", "roavoice3", 75),
  new GameItem("Джокер ", "roaspray1", 25),
new GameItem("Танец", "roaemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Уинстон",
  new GameItem("Да!", "winvoice1", 25),
  new GameItem("Настало мое время", "winvoice2", 25),
  new GameItem("Хорошая горилла", "winvoice3", 75),
  new GameItem("Валет Червей", "winspray1", 25),
new GameItem("Танец", "winemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Фара",
  new GameItem("Покажи что можешь", "phavoice1", 25),
  new GameItem("Порхай как бабочка", "phavoice2", 25),
  new GameItem("Не сбивайся с курса", "phavoice3", 75),
  new GameItem("Дама бубей", "phaspray1", 25),
new GameItem("Убойное соло", "phaemote1", 250)));

this.completeInfo.allHeroes.push(new HeroBig("Ханзо",
  new GameItem("Да будет так", "hanvoice1", 25),
  new GameItem("Неверное суждение", "hanvoice2", 25),
  new GameItem("Не буди дракона", "hanvoice3", 75),
  new GameItem("Король бубей", "hanspray1", 25),
new GameItem("Танец рыбака", "hanemote1", 250)));

this.saveInfo();
}

initIcons() {
  this.completeInfo.allIcons.push(
      new GameItem("Годовщина 2017", "anni17icon", 0),
	  new GameItem("Годовщина 2018", "anni18icon", 0),
	  new GameItem("Иллюзионистка", "illuicon", 0),
	  new GameItem("Шерлок", "shericon", 0),
	  new GameItem("Буканьер", "bukaicon", 0),
	  new GameItem("Бьорн", "bjoricon", 0),
    new GameItem("Дух лесов", "duhicon", 0),
    new GameItem("Смокинг", "smokicon", 0),
    new GameItem("Кибербьорн", "kibeicon", 0),    
    //new GameItem("Невидимка", "neviicon", 0), 
    //new GameItem("Праздничмари", "prazicon", 0),
    new GameItem("Золотая Ана", "ganaicon", 0),
    new GameItem("Золотой Бастион", "gbasicon", 0),
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

initPoses() {
  this.completeInfo.allPoses.push(
  new GameItem("Мерси - Зонтик", "merpose1", 225),
  new GameItem("Думфист - Замах", "doopose1", 225),
  new GameItem("Трейсер - Подмигивание", "trapose1", 225)     

  );
  this.saveInfo();
}

initEmotes() {
  this.completeInfo.allEmotes.push(
      new GameItem("-", "-", 0)
  );
  this.saveInfo();
}

initPotg()
{
    this.completeInfo.allMoments.push(
	 new GameItem("-", "-", 0)
    );
    this.saveInfo();
}

}
