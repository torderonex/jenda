export default {
  sidebar: {
    badge: 'free',
    input: 'Поиск',
    section: 'рабочее пространство',
    boards: 'Доски',
    templates: 'Шаблоны',
    members: 'Участники',
    settings: 'Настройки',
    plan: 'Обновите свой план'
  },
  header: {
    upgrade: 'Обновите до "Pro"',
    collaboration: 'Пригласить участников',
    name: 'Тестовое рабочее пространство'
  },
  boards: {
    title: 'Доски в этой команде',
    description: 'Все ваши активные доски находятся здесь, вы можете переключаться и работать с ними',
    create: 'Создать новую доску',
    filter: {
      input: 'Найти доску...',
      popularity: 'По популярности',
      tooltips: {
        first_sort: 'Сортировать доски по популярности',
        second_sort: 'Последние доски'
      }
    },
    card: {
      date_updated: 'Обновлено'
    },
    chart: {
      title_boards: 'Созданные доски',
      description_boards: 'Создавайте, делитесь, а затем анализируйте свою активность на Jenda',
      title_tasks: 'Ваши задачи',
      description_tasks: 'Решайте и завершайте начатые задачи'
    }
  },
  templates: {
    title: 'Шаблоны',
    description: 'Выберите один из доступных шаблонов, чтобы создать ваш проект',
    user: 'создатель',
    items: [
      {
        title: 'Базовый шаблон',
        tag: 'Рекомендуемый',
        description: 'Создайте базовый проект с помощью шаблона "Базовый шаблон"',
        date: '12 июня 2024'
      },
      {
        title: 'Дорожная карта',
        tag: 'Новый',
        description: 'Создайте проект на основе нашего шаблона "Дорожная карта"',
        date: '18 июня 2024'
      },
      {
        title: 'Веб-разработка',
        tag: 'Новый',
        description: 'Создайте базовый проект с помощью шаблона "Веб-разработка"',
        date: '16 июля 2024'
      }
    ]
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
        btn: 'Все участники'
      },
      guests: {
        title: 'Гости',
        description: 'Гости могут только просматривать и редактировать доски, к которым они были добавлены.',
        btn: 'Гости'
      }
    },
    role: {
      member: 'участник',
      admin: 'админ'
    },
    btns: {
      leave: 'Покинуть',
      view: 'Просмотреть доски'
    }
  },
  settings: {
    title: 'Настройки',
    description: 'Управляйте настройками своей учетной записи и установите предпочтения.',
    lang: {
      label: 'Язык',
      about: 'Это язык, который будет использоваться в панели инструментов.'
    },
    theme: {
      label: 'Тема',
      about: 'Выберите тему для панели инструментов.',
      variants: {
        light: 'Светлая',
        dark: 'Темная',
        auto: 'Системная'
      },
      btn: 'Обновить настройки'
    }
  },
  sheet: {
    title: 'Создать доску',
    description: 'Новая доска позволит вам создавать задачи для их решения.',
    form: {
      name: {
        label: 'Название доски',
        placeholder: 'например, "Jenda"'
      },
      description: {
        label: 'Описание доски',
        placeholder: 'например, доска для разработки нашей компании'
      },
      submit: 'Создать доску'
    }
  }
};
