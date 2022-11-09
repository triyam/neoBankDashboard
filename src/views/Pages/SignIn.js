import React from "react";
// Chakra imports
import {
	Box,
	Flex,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Switch,
	Text,
	DarkMode,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { Link as ReactLink } from "react-router-dom";

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";
import { BasicAlert } from "components/Modals/BasicAlert";

import { sendLoginRequest } from "../../apis/userAuth";

const SignIn = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [showAlert, setShowAlert] = React.useState({ show: false }); //modal
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	let history = useHistory();

	const handleModalClose = () => {
		setShowAlert({ show: false });
		if (isLoggedIn) {
			history.push("/dashboard");
		}
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		sendLoginRequest(email, password).then((res) => {
			console.log(res);

			if (res.isLoggedIn === true) {
				setIsLoggedIn(true);
				setShowAlert({
					show: true,
					title: "Login Status",
					message: res.message,
					closeBtnName: "Go to Dashboard",
				});
			} else {
        setIsLoggedIn(false);
				setShowAlert({
					show: true,
					title: "Login Failed",
					message: res.message,
					closeBtnName: "Try Again",
				});
			}
		});
	};

	const titleColor = "white";
	const textColor = "gray.400";

	return (
		<Flex position="relative">
			<Flex
				minH="100vh"
				h={{ base: "120vh", lg: "fit-content" }}
				w="100%"
				maxW="1044px"
				mx="auto"
				pt={{ sm: "100px", md: "0px" }}
				flexDirection="column"
				me={{ base: "auto", lg: "50px", xl: "auto" }}
			>
				<Flex
					alignItems="center"
					justifyContent="start"
					style={{ userSelect: "none" }}
					mx={{ base: "auto", lg: "unset" }}
					ms={{ base: "auto", lg: "auto" }}
					w={{ base: "100%", md: "50%", lg: "450px" }}
					px="50px"
				>
					<Flex
						direction="column"
						w="100%"
						background="transparent"
						mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
						mb={{ base: "60px", lg: "95px" }}
					>
						<Heading color={titleColor} fontSize="32px" mb="10px">
							Nice to see you!
						</Heading>
						<Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
							Enter your email and password to sign in
						</Text>

						<form onSubmit={handleOnSubmit}>
							<FormControl>
								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Email
								</FormLabel>
								<GradientBorder
									mb="24px"
									w={{ base: "100%", lg: "fit-content" }}
									borderRadius="20px"
								>
									<Input
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: "100%", md: "346px" }}
										maxW="100%"
										h="46px"
										placeholder="Your email adress"
										name="email"
										value={email}
										onChange={handleOnChange}
									/>
								</GradientBorder>
							</FormControl>
							<FormControl>
								<FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
									Password
								</FormLabel>
								<GradientBorder
									mb="24px"
									w={{ base: "100%", lg: "fit-content" }}
									borderRadius="20px"
								>
									<Input
										color="white"
										bg="rgb(19,21,54)"
										border="transparent"
										borderRadius="20px"
										fontSize="sm"
										size="lg"
										w={{ base: "100%", md: "346px" }}
										maxW="100%"
										type="password"
										placeholder="Your password"
										name="password"
										onChange={handleOnChange}
										value={password}
									/>
								</GradientBorder>
							</FormControl>
							<FormControl display="flex" alignItems="center">
								<DarkMode>
									<Switch id="remember-login" colorScheme="brand" me="10px" />
								</DarkMode>
								<FormLabel htmlFor="remember-login" mb="0" ms="1" fontWeight="normal" color="white">
									Remember me
								</FormLabel>
							</FormControl>
							<Button
								variant="brand"
								fontSize="10px"
								type="submit"
								w="100%"
								maxW="350px"
								h="45"
								mb="20px"
								mt="20px"
							>
								SIGN IN
							</Button>
						</form>
						<Flex
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							maxW="100%"
							mt="0px"
						>
							<Text color={textColor} fontWeight="medium">
								Don't have an account?
								<Link to='/auth/signup' as={ReactLink} color={titleColor}  ms="5px" fontWeight="bold">
									Sign Up
								</Link>
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Box
					w={{ base: "335px", md: "450px" }}
					mx={{ base: "auto", lg: "unset" }}
					ms={{ base: "auto", lg: "auto" }}
					mb="80px"
				>
					<AuthFooter />
				</Box>
				<Box
					display={{ base: "none", lg: "block" }}
					overflowX="hidden"
					h="100%"
					maxW={{ md: "50vw", lg: "50vw" }}
					minH="100vh"
					w="960px"
					position="absolute"
					left="0px"
				>
					<Box
						bgImage={signInImage}
						w="100%"
						h="100%"
						bgSize="cover"
						bgPosition="50%"
						position="absolute"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Text
							textAlign="center"
							color="white"
							letterSpacing="8px"
							fontSize="20px"
							fontWeight="500"
						>
							INSPIRED BY THE FUTURE:
						</Text>
						<Text
							textAlign="center"
							color="transparent"
							letterSpacing="8px"
							fontSize="36px"
							fontWeight="bold"
							bgClip="text !important"
							bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
						>
							THE VISION UI DASHBOARD
						</Text>

						<BasicAlert
							show={showAlert.show}
							handleModalClose={handleModalClose}
							title={showAlert.title}
							message={showAlert.message}
							closeBtnName={showAlert.closeBtnName}
						/>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
};

export default SignIn;
