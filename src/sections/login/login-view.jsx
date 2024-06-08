import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async () => {
  //   setLoading(true);

  //   const response = await fetch('http://localhost:8085/api/authenticate', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: email,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();
  //   setLoading(false);

  //   if (data.ok && data.message === "SUCCESS") {
  //     router.push('/app');
  //   } else {
  //     alert('Credenciales incorrectas');
  //   }
  // };

  router.push('/app');

  const renderForm = (
    <>
      <Stack spacing={2}>
        <Typography variant="subtitle1" gutterBottom>
          Codigo UTP
        </Typography>
        <TextField
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon="ph:student" />
              </InputAdornment>
            ),
          }}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Iconify icon="material-symbols:info" /> Ejemplo de usuario: U1533148 (no digitar el
          @utp.edu.pe)
        </Typography>
        <Typography variant="subtitle1">Contraseña</Typography>
        <TextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          ¿Olvidaste tu contraseña?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"

      >
        Iniciar sesión
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <img
            src="/assets/images/logo/utpOnboarding.png"
            alt="UTP Onboarding Logo"
            style={{ width: '100%', marginBottom: '30px' }}
          />

          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
            Ingresa con tu cuenta academica
          </Typography>

          <Divider sx={{ my: 3 }} />
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
