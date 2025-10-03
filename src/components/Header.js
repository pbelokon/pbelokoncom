export default function Header() {
  return (
    <header className="box">
      <nav className="nav">
        <img src="cat.svg" height="60" width="60" />

        <ul>
          <li>home</li>
          <li>contact</li>
        </ul>
      </nav>

      <div className="icons">
        <img src="github.svg" height="30" width="30" />
        <img src="linkedin.svg" height="30" width="30" />
        <img src="notebook.svg" height="30" width="30" />
      </div>
    </header>
  );
}
