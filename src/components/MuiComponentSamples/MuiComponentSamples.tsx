import { Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import componentSamples from "./Samples"

const MuiComponentSamples = () => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        p: 2,
        m: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Components
      </Typography>
      {componentSamples.map(({ id, title, component, docs }) => (
        <div key={id} id={id}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              href={docs}
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </Button>
          </Grid>
          <Box
            sx={{
              m: "auto",
              mb: 10,
              width: 1,
              maxWidth: 1000,
            }}
          >
            {component}
          </Box>
        </div>
      ))}
    </Box>
  )
}

export default MuiComponentSamples
