import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Input, FormGroup, InputGroup, InputGroupAddon } from 'reactstrap';


const AddDishModal = props => (
  <Modal isOpen={props.modalDish} toggle={props.toggleModaladdDish}>
    <ModalBody>
      <FormGroup row="row">
        <InputGroup>
          <InputGroupAddon addonType="prepend">ชื่อเมนู&nbsp;</InputGroupAddon>
          <div style={{minWidth: '76%',}}>
            <Input type="text" name="DishName" maxLength="60" value={props.DishName} onChange={props.handleDishname}require />
          </div>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">คนสั่ง&nbsp;&nbsp;</InputGroupAddon>
          <Input type="text" name="Name" maxLength="10" value={props.Name} onChange={props.handleName} require />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">จำนวน</InputGroupAddon>
          <Input type="number" name="unit" min="1" max="50" value={props.unit} onChange={props.handleunit}require />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">ราคา</InputGroupAddon>
          <Input type="number" name="unit" value={props.cost} onChange={props.handleCost} require/>
        </InputGroup>
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button color="default" className="mr-auto" onClick={props.toggleModaladdDish}>Close</Button>
      <Button color="success" onClick={props.addDish}>Add</Button>
    </ModalFooter>

  </Modal>
);

export default AddDishModal;
