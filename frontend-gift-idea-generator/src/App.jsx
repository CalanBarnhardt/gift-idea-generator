import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Box
} from '@mui/material';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedOption,
      textAnswer
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Quick Survey
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          {questions.map((question) => (
            <FormControl key={question.id} fullWidth sx={{ mb: 4 }}>
              <FormLabel id={`${question.id}-label`} sx={{ mb: 2 }}>
                {question.text}
              </FormLabel>
              <RadioGroup
                aria-labelledby={`${question.id}-label`}
                name="language"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ))}

          <FormControl fullWidth sx={{ mb: 4 }}>
            <FormLabel sx={{ mb: 2 }}>
              Please provide any additional feedback:
            </FormLabel>
            <TextField
              multiline
              rows={4}
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder="Type your answer here..."
              variant="outlined"
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
  );
}

export default App;