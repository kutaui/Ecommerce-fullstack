'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import LoginCard from '../../../components/LoginCard'
import RegisterCard from '../../../components/RegisterCard'
import Link from 'next/link'


export default function Login() {

    return (
        <Box
            sx={{width: '40%', minWidth: '350px', margin: 'auto', bgcolor: 'white'}}
        >
            <div className="flex justify-around w-[95%] ">
                <Link href="/login">
                    <h3 className="text-2xl mt-5 ">Login</h3>
                </Link>

                <h3 className="text-2xl mt-5 underline underline-offset-4">Register</h3>
            </div>
            <RegisterCard/>


        </Box>
    )
}
