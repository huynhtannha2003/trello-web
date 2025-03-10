import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ModeSelect from '../../components/ModeSelect/index'

function Board() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
        <Box sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          <ModeSelect />
          Board Bar
        </Box>
        <Box sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: '58px',
          display: 'flex',
          alignItems: 'center'
        }}>
                  Board Bar
        </Box>
        <Box sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: 'calc(100vh - 58px - 48px)',
          display: 'flex',
          alignItems: 'center'
        }}>
                  Board Content
        </Box>
      </Container>
      <hr />
    </>
  )
}
export default Board