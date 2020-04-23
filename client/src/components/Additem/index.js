import React from 'react';
import { Form, Button} from 'react-bootstrap';
function Additem() {
  return (
    <main role="main">

      <section class="jumbotron text-left">
        <div class="container">
          <Form>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="Add item" />
              <Form.Text className="text-muted">
                Enter the item name.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Add to list</Button>
          </Form>
        </div>
      </section>
      </main>
      );
}

export default Additem;