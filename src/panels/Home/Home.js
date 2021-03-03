import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Cell, Div, Avatar, FormLayout, Select } from '@vkontakte/vkui';

import store from '../../store/hardware';

import './Home.css';

console.log(store);

export const Home = ({ id, go, fetchedUser, snackbarError, fetchedState}) => {
    const [score, setScore] = useState(0);
    const [values, setValues] = useState({});
    const [selectedGpu, setSelectedGpu] = useState(null);

    const onSelectChange = (event, selectIndex) => {
        const { name, options } = store[selectIndex];
        const currentValue = values?.[name]?.value ?? 0;

        if (!event.target.value.length) {
            setScore(score - currentValue);
            setValues({ ...values, [name]: undefined });
            return;
        }

        const selectedOption = options[event.target.value];

        setScore(score - currentValue + selectedOption.value);
        setValues({ ...values, [name]: selectedOption });
    };

    return (
        <Panel id={id}>
            <PanelHeader>Твой ПК</PanelHeader>
            {fetchedUser && fetchedState (
                <Group title="User Data Fetched with VK Bridge">
                    <Cell
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                    >
                        <p> Привет {`${fetchedUser.first_name} ${fetchedUser.last_name}`}! Давай соберем твой ПК!</p>
                    </Cell>
                </Group>
            )}

            <Group title="Navigation Example">
                <Div>
                    <Button size="xl" level="2" onClick={go} data-to="persik">
                        Покажи
                    </Button>
                </Div>
            </Group>

            <FormLayout>
                <Group title="Оценка">
                    <div className="Circle">
                        <p className="result">{score}</p>
                    </div>
                </Group>
                <Group title="Комплектующие" className="hardwares">
                    {store.map(({ name, options }, selectIndex) => (
                        <Select
                            key={name}
                            placeholder={name}
                            value={values?.[name]}
                            onChange={(event) => onSelectChange(event, selectIndex)}
                        >
                            {options.map((item, index) => (
                                <option key={item.name} value={index}>
                                    {item.name}
                                </option>
                            ))}
                        </Select>
                    ))}
                </Group>

                <Div className="footer">
                    <Button level="3" component="a" onClick={go} data-to="urls">Где купить?</Button>
                </Div>
            </FormLayout>
        </Panel>
    );
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};
