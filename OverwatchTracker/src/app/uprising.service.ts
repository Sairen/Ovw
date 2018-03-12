import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class UprisingService {

completeInfo = new CompleteInfo();


  
  constructor()
  { 
    let getData = localStorage.getItem("uprising");
    if (getData==null)
    {
      this.initEveryting();
      this.saveInfo();
      getData = localStorage.getItem("uprising");
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
    localStorage.setItem("thedata", savedInfo);
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

  this.completeInfo.goldSkins2018.push(new Skin("lskinXXX16",3000));


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
  new GameItem("Младенец", "anaspray1", 25),
  new GameItem("XXXXXXXXXX", "anaspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Бастион",
  new GameItem("Ду-и ву-и у-о", "basvoice1", 25),
  new GameItem("Биу-ву-у биу-ву-у", "basvoice2", 25),
  new GameItem("На дне", "basspray1", 25),
  new GameItem("XXXXXXXXXX", "basspray2", 75)));

  this.completeInfo.allHeroes.push(new Hero("Бригитта",
  new GameItem("XXXXXXXXXX", "brivoice1", 75),
  new GameItem("XXXXXXXXXX", "brivoice2", 75),
  new GameItem("XXXXXXXXXX", "brispray1", 75),
  new GameItem("XXXXXXXXXX", "brispray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Вдова",
  new GameItem("Представление начинается", "widvoice1", 25),
  new GameItem("Эмоции - это слабость", "widvoice2", 25),
  new GameItem("Свадьба", "widspray1", 25),
  new GameItem("XXXXXXXXXX", "widspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Генджи",
  new GameItem("Давай еще!", "genvoice1", 25),
  new GameItem("Жизнь от смерти", "genvoice2", 25),
  new GameItem("Рамэн", "genspray1", 25),
  new GameItem("XXXXXXXXXX", "genspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Дзенъятта",
  new GameItem("Идите путем просветления", "zenvoice1", 25),
  new GameItem("Сменить направление", "zenvoice2", 25),
  new GameItem("Оболочка", "zenspray1", 25),
  new GameItem("XXXXXXXXXX", "zenspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Дива",
  new GameItem("Воспринимайте всерьез", "divavoice1", 25),
  new GameItem("Не отставайте", "divavoice2", 25),
  new GameItem("Портативная консоль", "divaspray1", 25),
  new GameItem("XXXXXXXXXX", "divaspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Думфист",
  new GameItem("XXXXXXXXXX", "doovoice1", 75),
  new GameItem("XXXXXXXXXX", "doovoice2", 75),
  new GameItem("XXXXXXXXXX", "doospray1", 75),
  new GameItem("XXXXXXXXXX", "doospray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Жнец",
  new GameItem("Двигаюсь дальше", "reavoice1", 25),
  new GameItem("Опять дилетанты", "reavoice2", 25),
  new GameItem("Коммандос", "reaspray1", 25),
  new GameItem("XXXXXXXXXX", "reaspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Заря",
  new GameItem("Я рождена для битвы", "zarvoice1", 25),
  new GameItem("Что, уже сдаешься?", "zarvoice2",25),
  new GameItem("Мы сможем!", "zarspray1", 25),
  new GameItem("XXXXXXXXXX", "zarspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Крысавчик",
  new GameItem("О да!", "junvoice1", 25),
  new GameItem("За дурака держишь?", "junvoice2", 25),
  new GameItem("Коляска", "junspray1", 25),
  new GameItem("XXXXXXXXXX", "junspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Лусио",
  new GameItem("Живи без напряга", "lucvoice1", 25),
  new GameItem("Буп!", "lucvoice2", 25),
  new GameItem("Коньки", "lucspray1", 25),
  new GameItem("XXXXXXXXXX", "lucspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("МакКри",
  new GameItem("Разберемся по старинке?", "mccvoice1", 25),
  new GameItem("У каждого свои правила", "mccvoice2", 25),
  new GameItem("Тир", "mccspray1", 25),
  new GameItem("XXXXXXXXXX", "mccspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Мерси",
  new GameItem("Почему я ввязываюсь", "mervoice1", 25),
  new GameItem("Следите за здоровьем", "mervoice2", 25),
  new GameItem("Военный врач", "merspray1", 25),
  new GameItem("XXXXXXXXXX", "merspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Мойра",
  new GameItem("XXXXXXXXXX", "moivoice1", 75),
  new GameItem("XXXXXXXXXX", "moivoice2", 75),
  new GameItem("XXXXXXXXXX", "moispray1", 75),
  new GameItem("XXXXXXXXXX", "moispray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Мэй",
  new GameItem("Научное объяснение", "meivoice1", 25),
  new GameItem("С помощью науки", "meivoice2", 25),
  new GameItem("Пижамка", "meispray1", 25),
  new GameItem("XXXXXXXXXX", "meispray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Ориса",
  new GameItem("Ошибка: деление на ноль", "orivoice1", 25),
  new GameItem("Функции еще тестируются", "orivoice2", 25),
  new GameItem("Цветок", "orispray1", 25),
  new GameItem("XXXXXXXXXX", "orispray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Райнхардт",
  new GameItem("Меня не удержать", "reivoice1", 25),
  new GameItem("Тише едешь - дальше будешь", "reivoice2", 25),
  new GameItem("Тот самый плакат", "reispray1", 25),
  new GameItem("XXXXXXXXXX", "reispray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Симметра",
  new GameItem("Смирись", "symvoice1", 25),
  new GameItem("Я приняла во внимание", "symvoice2", 25),
  new GameItem("Школьница", "symspray1", 25),
  new GameItem("XXXXXXXXXX", "symspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Солдат76",
  new GameItem("Согласен", "solvoice1", 25),
  new GameItem("Моложе я не становлюсь", "solvoice2", 25),
  new GameItem("Коммандос", "solspray1", 25),
  new GameItem("XXXXXXXXXX", "solspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Сомбра",
  new GameItem("Не дрейфь", "somvoice1", 25),
  new GameItem("Поболтать? Спасибо, но нет", "somvoice2", 25),
  new GameItem("Кофе", "somspray1", 25),
  new GameItem("XXXXXXXXXX", "somspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Торбьорн",
  new GameItem("Дурной мастер винит инструмент", "torvoice1", 25),
  new GameItem("Куй, пока горячо", "torvoice2", 25),
  new GameItem("Бригитта", "torspray1", 25),
  new GameItem("XXXXXXXXXX", "torspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Трейсер",
  new GameItem("Не тупи", "travoice1", 25),
  new GameItem("Простите, опоздала", "travoice2", 25),
  new GameItem("Пилот", "traspray1", 25),
  new GameItem("XXXXXXXXXX", "traspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Турбосвин",
  new GameItem("Верняк", "roavoice1", 25),
  new GameItem("Я убивал и за меньшее", "roavoice2", 25),
  new GameItem("Байкер", "roaspray1", 25),
  new GameItem("XXXXXXXXXX", "roaspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Уинстон",
  new GameItem("Вы мои очки не видели?", "winvoice1", 25),
  new GameItem("Ну, так и планировалось", "winvoice2", 25),
  new GameItem("Башня", "winspray1", 25),
  new GameItem("XXXXXXXXXX", "winspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Фара",
  new GameItem("Я - королева ракет", "phavoice1", 25),
  new GameItem("Ничего личного", "phavoice2", 25),
  new GameItem("Тир", "phaspray1", 25),
  new GameItem("XXXXXXXXXX", "phaspray2", 75)));

this.completeInfo.allHeroes.push(new Hero("Ханзо",
  new GameItem("Красота таится в простом", "hanvoice1", 25),
  new GameItem("Неприемлимо", "hanvoice2", 25),
  new GameItem("Рамэн", "hanspray1", 25),
  new GameItem("XXXXXXXXXX", "hanspray2", 75)));

this.saveInfo();
}

initIcons() {
  this.completeInfo.allIcons.push(
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
      new GameItem("B73-NS", "bnsspray", 0),
      new GameItem("OR14-NS", "ornsspray", 0),
      new GameItem("Ланцет", "lanzspray", 0),
      new GameItem("Ликвидатор", "likvspray", 0),
      new GameItem("Штурмовик ", "sturspray", 0),      
      new GameItem("Нуль-Мари", "nlmrspray", 0),
      new GameItem("Нуль-Сектор", "sectspray", 25)
  );
  this.saveInfo();
}

initPoses() {
  this.completeInfo.allPoses.push(
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
        new GameItem("Дива - Селфи", "divmoment1", 250),
        new GameItem("Дзенъятта - Перспектива", "zenmoment1", 250),
        new GameItem("Торбьорн - Моя малютка", "tormoment1", 250)
    );
    this.saveInfo();
}

}
