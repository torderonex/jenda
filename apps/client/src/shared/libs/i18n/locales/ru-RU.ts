export default {
  sidebar: {
    badge: 'free',
    input: 'Поиск',
    section: 'воркспейс',
    projects: 'проекты',
    boards: 'Все доски',
    templates: 'Шаблоны',
    notes: 'Заметки',
    workflows: 'Процессы',
    members: 'Участники',
    settings: 'Настройки',
    integrations: 'Интеграции',
    help: {
      title: 'Помощь',
      items: 'Поддержать разработчиков | Сочетания клавиш | Присоединяйтесь к нам',
    },
    plan: {
      btn: 'Подробнее',
      title: 'Премиум план',
      description: 'досок осталось',
      tooltip: '1/3 бесплатных workspaces',
    },
    soon: 'скоро',
  },
  header: {
    navigator: {
      question: 'Хоткеи',
      messages: 'Сообщения',
    },
    user: {
      welcome: 'Перейти на главную',
      logout: 'Выйти',
    },
    share: 'Поделиться',
  },
  boards: {
    create: 'Добавить доску | Добавить новую доску',
    routeCreate: 'Добавить доску',
    remove: 'Удалить',
    filters: {
      sort: {
        title: 'Отсортированно по',
        name: 'Названию',
        tasks: 'Задачам',
        date: 'Дате создания',
        default: 'Умолчанию',
      },
      advanced: {
        title: 'Расширенный фильтр',
        empty: 'Таких фильтров нет :/',
        statuses: {
          title: 'Статусы',
          arr: [
            {
              value: 'active',
              label: 'Активно',
            },
            {
              value: 'archived',
              label: 'В архиве',
            },
          ],
        },
        labels: {
          title: 'Лейблы',
        },
      },
      search: 'Найти доску...',
    },
    forms: {
      creating: {
        title: 'Создание канбана',
        description: 'Вы можете создать новую доску чтобы управлять задачами',
        name: {
          label: 'Название',
          placeholder: 'Введите название доски',
        },
        labels: {
          label: 'Лейблы',
          placeholder: 'Введите лейбл',
          description: 'Начните писать лейбл и нажмите \'Enter\', чтобы он записался в ваши существующие лейблы',
          alert: '📝 Как изменить цвет лейбла? | Укажите название лейбла, а затем — [#нужный цвет]. Например: jenda [#000000].',
        },
        btns: 'Отмена | Создать',
      },
    },
    empty: {
      title: 'Нет досок',
      description: 'Создайте свою первую доску и начните работать',
    },
    card: {
      date_updated: 'Обновлено',
    },
    chart: {
      title_boards: 'Созданные доски',
      description_boards:
        'Создавайте, делитесь, а затем анализируйте свою активность на Jenda',
      title_tasks: 'Ваши задачи',
      description_tasks: 'Решайте и завершайте начатые задачи',
    },
    columns: ['Название доски', 'Лейблы', 'Участники', 'Задачи', 'Оценка', 'Дата создания'],
  },
  notes: {
    create: 'Добавить заметку | Добавить новую заметку',
    remove: 'Удалить',
    filters: {
      sort: {
        title: 'Отсортированно по',
        date: 'Дате обновления',
        default: 'Умолчанию',
      },
      search: 'Найти заметку...',
    },
    empty: {
      title: 'Нет заметок',
      description: 'Создайте свою первую заметку и делитесь мыслями',
    },
    columns: ['Заголовок заметки', 'Содержимое', 'Создатель', 'Участники', 'Дата обновления'],
  },
  note: {
    lastModified: 'Изменено',
    actions: 'Линтер | Удалить заметку',
    editor: {
      placeholder: 'Напишите что-нибудь, \'/\' для команд…',
      menu: {
        bold: 'Жирный',
        italic: 'Курсивный',
        underline: 'Подчеркивание',
        strike: 'Зачеркивание',
        code: 'Код',
      },
      nodes: {
        heading1: {
          title: 'Заголовок 1',
          description: 'Большой заголовок раздела.',
        },
        heading2: {
          title: 'Заголовок 2',
          description: 'Средний заголовок раздела.',
        },
        heading3: {
          title: 'Заголовок 3',
          description: 'Маленький заголовок раздела.',
        },
        paragraph: {
          title: 'Абзац',
          description: 'Просто начните печатать обычный текст.',
        },
        bulletList: {
          title: 'Маркированный список',
          description: 'Создать маркированный список.',
        },
        orderedList: {
          title: 'Нумерованный список',
          description: 'Создать нумерованный список.',
        },
        taskList: {
          title: 'Список задач',
          description: 'Создать список задач.',
        },
        blockquote: {
          title: 'Цитата',
          description: 'Добавить цитату.',
        },
        alignLeft: {
          title: 'Выровнять по левому краю',
          description: 'Выровнять текст по левому краю.',
        },
        alignCenter: {
          title: 'Выровнять по центру',
          description: 'Выровнять текст по центру.',
        },
        alignRight: {
          title: 'Выровнять по правому краю',
          description: 'Выровнять текст по правому краю.',
        },
      },
    },
  },
  picker: {
    placeholder: 'Кастомный цвет',
    tabs: 'Однородные | Градиенты',
  },
  common: {
    remove: {
      warning: 'Это действие необратимо.',
      btns: 'Отмена | Удалить',
    },
  },
  workflows: {
    create: 'Добавить процесс | Добавить новый процесс',
    remove: 'Удалить',
    filters: {
      sort: {
        title: 'Отсортированно по',
        date: 'Дате обновления',
        default: 'Умолчанию',
      },
      search: 'Найти процесс...',
    },
    forms: {
      creating: {
        title: 'Создание процесса',
        description_main: 'Создайте новый процесс чтобы оптимизировать свою работу',
        name: {
          label: 'Название',
          placeholder: 'Введите название процесса',
        },
        description: {
          label: 'Описание',
          placeholder: 'Опишите свой новый процесс',
        },
        alert: 'Процесс при создании будет находиться в | Чтобы он полностью был production ready, процесс должен быть переведен в',
        btns: 'Отмена | Продолжить',
      },
    },
    section: {
      all: 'Все процессы',
      recent: 'Последние',
    },
    status: {
      draft: 'Черновик',
      production: 'Продакшен',
    },
    runs: '{n} запусков | {n} запуск | {n} запуска',
    empty: {
      title: 'Нет процессов',
      description: 'Создайте свой первый процесс и автоматизируйте задачи',
    },
    columns: ['Название процесса', 'Описание', 'Создатель', 'Запуски', 'Статус', 'Дата обновления'],
  },
  workflow: {
    alert: {
      status: 'Этот процесс находится в статусе',
      btn: 'Сделать публичным',
    },
    remove: {
      title: 'Удаление процесса',
      description: 'Вы действительно хотите удалить этот процесс? Все связанные с ним данные будут удалены.',
    },
    handlers: {
      hand: 'Рука',
      move: 'Перемещение',
      lock: 'Блокировка',
      layout: 'AI power: Размещение',
    },
    actions: 'Логи | Запустить',
    panel: {
      open: 'Открыть панель',
      close: 'Закрыть панель',
    },
    empty: 'Перетащите элементы в эту область',
    nodes: {
      title: 'Все узлы',
      description: 'Тут можно выбрать любой из узлов.',
      main: 'Основные',
      effects: 'Эффекты',
      links: 'Полезные ссылки',
      docs: {
        title: 'Документация',
        description: 'Узнайте, как управлять узлами в системе.',
      },
      items: [
        {
          title: 'Триггер',
          description: 'Начало процесса',
        },
        {
          title: 'Действие',
          description: 'Выполняет операцию в процессе',
        },
        {
          title: 'Уведомление',
          description: 'Отправляет сообщение',
        },
        {
          title: 'Условие',
          description: 'Проверяет выполнение условий',
        },
        {
          title: 'Задержка',
          description: 'Приостанавливает выполнение',
        },
        {
          title: 'Формула',
          description: 'Выполняет вычисления',
        },
        {
          title: 'Конфетти',
          description: 'Создает эффект конфетти',
        },
      ],
      alert: 'Задайте действия',
    },
  },
  templates: {
    title: 'Шаблоны',
    description:
      'Выберите один из доступных шаблонов, чтобы создать ваш проект',
    import: 'Нажмите или перетащите файлы для импорта. Поддерживает файлы',
    community: 'Шаблоны сообщества',
    create: 'Создать шаблон',
    user: 'создатель',
    items: [
      {
        title: 'Базовый шаблон',
        tag: 'Рекомендуемый',
        description:
          'Создайте базовый проект с помощью шаблона "Базовый шаблон"',
        date: '12 июня 2024',
      },
      {
        title: 'Дорожная карта',
        tag: 'Новый',
        description:
          'Создайте проект на основе нашего шаблона "Дорожная карта"',
        date: '18 июня 2024',
      },
      {
        title: 'Веб-разработка',
        tag: 'Новый',
        description:
          'Создайте базовый проект с помощью шаблона "Веб-разработка"',
        date: '16 июля 2024',
      },
    ],
  },
  members: {
    title: 'Участники рабочего пространства',
    description:
      'Участники могут просматривать и присоединяться к доскам рабочего пространства, а также создавать новые доски в этом пространстве.',
    content: {
      all: {
        title: 'Пригласить пользователей',
        description:
          'Каждый, у кого есть ссылка-приглашение, может присоединиться к этому бесплатному рабочему пространству. Ссылка может быть отключена и в любой момент воссоздана. Ожидающие приглашения учитываются в лимите в 10 участников.',
        btn: 'Все участники',
      },
      guests: {
        title: 'Гости',
        description:
          'Гости могут только просматривать и редактировать доски, к которым они были добавлены.',
        btn: 'Гости',
      },
    },
    role: {
      member: 'участник',
      admin: 'админ',
    },
    btns: {
      leave: 'Покинуть',
      view: 'Просмотреть доски',
    },
  },
  analytics: {
    title: 'Аналитика рабочего пространства',
    description: 'Просматривайте и анализируйте свою активность на Jenda',
    charts: {
      users: {
        name: 'Всего пользователей',
        description: 'Количество пользователей в рабочем пространстве',
      },
      online: {
        name: 'Активность в рабочем пространстве',
      },
      tasks: {
        name: 'Сводка по задачам',
        dataset: {
          names: ['Не выполнено', 'Выполнено'],
        },
      },
      boards: {
        name: 'Созданные доски',
      },
    },
    badges: ['Удобно', 'Информативно', 'В любое время'],
    share: {
      btn: 'Поделиться',
      description: 'вы можете легко сделать скриншот и отправить кому угодно',
    },
  },
  settings: {
    title: 'Настройки',
    description:
      'Управляйте настройками своей учетной записи и установите предпочтения.',
    lang: {
      label: 'Язык',
      about: 'Это язык, который будет использоваться в панели инструментов.',
    },
    theme: {
      label: 'Тема',
      about: 'Выберите тему для панели инструментов.',
      variants: {
        light: 'Светлая',
        dark: 'Темная',
        auto: 'Системная',
      },
      btn: 'Обновить настройки',
    },
  },
  sheet: {
    title: 'Создать доску',
    description: 'Новая доска позволит вам создавать задачи для их решения.',
    form: {
      name: {
        label: 'Название доски',
        placeholder: 'например, "Jenda"',
      },
      description: {
        label: 'Описание доски',
        placeholder: 'например, доска для разработки нашей компании',
      },
      submit: 'Создать доску',
    },
  },
  authentication: {
    login: {
      title: 'С возвращением',
      description: 'Введите свои данные ниже, чтобы войти в свой аккаунт',
      btn: 'Продолжить',
      proposal: 'Ещё нет аккаунта?',
      route: 'Зарегистрируйтесь',
    },
    registration: {
      title: 'Создайте аккаунт',
      description: 'Введите свои данные ниже, чтобы создать аккаунт',
      btn: 'Продолжить',
      proposal: 'Уже есть аккаунт?',
      route: 'Войдите',
    },
    confirm: {
      title: 'Подтвердите почту',
      description: 'Введите код подтверждения, отправленный на вашу почту',
      btn: 'Подтвердить',
      alert: 'Мы заботимся о вашей безопасности. Вы можете смело нам доверять!',
      proposal: 'Не получили код?',
      route: 'Отправить повторно',
    },
    workspace: {
      creating: {
        title: 'Создайте воркспейс',
        logo: {
          label: 'Выберите логотип',
          btn: 'Выбрать картинку | Удалить',
          description: '*.png, *.jpeg до 10 МБ, размером не менее 400 x 400 пикселей',
        },
        alert: 'Помните, если вы не выберете лого, то jenda автоматически создаст его для вас',
        form: {
          name: {
            label: 'Название',
            placeholder: 'Введите название',
          },
          url: {
            label: 'Удобная ссылка',
          },
        },
      },
      choosing: {
        title: 'Выберите воркспейс',
        description: 'Чем активнее ваша команда использует Jenda, тем эффективнее становятся ваши рабочие пространства. | Jenda преображает совместную работу в общих рабочих пространствах. От организации проектов и управления задачами до объединения обсуждений и создания эффективных процессов.',
        label: 'Доступные воркспейсы',
      },
      route: 'Продолжить',
    },
    form: {
      email: 'Почта',
      password: 'Пароль',
      otp: 'Вам нужно ввести последовательность односимвольных числовых значений.',
    },
    line: 'Или продолжите с',
    privacy: [
      'Нажав на продолжить, вы соглашаетесь с нашими',
      'Нажав на кнопку "войти", вы соглашаетесь с нашими',
      'Условиями предоставления услуг',
      'и',
      'Политикой конфиденциальности.',
    ],
    back: 'На главную',
    auth_alert:
      'aвторизация через google будет заменена на gitlab после 28.02.2025',
  },
  kanban: {
    sorting: {
      all: 'Все задачи',
      activity: 'Aктивность',
      workload: 'Нагрузка',
    },
    active: 'aктивно',
    archived: 'в архиве',
    new: 'Добавить новую колонку',
    cards: {
      add: 'Добавить карточку',
    },
    sheet: {
      column: {
        title: 'Добавить новую колонку',
        description:
          'При создании новой колонки вы можете создавать карточки и использовать доску канбан.',
        form: {
          label: 'Название колонки',
          placeholder: 'Введите название колонки',
          submit: 'Создать колонку',
        },
      },
    },
    configuration: {
      title: 'Настройте свою доску',
      description: 'Настройте доску для вашего удобства',
      name: 'Название и цветовой индикатор вашего проекта',
      users: 'Участники',
      status: 'Выберите статус вашего проекта',
      clear: 'Очистить доску',
      update: 'Применить изменения',
    },
  },
  welcome: {
    header: {
      links: [
        'О нас',
        'Канбан',
        'Совместная работа',
        'Активность',
        'Участники',
        'Чаты',
      ],
      login: 'Войти',
      reg: 'Зарегистрироваться',
    },
    about: {
      tagline: 'Ваш путь к совершенству',
      description:
        'Jenda — это облачная программа для эффективного управления проектами и задачами как в команде, так и индивидуально.',
      badge: 'Основные функции: Доски задач, Отслеживание в реальном времени',
      badge_mobile: 'Ядро: Проекты, Коллаборации, ...',
      btn: 'Зарегистрироваться',
    },
    marketing: {
      heading: 'Всё удобство в одном месте',
      cards: [
        {
          title: 'Канбан 🧑‍💻',
          description:
            'Организуйте и визуализируйте свои проекты с помощью нашей интуитивно понятной доски Канбан.',
        },
        {
          title: 'Совместная работа 👥',
          description: 'Улучшите свою командную работу!',
        },
        {
          title: 'Участники 🌐',
          description:
            'Пригласите новых участников в ваши проекты. Наслаждайтесь разработкой вместе!',
        },
        {
          title: 'Активность 👔',
          description: 'Анализируйте вашу активность и двигайтесь вперед.',
        },
        {
          title: 'Чаты 💬',
          description: 'Общайтесь, делитесь, обсуждайте. Удобство для вас 😉',
        },
      ],
    },
    marquee: [
      'Мы знаем',
      'Вы наслаждаетесь',
      '👑 Лучший аналог в РФ',
      'Open source',
      '👻 У нас проще',
      'Без рекламы',
      'Совершенство рядом 🤟',
    ],
    kanban: {
      name: 'Пользуйтесь kanban\'ом',
      heading: 'Что вы знаете о нашем kanban? 👀',
      about: `Kanban – это простой и эффективный способ управлять проектами, задачами и временем. Визуализируя
              ваши задачи на доске, вы легко сможете отслеживать прогресс и видеть, что нужно сделать дальше.`,
      writer: 'Попробуйте освоить мир на полную с нашим kanban',
      review: {
        name: 'Александр Пешков',
        status: 'Frontend-разработчик, Open source энтузиаст',
        comment:
          'Я использую канбан каждый день и советую всем попробовать. Это потрясающе!',
      },
    },
    collaborative: {
      name: 'Вместе легче',
      heading: 'Каждая задача – это шаг к 🤝 общему успеху!',
      about: `Наш сервис создан для команд, которые стремятся к успеху через сотрудничество. С его помощью каждый участник может легко отслеживать задачи, делиться идеями и вместе с коллегами двигаться к общей цели.`,
      writer: 'Подключайтесь и двигайтесь к успеху всей командой!',
      review: {
        name: 'Багаутдинов Айрат',
        status: 'Backend-разработчик',
        comment:
          'Работать совместно это круто! Jenda предоставляет такую шикарную возможность.',
      },
    },
    activity: {
      heading: 'Прогресс в действии',
      about:
        'Вы можете просматривать статистику по завершённым задачам и открытым доскам. Это позволяет отслеживать прогресс команды, видеть выполненные задачи, а также управлять текущими задачами и проектами. ',
    },
    members: {
      name: 'Команда участников',
      heading: 'Работа в команде дружных 😉 разработчиков',
      about:
        'Наш сервис дает возможность создавать и управлять командами, добавлять участников, делиться задачами и получать обратную связь в реальном времени.',
      writer: 'Участвуй и будь в центре внимания!',
      review: {
        name: 'Александр Пешков',
        status: 'Frontend-разработчик, Open source энтузиаст',
        comment:
          'Прекрасный инструмент для совместной работы. Удобный интерфейс и полезные функции! 👍 Работаю вместе с друзьями',
      },
    },
    chats: {
      name: 'Легкость общения',
      heading: 'Как часто вы коммуницируете со своей командой ? 🤔',
      about: `Наши чаты позволяют вам легко обмениваться сообщениями, делиться идеями и оставаться на одной волне с командой. Оставайтесь на связи и работайте более эффективно!`,
      writer: 'Делитесь своими мыслями и идеями в наших удобных чатах!',
      review: {
        name: 'Багаутдинов Айрат',
        status: 'Backend-разработчик',
        comment:
          'Чаты здесь действительно удобные! Легко обмениваться идеями и быстро решать вопросы с командой.',
      },
    },
    footer:
      'облачная программа для управления задачами. Исходный код доступен на',
    mobile: {
      section_blocks: [
        {
          title: 'О нас',
          description: 'Познакомьтесь с Jenda',
        },
        {
          title: 'Канбан',
          description: 'Организуйте проекты с канбан',
        },
        {
          title: 'Совместная работа',
          description: 'Улучшите свою командную работу!',
        },
        {
          title: 'Участники',
          description: 'Пригласите участников в проекты',
        },
        {
          title: 'Активность',
          description: 'Анализируйте вашу активность',
        },
        {
          title: 'Чаты',
          description: 'Общайтесь, делитесь, обсуждайте',
        },
      ],
      links: [
        {
          title: 'продукт',
        },
        {
          title: 'свяжитесь с нами в Телеграм',
        },
      ],
    },
  },
  not_found: {
    title: 'Не найдено',
    description: 'Страница, которую вы искали, не найдена',
    btn: 'На главную',
  },
  dialogs: {
    share: {
      title: 'Поделиться ссылкой',
      description: 'Каждый, у кого есть эта ссылка, сможет присоединиться',
      close: 'Отмена',
    },
    hotkeys: {
      title: 'Хоткеи',
      badges: 'Открыть поиск в рабочей области | Перейти к главной странице | Выйти из сервиса',
      alert: 'Вы часто будете видеть { badge } ниже. Это обозначает cmd на Mac и ctrl на Windows и Linux.',
    },
  },
  validations: {
    email: 'Почта',
    password: 'Пароль',
    pin: 'Код подтверждения',
    name: 'Название',
    url: 'Удобная ссылка',
  },
  search: {
    placeholder: 'Введите что-нибудь для поиска...',
    empty: 'Ничего не найдено',
    recently: 'Недавние',
    links: 'Ссылки',
    select: 'Выбрать',
    open: 'Открыть',
    close: 'Закрыть',
  },
  workspace: {
    popover: {
      members: '{n} участников | {n} участник | {n} участника',
      section: 'Управление',
      pay: 'Тарифы и оплата',
      invite: 'Пригласить в проект',
      team: 'Команда',
      settings: 'Поменять информацию',
      active: 'Активно',
      archive: 'В архиве',
    },
  },
  table: {
    row_from_all: 'из',
    row_selected: 'строк выбрано(а)',
    rows_on_page: 'Строк на странице',
    page: 'Страница',
    empty: 'Таблица пуста',
  },
}
