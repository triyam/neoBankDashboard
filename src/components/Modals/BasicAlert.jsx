import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
  Button,
} from "@chakra-ui/react";

const BasicAlert = ({ show, handleModalClose, title, message, closeBtnName }) => {
  
	return (
		<>
			<Modal onClose={handleModalClose} isOpen={show} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title ? title : "Modal Title"}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{message ? message :"message Body"}</ModalBody>
					<ModalFooter>
						<Button onClick={handleModalClose}>{closeBtnName ? closeBtnName : "close"}</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export { BasicAlert };
