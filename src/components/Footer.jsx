import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">
          © {new Date().getFullYear()} Star Wars Shop — Sitio creado con fines educativos
        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Instagram">
            <img src="../redes/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="../redes/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="X">
            <img src="../redes/x.png" alt="X" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;