import react from "react";
import Counter from './components/Counter'
import { Container, Typography } from "@mui/material";

const App = () =>{
    return(
        <Container maxWidth="sm">
            <Typography variant="h3" component="h1" gutterBottom>
                Contador
                <Counter/>
            </Typography>
        </Container>
    )

};

export default App;