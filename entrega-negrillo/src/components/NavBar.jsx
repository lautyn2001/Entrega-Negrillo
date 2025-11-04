import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Star Wars Shop</h2>
      <ul style={styles.menu}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <CartWidget />
      </ul>
    </nav>
  )
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#0c0c0cff', color: 'yellow' },
  title: { margin: 0 },
  menu: { display: 'flex', gap: '20px', listStyle: 'none', alignItems: 'center' }
}

export default NavBar