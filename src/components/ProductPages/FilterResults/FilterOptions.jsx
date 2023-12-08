import React, { useEffect, useState } from 'react';
import './styles/FilterOptions.css';
import { category, brand, size, color } from './filterData';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { getProductsByFilter } from '../../utils/Apis';

const FilterOptions = ({ products, setProducts }) => {
  const [expandedFilters, setExpandedFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleFilterToggle = (filterId) => {
    setExpandedFilters((prevExpanded) => ({
      ...prevExpanded,
      [filterId]: !prevExpanded[filterId],
    }));
  };
  const handleClearAll = () => {
    setExpandedFilters({});
    setAppliedFilters([]);
  };

  const handleApplyFilter = (filterName, option) => {
    const filterKey = `${filterName}: ${option}`;
    if (appliedFilters.includes(filterKey)) {
      // Filter already applied, so remove it
      setAppliedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== filterKey)
      );
    } else {
      // Filter not applied, so add it
      setAppliedFilters((prevFilters) => [...prevFilters, filterKey]);
    }
  };

  const filters = [
    { id: 1, title: 'Category', filterTerm: category },
    { id: 2, title: 'Sizes', filterTerm: size },
    { id: 3, title: 'Brand', filterTerm: brand },
    { id: 4, title: 'Color', filterTerm: color },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const filters = appliedFilters.map((filter) => {
          const [title, filterTerm] = filter.split(': ');
          return { title, filterTerm };
        });
        const filteredProducts = await getProductsByFilter(filters, 200);
        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [appliedFilters, setProducts]);

  
  const handleSorting = (option) => {
    // Implement sorting logic based on the selected option
    if (option === 'price-low-to-high') {
      // Sort products array by price: low to high
      const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (option === 'price-high-to-low') {
      // Sort products array by price: high to low
      const sortedProducts = products.slice().sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
  };

  return (
    <div className='filterContainer'>
      <ListItem>
        <ListItemText className='filterandclearall'>
          <Typography className='filterText'>
            FILTERS
          </Typography>
          {appliedFilters.length > 0 && (
            <Typography onClick={handleClearAll} className='filterClearText'>
              Clear All
            </Typography>
          )}
        </ListItemText>
      </ListItem>
      {filters.map(tab => (
        <Accordion 
          key={tab.id} 
          disableGutters 
          elevation={0} 
          expanded={!!expandedFilters[tab.id]} 
          onChange={() => handleFilterToggle(tab.id)}
          sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
          className='stickyAccordion'
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className='filterCategoryNames'>
              {tab.title}
              {appliedFilters.some((filter) => filter.includes(`${tab.title}:`)) && (
                <button className='appliedFilterDot'></button>
              )}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List 
              component='div' 
              disablePadding 
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                pl: 1,
                flexDirection: tab.title === 'Color' ? 'row' : 'column',
              }}
            >
              {tab.filterTerm.map((terms, i) => (
                <div key={i+1} className='nested'>
                  <button 
                    onClick={() => {
                      handleApplyFilter(tab.title, terms);
                      handleFilterToggle(tab.id);
                    }}
                    className='filterOptionsButton'
                  >
                    {tab.title === 'Color' ? (
                        <li 
                          style={{ 
                            backgroundColor: terms,
                            border:
                            appliedFilters.includes(`${tab.title}: ${terms}`)
                              ? '3px solid #42a2a2'
                              : '1px solid #e1dfdf', 
                            }} 
                          className='colorPalatte'
                        ></li>
                    ) : (
                      <ListItemText 
                        sx={{
                        color:
                          appliedFilters.includes(`${tab.title}: ${terms}`)
                            ? '#42a2a2'
                            : 'inherit',
                        }}
                      >{terms}</ListItemText>
                    )}
                  </button>
                </div>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
      <Accordion
        disableGutters 
        elevation={0} 
        sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
        className='stickyAccordion'
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className='filterCategoryNames'>
            Sort by
            {appliedFilters && (
              <button className='appliedFilterDot'></button>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            component='div' 
            disablePadding 
          >
            <div className='nested'>
              <button 
                className='filterOptionsButton'
                onClick={() => handleSorting('price-low-to-high')}
              >
                <ListItemText>Price: Low to High</ListItemText>
              </button>
            </div>
            <div 
              className='nested'
              onClick={() => handleSorting('price-high-to-low')}
            >
              <button className='filterOptionsButton'>
                <ListItemText>Price: High to Low</ListItemText>
              </button>
            </div>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FilterOptions
