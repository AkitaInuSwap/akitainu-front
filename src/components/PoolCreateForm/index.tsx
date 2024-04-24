// React
import Image from 'next/image'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Unstable_Grid2'
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const iconURL = 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'

interface PoolCreateFormProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
}

const PoolCreateForm: React.FC<PoolCreateFormProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {/* Step 1 */}
      <Step key={1}>
        <StepLabel>CHOOSE TOKEN PAIR</StepLabel>
        <StepContent>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography component="p" variant="body1" sx={{ color: 'grey' }}>
                Please select a token.
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography component="p" variant="body2" sx={{ pb: 2 }}>
                    Base token
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                    <Image
                      src={iconURL}
                      alt="icon"
                      width={32}
                      height={32}
                      layout="fixed"
                    />
                    <Typography variant="body1" marginLeft={1}>
                      XRP
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button>Select token</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography component="p" variant="body2" sx={{ pb: 2 }}>
                    Quote token
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                    <Image
                      src={iconURL}
                      alt="icon"
                      width={32}
                      height={32}
                      layout="fixed"
                    />
                    <Typography variant="body1" marginLeft={1}>
                      XRP
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button>Select token</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12}>
              <Button variant="contained" disableElevation onClick={handleNext}>
                Next
              </Button>
            </Grid>
          </Grid>
        </StepContent>
      </Step>

      {/* Step 2 */}
      <Step key={2}>
        <StepLabel>DEPOSIT AMOUNT</StepLabel>
        <StepContent>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography component="p" variant="body1" sx={{ color: 'grey' }}>
                Please input the amount you want to deposit.
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>Balance: </Typography>
              <TextField fullWidth />
            </Grid>
            <Grid xs={6}>
              <Typography>Balance: </Typography>
              <TextField fullWidth />
            </Grid>
          </Grid>
          <Box></Box>
          <Button
            variant="outlined"
            disableElevation
            sx={{ mt: 1, mr: 1 }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{ mt: 1, mr: 1 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </StepContent>
      </Step>

      {/* Step 3 */}
      <Step key={3}>
        <StepLabel>INITIAL FEE</StepLabel>
        <StepContent>
          <Typography>トークンを選択してください。</Typography>
          <Box></Box>
          <Button
            variant="outlined"
            disableElevation
            sx={{ mt: 1, mr: 1 }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{ mt: 1, mr: 1 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </StepContent>
      </Step>

      {/* Step 4 */}
      <Step key={4}>
        <StepLabel>CONFIRMATION</StepLabel>
        <StepContent>
          <Typography>トークンを選択してください。</Typography>
          <Box></Box>
          <Button
            variant="outlined"
            disableElevation
            sx={{ mt: 1, mr: 1 }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{ mt: 1, mr: 1 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </StepContent>
      </Step>
    </Stepper>
  )
}

export default PoolCreateForm
