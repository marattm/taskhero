import React, { Components, Fragment } from 'react';
import { Table, Badge } from 'react-bootstrap';


const task_list = [{
    'task_name': 'Empty Dishwasher',
    'id': 0,
},
{
    'task_name': 'Fill Dishwasher',
    'id': 1,
},
{
    'task_name': 'Take Garbage',
    'id': 2,
},
{
    'task_name': 'Clean Tables',
    'id': 3,
},
{
    'task_name': 'Clean Stove Top',
    'id': 4,
},
{
    'task_name': 'Clean Floor',
    'id': 5,
},
{
    'task_name': 'Clean Bathroom',
    'id': 6,
},
{
    'task_name': 'Paper Towel',
    'id': 7,
},
{
    'task_name': 'Toilet Paper',
    'id': 8,
},
{
    'task_name': 'Kitchen Soap',
    'id': 9,
},
{
    'task_name': 'Bleacher',
    'id': 10,
},
{
    'task_name': 'Dishwasher Pods',
    'id': 11,
}
]

const import_list = (user) => {
    console.log(user);

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

    const tableau = (users) => {
        for (let index = 0; index < task_list.length; index++) {
            const element = task_list[index];
            return (
                <tr>
                    <td>
                        {element.task_name}
                    </td>
                    {
                        users.map((user) => {
                            return (
                                <td key={user.id}>
                                    {user.tasks_counter_list[index].counter}
                                </td>
                            )
                        })
                    }
                </tr>
            )
        }
    }


    return (
        <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Tasks</th>
                        {
                            props.users.map((user) => {
                                return (
                                    <th key={user.id} style={{ textAlign: "center" }}>{user.username}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {task_list.map((task) => {
                        return (
                            <tr>
                                <td style={{ textAlign: "center" }}>
                                    {task.task_name}
                                </td>
                                {
                                    props.users.map((user) => {
                                        return (
                                            <td key={user.id} style={{ textAlign: "center" }}>
                                                <Badge>
                                                    {user.tasks_counter_list[task.id].counter}
                                                </Badge>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard