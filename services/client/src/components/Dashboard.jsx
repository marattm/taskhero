import React from 'react';
import { Table, Badge} from 'react-bootstrap';

const task_list = [
    {
        'task_name': 'Empty Dishwasher',
        'counter': 0,
    },
    {
        'task_name': 'Fill Dishwasher',
        'counter': 0,
    },
    {
        'task_name': 'Take Garbage',
        'counter': 0,
    },
    {
        'task_name': 'Clean Tables',
        'counter': 0,
    },
    {
        'task_name': 'Clean Stove Top',
        'counter': 0,
    },
    {
        'task_name': 'Clean Floor',
        'counter': 0,
    },
    {
        'task_name': 'Clean Bathroom',
        'counter': 0,
    },
    {
        'task_name': 'Paper Towel',
        'counter': 0,
    },
    {
        'task_name': 'Toilet Paper',
        'counter': 0,
    },
    {
        'task_name': 'Kitchen Soap',
        'counter': 0,
    },
    {
        'task_name': 'Bleacher',
        'counter': 0,
    },
    {
        'task_name': 'Dishwasher Pods',
        'counter': 0,
    }
    ]

const import_list = (user) => {
    task_list[0].counter = user.empty_dishwasher
    task_list[1].counter = user.fill_dishwasher
    task_list[2].counter = user.take_garbage
    task_list[3].counter = user.clean_tables
    task_list[4].counter = user.clean_stove_top
    task_list[5].counter = user.clean_floor
    task_list[6].counter = user.clean_bathroom
    task_list[7].counter = user.paper_towel
    task_list[8].counter = user.toilet_paper
    task_list[9].counter = user.kitchen_soap
    task_list[10].counter = user.bleacher
    task_list[11].counter = user.dishwasher_pods

    return task_list
}


const Dashboard = (props) => {
    return(
        <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        {/* <th style={{ textAlign: "center" }}>Tasks</th> */}
                        {
                            props.users.map((user) => {
                                return(
                                        <th key={user.id} style={{ textAlign: "center" }}>{user.username}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        Empty Dishwasher
                            </tr>
                    <tr>
                        Fill Dishwasher
                            </tr>
                    <tr>
                        Take Garbage
                            </tr>
                    <tr>
                        Clean Tables
                            </tr>
                    <tr>
                        Clean Stove Top
                            </tr>
                    <tr>
                        Clean Floor
                            </tr>
                    <tr>
                        Clean Bathroom
                            </tr>
                    <tr>
                        Paper Towel
                            </tr>
                    <tr>
                        Toilet Paper
                            </tr>
                    <tr>
                        Kitchen Soap
                            </tr>
                    <tr>
                        Bleacher
                            </tr>
                    <tr>
                        Dishwasher Pods
                            </tr> */}
                    {props.users.map((user) => {
                        return(
                            
                            <td>
                                {
                                    import_list(user).map((task) => {
                                        return(
                                            <tr>
                                                <tr>
                                                    <Badge>
                                                        {task.counter}
                                                    </Badge>
                                                    {task.task_name}
                                                </tr>
                                            </tr>
                                        )
                                    })
                                }
                            </td>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
};

export default Dashboard;