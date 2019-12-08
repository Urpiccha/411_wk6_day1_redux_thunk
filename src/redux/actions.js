const url =
	"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

// export const ADD_CAR = "ADD_CAR";
// export const REMOVE_CAR = "REMOVE_CAR";
// export const DELETE_MAKE = "DELETE_MAKE";

export const addCar = car => {
	return {
		type: "ADD_CAR",
		value: car
	};
};

export const removeCar = index => {
	return {
		type: "REMOVE_CAR",
		value: index
	};
};

export const deleteMake = index => {
	return {
		type: "DELETE_MAKE",
		value: index
	};
};

export const fetchMakes = () => {
	return dispatch => {
		fetch(url)
			.then(res => res.json())
			.then(response => {
				const action = {
					type: "FETCH_MAKES",
					value: response.Results
				};
				dispatch(action);
			});
	};
};
