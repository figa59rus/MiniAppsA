import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { Panel, PanelHeader, PanelHeaderButton, Header, Group, Card, CardGrid, CardScroll } from '@vkontakte/vkui';

import './GameList.css';

import Cyberpunk2077 from '../../img/Game_Banners/Cyberpunk2077.jpg';
import AS_Valhalla from '../../img/Game_Banners/Assassins_Creed_Valhalla_cover.png';
import It_Takes_Two from '../../img/Game_Banners/It_Takes_Two.jpg';

const osName = platform();

export const GameList = (props) => {
    const headerButton = (
        <PanelHeaderButton onClick={props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
    );

    return (
        <Panel id={props.id}>
            <PanelHeader left={headerButton} >Игры</PanelHeader>

            <Group description="Новинки">
                <CardScroll size="s">
                    <Card>
                        <div className="card-image" style={{ backgroundImage: `url(${Cyberpunk2077})` }} />
                    </Card>
                    <Card>
                        <div className="card-image" style={{ backgroundImage: `url(${AS_Valhalla})` }} />
                    </Card>
                    <Card>
                        <div className="card-image" style={{ backgroundImage: `url(${It_Takes_Two})` }} />
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
                <CardGrid size="m">
                    <Card>
                        <div style={{ paddingBottom: '62%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '62%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '62%' }} />
                    </Card>
                    <Card>
                        <div style={{ paddingBottom: '62%' }} />
                    </Card>
                </CardGrid>
            </Group>
        </Panel>
    );
};

GameList.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default GameList;
