import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

import './Intro.css';
import witcher from '../../img/witcher.jpg';
export const Intro = ({ id, go }) => (
	<Panel id={id} centered={true}>
		<PanelHeader>Твой ПК</PanelHeader>
		{
			<Fragment>
				<Group>
					<Div className='Hello'>
						<h2>Добро пожаловать!</h2>
						<h3>Этот сервис поможет тебе оценить твой PC, узнать в какие игры и на каких настройках ты сможешь играть! И это далеко не всё...</h3>
					</Div>
					<Div className='Image'>
						<img className="Witcher" src={witcher} />
					</Div>
				</Group>
				<FixedLayout vertical='bottom'>
					<Div className='Image'>
						<Button mode='commerce' size="xl" level="2" onClick={go} data-to="home">
							ОК, всё понятно
						</Button>
					</Div>
				</FixedLayout>
			</Fragment>
		}
	</Panel>
);
export default Intro;