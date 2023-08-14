import { useState } from 'react';
import './Billing.css'
// import spatula from './assets/spatula.jpg';
import StripeContainer from './StripeContainer';

function Home() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Choose The right plan for you</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
          <div className="outer">
            <div className="h">
              Monthly
              Monthly Price
              video Quality
              Resolution
            </div>
            <div>Mobile</div>
            <div>Basic</div>
            <div>Standard</div>
            <div>Premium</div>
          </div>
					<button onClick={() => setShowItem(true)}>Purchase Subscription</button>
				</>
			)}
		</div>
	);
}

export default Home;