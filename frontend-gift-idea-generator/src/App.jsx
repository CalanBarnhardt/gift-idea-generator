import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Box,
  Chip
} from '@mui/material';

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 'q1',
      text: 'What does your giftee like to do?',
      options: [
        { value: 'eat', label: 'eat' },
        { value: 'sleep', label: 'sleep' },
        { value: 'game', label: 'game' },
        { value: 'repeat', label: 'repeat' }
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/send-giftee-data", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        selectedOptions: selectedOptions,
        textAnswer: textAnswer
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data.giftIdea);
      });
    console.log({
      selectedOptions,
      textAnswer
    });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5', // Optional background color
        padding: 2
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Quick Survey
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            {questions.map((question) => (
              <FormControl key={question.id} fullWidth sx={{ mb: 4 }}>
              <InputLabel
                id={`${question.id}-label`}
                sx={{
                  transform: 'translate(0, -8px)', // Moves label further up
                  transition: 'all 0.3s ease', // Smooth transition for interaction
                }}
              >
                {question.text}
              </InputLabel>
              <Select
                labelId={`${question.id}-label`}
                multiple
                value={selectedOptions}
                onChange={handleChange}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                sx={{ mt: 2 }} // Adds margin between Select and the label
              >
                {question.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            ))}

            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                multiline
                rows={4}
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="Type your answer here..."
                variant="outlined"
                label="Additional Feedback"
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
