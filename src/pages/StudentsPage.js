import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import StudentModal from '../components/StudentModal';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleEditStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  const handleDeleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Button variant="contained" onClick={() => { setEditData(null); setModalOpen(true); }}>
          Add Student
        </Button>

        <TableContainer component={Paper} sx={{ marginTop: '1rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Roll Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>{student.rollNumber}</TableCell>
                  <TableCell>
                    <Button onClick={() => { setEditData({ ...student, index }); setModalOpen(true); }} sx={{ mr: 1 }}>
                      Edit
                    </Button>
                    <Button color="error" onClick={() => handleDeleteStudent(index)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <StudentModal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
          handleSave={(data) => {
            if (editData) {
              handleEditStudent(editData.index, data);
            } else {
              handleAddStudent(data);
            }
          }}
          initialData={editData}
        />
      </Box>
    </Box>
  );
};

export default StudentsPage;
