import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { FormLayout, Select } from '@vkontakte/vkui';

import './Home.css';

let Resoult=0;

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Твой ПК</PanelHeader>
		{fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					<p> Привет {`${fetchedUser.first_name} ${fetchedUser.last_name}`}! Давай соберем твой ПК!</p>
				</Cell>
			</Group>}

		{/*<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Покажи
				</Button>
			</Div>
		</Group>
		*/}
		
		<FormLayout>
			<Group title="Оценка">
				<div className="Circle">
					<p className="Resoult">{Resoult}</p>
				</div>
			</Group>

			<Group title="Комплектующие" >
				<Select placeholder="Видеокарта">
					<option value="Videocard-9">Nvidia RTX 3090</option>
					<option value="Videocard-5">Radeon RX 5800TX</option>
					<option value="Videocard-7">Nvidia RTX 2080Ti</option>

				</Select>
				<Select placeholder="Процессор">
					<option value="Processor-9">AMD Ryzen 7 5000</option>
					<option value="Processor-5">Intel Core i7 11700</option>
					<option value="Processor-7">Intel Core i5 9300</option>

				</Select>
				<Select placeholder="Колличество оперативной памяти">
					<option value="RAM-9">32Gb</option>
					<option value="RAM-5">16Gb</option>
					<option value="RAM-7">8Gb</option>

				</Select>
				<Select placeholder="HDD или SSD">
					<option value="Storage-6">SSD</option>
					<option value="Storage-9">SSD (NVMe)</option>
					<option value="Storage-4">HDD</option>

				</Select>

			</Group>
		</FormLayout>

	</Panel>
);

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

export default Home;
