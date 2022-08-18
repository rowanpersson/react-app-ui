import React from "react";
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar() {
    const searchIconColor = "gray.700";
    return (
        <InputGroup borderRadius='15px' w='200px'>
            <InputLeftElement
                children={
                    <IconButton
                        bg='inherit'
                        borderRadius='inherit'
                        _hover='none'
                        _active={{
                            bg: "inherit",
                            transform: "none",
                            borderColor: "transparent",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                        icon={
                            <SearchIcon color={searchIconColor} w='15px' h='15px' />
                        }></IconButton>
                }
            />
            <Input
                fontSize='xs'
                py='11px'
                placeholder='Type here...'
                borderRadius='inherit'
            />
        </InputGroup>
    );
}

export default SearchBar;