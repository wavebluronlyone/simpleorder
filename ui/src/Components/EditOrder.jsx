import React from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import { url } from '../config';

class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.finishOrder = this.finishOrder.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  async finishOrder() {
    const { match, history } = this.props;
    const post = {
      OrderId: match.params.id,
    };
    await axios.post(`${url}finish/`, post);
    history.push('/');
  }

  async submitEdit() {
    const { Name, Url, id } = this.props;
    await axios.patch(url, {
      RestaurantName: Name,
      RestaurantUrl: Url,
      OrderId: parseInt(id, 10),
    });
    this.toggle();
  }
  render() {
    const { Name, Url, Handle } = this.props;
    return (
      <div>
        <ButtonGroup>
          <Button style={{ margin: '10%' }} onClick={this.toggle}>แก้ไข Order</Button>
          <Button
            color="success"
            style={{
              margin: '2%',
            }}
            onClick={() => this.finishOrder()}
          >ปิด Order
          </Button>
        </ButtonGroup>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} />
          <ModalBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">ร้าน</InputGroupAddon>
              <Input name="RestaurantName" type="text" value={Name} onChange={Handle} />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Link</InputGroupAddon>
              <Input name="RestaurantUrl" type="text" value={Url} onChange={Handle} />
            </InputGroup>
          </ModalBody>
          <ModalFooter><Button color="warning" onClick={() => this.submitEdit()}>แก้ไข</Button></ModalFooter>
        </Modal>
      </div>
    );
  }
}

EditOrder.proptype = {
  Name: PropTypes.string.required,
  Url: PropTypes.string.required,
  id: PropTypes.string.required,
};

export default EditOrder;
