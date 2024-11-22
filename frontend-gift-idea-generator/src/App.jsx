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
  Chip,
  CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [gender, setGender] = useState('');
  const [customGender, setCustomGender] = useState('');
  const [age, setAge] = useState('');
  const [relationship, setRelationship] = useState('');
  const [customRelationship, setCustomRelationship] = useState('');
  const [textAnswer, setTextAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const [generatedGiftIdeas, setGeneratedGiftIdeas] = useState('');

  const questions = [
    {
      id: 'q1',
      text: 'What does your giftee like to do?',
      options: [
        { value: '3D printing', label: '3D printing' },
        { value: 'DIY projects', label: 'DIY projects' },
        { value: 'acting', label: 'acting' },
        { value: 'archery', label: 'archery' },
        { value: 'astrology', label: 'astrology' },
        { value: 'astronomy', label: 'astronomy' },
        { value: 'badminton', label: 'badminton' },
        { value: 'baking', label: 'baking' },
        { value: 'basketball', label: 'basketball' },
        { value: 'beekeeping', label: 'beekeeping' },
        { value: 'birdwatching', label: 'birdwatching' },
        { value: 'blogging', label: 'blogging' },
        { value: 'board games', label: 'board games' },
        { value: 'brewing', label: 'brewing' },
        { value: 'calligraphy', label: 'calligraphy' },
        { value: 'camping', label: 'camping' },
        { value: 'candle making', label: 'candle making' },
        { value: 'canoeing', label: 'canoeing' },
        { value: 'chess', label: 'chess' },
        { value: 'coding', label: 'coding' },
        { value: 'collecting coins', label: 'collecting coins' },
        { value: 'collecting stamps', label: 'collecting stamps' },
        { value: 'cooking', label: 'cooking' },
        { value: 'cricket', label: 'cricket' },
        { value: 'crocheting', label: 'crocheting' },
        { value: 'cycling', label: 'cycling' },
        { value: 'dancing', label: 'dancing' },
        { value: 'diving', label: 'diving' },
        { value: 'drawing', label: 'drawing' },
        { value: 'drone flying', label: 'drone flying' },
        { value: 'fashion design', label: 'fashion design' },
        { value: 'fencing', label: 'fencing' },
        { value: 'fishing', label: 'fishing' },
        { value: 'foraging', label: 'foraging' },
        { value: 'gardening', label: 'gardening' },
        { value: 'genealogy', label: 'genealogy' },
        { value: 'geocaching', label: 'geocaching' },
        { value: 'hairstyling', label: 'hairstyling' },
        { value: 'hiking', label: 'hiking' },
        { value: 'horseback riding', label: 'horseback riding' },
        { value: 'interior design', label: 'interior design' },
        { value: 'investing', label: 'investing' },
        { value: 'juggling', label: 'juggling' },
        { value: 'kayaking', label: 'kayaking' },
        { value: 'knitting', label: 'knitting' },
        { value: 'language learning', label: 'language learning' },
        { value: 'magic tricks', label: 'magic tricks' },
        { value: 'makeup artistry', label: 'makeup artistry' },
        { value: 'martial arts', label: 'martial arts' },
        { value: 'mechanics', label: 'mechanics' },
        { value: 'meditation', label: 'meditation' },
        { value: 'metal detecting', label: 'metal detecting' },
        { value: 'origami', label: 'origami' },
        { value: 'painting', label: 'painting' },
        { value: 'parkour', label: 'parkour' },
        { value: 'perfume making', label: 'perfume making' },
        { value: 'photography', label: 'photography' },
        { value: 'playing cards', label: 'playing cards' },
        { value: 'playing drums', label: 'playing drums' },
        { value: 'playing guitar', label: 'playing guitar' },
        { value: 'playing piano', label: 'playing piano' },
        { value: 'pottery', label: 'pottery' },
        { value: 'puzzles', label: 'puzzles' },
        { value: 'reading', label: 'reading' },
        { value: 'robotics', label: 'robotics' },
        { value: 'rock climbing', label: 'rock climbing' },
        { value: 'rollerblading', label: 'rollerblading' },
        { value: 'rugby', label: 'rugby' },
        { value: 'running', label: 'running' },
        { value: 'sculpting', label: 'sculpting' },
        { value: 'sewing', label: 'sewing' },
        { value: 'singing', label: 'singing' },
        { value: 'skateboarding', label: 'skateboarding' },
        { value: 'skiing', label: 'skiing' },
        { value: 'snorkeling', label: 'snorkeling' },
        { value: 'snowboarding', label: 'snowboarding' },
        { value: 'soap making', label: 'soap making' },
        { value: 'soccer', label: 'soccer' },
        { value: 'spelunking', label: 'spelunking' },
        { value: 'stand-up paddleboarding', label: 'stand-up paddleboarding' },
        { value: 'stargazing', label: 'stargazing' },
        { value: 'surfing', label: 'surfing' },
        { value: 'swimming', label: 'swimming' },
        { value: 'table tennis', label: 'table tennis' },
        { value: 'tattooing', label: 'tattooing' },
        { value: 'tennis', label: 'tennis' },
        { value: 'traveling', label: 'traveling' },
        { value: 'video games', label: 'video games' },
        { value: 'vlogging', label: 'vlogging' },
        { value: 'volleyball', label: 'volleyball' },
        { value: 'volunteering', label: 'volunteering' },
        { value: 'watchmaking', label: 'watchmaking' },
        { value: 'weightlifting', label: 'weightlifting' },
        { value: 'whittling', label: 'whittling' },
        { value: 'woodworking', label: 'woodworking' },
        { value: 'writing', label: 'writing' },
        { value: 'yoga', label: 'yoga' },
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedGiftIdeas('');
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
        setLoading(false);
        setGeneratedGiftIdeas(data.giftIdeas);
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
                <MenuItem value="son">Son</MenuItem>
                <MenuItem value="daughter">Daughter</MenuItem>
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
            {/* <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                multiline
                rows={4}
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="Type your answer here..."
                variant="outlined"
                label="Additional Feedback"
              />
            </FormControl> */}

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
            {loading && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: '10px', width: '100%' }} // Ensure the container takes up full width
              >
                <CircularProgress size={42} />
              </Box>
            )}
            {
              generatedGiftIdeas &&
              <Box
                sx={{
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: '10px',
                  marginTop: '10px'
                }}
              >
                <Typography align='center' marginTop='20px' fontSize='20px'>
                  Here are 5 perfect gift ideas! <br></br>
                </Typography>
                <Typography align='center' marginTop='10px' marginBottom='20px' fontSize='18px'>
                  {generatedGiftIdeas}
                </Typography>
              </Box>
            }
          </Box>
        </Paper>
        <Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
