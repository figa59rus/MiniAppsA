import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, FormLayout } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {
    Panel,
    PanelHeader,
    PanelHeaderButton,
    Header,
    Group,
    Card,
    CardGrid,
    CardScroll,
    View,
    ContentCard,
} from '@vkontakte/vkui';

import persik from '../../img/shy.png';
import './Persik.css';
import Cyberpunk2077 from '../../img/Game_Banners/Cyberpunk2077.jpg';

const osName = platform();

export const Persik = (props) => (
    <Panel id={props.id}>
        <PanelHeader
            left={
                <PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>
            }
        >
            Игры
        </PanelHeader>        

            <Group description="Новинки">
                <CardScroll size="s">
                    <Card>
                        <img src={Cyberpunk2077} alt="Cyberpunk2077" width="100%" height="100%"/>
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '66%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '66%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '66%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '66%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '66%' }} />
                    </Card>
                </CardScroll>
            </Group>

            <Group separator="hide" header={<Header mode="secondary">Cyberpunk 2077</Header>}>
                <CardGrid>
                    <Card size="l" mode="shadow">
                        <div style={{ height: 96 }} />
                    </Card>
                </CardGrid>
            </Group>
    </Panel>
);

Persik.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik;
