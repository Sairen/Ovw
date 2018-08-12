import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class SummerService {

    completeInfo = new CompleteInfo();

    constructor() {
        let getData = localStorage.getItem("summer18");
        if (getData == null) {
            this.initEveryting();
            this.saveInfo();
            getData = localStorage.getItem("summer18");
        }
        this.completeInfo = JSON.parse(getData);
    }

    getInfo() {
        return this.completeInfo;
    }


    saveInfo() {
        let savedSkins = JSON.stringify(this.completeInfo);
        localStorage.setItem("summer18", savedSkins);
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

        this.completeInfo.goldSkins2018.push(new Skin("lskinzen18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinroa18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinana18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinwin18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskindiv18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinrei18", 3000));

        this.completeInfo.purpleSkins2018.push(new Skin("skinmoi18", 750));
        this.completeInfo.purpleSkins2018.push(new Skin("skinsom18", 750));
        this.completeInfo.purpleSkins2018.push(new Skin("skinbri18", 750));

        this.completeInfo.goldSkins2017.push(new Skin("lskinjun17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinrea17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmcc17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinsol17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinsom17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinwid17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmer17", 1000));

        this.completeInfo.goldSkins2016.push(new Skin("lskinzar161", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinzar162", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskintra161", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskintra162", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinluc161", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinluc162", 1000));

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
            new GameItem("Нервы сдают?", "anavoice3", 75),
            new GameItem("Стрельба", "anaspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Бастион",
            new GameItem("У-у-и-и-и", "basvoice1", 25),
            new GameItem("Дуу-ду-дуу", "basvoice2", 25),
            new GameItem(" ", "basvoice3", 0),
            new GameItem("Бокс", "basspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Бригитта",
            new GameItem("Звучит гордо [75]", "brivoice1", 75),
            new GameItem("Мы - Линдхольмы [75]", "brivoice2", 75),
             new GameItem(" ", "brivoice3", 0),
            new GameItem("Метание молота [75]", "brispray1", 75)));

        this.completeInfo.allHeroes.push(new Hero("Вдова",
            new GameItem("Стреляю без промаха", "widvoice1", 25),
            new GameItem("В яблочко", "widvoice2", 25),
            new GameItem(" ", "widvoice3", 0),
            new GameItem("Гимнастика", "widspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Генджи",
            new GameItem("Будет сложнее", "genvoice1", 25),
            new GameItem("Туше", "genvoice2", 25),
            new GameItem(" ", "genvoice3", 0),
            new GameItem("Фехтование", "genspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Дзенъятта",
            new GameItem("Стремись к совершенству", "zenvoice1", 25),
            new GameItem("Форма конечна", "zenvoice2", 25),
            new GameItem(" ", "zenvoice3", 0),
            new GameItem("Тэквондо", "zenspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Дива",
            new GameItem("Я - лучшая", "divavoice1", 25),
            new GameItem("В таблицу рекордов", "divavoice2", 25),
            new GameItem(" ", "divavoice3", 0),
            new GameItem("Велоспорт", "divaspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Думфист",
            new GameItem("Все лишнее", "doovoice1", 25),
            new GameItem("Порхай как", "doovoice2", 25),
            new GameItem("Увидимся на ринге", "doovoice3", 75),
            new GameItem("Толкание ядра", "doospray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Жнец",
            new GameItem("Смерть с доставкой", "reavoice1", 25),
            new GameItem("Просто победите", "reavoice2", 25),
            new GameItem(" ", "reavoice3", 0),
            new GameItem("Велокросс", "reaspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Заря",
            new GameItem("Потом и кровью", "zarvoice1", 25),
            new GameItem("Это просто игра", "zarvoice2", 25),
            new GameItem("Судья из России", "zarvoice3", 75),
            new GameItem("Тяжелая атлетика", "zarspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Крысавчик",
            new GameItem("Даю десять!", "junvoice1", 25),
            new GameItem("Даю три", "junvoice2", 25),
            new GameItem(" ", "junvoice3", 0),
            new GameItem("Теннис", "junspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Лусио",
            new GameItem("Мы - чемпионы", "lucvoice1", 25),
            new GameItem("Не круто", "lucvoice2", 25),
            new GameItem("Да ладно?!", "lucvoice3", 75),
            new GameItem("Футбол", "lucspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("МакКри",
            new GameItem("Не люблю проигрывать", "mccvoice1", 25),
            new GameItem("Добрый бабах", "mccvoice2", 25),
            new GameItem(" ", "mccvoice3", 0),
            new GameItem("Конный спорт", "mccspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Мерси",
            new GameItem("Проще простого", "mervoice1", 25),
            new GameItem("Присутствие медика", "mervoice2", 25),
            new GameItem(" ", "mervoice3", 0),
            new GameItem("Бадминтон", "merspray1", 25)));

       this.completeInfo.allHeroes.push(new Hero("Мойра",
           new GameItem("Наука делает... [75]", "moivoice1", 75),
           new GameItem("Показатели улучшены[75]", "moivoice2", 75),
           new GameItem(" ", "moivoice3", 0),
           new GameItem("Гандбол [75]", "moispray1", 75)));

        this.completeInfo.allHeroes.push(new Hero("Мэй",
            new GameItem("Любым преградам назло", "meivoice1", 25),
            new GameItem("Что смогла", "meivoice2", 25),
            new GameItem(" ", "meivoice3", 0),
            new GameItem("Пинг-понг", "meispray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Ориса",
            new GameItem("Золото", "orivoice1", 25),
            new GameItem("Не станет горой", "orivoice2", 25),
            new GameItem(" ", "orivoice3", 0),
            new GameItem("Метание копья", "orispray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Райнхардт",
            new GameItem("Дас ист фантастиш", "reivoice1", 25),
            new GameItem("Что блестит", "reivoice2", 25),
            new GameItem(" ", "reivoice3", 0),
            new GameItem("Борьба", "reispray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Симметра",
            new GameItem("Усердный туд приносит плоды", "symvoice1", 25),
            new GameItem("Главное победа", "symvoice2", 25),
            new GameItem(" ", "symvoice3", 0),
            new GameItem("Художественная гимнастика", "symspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Солдат76",
            new GameItem("Медаль хочешь", "solvoice1", 25),
            new GameItem("Кто на меня", "solvoice2", 25),
            new GameItem(" ", "solvoice3", 0),
            new GameItem("Гольф", "solspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Сомбра",
            new GameItem("Как оно?", "somvoice1", 25),
            new GameItem("Попробуйте догнать", "somvoice2", 25),
            new GameItem(" ", "somvoice3", 0),
            new GameItem("Прыжки в высоту", "somspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Торбьорн",
            new GameItem("Враги у нас не кончатся", "torvoice1", 25),
            new GameItem("За второе место", "torvoice2", 25),
            new GameItem(" ", "torvoice3", 0),
            new GameItem("Водное поло", "torspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Трейсер",
            new GameItem("Глотай пыль", "travoice1", 25),
            new GameItem("Тайм-аут", "travoice2", 25),
            new GameItem(" ", "travoice3", 0),
            new GameItem("Бег", "traspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Турбосвин",
            new GameItem("Мое не отдам", "roavoice1", 25),
            new GameItem("В команде все равны", "roavoice2", 25),
            new GameItem(" ", "roavoice3", 0),
            new GameItem("Прыжки в воду", "roaspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Уинстон",
            new GameItem("Поиграли и хватит", "winvoice1", 25),
            new GameItem("Пришло мое время", "winvoice2", 25),
            new GameItem(" ", "winvoice3", 0),
            new GameItem("Волейбол", "winspray1", 25)));

        this.completeInfo.allHeroes.push(new Hero("Фара",
            new GameItem("Мы пройдем через это вместе", "phavoice1", 25),
            new GameItem("Побеждать", "phavoice2", 25),
            new GameItem(" ", "phavoice3", 0),
            new GameItem("Баскетбол", "phaspray1", 25)));

            this.completeInfo.allHeroes.push(new Hero("Хаммонд",
            new GameItem("Дали мяч - хомячь [75]", "hamvoice1", 75),
            new GameItem("Следи за мячом [75]", "hamvoice2", 75),
            new GameItem(" ", "hamvoice3", 0),
            new GameItem("Боулинг [75]", "hamspray1", 75)))

        this.completeInfo.allHeroes.push(new Hero("Ханзо",
            new GameItem("Не размениваюсь по мелочам", "hanvoice1", 25),
            new GameItem("Первый шаг к успеху", "hanvoice2", 25),
            new GameItem(" ", "hanvoice3", 0),
            new GameItem("Стрельба из лука", "hanspray1", 25)));

        this.saveInfo();
    }

    initIcons() {
        this.completeInfo.allIcons.push(
            new GameItem("Летние игры 2016", "sumer16icon", 0),
            new GameItem("Летние игры 2017", "sumer17icon", 0),
            new GameItem("Летние игры 2018", "sumer18icon", 0),

            new GameItem("Австралия", "austicon", 0),
            new GameItem("Австрия", "avsteicon", 0),
            new GameItem("Англия", "englicon", 0),
            new GameItem("Аргентина", "argeicon", 0),
            new GameItem("Бельгия", "belgicon", 0),
            new GameItem("Бразилия", "brazicon", 0),
            new GameItem("Германия", "germicon", 0),
            new GameItem("Греция", "greeicon", 0),
            new GameItem("Дания", "danicon", 0),
            new GameItem("Египет", "egypicon", 0),
            new GameItem("Израиль", "izraicon", 0),
            new GameItem("Испания", "ispaicon", 0),
            new GameItem("Иордания", "iordicon", 0),
            new GameItem("Ирландия", "irlicon", 0),
            new GameItem("Италия", "italicon", 0),
            new GameItem("Канада", "kanaicon", 0),
            new GameItem("Китай", "chinicon", 0),
            new GameItem("Корея", "koreicon", 0),            
            new GameItem("Мексика", "mexiicon", 0),
            new GameItem("Непал", "nepaicon", 0),
            new GameItem("Нидерланды", "nethicon", 0),
            new GameItem("Новая Зеландия", "newzicon", 0),
            new GameItem("Нумбани", "numbicon", 0),
            new GameItem("Португалия", "porticon", 0),
            new GameItem("Россия", "russicon", 0),
            new GameItem("Румыния", "rumiicon", 0),
            new GameItem("США", "usaicon", 0),
            new GameItem("Финляндия", "finlicon", 0),
            new GameItem("Франция", "franicon", 0),
            new GameItem("Швеция", "shveicon", 0),
            new GameItem("Швейцаирия", "shvricon", 0),
            new GameItem("Япония", "japaicon", 0),          

            new GameItem("Бадминтон", "badmicon", 0),
            new GameItem("Баскетбол", "baskicon", 0),
            new GameItem("Бег", "runnicon", 0),
            new GameItem("Бокс", "boksicon", 0),
            new GameItem("Борьба", "borbicon", 0),
            new GameItem("Боулинг", "bowlicon", 0),
            new GameItem("Велокросс", "krosicon", 0),
            new GameItem("Велоспорт", "veloicon", 0),
            new GameItem("Водное поло", "poloicon", 0),
            new GameItem("Воллейбол", "voleicon", 0),
            new GameItem("Гандбол", "gandicon", 0),
            new GameItem("Гольф", "golficon", 0),
            new GameItem("Конный спорт", "konnicon", 0),
            new GameItem("Метание молота", "moloicon", 0),
            new GameItem("Пинг-понг", "pingicon", 0),
            new GameItem("Прыжки в воду", "wateicon", 0),
            new GameItem("Спортивная гимнастика", "spgiicon", 0),
            new GameItem("Стрельба из лука", "bowicon", 0),
            new GameItem("Стрельба", "shoticon", 0),   
            new GameItem("Теннис", "teniicon", 0),         
            new GameItem("Тхэквондо", "tekvicon", 0),
            new GameItem("Тяжелая атлетика", "tyajicon", 0), 
            new GameItem("Фастбол", "fasticon", 0),
            new GameItem("Футбол", "footicon", 0),     
            new GameItem("Фехтование", "fehticon", 0),
            new GameItem("Художественная гимнастика", "hugiicon", 0),                
            
            new GameItem("Пляжный сезон", "plyaicon", 0),
            new GameItem("Лакросс", "lacricon", 0),
            new GameItem("Кэтчер", "catcicon", 0),
            new GameItem("Гридайронхардт", "gridicon", 0),
            new GameItem("Летящая по волнам", "waveicon", 0),
            new GameItem("D.vный отдых", "resticon", 0),
            new GameItem("Сфера", "spheicon", 0),
            new GameItem("Дайвомари", "damaicon", 0),
            new GameItem("Метеор", "meteicon", 0)
        );

        this.saveInfo();
    }

    initSprays() {
        this.completeInfo.allSprays.push(
            new GameItem("Летние игры 2016", "sumer16spray", 25),
            new GameItem("Летние игры 2017", "sumer17spray", 25),
            new GameItem("Летние игры 2018", "sumer18spray", 25),
            new GameItem("Гол! Гол! Гол!", "goalspray", 0),
            new GameItem("В надежных руках", "inhanspray", 0),
            new GameItem("Удар ножницами", "scisspray", 0)
        );
        this.saveInfo();
    }

    initPoses() { 
        this.completeInfo.allPoses.push(
            new GameItem("Бастион - Медаль", "baspose1", 75),
            new GameItem("Вдова - Медаль", "widpose1", 75),
            new GameItem("Дзен - Медали", "zenpose1", 75),
            new GameItem("Думфист - Медаль", "doopose1", 225),
            new GameItem("Жнец - Медаль", "reapose1", 75),
            new GameItem("Заря - Медали", "zarpose1", 225),
            new GameItem("Крысавчик - Медаль", "junpose1", 75),
            new GameItem("Лусио - Медаль", "lucpose1", 225),
            new GameItem("МакКри - Медаль", "mccpose1", 225),
            new GameItem("Мерси - Медаль", "merpose1", 75),
            new GameItem("Мойра - Медаль", "moipose1", 225),            
            new GameItem("Мэй - Медаль", "meipose1", 75),
            new GameItem("Симмет - Медаль", "sympose1", 75),
            new GameItem("Солдат - Удар", "solpose1", 75),
            new GameItem("Солдат - Медаль", "solpose2", 225),
            new GameItem("Сомбра - Медаль", "sompose1", 75),            
            new GameItem("Трейсер - Медаль", "trapose1", 75),
            new GameItem("Торб - Медаль", "torpose1", 75),
            new GameItem("Турбосвин - Медаль", "roapose1", 75),            
            new GameItem("Уинстон - Медаль", "winpose1", 75),
            new GameItem("Фара - Медаль", "phapose1", 75),
            new GameItem("Хандзо - Медаль", "hanpose1", 75)
        );
        this.saveInfo(); 
    }

    initEmotes() {
        this.completeInfo.allEmotes.push(
            new GameItem("Ана - Пляжный волейбол", "anaemote1", 250),
            new GameItem("Бастион - Бокс", "basemote1", 250),
            new GameItem("Луцио - Футболист", "lucemote1", 250),
            new GameItem("Симметра - Лента", "symemote1", 250),
            new GameItem("Мэй - Пинг-понг", "meiemote1", 750)
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
        new GameItem("Мойра - Подача", "moimoment1", 750),
        new GameItem("Ориса - На воротах", "orimoment1", 750)
    );
    this.saveInfo();
}



}
