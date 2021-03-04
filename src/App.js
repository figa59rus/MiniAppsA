import React, { useState, useEffect, Fragment } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home/';
import Intro from './panels/Intro';
import GameList from './panels/GameList';
import Testview from './panels/TestView';
import URLs from './panels/URLs';

const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
	URLS: 'urls',
  GAMELIST: 'gamelist',
  TESTVIEW: 'testview'
};

const App = () => {
    const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(null);

    useEffect(() => {
        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }
        fetchData();
    }, []);

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <View activePanel={activePanel} popout={popout}>
            <Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go} />
			      <Intro id={ROUTES.INTRO} go={go}/>
			      <URLs id={ROUTES.URLS} go={go}/>
            <GameList id={ROUTES.GAMELIST} go={go} />
            <Testview id={ROUTES.TESTVIEW} go={go} />
        </View>
    );
};

export default App;
