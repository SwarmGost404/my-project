import Link from "next/link";

export default function Home() {
  return (
    <div id="app">
      <header>
        <nav>
          <Link href="/" id="logo"><input type="button" value="Korjov" /></Link>
          <Link href="/project" id="proj"><input type="button" value="My Project" /></Link>
          <Link href="/contact" id="cont"><input type="button" value="Cuntact" /></Link>
        </nav>
      </header>
      <main>
        <article>
          <h1>
          С 14 лет в мире Frontend разработке
          </h1>
          <p>Привет! Меня зовут [Ваше Имя], и я с 14 лет погружен в мир Frontend разработки. За это время я изучил все необходимые технологии и стал востребованным специалистом.Мои достижения:Опыт работы: Более 10 лет в разработке веб-приложений.Проекты: Реализовал множество успешных проектов, включая [примеры проектов].Инструменты: Владею современными инструментами, такими как React, Angular, и Webpack.Почему выбирают меня:Профессионализм: Глубокие знания и опыт в Frontend разработке.Инновации: Постоянно ищу новые решения и улучшаю свои навыки.Ответственность: Всегда выполняю задачи качественно и в срок.Контакты:Email: [Ваш Email]LinkedIn: [Ваш LinkedIn]GitHub: [Ваш GitHub]Свяжитесь со мной, чтобы обсудить ваши проекты и возможности сотрудничества!</p>
        </article>
      </main>
      <footer>
        <a href="https://github.com/swarmgost404">GitHub</a>
      </footer>
    </div>
  );
}
