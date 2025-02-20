# WhoCame-frontend

[![license](https://img.shields.io/github/license/code-418-dpr/WhoCame-frontend)](https://opensource.org/licenses/MIT)
[![release](https://img.shields.io/github/v/release/code-418-dpr/WhoCame-frontend?include_prereleases)](https://github.com/code-418-dpr/WhoCame-frontend/releases)
[![downloads](https://img.shields.io/github/downloads/code-418-dpr/WhoCame-frontend/total)](https://github.com/code-418-dpr/WhoCame-frontend/releases)
[![code size](https://img.shields.io/github/languages/code-size/code-418-dpr/WhoCame-frontend.svg)](https://github.com/code-418-dpr/WhoCame-frontend)

[![linter](https://github.com/code-418-dpr/WhoCame-frontend/actions/workflows/linter.yaml/badge.svg)](https://github.com/code-418-dpr/WhoCame-frontend/actions/workflows/linter.yaml)
[![build](https://github.com/code-418-dpr/WhoCame-frontend/actions/workflows/build.yaml/badge.svg)](https://github.com/code-418-dpr/WhoCame-frontend/actions/workflows/build.yaml)

Модуль фронтенда для проекта WhoCame

## Особенности реализации

- [x] адаптивный интерфейс хорошо смотрится на разных типах экранов
- [x] можно использовать как мобильное приложение, благодаря технологии PWA
- [x] рендеринг веб-страниц на сервере
- [ ] светлая и тёмная темы
- [ ] авторизация пользователей
- ...

## Стек

- **Bun** — быстрая среда исполнения JavaScript
- **TypeScript** — статически типизированный JavaScript
- **Next.js** — фронтенд-фреймворк на основе React
- **ESLint** — статический анализатор кода
- **Prettier** — форматировщик кода
- **Docker** — платформа для контейнеризации

## Установка и запуск

> [!WARNING]
> Полноценная работа фронтенда возможна только при запущенном бэкенде.

0. Клонируйте репозиторий и перейдите в его папку.

### Посредством Docker

1. Установите Docker.
2. Создайте файл `.env` на основе [.env.template](.env.template) и настройте все описанные там параметры.
3. Запустите сборку образа:

```shell
docker build -t whocame_frontend
```

4. Теперь запускать образ можно командой:

```shell
docker run -d --name whocame_frontend_standalone whocame_frontend
```

### Без использования Docker

1. Установите Bun одним из способов. Например, для Windows:

```shell
powershell -c "irm bun.sh/install.ps1 | iex"
```

2. Установите зависимости:

```shell
bun install
```

3. Создайте файл `.env` на основе [.env.template](.env.template) и настройте все описанные там параметры.

4. Соберите проект:

```shell
bun run build
```

5. Теперь запускать проект можно командой:

```shell
bun run start
```

## Модификация

Запуск сервера в режиме отладки осуществляется командой:

```shell
bun run dev
```

Прочие скрипты, необходимые для запуска линтера, форматировщика и т. д. находятся в
файле [package.json](./package.json).
