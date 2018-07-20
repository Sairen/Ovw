import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class SummerService {

    completeInfo = new CompleteInfo();

    constructor() {
        let getData = localStorage.getItem("summer1");
        if (getData == null) {
            this.initEveryting();
            this.saveInfo();
            getData = localStorage.getItem("summer1");
        }
        this.completeInfo = JSON.parse(getData);
    }

    getInfo() {
        return this.completeInfo;
    }


    saveInfo() {
        let savedSkins = JSON.stringify(this.completeInfo);
        localStorage.setItem("summer1", savedSkins);
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



    initSkis() {
        this.completeInfo = new CompleteInfo();

        this.completeInfo.goldSkins2018.push(new Skin("lskin---18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskin---18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskin---18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskin---18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskin---18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskin---18", 3000));

        this.completeInfo.goldSkins2017.push(new Skin("lskinjun17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinrea17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmcc17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinsol17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinsom17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinwid17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmer17", 1000));

        this.completeInfo.goldSkins2016.push(new Skin("lskinzar116", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinzar216", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskintra116", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskintra216", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinluc116", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinluc216", 1000));

        this.completeInfo.purpleSkins2016.push(new Skin("skingen16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinmer16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinmcc16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skindiv16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinwid16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skintor16", 250));

        this.saveInfo();
    }


    initHeroes() {
        this.completeInfo.allHeroes.push(new Hero("Ана",
            new GameItem("Хороший учитель", "anavoice1", 25),
            new GameItem("Лучше в поле", "anavoice2", 25),
            new GameItem("Стрельба", "anaspray1", 25),
            new GameItem("Танец дракона", "anaspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Бастион",
            new GameItem("У-у-и-и-и", "basvoice1", 25),
            new GameItem("Дуу-ду-дуу", "basvoice2", 25),
            new GameItem("Бокс", "basspray1", 25),
            new GameItem("Танец дракона", "basspray2", 25)));

           // this.completeInfo.allHeroes.push(new Hero("Бригитта",
  //new GameItem("Всё будет! [75]", "brivoice1", 75),
  //new GameItem("Всего лишь царапина [75]", "brivoice2", 75),
 // new GameItem("Восьмерка пик [75]", "brispray1", 75),
//new GameItem("Танец [75]", "brispray2", 75)));

        this.completeInfo.allHeroes.push(new Hero("Вдова",
            new GameItem("Стреляю без промаха", "widvoice1", 25),
            new GameItem("В яблочко", "widvoice2", 25),
            new GameItem("Гимнастика", "widspray1", 25),
            new GameItem("Танец дракона", "widspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Генджи",
            new GameItem("Будет сложнее", "genvoice1", 25),
            new GameItem("Туше", "genvoice2", 25),
            new GameItem("Фехтование", "genspray1", 25),
            new GameItem("Танец дракона", "genspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Дзенъятта",
            new GameItem("Стремись к совершенству", "zenvoice1", 25),
            new GameItem("Форма конечна", "zenvoice2", 25),
            new GameItem("Тэквондо", "zenspray1", 25),
            new GameItem("Танец дракона", "zenspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Дива",
            new GameItem("Я - лучшая", "divavoice1", 25),
            new GameItem("В таблицу рекордов", "divavoice2", 25),
            new GameItem("Велоспорт", "divaspray1", 25),
            new GameItem("Танец дракона", "divaspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Думфист",
            new GameItem("Все лишнее", "doovoice1", 25),
            new GameItem("Порхай как", "doovoice2", 25),
            new GameItem("Толкание ядра", "doospray1", 25),
            new GameItem("Танец дракона", "doospray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Жнец",
            new GameItem("Смерть с доставкой", "reavoice1", 25),
            new GameItem("Просто победите", "reavoice2", 25),
            new GameItem("Велокросс", "reaspray1", 25),
            new GameItem("Танец дракона", "reaspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Заря",
            new GameItem("Потом и кровью", "zarvoice1", 25),
            new GameItem("Это просто игра", "zarvoice2", 25),
            new GameItem("Тяжелая атлетика", "zarspray1", 25),
            new GameItem("Танец дракона", "zarspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Крысавчик",
            new GameItem("Даю десять!", "junvoice1", 25),
            new GameItem("Даю три", "junvoice2", 25),
            new GameItem("Теннис", "junspray1", 25),
            new GameItem("Танец дракона", "junspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Лусио",
            new GameItem("Мы - чемпионы", "lucvoice1", 25),
            new GameItem("Не круто", "lucvoice2", 25),
            new GameItem("Футбол", "lucspray1", 25),
            new GameItem("Танец дракона", "lucspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("МакКри",
            new GameItem("Не люблю проигрывать", "mccvoice1", 25),
            new GameItem("Добрый бабах", "mccvoice2", 25),
            new GameItem("Конный спорт", "mccspray1", 25),
            new GameItem("Танец дракона", "mccspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Мерси",
            new GameItem("Проще простого", "mervoice1", 25),
            new GameItem("Присутствие медика", "mervoice2", 25),
            new GameItem("Бадминтон", "merspray1", 25),
            new GameItem("Танец дракона", "merspray2", 25)));

       // this.completeInfo.allHeroes.push(new Hero("Мойра",
           // new GameItem("Ваше здоровье!", "moivoice1", 25),
           // new GameItem("Гоняться за хвостом", "moivoice2", 25),
           // new GameItem("Собачки", "moispray1", 25),
           // new GameItem("Танец дракона", "moispray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Мэй",
            new GameItem("Любым преградам назло", "meivoice1", 25),
            new GameItem("Что смогла", "meivoice2", 25),
            new GameItem("Пинг-понг", "meispray1", 25),
            new GameItem("Танец дракона", "meispray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Ориса",
            new GameItem("Золото", "orivoice1", 25),
            new GameItem("Не станет горой", "orivoice2", 25),
            new GameItem("Метание копья", "orispray1", 25),
            new GameItem("Танец дракона", "orispray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Райнхардт",
            new GameItem("Дас ист фантастиш", "reivoice1", 25),
            new GameItem("Что блестит", "reivoice2", 25),
            new GameItem("Танец льва", "reispray1", 25),
            new GameItem("Танец дракона", "reispray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Симметра",
            new GameItem("Усердный туд приносит плоды", "symvoice1", 25),
            new GameItem("Главное победа", "symvoice2", 25),
            new GameItem("Художественная гимнастика", "symspray1", 25),
            new GameItem("Танец дракона", "symspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Солдат76",
            new GameItem("Медаль хочешь", "solvoice1", 25),
            new GameItem("Кто на меня", "solvoice2", 25),
            new GameItem("Гольф", "solspray1", 25),
            new GameItem("Танец дракона", "solspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Сомбра",
            new GameItem("Как оно?", "somvoice1", 25),
            new GameItem("Попробуйте догнать", "somvoice2", 25),
            new GameItem("Прыжки в высоту", "somspray1", 25),
            new GameItem("Танец дракона", "somspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Торбьорн",
            new GameItem("Враги у нас не кончатся", "torvoice1", 25),
            new GameItem("За второе место", "torvoice2", 25),
            new GameItem("Водное поло", "torspray1", 25),
            new GameItem("Танец дракона", "torspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Трейсер",
            new GameItem("Глотай пыль", "travoice1", 25),
            new GameItem("Тайм-аут", "travoice2", 25),
            new GameItem("Бег", "traspray1", 25),
            new GameItem("Танец дракона", "traspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Турбосвин",
            new GameItem("Мое не отдам", "roavoice1", 25),
            new GameItem("В команде все равны", "roavoice2", 25),
            new GameItem("Прыжки в воду", "roaspray1", 25),
            new GameItem("Танец дракона", "roaspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Уинстон",
            new GameItem("Поиграли и хватит", "winvoice1", 25),
            new GameItem("Пришло мое время", "winvoice2", 25),
            new GameItem("Волейбол", "winspray1", 25),
            new GameItem("Танец дракона", "winspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Фара",
            new GameItem("Мы пройдем через это вместе", "phavoice1", 25),
            new GameItem("Побеждать", "phavoice2", 25),
            new GameItem("Баскетбол", "phaspray1", 25),
            new GameItem("Танец дракона", "phaspray2", 25)));

            this.completeInfo.allHeroes.push(new Hero("Хаммонд",
            new GameItem("----", "hamvoice1", 75),
            new GameItem("----", "hamvoice2", 75),
            new GameItem("----", "hamspray1", 75),
            new GameItem("----", "hamspray2", 75)))

        this.completeInfo.allHeroes.push(new Hero("Ханзо",
            new GameItem("Не размениваюсь по мелочам", "hanvoice1", 25),
            new GameItem("Первый шаг к успеху", "hanvoice2", 25),
            new GameItem("Стрельба из лука", "hanspray1", 25),
            new GameItem("Танец дракона", "hanspray2", 25)));

        this.saveInfo();
    }

    initIcons() {
        this.completeInfo.allIcons.push(
            new GameItem("Летние игры 2016", "sumer16icon", 0),
            new GameItem("Летние игры 2017", "sumer17icon", 0),
            new GameItem("Летние игры 2018", "year18icon", 0),

            new GameItem("Австралия", "austicon", 0),
            new GameItem("Бразилия", "brazicon", 0),
            new GameItem("Китай", "chinicon", 0),
            new GameItem("Египет", "egypicon", 0),
            new GameItem("Франция", "franicon", 0),
            new GameItem("Германия", "germicon", 0),
            new GameItem("Греция", "greeicon", 0),
            new GameItem("Япония", "japaicon", 0),
            new GameItem("Мексика", "mexiicon", 0),
            new GameItem("Непал", "nepaicon", 0),
            new GameItem("Нумбани", "numbicon", 0),
            new GameItem("Россия", "russicon", 0),
            new GameItem("Корея", "koreicon", 0),
            new GameItem("Швеция", "shveicon", 0),
            new GameItem("Швейцаирия", "shvricon", 0),
            new GameItem("Англия", "englicon", 0),
            new GameItem("США", "usaicon", 0),

            new GameItem("Стрельба из лука", "bowicon", 0),
            new GameItem("Велокросс", "krosicon", 0),
            new GameItem("Бадминтон", "badmicon", 0),
            new GameItem("Баскетбол", "baskicon", 0),
            new GameItem("Бокс", "boksicon", 0),
            new GameItem("Прыжки в воду", "wateicon", 0),
            new GameItem("Велоспорт", "veloicon", 0),
            new GameItem("Конный спорт", "konnicon", 0),
            new GameItem("Фехтование", "fehticon", 0),
            new GameItem("Футбол", "footicon", 0),
            new GameItem("Гольф", "golficon", 0),
            new GameItem("Спортивная гимнаст", "spgiicon", 0),
            new GameItem("Художественная гимнаст", "hugiicon", 0),
            new GameItem("Стрельба", "shoticon", 0),
            new GameItem("Пинг-понг", "pingicon", 0),
            new GameItem("Тхэквондо", "tekvicon", 0),
            new GameItem("Теннис", "teniicon", 0),
            new GameItem("Бег", "runnicon", 0),
            new GameItem("Воллейбол", "voleicon", 0),
            new GameItem("Водное поло", "poloicon", 0),
            new GameItem("Тяжелая атлетика", "tyajicon", 0),
            new GameItem("----", "hamicon", 0),
            new GameItem("Борьба", "borbicon", 0)
        );

        this.saveInfo();
    }

    initSprays() {
        this.completeInfo.allSprays.push(
            new GameItem("Летние игры 2016", "sumer16spray", 25),
            new GameItem("Летние игры 2017", "sumer17spray", 25),
            new GameItem("Летние игры 2018", "sumer18spray", 75),
            new GameItem("Гол! Гол! Гол!", "goalspray", 0),
            new GameItem("В надеж руках", "inhanspray", 0),
            new GameItem("Удар ножницами", "scisspray", 0)
        );
        this.saveInfo();
    }

    initPoses() { // maybe move it to hero depens if now here will be all heroes
        this.completeInfo.allPoses.push(
            new GameItem("Мерси Медаль", "anapose1", 75),
            new GameItem("Бастион - Медаль", "baspose1", 75),
            new GameItem("Симмет Медаль", "meipose1", 75),
            new GameItem("Сомбра Медаль", "sompose1", 75),
            new GameItem("Крысавчик Медаль", "junpose1", 75),
            new GameItem("Трейс Медаль", "roapose1", 75),
            new GameItem("Хандзо Медаль", "mccpose1", 75),
            new GameItem("Дзен Медали", "sympose1", 75),
            new GameItem("Жнец Медаль", "widpose1", 75),
            new GameItem("Мэй Медаль", "zarpose1", 75),
            new GameItem("Вдова Медаль", "trapose1", 75),
            new GameItem("Торб Медаль", "junpose1", 75),
            new GameItem("Свин Медаль", "junpose1", 75),
            new GameItem("Уинстон Медаль", "junpose1", 75),
            new GameItem("Фара Медаль", "junpose1", 75),
            new GameItem("Солдат Удар", "winpose1", 75)
        );
        this.saveInfo();
    }

    initEmotes() {
        this.completeInfo.allEmotes.push(
            new GameItem("Ана - Пляжный волейбол", "anaemote1", 250),
            new GameItem("Бастион - Бокс", "basemote1", 250),
            new GameItem("Луцио - Футболист", "lucemote1", 250),
            new GameItem("Симметра - Лента", "symemote1", 250)
        );
        this.saveInfo();
    }

initPotg()
{
    this.completeInfo.allMoments.push(
        new GameItem("Ханзо - В яблочко", "hanmoment1", 250),
        new GameItem("Фара - Слэм-данк", "phamoment1", 250),
        new GameItem("Крысавчик - Толькание ядра", "junmoment1", 250),
        new GameItem("Лусио -  Удар ножницами", "lucmoment1", 250),
        new GameItem("Трейсер - Барьер", "tramoment1", 250)
    );
    this.saveInfo();
}



}
