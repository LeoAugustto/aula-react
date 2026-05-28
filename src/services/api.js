const API_URL = "http://localhost:3001/users";

export async function getUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Nao foi possivel buscar os usuarios.");
  }

  return response.json();
}

export async function createUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Nao foi possivel cadastrar o usuario.");
  }

  return response.json();
}
