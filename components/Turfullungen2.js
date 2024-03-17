import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Turfullungen2() {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Attach the event listener only on the client side
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isMobile = windowWidth <= 768;

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);

	return (
		<Container
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={6} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">DINDECOR - DIE SERIE PREMIUM</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din1.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din2.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din3.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din4.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din5.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din6.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din7.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din8.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din9.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din10.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din11.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din12.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din13.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din14.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din15.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din16.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din17.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din18.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din19.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din20.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din21.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din22.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din23.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din24.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din25.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din26.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din27.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din28.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din29.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din30.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din31.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din32.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din33.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din34.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din35.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din36.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din37.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din38.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din39.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din40.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din41.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din42.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din43.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din44.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din45.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din46.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din47.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din48.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din49.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din50.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din51.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din52.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din53.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din54.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din55.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Turfullungen2;
