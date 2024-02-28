import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Signup = () => {
    const [Gender, setGender] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className=' border h-[70%] sm:w-[50%] w-[90%] p-2 flex flex-col justify-center items-center shadow bg-slate-100'>
                <h1 className=' text-center text-3xl font-bold underline text-blue-700 mb-5'>Signup</h1>
                <div className='grid grid-cols-2 gap-4 mb-5'>
                <div className=''>
                    <h1 className=' text-lg font-bold mb-4'>Enter Your Full Name</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        className=' '
                    />
                </div>
                <div className=''>
                    <h1 className=' text-lg font-bold mb-4'>Enter Email Address</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        className=' '
                    />
                </div>
                <div className=' '>
                    <h1 className=' text-lg font-bold mb-4'>Enter Password</h1>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className=' w-full'
                    />
                </div>
                    <div className=''>
                        <h1 className=' text-lg font-bold mb-4'>Enter Your Gender</h1>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Others</MenuItem>
                            </Select>
                        </FormControl>
                </div>
                </div>
                <Button variant="outlined" className=' w-[50%]'>Signup</Button>
                <div className=' flex'>
                    <h1>Already have an account?</h1>
                    <Link to={'/login'} className='hover:text-blue-700 font-semibold'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
