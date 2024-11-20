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
  const [gender, setGender] = useState('');
  const [customGender, setCustomGender] = useState('');
  const [age, setAge] = useState('');
  const [relationship, setRelationship] = useState('');
  const [customRelationship, setCustomRelationship] = useState('');
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
        gender: gender === 'other' ? customGender : gender,
        age,
        relationship: relationship === 'other' ? customRelationship : relationship,
        textAnswer: textAnswer
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data.giftIdea);
      });
    console.log({
      selectedOptions,
      gender: gender === 'other' ? customGender : gender,
      age,
      relationship: relationship === 'other' ? customRelationship : relationship,
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
        bgcolor: '#f5f5f5',
        padding: 2
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Quick Survey
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            {/* Hobby Dropdown */}
            {questions.map((question) => (
              <FormControl key={question.id} fullWidth sx={{ mb: 4 }}>
                <InputLabel id={`${question.id}-label`}>{question.text}</InputLabel>
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
                  sx={{ mt: 2 }}
                >
                  {question.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}

            {/* Gender Dropdown */}
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                sx={{ mt: 2 }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            {gender === 'other' && (
              <FormControl fullWidth sx={{ mb: 4 }}>
                <TextField
                  value={customGender}
                  onChange={(e) => setCustomGender(e.target.value)}
                  placeholder="Specify gender (max 10 characters)"
                  inputProps={{ maxLength: 10 }}
                  label="Custom Gender"
                  variant="outlined"
                />
              </FormControl>
            )}

            {/* Age Input */}
            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
                variant="outlined"
                label="Age"
              />
            </FormControl>

            {/* Relationship Dropdown */}
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel id="relationship-label">Relationship to Recipient</InputLabel>
              <Select
                labelId="relationship-label"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                sx={{ mt: 2 }}
              >
                <MenuItem value="friend">Friend</MenuItem>
                <MenuItem value="family">Family</MenuItem>
                <MenuItem value="colleague">Colleague</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            {relationship === 'other' && (
              <FormControl fullWidth sx={{ mb: 4 }}>
                <TextField
                  value={customRelationship}
                  onChange={(e) => setCustomRelationship(e.target.value)}
                  placeholder="Specify relationship (max 10 characters)"
                  inputProps={{ maxLength: 10 }}
                  label="Custom Relationship"
                  variant="outlined"
                />
              </FormControl>
            )}

            {/* Additional Feedback */}
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

            {/* Submit Button */}
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
