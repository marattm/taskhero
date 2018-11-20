import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


const LogForm = (props) => {
    return (
        <div>
            <form onSubmit={(event) => props.handleSubmitLogForm(event)}>
                <FormGroup controlId="formControlsSelect" >
                    <ControlLabel>Choose a Task..</ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        value={props.value}
                        onChange={props.handleLogFormChange}>
                        <option value="empty_dishwasher">Empty Dishwasher</option>
                        <option value="fill_dishwasher">Fill Dishwasher</option>
                        <option value="take_garbage">Take Garbage</option>
                        <option value="clean_tables">Clean Tables</option>
                        <option value="clean_stove_top">Clean Stove Top</option>
                        <option value="clean_floor">Clean Floor</option>
                        <option value="clean_bathroom">Clean Bathroom</option>
                        <option value="paper_towel">Paper Towel</option>
                        <option value="toilet_paper">Toilet Paper</option>
                        <option value="kitchen_soap">Kitchen Soap</option>
                        <option value="bleacher">Bleacher</option>
                        <option value="dishwasher_pods">Dishwasher Pods</option>
                    </FormControl>
                </FormGroup>
                <Button
                    type="submit"
                    large block bsStyle="success"
                    value="Submit"
                >
                    And log it, Brat!
                </Button>
                <br />
            </form>
        </div>
    )
}

export default LogForm