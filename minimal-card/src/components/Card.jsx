import "./card.css";
export function Card() {
  return (
    <div className="card">
      <div className="div-img">
        <img
          src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A cactus"
        />
      </div>
      <div className="card-content">
        <div className="button">
          <h3>Design</h3>
        </div>
        <h2>Embracing Minimalism</h2>
        <p>
          From minimalist sculptures to minimalist paintings, this blog will
          inspire you to appreciate the beauty that lies in simplicity.
        </p>
        <div className="line"></div>
        <h6>Annie Spratt</h6>
      </div>
    </div>
  );
}
