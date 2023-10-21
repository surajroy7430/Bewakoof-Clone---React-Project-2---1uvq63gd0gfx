import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import StarRating from './StarRating';

const ReviewDialog = ({ open, onClose, onSubmit }) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        // Call the onSubmit function with review text and rating
        onSubmit({ text: reviewText, rating });
        onClose(); // Close the dialog after submission
    };

  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent>
            <TextField
                label="Your Review"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />
            <StarRating value={rating} onStarClick={handleRatingChange} />
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
                Submit
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default ReviewDialog;
