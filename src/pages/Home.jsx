import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1>Usuarios</h1>

      {loading && <p>Carregando usuarios...</p>}
      {error && <p className="message error">{error}</p>}

      {!loading && !error && users.length === 0 && (
        <p className="message">Nenhum usuario cadastrado.</p>
      )}

      <div className="user-list">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
