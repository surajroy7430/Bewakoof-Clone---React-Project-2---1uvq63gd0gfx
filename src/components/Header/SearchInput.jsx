import React, { useRef } from 'react';
import { Box, InputBase, styled, alpha } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductsBySearch } from '../utils/Apis';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const searchInputRef = useRef(null);
    const navigate = useNavigate();

    const Search = styled('div')(({ theme }) => ({
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.1),
        '&:focus-within': {
            backgroundColor: alpha(theme.palette.common.white, 0.2),
            border: '1px solid #979797'
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#979797',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1.2, 1, 1.2, 6),
            paddingRight: `calc(1em + ${theme.spacing(0.2)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const handleSearch = async (e) => {
        e.preventDefault();

        const searchTerm = searchInputRef.current.value.toLowerCase();
        if(searchTerm) {
            try {
                const products = await getProductsBySearch(searchTerm, 'name');
                // console.log('products', products);
                if(products.length === 0) {
                    toast.warn('No products found');
                }
                else {
                    navigate(`/search/?name=${searchTerm}`);
                }
            } catch (error) {
                toast.warn(error);
            }
        }
        else {
            toast.warn('Please enter a search term.');
        }
    }

  return (
    <Box component="form" onSubmit={handleSearch}>
        <Search>
            <SearchIconWrapper>
                <SearchOutlined style={{color: '#979797'}} />
            </SearchIconWrapper>
            <StyledInputBase 
                placeholder='Search by product, category or collection' 
                inputProps={{ 'aria-label': 'search' }} 
                inputRef={searchInputRef} 
                sx={{color: '#979797'}}
            />
        </Search>
    </Box>
  );
};

export default SearchInput;
