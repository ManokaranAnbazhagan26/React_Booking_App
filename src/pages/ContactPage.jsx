import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import CommonHeading from '../components/common/CommonHeading';

const ContactPage = () => {
  return (
    <div className="mt-5" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <CommonHeading
          heading="Contact Us"
          title="Fill Here"
          subtitle="If you have any questions or inquiries, feel free to reach out to us."
        />
      </div>
      
      {/* Contact Form */}
      <form style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              style={{ backgroundColor: 'orange' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      
      {/* Contact Information */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom>Contact Information:</Typography>
        <Typography variant="body1">Phone: +1 123-456-7890</Typography>
        <Typography variant="body1">Email: info@example.com</Typography>
      </div>
    </div>
  );
}

export default ContactPage;
