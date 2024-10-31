import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {
//     prioritiesFilterChange,
//     searchFilterChange,
//     statusFilterChange,
// } from '../../redux/actions';
import filtersSlice from '../Filters/filterSlice';

const { Search } = Input;

export default function Filters() {
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('');
    const [priorities, setPriorities] = useState([]);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
    };

    const handleStatus = (e) => {
        setStatus(e.target.value);
        dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
    };

    const handlePriorities = (value) => {
        setPriorities(value);
        dispatch(filtersSlice.actions.prioritiesFilterChange(value));
    };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    value={searchText}
                    placeholder="input search text"
                    onChange={handleSearch}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={status} onChange={handleStatus}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    value={priorities}
                    onChange={handlePriorities}
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
            </Col>
        </Row>
    );
}
