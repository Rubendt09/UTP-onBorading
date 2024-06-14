import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Scrollbar from 'src/components/scrollbar';
import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

const images = [
  {
    label: 'PRIMER PUESTO',
    description: '-20% en la primera cuota',
    puesto: '1ER PUESTO',
    imgPath:
      '/assets/illustrations/promoCuota.png',
  },
  {
    label: 'SEGUNDO PUESTO',
    description: '1 semana de almuerzo gratis',
    puesto: '2DO PUESTO',
    imgPath:
    '/assets/illustrations/promoAlmuerzo.png',
  },
  {
    label: 'TERCER PUESTO',
    description: '1 mes de membresía black',
    puesto: '3ER PUESTO',
    imgPath:
    '/assets/illustrations/promoSmart.jpeg',
  },
  {
    label: 'CUARTO PUESTO',
    description: 'Comida en ChinaWok',
    puesto: '4TO PUESTO',
    imgPath:
    '/assets/illustrations/promoChinaWok.png',
  },
  {
    label: 'QUINTO PUESTO',
    description: '-50% en Dunkin Donuts',
    puesto: '5TO PUESTO',
    imgPath:
      '/assets/illustrations/promoDunkin.png',
  },
  {
    label: 'PUESTO 6-8',
    description: 'Merchandising UTP',
    puesto: 'TOP 8',
    imgPath:
    '/assets/illustrations/promoMerchand.jpg',
  },
  {
    label: 'PUESTO 8-10',
    description: 'Promo bembos personal',
    puesto: 'TOP 10',
    imgPath:
      '/assets/illustrations/promoBembos.jpg',
  },
  {
    label: 'PUESTO 11-20',
    description: 'Entrada 2D en Cineplanet',
    puesto: 'TOP 20',
    imgPath:
    '/assets/illustrations/promoCineplanet.jpg',
  },
];

export default function UserPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('average');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8085/api/ranking/get-all');
        const data = await response.json();
        if (data.ok && data.message === 'SUCCESS') {
          setUsersData(data.body);
        } else {
          console.error('Error al obtener los datos de los usuarios');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud a la API', error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: usersData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container sx={{ overflowX: 'hidden', width: '100%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Ranking</Typography>
      </Stack>

      <Typography variant="h5" sx={{ width: '100%', textAlign: 'center', marginBottom: 3 }}>
        Queremos premiarte por completar satisfactoriamente los cursos de UTP+ OnBoarding
      </Typography>
      <Box
        sx={{
          maxWidth: '100%',
          flexGrow: 1,
          overflowX: 'auto',
          display: 'flex',
          whiteSpace: 'nowrap',
        }}
      >
        {images.map((step, index) => (
          <Box
            key={step.label}
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 1,
              marginRight: 1,
              width: '250px', // Ajuste el tamaño de la tarjeta según sea necesario
              display: 'inline-block', // Cambiado a inline-block para scroll horizontal
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              sx={{
                height: 150,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                display: 'block',
                maxWidth: '100%',
                textAlign: 'left',
                overflow: 'hidden',
                width: '100%',
                backgroundColor: 'white',
              }}
              src={step.imgPath}
              alt={step.label}
            />
            <Box
              sx={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                boxShadow: 3,
                padding: 1,
                marginBottom: 2,
                textAlign: 'left',
                width: '100%',
                backgroundColor: 'white',
              }}
            >
              <Typography sx={{ width: '100%' }}>{step.label}</Typography>
              <Typography sx={{ width: '100%' }}>{step.description}</Typography>
              <Typography sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <WorkspacePremiumIcon />
                {step.puesto}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Card sx={{ width: '100%' }}>
        <UserTableToolbar filterName={filterName} onFilterName={handleFilterByName} />
        <Scrollbar>
          <TableContainer sx={{ width: '100%' }}>
            <Table
              sx={{
                minWidth: 800,
                width: '100%',
                '@media (max-width: 600px)': { width: '100%', minWidth: 'auto' },
              }}
            >
              <UserTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'index', label: '#', disableSorting: true },
                  { id: 'names', label: 'Nombre del estudiante', disableSorting: true },
                  { id: 'average', label: 'Puntaje', disableSorting: true },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <UserTableRow
                      key={row.names}
                      index={page * rowsPerPage + index} // Pass the index for numbering
                      name={row.names}
                      company={row.average}
                      avatarUrl={row.photo}
                    />
                  ))}
                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, usersData.length)}
                />
                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
          page={page}
          component="div"
          count={usersData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[10, 25, 50]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
