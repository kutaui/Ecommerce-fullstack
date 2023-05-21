'use client'
import Rating from '@mui/material/Rating'

const StarRating = (props: any) => {
	return (
		<>
			<Rating name="read-only" value={props.value} precision={0.1} readOnly />
		</>
	)
}

export default StarRating
