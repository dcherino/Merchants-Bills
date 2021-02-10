import { useState } from 'react';
import {
  Main,
  InnerWrapper,
  TabsNavigation,
  TabsContainer,
} from './Tabs.styles';
import TabsContent from './TabsContent';

const Tabs = () => {
  const [active, setActive] = useState<string>('bills');

  const toggleActive = (option: string): void => {
    setActive(option);
  };

  return (
    <Main>
      <InnerWrapper>
        <TabsContainer>
          <TabsNavigation>
            <nav>
              <ul>
                <li>
                  <button
                    className={active === 'bills' ? 'isActive' : ''}
                    onClick={() => toggleActive('bills')}
                  >
                    Bills
                  </button>
                </li>
                <li>
                  <button
                    className={active === 'potentials' ? 'isActive' : ''}
                    onClick={() => toggleActive('potentials')}
                  >
                    Potential Bills
                  </button>
                </li>
              </ul>
            </nav>
          </TabsNavigation>
          <TabsContent elementActive={active} />
        </TabsContainer>
      </InnerWrapper>
    </Main>
  );
};

export default Tabs;
