import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';
import { Hero6 } from './Hero6';

@Injectable()
export class HalloweenService {

    completeInfo = new CompleteInfo();

    constructor() {
        let getData = localStorage.getItem("halloween18");
        if (getData == null) {
            this.initEveryting();
            this.saveInfo();
            getData = localStorage.getItem("halloween18");
        }
        this.completeInfo = JSON.parse(getData);
    }

    getInfo() {
        return this.completeInfo;
    }


    saveInfo() {
        let savedSkins = JSON.stringify(this.completeInfo);
        localStorage.setItem("halloween18", savedSkins);
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

        this.completeInfo.goldSkins2018.push(new Skin("lskinsol18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinpha18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinham18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinsom18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskindoo18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinmoi18", 3000));

        this.completeInfo.purpleSkins2018.push(new Skin("skinmcc18", 750));
        this.completeInfo.purpleSkins2018.push(new Skin("skinwid18", 750));
        this.completeInfo.purpleSkins2018.push(new Skin("skinmei18", 750));

        this.completeInfo.goldSkins2017.push(new Skin("lskinmei17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinana17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinzar17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinrea17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinsym17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinzen17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmcc17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskintor17", 1000));

        this.completeInfo.goldSkins2016.push(new Skin("lskinrea16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinroa16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinjun16", 1000));
        this.completeInfo.goldSkins2016.push(new Skin("lskinmer16", 1000));

        this.completeInfo.purpleSkins2016.push(new Skin("skinana16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinbas16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinhan16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinrei16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinsol16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinpha16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinsym16", 250));
        this.completeInfo.purpleSkins2016.push(new Skin("skinzen16", 250));

        this.saveInfo();
    }


    initHeroes() {
        this.completeInfo.allHeroes.push(new Hero6("Ана",
            new GameItem("Бу! Что страшно?", "anavoice1", 25),//добавить это себе в реплики
            new GameItem("Не пугайся", "anavoice2", 25),
            new GameItem("R.I.P", "anapose1", 75),
            new GameItem(" ", "anapose2", 0),
            new GameItem("Конфета или жизнь", "anaspray1", 25),
            new GameItem(" ", "anaspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Бастион",
            new GameItem("В-в-у-у-у?", "basvoice1", 25),
            new GameItem("О-о-о", "basvoice2", 25),
            new GameItem("R.I.P", "baspose1", 75),
            new GameItem(" ", "baspose2", 0),
            new GameItem("Конфета или жизнь", "basspray1", 25),
            new GameItem(" ", "basspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Бригитта",
            new GameItem("Совсем не страшно?", "brivoice1", 75),
            new GameItem("Я должна испугаться?", "brivoice2", 75),
             new GameItem(" ", "bripose1", 0),
             new GameItem("Тыква [225]", "bripose2", 255),
            new GameItem("Конфета или жизнь", "brispray1", 75),
            new GameItem(" ", "brispray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Вдова",
            new GameItem("Праздник окончен", "widvoice1", 25),
            new GameItem("Паук", "widvoice2", 25),
            new GameItem("R.I.P", "widpose1", 75),
            new GameItem(" ", "widpose2", 0),
            new GameItem("Конфета или жизнь", "widspray1", 25),
            new GameItem(" ", "widspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Генджи",
            new GameItem("Киберниндзя", "genvoice1", 25),
            new GameItem("Счастливого Хеллоуина", "genvoice2", 25),
            new GameItem("R.I.P", "genpose1", 75),
            new GameItem("Не угостил (реплика 75)", "genpose2", 75),
            new GameItem("Конфета или жизнь", "genspray1", 25),
            new GameItem(" ", "genspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Дзенъятта",
            new GameItem("Конфета или жизнь", "zenvoice1", 25),
            new GameItem("Устрашающе", "zenvoice2", 25),
            new GameItem("R.I.P", "zenpose1", 75),
            new GameItem(" ", "zenpose2", 0),
            new GameItem("Конфета или жизнь", "zenspray1", 25),
            new GameItem(" ", "zenspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Дива",
            new GameItem("Счастливого Хеллоуина", "divavoice1", 25),
            new GameItem("Не страшно!", "divavoice2", 25),
            new GameItem("R.I.P", "divapose1", 75),
            new GameItem("Селфи с тыквой [225]", "divpose2", 255),
            new GameItem("Конфета или жизнь", "divaspray1", 25),
            new GameItem(" ", "divaspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Думфист",
            new GameItem(" ", "doovoice1", 0),
            new GameItem(" ", "doovoice2", 0),
            new GameItem(" ", "doopose1", 0),
            new GameItem("Тыква [225]", "doopose2", 225),
            new GameItem("Болотное чудовище", "doospray1", 75),
            new GameItem(" ", "doospray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Жнец",
            new GameItem("Люблю тишину", "reavoice1", 25),
            new GameItem("Все такое мрачное", "reavoice2", 25),
            new GameItem("R.I.P", "reapose1", 75),
            new GameItem("Серьезен (реплика 75)", "reapose2", 75),
            new GameItem("Конфета или жизнь", "reaspray1", 25),
            new GameItem(" ", "reaspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Заря",
            new GameItem("Помним павших", "zarvoice1", 25),
            new GameItem("Не боись", "zarvoice2", 25),
            new GameItem("R.I.P", "zarpose1", 75),
            new GameItem(" ", "zarpose2", 0),
            new GameItem("Конфета или жизнь", "zarspray1", 25),
            new GameItem(" ", "zarspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Крысавчик",
            new GameItem("Счастливого Хеллоуина", "junvoice1", 25),
            new GameItem("Я жив!", "junvoice2", 25),
            new GameItem("R.I.P", "junpose1", 75),
            new GameItem("Одно лицо", "junpose2", 75),
            new GameItem("Конфета или жизнь", "junspray1", 25),
            new GameItem(" ", "junspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Лусио",
            new GameItem("Убойно!", "lucvoice1", 25),
            new GameItem("Как круто", "lucvoice2", 25),
            new GameItem("R.I.P", "lucpose1", 75),
            new GameItem("Прием тыквы", "lucpose2", 75),
            new GameItem("Конфета или жизнь", "lucspray1", 25),
            new GameItem("Конфета (реплика)", "lucspray2", 75)
        ));//реплика лусио Конфета Или Жизнь не влезла

        this.completeInfo.allHeroes.push(new Hero6("МакКри",
            new GameItem("Через мой труп", "mccvoice1", 25),
            new GameItem("Понял, тыковка", "mccvoice2", 25),
            new GameItem("R.I.P", "mccpose1", 75),
            new GameItem("Конфета (реплика 75)", "mccpose2", 75),
            new GameItem("Конфета или жизнь", "mccspray1", 25),
            new GameItem(" ", "mccspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Мерси",
            new GameItem("Суеверие", "mervoice1", 25),
            new GameItem("Ты пугаешь", "mervoice2", 25),
            new GameItem("R.I.P", "merpose1", 75),
            new GameItem("Тыква [225]", "merpose2", 225),
            new GameItem("Конфета или жизнь", "merspray1", 25),
            new GameItem(" ", "merspray2", 0)
        ));

       this.completeInfo.allHeroes.push(new Hero6("Мойра",
           new GameItem("Веселого Самайана", "moivoice1", 75),
           new GameItem("Положительные стороны", "moivoice2", 75),
           new GameItem(" ", "moipose1", 0),
           new GameItem("Тыква [225]", "moipose2", 225),
           new GameItem("Конфета или жизнь", "moispray1", 75),
           new GameItem("Баньши", "moispray2", 75)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Мэй",
            new GameItem("Страшно!", "meivoice1", 25),
            new GameItem("Вы слышали?", "meivoice2", 25),
            new GameItem("R.I.P", "meipose1", 75),
            new GameItem(" ", "meipose2", 0),
            new GameItem("Конфета или жизнь", "meispray1", 25),
            new GameItem(" ", "meispray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Ориса",
            new GameItem("Будьте осторожны", "orivoice1", 25),
            new GameItem("Пульс", "orivoice2", 25),
            new GameItem("Тыквоголов", "oripose1", 75),
            new GameItem(" ", "oripose2", 0),
            new GameItem("Конфета или жизнь", "orispray1", 25),
            new GameItem(" ", "orispray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Райнхардт",
            new GameItem("Крушить тыквы", "reivoice1", 25),
            new GameItem("Что здесь?", "reivoice2", 25),
            new GameItem("R.I.P", "reipose1", 75),
            new GameItem(" ", "reipose2", 0),
            new GameItem("Конфета или жизнь", "reispray1", 25),
            new GameItem(" ", "reispray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Симметра",
            new GameItem("Пугающая мысль", "symvoice1", 25),
            new GameItem("Конфета - ложь", "symvoice2", 25),
            new GameItem("R.I.P", "sympose1", 75),
            new GameItem(" ", "sympose2", 0),
            new GameItem("Конфета или жизнь", "symspray1", 25),
            new GameItem(" ", "symspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Солдат76",
            new GameItem("Тук-тук", "solvoice1", 25),
            new GameItem("Конфета или жизнь!", "solvoice2", 25),
            new GameItem("R.I.P", "solpose1", 75),
            new GameItem(" ", "solpose2", 0),
            new GameItem("Конфета или жизнь", "solspray1", 25),
            new GameItem("Слэшер [75]", "solspray2", 75)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Сомбра",
            new GameItem("Должно быть страшно?", "somvoice1", 25),
            new GameItem("Ой, как мило", "somvoice2", 25),
            new GameItem("Тыквомант", "sompose1", 75),
            new GameItem(" ", "sompose2", 0),
            new GameItem("Конфета или жизнь", "somspray1", 25),
            new GameItem("Слуги [75]", "somspray2", 75)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Торбьорн",
            new GameItem("Что нам стоит", "torvoice1", 25),
            new GameItem("Ох, быть беде", "torvoice2", 25),
            new GameItem("R.I.P", "torpose1", 75),
            new GameItem(" ", "torpose2", 0),
            new GameItem("Конфета или жизнь", "torspray1", 25),
            new GameItem(" ", "torspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Трейсер",
            new GameItem("Страшно", "travoice1", 25),
            new GameItem("Бу!", "travoice2", 25),
            new GameItem("R.I.P", "trapose1", 75),
            new GameItem("Тыковка", "trapose2", 75),
            new GameItem("Конфета или жизнь", "traspray1", 25),
            new GameItem("Конфета(реплика)", "traspray2", 75)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Турбосвин",
            new GameItem("Конфетку хочешь?", "roavoice1", 25),
            new GameItem("Бу!", "roavoice2", 25),
            new GameItem("R.I.P", "roapose1", 75),
            new GameItem(" ", "roapose2", 0),
            new GameItem("Конфета или жизнь", "roaspray1", 25),
            new GameItem(" ", "roaspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Уинстон",
            new GameItem("Это не костюм", "winvoice1", 25),
            new GameItem("Ух, страшно", "winvoice2", 25),
            new GameItem("R.I.P", "winpose1", 75),
            new GameItem("Бу! (реплика)", "winpose2", 75),
            new GameItem("Конфета или жизнь", "winspray1", 25),
            new GameItem(" ", "winspray2", 0)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Фара",
            new GameItem("Живым или мертвым", "phavoice1", 25),
            new GameItem("Трясусь", "phavoice2", 25),
            new GameItem("R.I.P", "phapose1", 75),
            new GameItem("Боишься?(реплика)", "phapose2", 75),
            new GameItem("Конфета или жизнь", "phaspray1", 25),
            new GameItem("Призрак [75]", "phaspray2", 75)
        ));

            this.completeInfo.allHeroes.push(new Hero6("Хаммонд",
            new GameItem("Конфета или жизнь", "hamvoice1", 75),
            new GameItem("Сердцебиение", "hamvoice2", 75),
            new GameItem("Хрум [225]", "hampose1", 225),
            new GameItem(" ", "hampose2", 0),
            new GameItem("Конфета или жизнь", "hamspray1", 75),
            new GameItem("Страхомяк", "hamspray2", 75)
        ));

        this.completeInfo.allHeroes.push(new Hero6("Ханзо",
            new GameItem("Оmae wa mou shindeiru", "hanvoice1", 25),
            new GameItem("Обуздай страх", "hanvoice2", 25),
            new GameItem("R.I.P", "hanpose1", 75),
            new GameItem("Как в тыкву", "hanpose2", 75),
            new GameItem("Конфета или жизнь", "hanspray1", 25),
            new GameItem(" ", "hanspray2", 0)
        ));

        this.saveInfo();
    }

    initIcons() {
        this.completeInfo.allIcons.push(
            new GameItem("Ужасы на Хеллоуин 2016", "ujas16icon", 0),
            new GameItem("Ужасы на хеллоуин 2017", "ujas17icon", 0),
            new GameItem("Ужасы на хеллоуин 2018", "ujas18icon", 0),

            new GameItem("Глаз", "glazicon", 0),
            new GameItem("Волк", "volkicon", 0),
            new GameItem("Паук", "paukicon", 0),
            new GameItem("Свеча", "svecicon", 0),
            
            new GameItem("Варево", "vareicon", 0),
            new GameItem("Тыквамари", "timaicon", 0),
            new GameItem("Ведьмари", "vemaicon", 0),
            new GameItem("Скелемари", "skmaicon", 0),
            new GameItem("Духомари", "duhoicon", 0),
            new GameItem("Вампачимари", "vamaicon", 0),
            new GameItem("Пачимумия", "pamuicon", 0),
            new GameItem("Пачидовище", "padoicon", 0),
            new GameItem("Суеверие", "suevicon", 0),
            new GameItem("Калавера", "kalaicon", 0),
            new GameItem("Надгробие", "nadgicon", 0),
            new GameItem("...не умирают", "notdicon", 0),
            new GameItem("Ведьмина шляпа", "veshicon", 0),

            new GameItem("Доктор", "docticon", 0),
            new GameItem("Чудовище", "chudicon", 0),
            new GameItem("Чаровница", "charicon", 0),
            new GameItem("Ведьмочка", "vedmicon", 0),
            new GameItem("Всадник", "vsadicon", 0),
            new GameItem("Викинг", "vikiicon", 0),
            new GameItem("Корсар", "korsicon", 0),            
            new GameItem("Цзянши", "tsiaicon", 0),
            new GameItem("Дракула", "drakicon", 0),
            new GameItem("Сектант", "sekticon", 0),
            new GameItem("Колдунья", "kldnicon", 0),
            new GameItem("Хельсинг", "hlsnicon", 0),
            new GameItem("Невеста", "neveicon", 0),
            new GameItem("Болотное чудище", "boloicon", 0),
            new GameItem("Слэшер", "slasicon", 0),
            new GameItem("Баньши", "bansicon", 0),
            new GameItem("Призрак", "prizzicon", 0),
            new GameItem("Пугало", "pugaicon", 0)
        );

        this.saveInfo();
    }

    initSprays() {
        this.completeInfo.allSprays.push(
            new GameItem("Ужасы на Хеллоуин", "ujas16spray", 25),
            new GameItem("Буп", "boopspray", 25),
            new GameItem("Жатва", "jatvspray", 25),
            new GameItem("Клыки", "klikspray", 25),
            new GameItem("Тыквы", "tikvspray", 25),
            new GameItem("Только на Хеллоуин", "tolkspray", 25),
            new GameItem("Месть Крысенштейна", "mestspray", 25),
            new GameItem("Мармеладная свинка", "marmspray", 25),
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

    initPoses() { 
        this.completeInfo.allPoses.push(
            new GameItem("Мерси - Тыква", "merpose1", 225),
            new GameItem("Бригитта - Тыква", "brigpose1", 225),
            new GameItem("Мойра - Тыква", "moipose1", 225),
            new GameItem("Думфист - Тыква", "doopose1", 225),
            new GameItem("Дива - Селфи с тыквой", "divpose1", 225),
            new GameItem("Хаммонд - Хрум", "hampose1", 225)
        );
        this.saveInfo(); 
    }

    initEmotes() {
        this.completeInfo.allEmotes.push(
            new GameItem("Мэй - Прыг-прыг", "meiemote1", 250),
            new GameItem("Торбьорн - А ну лови", "toremote1", 250),
            new GameItem("Ана - Держиконфету", "anamote1", 250),
            new GameItem("Уинстон - Театр теней", "winemote1", 250),
            new GameItem("Райнхардт - По тыкве", "reiemote1", 250),

            new GameItem("Бастион - Зомби", "basemote1", 750)
        );
        this.saveInfo();
    }

initPotg()
{
    this.completeInfo.allMoments.push(
        new GameItem("Турбосвин - Поступь", "roamoment", 250),
        new GameItem("Мэй - Ужастик", "meimoment", 250),
        new GameItem("Жнец - Привет с того света", "reamoment", 250),
        new GameItem("Гендзи -  Резьба по тыкве", "genmoment", 250),
        new GameItem("Бригитта -  Удар щитом", "brimoment", 750),        
        new GameItem("Уинстон - Тыква", "winmoment1", 750)
    );
    this.saveInfo();
}



}
