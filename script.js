/**
 * MyMusicHub — script.js
 * Полная логика клиентской части
 */

/* ============================================================
   DATA
   ============================================================ */

const ARTISTS = [
  {
    id: 'the-weeknd',
    name: 'The Weeknd',
    genre: 'R&B / Поп',
    desc: 'Канадский певец Абель Тесфайе, известный как The Weeknd — один из самых продаваемых музыкантов в мире. Его тёмный R&B-стиль и синтвейв-эстетика сформировали целое поколение слушателей.'
  },
  {
    id: 'daft-punk',
    name: 'Daft Punk',
    genre: 'Электроника',
    desc: 'Легендарный французский дуэт Томаса Бангальтера и Ги-Мануэля де Омем-Кристо. Создатели хаус-музыки нового поколения, завоевавшие сердца миллионов треками от Homework до Random Access Memories.'
  },
  {
    id: 'arctic-monkeys',
    name: 'Arctic Monkeys',
    genre: 'Инди-рок',
    desc: 'Британская рок-группа из Шеффилда, дебютировавшая в 2006 году с рекордно быстро продавшимся альбомом. Мастера интеллектуального инди-рока с острыми текстами и неповторимым звуком.'
  },
  {
    id: 'billie-eilish',
    name: 'Billie Eilish',
    genre: 'Поп / Альтернатива',
    desc: 'Американская певица и автор песен, ставшая знаменитой в 17 лет. Её мрачная эстетика, шёпотный вокал и экспериментальный поп изменили представление о современной поп-музыке.'
  },
  {
    id: 'kendrick-lamar',
    name: 'Kendrick Lamar',
    genre: 'Хип-хоп',
    desc: 'Рэпер из Комптона, Калифорния — обладатель Пулитцеровской премии и множества Grammy. Его альбомы считаются вершиной современного хип-хопа по глубине текстов и музыкальной сложности.'
  },
  {
    id: 'radiohead',
    name: 'Radiohead',
    genre: 'Альт-рок',
    desc: 'Культовая британская группа из Оксфорда, сформировавшая альтернативный рок и арт-рок 90-х и 2000-х. OK Computer и Kid A — одни из величайших альбомов в истории музыки.'
  },
  {
    id: 'tame-impala',
    name: 'Tame Impala',
    genre: 'Психоделический поп',
    desc: 'Австралийский проект Кевина Паркера — смесь психоделического рока, синти-попа и дрим-попа. Currents (2015) изменил звучание инди-музыки целого десятилетия.'
  },
  // ── Новые исполнители ──────────────────────────────────────
  {
    id: 'eminem',
    name: 'Eminem',
    genre: 'Хип-хоп / Рэп',
    desc: 'Легенда мирового рэпа из Детройта. Eminem — один из самых продаваемых музыкантов в истории, мастер скоростного флоу и острых текстов, трижды лауреат Grammy за лучший рэп-альбом подряд.'
  },
  {
    id: 'linkin-park',
    name: 'Linkin Park',
    genre: 'Альт-метал / Ню-метал',
    desc: 'Культовая американская рок-группа, соединившая хэви-метал, хип-хоп и электронику. Их дебютный альбом Hybrid Theory разошёлся тиражом более 30 миллионов копий.'
  },
  {
    id: 'metallica',
    name: 'Metallica',
    genre: 'Хэви-метал / Трэш-метал',
    desc: 'Одна из самых влиятельных и продаваемых метал-групп в истории. За 40 лет карьеры Metallica продала более 125 миллионов альбомов и стала синонимом тяжёлой музыки.'
  },
  // ── Русские исполнители ────────────────────────────────────
  {
    id: 'kino',
    name: 'Кино',
    genre: 'Русский рок',
    desc: 'Легендарная советская рок-группа Виктора Цоя — символ целого поколения. Их песни звучат так же остро и актуально, как и в момент создания в 1980-х. Цой жив.'
  },
  {
    id: 'zemfira',
    name: 'Земфира',
    genre: 'Русский рок / Поп-рок',
    desc: 'Одна из самых значимых русскоязычных певиц современности. Её дебютный альбом 1999 года стал откровением, а каждый следующий — событием. Голос поколения.'
  },
];

const TRACKS = [
  // The Weeknd
  { id: 1,  title: 'Blinding Lights',        artist: 'The Weeknd',      artistId: 'the-weeknd',      genre: 'R&B / Поп',          duration: '3:20', year: 2019, desc: 'Синтвейв-поп хит, ставший одной из самых прослушиваемых песен в истории Spotify. Вдохновлён эстетикой 80-х и нью-вейва.' },
  { id: 2,  title: 'Starboy',                artist: 'The Weeknd',      artistId: 'the-weeknd',      genre: 'R&B / Поп',          duration: '3:50', year: 2016, desc: 'Заглавный трек альбома Starboy при участии Daft Punk. Холодный, минималистичный бит и характерный фальцет Уикнда.' },
  { id: 3,  title: 'Save Your Tears',        artist: 'The Weeknd',      artistId: 'the-weeknd',      genre: 'R&B / Поп',          duration: '3:35', year: 2020, desc: 'Меланхоличный синтвейв-трек с альбома After Hours. Лирика о сожалении и невозможности вернуть прошлое.' },
  { id: 4,  title: 'Die For You',            artist: 'The Weeknd',      artistId: 'the-weeknd',      genre: 'R&B / Поп',          duration: '4:20', year: 2016, desc: 'Эмоциональная баллада, ставшая вирусной спустя годы после выхода. Один из самых любимых треков у фанатов.' },

  // Daft Punk
  { id: 5,  title: 'Get Lucky',             artist: 'Daft Punk',       artistId: 'daft-punk',       genre: 'Электроника',        duration: '6:09', year: 2013, desc: 'Летний фанк-хит с альбома Random Access Memories при участии Фарелла Уильямса и Найла Роджерса. Мировой хит.' },
  { id: 6,  title: 'One More Time',         artist: 'Daft Punk',       artistId: 'daft-punk',       genre: 'Электроника',        duration: '5:20', year: 2000, desc: 'Гимн диско-хауса, один из самых узнаваемых треков в истории электронной музыки. Вокал пропущен через вокодер.' },
  { id: 7,  title: 'Harder Better Faster',  artist: 'Daft Punk',       artistId: 'daft-punk',       genre: 'Электроника',        duration: '3:45', year: 2001, desc: 'Роботизированный фанк-трек с культовым вокодерным рефреном. Классика французского хауса.' },
  { id: 8,  title: 'Around the World',      artist: 'Daft Punk',       artistId: 'daft-punk',       genre: 'Электроника',        duration: '7:09', year: 1997, desc: 'Минималистичный хаус-трек с повторяющейся фразой — гипнотический и неудержимый. С альбома Homework.' },

  // Arctic Monkeys
  { id: 9,  title: 'Do I Wanna Know?',      artist: 'Arctic Monkeys',  artistId: 'arctic-monkeys',  genre: 'Инди-рок',           duration: '4:32', year: 2013, desc: 'Медленный, тяжёлый рифф и томный вокал Алекса Тёрнера. Открывает альбом AM — один из лучших рок-альбомов 2010-х.' },
  { id: 10, title: 'R U Mine?',             artist: 'Arctic Monkeys',  artistId: 'arctic-monkeys',  genre: 'Инди-рок',           duration: '3:21', year: 2013, desc: 'Агрессивный гитарный рифф и сырая энергетика. Трек стал гимном инди-рока и любимцем живых выступлений.' },
  { id: 11, title: 'Fluorescent Adolescent',artist: 'Arctic Monkeys',  artistId: 'arctic-monkeys',  genre: 'Инди-рок',           duration: '2:57', year: 2011, desc: 'Острая лирика о угасающих страстях под задорный гитарный поп. С альбома Suck It and See.' },
  { id: 12, title: '505',                   artist: 'Arctic Monkeys',  artistId: 'arctic-monkeys',  genre: 'Инди-рок',           duration: '4:13', year: 2007, desc: 'Нарастающая баллада с закрытым концом. Один из самых эмоциональных треков группы, ставший культовым.' },

  // Billie Eilish
  { id: 13, title: 'bad guy',               artist: 'Billie Eilish',   artistId: 'billie-eilish',   genre: 'Поп / Альтернатива', duration: '3:14', year: 2019, desc: 'Дерзкий поп-хит с дебютного альбома WHEN WE ALL FALL ASLEEP. Минималистичный бит и ироничная подача.' },
  { id: 14, title: 'Happier Than Ever',     artist: 'Billie Eilish',   artistId: 'billie-eilish',   genre: 'Поп / Альтернатива', duration: '4:58', year: 2021, desc: 'Двухчастная песня: нежное начало переходит в яростный рок-финал. Честный манифест об освобождении от токсичных отношений.' },
  { id: 15, title: 'ocean eyes',            artist: 'Billie Eilish',   artistId: 'billie-eilish',   genre: 'Поп / Альтернатива', duration: '3:20', year: 2016, desc: 'Дебютный сингл, записанный в 14 лет. Хрупкий, воздушный поп, который мгновенно разлетелся по интернету.' },
  { id: 16, title: 'lovely',                artist: 'Billie Eilish',   artistId: 'billie-eilish',   genre: 'Поп / Альтернатива', duration: '3:33', year: 2018, desc: 'Дуэт с Khalid для сериала 13 причин почему. Атмосферная, тревожная и невероятно красивая баллада.' },

  // Kendrick Lamar
  { id: 17, title: 'HUMBLE.',               artist: 'Kendrick Lamar',  artistId: 'kendrick-lamar',  genre: 'Хип-хоп',            duration: '2:57', year: 2017, desc: 'Пронзительный трап-бит от Mike WiLL Made-It и самоуверенный поток сознания Кендрика. Один из главных хитов DAMN.' },
  { id: 18, title: 'Alright',               artist: 'Kendrick Lamar',  artistId: 'kendrick-lamar',  genre: 'Хип-хоп',            duration: '3:39', year: 2015, desc: 'Гимн надежды с альбома To Pimp a Butterfly. Стал гимном движения за гражданские права в США.' },
  { id: 19, title: 'DNA.',                  artist: 'Kendrick Lamar',  artistId: 'kendrick-lamar',  genre: 'Хип-хоп',            duration: '3:05', year: 2017, desc: 'Взрывное открытие альбома DAMN — два бита в одном треке, агрессивный флоу и декларация идентичности.' },
  { id: 20, title: 'Money Trees',           artist: 'Kendrick Lamar',  artistId: 'kendrick-lamar',  genre: 'Хип-хоп',            duration: '6:26', year: 2012, desc: 'Лиричный, меланхоличный трек с good kid, m.A.A.d city. Сэмпл Beach Boy и история взросления в Комптоне.' },

  // Radiohead
  { id: 21, title: 'Creep',                 artist: 'Radiohead',       artistId: 'radiohead',       genre: 'Альт-рок',           duration: '3:56', year: 1992, desc: 'Дебютный хит группы о чувстве отчуждённости. Несмотря на то что сама группа устала от трека, он остаётся культовым.' },
  { id: 22, title: 'Karma Police',          artist: 'Radiohead',       artistId: 'radiohead',       genre: 'Альт-рок',           duration: '4:21', year: 1997, desc: 'Тревожный поп-рок с альбома OK Computer. Пианино, нарастающий хаос и ощущение неизбежного.' },
  { id: 23, title: 'Paranoid Android',      artist: 'Radiohead',       artistId: 'radiohead',       genre: 'Альт-рок',           duration: '6:23', year: 1997, desc: 'Сюита из трёх частей, меняющих темп и настроение. Один из самых амбициозных треков в истории альт-рока.' },
  { id: 24, title: 'Exit Music (For a Film)',artist: 'Radiohead',      artistId: 'radiohead',       genre: 'Альт-рок',           duration: '4:24', year: 1997, desc: 'Написан для финальных титров Ромео и Джульетты Лурмана. Акустическое начало переходит в оглушительный финал.' },

  // Tame Impala
  { id: 25, title: 'The Less I Know the Better', artist: 'Tame Impala', artistId: 'tame-impala', genre: 'Психоделический поп', duration: '3:37', year: 2015, desc: 'Дискотечный поп-рок с альбома Currents, о ревности и упущенной любви. Один из самых узнаваемых треков десятилетия.' },
  { id: 26, title: 'Feels Like We Only Go Backwards', artist: 'Tame Impala', artistId: 'tame-impala', genre: 'Психоделический поп', duration: '3:14', year: 2012, desc: 'Психоделический поп-мечта с шелковистыми слоями синтезаторов и меланхолическим текстом о застрявших чувствах.' },
  { id: 27, title: 'Let It Happen',         artist: 'Tame Impala',     artistId: 'tame-impala',     genre: 'Психоделический поп', duration: '7:47', year: 2015, desc: 'Грандиозное открытие Currents — почти восемь минут нарастающего психоделического транса с неожиданной серединой.' },
  { id: 28, title: 'New Person, Same Old Mistakes', artist: 'Tame Impala', artistId: 'tame-impala', genre: 'Психоделический поп', duration: '6:01', year: 2015, desc: 'Закрывает Currents гипнотическим лупом — трек о знании своих ошибок и повторении их снова и снова.' },

  // Eminem
  { id: 41, title: 'Lose Yourself',         artist: 'Eminem',           artistId: 'eminem',          genre: 'Хип-хоп / Рэп',     duration: '5:26', year: 2002, desc: 'Оскароносный трек из фильма 8 Миля — гимн о том, чтобы схватить свой шанс. Один из самых мотивирующих рэп-треков всех времён.' },
  { id: 42, title: 'Rap God',               artist: 'Eminem',           artistId: 'eminem',          genre: 'Хип-хоп / Рэп',     duration: '6:04', year: 2013, desc: 'Рекордсмен по скорости флоу — в одном из куплетов Эминем произносит 97 слов за 15 секунд. Вошёл в Книгу рекордов Гиннесса.' },
  { id: 43, title: 'Stan',                  artist: 'Eminem',           artistId: 'eminem',          genre: 'Хип-хоп / Рэп',     duration: '6:44', year: 2000, desc: 'Культовое письмо одержимого фаната своему кумиру. Трек настолько повлиял на культуру, что слово «стэн» вошло в словари.' },
  { id: 44, title: 'Godzilla',              artist: 'Eminem',           artistId: 'eminem',          genre: 'Хип-хоп / Рэп',     duration: '3:28', year: 2020, desc: 'Чудовищная скорость флоу и взрывной припев. В финале трека Эминем читает более 225 слов за 31 секунду.' },

  // Linkin Park
  { id: 45, title: 'In the End',            artist: 'Linkin Park',      artistId: 'linkin-park',     genre: 'Альт-метал / Ню-метал', duration: '3:36', year: 2000, desc: 'Один из самых узнаваемых рок-треков 2000-х. Фортепианное вступление, чередование вокала и рэпа — формула, изменившая жанр.' },
  { id: 46, title: 'Numb',                  artist: 'Linkin Park',      artistId: 'linkin-park',     genre: 'Альт-метал / Ню-метал', duration: '3:05', year: 2003, desc: 'Гимн тех, кто устал соответствовать чужим ожиданиям. Один из самых просматриваемых клипов в истории YouTube.' },
  { id: 47, title: 'Crawling',              artist: 'Linkin Park',      artistId: 'linkin-park',     genre: 'Альт-метал / Ню-метал', duration: '3:29', year: 2000, desc: 'Лауреат Grammy за лучшее хард-рок исполнение. Честный трек о внутренней боли и потере контроля.' },
  { id: 48, title: 'Breaking the Habit',    artist: 'Linkin Park',      artistId: 'linkin-park',     genre: 'Альт-метал / Ню-метал', duration: '3:16', year: 2004, desc: 'Один из самых эмоциональных треков группы — о борьбе с саморазрушением. Честер Беннингтон вложил в него огромную личную боль.' },

  // Metallica
  { id: 49, title: 'Enter Sandman',         artist: 'Metallica',        artistId: 'metallica',       genre: 'Хэви-метал / Трэш-метал', duration: '5:31', year: 1991, desc: 'Открывает «Чёрный альбом» — один из самых продаваемых в истории рока. Тяжёлый рифф и образы ночных кошмаров сделали трек легендой.' },
  { id: 50, title: 'Nothing Else Matters',  artist: 'Metallica',        artistId: 'metallica',       genre: 'Хэви-метал / Трэш-метал', duration: '6:28', year: 1991, desc: 'Неожиданно нежная баллада от мастеров трэш-метала. Джеймс Хэтфилд написал её во время телефонного разговора с девушкой.' },
  { id: 51, title: 'Master of Puppets',     artist: 'Metallica',        artistId: 'metallica',       genre: 'Хэви-метал / Трэш-метал', duration: '8:35', year: 1986, desc: 'Признан одним из величайших метал-треков всех времён. После использования в сериале «Очень странные дела» переживает второй расцвет.' },
  { id: 52, title: 'One',                   artist: 'Metallica',        artistId: 'metallica',       genre: 'Хэви-метал / Трэш-метал', duration: '7:25', year: 1988, desc: 'Антивоенный трек, вдохновлённый романом «Джонни получил винтовку». Начинается тихо и взрывается одним из лучших соло Кёрка Хэммета.' },

  // Кино
  { id: 53, title: 'Группа крови',          artist: 'Кино',             artistId: 'kino',            genre: 'Русский рок',        duration: '4:59', year: 1988, desc: 'Главный гимн советского рок-андеграунда. Виктор Цой написал трек как манифест поколения, ищущего выход и правду.' },
  { id: 54, title: 'Последний герой',       artist: 'Кино',             artistId: 'kino',            genre: 'Русский рок',        duration: '3:55', year: 1989, desc: 'Меланхоличный портрет одиночки, идущего своим путём. Один из самых поэтичных и пронзительных треков Цоя.' },
  { id: 55, title: 'Звезда по имени Солнце',artist: 'Кино',             artistId: 'kino',            genre: 'Русский рок',        duration: '4:24', year: 1989, desc: 'Символ целой эпохи — трек о свободе, мечте и неизбежности. Вышел в последнем альбоме Кино при жизни Цоя.' },
  { id: 56, title: 'Перемен',               artist: 'Кино',             artistId: 'kino',            genre: 'Русский рок',        duration: '5:11', year: 1986, desc: 'Стал гимном перестройки и символом жажды перемен. Один из самых цитируемых рок-треков в русской культуре.' },

  // Земфира
  { id: 57, title: 'Почему',                artist: 'Земфира',          artistId: 'zemfira',         genre: 'Русский рок / Поп-рок', duration: '3:28', year: 1999, desc: 'Дебютный хит, взорвавший русское радио в 1999 году. Хриплый голос, гитара и прямой вопрос — формула, покорившая страну.' },
  { id: 58, title: 'Хочешь?',               artist: 'Земфира',          artistId: 'zemfira',         genre: 'Русский рок / Поп-рок', duration: '3:12', year: 1999, desc: 'Провокационный и дерзкий трек с дебютного альбома. Земфира ворвалась в музыку без извинений — этот трек тому доказательство.' },
  { id: 59, title: 'Ариведерчи',            artist: 'Земфира',          artistId: 'zemfira',         genre: 'Русский рок / Поп-рок', duration: '3:45', year: 2000, desc: 'Один из самых романтичных и одновременно горьких треков певицы. Прощание, звучащее как признание в любви.' },
  { id: 60, title: 'Искала',                artist: 'Земфира',          artistId: 'zemfira',         genre: 'Русский рок / Поп-рок', duration: '3:55', year: 2000, desc: 'Один из самых узнаваемых треков певицы — история поиска и невозможности найти. Мощный припев и характерная хрипотца сделали его классикой русского рока.' },

];

/* Популярные и новые релизы */
const POPULAR_IDS     = [41, 45, 49, 1, 53, 57, 9, 17, 5, 25];
const NEW_RELEASE_IDS = [44, 48, 52, 60, 55, 25, 2, 27, 13, 56];

/* ============================================================
   STATE
   ============================================================ */
let favorites     = loadFavorites();
let activeGenre   = 'all';
let searchQuery   = '';
let activeArtist  = null;

/* ============================================================
   LOCALSTORGE HELPERS
   ============================================================ */
function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem('mmh_favorites')) || [];
  } catch { return []; }
}
function saveFavorites() {
  localStorage.setItem('mmh_favorites', JSON.stringify(favorites));
}
function isFavorite(id) {
  return favorites.includes(id);
}
function toggleFavorite(id) {
  if (isFavorite(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  saveFavorites();
  refreshFavoriteButtons();
  renderFavorites();
}
function refreshFavoriteButtons() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    btn.textContent = isFavorite(id) ? '♥' : '♡';
    btn.classList.toggle('active', isFavorite(id));
    btn.title = isFavorite(id) ? 'Убрать из избранного' : 'В избранное';
  });
}

/* ============================================================
   CARD FACTORY
   ============================================================ */
function createTrackCard(track) {
  const card = document.createElement('article');
  card.className = 'track-card';
  card.dataset.id = track.id;

  card.innerHTML = `
    <div class="track-card__genre">${track.genre}</div>
    <div class="track-card__title" title="${track.title}">${track.title}</div>
    <div class="track-card__artist">${track.artist}</div>
    <div class="track-card__footer">
      <button class="play-btn" data-id="${track.id}" title="Слушать">▶</button>
      <span class="track-card__duration">${track.duration}</span>
      <button class="fav-btn ${isFavorite(track.id) ? 'active' : ''}"
              data-id="${track.id}"
              title="${isFavorite(track.id) ? 'Убрать из избранного' : 'В избранное'}"
              aria-label="Избранное">
        ${isFavorite(track.id) ? '♥' : '♡'}
      </button>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (!e.target.closest('.fav-btn') && !e.target.closest('.play-btn')) openModal(track);
  });

  card.querySelector('.play-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    loadAndPlay(track);
    // Toggle icon if same track
    document.querySelectorAll('.play-btn').forEach(b => b.textContent = '▶');
    if (player.isPlaying && player.currentTrack?.id === track.id)
      e.currentTarget.textContent = '⏸';
  });

  // Fav button
  card.querySelector('.fav-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(track.id);
  });

  return card;
}

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

/** Build a carousel wrapper around a list of elements */
function buildCarousel(containerId, items, cardFactory) {
  const section = document.getElementById(containerId);
  section.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'carousel';

  const track = document.createElement('div');
  track.className = 'carousel__track';

  items.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'carousel__slide';
    slide.appendChild(cardFactory(item));
    track.appendChild(slide);
  });

  const btnPrev = document.createElement('button');
  btnPrev.className = 'carousel__btn carousel__btn--prev';
  btnPrev.setAttribute('aria-label', 'Назад');
  btnPrev.innerHTML = '‹';

  const btnNext = document.createElement('button');
  btnNext.className = 'carousel__btn carousel__btn--next';
  btnNext.setAttribute('aria-label', 'Вперёд');
  btnNext.innerHTML = '›';

  const dots = document.createElement('div');
  dots.className = 'carousel__dots';

  wrapper.appendChild(track);
  section.appendChild(btnPrev);   /* outside .carousel — not clipped */
  section.appendChild(wrapper);
  section.appendChild(btnNext);   /* outside .carousel — not clipped */
  section.appendChild(dots);

  // State
  let current = 0;
  const visibleCount = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
  const maxIndex = () => Math.max(0, items.length - visibleCount());

  function updateDots() {
    dots.innerHTML = '';
    const pages = maxIndex() + 1;
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('span');
      d.className = 'carousel__dot' + (i === current ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dots.appendChild(d);
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, maxIndex()));
    const slideWidth = track.querySelector('.carousel__slide').offsetWidth + 16; // gap
    track.style.transform = `translateX(-${current * slideWidth}px)`;
    btnPrev.disabled = current === 0;
    btnNext.disabled = current >= maxIndex();
    dots.querySelectorAll('.carousel__dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  btnPrev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  btnNext.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  window.addEventListener('resize', () => { current = 0; goTo(0); updateDots(); });

  updateDots();
  goTo(0);

  // Auto-advance every 4 seconds
  let autoTimer = setInterval(() => {
    const next = current >= maxIndex() ? 0 : current + 1;
    goTo(next);
  }, 4000);

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      const next = current >= maxIndex() ? 0 : current + 1;
      goTo(next);
    }, 4000);
  }
}

/** Home — popular tracks */
function renderPopularTracks() {
  const tracks = POPULAR_IDS.map(id => TRACKS.find(t => t.id === id)).filter(Boolean);
  buildCarousel('popular-tracks', tracks, createTrackCard);
}

/** Home — new releases */
function renderNewReleases() {
  const tracks = NEW_RELEASE_IDS.map(id => TRACKS.find(t => t.id === id)).filter(Boolean);
  buildCarousel('new-releases', tracks, createTrackCard);
}

/** Home — featured artists */
function renderFeaturedArtists() {
  buildCarousel('featured-artists', ARTISTS, (artist) => {
    const card = document.createElement('article');
    card.className = 'artist-card';
    card.innerHTML = `
      <div class="artist-card__name">${artist.name}</div>
      <div class="artist-card__genre">${artist.genre}</div>
      <div class="artist-card__desc">${artist.desc.substring(0, 90)}…</div>
    `;
    card.addEventListener('click', () => {
      scrollToSection('artists');
      setTimeout(() => selectArtist(artist.id), 400);
    });
    return card;
  });
}

/** All tracks with filter + search */
function renderAllTracks() {
  const grid    = document.getElementById('tracks-grid');
  const noRes   = document.getElementById('no-results');
  grid.innerHTML = '';

  const filtered = TRACKS.filter(t => {
    const matchGenre  = activeGenre === 'all' || t.genre === activeGenre;
    const matchSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        t.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  if (filtered.length === 0) {
    noRes.classList.remove('hidden');
  } else {
    noRes.classList.add('hidden');
    filtered.forEach(t => grid.appendChild(createTrackCard(t)));
  }
}

/** Genre filter — single button with hover dropdown */
function renderGenreFilters() {
  const container = document.getElementById('genre-filters');
  container.innerHTML = '';

  const genres = [...new Set(TRACKS.map(t => t.genre))];

  const wrapper = document.createElement('div');
  wrapper.className = 'genre-dropdown';

  const trigger = document.createElement('button');
  trigger.className = 'genre-btn genre-btn--trigger';
  trigger.id = 'genre-trigger';
  trigger.innerHTML = `<span id="genre-label">Все жанры</span> <span class="genre-arrow">▾</span>`;

  const menu = document.createElement('div');
  menu.className = 'genre-menu';
  menu.id = 'genre-menu';

  // "All" option
  const allItem = document.createElement('button');
  allItem.className = 'genre-option' + (activeGenre === 'all' ? ' active' : '');
  allItem.textContent = 'Все жанры';
  allItem.addEventListener('click', () => selectGenre('all', 'Все жанры', menu));
  menu.appendChild(allItem);

  genres.forEach(genre => {
    const item = document.createElement('button');
    item.className = 'genre-option' + (activeGenre === genre ? ' active' : '');
    item.textContent = genre;
    item.addEventListener('click', () => selectGenre(genre, genre, menu));
    menu.appendChild(item);
  });

  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);
  container.appendChild(wrapper);

  // Toggle on click (works on both mouse and touch)
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  document.addEventListener('click', () => menu.classList.remove('open'));
}

function selectGenre(genre, label, menu) {
  activeGenre = genre;
  document.getElementById('genre-label').textContent = label;
  menu.querySelectorAll('.genre-option').forEach(o => o.classList.remove('active'));
  menu.querySelectorAll('.genre-option').forEach(o => {
    if (o.textContent === label) o.classList.add('active');
  });
  menu.classList.remove('open');
  renderAllTracks();
}

/** Artists section */
function renderArtists() {
  const list = document.getElementById('artists-list');
  list.innerHTML = '';
  ARTISTS.forEach(artist => {
    const card = document.createElement('article');
    card.className = 'artist-card';
    card.id = 'artist-' + artist.id;
    card.innerHTML = `
      <div class="artist-card__name">${artist.name}</div>
      <div class="artist-card__genre">${artist.genre}</div>
      <div class="artist-card__desc">${artist.desc}</div>
    `;
    card.addEventListener('click', () => selectArtist(artist.id));
    list.appendChild(card);
  });
}

function selectArtist(artistId) {
  // Toggle off if already active
  if (activeArtist === artistId) {
    activeArtist = null;
    document.querySelectorAll('.artist-card').forEach(c => c.classList.remove('active'));
    document.getElementById('artist-tracks').classList.add('hidden');
    return;
  }

  activeArtist = artistId;
  document.querySelectorAll('.artist-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.getElementById('artist-' + artistId);
  if (activeCard) activeCard.classList.add('active');

  const artist = ARTISTS.find(a => a.id === artistId);
  const artistTracks = TRACKS.filter(t => t.artistId === artistId);

  const container = document.getElementById('artist-tracks');
  container.classList.remove('hidden');
  container.innerHTML = `<div class="artist-tracks__title">Треки: ${artist.name}</div>`;
  const grid = document.createElement('div');
  grid.className = 'tracks-grid';
  artistTracks.forEach(t => grid.appendChild(createTrackCard(t)));
  container.appendChild(grid);
}

/** Favorites */
function renderFavorites() {
  const grid   = document.getElementById('favorites-grid');
  const noFav  = document.getElementById('no-favorites');
  grid.innerHTML = '';

  if (favorites.length === 0) {
    noFav.classList.remove('hidden');
  } else {
    noFav.classList.add('hidden');
    favorites.forEach(id => {
      const track = TRACKS.find(t => t.id === id);
      if (track) grid.appendChild(createTrackCard(track));
    });
  }
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(track) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="modal__genre">${track.genre}</div>
    <div class="modal__title">${track.title}</div>
    <div class="modal__artist">${track.artist}</div>
    <div class="modal__divider"></div>
    <div class="modal__desc">${track.desc}</div>
    <div class="modal__meta">
      <div class="modal__meta-item"><strong>Длительность</strong>${track.duration}</div>
      <div class="modal__meta-item"><strong>Год</strong>${track.year}</div>
      <div class="modal__meta-item"><strong>Жанр</strong>${track.genre}</div>
    </div>
    <div class="modal__player">
      <div class="modal__player-label">Слушать трек</div>
      <div class="modal__player-controls">
        <button class="mp-btn mp-btn--play" id="modal-play-btn" title="Воспроизвести" data-id="${track.id}">▶</button>
        <div class="mini-player__progress">
          <span class="mp-time" id="modal-cur">0:00</span>
          <div class="progress-bar" id="modal-progress-bar">
            <div class="progress-fill" id="modal-progress-fill"></div>
          </div>
          <span class="mp-time mp-time--end">${track.duration}</span>
        </div>
      </div>
      <audio id="modal-audio" style="display:none">
        <!-- 🎵 АУДИО: замените src на путь к файлу, например: src="audio/${track.id}.mp3" -->
        <!-- Строка ниже — заглушка для демонстрации. Удалите её при добавлении реальных файлов. -->
      </audio>
    </div>
  `;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Wire up modal player button
  document.getElementById('modal-play-btn').addEventListener('click', () => {
    loadAndPlay(track);
    closeModal();
  });

  // Seek on progress bar click
  document.getElementById('modal-progress-bar').addEventListener('click', (e) => {
    if (player.currentTrack?.id === track.id) {
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      player.simTime = ratio * player.simDuration;
    }
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  // Close mobile nav
  closeNav();
}

/* ============================================================
   ACTIVE NAV HIGHLIGHT (on scroll)
   ============================================================ */
function updateActiveNav() {
  const sections  = ['home', 'tracks', 'artists', 'favorites'];
  const scrollPos = window.scrollY + 100;

  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) current = id;
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function closeNav() {
  document.getElementById('nav').classList.remove('open');
  document.getElementById('burger').classList.remove('open');
}



/* ============================================================
   AUDIO PLAYER ENGINE
   ============================================================
   Структура player.currentTrack содержит объект трека.
   player.audio — элемент <audio>. Когда добавите реальные файлы,
   просто установите src в loadAndPlay() и всё заработает автоматически.
   ============================================================ */
const player = {
  audio: new Audio(),
  currentTrack: null,
  isPlaying: false,
  simTime: 0,       // симулированное время (пока нет реального файла)
  simDuration: 0,   // длительность в секундах из строки "3:45"
  simTimer: null,
};

/** Парсит строку "3:45" → 225 (секунды) */
function parseDuration(str) {
  const [m, s] = str.split(':').map(Number);
  return m * 60 + (s || 0);
}

/** Форматирует секунды → "3:45" */
function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/** Загружает трек и начинает воспроизведение */
function loadAndPlay(track) {
  // Если тот же трек — просто переключить пауза/воспроизведение
  if (player.currentTrack?.id === track.id) {
    togglePlayPause();
    return;
  }

  // Остановить предыдущее
  clearInterval(player.simTimer);
  player.audio.pause();

  // Новый трек
  player.currentTrack = track;
  player.simTime = 0;
  player.simDuration = parseDuration(track.duration);
  player.isPlaying = true;

  // ── Реальный аудиофайл ──────────────────────────────────────
  const audioSrc = `audio/${track.id}.mp3`;
  player.audio.src = audioSrc;
  player.audio.load();
  player.audio.play().then(() => {
    // Файл найден — реальное воспроизведение, симуляция не нужна
    clearInterval(player.simTimer);
  }).catch(() => {
    // Файл не найден — запускаем симуляцию прогресса
    startSim();
  });
  // ────────────────────────────────────────────────────────────

  // Обновляем мини-плеер
  showMiniPlayer(track);
  updatePlayerUI();
}

/** Симуляция прогресса (удалите когда подключите реальные файлы) */
function startSim() {
  clearInterval(player.simTimer);
  player.simTimer = setInterval(() => {
    if (!player.isPlaying) return;
    player.simTime += 0.5;
    if (player.simTime >= player.simDuration) {
      player.simTime = 0;
      playNext();
      return;
    }
    updateProgress();
  }, 500);
}

function togglePlayPause() {
  player.isPlaying = !player.isPlaying;
  if (player.audio.src && !player.audio.error) {
    player.isPlaying ? player.audio.play() : player.audio.pause();
  }
  updatePlayerUI();
}

function playNext() {
  const idx = TRACKS.findIndex(t => t.id === player.currentTrack?.id);
  const next = TRACKS[(idx + 1) % TRACKS.length];
  loadAndPlay(next);
}

function playPrev() {
  if (player.simTime > 3) { player.simTime = 0; updateProgress(); return; }
  const idx = TRACKS.findIndex(t => t.id === player.currentTrack?.id);
  const prev = TRACKS[(idx - 1 + TRACKS.length) % TRACKS.length];
  loadAndPlay(prev);
}

function showMiniPlayer(track) {
  const mp = document.getElementById('mini-player');
  document.getElementById('mp-title').textContent  = track.title;
  document.getElementById('mp-artist').textContent = track.artist;
  document.getElementById('mp-dur').textContent    = track.duration;
  mp.classList.add('visible');
}

function updateProgress() {
  const ratio = player.simDuration > 0 ? player.simTime / player.simDuration : 0;
  const pct   = (ratio * 100).toFixed(1) + '%';
  const cur   = fmtTime(player.simTime);

  // Mini-player
  const mpFill = document.getElementById('progress-fill');
  const mpCur  = document.getElementById('mp-cur');
  if (mpFill) mpFill.style.width = pct;
  if (mpCur)  mpCur.textContent  = cur;
}

function updatePlayerUI() {
  const icon = player.isPlaying ? '⏸' : '▶';
  const mpPlay = document.getElementById('mp-play');
  if (mpPlay) mpPlay.textContent = icon;
}

/* Wire up real audio events when file is available */
player.audio.addEventListener('timeupdate', () => {
  if (player.audio.duration) {
    player.simTime     = player.audio.currentTime;
    player.simDuration = player.audio.duration;
    updateProgress();
  }
});
player.audio.addEventListener('ended', playNext);
player.audio.addEventListener('play',  () => { player.isPlaying = true;  updatePlayerUI(); });
player.audio.addEventListener('pause', () => { player.isPlaying = false; updatePlayerUI(); });


document.addEventListener('DOMContentLoaded', () => {

  /* Render all sections */
  renderPopularTracks();
  renderNewReleases();
  renderFeaturedArtists();
  renderGenreFilters();
  renderAllTracks();
  renderArtists();
  renderFavorites();

  /* Search */
  document.getElementById('search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderAllTracks();
  });

  /* Modal close */
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* Burger menu */
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
    document.getElementById('burger').classList.toggle('open');
  });

  /* Nav links smooth scroll */
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(link.dataset.section);
    });
  });

  /* Scroll events */
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();



  /* Mini-player controls */
  document.getElementById('mp-play').addEventListener('click', togglePlayPause);
  document.getElementById('mp-next').addEventListener('click', playNext);
  document.getElementById('mp-prev').addEventListener('click', playPrev);
  document.getElementById('mp-close').addEventListener('click', () => {
    player.isPlaying = false;
    clearInterval(player.simTimer);
    player.audio.pause();
    document.getElementById('mini-player').classList.remove('visible');
  });
  document.getElementById('progress-bar').addEventListener('click', (e) => {
    const rect  = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    player.simTime = ratio * player.simDuration;
    if (player.audio.duration) player.audio.currentTime = ratio * player.audio.duration;
    updateProgress();
  });

  /* Artist tracks section — start hidden */
  document.getElementById('artist-tracks').classList.add('hidden');
});
