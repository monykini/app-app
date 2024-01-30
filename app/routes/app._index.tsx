import React from "react";
import { Page, Layout, InlineGrid, Text, Button } from '@shopify/polaris';
import TabsBar  from './utils/TabsBar'
type Props = {};
const Index = ( props: Props) => {
  return(
    <Page>
        <Layout>
          <Layout.Section>
              <InlineGrid columns={2}>
                <Text variant="heading3xl" as="h2">Campaigns</Text>
                <Button>Create New +</Button>
              </InlineGrid>
          </Layout.Section>
          <TabsBar />
        </Layout>
    </Page>
  )
}

export default Index;