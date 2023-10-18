/* MUI */
import Avatar from '@mui/icons-material/AccountCircle';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* React Stuff */
import { useState } from "react";
import { useNotify } from "react-admin";
import { FormEventHandler } from "react";

import { fetchUtils } from 'react-admin';

const httpClient = (url: string, options: any) => {
    if(!options.headers){
        options.headers=new Headers({Accept: "application/json"})
    }
    options.headers.set("Authentication", localStorage.getItem("token"));
    return fetchUtils.fetchJson(url, options);
}

const defaultTheme = createTheme();

export default function ChangePass() {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  
  const notify = useNotify();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (password !== passwordVerify) {
        notify("auth.sign_in_error", {
            messageArgs: { _: "Las contraseñas no coinciden" },
        });
        return;
    }

    httpClient(`${import.meta.env.VITE_API_URL || "http://localhost:1337/api"}/users/changepass`, {
        method: 'PUT',
        body: JSON.stringify({password}),
    })
    .then(() => {
        notify("auth.sign_in_error", {
            messageArgs: { _: "Contraseña cambiada exitosamente" },
        });
    })
    .catch(() => {
        notify("auth.sign_in_error", {
            messageArgs: { _: "Error al cambiar la contraseña" },
        });
    });
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
          <Avatar sx={{height: 200, width: 200, color: "#8d3186"}} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              id="password"
              label="Contraseña"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              id="password-validate"
              label="Verificar Contraseña"
              type="password"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: 4,
              }}
            >

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, background: "#8d3186" }}>
                Cambiar Contraseña
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
