import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class WinterService {

  completeInfo = new CompleteInfo();



  constructor() {
    let getData = localStorage.getItem("winter");
    if (getData == null) {
      this.initEveryting();
      this.saveInfo();
      getData = localStorage.getItem("winter");
      //оптимизировать
    }
    this.completeInfo = JSON.parse(getData);
  }

  getInfo() {
    return this.completeInfo;
  }


  saveInfo() {
    let savedInfo = JSON.stringify(this.completeInfo);
    localStorage.setItem("winter", savedInfo);
  }

  initEveryting()
{
}

  initSkis() {
    this.completeInfo = new CompleteInfo();

    this.completeInfo.goldSkins2016.push(new Skin("lskinmei16", 111));
    this.completeInfo.goldSkins2016.push(new Skin("lskintor16", 222));
    this.completeInfo.goldSkins2016.push(new Skin("lskintra16", 333));
    this.completeInfo.goldSkins2016.push(new Skin("lskinzen16", 444));
    this.completeInfo.goldSkins2016.push(new Skin("lskinwin16", 555));

    this.completeInfo.goldSkins2017.push(new Skin("lskinana17", 11));
    this.completeInfo.goldSkins2017.push(new Skin("lskinbas17", 11));
    this.completeInfo.goldSkins2017.push(new Skin("lskinhan17", 11));
    this.completeInfo.goldSkins2017.push(new Skin("lskinjun17", 11));
    this.completeInfo.goldSkins2017.push(new Skin("lskinroa17", 11));
    this.completeInfo.goldSkins2017.push(new Skin("lskinsol17", 11));
    this.completeInfo.goldSkins2017.push(new Skin("lskinsom17", 11));

    this.completeInfo.purpleSkins2016.push(new Skin("skinluc16", 11));
    this.completeInfo.purpleSkins2016.push(new Skin("skinrea16", 11));
    this.completeInfo.purpleSkins2016.push(new Skin("skinsom16", 11));
    this.completeInfo.purpleSkins2016.push(new Skin("skinroa16", 11));
    this.completeInfo.purpleSkins2016.push(new Skin("skinmcc16", 11));
    this.completeInfo.purpleSkins2016.push(new Skin("skinpha16", 11));
    this.completeInfo.purpleSkins2016.push(new Skin("skinzar16", 11));

    this.saveInfo();
  }


  initHeroes() {
    this.completeInfo.allHeroes.push(new Hero("Ана",
      new GameItem("Я прикрою, не волнуйся", "anavoice1", 11),
      new GameItem("Стара я для сюрпризов", "anavoice2", 11),
      new GameItem("Елочная игрушка", "anaspray1", 11),
      new GameItem("Тепло и уют", "anaspray2", 11)));

    this.completeInfo.allHeroes.push(new Hero("Бастион",
      new GameItem("Дуи-дуу-хоу", "basvoice1", 11),
      new GameItem("Бу-у ву-у", "basvoice2", 11),
      new GameItem("Елочная игрушка", "basspray1", 11),
      new GameItem("Празднуем", "basspray2", 11)));

    this.completeInfo.allHeroes.push(new Hero("Дива",
      new GameItem("Ой, ну не стоило", "divavoice1", 11),
      new GameItem("Счастливых праздников!", "divavoice2", 11),
      new GameItem("Елочная игрушка", "divaspray1", 11),
      new GameItem("Печенька", "divaspray2", 11)));

    this.completeInfo.allHeroes.push(new Hero("Вдова",
      new GameItem("О, благодарю", "widvoice1", 25),
      new GameItem("Никакой породы", "widvoice2", 75),
      new GameItem("Заколка", "widspray1", 25),
      new GameItem("Танец дракона", "widspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Генджи",
      new GameItem("С рождеством!", "genvoice1", 11),
      new GameItem("Считай что тебе повезло", "genvoice2", 11),
      new GameItem("Елочная игрушка", "genspray1", 11),
      new GameItem("Кадоматсу", "genspray2", 11)));

    this.completeInfo.allHeroes.push(new Hero("Дзенъятта",
      new GameItem("Каждый хвалит свой насест", "zenvoice1", 25),
      new GameItem("Удача улыбается мне", "zenvoice2", 75),
      new GameItem("Ют Нори", "zenspray1", 25),
      new GameItem("Танец дракона", "zenspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Дива",
      new GameItem("Радости жизни", "divavoice1", 25),
      new GameItem("С новым годом!", "divavoice2", 75),
      new GameItem("Качели", "divaspray1", 25),
      new GameItem("Танец дракона", "divaspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Думфист",
      new GameItem("Подачки ждешь?", "doovoice1", 75),
      new GameItem("Удача любит смелых ", "doovoice2", 75),
      new GameItem("Львиный кулак", "doospray1", 75),
      new GameItem("Танец дракона", "doospray2", 75)));

    this.completeInfo.allHeroes.push(new Hero("Жнец",
      new GameItem("Вот это феерверк", "reavoice1", 25),
      new GameItem("Я везучь", "reavoice2", 75),
      new GameItem("Огненный цветок", "reaspray1", 25),
      new GameItem("Танец дракона", "reaspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Заря",
      new GameItem("Прокачайся", "zarvoice1", 25),
      new GameItem("Вот где собака зарыта", "zarvoice2", 75),
      new GameItem("На массе", "zarspray1", 25),
      new GameItem("Танец дракона", "zarspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Крысавчик",
      new GameItem("С рождеством!", "junvoice1", 11),
      new GameItem("Ну давай, встряхнись уже", "junvoice2", 11),
      new GameItem("Елочная игрушка", "junspray1", 11),
      new GameItem("Типа зима", "junspray2", 11)));

    this.completeInfo.allHeroes.push(new Hero("Лусио",
      new GameItem("Со мной все становится лучше!", "lucvoice1", 25),
      new GameItem("Это я люблю!", "lucvoice2", 75),
      new GameItem("Давай на счет", "lucspray1", 25),
      new GameItem("Танец дракона", "lucspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("МакКри",
      new GameItem("Это надо отметить", "mccvoice1", 25),
      new GameItem("Как пес бездомный", "mccvoice2", 75),
      new GameItem("Орел или решка?", "mccspray1", 25),
      new GameItem("Танец дракона", "mccspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Мерси",
      new GameItem("Впечатляет", "mervoice1", 25),
      new GameItem("Как же тебе повезло!", "mervoice2", 75),
      new GameItem("Зонтик", "merspray1", 25),
      new GameItem("Танец дракона", "merspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Мойра",
      new GameItem("Ваше здоровье!", "moivoice1", 75),
      new GameItem("Гоняться за хвостом", "moivoice2", 75),
      new GameItem("Собачки", "moispray1", 75),
      new GameItem("Танец дракона", "moispray2", 75)));

    this.completeInfo.allHeroes.push(new Hero("Мэй",
      new GameItem("Счастья и процветания!", "meivoice1", 25),
      new GameItem("Где мой красный конверт?", "meivoice2", 75),
      new GameItem("Удача", "meispray1", 25),
      new GameItem("Танец дракона", "meispray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Ориса",
      new GameItem("Без Луны звезды светят ярче", "orivoice1", 75),
      new GameItem("Кто готов к вечеринке?", "orivoice2", 75),
      new GameItem("Танец с барабаном", "orispray1", 75),
      new GameItem("Танец дракона", "orispray2", 75)));

    this.completeInfo.allHeroes.push(new Hero("Райнхардт",
      new GameItem("Ты что ж это цыпленок?", "reivoice1", 25),
      new GameItem("Судьба благоволит бесстрашным", "reivoice2", 75),
      new GameItem("Танец льва", "reispray1", 25),
      new GameItem("Танец дракона", "reispray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Симметра",
      new GameItem("Какая удача", "symvoice1", 25),
      new GameItem("Повод отметить", "symvoice2", 75),
      new GameItem("Фонарь", "symspray1", 25),
      new GameItem("Танец дракона", "symspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Солдат76",
      new GameItem("Петухи запели в полночь", "solvoice1", 25),
      new GameItem("Уважайте старших", "solvoice2", 75),
      new GameItem("Сложенные руки", "solspray1", 25),
      new GameItem("Танец дракона", "solspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Сомбра",
      new GameItem("Вас так легко удивить", "somvoice1", 25),
      new GameItem("Собака бывает кусачей", "somvoice2", 75),
      new GameItem("Гадание", "somspray1", 25),
      new GameItem("Танец дракона", "somspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Торбьорн",
      new GameItem("Что, горячо?", "torvoice1", 25),
      new GameItem("А ну все сюда!", "torvoice2", 75),
      new GameItem("Золото", "torspray1", 25),
      new GameItem("Танец дракона", "torspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Трейсер",
      new GameItem("Все готовы устроить салют?", "travoice1", 25),
      new GameItem("На луну и обратно", "travoice2", 75),
      new GameItem("Танец с веерами", "traspray1", 25),
      new GameItem("Танец дракона", "traspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Турбосвин",
      new GameItem("Ты кура?", "roavoice1", 25),
      new GameItem("Ну и пес с ним", "roavoice2", 75),
      new GameItem("Баоцзы", "roaspray1", 25),
      new GameItem("Танец дракона", "roaspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Уинстон",
      new GameItem("Вот это круто!", "winvoice1", 25),
      new GameItem("Луна, мой родной дом", "winvoice2", 75),
      new GameItem("Воздушный змей", "winspray1", 25),
      new GameItem("Танец дракона", "winspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Фара",
      new GameItem("Я обеспечу мир", "phavoice1", 25),
      new GameItem("Устроить салют?", "phavoice2", 75),
      new GameItem("С Новым годом!", "phaspray1", 25),
      new GameItem("Танец дракона", "phaspray2", 25)));

    this.completeInfo.allHeroes.push(new Hero("Ханзо",
      new GameItem("Подарок для тебя", "hanvoice1", 11),
      new GameItem("Холоден как лед", "hanvoice2", 11),
      new GameItem("Елочная игрушка", "hanspray1", 11),
      new GameItem("Кадоматсу", "hanspray2", 11)));

    this.saveInfo();
  }





}
