import { Link, Outlet } from 'react-router-dom';

const Company = () => {
  return (
    <section className="mw">
      <h2>OUR STORY</h2>
      <div style={{ height: '300px', backgroundColor: 'lightcoral' }}>
        1depth 관련 이미지가 들어가는 곳
      </div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '2rem 0',
        }}
      >
        <Link to="/Company/Ceo">CEO 인사말</Link>
        <Link to="/Company/Organization">조직도 소개</Link>
        <Link to="/Company/Ci">CI</Link>
      </nav>

      <Outlet></Outlet>
    </section>
  );
};

export default Company;
