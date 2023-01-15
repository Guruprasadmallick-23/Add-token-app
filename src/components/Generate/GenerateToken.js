import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../styles/generate.css";

const GenerateToken = () => {
  const [blueTokenNo, setBlueTokenNo] = useState(0);
  const [blueBox, setBlueBox] = useState([]);
  const [bluePrefix, setBluePrefix] = useState("");
  const [bluePerRow, setBluePerRow] = useState(0);
  const [redTokenNo, setRedTokenNo] = useState(0);
  const [redBox, setRedBox] = useState([]);
  const [redPrefix, setRedPrefix] = useState("");
  const [redPerRow, setRedPerRow] = useState(0);

  const handleSubmit = () => {
    setBlueBox(
      Array.from({ length: blueTokenNo }, () => blueTokenNo / blueTokenNo)
    );
    setRedBox(
      Array.from({ length: redTokenNo }, () => redTokenNo / redTokenNo)
    );
  };

  const handleClear = () => {
    setBlueBox([]);
    setBlueTokenNo(0);
    setBluePrefix('')
    setBluePerRow(0)
    setRedBox([]);
    setRedTokenNo(0);
    setRedPrefix('')
    setRedPerRow(0)
  };

  return (
    <>
      <div className="main">
        <Box className="form">
          <h3>Token Generator Application</h3>
          <Box className="token-form">
            <Box className="blue-tokenForm">
              <div>
                <h4>No of Token</h4>
                <TextField
                  size="small"
                  variant="outlined"
                  type="number"
                  value={blueTokenNo}
                  onChange={(e) => setBlueTokenNo(e.target.value)}
                />
              </div>

              <div>
                <h4>Blue Token Prefix</h4>
                <TextField
                  size="small"
                  variant="outlined"
                  value={bluePrefix}
                  onChange={(e) => setBluePrefix(e.target.value)}
                />
              </div>
              <div>
                <h4>Token per Row</h4>
                <TextField
                  size="small"
                  variant="outlined"
                  type="number"
                  value={bluePerRow}
                  onChange={(e) => setBluePerRow(e.target.value)}
                />
              </div>
            </Box>
            <Box className="red-tokenForm">
              <div>
                <h4>No of Token</h4>
                <TextField
                  size="small"
                  variant="outlined"
                  type="number"
                  value={redTokenNo}
                  onChange={(e) => setRedTokenNo(e.target.value)}
                />
              </div>

              <div>
                <h4>Red Token Prefix</h4>
                <TextField
                  size="small"
                  variant="outlined"
                  value={redPrefix}
                  onChange={(e) => setRedPrefix(e.target.value)}
                />
              </div>
              <div>
                <h4>Token per Row</h4>
                <TextField
                  size="small"
                  variant="outlined"
                  type="number"
                  value={redPerRow}
                  onChange={(e) => setRedPerRow(e.target.value)}
                />
              </div>
            </Box>
          </Box>
          <Box className="form-btn">
            <Button size="small" variant="contained" onClick={handleSubmit}>
              Generate
            </Button>
            <Button size="small" variant="contained" onClick={handleClear}>
              Clear
            </Button>
          </Box>
        </Box>
        <Box className="token-areaMain">
          <Box className="blue-token">
            {blueBox.map((_, i) => (
              <div
                key={i}
                className="blue-box"
                style={{
                  width: `${100 / bluePerRow}%`,
                  height: `${100 / bluePerRow}%`,
                }}
              >
                {`${bluePrefix}${i + 1}`}
              </div>
            ))}
          </Box>
          <Box className="red-token">
            {redBox.map((_, i) => (
              <div
                key={i}
                className="red-box"
                style={{
                  width: `${100 / redPerRow}%`,
                  height: `${100 / redPerRow}%`,
                }}
              >
                {`${redPrefix}${i + 1}`}
              </div>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default GenerateToken;
