import React from 'react'
import { Avatar, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const Sidebar = () => {
    return (
        <div>

            <Paper
                style={{
                    width: '100%',
                    height: "97vh",
                    position: 'sticky',
                    top: '10px',
                    zIndex: 1000,
                }}
            >
                <Box py={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                        style={{ width: 84, height: 84 }}
                    />
                </Box>
            </Paper>
        </div>
    )
}

export default Sidebar
