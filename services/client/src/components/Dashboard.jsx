import React from 'react';
import { Table, Badge} from 'react-bootstrap';

const task_list = [
    {
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

const Dashboard = (props) => {
    return(
        <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Tasks</th>
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
                    {/* {tableau(props.users)} */}

                    {/* work in progress */}
                    {/* {task_list.map((task) => {
                        return (
                            <tr>
                                <td>
                                    {task.task_name}
                                </td>
                                {
                                    props.users.map((user) => {
                                        return (
                                            <td key={user.id}>
                                                {user.tasks_counter_list.counter}
                                                {console.log("counter: " + user.tasks_counter_list.counter)}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })} */}

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

                    {/* {task_list.map((task) => {
                        return (
                            <tr>
                                <td>
                                    {task.task_name}
                                </td>
                                {
                                    props.users.map((user) => {
                                        return (
                                            <td key={user.id}>
                                                {user.tasks_counter_list.counter}
                                                {console.log("counter: " + user.tasks_counter_list.counter)}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })} */}


                    {/* {task_list.map((task) => {
                        for (let index = 0; index < props.users.tasks_counter_list.length; index++) {
                            const element = user.tasks_counter_list[index];
                        }
                                return(
                                    <tr>
                                        <td>
                                            {task.task_name}
                                        </td>
                                        {
                                            props.users.map((user) => {
                                                return(
                                                    <td key={user.id}>
                                                        
                                                        {element.counter}
                                                        {console.log("counter: " + element.counter )}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                    })} */}

                    {/* {props.users.map((user) => {

                    })} */}

                                        {/* {task_list.map((task) => {
                        return(
                            <tr>
                                <td>
                                    {task.task_name}
                                </td>
                                {
                                    props.users.map((user) => {
                                        return(
                                            <td key={user.id}>
                                                {user.tasks_counter_list.counter}
                                                {console.log("counter: " + user.tasks_counter_list.counter )}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })}


                    {/* <tr>
                        <td>
                            {task_list[0].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr> */}

                    {/* <tr>
                        <td>
                            {task_list[1].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[1].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[2].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[3].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[4].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[5].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[6].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[7].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[8].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[9].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[10].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {task_list[11].task_name}
                        </td>
                        <td>
                            {import_list(props.users)[0].task_name}
                        </td>
                    </tr> */}

                    {/* <tr>
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

                    {/* {task_list.map((task) => {
                        return(
                            <div>
                                <td>
                                    {task.task_name}
                                    <tr>

                                            {props.users.map((user) => {
                                                return(
                                                    // <tr>
                                                        // {
                                                            import_list(user).map((task2) => {
                                                                return(
                                                                    // <tr>
                                                                        <tr>
                                                                            <Badge>
                                                                                {task2.counter}
                                                                            </Badge>
                                                                        </tr>
                                                                    // </tr>
                                                                )
                                                            })
                                                        // }
                                                    // </tr>
                                                )
                                            })}

                                    </tr>
                                </td>
                            </div>
                        )
                    })
                    } */}
                </tbody>
            </Table>
        </div>
    )
};

export default Dashboard;