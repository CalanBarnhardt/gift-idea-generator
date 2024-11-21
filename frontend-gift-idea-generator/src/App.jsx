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
        { value: 'reading', label: 'reading' },
        { value: 'writing', label: 'writing' },
        { value: 'cooking', label: 'cooking' },
        { value: 'baking', label: 'baking' },
        { value: 'drawing', label: 'drawing' },
        { value: 'painting', label: 'painting' },
        { value: 'hiking', label: 'hiking' },
        { value: 'cycling', label: 'cycling' },
        { value: 'gardening', label: 'gardening' },
        { value: 'photography', label: 'photography' },
        { value: 'knitting', label: 'knitting' },
        { value: 'crocheting', label: 'crocheting' },
        { value: 'fishing', label: 'fishing' },
        { value: 'camping', label: 'camping' },
        { value: 'traveling', label: 'traveling' },
        { value: 'birdwatching', label: 'birdwatching' },
        { value: 'yoga', label: 'yoga' },
        { value: 'running', label: 'running' },
        { value: 'swimming', label: 'swimming' },
        { value: 'weightlifting', label: 'weightlifting' },
        { value: 'dancing', label: 'dancing' },
        { value: 'singing', label: 'singing' },
        { value: 'playing guitar', label: 'playing guitar' },
        { value: 'playing piano', label: 'playing piano' },
        { value: 'playing drums', label: 'playing drums' },
        { value: 'acting', label: 'acting' },
        { value: 'woodworking', label: 'woodworking' },
        { value: 'pottery', label: 'pottery' },
        { value: 'calligraphy', label: 'calligraphy' },
        { value: 'martial arts', label: 'martial arts' },
        { value: 'board games', label: 'board games' },
        { value: 'video games', label: 'video games' },
        { value: 'collecting stamps', label: 'collecting stamps' },
        { value: 'collecting coins', label: 'collecting coins' },
        { value: 'puzzles', label: 'puzzles' },
        { value: 'coding', label: 'coding' },
        { value: 'blogging', label: 'blogging' },
        { value: 'vlogging', label: 'vlogging' },
        { value: 'origami', label: 'origami' },
        { value: 'sculpting', label: 'sculpting' },
        { value: 'sewing', label: 'sewing' },
        { value: 'surfing', label: 'surfing' },
        { value: 'skateboarding', label: 'skateboarding' },
        { value: 'skiing', label: 'skiing' },
        { value: 'snowboarding', label: 'snowboarding' },
        { value: 'rollerblading', label: 'rollerblading' },
        { value: 'rock climbing', label: 'rock climbing' },
        { value: 'kayaking', label: 'kayaking' },
        { value: 'canoeing', label: 'canoeing' },
        { value: 'diving', label: 'diving' },
        { value: 'snorkeling', label: 'snorkeling' },
        { value: 'stand-up paddleboarding', label: 'stand-up paddleboarding' },
        { value: 'tennis', label: 'tennis' },
        { value: 'badminton', label: 'badminton' },
        { value: 'table tennis', label: 'table tennis' },
        { value: 'soccer', label: 'soccer' },
        { value: 'basketball', label: 'basketball' },
        { value: 'volleyball', label: 'volleyball' },
        { value: 'rugby', label: 'rugby' },
        { value: 'cricket', label: 'cricket' },
        { value: 'archery', label: 'archery' },
        { value: 'fencing', label: 'fencing' },
        { value: 'horseback riding', label: 'horseback riding' },
        { value: 'chess', label: 'chess' },
        { value: 'playing cards', label: 'playing cards' },
        { value: 'magic tricks', label: 'magic tricks' },
        { value: 'juggling', label: 'juggling' },
        { value: 'parkour', label: 'parkour' },
        { value: 'tattooing', label: 'tattooing' },
        { value: 'makeup artistry', label: 'makeup artistry' },
        { value: 'hairstyling', label: 'hairstyling' },
        { value: 'interior design', label: 'interior design' },
        { value: 'fashion design', label: 'fashion design' },
        { value: 'watchmaking', label: 'watchmaking' },
        { value: 'DIY projects', label: 'DIY projects' },
        { value: 'mechanics', label: 'mechanics' },
        { value: 'robotics', label: 'robotics' },
        { value: 'investing', label: 'investing' },
        { value: 'astrology', label: 'astrology' },
        { value: 'meditation', label: 'meditation' },
        { value: 'language learning', label: 'language learning' },
        { value: 'volunteering', label: 'volunteering' },
        { value: 'genealogy', label: 'genealogy' },
        { value: '3D printing', label: '3D printing' },
        { value: 'drone flying', label: 'drone flying' },
        { value: 'whittling', label: 'whittling' },
        { value: 'beekeeping', label: 'beekeeping' },
        { value: 'foraging', label: 'foraging' },
        { value: 'astronomy', label: 'astronomy' },
        { value: 'stargazing', label: 'stargazing' },
        { value: 'geocaching', label: 'geocaching' },
        { value: 'spelunking', label: 'spelunking' },
        { value: 'metal detecting', label: 'metal detecting' },
        { value: 'soap making', label: 'soap making' },
        { value: 'candle making', label: 'candle making' },
        { value: 'perfume making', label: 'perfume making' },
        { value: 'brewing', label: 'brewing' }
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
        age: age,
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
            Chat Gift Proposal Tool
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
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 300, // Adjust height as needed
                        width: 250,     // Adjust width as needed
                      },
                    },
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'left',
                    },
                  }}
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
              <InputLabel id="gender-label">Giftee Gender</InputLabel>
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
                label="Giftee Age"
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
                <MenuItem value="father">Father</MenuItem>
                <MenuItem value="mother">Mother</MenuItem>
                <MenuItem value="brother">Brother</MenuItem>
                <MenuItem value="sister">Sister</MenuItem>
                <MenuItem value="grandfather">Grandfather</MenuItem>
                <MenuItem value="grandmother">Grandmother</MenuItem>
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
