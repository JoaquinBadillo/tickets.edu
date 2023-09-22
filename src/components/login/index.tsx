/* MUI */
import Avatar from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* React Stuff */
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { FormEventHandler } from "react";

/* Custom Components */
import { Logo } from "../icons/logo";

import "./style.css";

const defaultTheme = createTheme();

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        login({ email, password })
        .catch(() =>
            notify("Invalid email or password")
        );
    };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >

            <Logo />

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Avatar />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt: 4}}>
                    <Link href="#" variant="body2">
                      Recuperar contraseña
                    </Link>

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
