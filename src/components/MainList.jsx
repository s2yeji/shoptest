import ListCard from './ListCard';

const MainList = ({ products }) => {
  console.log('MainList---', products);
  return (
    <section className="mainList">
      <h2>NEW</h2>
      <a href="#">view all</a>
      <ul className="listCon">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ListCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MainList;
