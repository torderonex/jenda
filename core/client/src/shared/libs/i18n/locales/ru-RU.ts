export default {
  sidebar: {
    badge: 'free',
    input: 'Поиск',
    section: 'воркспейс',
    projects: 'проекты',
    boards: 'Канбаны',
    templates: 'Шаблоны',
    tasks: 'Задачи',
    analytics: 'Аналитика',
    members: 'Участники',
    settings: 'Настройки',
    integrations: 'Интеграции',
    help: {
      title: 'Помощь',
      items: 'Поддержать разработчиков | Сочетания клавиш | Присоединяйтесь к нам',
    },
    plan: {
      btn: 'Приобрести',
      title: 'Премиум план',
      description: 'проектов осталось',
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
    title: 'Доски в этой команде',
    description:
      'Все ваши активные доски находятся здесь, вы можете переключаться и работать с ними',
    create: 'Создать новую доску',
    filter: {
      input: 'Найти доску...',
      popularity: 'По популярности',
      tooltips: {
        first_sort: 'Сортировать доски по популярности',
        second_sort: 'Последние доски',
      },
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
      btn: 'Войти',
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
      'aвторизация через google будет заменена на gitlab после 28.12.2024',
  },
  kanban: {
    sorting: {
      all: 'Все задачи',
      activity: 'Aктивность',
      workload: 'Нагрузка',
    },
    statuses: ['в работе', 'в архиве', 'закрыто'],
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
}