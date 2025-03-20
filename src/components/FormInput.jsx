import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


function FormInput({ toDoInput, setToDoInput, addTodo }) {
    return (
        <div >
            <Container className='container'>
                <Form className='text-center mt-5 pt-3'>

                    <Form.Label className='todo  mb-5 '>TO-DO LİST</Form.Label>
                    <div className=' d-flex justify-content-center '>
                        <Form.Control className='fs-4 w-50 mx-3'
                            type="text"
                            value={toDoInput}
                            onChange={(e) => setToDoInput(e.target.value)}
                        />

                        <div>
                            <Button className='button-style ' type="submit" onClick={addTodo} variant="secondary" size='lg'>Add</Button>

                        </div>
                    </div>
                </Form>

            </Container>
        </div>
    )
}

export default FormInput;