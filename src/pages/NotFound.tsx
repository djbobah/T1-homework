import image from "../assets/images/2104.i301.009.F.m004.c9.404 error isometric background.jpg";

const NotFound = () => {
  return (
    <section className="container notFound">
      <img src={image} alt="фоновая картинка для страницы" />
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая вами страница не существует.</p>
    </section>
  );
};

export default NotFound;
