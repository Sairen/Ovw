import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfoNew } from './completeinfoNew';
import { Hero } from './hero';
import { GameItem } from './gameitem';
import { Hero6 } from './Hero6';

@Injectable()
export class ChinaService {

    completeInfo = new CompleteInfoNew();

    constructor() {
        let getData = localStorage.getItem("china19");
        if (getData == null) {
            this.initEveryting();
            this.saveInfo();
            getData = localStorage.getItem("china19");
        }
        this.completeInfo = JSON.parse(getData);
    }

    getInfo() {
        return this.completeInfo;
    }


    saveInfo() {
        let savedSkins = JSON.stringify(this.completeInfo);
        localStorage.setItem("china19", savedSkins);
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
        this.completeInfo.goldSkins2019.push(new Skin("lskinzen19", 3000));
        this.completeInfo.goldSkins2019.push(new Skin("lskinhan19", 3000));
        this.completeInfo.goldSkins2019.push(new Skin("lskinrei19", 3000));
        this.completeInfo.goldSkins2019.push(new Skin("lskintor19", 3000));
        this.completeInfo.goldSkins2019.push(new Skin("lskintra19", 3000));
        this.completeInfo.goldSkins2019.push(new Skin("lskinrea19", 3000));

        this.completeInfo.purpleSkins2019.push(new Skin("skinori19", 750));
        this.completeInfo.purpleSkins2019.push(new Skin("skinbri19", 750));


        this.completeInfo.goldSkins2018.push(new Skin("lskinmer18", 1000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinmcc18", 1000));
        this.completeInfo.goldSkins2018.push(new Skin("lskingen18", 1000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinwid18", 1000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinzar18", 1000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinpha18", 1000));


        this.completeInfo.goldSkins2017.push(new Skin("lskinrei17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinroa17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinzen17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinwin17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskindiv17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmei117", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmei217", 1000));


        this.completeInfo.purpleSkins2017.push(new Skin("skintra17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinmer17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinsym17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinjun17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinana17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinbas17", 250));

        this.saveInfo();
    }


    initHeroes1() {
        this.completeInfo.allHeroesPoseVoice.push(new Hero("Ана",
            new GameItem("Как снег на ветру", "anavoice1", 25),
            new GameItem("Я сама творю свою удачу", "anavoice2", 25),
            new GameItem("Сложенные руки", "anapose1", 75),
            new GameItem(" ", "anavoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Бастион",
            new GameItem("Вуп-дуу-вуу", "basvoice1", 25),
            new GameItem("Ду-у ви-и ду-у ви-и ву-у", "basvoice2", 25),
            new GameItem("Феерверк", "baspose1", 75),
            new GameItem(" ", "basvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Бригитта",
            new GameItem("Что блестит [75]", "brivoice1", 0),
            new GameItem("Кто готов к вечеринке? [75]", "brivoice2", 0),
            new GameItem(" ", "bripose1", 0),
            new GameItem(" ", "brivoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Вдова",
            new GameItem("О, благодарю", "widvoice1", 25),
            new GameItem("Никакой породы", "widvoice2", 25),
            new GameItem("Веера", "widpose1", 75),
            new GameItem(" ", "widvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Генджи",
            new GameItem("Познать себя", "genvoice1", 25),
            new GameItem("Собака лает - караван идет", "genvoice2", 25),
            new GameItem(" ", "genpose1", 0),
            new GameItem(" ", "genvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Дзенъятта",
            new GameItem("Каждый хвалит свой насест", "zenvoice1", 25),
            new GameItem("Удача улыбается мне", "zenvoice2", 25),
            new GameItem(" ", "zenpose1", 0),
            new GameItem(" ", "zenvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Дива",
            new GameItem("Радости жизни", "divavoice1", 25),
            new GameItem("С новым годом!", "divavoice2", 25),
            new GameItem("Предсказания", "divapose1", 75),
            new GameItem(" ", "divvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Думфист",
            new GameItem("Подачки ждешь?", "doovoice1", 25),
            new GameItem("Удача любит смелых", "doovoice2", 25),
            new GameItem("Фейерверки [75]", "doopose1", 75),
            new GameItem(" ", "doovoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Жнец",
            new GameItem("Вот это феерверк", "reavoice1", 25),
            new GameItem("Я везучь", "reavoice2", 25),
            new GameItem("Взрывной резерв [75]", "reapose1", 75),
            new GameItem(" ", "reavoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Заря",
            new GameItem("Прокачайся", "zarvoice1", 25),
            new GameItem("Вот где собака зарыта", "zarvoice2", 25),
            new GameItem("Фейезверчище", "zarpose1", 75),
            new GameItem(" ", "zarvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Крысавчик",
            new GameItem("Си фа цай!", "junvoice1", 25),
            new GameItem("Хоть волком вой", "junvoice2", 25),
            new GameItem("Опасно", "junpose1", 75),
            new GameItem("С Новым Годом [75]", "junvoice3", 75)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Лусио",
            new GameItem("Со мной все становится лучше!", "lucvoice1", 25),
            new GameItem("Это я люблю!", "lucvoice2", 25),
            new GameItem("Барабан [75]", "lucpose1", 75),
            new GameItem(" ", "lucvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("МакКри",
            new GameItem("Это надо отметить", "mccvoice1", 25),
            new GameItem("Как пес бездомный", "mccvoice2", 25),
            new GameItem("Поджигаю!", "mccpose1", 75),
            new GameItem("Устроим фейерверк [75]", "mccvoice3", 75)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Мерси",
            new GameItem("Впечатляет", "mervoice1", 25),
            new GameItem("Как же тебе повезло!", "mervoice2", 25),
            new GameItem(" ", "merpose1", 0),
            new GameItem(" ", "mervoice3", 0)
        ));

       this.completeInfo.allHeroesPoseVoice.push(new Hero("Мойра",
           new GameItem("Ваше здоровье!", "moivoice1", 75),
           new GameItem("Гоняться за хвостом", "moivoice2", 75),
           new GameItem(" ", "moipose1", 0),
           new GameItem(" ", "moivoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Мэй",
            new GameItem("Счастья и процветания!", "meivoice1", 25),
            new GameItem("Где мой красный конверт?", "meivoice2", 25),
            new GameItem("Удачка!", "meipose1", 75),
            new GameItem(" ", "meivoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Ориса",
            new GameItem("Без Луны звезды светят ярче", "orivoice1", 25),
            new GameItem("Кто готов к вечеринке?", "orivoice2", 25),
            new GameItem(" ", "oripose1", 0),
            new GameItem(" ", "orivoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Райнхардт",
            new GameItem("Ты что ж это цыпленок?", "reivoice1", 25),
            new GameItem("Судьба благоволит бесстрашным", "reivoice2", 25),
            new GameItem(" ", "reipose1", 0),
            new GameItem(" ", "reivoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Симметра",
            new GameItem("Какая удача", "symvoice1", 25),
            new GameItem("Повод отметить", "symvoice2", 25),
            new GameItem("Веер", "sympose1", 75),
            new GameItem(" ", "symvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Солдат76",
            new GameItem("Петухи запели в полночь", "solvoice1", 25),
            new GameItem("Уважайте старших", "solvoice2", 25),
            new GameItem(" ", "solpose1", 0),
            new GameItem(" ", "solvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Сомбра",
            new GameItem("Вас так легко удивить", "somvoice1", 25),
            new GameItem("Собака бывает кусачей", "somvoice2", 25),
            new GameItem("Бенгальские огни", "sompose1", 75),
            new GameItem(" ", "somvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Торбьорн",
            new GameItem("Что, горячо?", "torvoice1", 25),
            new GameItem("А ну все сюда!", "torvoice2", 25),
            new GameItem(" ", "torpose1", 0),
            new GameItem(" ", "torvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Трейсер",
            new GameItem("Все готовы устроить салют?", "travoice1", 25),
            new GameItem("На луну и обратно", "travoice2", 25),
            new GameItem("Фейерверки!", "trapose1", 75),
            new GameItem(" ", "travoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Турбосвин",
            new GameItem("Ты кура?", "roavoice1", 25),
            new GameItem("Ну и пес с ним", "roavoice2", 25),
            new GameItem("Мое! Не отдам!", "roapose1", 75),
            new GameItem(" ", "roavoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Уинстон",
            new GameItem("Вот это круто!", "winvoice1", 25),
            new GameItem("Луна, мой родной дом", "winvoice2", 25),
            new GameItem("Бенгальские огни", "winpose1", 75),
            new GameItem("На луну и обратно [75]", "winvoice3", 75)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Фара",
            new GameItem("Я обеспечу мир", "phavoice1", 25),
            new GameItem("Устроить салют?", "phavoice2", 25),
            new GameItem(" ", "phapose1", 0),
            new GameItem(" ", "phavoice3", 0)
        ));

            this.completeInfo.allHeroesPoseVoice.push(new Hero("Хаммонд",
            new GameItem("Предсказание [75]", "hamvoice1", 75),
            new GameItem("Режим праздника [75]", "hamvoice2", 75),
            new GameItem("Арсенал [75]", "hampose1", 75),
            new GameItem(" ", "hamvoice3", 0)
        ));

        this.completeInfo.allHeroesPoseVoice.push(new Hero("Ханзо",
            new GameItem("День полной луны", "hanvoice1", 25),
            new GameItem("Наглый щенок!", "hanvoice2", 25),
            new GameItem("Фейерверк [75]", "hanpose1", 75),
            new GameItem("Легкомыслие [75]", "hanvoice3", 75)
        ));
        
        this.completeInfo.allHeroesPoseVoice.push(new Hero("Эш",
            new GameItem("Где фейерверки? [75]", "ashvoice1", 75),
            new GameItem("Не кудахтай [75]", "ashvoice2", 75),
            new GameItem("Пали фитиль [75]", "ashpose1", 75),
            new GameItem(" ", "ashvoice3", 0)
        ));

        this.saveInfo();
    }

    initHeroes2() {
        this.completeInfo.allHeroesSprayPotg.push(new Hero("Ана",
            new GameItem("Танец", "anaspray1", 25),
            new GameItem("Танец дракона", "anaspray2", 25),
            new GameItem("Ют-нори [750]", "anaemot1", 750),
            new GameItem(" ", "anapotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Бастион",
            new GameItem("Вкусняшкобот", "basspray1", 25),
            new GameItem("Танец дракона", "basspray2", 25),
            new GameItem(" ", "basemot1", 0),
            new GameItem(" ", "baspotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Бригитта",
            new GameItem("Пир [75]", "brispray1", 75),
            new GameItem("Танец дракона [75]", "brispray2", 75),
             new GameItem(" ", "briemot1", 0),
             new GameItem(" ", "bripotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Вдова",
            new GameItem("Заколка", "widspray1", 25),
            new GameItem("Танец дракона", "widspray2", 25),
            new GameItem(" ", "widemot1", 0),
            new GameItem(" ", "widpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Генджи",
            new GameItem("Зеленый дракон", "genspray1", 25),
            new GameItem("Танец дракона", "genspray2", 25),
            new GameItem(" ", "genemot1", 0),
            new GameItem(" ", "genpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Дзенъятта",
            new GameItem("Ют Нори", "zenspray1", 25),
            new GameItem("Танец дракона", "zenspray2", 25),
            new GameItem(" ", "zenemot1", 0),
            new GameItem(" ", "zenpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Дива",
            new GameItem("Качели", "divaspray1", 25),
            new GameItem("Танец дракона", "divaspray2", 25),
            new GameItem("Поклон", "divaemot1", 250),
            new GameItem(" ", "divpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Думфист",
            new GameItem("Львиный кулак", "doospray1", 25),
            new GameItem("Танец дракона", "doospray2", 25),
            new GameItem("Сокрушу!", "dooemot1", 250),
            new GameItem(" ", "doopotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Жнец",
            new GameItem("Огненный цветок", "reaspray1", 25),
            new GameItem("Танец дракона", "reaspray2", 25),
            new GameItem(" ", "reaemot1", 0),
            new GameItem(" ", "reapotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Заря",
            new GameItem("На массе", "zarspray1", 25),
            new GameItem("Танец дракона", "zarspray2", 25),
            new GameItem(" ", "zaremot1", 0),
            new GameItem(" ", "zarpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Крысавчик",
            new GameItem("Я лечу!", "junspray1", 25),
            new GameItem("Танец дракона", "junspray2", 25),
            new GameItem("Бомбанем?", "junemot1", 250),
            new GameItem(" ", "junpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Лусио",
            new GameItem("Давай на счет", "lucspray1", 25),
            new GameItem("Танец дракона", "lucspray2", 25),
            new GameItem(" ", "lucemot1", 0),
            new GameItem("Барабаны [750]", "lucpotg1", 750)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("МакКри",
            new GameItem("Орел или решка?", "mccspray1", 25),
            new GameItem("Танец дракона", "mccspray2", 25),
            new GameItem(" ", "mccemot1", 0),
            new GameItem("Не смотрю на взрыв", "mccpotg1", 250)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Мерси",
            new GameItem("Зонтик", "merspray1", 25),
            new GameItem("Танец дракона", "merspray2", 25),
            new GameItem(" ", "meremot1", 0),
            new GameItem("Удача", "merpotg1", 250)
        ));

       this.completeInfo.allHeroesSprayPotg.push(new Hero("Мойра",
           new GameItem("Собачки", "moispray1", 75),
           new GameItem("Танец дракона", "moispray2", 75),
           new GameItem(" ", "moiemot1", 0),
           new GameItem(" ", "moipotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Мэй",
            new GameItem("Удача", "meispray1", 25),
            new GameItem("Танец дракона", "meispray2", 25),
            new GameItem("Как классно!", "meiemot1", 250),
            new GameItem(" ", "meipotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Ориса",
            new GameItem("Танец с барабаном", "orispray1", 25),
            new GameItem("Танец дракона", "orispray2", 25),
            new GameItem(" ", "oriemot1", 0),
            new GameItem(" ", "oripotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Райнхардт",
            new GameItem("Танец льва", "reispray1", 25),
            new GameItem("Танец дракона", "reispray2", 25),
            new GameItem(" ", "reiemot1", 0),
            new GameItem(" ", "reipotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Симметра",
            new GameItem("Фонарь", "symspray1", 25),
            new GameItem("Танец дракона", "symspray2", 25),
            new GameItem(" ", "symemot1", 0),
            new GameItem(" ", "sympotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Солдат76",
            new GameItem("Сложенные руки", "solspray1", 25),
            new GameItem("Танец дракона", "solspray2", 25),
            new GameItem("Барабанчик [750]", "solemot1", 750),
            new GameItem(" ", "solpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Сомбра",
            new GameItem("Гадание", "somspray1", 25),
            new GameItem("Танец дракона", "somspray2", 25),
            new GameItem(" ", "somemot1", 0),
            new GameItem(" ", "sompotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Торбьорн",
            new GameItem("Золото", "torspray1", 25),
            new GameItem("Танец дракона", "torspray2", 25),
            new GameItem(" ", "toremot1", 0),
            new GameItem(" ", "torpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Трейсер",
            new GameItem("Танец с веерами", "traspray1", 25),
            new GameItem("Танец дракона", "traspray2", 25),
            new GameItem(" ", "traemot1", 0),
            new GameItem("Танец льва", "trapotg1", 250)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Турбосвин",
            new GameItem("Баоцзы", "roaspray1", 25),
            new GameItem("Танец дракона", "roaspray2", 25),
            new GameItem("Тайный друг", "roaemot1", 250),
            new GameItem("Обжорство", "roapotg1", 250)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Уинстон",
            new GameItem("Воздушный змей", "winspray1", 25),
            new GameItem("Танец дракона", "winspray2", 25),
            new GameItem(" ", "winemot1", 0),
            new GameItem(" ", "winpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Фара",
            new GameItem("С Новым годом!", "phaspray1", 25),
            new GameItem("Танец дракона", "phaspray2", 25),
            new GameItem(" ", "phaemot1", 0),
            new GameItem(" ", "phapotg1", 0)
        ));

            this.completeInfo.allHeroesSprayPotg.push(new Hero("Хаммонд",
            new GameItem("Нямка [75]", "hamspray1", 75),
            new GameItem("Танец дракона [75]", "hamspray2", 75),
            new GameItem(" ", "hamemot1", 0),
            new GameItem(" ", "hampotg1", 0) 
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Ханзо",
            new GameItem("Синий дракон", "hanspray1", 25),
            new GameItem("Танец дракона", "hanspray2", 25),
            new GameItem(" ", "hanemot1", 0),
            new GameItem(" ", "hanpotg1", 0)
        ));

        this.completeInfo.allHeroesSprayPotg.push(new Hero("Эш",
            new GameItem("Красные конверты [75]", "ashspray1", 75),
            new GameItem("Танец дракона [75]", "ashspray2", 75),
            new GameItem(" ", "ashemot1", 0),
            new GameItem(" ", "ashpotg1", 0)
        ));

        this.saveInfo();
    }

    initIcons() {
        this.completeInfo.allIcons.push(
            new GameItem("Год петуха 2017", "year17icon", 0),
            new GameItem("Год собаки 2018", "year18icon", 0),
            new GameItem("Год свиньи 2019", "year19icon", 0),

            new GameItem("Пачи-фонарь", "fonaicon", 0),
            new GameItem("Футимари", "futiicon", 0),
            new GameItem("Бокимари", "bokiicon", 0),
            new GameItem("Персикмари", "persicon", 0),
            new GameItem("Пачидракон", "padricon", 0),
            new GameItem("Пачирепаха", "pcheicon", 0),
            new GameItem("Пачитигр", "patiicon", 0),
            new GameItem("Пачифеникс", "pafeicon", 0),
            new GameItem("Свинкомари", "svmaicon", 0),

            new GameItem("Сюань-у", "suan17icon", 0),
            new GameItem("Бай-ху", "baih17icon", 0),
            new GameItem("Чжуцюэ", "chzu17icon", 0),
            new GameItem("Цинлун", "tsin17icon", 0),

            new GameItem("Чанъэ", "chan17icon", 0),
            new GameItem("Ханбок", "hanb17icon", 0),
            new GameItem("Ша сэн", "shas17icon", 0),
            new GameItem("Судья", "sudy17icon", 0),
            new GameItem("Поросенок", "poro17icon", 0),
            new GameItem("Сюаньцзан", "syan17icon", 0),
            new GameItem("Черная илия", "cher17icon", 0),
            new GameItem("Обезьяна", "obezicon", 0),


            new GameItem("Крадущийся дракон", "kradicon", 0),
            new GameItem("Прекраснобородый", "prekicon", 0),
            new GameItem("Ханьчжун", "hnchicon", 0),
            new GameItem("Пожинающий генерал", "pojiicon", 0),
            new GameItem("Змеиное копье", "zmeiicon", 0),
            new GameItem("Благородная воровка", "voroicon", 0),
            new GameItem("Тальчхум", "talcicon", 0),

            new GameItem("Чжугэ Лян", "chlaicon", 0),
            new GameItem("Хуан Чжун", "huchicon", 0),
            new GameItem("Чжан Фэй", "chfeicon", 0),
            new GameItem("Гуань Юй", "guanicon", 0),
            new GameItem("Люй Бу", "lubuicon", 0),

            new GameItem("Дракон", "drakicon", 0),
            new GameItem("Лев", "levvicon", 0),
            new GameItem("Бацзе", "bazeicon", 0),
            new GameItem("Красный конверт", "konvicon", 0),
            new GameItem("Предсказания", "predicon", 0),
            new GameItem("Гадание", "gadaicon", 0),
            new GameItem("Соллаль", "solaicon", 0),
            new GameItem("Золото", "zoloicon", 0),
            new GameItem("Мандаринки", "mandicon", 0),
            new GameItem("Новогодний торт", "torticon", 0),
            new GameItem("Амулет удачи", "amulicon", 0),
            new GameItem("Печеная рыба", "ribaicon", 0),
            new GameItem("Фонарь", "fnrricon", 0),
            new GameItem("Хон гиль дон", "hgdnicon", 0),
            new GameItem("Монетка", "moneicon11", 0)

        );

        this.saveInfo();
    }

    initSprays() {
        this.completeInfo.allSprays.push(
            new GameItem("Год петуха", "year17spray", 25),
            new GameItem("Год собаки", "year18spray", 25),
            new GameItem("Год свиньи", "year19spray", 25),//check price !!!!!!!!!!!!!!!
            new GameItem("Амулет удачи", "amulspray", 25),
            new GameItem("Голова дракона", "drakspray", 25),
            new GameItem("Предсказания ", "predspray", 25),
            new GameItem("Красный конверт", "konvspray", 25),

            new GameItem("Захваченный флаг", "zahvspray", 0),
            new GameItem("Прерванная доставка", "prerspray", 0),
            new GameItem("Золотой лев", "zlevspray", 0),
            new GameItem("Пробужденный лев", "plevspray", 0)
            
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
