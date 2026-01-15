import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/contacto.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    try {
      setLoading(true);
      await addDoc(collection(db, "contacts"), {
        ...form,
        date: serverTimestamp(),
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error al enviar mensaje:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contacto</h2>
        <p>¿Tenés alguna duda? Escribinos.</p>

        {sent ? (
          <p style={{ color: "#4caf50" }}>¡Mensaje enviado correctamente!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <textarea
                name="message"
                placeholder="Mensaje"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
