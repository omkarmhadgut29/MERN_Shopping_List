import React, { useEffect } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import {
    deleteItem,
    getItems,
    loadItems,
    setItemLoading,
} from "../features/itemSlice";
import axios from "axios";

function ShoppingList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItemLoading());
        axios
            .get("https://shoppinglist-api-8wio.onrender.com/api/items")
            .then((res) => {
                dispatch(loadItems(res.data));
            });
    }, [dispatch]);

    const items = useSelector(getItems);

    return (
        <Container>
            <ListGroup>
                {items.map(({ _id, name }) => {
                    return (
                        <CSSTransition
                            key={_id}
                            timeout={500}
                            classNames="fade"
                        >
                            <ListGroupItem>
                                <Button
                                    className="remove_btn"
                                    color="danger"
                                    onClick={() => {
                                        dispatch(deleteItem(_id));
                                    }}
                                    size="sm"
                                >
                                    &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    );
                })}
            </ListGroup>
        </Container>
    );
}

export default ShoppingList;
