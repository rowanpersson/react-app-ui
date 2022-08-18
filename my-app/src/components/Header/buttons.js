import React from "react";
import { Container, ButtonGroup, Button, Spacer } from "@chakra-ui/react";

function Buttons() {
    return (
        <Container w='50px' >
        <ButtonGroup variant='outline' spacing='10' colorScheme='blue' >
            <Button >Button 1</Button>
            <Spacer/>
            <Button >Button 2</Button>
            <Spacer/>
            <Button >Button 3</Button>
            <Spacer/>
            <Button >Button 4</Button>
        </ButtonGroup>
        </Container>
    );
}


export default Buttons;
