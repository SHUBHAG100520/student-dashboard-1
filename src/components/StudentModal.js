import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

const StudentModal = ({ open, handleClose, handleSave, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    class: '',
    section: '',
    rollNumber: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    guardianName: '',
    guardianContact: '',
    admissionDate: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2>{initialData ? 'Edit Student' : 'Add Student'}</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="name" label="Name" fullWidth value={formData.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="class" label="Class" fullWidth value={formData.class} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="section" label="Section" fullWidth value={formData.section} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="rollNumber" label="Roll Number" fullWidth value={formData.rollNumber} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="dob" label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} value={formData.dob} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="Email" type="email" fullWidth value={formData.email} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="phone" label="Phone Number" type="tel" fullWidth value={formData.phone} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="gender" label="Gender" fullWidth value={formData.gender} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField name="address" label="Address" fullWidth value={formData.address} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="guardianName" label="Guardian's Name" fullWidth value={formData.guardianName} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="guardianContact" label="Guardian's Contact" fullWidth value={formData.guardianContact} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField name="admissionDate" label="Admission Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={formData.admissionDate} onChange={handleChange} />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
            {initialData ? 'Update' : 'Submit'}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default StudentModal;
