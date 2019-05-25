import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfoNew } from './completeinfoNew';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class ArchivesService {

completeInfo = new CompleteInfoNew();



  constructor()
  {
    let getData = localStorage.getItem("archives19");
    if (getData==null)
    {
      this.initEveryting();
      this.saveInfo();
      getData = localStorage.getItem("archives19");
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
    localStorage.setItem("archives19", savedInfo);
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

  this.completeInfo.goldSkins2019.push(new Skin("lskinmcc19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinsol19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinbas19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinmoi19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinbat19", 3000));
  this.completeInfo.goldSkins2019.push(new Skin("lskinash19", 3000));

  this.completeInfo.purpleSkins2019.push(new Skin("skinham19", 750));
  this.completeInfo.purpleSkins2019.push(new Skin("skinjun19", 750));
  this.completeInfo.purpleSkins2019.push(new Skin("skinzar19", 750));

  this.completeInfo.goldSkins2018.push(new Skin("lskinhan18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinmoi18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinsom18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskindoo18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinmei18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinrea18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinwin18",1000));
  this.completeInfo.goldSkins2018.push(new Skin("lskinluc18",1000));

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


initHeroes1()
{
  this.completeInfo.allHeroesPoseVoice.push(new Hero("Ана",
  new GameItem("От призрака не спрячешься", "anavoice1", 25),
  new GameItem("Чтоб вас!", "anavoice2", 25),
  new GameItem("Мы не ведем счет", "anavoice3", 25),
  new GameItem(" ", "anavoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Бастион",
  new GameItem("Ду-и ву-и у-о", "basvoice1", 25),
  new GameItem("Биу-ву-у биу-ву-у", "basvoice2", 25),
  new GameItem("Звинь звинь звинь", "basvoice3", 25),
  new GameItem(" ", "basvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Батист",
    new GameItem("Боевое братство? [75]", "batvoice1", 75),
    new GameItem("Карибская коалиция [75]", "batvoice2", 75),
    new GameItem("Лейтенант Oгюстен [75]", "batvoice3", 75),
    new GameItem(" ", "batvoice4", 0)));

  this.completeInfo.allHeroesPoseVoice.push(new Hero("Бригитта",
  new GameItem("Воина врасплох не застанешь", "brivoice1", 25),
  new GameItem("Не делай из мухи слона", "brivoice2", 25),
  new GameItem("Пора закатать рукава", "brivoice3", 25),
  new GameItem("Проиграв, не жалуйся", "brivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Вдова",
  new GameItem("Представление начинается", "widvoice1", 25),
  new GameItem("Эмоции - это слабость", "widvoice2", 25),
  new GameItem("Охотница", "voice3", 25),
  new GameItem(" ", "widvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Генджи",
  new GameItem("Давай еще!", "genvoice1", 25),
  new GameItem("Жизнь от смерти", "genvoice2", 25),
  new GameItem("Не верь своим глазам", "genvoice3", 25),
  new GameItem(" ", "genvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Дзенъятта",
  new GameItem("Идите путем просветления", "zenvoice1", 25),
  new GameItem("Сменить направление", "zenvoice2", 25),
  new GameItem("Вот твой сегодняшний урок", "zenvoice3", 25),
  new GameItem("Рано учиться", "zenvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Дива",
  new GameItem("Воспринимайте всерьез", "divvoice1", 25),
  new GameItem("Не отставайте", "divvoice2", 25),
  new GameItem("Кто лучше всех?", "divvoice3", 25),
  new GameItem(" ", "divvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Думфист",
  new GameItem("Ты можешь лучше", "doovoice1", 25),
  new GameItem("Я не спаситель", "doovoice2", 25),
  new GameItem("Разве я тебя спрашивал?", "doovoice3", 25),
  new GameItem(" ", "doovoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Жнец",
  new GameItem("Двигаюсь дальше", "reavoice1", 25),
  new GameItem("Опять дилетанты", "reavoice2", 25),
  new GameItem("Месть сладка", "reavoice3", 25),
  new GameItem(" ", "reavoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Заря",
  new GameItem("Я рождена для битвы", "zarvoice1", 25),
  new GameItem("Что, уже сдаешься?", "zarvoice2",25),
  new GameItem("Ты подводишь свою команду", "zarvoice3", 25),
  new GameItem(" ", "zarvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Крысавчик",
  new GameItem("О да!", "junvoice1", 25),
  new GameItem("За дурака держишь?", "junvoice2", 25),
  new GameItem("Вот это я бомбанул", "junvoice3", 25),
  new GameItem(" ", "junvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Лусио",
  new GameItem("Живи без напряга", "lucvoice1", 25),
  new GameItem("Буп!", "lucvoice2", 25),
  new GameItem("Сделайте погромче!", "lucvoice3", 25),
  new GameItem(" ", "lucvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("МакКри",
  new GameItem("Разберемся по старинке?", "mccvoice1", 25),
  new GameItem("У каждого свои правила", "mccvoice2", 25),
  new GameItem("Не дерзи мне", "mccvoice3", 25),
  new GameItem("С такой работой", "mccvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Мерси",
  new GameItem("Почему я ввязываюсь", "mervoice1", 25),
  new GameItem("Следите за здоровьем", "mervoice2", 25),
  new GameItem("Своевременное вмешательство", "mervoice3", 25),
  new GameItem("Нужна моя помощь", "mervoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Мойра",
  new GameItem("Прочь со сцены", "moivoice1", 25),
  new GameItem("Ты заблуждаешься", "moivoice2", 25),
  new GameItem("Это мне по нраву", "moivoice3", 25),
  new GameItem("Верю в науку", "moivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Мэй",
  new GameItem("Научное объяснение", "meivoice1", 25),
  new GameItem("С помощью науки", "meivoice2", 25),
  new GameItem("Я просто ученый", "meivoice3", 25),
  new GameItem("Новое приключение", "meivoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Ориса",
  new GameItem("Ошибка: деление на ноль", "orivoice1", 25),
  new GameItem("Функции еще тестируются", "orivoice2", 25),
  new GameItem("Я просто хотела помочь", "orivoice3", 25),
  new GameItem(" ", "orivoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Райнхардт",
  new GameItem("Меня не удержать", "reivoice1", 25),
  new GameItem("Тише едешь - дальше будешь", "reivoice2", 25),
  new GameItem("Ваше здоровье", "reivoice3", 25),
  new GameItem(" ", "reivoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Симметра",
  new GameItem("Смирись", "symvoice1", 25),
  new GameItem("Я приняла во внимание", "symvoice2", 25),
  new GameItem("Когда же это кончится", "symvoice3", 25),
  new GameItem("Что нас ждет?", "symvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Солдат76",
  new GameItem("Согласен", "solvoice1", 25),
  new GameItem("Моложе я не становлюсь", "solvoice2", 25),
  new GameItem("Да какой я герой?", "solvoice3", 25),
  new GameItem(" ", "solvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Сомбра",
  new GameItem("Не дрейфь", "somvoice1", 25),
  new GameItem("Поболтать? Спасибо, но нет", "somvoice2", 25),
  new GameItem("Снова полночь", "somvoice3", 25),
  new GameItem("Было приятно", "somvoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Торбьорн",
  new GameItem("Дурной мастер винит инструмент", "torvoice1", 25),
  new GameItem("Куй, пока горячо", "torvoice2", 25),
  new GameItem("Бинго!", "torvoice3", 25),
  new GameItem(" ", "torvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Трейсер",
  new GameItem("Не тупи", "travoice1", 25),
  new GameItem("Простите, опоздала", "travoice2", 25),
  new GameItem("Время на моей стороне", "travoice3", 25),
  new GameItem(" ", "travoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Турбосвин",
  new GameItem("Верняк", "roavoice1", 25),
  new GameItem("Я убивал и за меньшее", "roavoice2", 25),
  new GameItem("Кого тут давно не били?", "roavoice3", 25),
  new GameItem(" ", "roavoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Уинстон",
  new GameItem("Вы мои очки не видели?", "winvoice1", 25),
  new GameItem("Ну, так и планировалось", "winvoice2", 25),
  new GameItem("Ярость зверя!", "winvoice3", 25),
  new GameItem(" ", "winvoice4", 0)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Фара",
  new GameItem("Я - королева ракет", "phavoice1", 25),
  new GameItem("Ничего личного", "phavoice2", 25),
  new GameItem("Хорошая драка", "phavoice3", 25),
  new GameItem("Научилась у мамы", "phavoice4", 75)));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Хаммонд",
  new GameItem("Доступ закрыт [75]", "hamvoice1", 75),
  new GameItem("Нокаут [75]", "hamvoice2", 75),
  new GameItem("Перевод не найден [75]", "hamvoice4", 75),
  new GameItem("Смешно", "hamvoice3", 75)
));

this.completeInfo.allHeroesPoseVoice.push(new Hero("Ханзо",
  new GameItem("Красота таится в простом", "hanvoice1", 25),
  new GameItem("Неприемлимо", "hanvoice2", 25),
  new GameItem("Кровь решила мою судьбу", "hanvoice3", 25),
  new GameItem("Историю вершат мечами", "hanvoice4", 75)));

  this.completeInfo.allHeroesPoseVoice.push(new Hero("Эш",
  new GameItem("Найдите дворецкого [75]", "ashvoice1", 75),
  new GameItem("Следи за манерами [75]", "ashvoice2", 75),
  new GameItem("Ты мне доверяешь? [75]", "ashvoice4", 75),
  new GameItem(" ", "ashvoice3", 0)));
this.saveInfo();
}


initHeroes2()
{
  this.completeInfo.allHeroesSprayPotg.push(new Hero("Ана",
  new GameItem("Младенец", "anaspray1", 25),
  new GameItem(" ", "anapose1", 0),
  new GameItem(" ", "anaemot1", 0),
  new GameItem("Гравитонный импульс", "anapotg1", 75)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Бастион",
  new GameItem("На дне", "basspray1", 25),
  new GameItem(" ", "baspose1", 0),
  new GameItem(" ", "basemot1", 0),
  new GameItem(" ", "baspotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Батист",
    new GameItem("Ноша [75]", "batspray1", 75),
    new GameItem(" ", "batpose1", 0),
    new GameItem(" ", "batemot1", 0),
    new GameItem(" ", "batpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Бригитта",
  new GameItem("Досада", "brispray1", 75),
  new GameItem("На колено", "bripose1", 75),
  new GameItem(" ", "briemot1", 0),
  new GameItem(" ", "bripotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Вдова",
  new GameItem("Свадьба", "widspray1", 25),
  new GameItem("Разведка [225]", "widpose1", 225),
  new GameItem(" ", "emot1", 0),
  new GameItem(" ", "widpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Генджи",
  new GameItem("Рамэн", "genspray1", 25),
  new GameItem("Медитация", "genpose1", 75),
  new GameItem(" ", "genemot1", 0),
  new GameItem(" ", "genpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Дзенъятта",
  new GameItem("Оболочка", "zenspray1", 25),
  new GameItem("Медитация [225]", "zenpose1", 225),
  new GameItem(" ", "zenemot1", 0),
  new GameItem("Перспектива", "zenpotg1", 75)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Дива",
  new GameItem("Портативная консоль", "divspray1", 25),
  new GameItem(" ", "divpose1", 0),
  new GameItem(" ", "divemot1", 0),
  new GameItem("Селфи", "divpotg1", 75)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Думфист",
  new GameItem("Палец вниз", "doospray1", 75),
  new GameItem(" ", "doopose1", 0),
  new GameItem("POTG - Комбо", "dooemot1", 75),
  new GameItem("Дрожь земли", "doopotg1", 250)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Жнец",
  new GameItem("Коммандос", "reaspray1", 25),
  new GameItem(" ", "reapose1", 0),
  new GameItem(" ", "reaemot1", 0),
  new GameItem(" ", "reapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Заря",
  new GameItem("Мы сможем!", "zarspray1", 25),
  new GameItem("Вот это сила!", "zarpose1", 75),
  new GameItem(" ", "zaremot1", 0),
  new GameItem(" ", "zarpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Крысавчик",
  new GameItem("Коляска", "junspray1", 25),
  new GameItem("Фото арестованного", "junpose1", 75),
  new GameItem(" ", "junemot1", 0),
  new GameItem(" ", "junpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Лусио",
  new GameItem("Коньки", "lucspray1", 25),
  new GameItem("Стойка", "lucpose1", 75),
  new GameItem(" ", "lucemot1", 0),
  new GameItem(" ", "lucpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("МакКри",
  new GameItem("Тир", "mccspray1", 25),
  new GameItem("Перед выстрелом", "mccpose1", 75),
  new GameItem(" ", "mccemot1", 0),
  new GameItem(" ", "mccpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Мерси",
  new GameItem("Военный врач", "merspray1", 25),
  new GameItem(" ", "merpose1", 0),
  new GameItem(" ", "meremot1", 0),
  new GameItem(" ", "merpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Мойра",
  new GameItem("Первый класс", "moispray1", 75),
  new GameItem("Эксперимент", "moipose1", 75),
  new GameItem(" ", "moiemot1", 0),
  new GameItem(" ", "moipotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Мэй",
  new GameItem("Пижамка", "meispray1", 25),
  new GameItem(" ", "meipose1", 0),
  new GameItem(" ", "meiemot1", 0),
  new GameItem(" ", "meipotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Ориса",
  new GameItem("Цветок", "orispray1", 25),
  new GameItem("Щеночек", "oripose1", 75),
  new GameItem(" ", "oriemot1", 0),
  new GameItem("Молот не дошел", "oripotg1", 75)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Райнхардт",
  new GameItem("Тот самый плакат", "reispray1", 25),
  new GameItem("На колене", "reipose1", 75),
  new GameItem(" ", "reiemot1", 0),
  new GameItem(" ", "reipotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Симметра",
  new GameItem("Школьница", "symspray1", 25),
  new GameItem("Ученье - свет", "sympose1", 75),
  new GameItem(" ", "symemot1", 0),
  new GameItem(" ", "sympotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Солдат76",
  new GameItem("Коммандос", "solspray1", 25),
  new GameItem(" ", "solpose1", 0),
  new GameItem("Упал-отжался", "solemot1", 75),
  new GameItem(" ", "solpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Сомбра",
  new GameItem("Кофе", "somspray1", 25),
  new GameItem("Голокуб [225]", "sompose1", 225),
  new GameItem(" ", "somemot1", 0),
  new GameItem(" ", "sompotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Торбьорн",
  new GameItem("Бригитта", "torspray1", 25),
  new GameItem(" ", "torpose1", 0),
  new GameItem(" ", "toremot1", 0),
  new GameItem("Моя малютка", "torpotg1", 75)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Трейсер",
  new GameItem("Пилот", "traspray1", 25),
  new GameItem(" ", "trapose1", 0),
  new GameItem(" ", "traemot1", 0),
  new GameItem(" ", "trapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Турбосвин",
  new GameItem("Байкер", "roaspray1", 25),
  new GameItem("Фото арестованного", "roapose1", 75),
  new GameItem(" ", "roaemot1", 0),
  new GameItem(" ", "roapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Уинстон",
  new GameItem("Башня", "winspray1", 25),
  new GameItem("Арахисовое масло", "winpose1", 75),
  new GameItem(" ", "winemot1", 0),
  new GameItem(" ", "winpotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Фара",
  new GameItem("Тир", "phaspray1", 25),
  new GameItem(" ", "phapose1", 0),
  new GameItem("Ракета", "phaemot1", 75),
  new GameItem(" ", "phapotg1", 0)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Хаммонд",
  new GameItem("Зарядка [75]", "hamspray1", 75),
  new GameItem(" ", "hampose1", 0),
  new GameItem(" ", "hamemot1", 0),
  new GameItem("Драматический взгляд [750]", "hampotg1", 750)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Ханзо",
  new GameItem("Рамэн", "hanspray1", 25),
  new GameItem(" ", "hanpose1", 0),
  new GameItem("Тренировка", "hanemot1", 75),
  new GameItem("Шквал [750]", "hanpotg1", 750)));

this.completeInfo.allHeroesSprayPotg.push(new Hero("Эш",
  new GameItem("Забияка [75]", "ashspray1", 75),
  new GameItem("  ", "ashpose1", 0),
  new GameItem(" ", "ashemot1", 0),
  new GameItem(" ", "ashpotg1", 0)));
this.saveInfo();
}


initIcons() {
  this.completeInfo.allIcons.push(
    new GameItem("Мятеж-2017", "uprising17icon", 0),
    new GameItem("Архивы 2018", "archives18icon", 0),
    new GameItem("Архивы 2019", "archives19icon", 0),
	  new GameItem("Подопытный №28", "pod28icon", 0),
	  new GameItem("Солдат-24", "col24icon", 0),
	  new GameItem("Эквалайзер", "equaicon", 0),
	  new GameItem("Наследник", "naslicon", 0),
	  new GameItem("Коломар", "koloicon", 0),
    new GameItem("Огундиму", "ogunicon", 0),
    new GameItem("Максимильен", "maxiicon", 0),
    new GameItem("О'Доран", "odoricon", 0),
    new GameItem("Главный инженер", "injeicon", 0),
    new GameItem("Военный врач", "vraicon", 0),
    new GameItem("Кадет", "kadeicon", 0),
    new GameItem("Лейтенант", "leiticon", 0),
    new GameItem("Кружка", "krujicon", 0),
    new GameItem("Лакруа", "lacricon", 0),

    new GameItem("Бандит Маккри", "bndticon", 0),
    new GameItem("Офицер-76", "of76icon", 0),
    new GameItem("Гвишин", "gwshicon", 0),
    new GameItem("Кролик", "krolicon", 0),
    new GameItem("Лейтенант Огюстен", "ogusicon", 0),
    new GameItem("Дворецкий", "dvoricon", 0),



    new GameItem("Тяжелый штурмовик", "hardicon", 0),
    new GameItem("Ассасин", "asasicon", 0),
    new GameItem("Каратель", "karaicon", 0),
    new GameItem("Снайпер", "snaiicon", 0),
    new GameItem("Пехотинец", "pehoicon", 0),
      new GameItem("OR14-NS", "ornsicon", 0),
      new GameItem("B73-NS", "bnsicon", 0),
      new GameItem("Киборг", "kiboicon", 0),


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

      new GameItem("B73-NS", "bnsspray", 0),
      new GameItem("OR14-NS", "ornsspray", 0),
      new GameItem("Ланцет", "lanzspray", 0),
      new GameItem("Ликвидатор", "likvspray", 0),
      new GameItem("Штурмовик", "sturspray", 0),
      new GameItem("Челнокмари", "chelnospray", 0),
      new GameItem("Нуль-Мари", "nlmrspray", 0),

      new GameItem("Альмендрон", "almdspray", 0),
      new GameItem("Большие планы", "bigpspray", 0),
      new GameItem("Засада", "zasaspray", 0),
      new GameItem("Крутой разворот", "razvspray", 0),
      new GameItem("Новый ударный отряд", "newospray", 0),
      new GameItem("По тормозам", "tormspray", 0),
      new GameItem("Посредник", "posrspray", 0),
      new GameItem("Я освещу путь", "puttspray", 0),

      new GameItem("Нуль-Сектор", "sectspray", 25),
      new GameItem("Архивы", "archspray", 25) // есть ли спрей 2017?


      
  );
  this.saveInfo();
}

}
