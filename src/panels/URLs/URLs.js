import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { platform, IOS } from '@vkontakte/vkui';

import ali2 from '../../img/ali2.jpg';
import computeruniverse from '../../img/computeruniverse.jpg';
import citilink from '../../img/citilink.jpg';
import './URLs.css';
const osName = platform();

export const URLs = ({ id, go }) => (
	<Panel id={id} centered={true}>
		<PanelHeader left={
                <PanelHeaderButton onClick={go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>
            }>Лучшие места для покупки коплектующих</PanelHeader>
			<Fragment>
				<Group>
                    <Div className='Image'>
                        <img src={ali2}/>
                    </Div>
                    <Div className='Text'>
                        <p>Многие товары на AliExpress.com стоят гораздо ниже, чем в отечественных онлайн и офлайн-магазинах. Большая вероятность того, что выбранный вами товар продается непосредственно с оптовой базы или фабрики. Значит нет посредников, а наценки минимальные.</p>
                        <p><b>Именно это главный плюс Алиэкспресс</b>, и основная причина такой большой популярности сайта. Здесь определенно стоит покупать хорошие китайские товары по низкой цене!</p>
                    </Div>
                    <Div className='Url'>
                        <Button mode="commerce" href="https://letyshops.com/r/aliexpress-52f2d85d4766">Aliexpress</Button>
                    </Div>       
				</Group>
                <Group>
                    <Div className='Image'>
                        <img src={computeruniverse}/>
                    </Div>
                    <Div className='Text'>
                        <p>Computeruniverse — это большой онлайн-магазин электроники и бытовой техники. <b>Это не торговая площадка, наподобие eBay или AliExpress</b>, в которой размещается множество продавцов. Поэтому взаимодействовать с Computeruniverse гораздо проще. Россияне полюбили немецкий магазин за низкие цены, бонусную программу и адекватную техническую поддержку.</p>
                        <p>Ассортимент процессоров и видеокарт здесь в разы больше, чем в отечественных магазинах. Постоянные скидки на процессоры, оперативную память, на видеокарты и прочие комплектующие. В Computeruniverse часто бывают акции, когда цена на определенный товар (например, видеокарту) падает на 30-40%.</p>
                    </Div>
                    <Div className='Url'>
                        <Button mode="commerce" href="https://letyshops.com/r/computeruniverse-de-39a733f5b06c">Computeruniverse</Button>
                    </Div>    
                </Group>
                <Group>
                    <Div className='Image'>
                        <img src={citilink}/>
                    </Div>
                    <Div className='Text'>
                        <p>Интернет-магазина по продаже компьютерной техники <b>Ситилинк стоит на первом месте в рейтинге ТОП-10</b>. Вы можете быть уверены, что на их складе только лучшая техника для дома и офиса. Вся техника продается по доступным ценам и поставляется с полной заводской гарантией.</p>
                        <p>Разнообразие запчастей, доступных в магазине, ошеломляет. Поэтому очень приятно, что на Ситилинк есть эффективная система фильтрации, которая помогает покупателю точно определить желаемый товар. Интернет-магазин предлагает уцененные товары по сниженной цене и всячески стремится удовлетворить желание заказчика.</p>
                    </Div>
                    <Div className='Url'>
                        <Button mode="commerce" href="https://letyshops.com/r/sitilink-d295faefd89c">Citilink</Button>
                    </Div>    
                </Group>
			</Fragment>
	</Panel>
);
export default URLs;