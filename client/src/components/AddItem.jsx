import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
} from "reactstrap";

import { addItem } from "../features/itemSlice";

const AddItem = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const toggle = () => {
        setModal(!modal);
    };

    const onInputChange = (e) => {
        setName(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({ name: name }));
        toggle();
    };
    return (
        <div>
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2em" }}
                    onClick={toggle}
                >
                    Add Item
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        Add To Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={onFormSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Shopping Item"
                                    onChange={onInputChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        </div>
    );
};

export default AddItem;
