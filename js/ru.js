let quizzes = [
        ["©", "Символ авторского права"],
        ["®", "Зарегистрированная торговая марка"],
        ["‼", "Двойной сюрприз Марк"],
        ["⁉", "Удивил Хатена Марк"],
        ["™", "торговая марка"],
        ["ℹ", "Информационная марка"],
        ["↔", "Лево и право"],
        ["↕", "Вверх и вниз"],
        ["↖", "верхний левый"],
        ["↗", "Верхний правый"],
        ["↘", "Нижний правый"],
        ["↙", "внизу слева"],
        ["↩", "возвращаться"],
        ["↪", "двигаться дальше"],
        ["⌚", "смотреть"],
        ["⌛", "песочные часы"],
        ["⌨", "клавиатура"],
        ["⏏", "Вынимая"],
        ["⏩", "Быстрое кормление"],
        ["⏪", "Перемотка"],
        ["⏭", "Следующий грузовик"],
        ["⏮", "Голова -out"],
        ["⏯", "Следующая подвеска грузовика"],
        ["⏰", "Будильник"],
        ["⏱", "Секундомер"],
        ["⏲", "таймер"],
        ["⏸", "Пауза"],
        ["⏹", "Останавливаться"],
        ["⏺", "Запись, запись"],
        ["☀", "Солнце"],
        ["☁", "облако"],
        ["☂", "зонтик"],
        ["☃", "Снеговик"],
        ["☄", "Комета"],
        ["☎", "Черный телефон"],
        ["☑", "Проверьте столбец"],
        ["☔", "дождь"],
        ["☕", "кофе"],
        ["☘", "Клевер"],
        ["☝", "указательный палец"],
        ["☠", "Череп"],
        ["☢", "Радиоактивная марка"],
        ["☣", "Жилой знак"],
        ["☦", "Коррел церковный крест"],
        ["☪", "Исламский знак"],
        ["☮", "Мирный знак"],
        ["☯", "Инь и Янь"],
        ["☹", "Запрос лицо"],
        ["☺", "улыбка"],
        ["♈", "Овен"],
        ["♉", "Телец"],
        ["♊", "Близнецы"],
        ["♋", "Рак"],
        ["♌", "Лев"],
        ["♍", "Дева"],
        ["♎", "Весы"],
        ["♏", "Скорпион"],
        ["♐", "Стрелец"],
        ["♑", "Козерог"],
        ["♒", "Водолей"],
        ["♓", "Рыбы"],
        ["♠", "лопата"],
        ["♣", "Клуб, клевер"],
        ["♥", "сердце"],
        ["♦", "Бриллиант"],
        ["♨", "Горячий источник"],
        ["♻", "переработка"],
        ["♿", "инвалидное кресло"],
        ["⚒", "молоток"],
        ["⚓", "Якорь"],
        ["⚖", "Остаток средств"],
        ["⚠", "Предупреждающий знак"],
        ["⚡", "Высокое напряжение"],
        ["⚰", "гроб"],
        ["⚽", "футбольный мяч"],
        ["⚾", "Бейсбольный мяч"],
        ["⛄", "Снеговик"],
        ["⛅", "Солнечно, а иногда и облачно"],
        ["⛈", "Гроза"],
        ["⛏", "Выбирать"],
        ["⛑", "Шлем"],
        ["⛓", "цепь"],
        ["⛔", "Нет входа"],
        ["⛩", "святыня"],
        ["⛪", "Церковь"],
        ["⛰", "Гора"],
        ["⛱", "Зонтик"],
        ["⛲", "фонтан"],
        ["⛳", "гольф"],
        ["⛴", "перевозить"],
        ["⛵", "Яхта"],
        ["⛷", "Катание на лыжах"],
        ["⛸", "кататься на коньках"],
        ["⛹", "Люди с мячом"],
        ["⛺", "палатка"],
        ["⛽", "заправка"],
        ["✂", "Черные ножницы"],
        ["✅", "Белая галочка"],
        ["✈", "самолет"],
        ["✉", "конверт"],
        ["✊", "Идти"],
        ["✋", "Пар"],
        ["✌", "Чоки"],
        ["✍", "описывать"],
        ["✏", "карандаш"],
        ["✒", "ручка"],
        ["✔", "Черная галочка"],
        ["✖", "Крест"],
        ["✝", "Пересекать"],
        ["✡", "Гексаграмма"],
        ["✨", "Блеск"],
        ["❄", "Кристалл снега"],
        ["❌", "Надевать"],
        ["❤", "Красное сердце"],
        ["➕", "Добавлять"],
        ["➖", "Вытащить"],
        ["➗", "разделять"],
        ["➡", "Правильно"],
        ["⬅", "оставил"],
        ["⬆", "Вверх"],
        ["⬇", "под"],
        ["⭐", "Звезда"],
        ["⭕", "Круг"],
        ["〰", "Волновая линия"],
        ["㊗", "Праздник"],
        ["㊙", "Конфиденциальность"],
        ["🀄", "маджонг"],
        ["🃏", "Джокер"],
        ["🅰", "наберите А"],
        ["🅱", "Тип б"],
        ["🅾", "Тип o"],
        ["🆒", "Круто"],
        ["🆓", "свободно"],
        ["🆔", "Я БЫ"],
        ["🆕", "новый"],
        ["🆖", "Не хорошо"],
        ["🆗", "ХОРОШО"],
        ["🆘", "помощь"],
        ["🆙", "вверх"],
        ["🆚", "Против"],
        ["🈁", "здесь"],
        ["🈂", "оказание услуг"],
        ["🈚", "Никто"],
        ["🈯", "указать"],
        ["🈲", "Запрет"],
        ["🈳", "отверстия"],
        ["🈵", "Полная машина, полноценная комната"],
        ["🈶", "может быть"],
        ["🈷", "Луна"],
        ["🈸", "заявление"],
        ["🈹", "скидка"],
        ["🈺", "Продажи"],
        ["🉐", "Преимущество"],
        ["🉑", "Возможный"],
        ["🌀", "тайфун"],
        ["🌁", "туман"],
        ["🌂", "Закрытый зонт"],
        ["🌃", "Звезда и ночь"],
        ["🌅", "Восход солнца"],
        ["🌆", "Город в сумерках"],
        ["🌇", "Здание заката"],
        ["🌈", "Радуга"],
        ["🌉", "Ночной мост"],
        ["🌊", "волна"],
        ["🌋", "Вулкан"],
        ["🌌", "Млечный Путь"],
        ["🌍", "Европа и Африка"],
        ["🌎", "Американский континент"],
        ["🌏", "Азия и Австралия"],
        ["🌐", "Земля"],
        ["🌑", "Новолуние"],
        ["🌒", "Полумесяц"],
        ["🌓", "Первая -квартальная луна"],
        ["🌕", "полнолуние"],
        ["🌗", "Убывающая Луна"],
        ["🌠", "падающая звезда"],
        ["🌡", "термометр"],
        ["🌧", "дождь"],
        ["🌨", "снег"],
        ["🌩", "Гром"],
        ["🌪", "торнадо"],
        ["🌭", "хотдог"],
        ["🌮", "Тако"],
        ["🌯", "Брито"],
        ["🌰", "каштан"],
        ["🌱", "Рассада"],
        ["🌲", "вечнозеленый"],
        ["🌳", "Лиственное дерево"],
        ["🌴", "Пальма"],
        ["🌵", "Кактус"],
        ["🌶", "Перец"],
        ["🌷", "Тюльпан"],
        ["🌸", "вишня в цвету"],
        ["🌹", "Роза"],
        ["🌺", "гибискус"],
        ["🌻", "подсолнух"],
        ["🌼", "цветок"],
        ["🌽", "кукуруза"],
        ["🌾", "Рис"],
        ["🌿", "Трава"],
        ["🍀", "Четырехливный клевер"],
        ["🍁", "Клен"],
        ["🍂", "Опавшие листья"],
        ["🍃", "Ветер"],
        ["🍄", "гриб"],
        ["🍅", "помидор"],
        ["🍆", "баклажан"],
        ["🍇", "Виноград"],
        ["🍈", "дыня"],
        ["🍉", "арбуз"],
        ["🍊", "апельсин"],
        ["🍋", "лимон"],
        ["🍌", "банан"],
        ["🍍", "ананас"],
        ["🍎", "Красное яблоко"],
        ["🍏", "зеленое яблоко"],
        ["🍐", "груша"],
        ["🍑", "персик"],
        ["🍒", "вишня"],
        ["🍓", "Клубника"],
        ["🍔", "Гамбургер"],
        ["🍕", "пицца"],
        ["🍖", "Костей мясо"],
        ["🍘", "Рисовый крекер"],
        ["🍙", "рисовый шарик"],
        ["🍚", "рис"],
        ["🍛", "Карри и рис"],
        ["🍜", "рамен"],
        ["🍝", "спагетти"],
        ["🍞", "хлеб"],
        ["🍟", "французская картошка фри"],
        ["🍠", "Жареный картофель"],
        ["🍡", "пельмени"],
        ["🍢", "Оден"],
        ["🍣", "Затянувшись"],
        ["🍤", "Жареные креветки"],
        ["🍥", "затем"],
        ["🍦", "Мягкий крем"],
        ["🍧", "Бритый лед"],
        ["🍨", "мороженое"],
        ["🍩", "пончик"],
        ["🍪", "печенье"],
        ["🍫", "шоколад"],
        ["🍬", "конфеты"],
        ["🍭", "Облизывая конфеты"],
        ["🍮", "Пудинг"],
        ["🍯", "медовый"],
        ["🍰", "Песочный шорт"],
        ["🍱", "Обед"],
        ["🍲", "горшок"],
        ["🍳", "Жаренное яйцо"],
        ["🍴", "Вилка и нож"],
        ["🍵", "Только миска с горячей водой"],
        ["🍶", "Токури и Иногучи"],
        ["🍷", "бокал для вина"],
        ["🍸", "Коктейльный стакан"],
        ["🍹", "Тропический напиток"],
        ["🍺", "Пивная кружка"],
        ["🍻", "ваше здоровье"],
        ["🍼", "бутылочки"],
        ["🍽", "Тарелка, вилка и нож"],
        ["🍾", "шампанское"],
        ["🍿", "Попкорн"],
        ["🎀", "лента"],
        ["🎁", "Подарок"],
        ["🎂", "Торт на день рождения"],
        ["🎃", "Джек -о Фонарь"],
        ["🎄", "Рождественская елка"],
        ["🎅", "Санта Клаус"],
        ["🎆", "салют"],
        ["🎈", "баллон"],
        ["🎉", "взломщик"],
        ["🎊", "Кусуку мяч"],
        ["🎋", "Танабата"],
        ["🎍", "Сосна"],
        ["🎎", "Кукла"],
        ["🎏", "карп -стример"],
        ["🎐", "Ветрный звонок"],
        ["🎑", "Ежемесячный вид"],
        ["🎓", "Квадратный кеп"],
        ["🎖", "Медаль"],
        ["🎙", "Студийный микрофон"],
        ["🎚", "слайдер"],
        ["🎛", "Ручка"],
        ["🎞", "фильм"],
        ["🎠", "Веселый -Го -раунд"],
        ["🎡", "колесо обозрения"],
        ["🎢", "американские горки"],
        ["🎣", "ловит рыбу"],
        ["🎤", "Микрофон"],
        ["🎥", "Кинокамеры"],
        ["🎦", "кино"],
        ["🎧", "наушники"],
        ["🎨", "палитра"],
        ["🎩", "Шелковая шляпа"],
        ["🎪", "Цирк"],
        ["🎫", "проездной билет"],
        ["🎬", "Качинко"],
        ["🎭", "сцена"],
        ["🎮", "Видео игра"],
        ["🎯", "Джекпот"],
        ["🎰", "Игровой автомат"],
        ["🎱", "Бильярд"],
        ["🎲", "Игральная кость"],
        ["🎳", "Боулинг"],
        ["🎴", "Цветочная карта"],
        ["🎵", "примечание"],
        ["🎷", "Саксофон"],
        ["🎸", "гитара"],
        ["🎹", "клавиатура"],
        ["🎺", "труба"],
        ["🎻", "скрипка"],
        ["🎼", "Музыкальные очки"],
        ["🎽", "Экиден"],
        ["🎾", "большой теннис"],
        ["🎿", "Катание на лыжах"],
        ["🏀", "баскетбол"],
        ["🏁", "Флаг шашки"],
        ["🏂", "снежная доска"],
        ["🏃", "Бег"],
        ["🏄", "серфинг"],
        ["🏅", "Медаль"],
        ["🏆", "Трофей"],
        ["🏇", "Скачки"],
        ["🏈", "Американский футбольный мяч"],
        ["🏉", "Регби"],
        ["🏊", "плавание"],
        ["🏋", "Увеличение веса"],
        ["🏌", "гольф"],
        ["🏍", "Гоночный велосипед"],
        ["🏎", "Гоночный автомобиль"],
        ["🏏", "крикет"],
        ["🏐", "волейбол"],
        ["🏑", "Полевой хоккей"],
        ["🏒", "Хоккей на льду"],
        ["🏓", "Настольный теннис"],
        ["🏔", "Снежные горы"],
        ["🏕", "лагерь"],
        ["🏖", "Пляж"],
        ["🏗", "строительство"],
        ["🏙", "Городок"],
        ["🏚", "Заброшенный дом"],
        ["🏛", "Древняя архитектура"],
        ["🏜", "пустыня"],
        ["🏝", "Необитаемый остров"],
        ["🏞", "Национальный парк"],
        ["🏟", "Стадион"],
        ["🏠", "Дом"],
        ["🏡", "Дом с садом"],
        ["🏢", "офисное здание"],
        ["🏣", "Японское почтовое отделение"],
        ["🏤", "Европейское почтовое отделение"],
        ["🏥", "больница"],
        ["🏦", "Банк"],
        ["🏧", "Банкомат"],
        ["🏨", "Отель"],
        ["🏩", "Love Hotel"],
        ["🏪", "небольшой магазин, работающий допоздна"],
        ["🏫", "школа"],
        ["🏬", "универмаг"],
        ["🏭", "завод"],
        ["🏮", "фонарь"],
        ["🏯", "Японский замок"],
        ["🏰", "Европейский замок"],
        ["🏳", "белый флаг"],
        ["🏴", "Черный флаг"],
        ["🏵", "розетка"],
        ["🏷", "этикетка"],
        ["🏸", "бадминтон"],
        ["🏹", "Лук и стрела"],
        ["🏺", "Банка"],
        ["🐀", "мыши"],
        ["🐁", "Белый минус"],
        ["🐂", "Корова"],
        ["🐃", "буйвол"],
        ["🐄", "Корова"],
        ["🐅", "тигр"],
        ["🐆", "Леопард"],
        ["🐇", "кролик"],
        ["🐈", "Кошка"],
        ["🐉", "Дракон"],
        ["🐊", "крокодил"],
        ["🐋", "кит"],
        ["🐌", "улитки"],
        ["🐍", "Змея"],
        ["🐎", "лошадь"],
        ["🐐", "Козел"],
        ["🐑", "овец"],
        ["🐒", "обезьяна"],
        ["🐔", "курица"],
        ["🐕", "собака"],
        ["🐖", "Свинья"],
        ["🐗", "кабан"],
        ["🐘", "слон"],
        ["🐙", "Осьминог"],
        ["🐚", "уловка"],
        ["🐛", "Caterpillar"],
        ["🐜", "муравей"],
        ["🐝", "Пчела"],
        ["🐞", "Божья коровка"],
        ["🐟", "рыбы"],
        ["🐠", "тропическая рыба"],
        ["🐡", "Фугу"],
        ["🐢", "черепаха"],
        ["🐣", "Птенца"],
        ["🐦", "птица"],
        ["🐧", "пингвин"],
        ["🐨", "коала"],
        ["🐩", "пудель"],
        ["🐪", "верблюд"],
        ["🐬", "Дельфин"],
        ["🐸", "Фрога лицо"],
        ["🐹", "Лицо хомяка"],
        ["🐺", "Волчья лицо"],
        ["🐻", "Медведь лицо"],
        ["🐼", "Панда лицо"],
        ["🐽", "Свинья нос"],
        ["🐾", "След"],
        ["🐿", "Чистовка"],
        ["👀", "Смотреть"],
        ["👁", "глаз"],
        ["👂", "ухо"],
        ["👃", "нос"],
        ["👄", "рот"],
        ["👅", "язык"],
        ["👊", "Genkotsu"],
        ["👋", "Пока-пока"],
        ["👌", "ХОРОШО"],
        ["👍", "хороший"],
        ["👎", "Не хорошо"],
        ["👏", "аплодисменты"],
        ["👑", "корона"],
        ["👒", "Женская шляпа"],
        ["👓", "очки"],
        ["👔", "галстук"],
        ["👕", "Футболка"],
        ["👖", "джинсы"],
        ["👗", "платье"],
        ["👘", "кимоно"],
        ["👙", "бикини"],
        ["👚", "Женская одежда"],
        ["👛", "бумажник"],
        ["👜", "Сумочка"],
        ["👝", "Сумка"],
        ["👞", "Кожаные ботинки"],
        ["👟", "кроссовки"],
        ["👠", "Высокий каблук"],
        ["👡", "Мулы"],
        ["👢", "сапоги"],
        ["👣", "Человеческий след"],
        ["👦", "мальчик"],
        ["👧", "девочка"],
        ["👨", "мужчина"],
        ["👩", "Женщина"],
        ["👪", "семья"],
        ["👫", "Гендерная пара"],
        ["👬", "Мужская пара"],
        ["👭", "Женская пара"],
        ["👮", "Полицейский"],
        ["👯", "Кролика девушка"],
        ["👰", "невеста"],
        ["👱", "Блондинка"],
        ["👳", "Турбан"],
        ["👴", "старик"],
        ["👵", "Бабушка"],
        ["👶", "малыш"],
        ["👷", "Люди на строительной площадке"],
        ["👸", "Принцесса"],
        ["👹", "демон"],
        ["👺", "Тенгу"],
        ["👻", "Призрак"],
        ["👼", "Ангел"],
        ["👽", "инопланетянин"],
        ["💀", "череп"],
        ["💂", "Охранник"],
        ["💃", "танцовщица"],
        ["💄", "помада"],
        ["💅", "Маникюр"],
        ["💆", "Массаж лица"],
        ["💇", "стрижка волос"],
        ["💈", "парикмахер"],
        ["💉", "инъекция"],
        ["💊", "лекарственное средство"],
        ["💋", "Поцелуй Марк"],
        ["💌", "Любовное письмо"],
        ["💍", "звенеть"],
        ["💎", "Ювелирные изделия "],
        ["💏", "целовать"],
        ["💐", "букет"],
        ["💑", "Пара"],
        ["💒", "свадьба"],
        ["💓", "сердце"],
        ["💔", "Разбитое сердце"],
        ["💡", "лампочка"],
        ["💢", "злость"],
        ["💣", "бомбить"],
        ["💤", "спать"],
        ["💥", "Докан"],
        ["💦", "Пот"],
        ["💧", "уронить"],
        ["💨", "бросаться"],
        ["💩", "Какать"],
        ["💪", "мышца"],
        ["💫", "головокружительный"],
        ["💬", "Баллон"],
        ["💭", "Мышление"],
        ["💮", "Прохождение"],
        ["💯", "Идеальный счет"],
        ["💰", "Деньги"],
        ["💱", "денежный перевод"],
        ["💳", "кредитная карта"],
        ["💴", "Круг"],
        ["💵", "Доллар"],
        ["💶", "Евро"],
        ["💷", "фунт"],
        ["💸", "Потратьте"],
        ["💹", "Обменная карта"],
        ["💺", "Сиденье"],
        ["💻", "компьютерный"],
        ["💼", "Портфель"],
        ["💽", "Доктор медицинских наук"],
        ["💾", "Дискет -диск"],
        ["💿", "CD"],
        ["📀", "DVD"],
        ["📁", "Папка"],
        ["📄", "документ"],
        ["📅", "календарь"],
        ["📆", "Ежедневный календарь"],
        ["📈", "Растущий график"],
        ["📉", "Нисходящая диаграмма"],
        ["📊", "гистограмма"],
        ["📋", "Буфер обмена"],
        ["📌", "Thumbtack"],
        ["📍", "штырь"],
        ["📎", "клип"],
        ["📏", "правитель"],
        ["📐", "установить квадрат"],
        ["📑", "Документы с вкладками"],
        ["📓", "Примечание"],
        ["📕", "Книга"],
        ["📖", "Открытая книга"],
        ["📗", "Зеленая книга"],
        ["📘", "Синяя книга"],
        ["📙", "Оранжевая книга"],
        ["📛", "Табличка с фиксацией"],
        ["📝", "Меморандум"],
        ["📞", "Телефон"],
        ["📟", "Пейджер"],
        ["📠", "факс"],
        ["📡", "антенна"],
        ["📢", "мегафон"],
        ["📣", "Поддержите мегафон"],
        ["📤", "Коробка передач"],
        ["📥", "Приемная коробка"],
        ["📦", "нагрузка"],
        ["📧", "Эл. адрес"],
        ["📨", "Входящий звонок"],
        ["📮", "почта"],
        ["📯", "рэп"],
        ["📰", "газета"],
        ["📱", "Сотовый телефон"],
        ["📳", "Атмосфера"],
        ["📴", "Выключение"],
        ["📵", "Запрет на мобильный телефон"],
        ["📶", "В пределах"],
        ["📷", "камера"],
        ["📸", "Флэш -камера"],
        ["📹", "Видеокамера"],
        ["📺", "телевизионная установка"],
        ["📻", "радио"],
        ["📼", "видео лента"],
        ["📽", "Проектор"],
        ["📿", "Розарий Жемчужина"],
        ["🔅", "темный"],
        ["🔆", "яркий"],
        ["🔇", "Звук выключен"],
        ["🔈", "оратор"],
        ["🔉", "Маленький звук"],
        ["🔊", "Громкий"],
        ["🔋", "батарея"],
        ["🔌", "Выход"],
        ["🔍", "увеличительное стекло"],
        ["🔏", "Замок пароля"],
        ["🔐", "Ключ и блокировка"],
        ["🔑", "ключ"],
        ["🔒", "замок"],
        ["🔓", "Пустой ключ"],
        ["🔔", "колокол"],
        ["🔕", "Уведомление"],
        ["🔖", "закладка"],
        ["🔗", "Ссылка на сайт"],
        ["🔘", "Радио-кнопки"],
        ["🔙", "возвращаться"],
        ["🔚", "конец"],
        ["🔝", "верхний"],
        ["🔞", "18 Запрет"],
        ["🔠", "прописная буква"],
        ["🔡", "Нижний регистр"],
        ["🔢", "Число"],
        ["🔣", "символ"],
        ["🔤", "Английские письма"],
        ["🔥", "Огонь"],
        ["🔦", "фонарик"],
        ["🔧", "гаечный ключ"],
        ["🔨", "молоток"],
        ["🔩", "Гайка и болты"],
        ["🔪", "Кухонный нож"],
        ["🔫", "Водяной пистолет"],
        ["🔬", "микроскоп"],
        ["🔭", "телескоп"],
        ["🔮", "Кристаллическая лампочка"],
        ["🔯", "Гексаграмма"],
        ["🔰", "Новичок Марк"],
        ["🔱", "Трезубец"],
        ["🕊", "Мир мира"],
        ["🕋", "Карба"],
        ["🕌", "Мечеть"],
        ["🕍", "Синагога"],
        ["🕎", "Менора"],
        ["🕐", "1:00"],
        ["🕑", "2 часа"],
        ["🕒", "3 часа"],
        ["🕓", "4 часа"],
        ["🕔", "5:00"],
        ["🕕", "Шесть часов"],
        ["🕖", "7 часов"],
        ["🕗", "8:00"],
        ["🕘", "9:00"],
        ["🕙", "10:00"],
        ["🕚", "11 часов"],
        ["🕛", "12:00"],
        ["🕜", "1:30"],
        ["🕝", "2:30"],
        ["🕞", "3:30"],
        ["🕟", "4:30 утра"],
        ["🕠", "5:30"],
        ["🕡", "Шесть тридцать"],
        ["🕢", "7:30"],
        ["🕣", "8:30 утра"],
        ["🕤", "9:30 утра"],
        ["🕥", "10:30"],
        ["🕦", "11:30"],
        ["🕧", "12:30"],
        ["🕯", "свеча"],
        ["🕳", "отверстие"],
        ["🕵", "Детектив"],
        ["🕶", "солнечные очки"],
        ["🕷", "Паук"],
        ["🕸", "паутина"],
        ["🕹", "Джойстик"],
        ["🖇", "клип"],
        ["🖊", "Шариковая ручка"],
        ["🖋", "Перьевая ручка"],
        ["🖌", "кисть"],
        ["🖍", "карандаш"],
        ["🖐", "Привет"],
        ["🖕", "Не глупи"],
        ["🖥", "Настольный компьютер"],
        ["🖨", "принтер"],
        ["🖱", "мыши"],
        ["🖼", "Рамки"],
        ["🗄", "шкаф"],
        ["🗑", "Мусорное ведро"],
        ["🗒", "Блокнот"],
        ["🗓", "Ежедневный календарь"],
        ["🗜", "визит"],
        ["🗝", "ключ"],
        ["🗞", "газета"],
        ["🗡", "Кинжал нож"],
        ["🗣", "разговаривать"],
        ["🗯", "Нарушая гнев"],
        ["🗳", "Избирательная урна"],
        ["🗺", "карта мира"],
        ["🗻", "Фудзи гора"],
        ["🗼", "Токийская башня"],
        ["🗽", "статуя Свободы"],
        ["🗾", "Япония"],
        ["🗿", "Мойай"],
        ["😂", "Смех"],
        ["😄", "весело"],
        ["😅", "Я был немного обеспокоен"],
        ["😉", "Подмигивание"],
        ["😋", "Вкусный"],
        ["😌", "с облегчением"],
        ["😍", "очень нравится"],
        ["😎", "Гордость"],
        ["😏", "Ухмыляясь"],
        ["😐", "Бессмысленный"],
        ["😒", "Скучный"],
        ["😓", "У меня действительно были проблемы"],
        ["😔", "Обеспокоенный"],
        ["😕", "не знать"],
        ["😖", "жесткий"],
        ["😗", "Жевательный"],
        ["😛", "Вне"],
        ["😞", "Расстроенный"],
        ["😟", "беспокойство"],
        ["😠", "Злой"],
        ["😢", "Мило"],
        ["😤", "не может простить"],
        ["😨", "Страшный"],
        ["😩", "устала"],
        ["😪", "сонный"],
        ["😬", "Хороший"],
        ["😭", "Эм-м-м"],
        ["😳", "Удивительно"],
        ["😵", "головокружительный"],
        ["😷", "холодно"],
        ["🙃", "С ног на голову"],
        ["🙅", "Не хорошо"],
        ["🙆", "ХОРОШО"],
        ["🙇", "лук"],
        ["🙈", "не хочу видеть"],
        ["🙉", "Я не хочу этого слышать"],
        ["🙊", "я не хочу говорить"],
        ["🙋", "да"],
        ["🙌", "Высокий"],
        ["🙏", "пожалуйста"],
        ["🚀", "ракета"],
        ["🚁", "вертолет"],
        ["🚂", "Локомотив"],
        ["🚃", "Электропоезд"],
        ["🚄", "скоростной поезд"],
        ["🚇", "метро"],
        ["🚉", "станция"],
        ["🚋", "Трамвай"],
        ["🚌", "автобус"],
        ["🚏", "автобусная остановка"],
        ["🚑", "скорая помощь"],
        ["🚒", "Пожарная машина"],
        ["🚓", "Полицейская машина"],
        ["🚕", "такси"],
        ["🚗", "автомобиль"],
        ["🚚", "грузовая машина"],
        ["🚜", "Трактор"],
        ["🚝", "монорельса"],
        ["🚟", "Веревка"],
        ["🚠", "Вагон фуникулера"],
        ["🚢", "судно"],
        ["🚣", "лодка"],
        ["🚤", "Моторная лодка"],
        ["🚥", "сигнал"],
        ["🚧", "Строительная площадка"],
        ["🚨", "Лампа"],
        ["🚪", "дверь"],
        ["🚫", "Держаться подальше"],
        ["🚬", "Место для курения"],
        ["🚭", "не курить"],
        ["🚮", "Мусорная свалка"],
        ["🚯", "Запрет на отказ"],
        ["🚰", "Питьевые фонтаны"],
        ["🚲", "велосипед"],
        ["🚳", "Велосипеды запрещены"],
        ["🚴", "Дорожная гонка"],
        ["🚵", "горный велосипед"],
        ["🚶", "Пешеход"],
        ["🚷", "Движение пешеходов запрещено"],
        ["🚸", "Школьная зона"],
        ["🚹", "мужчина"],
        ["🚺", "Женщина"],
        ["🚻", "туалет"],
        ["🚼", "малыш"],
        ["🚽", "Унитаз"],
        ["🚾", "туалет"],
        ["🚿", "душ"],
        ["🛀", "ванна"],
        ["🛁", "Ванна"],
        ["🛂", "Иммиграция"],
        ["🛃", "Таможня"],
        ["🛄", "Багажная квитанция"],
        ["🛅", "Место хранения багажа"],
        ["🛋", "Диван и освещение"],
        ["🛌", "Ванная комната"],
        ["🛍", "поход по магазинам"],
        ["🛎", "колокол"],
        ["🛏", "кровать"],
        ["🛐", "Место поклонения"],
        ["🛠", "Молоток и гаечный ключ"],
        ["🛡", "щит"],
        ["🛢", "Масляная банка"],
        ["🛣", "шоссе"],
        ["🛤", "линия"],
        ["🛥", "Моторная лодка"],
        ["🛩", "Маленький самолет"],
        ["🛫", "Самолет взлет"],
        ["🛬", "Посадка самолета"],
        ["🛰", "спутник"],
        ["🛳", "Пассажирский корабль"],
        ["🤐", "секрет"],
        ["🤑", "я хочу денег"],
        ["🤒", "Иметь лихорадку"],
        ["🤓", "Компьютерщик"],
        ["🤔", "мышление"],
        ["🤕", "рана"],
        ["🤖", "робот"],
        ["🤗", "обнимать"],
        ["🤘", "Знак мелодии"],
        ["🦀", "краб"],
        ["🦁", "Лев"],
        ["🦂", "Скорпион"],
        ["🦃", "индейка"],
        ["🦄", "единорог"],
        ["🧀", "сыр"],
        ["#⃣", "острый"],
        ["*⃣", "Звездочка"],
        ["0⃣", "нуль"],
        ["1⃣", "один"],
        ["2⃣", "На"],
        ["3⃣", "Мистер Мисс."],
        ["4⃣", "четыре"],
        ["5⃣", "Go Game"],
        ["6⃣", "Прохладный"],
        ["7⃣", "Семь"],
        ["8⃣", "Пчела"],
        ["9⃣", "девять"],
        ["🇦🇶", "Антарктический флаг"],
        ["🇦🇷", "Аргентинский флаг"],
        ["🇦🇹", "Австрийский флаг"],
        ["🇦🇺", "Австралийский флаг"],
        ["🇧🇪", "Бельгийский флаг"],
        ["🇧🇷", "Бразильский флаг"],
        ["🇧🇸", "Флаг Бахама"],
        ["🇧🇾", "Флаг Беларуси"],
        ["🇧🇿", "Белиз Флаг"],
        ["🇨🇦", "Канадский флаг"],
        ["🇨🇭", "Швейцарский флаг"],
        ["🇨🇮", "Флаг суда"],
        ["🇨🇱", "Флаг Чили"],
        ["🇨🇳", "Китайский флаг"],
        ["🇨🇴", "Колумбийский флаг"],
        ["🇨🇷", "Коста -Рика Флаг"],
        ["🇨🇺", "Кубинский флаг"],
        ["🇨🇿", "Флаг Чешской Республики"],
        ["🇩🇪", "Немецкий флаг"],
        ["🇩🇰", "Дания Флаг"],
        ["🇩🇲", "Доминика Флаг"],
        ["🇩🇴", "Флаг Республики Доминика"],
        ["🇪🇨", "Флаг Эквадора"],
        ["🇪🇪", "Эстонский флаг"],
        ["🇪🇬", "Египетский флаг"],
        ["🇪🇷", "Эритрия Флаг"],
        ["🇪🇸", "Испанский флаг"],
        ["🇪🇹", "Эфиопский флаг"],
        ["🇪🇺", "ЕС флаг"],
        ["🇫🇮", "Финский флаг"],
        ["🇫🇰", "Флаг Фолклендских островов"],
        ["🇫🇷", "Французский флаг"],
        ["🇬🇧", "Британский флаг"],
        ["🇬🇱", "Гренландский флаг"],
        ["🇬🇷", "Греческий флаг"],
        ["🇬🇹", "Флаг Гватемала"],
        ["🇭🇰", "Гонконгский флаг"],
        ["🇭🇳", "Гондурас флаг"],
        ["🇭🇷", "Хорватский флаг"],
        ["🇭🇹", "Гаити Флаг"],
        ["🇭🇺", "Венгрийский флаг"],
        ["🇮🇩", "Индонезийский флаг"],
        ["🇮🇪", "Ирландский флаг"],
        ["🇮🇱", "Израильский флаг"],
        ["🇮🇳", "Индийский флаг"],
        ["🇮🇶", "Иракский флаг"],
        ["🇮🇷", "Иранский флаг"],
        ["🇮🇸", "Исландский флаг"],
        ["🇮🇹", "Итальянский флаг"],
        ["🇯🇲", "Ямайский флаг"],
        ["🇯🇵", "Японский флаг"],
        ["🇰🇭", "Камбоджийский флаг"],
        ["🇰🇵", "Северокорейский флаг"],
        ["🇰🇷", "Корейский флаг"],
        ["🇱🇹", "Литовский флаг"],
        ["🇱🇺", "Флаг Люксембурга"],
        ["🇱🇻", "Латвийский флаг"],
        ["🇲🇦", "Флаг Марокко"],
        ["🇲🇨", "Флаг Монако"],
        ["🇲🇩", "Флаг Молдова"],
        ["🇲🇪", "Флаг Черногории"],
        ["🇲🇽", "Флаг Мексики"],
        ["🇲🇾", "Малайзийский флаг"],
        ["🇳🇮", "Флаг Никарагуа"],
        ["🇳🇱", "Голландский флаг"],
        ["🇳🇴", "Норвежский флаг"],
        ["🇳🇿", "Новозеландский флаг"],
        ["🇵🇦", "Панамский флаг"],
        ["🇵🇪", "Флаг Перу"],
        ["🇵🇭", "Филиппинский флаг"],
        ["🇵🇱", "Польский флаг"],
        ["🇵🇷", "Флаг Пуэрто -Рико"],
        ["🇵🇸", "Палестинский флаг"],
        ["🇵🇹", "Португальный флаг"],
        ["🇵🇾", "Флаг Парагвай"],
        ["🇷🇴", "Румынский флаг"],
        ["🇷🇸", "Сербский флаг"],
        ["🇷🇺", "Флаг России"],
        ["🇸🇦", "Саудовский флаг"],
        ["🇸🇪", "Шведский флаг"],
        ["🇸🇬", "Сингапурский флаг"],
        ["🇸🇮", "Словенский флаг"],
        ["🇸🇰", "Словакия Флаг"],
        ["🇸🇲", "Флаг Сан -Марино"],
        ["🇸🇻", "Сальвадор Флаг"],
        ["🇹🇭", "Тайский флаг"],
        ["🇹🇷", "Турецкий флаг"],
        ["🇹🇼", "Тайваньский флаг"],
        ["🇺🇦", "Украинский флаг"],
        ["🇺🇸", "американский флаг"],
        ["🇺🇾", "Флаг Уругвай"],
        ["🇻🇪", "Флаг Венесуэлы"],
        ["🇻🇳", "Вьетнамский флаг"]
    ];
export default quizzes;