import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка для перевірки даних та логування користувача
    if (!email || !password) {
      setError("Будь ласка, заповніть всі поля.");
      return;
    }
    setError("");
    console.log("Успішний вхід");
    // Додати логіку для логування (наприклад, виклик API)
  };

  return (
    <div>
      <h2>Логін</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};

export default LoginPage;
