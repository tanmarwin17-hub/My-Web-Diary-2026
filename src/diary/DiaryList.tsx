import Box from "@mui/material/Box"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
function DiaryList() {

    return (
        <Paper elevation={1} sx={{
            display: 'flex',
            p: 1,
            backgroundColor: 'lightblue',
        }}>
            <InsertEmoticonIcon sx={{ fontSize: '48px', color: 'red', }} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                pl: 1,
            }}>
                <Typography sx={{ textAlign: 'left' }}>Jan 28, 2026 </Typography>
                <Typography>Hello, my Diary, Bye Bye!</Typography>
                </Box>
        </Paper >
        

    )
}

export default DiaryList