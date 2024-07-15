import image from "../assets/images/2104.i301.009.F.m004.c9.404 error isometric background.jpg";

const NotFound = () => {
  return (
    <section className="container notFound">
      <img src={image} alt="фоновая картинка для страницы" />
      <h1>404 - The page was not found</h1>
      <p>Sorry, the page you requested does not exist.</p>
    </section>
  );
};

export default NotFound;
