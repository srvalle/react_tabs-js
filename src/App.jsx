import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
  { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
  { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
  { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
];

export const App = () => {
  let activeTabId = 'tab-30';

  const onTabSelected = (id, content, event) => {
    event.preventDefault();

    // acessar o li. event.target se refere ao elemento <a> que foi clicado.
    // parentNode é o pai dele, no caso o li, que precisamos para adicionar
    // a classe 'is-active'.
    const clickedLi = event.target.parentNode;
    const selectedTab = id.split('-');
    const title = document.querySelector('.title');
    const tabContent = document.querySelector('.block');
    const removeLiClass = document.querySelectorAll('[data-cy="Tab"]'); // poderia ser 'li'

    title.textContent = `Selected tab is Tab ${selectedTab[1]}`;
    tabContent.textContent = content;

    removeLiClass.forEach(li => {
      li.classList.remove('is-active');
    });

    clickedLi.classList.add('is-active');
  };

  activeTabId = tabs.find(tab => tab.id === activeTabId)?.id || tabs[0].id;
  const pageTitle = activeTabId.split('-')[1];
  // alert(titleActive);

  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab {pageTitle}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
