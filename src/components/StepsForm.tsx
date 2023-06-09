import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Form from './Form';

const steps = ['Name', 'Signature', 'Co-wokers','Preview'];

export default function StepsForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step:number) => {
    return step === 1;
  };

  const isStepSkipped = (step:number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%',backgroundColor:'#f4f4f5',height:'100%', }}>
        <div className="flex justify-between bg-white pb-4 px-4">
        <div className="flex gap-4 items-center">
            <button
                  onClick={handleBack}
                disabled={activeStep === 0}
                className='text-gray-400'
            >Go back</button>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps:any = {};
          const labelProps:any = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}<ArrowForwardIosIcon /></StepLabel>
            </Step>
          );
        })}
      </Stepper>
        </div>
            <button onClick={handleNext} className='px-6 py-1 bg-[#192eee] text-white'>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
        </div>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {activeStep + 1?(
                <div className="w-[40%] h-full  mx-auto my-16">
                    <Form/>
                </div>
            ):''}
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
}