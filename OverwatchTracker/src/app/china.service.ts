import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class ChinaService {

    completeInfo = new CompleteInfo();

    constructor() {
        let getData = localStorage.getItem("china1");
        if (getData == null) {
            this.initEveryting();
            this.saveInfo();
            getData = localStorage.getItem("china1");
        }
        this.completeInfo = JSON.parse(getData);
    }

    getInfo() {
        return this.completeInfo;
    }


    saveInfo() {
        let savedSkins = JSON.stringify(this.completeInfo);
        localStorage.setItem("china1", savedSkins);
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

        this.completeInfo.goldSkins2018.push(new Skin("lskinmer18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskingen18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinmcc18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinzar18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinwid18", 3000));
        this.completeInfo.goldSkins2018.push(new Skin("lskinpha18", 3000));

        this.completeInfo.goldSkins2017.push(new Skin("lskinmei117", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinmei217", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinroa17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinrei17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinzen17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskinwin17", 1000));
        this.completeInfo.goldSkins2017.push(new Skin("lskindiv17", 1000));

        this.completeInfo.purpleSkins2017.push(new Skin("skintra17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinmer17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinsym17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinjun17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinbas17", 250));
        this.completeInfo.purpleSkins2017.push(new Skin("skinana17", 250));

        this.saveInfo();
    }


    initHeroes() {
        this.completeInfo.allHeroes.push(new Hero("Ана",
            new GameItem("Как снег на ветру", "anavoice1", 25),
            new GameItem("Я сама творю свою удачу", "anavoice2", 75),
            new GameItem("Танец", "anaspray1", 25),
            new GameItem("Танец дракона", "anaspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Бастион",
            new GameItem("Вуп-дуу-вуу", "basvoice1", 25),
            new GameItem("Ду-у ви-и ду-у ви-и ву-у", "basvoice2", 75),
            new GameItem("Вкусняшкобот", "basspray1", 25),
            new GameItem("Танец дракона", "basspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Вдова",
            new GameItem("О, благодарю", "widvoice1", 25),
            new GameItem("Никакой породы", "widvoice2", 75),
            new GameItem("Заколка", "widspray1", 25),
            new GameItem("Танец дракона", "widspray2", 25)));

        this.completeInfo.allHeroes.push(new Hero("Генджи",
            new GameItem("Познать себя", "genvoice1", 25),
            new GameItem("Собака лает - караван идет", "genvoice2", 75),
            new GameItem("Зеленый дракон", "genspray1", 25),
            new GameItem("Танец дракона", "genspray2", 25)));

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
            new GameItem("Си фа цай!", "junvoice1", 25),
            new GameItem("Хоть волком вой", "junvoice2", 75),
            new GameItem("Я лечу!", "junspray1", 25),
            new GameItem("Танец дракона", "junspray2", 25)));

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
            new GameItem("День полной луны", "hanvoice1", 25),
            new GameItem("Наглый щенок!", "hanvoice2", 75),
            new GameItem("Синий дракон", "hanspray1", 25),
            new GameItem("Танец дракона", "hanspray2", 25)));

        this.saveInfo();
    }

    initIcons() {
        this.completeInfo.allIcons.push(
            new GameItem("Год петуха 2017", "year17icon", 0),
            new GameItem("Год собаки 2018", "year18icon", 0),

            new GameItem("Пачи-фонарь", "fonaicon", 0),
            new GameItem("Футимари", "futiicon", 0),
            new GameItem("Бокимари", "bokiicon", 0),
            new GameItem("Персикмари", "persicon", 0),
            new GameItem("Пачидракон", "padricon", 0),
            new GameItem("Пачирепаха", "pcheicon", 0),
            new GameItem("Пачитигр", "patiicon", 0),
            new GameItem("Пачифеникс", "pafeicon", 0),

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
            new GameItem("Монетка", "moneicon11", 0)
        );

        this.saveInfo();
    }

    initSprays() {
        this.completeInfo.allSprays.push(
            new GameItem("Год петуха", "year17spray", 25),
            new GameItem("Год собаки", "year18spray", 25),
            new GameItem("Амулет удачи", "amulspray", 25),
            new GameItem("Голова дракона", "drakspray", 25),
            new GameItem("Предсказания ", "predspray", 25),
            new GameItem("Красный конверт", "konvspray", 25),
            new GameItem("Золотой лев", "zlevspray", 0),
            new GameItem("Пробужденный лев", "plevspray", 0)
        );
        this.saveInfo();
    }

    initPoses() {
        this.completeInfo.allPoses.push(
            new GameItem("Ана - Сложенные руки", "anapose1", 75),
            new GameItem("Бастион - Феерверк", "baspose1", 75),
            new GameItem("Дива - Предсказания", "divpose1", 75),
            new GameItem("Мэй - Удачка!", "meipose1", 75),
            new GameItem("Сомбра - Бенгальские огни", "sompose1", 75),
            new GameItem("Крысавчик - Опасно", "junpose1", 75),
            new GameItem("Турбосвин - Мое! Не отдам!", "roapose1", 75),


            new GameItem("МакКри - Поджигаю!", "mccpose1", 225),
            new GameItem("Симметра - Веер", "sympose1", 225),
            new GameItem("Вдова - Веера", "widpose1", 225),
            new GameItem("Заря - Фейезверчище", "zarpose1", 225),
            new GameItem("Трейсер - Фейерверки!", "trapose1", 225),
            new GameItem("Уинстон - Бенгальские огни", "winpose1", 225)
        );
        this.saveInfo();
    }

    initEmotes() {
        this.completeInfo.allEmotes.push(
            new GameItem("Дива - Поклон", "divemote1", 250),
            new GameItem("Крысавчик - Бомбанем?", "junemote1", 250),
            new GameItem("Мэй - Как классно!", "meiemote1", 250),
            new GameItem("Думфист - Сокрушу!", "dooemote1", 750),
            new GameItem("Турбосвин - Тайный друг", "roaemote1", 750)
        );
        this.saveInfo();
    }

initPotg()
{
    this.completeInfo.allMoments.push(
        new GameItem("Трейсер - Танец льва", "tramoment1", 250),
        new GameItem("Турбосвин - Обжорство", "roamoment1", 250),
        new GameItem("Мерси - Удача", "mermoment1", 250),
        new GameItem("МакКри - Не смотрю на взрыв", "mccmoment1", 750)
    );
    this.saveInfo();
}



}
