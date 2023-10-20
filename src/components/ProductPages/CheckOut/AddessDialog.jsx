import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const AddressDialog = ({ open, onClose, onSave }) => {
    const [mobile, setMobile] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleZipCodeChange = (e) => {
        // Limit input to maximum 6 characters and allow only numeric input
        const cleanedInput = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
        setZipCode(cleanedInput);
    };
    const handleMobileNumber = (e) => {
        // Limit input to maximum 6 characters and allow only numeric input
        const cleanedInput = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
        setMobile(cleanedInput);
    };

    const handleSave = () => {
        onSave({
            mobile,
            street,
            city,
            state,
            country,
            zipCode
        });
        onClose();
    };

  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Address</DialogTitle>
        <DialogContent>
            <TextField
                label="Mobile Number"
                fullWidth
                margin="normal"
                value={mobile}
                onChange={handleMobileNumber}
            />
            <TextField
                label="Street"
                fullWidth
                type='text'
                margin="normal"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
                label="City"
                type='text'
                fullWidth
                margin="normal"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <TextField
                label="State"
                type='text'
                fullWidth
                margin="normal"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <TextField
                label="Country"
                type='text'
                fullWidth
                margin="normal"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
                label="Zip Code"
                fullWidth
                margin="normal"
                required
                value={zipCode}
                onChange={handleZipCodeChange}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button 
                onClick={handleSave} 
                color="primary"
                disabled={
                    mobile.length === 9 ||
                    street.length === 0 ||
                    city.length === 0 ||
                    state.length === 0 ||
                    country.length === 0 ||
                    zipCode.length === 5
                }
            >
                Save
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default AddressDialog;
