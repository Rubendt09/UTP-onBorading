import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

export default function UserTableRow({
  index,
  name,
  avatarUrl,
  company, 
}) {
  // Determine the background color based on the rowIndex
  const getBackgroundColor = (rowIndex) => {
    if (rowIndex === 0) return '#f5f5dc'; // Color for the first row
    if (rowIndex === 1) return '#f0f8ff'; // Color for the second row
    if (rowIndex === 2) return '#faebd7'; // Color for the third row
    return 'inherit'; // Default color for other rows
  };

  return (
    <TableRow hover tabIndex={-1} sx={{ backgroundColor: getBackgroundColor(index) }}>
      <TableCell>{index + 1}</TableCell> {/* Display the index */}
      <TableCell component="th" scope="row" padding="2" style={{ width: '50%' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatarUrl} />
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell style={{ width: '50%' }}>{company}</TableCell>
    </TableRow>
  );
}

UserTableRow.propTypes = {
  index: PropTypes.number.isRequired, // Add the index prop
  avatarUrl: PropTypes.string,
  company: PropTypes.string,
  name: PropTypes.string.isRequired,
};
