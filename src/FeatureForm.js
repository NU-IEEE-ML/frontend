import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css'

const initialValues = {
	beds: 0,
	rooms: 0
}

const FeatureForm = ({ change }) => {
	const [features, setFeatures] = useState(initialValues);
	const [cost, setCost] = useState(0);

	const handleChange = e => {
		let { value, name } = e.target;
		setFeatures({
			...features,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		setFeatures(initialValues);
		setCost(+features.beds + +features.rooms);
	};

	return (
		<div class="main">
			<div>
                <label># of Beds</label>
                <input
                    name="beds"
					type="number"
					min="0"
                    value={features.beds}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label># of Rooms</label>
                <input
                    name="rooms"
					type="number"
					min="0"
                    value={features.rooms}
                    onChange={handleChange}
                />
            </div>

			<div>
				<button
					type="button"
					onClick={handleSubmit}
				>
					Calculate Cost
				</button>
			</div>

			<div>
				<p> The total cost per night for your property should be: {cost} </p>
			</div> 
		</div>
	);
};

FeatureForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default FeatureForm;