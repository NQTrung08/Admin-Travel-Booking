import React, {useState, useEffect, useRef} from "react";
import { Col, Row, Container, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import './tourDetails.css'
import axios from "axios";
const TourDetails = () => {

    // lấy giá trị id từ URL;
	const { id } = useParams();

	//// Khởi tạo reviewMsgRef với giá trị là chuỗi rỗng
	const reviewMsgRef = useRef("");
	const [tourRating, setTourRating] = useState(null);
    const [tour, setTours] = useState([]);

	useEffect(() => {
		fetchTour();
	}, []);

	const fetchTour = async () => {
		try {
			const response = await axios.get(
				`https://server-travel-booking.onrender.com/tours/${id}`
			);
			setTours(response.data);
		} catch (error) {
			console.error("Error fetching tours:", error);
		}
	};
  console.log(tour);
  
	const {
		photo,
		title,
		desc,
		price,
		address,
		reviews,
		city,
		distance,
		maxGroupSize,
	} = tour;

	const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
	let avgRating;
	if (totalRating === 0) {
		avgRating = "";
	} else {
		if (totalRating === 1) {
			avgRating = totalRating;
		} else {
			avgRating = totalRating / reviews?.length?.toFixed(1);
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [tour]);
	return (
		<Col lg={9}>
			<div className="tour__content">
                <h2>Tour Details</h2>
				<img src={photo} alt="" />

				<div className="tour__info">
					<h2>{title}</h2>

					<div className="d-flex align-items-center gap-5">
						<span className="tour__rating d-flex items-center gap-1">
							<i class="ri-star-fill"></i>
							{avgRating === 0 ? null : avgRating}
							{totalRating === 0 ? (
								"Not rated"
							) : (
								<span>({reviews?.length})</span>
							)}
						</span>

						<span className="tour__address">
							<i className="ri-map-pin-user-fill"></i> Somewhere
						</span>
					</div>

					<div className="tour__extra--details">
						<span>
							<i className="ri-map-pin-2-line"></i> {city}
						</span>
						<span>
							<i className="ri-money-dollar-circle-line"></i> ${price} per/
							person
						</span>
						<span>
							<i className="ri-map-pin-time-line"></i> {distance} km
						</span>
						<span>
							<i className="ri-group-line"></i> {maxGroupSize} people
						</span>
					</div>
					<div className="tour__desc">
						<h5>Description</h5>
						<p>{desc}</p>
					</div>
				</div>

				{/*+++=============== Review ================*/}

				<div className="tour__reviews mt-4">
					<h4>Reviews ({reviews?.length} reviews)</h4>
	
				</div>
			</div>
		</Col>
	);
};

export default TourDetails;
