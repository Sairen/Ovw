import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class ArchivesService {

completeInfo = new CompleteInfo();


  
  constructor()
  {     
    let getData = localStorage.getItem("archives");
    if (getData==null)
    {
      this.initEveryting();
      this.saveInfo();
      getData = localStorage.getItem("archives");
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
    localStorage.setItem("archives", savedInfo);
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

  this.completeInfo.goldSkins2018.push(new Skin("lskinhan18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinmoi18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinsom18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskindoo18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinmei18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinrea18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinwin18",3000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinluc18",3000));

  this.completeInfo.goldSkins2017.push(new Skin("lskingen17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinmcc17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinmer17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskinori17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskintra17",1000)); 
  this.completeInfo.goldSkins2017.push(new Skin("lskinwid17",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskintor117",1000));
  this.completeInfo.goldSkins2017.push(new Skin("lskintor217",1000));

  this.completeInfo.purpleSkins2017.push(new Skin("skinbas17",250));
  this.completeInfo.purpleSkins2017.push(new Skin("skinrei17",250));


  this.saveInfo();
}


initHeroes()
{
  this.completeInfo.allHeroes.push(new Hero("Ана",
  new GameItem("От призрака не спрячешься", "anavoice1", 25),
  new GameItem("Чтоб вас!", "anavoice2", 25),
  new GameItem("Мы не ведем счет", "anavoice3", 75),
  new GameItem("Младенец", "anaspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Бастион",
  new GameItem("Ду-и ву-и у-о", "basvoice1", 25),
  new GameItem("Биу-ву-у биу-ву-у", "basvoice2", 25),
  new GameItem("Звинь звинь звинь", "basvoice3", 75),
  new GameItem("На дне", "basspray1", 25)));

  this.completeInfo.allHeroes.push(new Hero("Бригитта",
  new GameItem("Воина врасплох не застанешь", "brivoice1", 75),
  new GameItem("Не делай из мухи слона", "brivoice2", 75),
  new GameItem("Пора закатать рукава", "brivoice3", 75),
  new GameItem("Досада", "brispray1", 75)));

this.completeInfo.allHeroes.push(new Hero("Вдова",
  new GameItem("Представление начинается", "widvoice1", 25),
  new GameItem("Эмоции - это слабость", "widvoice2", 25),
  new GameItem("Охотница", "voice3", 75),
  new GameItem("Свадьба", "widspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Генджи",
  new GameItem("Давай еще!", "genvoice1", 25),
  new GameItem("Жизнь от смерти", "genvoice2", 25),
  new GameItem("Не верь своим глазам", "genvoice3", 75),
  new GameItem("Рамэн", "genspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Дзенъятта",
  new GameItem("Идите путем просветления", "zenvoice1", 25),
  new GameItem("Сменить направление", "zenvoice2", 25),
  new GameItem("Вот твой сегодняшний урок", "zenvoice3", 75),
  new GameItem("Оболочка", "zenspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Дива",
  new GameItem("Воспринимайте всерьез", "divvoice1", 25),
  new GameItem("Не отставайте", "divvoice2", 25),
  new GameItem("Кто лучше всех?", "divvoice3", 75),
  new GameItem("Портативная консоль", "divspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Думфист",
  new GameItem("Ты можешь лучше", "doovoice1", 75),
  new GameItem("Я не спаситель", "doovoice2", 75),
  new GameItem("Разве я тебя спрашивал?", "doovoice3", 75),
  new GameItem("Палец вниз", "doospray1", 75)));

this.completeInfo.allHeroes.push(new Hero("Жнец",
  new GameItem("Двигаюсь дальше", "reavoice1", 25),
  new GameItem("Опять дилетанты", "reavoice2", 25),
  new GameItem("Месть сладка", "reavoice3", 75),
  new GameItem("Коммандос", "reaspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Заря",
  new GameItem("Я рождена для битвы", "zarvoice1", 25),
  new GameItem("Что, уже сдаешься?", "zarvoice2",25),
  new GameItem("Ты подводишь свою команду", "zarvoice3", 75),
  new GameItem("Мы сможем!", "zarspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Крысавчик",
  new GameItem("О да!", "junvoice1", 25),
  new GameItem("За дурака держишь?", "junvoice2", 25),
  new GameItem("Вот это я бомбанул", "junvoice3", 75),
  new GameItem("Коляска", "junspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Лусио",
  new GameItem("Живи без напряга", "lucvoice1", 25),
  new GameItem("Буп!", "lucvoice2", 25),
  new GameItem("Сделайте погромче!", "lucvoice3", 75),
  new GameItem("Коньки", "lucspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("МакКри",
  new GameItem("Разберемся по старинке?", "mccvoice1", 25),
  new GameItem("У каждого свои правила", "mccvoice2", 25),
  new GameItem("Не дерзи мне", "mccvoice3", 75),
  new GameItem("Тир", "mccspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Мерси",
  new GameItem("Почему я ввязываюсь", "mervoice1", 25),
  new GameItem("Следите за здоровьем", "mervoice2", 25),
  new GameItem("Своевременное вмешательство", "mervoice3", 75),
  new GameItem("Военный врач", "merspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Мойра",
  new GameItem("Прочь со сцены", "moivoice1", 75),
  new GameItem("Ты заблуждаешься", "moivoice2", 75),
  new GameItem("Это мне по нраву", "moivoice3", 75),
  new GameItem("Первый класс", "moispray1", 75)));

this.completeInfo.allHeroes.push(new Hero("Мэй",
  new GameItem("Научное объяснение", "meivoice1", 25),
  new GameItem("С помощью науки", "meivoice2", 25),
  new GameItem("Я просто ученый", "meivoice3", 75),
  new GameItem("Пижамка", "meispray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Ориса",
  new GameItem("Ошибка: деление на ноль", "orivoice1", 25),
  new GameItem("Функции еще тестируются", "orivoice2", 25),
  new GameItem("Я просто хотела помочь", "orivoice3", 75),
  new GameItem("Цветок", "orispray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Райнхардт",
  new GameItem("Меня не удержать", "reivoice1", 25),
  new GameItem("Тише едешь - дальше будешь", "reivoice2", 25),
  new GameItem("Ваше здоровье", "reivoice3", 75),
  new GameItem("Тот самый плакат", "reispray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Симметра",
  new GameItem("Смирись", "symvoice1", 25),
  new GameItem("Я приняла во внимание", "symvoice2", 25),
  new GameItem("Когда же это кончится", "symvoice3", 75),
  new GameItem("Школьница", "symspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Солдат76",
  new GameItem("Согласен", "solvoice1", 25),
  new GameItem("Моложе я не становлюсь", "solvoice2", 25),
  new GameItem("Да какой я герой?", "solvoice3", 75),
  new GameItem("Коммандос", "solspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Сомбра",
  new GameItem("Не дрейфь", "somvoice1", 25),
  new GameItem("Поболтать? Спасибо, но нет", "somvoice2", 25),
  new GameItem("Снова полночь", "somvoice3", 75),
  new GameItem("Кофе", "somspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Торбьорн",
  new GameItem("Дурной мастер винит инструмент", "torvoice1", 25),
  new GameItem("Куй, пока горячо", "torvoice2", 25),
  new GameItem("Бинго!", "torvoice3", 75),
  new GameItem("Бригитта", "torspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Трейсер",
  new GameItem("Не тупи", "travoice1", 25),
  new GameItem("Простите, опоздала", "travoice2", 25),
  new GameItem("Время на моей стороне", "travoice3", 75),
  new GameItem("Пилот", "traspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Турбосвин",
  new GameItem("Верняк", "roavoice1", 25),
  new GameItem("Я убивал и за меньшее", "roavoice2", 25),
  new GameItem("Кого тут давно не били?", "roavoice3", 75),
  new GameItem("Байкер", "roaspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Уинстон",
  new GameItem("Вы мои очки не видели?", "winvoice1", 25),
  new GameItem("Ну, так и планировалось", "winvoice2", 25),
  new GameItem("Ярость зверя!", "winvoice3", 75),
  new GameItem("Башня", "winspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Фара",
  new GameItem("Я - королева ракет", "phavoice1", 25),
  new GameItem("Ничего личного", "phavoice2", 25),
  new GameItem("Хорошая драка", "phavoice3", 75),
  new GameItem("Тир", "phaspray1", 25)));

this.completeInfo.allHeroes.push(new Hero("Ханзо",
  new GameItem("Красота таится в простом", "hanvoice1", 25),
  new GameItem("Неприемлимо", "hanvoice2", 25),
  new GameItem("Кровь решила мою судьбу", "hanvoice3", 75),
  new GameItem("Рамэн", "hanspray1", 25)));

this.saveInfo();
}

initIcons() {
  this.completeInfo.allIcons.push(
      new GameItem("Архивы 2018", "archives18icon", 0),
	  new GameItem("Подопытный №28", "pod28icon", 0),
	  new GameItem("Солдат-24", "col24icon", 0),
	  new GameItem("Эквалайзер", "equaicon", 0),
	  new GameItem("Наследник", "naslicon", 0),
	  new GameItem("Коломар", "koloicon", 0),
    new GameItem("Огундиму", "ogunicon", 0),
    new GameItem("Максимильен", "maxiicon", 0),
    new GameItem("О'Доран", "odoricon", 0),
    new GameItem("Тяжелый штурмовик", "hardicon", 0),
    new GameItem("Ассасин", "asasicon", 0),
    new GameItem("Каратель", "karaicon", 0),
    new GameItem("Снайпер", "snaiicon", 0),
    new GameItem("Пехотинец", "pehoicon", 0),
	  new GameItem("Кружка", "krujicon", 0),  
	  
      new GameItem("Мятеж-2017", "uprising17icon", 0),
      new GameItem("OR14-NS", "ornsicon", 0),
      new GameItem("B73-NS", "bnsicon", 0),
      new GameItem("Лакруа", "lacricon", 0),
      new GameItem("Киборг", "kiboicon", 0),
      new GameItem("Лейтенант", "leiticon", 0),
      new GameItem("Главный инженер", "injeicon", 0),      
      new GameItem("Военный врач", "vraicon", 0),
      new GameItem("Кадет", "kadeicon", 0),
      new GameItem("Blackwatch", "blwticon", 0),
      new GameItem("Десантная капсула", "desaicon", 0),
      new GameItem("Нуль-Сектор", "secticon", 0),
      new GameItem("Нуль-Мари", "nlmricon", 0)   
  );

  this.saveInfo();
}

initSprays() {
  this.completeInfo.allSprays.push(
  new GameItem("Ассасин Когтя", "assaspray", 0),
  new GameItem("Каратель Когтя", "karaspray", 0),
  new GameItem("Пехотинец Когтя", "pehospray", 0),
  new GameItem("Снайпер Когтя", "snaispray", 0),
  new GameItem("Тяжелый штурмовик Когтя", "tyajspray", 0),
  new GameItem("Челнокмари", "chelnospray", 0),
  
      new GameItem("B73-NS", "bnsspray", 0),
      new GameItem("OR14-NS", "ornsspray", 0),
      new GameItem("Ланцет", "lanzspray", 0),
      new GameItem("Ликвидатор", "likvspray", 0),
      new GameItem("Штурмовик", "sturspray", 0),      
      new GameItem("Нуль-Мари", "nlmrspray", 0),
      new GameItem("Нуль-Сектор [25]", "sectspray", 25),
      new GameItem("Архивы [25]", "sectspray", 25)
  );
  this.saveInfo();
}

initPoses() {
  this.completeInfo.allPoses.push(
  new GameItem("Бригитта - На колено", "bripose1", 225),
  new GameItem("Мойра - Эксперимент", "moipose1", 225),
  new GameItem("Ориса - Щеночек", "oripose1", 225),
  new GameItem("Райнхардт - На колене", "reipose1", 225),  
  new GameItem("Крысавчик - Фото арестованного", "junpose1", 225),
  new GameItem("Турбосвин - Фото арестованного", "roapose1", 225),
  //поменять старые цены
      new GameItem("Генджи - Медитация", "genpose1", 75),
      new GameItem("Люсио - Стойка", "lucpose1", 75),
      new GameItem("Заря - Вот это сила!", "zarpose1", 75),
      new GameItem("МакКри - Перед выстрелом", "mccpose1", 75),
      new GameItem("Симметра - Ученье - свет", "sympose1", 75),
      new GameItem("Уинстон - Арахисовое масло", "winpose1", 75)
      

  );
  this.saveInfo();
}

initEmotes() {
  this.completeInfo.allEmotes.push(
      new GameItem("Солдат - Упал-отжался", "solemote1", 250),
      new GameItem("Фара - Ракета", "phaemote1", 250),
      new GameItem("Ханзо - Тренировка", "hanemote1", 250)
  );
  this.saveInfo();
}

initPotg()
{
    this.completeInfo.allMoments.push(
	 new GameItem("Заря - Гравитонный импульс", "zarmoment1", 750),
	 new GameItem("Думфист - Комбо", "doomoment1", 750),
   new GameItem("Ориса - Молот не дошел", "orimoment1", 750),
        new GameItem("Дива - Селфи", "divmoment1", 250),
        new GameItem("Дзенъятта - Перспектива", "zenmoment1", 250),
        new GameItem("Торбьорн - Моя малютка", "tormoment1", 250)
    );
    this.saveInfo();
}

}
