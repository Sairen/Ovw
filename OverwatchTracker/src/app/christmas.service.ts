import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfoNew } from './completeinfoNew';
import { Hero } from './hero';
import { GameItem } from './gameitem';
import { Hero6 } from './Hero6';

@Injectable()
export class ChristmasService {

    completeInfo = new CompleteInfoNew();

    constructor() {
        let getData = localStorage.getItem("christmas18");
        if (getData == null) {
            this.initEveryting();
            this.saveInfo();
            getData = localStorage.getItem("christmas18");
        }
        this.completeInfo = JSON.parse(getData);
    }

    getInfo() {
        return this.completeInfo;
    }


    saveInfo() {
        let savedSkins = JSON.stringify(this.completeInfo);
        localStorage.setItem("christmas18", savedSkins);
    }

initEveryting()
{
    this.initSkis();
    this.initHeroes1();
    this.initHeroes2();
    this.initIcons();
    this.initSprays();
    this.initPoses();
    this.initEmotes();
    this.initPotg();
}



    initSkis() {
        this.completeInfo = new CompleteInfoNew();

        this.completeInfo.goldSkins2018.push(new Skin("lskintest18", 3000));


        this.completeInfo.purpleSkins2018.push(new Skin("skintest18", 750));


        this.completeInfo.goldSkins2017.push(new Skin("lskinsol17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinana17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinbas17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinsom17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinhan17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinjun17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinroa17", 1000));

        this.completeInfo.goldSkins2016.push(new Skin("lskinmei16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskintor16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskintra16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinwin16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinzen16", 1000));

        this.completeInfo.purpleSkins2016.push(new Skin("skinluc16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinmcc16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinpha16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinrea16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinroa16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinsom16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinzar16", 250));

        this.saveInfo();
    }


    initHeroes1() {
        this.completeInfo.allHeroesPoseVoice.push(new Hero("Ана",
            new GameItem("Я прикрою, не волнуйся", "anavoice1", 25),
            new GameItem("Стара я для сюрпризов", "anavoice2", 25),
            new GameItem("Тост", "anapose1", 75),
            new GameItem(" ", "anapose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Бастион",
            new GameItem("Дуи-дуу-хоу", "basvoice1", 25),
            new GameItem("Бу-у ву-у", "basvoice2", 25),
            new GameItem(" ", "baspose1", 0),
            new GameItem(" ", "baspose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Бригитта",
            new GameItem(" ", "brivoice1", 0),
            new GameItem(" ", "brivoice2", 0),
             new GameItem(" ", "bripose1", 0),
             new GameItem(" ", "bripose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Вдова",
            new GameItem("Совершенство", "widvoice1", 25),
            new GameItem("С рождеством", "widvoice2", 25),
            new GameItem("Тост", "widpose1", 75),
            new GameItem(" ", "widpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Генджи",
            new GameItem("С рождеством!", "genvoice1", 25),
            new GameItem("Считай что тебе повезло", "genvoice2", 25),
            new GameItem("Тост", "genpose1", 75),
            new GameItem(" ", "genpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Дзенъятта",
            new GameItem("Всякая снежинка падает", "zenvoice1", 25),
            new GameItem("Возрадуся мир", "zenvoice2", 25),
            new GameItem("Тост", "zenpose1", 75),
            new GameItem(" ", "zenpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Дива",
            new GameItem("Ой, ну не стоило", "divavoice1", 25),
            new GameItem("Cчастливых праздников", "divavoice2", 25),
            new GameItem("Праздник", "divapose1", 75),
            new GameItem(" ", "divpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Думфист",
            new GameItem("А говорят рыцарей больше нет", "doovoice1", 25),
            new GameItem("И что же ты мне подаришь?", "doovoice2", 25),
            new GameItem(" ", "doopose1", 0),
            new GameItem(" ", "doopose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Жнец",
            new GameItem("Где ваш праздничный настрой?", "reavoice1", 25),
            new GameItem("Остынь навсегда", "reavoice2", 25),
            new GameItem(" ", "reapose1", 0),
            new GameItem(" ", "reapose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Заря",
            new GameItem("За родину!", "zarvoice1", 25),
            new GameItem("Да остынь ты", "zarvoice2", 25),
            new GameItem("Тост", "zarpose1", 75),
            new GameItem(" ", "zarpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Крысавчик",
            new GameItem("С рождеством!", "junvoice1", 25),
            new GameItem("Ну давай, встряхнись уже", "junvoice2", 25),
            new GameItem(" ", "junpose1", 0),
            new GameItem(" ", "junpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Лусио",
            new GameItem("Счастливых праздников", "lucvoice1", 25),
            new GameItem("На вершину чартов", "lucvoice2", 25),
            new GameItem(" ", "lucpose1", 0),
            new GameItem(" ", "lucpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("МакКри",
            new GameItem("Кто-то же должен растопить лед", "mccvoice1", 25),
            new GameItem("Кого-то занесла метелица", "mccvoice2", 25),
            new GameItem(" ", "mccpose1", 0),
            new GameItem(" ", "mccpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Мерси",
            new GameItem("Ваш ангел хранитель", "mervoice1", 25),
            new GameItem("Я бы не отказалась", "mervoice2", 25),
            new GameItem("Тост", "merpose1", 75),
            new GameItem("Омела", "merpose2", 75)
        ));

       this.completeInfo.allHeroesPoseVoice.push(new Hero("Мойра",
           new GameItem("Aбсолютный ноль", "moivoice1", 75),
           new GameItem("С рождеством", "moivoice2", 75),
           new GameItem(" ", "moipose1", 0),
           new GameItem(" ", "moipose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Мэй",
            new GameItem("У меня для тебя подарок", "meivoice1", 25),
            new GameItem("Любишь сюрпризы?", "meivoice2", 25),
            new GameItem(" ", "meipose1", 0),
            new GameItem(" ", "meipose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Ориса",
            new GameItem("Где же новый год?", "orivoice1", 25),
            new GameItem("Анализ поведения за год", "orivoice2", 25),
            new GameItem(" ", "oripose1", 0),
            new GameItem(" ", "oripose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Райнхардт",
            new GameItem("Еще один непослушный ребенок?", "reivoice1", 25),
            new GameItem("Отпусти и забудь", "reivoice2", 25),
            new GameItem("Тост", "reipose1", 75),
            new GameItem(" ", "reipose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Симметра",
            new GameItem("Совершенство", "symvoice1", 25),
            new GameItem("Кто-то ждал чуда?", "symvoice2", 25),
            new GameItem(" ", "sympose1", 0),
            new GameItem(" ", "sympose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Солдат76",
            new GameItem("Как снегири", "solvoice1", 25),
            new GameItem("С рождеством", "solvoice2", 25),
            new GameItem("Тост", "solpose1", 75),
            new GameItem(" ", "solpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Сомбра",
            new GameItem("Я знаю кто плохо себя вел", "somvoice1", 25),
            new GameItem("Я тоже могу хорошо себя вести", "somvoice2", 25),
            new GameItem(" ", "sompose1", 0),
            new GameItem(" ", "sompose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Торбьорн",
            new GameItem("Работаю только на заказ", "torvoice1", 25),
            new GameItem("Вершина мастерства", "torvoice2", 25),
            new GameItem("Тост", "torpose1", 75),
            new GameItem(" ", "torpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Трейсер",
            new GameItem("Дело в шляпе", "travoice1", 25),
            new GameItem("Хо-хо-хо!", "travoice2", 25),
            new GameItem(" ", "trapose1", 0),
            new GameItem(" ", "trapose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Турбосвин",
            new GameItem("Хо-хо-хо", "roavoice1", 25),
            new GameItem("Я припас для тебя подарочек", "roavoice2", 25),
            new GameItem("Тост", "roapose1", 75),
            new GameItem(" ", "roapose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Уинстон",
            new GameItem("У меня подарок для тебя", "winvoice1", 25),
            new GameItem("Переходим в режим вечеринки", "winvoice2", 25),
            new GameItem(" ", "winpose1", 0),
            new GameItem(" ", "winpose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Фара",
            new GameItem("Ожидаются осадки", "phavoice1", 25),
            new GameItem("Вольно", "phavoice2", 25),
            new GameItem("Тост", "phapose1", 75),
            new GameItem(" ", "phapose2", 0)
        ));

            this.completeInfo.allHeroesPoseVoice.push(new Hero("Хаммонд",
            new GameItem(" ", "hamvoice1", 0),
            new GameItem(" ", "hamvoice2", 0),
            new GameItem(" ", "hampose1", 0),
            new GameItem(" ", "hampose2", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Ханзо",
            new GameItem("Подарок для тебя", "hanvoice1", 25),
            new GameItem("Холоден как лед", "hanvoice2", 25),
            new GameItem(" ", "hanpose1", 0),
            new GameItem(" ", "hanpose2", 0)
        ));
        
        this.completeInfo.allHeroesPoseVoice.push(new Hero("Эш",
            new GameItem(" ", "ashvoice1", 0),
            new GameItem(" ", "ashvoice2", 0),
            new GameItem(" ", "ashpose1", 0),
            new GameItem(" ", "ashpose2", 0)
        ));

        this.saveInfo();
    }

    initHeroes2() {
        this.completeInfo.allHeroesSprayPotg.push(new Hero("Ана",
            new GameItem("Игрушка", "anaspray1", 25),
            new GameItem("Тепло и уют", "anaspray2", 25),
            new GameItem(" ", "anaemot1", 0),
            new GameItem(" ", "anapotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Бастион",
            new GameItem("Игрушка", "basspray1", 25),
            new GameItem("Празднуем", "basspray2", 25),
            new GameItem(" ", "basemot1", 0),
            new GameItem(" ", "baspotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Бригитта",
            new GameItem(" ", "brispray1", 0),
            new GameItem(" ", "brispray2", 0),
             new GameItem(" ", "briemot1", 0),
             new GameItem(" ", "bripotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Вдова",
            new GameItem("Игрушка", "widspray1", 25),
            new GameItem("На лыжах", "widspray2", 25),
            new GameItem(" ", "widemot1", 0),
            new GameItem("Под омелой", "widpotg1", 250)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Генджи",
            new GameItem("Игрушка", "genspray1", 25),
            new GameItem("Кадоматсу", "genspray2", 25),
            new GameItem(" ", "genemot1", 0),
            new GameItem(" ", "genpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Дзенъятта",
            new GameItem("Игрушка", "zenspray1", 25),
            new GameItem("Сферы", "zenspray2", 25),
            new GameItem("Снежинка", "zenemot1", 250),
            new GameItem(" ", "zenpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Дива",
            new GameItem("Игрушка", "divaspray1", 25),
            new GameItem("Печенька", "divaspray2", 25),
            new GameItem(" ", "divaemot1", 0),
            new GameItem(" ", "divpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Думфист",
            new GameItem("Игрушка", "doospray1", 25),
            new GameItem("Cнежок", "doospray2", 25),
            new GameItem(" ", "dooemot1", 0),
            new GameItem(" ", "doopotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Жнец",
            new GameItem("Игрушка", "reaspray1", 25),
            new GameItem("Носок", "reaspray2", 25),
            new GameItem(" ", "reaemot1", 0),
            new GameItem(" ", "reapotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Заря",
            new GameItem("Игрушка", "zarspray1", 25),
            new GameItem("Матрешка", "zarspray2", 25),
            new GameItem("Что же там", "zaremot1", 0),// priceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            new GameItem(" ", "zarpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Крысавчик",
            new GameItem("Игрушка", "junspray1", 25),
            new GameItem("Типа зима", "junspray2", 25),
            new GameItem(" ", "junemot1", 0),
            new GameItem(" ", "junpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Лусио",
            new GameItem("Игрушка", "lucspray1", 25),
            new GameItem("Хоккей", "lucspray2", 25),
            new GameItem(" ", "lucemot1", 0),
            new GameItem(" ", "lucpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("МакКри",
            new GameItem("Игрушка", "mccspray1", 25),
            new GameItem("Свитер", "mccspray2", 25),
            new GameItem("Фокус", "mccemot1", 250),
            new GameItem(" ", "mccpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Мерси",
            new GameItem("Игрушка", "merspray1", 25),
            new GameItem("Ангел", "merspray2", 25),
            new GameItem(" ", "meremot1", 0),
            new GameItem(" ", "merpotg1", 0)
        ));

       this.completeInfo.allHeroesSprayPotg.push(new Hero("Мойра",
           new GameItem("Игрушка", "moispray1", 75),
           new GameItem("Дымоход", "moispray2", 75),
           new GameItem(" ", "moiemot1", 0),
           new GameItem(" ", "moipotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Мэй",
            new GameItem("Игрушка", "meispray1", 25),
            new GameItem("Скульптура", "meispray2", 25),
            new GameItem("Снеговик", "meiemot1", 250),
            new GameItem(" ", "meipotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Ориса",
            new GameItem("Игрушка", "orispray1", 25),
            new GameItem("Звезда", "orispray2", 25),
            new GameItem("Щенок", "oriemot1", 0),//priceeeeeeeeeeeeeeeeeee
            new GameItem(" ", "oripotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Райнхардт",
            new GameItem("Игрушка", "reispray1", 25),
            new GameItem("Рыбалка", "reispray2", 25),
            new GameItem(" ", "reiemot1", 0),
            new GameItem("Получай снежком", "reipotg1", 250)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Симметра",
            new GameItem("Игрушка", "symspray1", 25),
            new GameItem("Снежинка", "symspray2", 25),
            new GameItem(" ", "symemot1", 0),
            new GameItem("Снежинки", "sympotg1", 250)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Солдат76",
            new GameItem("Игрушка", "solspray1", 25),
            new GameItem("Солдатик", "solspray2", 25),
            new GameItem(" ", "solemot1", 0),
            new GameItem(" ", "solpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Сомбра",
            new GameItem("Игрушка", "somspray1", 25),
            new GameItem("Марионетка", "somspray2", 25),
            new GameItem(" ", "somemot1", 0),
            new GameItem(" ", "sompotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Торбьорн",
            new GameItem("Игрушка", "torspray1", 25),
            new GameItem("Мастерим", "torspray2", 25),
            new GameItem(" ", "toremot1", 0),
            new GameItem(" ", "torpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Трейсер",
            new GameItem("Игрушка", "traspray1", 25),
            new GameItem("На сноуборде", "traspray2", 25),
            new GameItem(" ", "traemot1", 0),
            new GameItem(" ", "trapotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Турбосвин",
            new GameItem("Игрушка", "roaspray1", 25),
            new GameItem("Ага, зима", "roaspray2", 25),
            new GameItem(" ", "roaemot1", 0),
            new GameItem(" ", "roapotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Уинстон",
            new GameItem("Игрушка", "winspray1", 25),
            new GameItem("Подарки", "winspray2", 25),
            new GameItem(" ", "winemot1", 0),
            new GameItem(" ", "winpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Фара",
            new GameItem("Игрушка", "phaspray1", 25),
            new GameItem("Подледная рыбалка", "phaspray2", 25),
            new GameItem(" ", "phaemot1", 0),
            new GameItem(" ", "phapotg1", 0)
        ));

            this.completeInfo.allHeroesSprayPotg.push(new Hero("Хаммонд",
            new GameItem(" ", "hamspray1", 0),
            new GameItem(" ", "hamspray2", 0),
            new GameItem(" ", "hamemot1", 0),
            new GameItem(" ", "hampotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Ханзо",
            new GameItem("Игрушка", "hanspray1", 25),
            new GameItem("Кадоматсу", "hanspray2", 25),
            new GameItem(" ", "hanemot1", 0),
            new GameItem(" ", "hanpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Эш",
            new GameItem(" ", "ashspray1", 0),
            new GameItem(" ", "ashspray2", 0),
            new GameItem(" ", "ashemot1", 0),
            new GameItem(" ", "ashpotg1", 0)
        ));

        this.saveInfo();
    }

    initIcons() {
        this.completeInfo.allIcons.push(
            new GameItem("2016", "wint16icon", 0),
            new GameItem("2017", "wint17icon", 0),
            new GameItem("2018", "wint18icon", 0),//proverit
            new GameItem("Зимняя сказка 16", "wintr16icon", 0),//proverit
            new GameItem("Зимняя сказка 17", "wintr17icon", 0),//proverit
            
            new GameItem("Подарок", "podaicon", 0),            
            new GameItem("Снежный шар", "sharicon", 0),
            new GameItem("Дрейдл", "dradicon", 0),
            new GameItem("Венок", "venoicon", 0),
            new GameItem("Игристое", "igriicon", 0),
            new GameItem("Конфетная палочка", "paloicon", 0),            
            new GameItem("Елочная игрушка", "igruicon", 0),
            new GameItem("Снеговик", "sngvicon", 0),            
            new GameItem("Носок", "nosoicon", 0),
            new GameItem("Остролист", "ostricon", 0),
            new GameItem("Елочка", "elkaicon", 0),
            new GameItem("Пряничный домик", "domiicon", 0),
            new GameItem("Конфетка", "konficon", 0),
            new GameItem("Какао", "kakaicon", 0),
            new GameItem("Моти", "motiicon", 0),
            new GameItem("Колокольчики", "koloicon", 0),
            new GameItem("Празднуем", "prazicon", 0),
            
            new GameItem("Пачи-пряник", "papricon", 0),
            new GameItem("Пачи-олень", "paolicon", 0),            
            new GameItem("Йетимари", "yemaicon", 0),
            new GameItem("Сантапачи", "sapaicon", 0),

            new GameItem("Йети", "yetiicon", 0),
            new GameItem("Эльф-помошник", "elfficon", 0),
            new GameItem("Щелкунчик", "shelicon", 0),
            new GameItem("СантаБьорн", "bjoricon", 0),
            new GameItem("Пляжник", "plyaicon", 0),
            new GameItem("Альпинист", "alpiicon", 0),
            new GameItem("Лавина", "laviicon", 0),
            new GameItem("Турбоморж", "morjicon", 0),
            new GameItem("Полярная сова", "sovaicon", 0),
            new GameItem("Ледяная королева", "koroicon", 0),
            new GameItem("Воин на прогулке", "voinicon", 0)
        );

        this.saveInfo();
    }

    initSprays() {
        this.completeInfo.allSprays.push(
            new GameItem("Зимняя сказка16", "skaz16spray", 25),
            new GameItem("Зимняя сказка17", "skaz17spray", 25),//proverit est li eto
            new GameItem("Снегомэй", "smeispray", 25),
            new GameItem("Снегосвин", "sroaspray", 25),
            new GameItem("Снегокри", "smccspray", 25),
            new GameItem("Снегожнец", "sreaspray", 25),
            new GameItem("Охотница йети", "hntrspray", 25),
            new GameItem("Йети", "yetispray", 25),




            new GameItem("...не умирают", "nodespray", 25),
            new GameItem("Летучие мыши", "letuspray", 0),
            new GameItem("Конфетный снежок", "konfspray", 0),
            new GameItem("Зомники", "zom3spray", 0),
            new GameItem("Зомник", "zom2spray", 0),
            new GameItem("Зомбардир", "zom1spray", 0),
            new GameItem("Варево", "varespray", 0),
            new GameItem("Огненная тыква", "ognespray", 0),
//проверить цены - некоторые бесплатные
            new GameItem("Мои творения", "creaspray", 0),
            new GameItem("Чудовище", "chudspray", 0),
            new GameItem("Всадник", "vsadspray", 0),
            new GameItem("Ведьмочка", "vedmspray", 0)

            
        );
        this.saveInfo();
    }

    initPoses() 
    { 
    }

    initEmotes() 
    {
    }

initPotg()
{   
}



}
