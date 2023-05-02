import './home.css';
import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='backgroundHome'>
        <Box display='flex' justifyContent='center' style={{ width: '100%' }}>
            <Paper elevation={3} sx={{ p: 3 }} style={{ width: '30rem' }}>
                <Box display='flex' justifyContent='center' flexDirection='column'>
                    <Typography variant="h4" component="h1" align="center">
                        Bem-vindo,
                        <br/>
                        escolha uma opção
                    </Typography>
                    <br/>
                    <Link to='/cadastro-relatorio' align='center'>
                        <Button
                            variant='text'
                        >
                            Cadastrar relatório
                        </Button>
                    </Link>

                    <Link to='/cadastro-material' align='center'>
                        <Button
                            variant='text'
                        >
                            Cadastrar material
                        </Button>
                    </Link>

                    <Link to='/cadastro-medico' align='center'>
                        <Button
                            variant='text'
                        >
                            Cadastrar médico
                        </Button>
                    </Link>

                    <Button
                        variant='text'
                    >
                        Ver relatórios cadastrados
                    </Button>

                    <Button
                        variant='text'
                    >
                        Ver materiais cadastrados
                    </Button>

                    <Link to='/' align="center">
                        <Button
                            color='primary'
                            variant='contained'
                            style={{ width: '7rem' }}
                        >
                            Sair
                        </Button>
                    </Link>
                </Box>
            </Paper>
        </Box>
        </div>
    );
}

export default Home;