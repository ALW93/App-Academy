const BookPanel = (props) => {
  <section className="book" id={`book-${props.id}`}>
    <h1 className="book__title">{props.title}</h1>
    <img src={props.coverUrl} />
    <div className="book__desc">{props.description}</div>
  </section>;
};
