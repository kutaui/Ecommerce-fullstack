'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import RegisterCard from '../../../components/RegisterCard'
import Link from 'next/link'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function Register() {
	const [value, setValue] = React.useState(1)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Box
			sx={{ width: '40%', minWidth: '350px', margin: 'auto', bgcolor: 'white' }}
		>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="Login and Register Tabs"
					centered
				>
					<Link href="/login">
						<Tab label="Login" {...a11yProps(0)} />
					</Link>
					<Tab label="Register" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0} />
			<TabPanel value={value} index={1}>
				<RegisterCard />
			</TabPanel>
		</Box>
	)
}
