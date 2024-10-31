import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'; //generate id unique
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todosSlice';

export default function TodoList() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const todoList = useSelector(todosRemainingSelector);

    const handleAddTodo = () => {
        // dispatch()
        dispatch(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        setTodoName('');
        setPriority('Medium');
    };
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col
                span={24}
                style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
            >
                {todoList &&
                    todoList.map((todo) => (
                        <Todo
                            key={todo.id}
                            name={todo.name}
                            prioriry={todo.priority}
                            completed={todo.completed}
                            id={todo.id}
                        />
                    ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                    />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={(value) => setPriority(value)} //khac bth do dang xai antd
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
