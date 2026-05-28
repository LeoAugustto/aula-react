import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/api";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      await createUser({
        name,
        email
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section>
      <h1>Novo Usuario</h1>

      <form className="user-form" onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {error && <p className="message error">{error}</p>}

        <button type="submit" disabled={saving}>
          {saving ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </section>
  );
}

export default CreateUser;
