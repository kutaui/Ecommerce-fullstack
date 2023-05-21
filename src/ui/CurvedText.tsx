'use client'
import ReactCurvedText from 'react-curved-text'
import './CurvedText.css'

const CurvedText = () => {
	return (
		<ReactCurvedText
			width={300}
			height={300}
			cx={150}
			cy={150}
			rx={70}
			ry={70}
			startOffset={0}
			reversed={false}
			text="Subscribe to our newsletter"
			textProps={{ style: { fontSize: 25, letterSpacing: 3 } }}
			textPathProps={null}
			tspanProps={null}
			ellipseProps={null}
			svgProps={{ className: 'rotating-curved-text' }}
		></ReactCurvedText>
	)
}

export default CurvedText
