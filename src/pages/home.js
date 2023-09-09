import React from "react"
import { Feature, OptForm } from "../components"
import { HeaderContainer } from "../containers/header"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { FaqsContainer } from "../containers/faqs"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Lorem ipsum dolor sit amet, consectetur.
          </Feature.Title>
          <Feature.SubTitle>
            Vestibulum rhoncus. venenatis dui at bibendum.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Mauris consequat magna metus, nec imperdiet quam porta in.
              Praesent posuere.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
