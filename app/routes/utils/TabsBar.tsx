import {  useCallback, useState } from "react";
import  TestComponent from '../components/Test'
import { Tabs, LegacyCard, Layout } from '@shopify/polaris';

export const tabs = [
    {
      id: "all-customers",
      content: "All",
      panelID: 'all-customers-content',
      component: <TestComponent />
    },
    {
      id: "accepts-marketing-1",
      content: "Ongoing",
      panelID: 'accepts-marketing-1'
    },
    {
      id: "repeat-customers-1",
      content: "Draft",
      panelID: 'repeat-customers-1'
    },
    {
      id: "prospects-1",
      content: "Completed",
      panelID: 'prospects-content-1'
    }
]
type Props = {};
const TabsBar = (props: Props) => {
  const [ selected, setSelected ] = useState(0);
  const handleTabChange = useCallback( (selectedTabIndex: number) => {
    setSelected(selectedTabIndex)
  }, [])

  return (
    <Layout.Section>
      <LegacyCard>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
        <LegacyCard title={tabs[selected].content} sectioned>
          <p>{ tabs[selected].component }</p>
        </LegacyCard>
      </LegacyCard>
    </Layout.Section>
  )
}

export default TabsBar;