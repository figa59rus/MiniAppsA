import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Cell, Div, Avatar, FormLayout, NativeSelect, Card,CardScroll,} from '@vkontakte/vkui';

import store from '../../store/hardware';

import './Home.css';

console.log(store);

export const Home = ({ id, go, fetchedUser, snackbarError, fetchedState}) => {
    const [score, setScore] = useState(0);
    const [values, setValues] = useState({});

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

            <FormLayout>
                <Group title="Оценка">
                    <div className="Circle">
                        <p className="result">{score}</p>
                    </div>
                </Group>
                <Group title="Комплектующие" className="hardwares">
                    {store.map(({ name, options }, selectIndex) => (
                        <NativeSelect
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
                        </NativeSelect>
                    ))}
                </Group>

                <Div className="footer">
                    <Button level="3" component="a" onClick={go} data-to="urls">Где купить?</Button>
                </Div>
            </FormLayout>
            <Group title="Navigation Example">
                <Div style={{ display: 'flex' }}>
                    <Button size="l" onClick={go} data-to="persik" stretched style={{ marginRight: 8 }}>
                        Постмотреть игры
                    </Button>
                    <Button size="l" onClick={go} data-to="testview" stretched mode="secondary">
                        Test
                    </Button>
                </Div>
            </Group>
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
