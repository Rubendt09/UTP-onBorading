import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

export default function UserTableRow({
  name,
  avatarUrl,
  company,
}) {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell component="th" scope="row" padding="2" style={{ width: '50%' }}>
        <Stack direction="row" alignItems="center" spacing={5}>
          <Avatar alt={name} src={avatarUrl} />
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell style={{ width: '60%' }}>{company}</TableCell>
    </TableRow>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  name: PropTypes.any,
};
