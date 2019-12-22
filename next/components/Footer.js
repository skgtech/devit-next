import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

import { Grid, Row, Col } from 'react-flexbox-grid'

import wedge from '../public/new/wedge.svg'
import logo from '../public/logo/white/logo.svg'

const CopyrightText = styled.span({
  opacity: 0.7,
})
const CopyrightLink = styled.a({
  color: 'white',
})

const FooterMenuWrapper = styled.div({
  marginBottom: '40px',
})

const FooterMenuHeader = styled.div({
  color: 'white',
  fontWeight: '900',
  marginBottom: '10px',
  textTransform: 'uppercase',
})

const FooterMenuList = ({ children }) => {
  return (
    <ul
      css={{
        listStyle: 'none',
        paddingLeft: 0,
      }}
    >
      {children.length &&
        children.map((item, index) => (
          <li
            key={index}
            css={{
              paddingTop: '5px',
              '& a': {
                opacity: 0.7,
                color: 'white',
                '&:hover, &:active, &:focus': {
                  opacity: 1,
                  textDecoration: 'none',
                },
              },
            }}
          >
            {item}
          </li>
        ))}
    </ul>
  )
}

FooterMenuList.propTypes = {
  children: PropTypes.string,
}

const SocialIconsList = ({ children }) => {
  return (
    <ul
      css={{
        listStyle: 'none',
        paddingLeft: 0,
        fontSize: 0,
      }}
    >
      {children.length &&
        children.map((item, index) => (
          <li
            key={index}
            css={{
              display: 'inline-block',
              marginRight: '16px',
              marginBottom: '16px',
              '& a': {
                paddingTop: '10px',
                height: '40px',
                width: '40px',
                backgroundColor: '#FFFFFF',
                fontSize: '20px',
                textAlign: 'center',
                borderRadius: '50%',
                opacity: 0.7,
                '&:hover,&:active,&:focus': {
                  opacity: 1,
                  textDecoration: 'none',
                },
              },
            }}
          >
            {item}
          </li>
        ))}
    </ul>
  )
}

SocialIconsList.propTypes = {
  children: PropTypes.string,
}

const Footer = () => {
  return (
    <footer
      css={{
        color: 'white',
        backgroundColor: '#00629E',
        backgroundImage: `url(${wedge})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: '40%',
        paddingTop: '70px',
        paddingBottom: '70px',
      }}
    >
      <Grid>
        <img
          css={{
            width: '100px',
            marginBottom: '50px',
          }}
          src={logo}
          alt="DEVit logo"
        />
        <Row>
          <Col
            md={6}
            lg={3}
            css={{
              '@media (min-width: $screen-md-min) and (max-width: $screen-lg-min)': {
                minHeight: '350px',
              },
            }}
          >
            <FooterMenuWrapper>
              <FooterMenuHeader>ABOUT US</FooterMenuHeader>
              <FooterMenuList>
                <a href="/about">About</a>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/devitconf">
                  Blog
                </a>
                <a href="/press">Press</a>
                <a href="/code-of-conduct">Code of Conduct</a>
              </FooterMenuList>
            </FooterMenuWrapper>
          </Col>
          <Col
            md={6}
            lg={3}
            css={{
              '@media (min-width: $screen-md-min) and (max-width: $screen-lg-min)': {
                minHeight: '350px',
              },
            }}
          >
            <FooterMenuWrapper>
              <FooterMenuHeader>DEVit 2018</FooterMenuHeader>
              <FooterMenuList>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="{{ site.data.config.tickets.url }}"
                >
                  Buy tickets
                </a>
                <a href="/#speakers">Speakers</a>
              </FooterMenuList>
            </FooterMenuWrapper>
          </Col>
          <Col
            md={6}
            lg={3}
            css={{
              '@media (min-width: $screen-md-min) and (max-width: $screen-lg-min)': {
                minHeight: '350px',
              },
            }}
          >
            <FooterMenuWrapper>
              <FooterMenuHeader>PAST</FooterMenuHeader>
              <FooterMenuList>
                <a href="http://devitconf.org/2017">DEVit 2017</a>
                <a href="http://devitconf.org/2016">DEVit 2016</a>
                <a href="http://devitconf.org/2015">DEVit 2015</a>
              </FooterMenuList>
            </FooterMenuWrapper>
          </Col>
          <Col
            md={6}
            lg={3}
            css={{
              '@media (min-width: $screen-md-min) and (max-width: $screen-lg-min)': {
                minHeight: '350px',
              },
            }}
          >
            <FooterMenuWrapper>
              <FooterMenuHeader>Social</FooterMenuHeader>
              <SocialIconsList>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/DEVitConf"
                  className="fab fa-facebook-f"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/devitconf"
                  className="fab fa-twitter"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCrKmMv6c6oqZPYC7zzbP-RQ"
                  className="fab fa-youtube"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/devitconf/"
                  className="fab fa-instagram"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/11399285/"
                  className="fab fa-linkedin"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.medium.com/@devitconf"
                  className="fab fa-medium"
                />
              </SocialIconsList>
              <div className="footer-menu__header">
                <i className="fab fa-slack" /> Slack
                <form className="slack-form" method="post" action="#">
                  <div className="input-group">
                    <input
                      name="email"
                      type="email"
                      className="slack-field"
                      placeholder="Enter your email"
                    />
                    <span className="input-group-btn">
                      <button className="slack-submit" type="submit">
                        <i className="fas fa-long-arrow-alt-right" />
                      </button>
                    </span>
                  </div>
                  <div className="slack-form__results" />
                </form>
              </div>
            </FooterMenuWrapper>
          </Col>
        </Row>
        <Row className="copyrights">
          <CopyrightText>© 2018</CopyrightText>
          <CopyrightLink
            href="https://github.com/skgtech/devit/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            SKGTech Contributors
          </CopyrightLink>
          <CopyrightText>, Licensed under</CopyrightText>
          <CopyrightLink
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons 4.0
          </CopyrightLink>
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer
