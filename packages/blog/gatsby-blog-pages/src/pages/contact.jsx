import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

const PageContact = props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Let's Connect"
          subheader="The fusion of artistic creativity and scientific principles in the realm of business analysis can lead to groundbreaking insights and innovative solutions. Our team is dedicated to cultivating an open and collaborative environment where diverse ideas can flourish. We invite you to reach out to us with your comments, suggestions, or any thoughts you'd like to share. Your valuable input can help us explore new perspectives and enrich the quality of our content. Let's work together to push the boundaries of business analysis and celebrate the harmonious blend of art and science."
        />
        <Divider />
        <ContactForm />
      </Main>
      <Sidebar>
        {/* <Commitment /> */}
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>
)

export default PageContact
